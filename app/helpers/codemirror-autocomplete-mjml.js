/* eslint-disable */
import CodeMirror from 'codemirror'

const tags = {
    "mj-accordion": {
        "attrs": {
            "container-background-color": null,
            "border": null,
            "font-family": null,
            "icon-align": null,
            "icon-wrapped-url": null,
            "icon-wrapped-alt": null,
            "icon-unwrapped-url": null,
            "icon-unwrapped-alt": null,
            "icon-position": null,
            "icon-height": null,
            "icon-width": null,
            "padding-bottom": null,
            "padding-left": null,
            "padding-right": null,
            "padding-top": null,
            "padding": null,
            "css-class": null
        }
    },
    "mj-accordion-element": {
        "attrs": {
            "background-color": null,
            "font-family": null,
            "icon-align": null,
            "icon-wrapped-url": null,
            "icon-wrapped-alt": null,
            "icon-unwrapped-url": null,
            "icon-unwrapped-alt": null,
            "icon-position": null,
            "icon-height": null,
            "icon-width": null,
            "css-class": null
        }
    },
    "mj-accordion-title": {
        "attrs": {
            "background-color": null,
            "color": null,
            "font-family": null,
            "font-size": null,
            "padding-bottom": null,
            "padding-left": null,
            "padding-right": null,
            "padding-top": null,
            "padding": null,
            "css-class": null
        }
    },
    "mj-accordion-text": {
        "attrs": {
            "background-color": null,
            "color": null,
            "font-family": null,
            "font-size": null,
            "padding-bottom": null,
            "padding-left": null,
            "padding-right": null,
            "padding-top": null,
            "padding": null,
            "css-class": null
        }
    },
    "mj-button": {
        "attrs": {
            "background-color": null,
            "container-background-color": null,
            "border": null,
            "border-bottom": null,
            "border-left": null,
            "border-right": null,
            "border-top": null,
            "border-radius": null,
            "box-shadow": null,
            "font-style": null,
            "font-size": null,
            "font-weight": null,
            "font-family": null,
            "color": null,
            "line-height": null,
            "text-align": null,
            "text-decoration": null,
            "text-transform": null,
            "align": null,
            "vertical-align": null,
            "href": null,
            "rel": null,
            "inner-padding": null,
            "padding": null,
            "padding-top": null,
            "padding-bottom": null,
            "padding-left": null,
            "padding-right": null,
            "width": null,
            "height": null,
            "css-class": null
        }
    },
    "mj-carousel": {
        "attrs": {
            "align": null,
            "border-radius": null,
            "background-color": null,
            "thumbnails": null,
            "tb-border": null,
            "tb-border-radius": null,
            "tb-hover-border-color": null,
            "tb-selected-border-color": null,
            "tb-width": null,
            "left-icon": null,
            "right-icon": null,
            "icon-width": null,
            "css-class": null
        }
    },
    "mj-carousel-image": {
        "attrs": {
            "src": null,
            "thumbnails-src": null,
            "href": null,
            "rel": null,
            "alt": null,
            "title": null,
            "css-class": null
        }
    },
    "mj-column": {
        "attrs": {
            "background-color": null,
            "border": null,
            "border-bottom": null,
            "border-left": null,
            "border-right": null,
            "border-top": null,
            "border-radius": null,
            "width": null,
            "vertical-align": null,
            "css-class": null
        }
    },
    "mj-container": {
        "attrs": {
            "css-class": null,
            "width": null,
            "background-color": null
        }
    },
    "mj-divider": {
        "attrs": {
            "border-color": null,
            "border-style": null,
            "border-width": null,
            "width": null,
            "container-background-color": null,
            "padding": null,
            "padding-top": null,
            "padding-bottom": null,
            "padding-left": null,
            "padding-right": null,
            "css-class": null
        }
    },
    "mj-group": {
        "attrs": {
            "width": null,
            "vertical-align": null,
            "background-color": null,
            "css-class": null
        }
    },
    "mj-font": {
        "attrs": {
            "href": null,
            "name": null,
            "css-class": null
        }
    },
    "mj-hero": {
        "attrs": {
            "width": null,
            "mode": null,
            "height": null,
            "background-width": null,
            "background-height": null,
            "background-url": null,
            "background-color": null,
            "background-position": null,
            "padding": null,
            "padding-top": null,
            "padding-right": null,
            "padding-left": null,
            "padding-bottom": null,
            "vertical-align": null,
            "css-class": null
        }
    },
    "mj-hero-content": {
        "attrs": {
            "width": null,
            "align": null,
            "background-color": null,
            "padding": null,
            "padding-top": null,
            "padding-right": null,
            "padding-left": null,
            "padding-bottom": null,
            "css-class": null
        }
    },
    "mj-image": {
        "attrs": {
            "padding": null,
            "padding-top": null,
            "padding-bottom": null,
            "padding-left": null,
            "padding-right": null,
            "container-background-color": null,
            "border": null,
            "border-radius": null,
            "width": null,
            "height": null,
            "src": null,
            "href": null,
            "rel": null,
            "alt": null,
            "align": null,
            "title": null,
            "css-class": null
        }
    },
    "mj-invoice": {
        "attrs": {
            "align": null,
            "color": null,
            "font-family": null,
            "font-size": null,
            "line-height": null,
            "border": null,
            "container-background-color": null,
            "padding": null,
            "padding-top": null,
            "padding-bottom": null,
            "padding-left": null,
            "padding-right": null,
            "intl": null,
            "format": null,
            "css-class": null
        }
    },
    "mj-invoice-item": {
        "attrs": {
            "color": null,
            "font-family": null,
            "font-size": null,
            "line-height": null,
            "border": null,
            "text-align": null,
            "padding": null,
            "padding-top": null,
            "padding-bottom": null,
            "padding-left": null,
            "padding-right": null,
            "name": null,
            "price": null,
            "quantity": null,
            "css-class": null
        }
    },
    "mj-list": {
        "attrs": {
            "color": null,
            "font-family": null,
            "font-size": null,
            "line-height": null,
            "padding": null,
            "padding-top": null,
            "padding-bottom": null,
            "padding-left": null,
            "padding-right": null,
            "css-class": null
        }
    },
    "mj-location": {
        "attrs": {
            "color": null,
            "font-family": null,
            "font-size": null,
            "font-weight": null,
            "href": null,
            "rel": null,
            "padding": null,
            "padding-top": null,
            "padding-bottom": null,
            "padding-left": null,
            "padding-right": null,
            "img-src": null,
            "css-class": null
        }
    },
    "mj-navbar": {
        "attrs": {
            "full-width": null,
            "border": null,
            "border-bottom": null,
            "border-left": null,
            "border-right": null,
            "border-top": null,
            "border-radius": null,
            "background-color": null,
            "background-url": null,
            "background-repeat": null,
            "background-size": null,
            "vertical-align": null,
            "text-align": null,
            "padding": null,
            "padding-top": null,
            "padding-bottom": null,
            "padding-left": null,
            "padding-right": null,
            "css-class": null
        }
    },
    "mj-inline-links": {
        "attrs": {
            "hamburger": null,
            "align": null,
            "ico-open": null,
            "ico-close": null,
            "ico-padding": null,
            "ico-padding-top": null,
            "ico-padding-right": null,
            "ico-padding-bottom": null,
            "ico-padding-left": null,
            "ico-align": null,
            "ico-color": null,
            "ico-font-size": null,
            "ico-font-family": null,
            "ico-text-transform": null,
            "ico-text-decoration": null,
            "ico-line-height": null,
            "css-class": null
        }
    },
    "mj-link": {
        "attrs": {
            "color": null,
            "font-family": null,
            "font-size": null,
            "font-style": null,
            "font-weight": null,
            "line-height": null,
            "text-decoration": null,
            "text-transform": null,
            "padding": null,
            "padding-top": null,
            "padding-bottom": null,
            "padding-left": null,
            "padding-right": null,
            "rel": null,
            "css-class": null
        }
    },
    "mj-section": {
        "attrs": {
            "full-width": null,
            "border": null,
            "border-bottom": null,
            "border-left": null,
            "border-right": null,
            "border-top": null,
            "border-radius": null,
            "background-color": null,
            "background-url": null,
            "background-repeat": null,
            "background-size": null,
            "vertical-align": null,
            "text-align": null,
            "padding": null,
            "padding-top": null,
            "padding-bottom": null,
            "padding-left": null,
            "padding-right": null,
            "direction": null,
            "css-class": null
        }
    },
    "mj-social": {
        "attrs": {
            "border-radius": null,
            "facebook-content": null,
            "facebook-href": null,
            "facebook-rel": null,
            "facebook-icon-color": null,
            "font-family": null,
            "font-size": null,
            "google-content": null,
            "google-href": null,
            "google-rel": null,
            "google-icon-color": null,
            "icon-size": null,
            "instagram-content": null,
            "instagram-href": null,
            "instagram-rel": null,
            "instagram-icon-color": null,
            "line-height": null,
            "linkedin-content": null,
            "linkedin-href": null,
            "linkedin-rel": null,
            "linkedin-icon-color": null,
            "mode": null,
            "pinterest-content": null,
            "pinterest-href": null,
            "pinterest-rel": null,
            "pinterest-icon-color": null,
            "text-decoration": null,
            "text-mode": null,
            "twitter-content": null,
            "twitter-href": null,
            "twitter-rel": null,
            "twitter-icon-color": null,
            "align": null,
            "color": null,
            "base-url": null,
            "display": null,
            "inner-padding": null,
            "padding": null,
            "padding-top": null,
            "padding-bottom": null,
            "padding-left": null,
            "padding-right": null,
            "container-background-color": null,
            "css-class": null
        }
    },
    "mj-spacer": {
        "attrs": {
            "height": null,
            "css-class": null
        }
    },
    "mj-table": {
        "attrs": {
            "color": null,
            "cellpadding": null,
            "cellspacing": null,
            "font-family": null,
            "font-size": null,
            "line-height": null,
            "container-background-color": null,
            "padding": null,
            "padding-top": null,
            "padding-bottom": null,
            "padding-left": null,
            "padding-right": null,
            "width": null,
            "table-layout": null,
            "css-class": null
        }
    },
    "mj-text": {
        "attrs": {
            "css-class": null
        }
    },
    "mj-wrapper": {
        "attrs": {
            "full-width": null,
            "border": null,
            "border-bottom": null,
            "border-left": null,
            "border-right": null,
            "border-top": null,
            "border-radius": null,
            "background-color": null,
            "background-url": null,
            "background-repeat": null,
            "background-size": null,
            "vertical-align": null,
            "text-align": null,
            "padding": null,
            "padding-top": null,
            "padding-bottom": null,
            "padding-left": null,
            "padding-right": null,
            "css-class": null
        }
    }
}

        
        export function completeAfter(cm, pred) {
          var cur = cm.getCursor();
          if (!pred || pred()) setTimeout(function() {
            if (!cm.state.completionActive)
            cm.showHint({completeSingle: false});
          }, 100);
          return CodeMirror.Pass;
        }
        export function completeIfAfterLt(cm) {
          return completeAfter(cm, function() {
            var cur = cm.getCursor();
            return cm.getRange(CodeMirror.Pos(cur.line, cur.ch - 1), cur) == "<";
          });
        }
        export function completeIfInTag(cm) {
          return completeAfter(cm, function() {
            var tok = cm.getTokenAt(cm.getCursor());
            if (tok.type == "string" && (!/['"]/.test(tok.string.charAt(tok.string.length - 1)) || tok.string.length == 1)) return false;
            var inner = CodeMirror.innerMode(cm.getMode(), tok.state).state;
            return inner.tagName;
          });
        }

exports.autocompleteTags = tags
