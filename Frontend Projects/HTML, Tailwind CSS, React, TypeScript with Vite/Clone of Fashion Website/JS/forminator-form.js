/*!
 * WPMU DEV Forminator UI
 * Copyright 2019 Incsub (https://incsub.com)
 * Licensed under GPL v3 (http://www.gnu.org/licenses/gpl-3.0.html)
 */
/*!
 * WPMU DEV Forminator UI
 * Copyright 2019 Incsub (https://incsub.com)
 * Licensed under GPL v3 (http://www.gnu.org/licenses/gpl-3.0.html)
 */
function ownKeys(t, e) {
    var o = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e && (i = i.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), o.push.apply(o, i)
    }
    return o
}

function _objectSpread(t) {
    for (var e = 1; e < arguments.length; e++) {
        var o = null != arguments[e] ? arguments[e] : {};
        e % 2 ? ownKeys(Object(o), !0).forEach(function(e) {
            _defineProperty(t, e, o[e])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : ownKeys(Object(o)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
        })
    }
    return t
}

function _defineProperty(t, e, o) {
    return (e = _toPropertyKey(e)) in t ? Object.defineProperty(t, e, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = o, t
}

function _toPropertyKey(t) {
    var e = _toPrimitive(t, "string");
    return "symbol" == _typeof(e) ? e : e + ""
}

function _toPrimitive(t, e) {
    if ("object" != _typeof(t) || !t) return t;
    var o = t[Symbol.toPrimitive];
    if (void 0 !== o) {
        var i = o.call(t, e || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === e ? String : Number)(t)
}

function _typeof(t) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, _typeof(t)
}! function(t) {
    "use strict";
    "object" !== _typeof(window.FUI) && (window.FUI = {}), FUI.inputStates = function(e) {
        var o = t(e),
            i = o.closest("form");
        if (o.is("input") || i.is(".forminator-poll") && (i.is(".forminator-ui") || i.is(".forminator-custom-form"))) return o.each(function() {
            var e, o;
            e = t(this), o = e.closest(".forminator-field"), e.mouseover(function(t) {
                    o.addClass("forminator-is_hover"), t.stopPropagation()
                }).mouseout(function(t) {
                    o.removeClass("forminator-is_hover"), t.stopPropagation()
                }),
                function(e) {
                    var o = t(e),
                        i = o.closest(".forminator-field");
                    o.focus(function(t) {
                        i.addClass("forminator-is_active"), t.stopPropagation()
                    }).blur(function(t) {
                        i.removeClass("forminator-is_active"), t.stopPropagation()
                    })
                }(this),
                function(e) {
                    var o = t(e),
                        i = o.closest(".forminator-field");
                    "" !== o.val().trim() && i.addClass("forminator-is_filled"), o.on("change", function() {
                        "" !== o.val().trim() ? i.addClass("forminator-is_filled") : i.removeClass("forminator-is_filled")
                    })
                }(this)
        }), this
    }
}(jQuery),
function(t) {
    "use strict";
    "object" !== _typeof(window.FUI) && (window.FUI = {}), FUI.inputMaterial = function(e) {
        var o = t(e),
            i = o.closest(".forminator-field"),
            a = i.find(".forminator-label"),
            r = o.closest("form");
        if (o.is("input") || r.is(".forminator-poll") && (r.is(".forminator-ui") || r.is(".forminator-custom-form"))) return o.parent().hasClass("forminator-input--wrap") || o.wrap('<div class="forminator-input--wrap"></div>'), a.length && (a.addClass("forminator-floating--input"), i.find(".forminator-input-with-icon").length && a.addClass("forminator-has_icon"), i.find(".forminator-input-with-phone").length && (a.addClass("forminator-has_phone"), i.find(".intl-tel-input").hasClass("allow-dropdown") && a.addClass("allow-dropdown"))), this
    }
}(jQuery),
function(t) {
    "use strict";
    "object" !== _typeof(window.FUI) && (window.FUI = {}), FUI.textareaStates = function(e) {
        var o = t(e),
            i = o.closest("form");
        if (o.is("textarea") || i.is(".forminator-ui") || i.is(".forminator-custom-form")) return o.each(function() {
            var e, o;
            e = t(this), o = e.closest(".forminator-field"), e.mouseover(function(t) {
                    o.addClass("forminator-is_hover"), t.stopPropagation()
                }).mouseout(function(t) {
                    o.removeClass("forminator-is_hover"), t.stopPropagation()
                }),
                function(e) {
                    var o = t(e),
                        i = o.closest(".forminator-field");
                    o.focus(function(t) {
                        i.addClass("forminator-is_active"), t.stopPropagation()
                    }).blur(function(t) {
                        i.removeClass("forminator-is_active"), t.stopPropagation()
                    })
                }(this),
                function(e) {
                    var o = t(e),
                        i = o.closest(".forminator-field");
                    o.on("load", function() {
                        "" !== o.val().trim() && i.addClass("forminator-is_filled")
                    }), o.on("change", function() {
                        "" !== o.val().trim() ? i.addClass("forminator-is_filled") : i.removeClass("forminator-is_filled")
                    })
                }(this)
        }), this
    }
}(jQuery),
function(t) {
    "use strict";
    "object" !== _typeof(window.FUI) && (window.FUI = {}), FUI.textareaMaterial = function(e) {
        var o = t(e),
            i = o.closest(".forminator-field"),
            a = i.find(".forminator-label"),
            r = o.closest("form");
        if ((o.is("textarea") || r.is(".forminator-ui") || r.is(".forminator-custom-form")) && !o.hasClass("wp-editor-area")) return function() {
            if (o.parent().hasClass("forminator-textarea--wrap") || o.wrap('<div class="forminator-textarea--wrap"></div>'), a.length) {
                var t = (0 === a.height() ? 20 : a.height()) + 9;
                a.addClass("forminator-floating--textarea"), i.css({
                    position: "relative"
                }), o.val() && i.addClass("forminator-is_filled"), i.hasClass("forminator-is_filled") && i.hasClass("forminator-is_active") || a.css({
                    "padding-top": t + "px"
                }), o.css({
                    "padding-top": t + "px"
                })
            }
        }(), this
    }
}(jQuery),
function(t) {
    "use strict";
    "object" !== _typeof(window.FUI) && (window.FUI = {}), FUI.radioStates = function(e) {
        var o = t(e),
            i = o.find("input");
        if (o.is("label") && "radio" === i.prop("type")) return i.each(function() {
            t(this).on("click", function() {
                var e = t(this),
                    o = e.parent(),
                    i = o.closest(".forminator-field").find(".forminator-radio");
                i.find("input").prop("checked", !1), i.removeClass("forminator-is_checked"), e.prop("checked", "checked"), o.addClass("forminator-is_checked")
            })
        }), this
    }
}(jQuery),
function(t) {
    "use strict";
    "object" !== _typeof(window.FUI) && (window.FUI = {}), FUI.checkboxStates = function(e) {
        var o = t(e),
            i = o.find("input");
        if (o.is("label") && "checkbox" === i.prop("type")) return i.each(function() {
            t(this).on("click", function() {
                var e = t(this).parent();
                e.is(".forminator-is_checked") ? e.removeClass("forminator-is_checked") : e.addClass("forminator-is_checked")
            })
        }), this
    }
}(jQuery),
function(t) {
    "use strict";
    "object" !== _typeof(window.FUI) && (window.FUI = {}), FUI.multiSelectStates = function(e) {
        var o = t(e),
            i = o.find(".forminator-option"),
            a = i.find("input");
        if (o.is(".forminator-multiselect") && 0 !== i.length) return a.each(function() {
            t(this).on("click", function() {
                var e = t(this).parent();
                e.is(".forminator-is_checked") ? e.removeClass("forminator-is_checked") : e.addClass("forminator-is_checked")
            })
        }), this
    }
}(jQuery),
function(t) {
    "use strict";
    "object" !== _typeof(window.FUI) && (window.FUI = {}), FUI.select = {}, FUI.select.formatCheckbox = function(t, e) {
        var o = t.text,
            i = t.selected,
            a = t.id || o.toLowerCase().replace(/\s+/g, "-"),
            r = document.createElement("label");
        r.setAttribute("for", a), r.className = "forminator-checkbox";
        var n = document.createElement("input");
        n.type = "checkbox", n.value = o, n.id = a, i && (n.checked = !0);
        var s = document.createElement("span");
        s.className = "forminator-checkbox-box", s.setAttribute("aria-hidden", "true");
        var l = document.createElement("span");
        return l.className = "forminator-select-label", l.textContent = o, r.appendChild(n), r.appendChild(s), r.appendChild(l), r
    }, FUI.select2 = function() {
        t(".forminator-custom-form").each(function() {
            var e = t(this),
                o = e.data("form-id"),
                i = e.find(".forminator-select2");
            t.each(["bold", "flat", "default", "basic", "material", "none"], function(a, r) {
                var n, s = "en",
                    l = "Select",
                    d = -1,
                    c = !1;
                e.hasClass("forminator-design--" + r) && i.length && i.each(function() {
                    var e = t(this),
                        i = e.closest(".sui-dialog-content"),
                        a = i.length ? i : e.closest(".elementor-popup-modal"),
                        f = "forminator-custom-form-" + o + " forminator-dropdown--" + r;
                    n = !0 === e.data("rtl-support") || "rtl" === e.closest("html").attr("dir") ? "rtl" : "ltr", l = e.data("placeholder") ? e.data("placeholder") : "Select", s = e.data("language") ? e.data("language") : "en", d = !0 === e.data("search") ? 0 : -1, !0 === e.data("checkbox") ? (c = !0, f += " forminator-dropdown--checkbox") : c = !1, e.prop("multiple") && (f += " forminator-dropdown--multiple"), a.length || (a = t(document.body)), e.FUIselect2(_objectSpread({
                        dir: n,
                        language: s,
                        placeholder: l,
                        dropdownCssClass: f,
                        minimumResultsForSearch: d,
                        dropdownParent: a
                    }, c && {
                        closeOnSelect: !1,
                        templateResult: FUI.select.formatCheckbox,
                        escapeMarkup: function(t) {
                            return t
                        }
                    })).on("select2:opening", function() {
                        e.data("search-placeholder") ? e.data("select2").$dropdown.find(":input.select2-search__field").prop("placeholder", e.data("search-placeholder")) : e.data("select2").$dropdown.find(":input.select2-search__field").prop("placeholder", e.data("placeholder") ? e.data("placeholder") : "Search"), (e.closest(".hustle-popup").length || e.closest(".hustle-slidein")) && t(document.body).addClass("forminator-hustle-dropdown-fix")
                    }).on("select2:closing", function() {
                        t(document.body).removeClass("forminator-hustle-dropdown-fix")
                    })
                })
            })
        })
    }
}(jQuery),
function() {
    "use strict";
    "object" !== _typeof(window.FUI) && (window.FUI = {});
    var t = t || {};
    t.KeyCode = {
        BACKSPACE: 8,
        TAB: 9,
        RETURN: 13,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46
    }, t.Utils = t.Utils || {}, t.Utils.remove = function(t) {
        return t.remove && "function" == typeof t.remove ? t.remove() : !(!t.parentNode || !t.parentNode.removeChild || "function" != typeof t.parentNode.removeChild) && t.parentNode.removeChild(t)
    }, t.Utils.isFocusable = function(t) {
        if (0 < t.tabIndex || 0 === t.tabIndex && null !== t.getAttribute("tabIndex")) return !0;
        if (t.disabled) return !1;
        switch (t.nodeName) {
            case "A":
                return !!t.href && "ignore" != t.rel;
            case "INPUT":
                return "hidden" != t.type && "file" != t.type;
            case "BUTTON":
            case "SELECT":
            case "TEXTAREA":
                return !0;
            default:
                return !1
        }
    }, t.Utils.simulateClick = function(t) {
        var e = new MouseEvent("click", {
            bubbles: !0,
            cancelable: !0,
            view: window
        });
        t.dispatchEvent(e)
    }, t.Utils.IgnoreUtilFocusChanges = !1, t.Utils.dialogOpenClass = "forminator-authentication-enabled", t.Utils.focusFirstDescendant = function(e) {
        for (var o = 0; o < e.childNodes.length; o++) {
            var i = e.childNodes[o];
            if (t.Utils.attemptFocus(i) || t.Utils.focusFirstDescendant(i)) return !0
        }
        return !1
    }, t.Utils.focusLastDescendant = function(e) {
        for (var o = e.childNodes.length - 1; 0 <= o; o--) {
            var i = e.childNodes[o];
            if (t.Utils.attemptFocus(i) || t.Utils.focusLastDescendant(i)) return !0
        }
        return !1
    }, t.Utils.attemptFocus = function(e) {
        if (!t.Utils.isFocusable(e)) return !1;
        t.Utils.IgnoreUtilFocusChanges = !0;
        try {
            e.focus()
        } catch (t) {}
        return t.Utils.IgnoreUtilFocusChanges = !1, document.activeElement === e
    }, t.OpenDialogList = t.OpenDialogList || new Array(0), t.getCurrentDialog = function() {
        if (t.OpenDialogList && t.OpenDialogList.length) return t.OpenDialogList[t.OpenDialogList.length - 1]
    }, t.closeCurrentDialog = function() {
        var e = t.getCurrentDialog();
        return !!e && (e.close(), !0)
    }, t.handleEscape = function(e) {
        (e.which || e.keyCode) === t.Utils.ESC && t.closeCurrentDialog() && e.stopPropagation()
    }, document.addEventListener("keyup", t.handleEscape), t.Authentication = function(e, o, i) {
        if (this.dialogNode = document.getElementById(e), null === this.dialogNode) throw new Error('No element found with id="' + e + '".');
        var a = ["dialog", "alertdialog"];
        if (!(this.dialogNode.getAttribute("role") || "").trim().split(/\s+/g).some(function(t) {
                return a.some(function(e) {
                    return t === e
                })
            })) throw new Error("Dialog() requires a DOM element with ARIA role of dialog or alertdialog.");
        var r = "forminator-authentication";
        if (this.dialogNode.parentNode.classList.contains(r) ? this.backdropNode = this.dialogNode.parentNode : (this.backdropNode = document.createElement("div"), this.backdropNode.className = r, this.backdropNode.data("markup", "new"), this.dialogNode.parentNode.insertBefore(this.backdropNode, this.dialogNodev), this.backdropNode.appendChild(this.dialogNode)), this.backdropNode.classList.add("forminator-active"), document.body.parentNode.classList.add(t.Utils.dialogOpenClass), "string" == typeof o) this.focusAfterClosed = document.getElementById(o);
        else {
            if ("object" !== _typeof(o)) throw new Error("the focusAfterClosed parameter is required for the aria.Authentication constructor.");
            this.focusAfterClosed = o
        }
        "string" == typeof i ? this.focusFirst = document.getElementById(i) : "object" === _typeof(i) ? this.focusFirst = i : this.focusFirst = null;
        var n = document.createElement("div");
        this.preNode = this.dialogNode.parentNode.insertBefore(n, this.dialogNode), this.preNode.tabIndex = 0;
        var s = document.createElement("div");
        this.postNode = this.dialogNode.parentNode.insertBefore(s, this.dialogNode.nextSibling), this.postNode.tabIndex = 0, 0 < t.OpenDialogList.length && t.getCurrentDialog().removeListeners(), this.addListeners(), t.OpenDialogList.push(this), this.dialogNode.classList.add("forminator-authentication-fade-in"), this.dialogNode.classList.remove("forminator-authentication-fade-out"), this.focusFirst ? this.focusFirst.focus() : t.Utils.focusFirstDescendant(this.dialogNode), this.lastFocus = document.activeElement
    }, t.Authentication.prototype.close = function() {
        var e = this;
        t.OpenDialogList.pop(), this.removeListeners(), this.preNode.parentNode.removeChild(this.preNode), this.postNode.parentNode.removeChild(this.postNode), this.dialogNode.classList.add("forminator-content-fade-out"), this.dialogNode.classList.remove("forminator-content-fade-in"), this.focusAfterClosed.focus(), setTimeout(function() {
            e.backdropNode.classList.remove("forminator-active")
        }, 300), 0 < t.OpenDialogList.length ? t.getCurrentDialog().addListeners() : document.body.parentNode.classList.remove(t.Utils.dialogOpenClass)
    }, t.Authentication.prototype.addListeners = function() {
        document.addEventListener("focus", this.trapFocus, !0)
    }, t.Authentication.prototype.removeListeners = function() {
        document.removeEventListener("focus", this.trapFocus, !0)
    }, t.Authentication.prototype.trapFocus = function(e) {
        if (!t.Utils.IgnoreUtilFocusChanges) {
            var o = t.getCurrentDialog();
            o.dialogNode.contains(e.target) ? o.lastFocus = e.target : (t.Utils.focusFirstDescendant(o.dialogNode), o.lastFocus == document.activeElement && t.Utils.focusLastDescendant(o.dialogNode), o.lastFocus = document.activeElement)
        }
    }, FUI.openAuthentication = function(e, o, i) {
        new t.Authentication(e, o, i)
    }, FUI.closeAuthentication = function() {
        t.getCurrentDialog().close()
    }
}(),
function(t) {
    "use strict";
    "object" !== _typeof(window.FUI) && (window.FUI = {}), FUI.slider = function() {
        function e(t, e) {
            return a(t.find(".forminator-slider-amount").data("value-template") || "{slider-value}").replace("{slider-value}", '<span class="forminator-slider-value">' + a(String(e)) + "</span>")
        }

        function o(t, e, o, i, a) {
            var r = t.find(".forminator-slider-amount"),
                n = t.find(".forminator-slide").data("is-range");
            r.find(".forminator-slider-value-min").html(e), n && (i === a ? (r.find(".forminator-slider-separator").hide(), r.find(".forminator-slider-value-max").html("")) : (r.find(".forminator-slider-separator").show(), r.find(".forminator-slider-value-max").html(o)))
        }

        function i(t, e) {
            var o = parseFloat(t, 10);
            return isNaN(o) ? e : o
        }

        function a(t) {
            return "string" != typeof t ? "" : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
        }
        t(".forminator-slider").each(function() {
            var r = t(this),
                n = r.find(".forminator-slide"),
                s = r.find(".forminator-hidden-input"),
                l = r.hasClass("forminator-disabled"),
                d = r.find(".forminator-slider-limit"),
                c = n.data("is-range"),
                f = i(n.data("min"), 0),
                u = i(n.data("max"), 100),
                m = i(n.data("value"), f),
                p = i(n.data("value-max"), u),
                h = i(n.data("step"), 1),
                v = r.find(".forminator-slider-amount"),
                g = t('label[for="' + s.attr("id") + '"]');
            !0 !== n.data("init") && (n.slider(_objectSpread(_objectSpread({
                range: !!c || "min",
                min: f,
                max: u,
                disabled: l,
                step: h
            }, c ? {
                values: [m, p]
            } : {
                value: m
            }), {}, {
                create: function(i, s) {
                    var l = e(r, m),
                        g = c ? e(r, p) : null,
                        b = t(this).find(".ui-slider-handle");
                    n.data("init", !0), v.find(".forminator-slider-hidden-min").val(m).change(), c && v.find(".forminator-slider-hidden-max").val(p).change(),
                        function(e, o, i, a) {
                            if (!e.length) return;
                            var r = "all" === e.data("step-type");
                            e.empty(), e.css({
                                position: "relative",
                                height: "22px"
                            });
                            for (var n = o; n <= i; n += a)
                                if (r || n === o || n === i) {
                                    var s = Math.floor((i - o) / a),
                                        l = Math.floor((n - o) / a) / s * 100,
                                        d = "forminator-slider-limit-between";
                                    n === o ? d = "forminator-slider-limit-min" : n === i && (d = "forminator-slider-limit-max");
                                    var c = t('<span class="' + d + '">' + n + "</span>").css({
                                        left: l + "%",
                                        position: "absolute"
                                    });
                                    c.css("transform", "translateX(-50%)"), e.append(c)
                                }
                        }(d, f, u, h),
                        function(e, o) {
                            var i = a(o.data("min-label") || ""),
                                r = a(o.data("max-label") || ""),
                                n = t('<span class="forminator-slider-label-min"></span>').text(i),
                                s = t('<span class="forminator-slider-label-max"></span>').text(r),
                                l = t('<div class="forminator-slider-labels"></div>').append(n).append(s);
                            e.length && e.prev(".forminator-slide").length ? e.after(l) : e.length && e.next(".forminator-slide").length && e.before(l)
                        }(d, n), o(r, l, g, m, p), b.each(function(e) {
                            var o = 0 === e ? m : p;
                            t(this).attr({
                                role: "slider",
                                "aria-valuemin": f,
                                "aria-valuemax": u,
                                "aria-valuenow": o,
                                "aria-valuetext": o
                            })
                        })
                },
                slide: function(i, a) {
                    var n = c ? a.values[0] : a.value,
                        s = c ? a.values[1] : null,
                        l = e(r, n),
                        d = c ? e(r, s) : null,
                        f = t(this).find(".ui-slider-handle");
                    o(r, l, d, n, s), c ? (f.eq(0).attr({
                        "aria-valuenow": a.values[0],
                        "aria-valuetext": a.values[0]
                    }), f.eq(1).attr({
                        "aria-valuenow": a.values[1],
                        "aria-valuetext": a.values[1]
                    })) : f.eq(0).attr({
                        "aria-valuenow": a.value,
                        "aria-valuetext": a.value
                    })
                },
                stop: function(t, e) {
                    var o = c ? e.values[0] : e.value,
                        i = c ? e.values[1] : null;
                    e.handle === r.find(".ui-slider-handle")[0] ? v.find(".forminator-slider-hidden-min").val(o).change() : e.handle === r.find(".ui-slider-handle")[1] ? v.find(".forminator-slider-hidden-max").val(i).change() : v.find(".forminator-slider-hidden-min").val(o).change()
                }
            })), g.on("click", function() {
                var e = n.find(".ui-slider-handle");
                l || (c && 1 < e.length ? t(e[0]).focus() : e.focus())
            }))
        })
    }
}(jQuery),
function(t) {
    "use strict";
    var e = !1;
    "object" !== _typeof(window.FUI) && (window.FUI = {}), FUI.rating = function(o) {
        o.each(function() {
            var e, o = t(this),
                i = o.attr("id"),
                a = o.find("option").not(":disabled"),
                r = a.length,
                n = (o.attr("data-type") || "star").replace(/[^a-z0-9_-]/gi, ""),
                s = (o.attr("data-size") || "md").replace(/[^a-z0-9_-]/gi, ""),
                l = Number(o.find("option:selected").val()) || 0,
                d = t('<div class="forminator-rating-wrapper"></div>'),
                c = t("<span></span>").attr("data-id", i).attr("data-selected-value", l).addClass("forminator-rating-items").addClass("forminator-rating-" + s.replace(/[^a-z0-9_-]/gi, ""));
            for ("true" === (o.attr("data-init") || "false") && o.next(".forminator-rating-wrapper").remove(), e = 0; e < r; e++) {
                var f = Number(a.eq(e).val()),
                    u = f <= l ? "forminator-rating-item forminator-rating-selected" : "forminator-rating-item";
                c.append(t("<span>", {
                    class: u,
                    "data-value": f
                }).append(t("<i>", {
                    class: "forminator-icon-" + n,
                    "aria-hidden": "true"
                })))
            }
            o.attr("data-selected-value", l), o.attr("data-total-value", r), d.append(c), "true" === o.attr("data-suffix") && c.append('<span class="forminator-rating-suffix">(' + l + "/" + r + ")</span>"), o.after(d), o.attr("data-init", "true"), o.on("change", function() {
                var e = Number(t(this).val()) || 0,
                    o = t('[data-id="' + i + '"]'),
                    a = o.find(".forminator-rating-suffix");
                o.attr("data-selected-value", e), t(this).attr("data-selected-value", e), o.children().removeClass("forminator-rating-selected"), o.children().each(function() {
                    t(this).data("value") <= e && t(this).addClass("forminator-rating-selected")
                }), a.length && a.text("(" + e + "/" + o.children().not(".forminator-rating-suffix").length + ")")
            })
        }), e || (FUI.rating.events(), e = !0)
    }, FUI.rating.events = function() {
        t(document).on("mouseenter", ".forminator-rating-item", function() {
            var e = t(this);
            e.siblings().removeClass("forminator-rating-selected"), e.prevAll().addBack().addClass("forminator-rating-hover")
        }), t(document).on("mouseleave", ".forminator-rating-item", function() {
            var e = t(this),
                o = e.closest(".forminator-rating-items").data("id"),
                i = t("#" + o),
                a = Number(i.find("option:selected").val());
            e.prevAll().addBack().removeClass("forminator-rating-hover"), e.siblings().addBack().each(function() {
                t(this).data("value") <= a ? t(this).addClass("forminator-rating-selected") : t(this).removeClass("forminator-rating-selected")
            })
        }), t(document).on("click", ".forminator-rating-item", function() {
            var e = t(this),
                o = Number(e.data("value")),
                i = e.closest(".forminator-rating-items"),
                a = i.data("id"),
                r = t("#" + a),
                n = i.find(".forminator-rating-suffix");
            r.val(o).trigger("change"), i.attr("data-selected-value", o), r.attr("data-selected-value", o), e.siblings().removeClass("forminator-rating-selected"), e.prevAll().addBack().addClass("forminator-rating-selected"), n.length && n.text("(" + o + "/" + i.children().not(".forminator-rating-suffix").length + ")")
        }), t(document).on("focus", ".forminator-rating", function() {
            t(this).next(".forminator-rating-wrapper").addClass("forminator-rating-focused")
        }), t(document).on("blur", ".forminator-rating", function() {
            t(this).next(".forminator-rating-wrapper").removeClass("forminator-rating-focused")
        }), t(document).on("keydown", ".forminator-rating", function(e) {
            var o = t(this),
                i = o.find("option"),
                a = i.index(o.find("option:selected"));
            "ArrowUp" !== e.key && "ArrowRight" !== e.key && "ArrowDown" !== e.key && "ArrowLeft" !== e.key || e.preventDefault(), ("ArrowUp" === e.key || "ArrowRight" === e.key) && a < i.length - 1 ? i.eq(a + 1).prop("selected", !0).trigger("change") : ("ArrowDown" === e.key || "ArrowLeft" === e.key) && 0 < a && i.eq(a - 1).prop("selected", !0).trigger("change")
        })
    }
}(jQuery);

/*! jQuery Validation Plugin - v1.20.1 - 6/13/2024
 * https://jqueryvalidation.org/
 * Copyright (c) 2024 JÃ¶rn Zaefferer; Licensed MIT */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
                c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.on("submit.validate", function(b) {
                function d() {
                    var d, e;
                    return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), !(c.settings.submitHandler && !c.settings.debug) || (e = c.settings.submitHandler.call(c, c.currentForm, b), d && d.remove(), void 0 !== e && e)
                }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        },
        valid: function() {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function() {
                b = c.element(this) && b, b || (d = d.concat(c.errorList))
            }), c.errorList = d), b
        },
        rules: function(b, c) {
            var d, e, f, g, h, i, j = this[0],
                k = "undefined" != typeof this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != j && (!j.form && k && (j.form = this.closest("form")[0], j.name = this.attr("name")), null != j.form)) {
                if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {}, a.each(c.split(/\s/), function(a, b) {
                            i[b] = f[b], delete f[b]
                        }), i) : (delete e[j.name], f)
                }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
                    required: h
                }, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                    remote: h
                })), g
            }
        }
    });
    var b = function(a) {
        return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    };
    a.extend(a.expr.pseudos || a.expr[":"], {
        blank: function(c) {
            return !b("" + a(c).val())
        },
        filled: function(c) {
            var d = a(c).val();
            return null !== d && !!b("" + d)
        },
        unchecked: function(b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
                return c
            })
        }), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(b, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}."),
            step: a.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    var c = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
                    if (!this.form && c && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name")), d === this.form) {
                        var e = a.data(this.form, "validator"),
                            f = "on" + b.type.replace(/^validate/, ""),
                            g = e.settings;
                        g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b)
                    }
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c, d = this.currentForm,
                    e = this.groups = {};
                a.each(this.settings.groups, function(b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) {
                        e[c] = b
                    })
                }), c = this.settings.rules, a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function(b) {
                var c, d, e = this.clean(b),
                    f = this.validationTargetFor(e),
                    g = this,
                    h = !0;
                return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function(a, b) {
                    b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h))
                }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
            },
            showErrors: function(b) {
                if (b) {
                    var c = this;
                    a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function(a, b) {
                        return {
                            message: a,
                            element: c.findByName(b)[0]
                        }
                    }), this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(b)
            },
            resetElements: function(a) {
                var b;
                if (this.settings.unhighlight)
                    for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
                else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b, c = 0;
                for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
                return c
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(a) {
                a.not(this.containers).text(""), this.addWrapper(a).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
                } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function() {
                var b = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var d = this.name || a(this).attr("name"),
                        e = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
                    return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), e && (this.form = a(this).closest("form")[0], this.name = d), this.form === b.currentForm && (!(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0))
                })
            },
            clean: function(b) {
                return a(b)[0]
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([])
            },
            reset: function() {
                this.resetInternals(), this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset(), this.toHide = this.errorsFor(a)
            },
            elementValue: function(b) {
                var c, d, e = a(b),
                    f = b.type,
                    g = "undefined" != typeof e.attr("contenteditable") && "false" !== e.attr("contenteditable");
                return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = g ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f, g = a(b).rules(),
                    h = a.map(g, function(a, b) {
                        return b
                    }).length,
                    i = !1,
                    j = this.elementValue(b);
                this.abortRequest(b), "function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f && (j = f.call(b, j), delete g.normalizer);
                for (d in g) {
                    e = {
                        method: d,
                        parameters: g[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) {
                            i = !0;
                            continue
                        }
                        if (i = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1
                    } catch (k) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), k
                    }
                }
                if (!i) return this.objectLength(g) && this.successList.push(b), !0
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a]
            },
            defaultMessage: function(b, c) {
                "string" == typeof c && (c = {
                    method: c
                });
                var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
                    e = /\$?\{(\d+)\}/g;
                return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
            },
            formatAndAdd: function(a, b) {
                var c = this.defaultMessage(a, b);
                this.errorList.push({
                    message: c,
                    element: a,
                    method: b.method
                }), this.errorMap[a.name] = c, this.submitted[a.name] = c
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(b, c) {
                var d, e, f, g, h = this.errorsFor(b),
                    i = this.idOrName(b),
                    j = a(b).attr("aria-describedby");
                h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), this.settings && this.settings.escapeHtml ? h.text(c || "") : h.html(c || "")) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass), this.settings && this.settings.escapeHtml ? h.text(c || "") : h.html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function(b, c) {
                    c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
                })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
            },
            errorsFor: function(b) {
                var c = this.escapeCssMeta(this.idOrName(b)),
                    d = a(b).attr("aria-describedby"),
                    e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
            },
            escapeCssMeta: function(a) {
                return void 0 === a ? "" : a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(b) {
                return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function(a, b) {
                return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(b, c) {
                    return !!a(b, c.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            elementAjaxPort: function(a) {
                return "validate" + a.name
            },
            startRequest: function(b) {
                this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0)
            },
            stopRequest: function(b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() && 0 === this.pendingRequest ? (a(this.currentForm).trigger("submit"), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            abortRequest: function(b) {
                var c;
                this.pending[b.name] && (c = this.elementAjaxPort(b), a.ajaxAbort(c), this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass))
            },
            previousValue: function(b, c) {
                return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, {
                        method: c
                    })
                })
            },
            destroy: function() {
                this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
            var c = {},
                d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        normalizeAttributeRule: function(a, b, c, d) {
            /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a["date" === b ? "dateISO" : c] = !0)
        },
        attributeRules: function(b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function(b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), "" === d && (d = !0), this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function(b) {
            var c = {},
                d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case "string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case "function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
                }
            }), a.each(b, function(a, d) {
                b[a] = "function" == typeof d && "normalizer" !== a ? d(c) : d
            }), a.each(["minlength", "maxlength"], function() {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function() {
                var a;
                b[this] && (Array.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (a = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(a[0]), Number(a[1])]))
            }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : void 0 !== b && null !== b && b.length > 0
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
            },
            date: function() {
                var a = !1;
                return function(b, c) {
                    return a || (a = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString())
                }
            }(),
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            minlength: function(a, b, c) {
                var d = Array.isArray(a) ? a.length : this.getLength(a, b);
                return this.optional(b) || d >= c
            },
            maxlength: function(a, b, c) {
                var d = Array.isArray(a) ? a.length : this.getLength(a, b);
                return this.optional(b) || d <= c
            },
            rangelength: function(a, b, c) {
                var d = Array.isArray(a) ? a.length : this.getLength(a, b);
                return this.optional(b) || d >= c[0] && d <= c[1]
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function(a, b, c) {
                return this.optional(b) || a <= c
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            step: function(b, c, d) {
                var e, f = a(c).attr("type"),
                    g = "Step attribute on input type " + f + " is not supported.",
                    h = ["text", "number", "range"],
                    i = new RegExp("\\b" + f + "\\b"),
                    j = f && !i.test(h.join()),
                    k = function(a) {
                        var b = ("" + a).match(/(?:\.(\d+))?$/);
                        return b && b[1] ? b[1].length : 0
                    },
                    l = function(a) {
                        return Math.round(a * Math.pow(10, e))
                    },
                    m = !0;
                if (j) throw new Error(g);
                return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    a(c).valid()
                }), b === e.val()
            },
            remote: function(b, c, d, e) {
                if (this.optional(c)) return "dependency-mismatch";
                e = "string" == typeof e && e || "remote";
                var f, g, h, i = this.previousValue(c, e);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
                    url: d
                } || d, h = a.param(a.extend({
                    data: b
                }, d.data)), null !== i.valid && i.old === h ? i.valid : (i.old = h, i.valid = null, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: this.elementAjaxPort(c),
                    dataType: "json",
                    data: g,
                    context: f.currentForm,
                    success: function(a) {
                        var d, g, h, j = a === !0 || "true" === a;
                        f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
                            method: e,
                            parameters: b
                        }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
                    }
                }, d)), "pending")
            }
        }
    });
    var c, d = {};
    return a.ajaxPrefilter ? a.ajaxPrefilter(function(b, c, e) {
        var f = b.port;
        "abort" === b.mode && (a.ajaxAbort(f), d[f] = e)
    }) : (c = a.ajax, a.ajax = function(b) {
        var e = ("mode" in b ? b : a.ajaxSettings).mode,
            f = ("port" in b ? b : a.ajaxSettings).port;
        return "abort" === e ? (a.ajaxAbort(f), d[f] = c.apply(this, arguments), d[f]) : c.apply(this, arguments)
    }), a.ajaxAbort = function(a) {
        d[a] && (d[a].abort(), delete d[a])
    }, a
});