import React, { Component } from 'react'
import get from 'lodash/get'
import { connect } from 'react-redux'
import debounce from 'lodash/debounce'
import { Creatable as Select } from 'react-select'
import uniq from 'lodash/uniq'

import IconAdd from 'react-icons/md/add'

import sendEmail from 'helpers/sendEmail'

import { isModalOpened, closeModal } from 'reducers/modals'
import { addAlert } from 'reducers/alerts'
import { updateSettings } from 'actions/settings'

import MailjetInfos from 'components/MailjetInfos'
import Modal from 'components/Modal'
import Button from 'components/Button'

@connect(state => {
  const SenderEmail = state.settings.getIn(['api', 'SenderEmail'], '')
  const TargetEmails = state.settings.getIn(['api', 'TargetEmails'], [])
  return {
    content: get(state, 'preview.content', ''),
    isOpened: isModalOpened(state, 'send'),
    APIKey: state.settings.getIn(['api', 'APIKey'], ''),
    APISecret: state.settings.getIn(['api', 'APISecret'], ''),
    SenderEmail,
    TargetEmails,
    emails: uniq([
      ...SenderEmail ? [SenderEmail] : [],
      ...TargetEmails,
    ]).map(email => ({ label: email, value: email })),
  }
}, {
  addAlert,
  closeModal,
  updateSettings,
})
class SendModal extends Component {

  state = {
    emails: this.props.emails,
    APIKey: '',
    APISecret: '',
    SenderEmail: '',
    TargetEmails: [],
  }

  componentWillMount () {
    this.setAPIState(this.props)
  }

  componentWillReceiveProps (nextProps) {
    const didOpened = !this.props.isOpened && nextProps.isOpened
    if (didOpened) {
      this.setAPIState(nextProps)
    }
  }

  handleClose = () => this.props.closeModal('send')

  handleChangeInfo = (key, val) => {
    this.setState({ [key]: val })
    this.debounceSaveInConfig()
  }

  handleChangeTargetEmails = value => {
    const emails = value.map(v => v.value)
    this.props.addToLastUsedEmails(emails)
    this.setState({ TargetEmails: emails })
    this.debounceSaveInConfig()
  }

  handleSubmit = async e => {
    e.stopPropagation()
    e.preventDefault()

    const {
      addAlert,
      content,
    } = this.props

    const {
      APIKey,
      APISecret,
      SenderEmail,
      TargetEmails,
    } = this.state

    try {
      await sendEmail({
        content,
        APIKey,
        APISecret,
        SenderEmail,
        TargetEmails,
      })
      window.requestIdleCallback(() => addAlert('Mail has been sent', 'success'))
      window.requestIdleCallback(this.handleClose)
    } catch (e) { // eslint-disable-line
      addAlert('Something went wrong', 'error')
    }
  }

  setAPIState = props => {
    this.setState({
      APIKey: props.APIKey,
      APISecret: props.APISecret,
      SenderEmail: props.SenderEmail,
      TargetEmails: props.TargetEmails,
    })
  }

  debounceSaveInConfig = debounce(() => {
    this.props.updateSettings(settings => {
      return settings
        .setIn(['api', 'APIKey'], this.state.APIKey)
        .setIn(['api', 'APISecret'], this.state.APISecret)
        .setIn(['api', 'SenderEmail'], this.state.SenderEmail)
        .setIn(['api', 'TargetEmails'], this.state.TargetEmails)
    })
  }, 1e3)

  render () {

    const {
      isOpened,
    } = this.props

    const {
      emails,
      APIKey,
      APISecret,
      SenderEmail,
      TargetEmails,
    } = this.state

    const isValid = !!APIKey && !!APISecret && !!SenderEmail && !!TargetEmails.length

    return (
      <Modal
        isOpened={isOpened}
        onClose={this.handleClose}
      >
        <div className='Modal--label'>
          {'Send'}
        </div>

        <form onSubmit={this.handleSubmit}>

          <MailjetInfos
            APIKey={APIKey}
            APISecret={APISecret}
            SenderEmail={SenderEmail}
            onChange={this.handleChangeInfo}
          />

          <div className='flow-v-10 mt-20 d-f fd-c ai-fs jc-fs'>
            <div className='t-small'>
              {'Target Emails'}
              {!!TargetEmails.length && ` (${TargetEmails.length})`}
              {':'}
            </div>
            <Select
              className='SelectDark'
              multi
              style={{ width: 556 }}
              value={TargetEmails}
              options={emails}
              onChange={this.handleChangeTargetEmails}
              promptTextCreator={e => <span><IconAdd className='mr-5' />{'Add '}<b>{e}</b></span>}
            />
          </div>

          <input type='submit' style={{ display: 'none' }} />
        </form>

        <div className='ModalFooter'>
          <Button
            primary
            onClick={this.handleSubmit}
            disabled={!isValid}
          >
            {'Send'}
          </Button>
          <Button
            transparent
            onClick={this.handleClose}
          >
            {'Cancel'}
          </Button>
        </div>
      </Modal>
    )
  }

}

export default SendModal
