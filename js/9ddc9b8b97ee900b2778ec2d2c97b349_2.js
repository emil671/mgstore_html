/*

 Project: Bootstrap Hover Dropdown
 Author: Cameron Spear
 Version: v2.1.3
 Contributors: Mattia Larentis
 Dependencies: Bootstrap's Dropdown plugin, jQuery
 Description: A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 License: MIT
 Homepage: http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license  Bootstrap v4.0.0-alpha.2 (http://getbootstrap.com)
 Copyright 2011-2015 Twitter, Inc.
 Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 echo-js v1.7.3 | (c) 2016 @toddmotto | https://github.com/toddmotto/echo  WOW - v1.1.2 - 2015-04-07
 Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT  Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
 jQuery UI Core @VERSION
 http://jqueryui.com

 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/category/ui-core/
 jQuery UI Widget @VERSION
 http://jqueryui.com

 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/jQuery.widget/
 jQuery UI Mouse @VERSION
 http://jqueryui.com

 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/mouse/

 Depends:
 jquery.ui.widget.js
 jQuery UI Tabs @VERSION
 http://jqueryui.com

 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/tabs/

 Depends:
 jquery.ui.core.js
 jquery.ui.widget.js
 jQuery UI Slider @VERSION
 http://jqueryui.com

 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license

 http://api.jqueryui.com/slider/

 Depends:
 jquery.ui.core.js
 jquery.ui.mouse.js
 jquery.ui.widget.js
 jQuery Cookie Plugin v1.3.1
 https://github.com/carhartl/jquery-cookie

 Copyright 2013 Klaus Hartl
 Released under the MIT license
 Backbone.Notifier.js v0.2.4
 Copyright 2012, Eyal Weiss
 Backbone.Notifier.js may be freely distributed under the MIT license.
 Backbone.Notifier Template Module v0.0.1
 Copyright 2012, Eyal Weiss
 Backbone.Notifier Template Module be freely distributed under the MIT license.
 fancyBox - jQuery Plugin
 version: 2.1.5 (Fri, 14 Jun 2013)
 @requires jQuery v1.6 or later

 Examples at http://fancyapps.com/fancybox/
 License: www.fancyapps.com/fancybox/#license

 Copyright 2012 Janis Skarnelis - janis@fancyapps.com

 Thumbnail helper for fancyBox
 version: 1.0.7 (Mon, 01 Oct 2012)
 @requires fancyBox v2.0 or later

 Usage:
     $(".fancybox").fancybox({
         helpers : {
             thumbs: {
                 width  : 50,
                 height : 50
             }
         }
     });

*/
! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length,
            c = k.type(a);
        return "function" === c || k.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && 0 < b && b - 1 in a
    }

    function g(a, b, c) {
        if (k.isFunction(b)) return k.grep(a, function(a, e) {
            return !!b.call(a, e,
                a) !== c
        });
        if (b.nodeType) return k.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (Cb.test(b)) return k.filter(b, a, c);
            b = k.filter(b, a)
        }
        return k.grep(a, function(a) {
            return 0 <= k.inArray(a, b) !== c
        })
    }

    function f(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function d(a) {
        var b = db[a] = {};
        return k.each(a.match(ca) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function e() {
        D.addEventListener ? (D.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (D.detachEvent("onreadystatechange",
            h), a.detachEvent("onload", h))
    }

    function h() {
        (D.addEventListener || "load" === event.type || "complete" === D.readyState) && (e(), k.ready())
    }

    function l(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var e = "data-" + b.replace(Db, "-$1").toLowerCase();
            if (c = a.getAttribute(e), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : Eb.test(c) ? k.parseJSON(c) : c
                } catch (Bb) {}
                k.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function n(a) {
        for (var b in a)
            if (("data" !== b || !k.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function p(a, b, c, e) {
        if (k.acceptData(a)) {
            var d, t, h = k.expando,
                f = a.nodeType,
                g = f ? k.cache : a,
                F = f ? a[h] : a[h] && h;
            if (F && g[F] && (e || g[F].data) || void 0 !== c || "string" != typeof b) return F || (F = f ? a[h] = ha.pop() || k.guid++ : h), g[F] || (g[F] = f ? {} : {
                toJSON: k.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? g[F] = k.extend(g[F], b) : g[F].data = k.extend(g[F].data, b)), t = g[F], e || (t.data || (t.data = {}), t = t.data), void 0 !== c && (t[k.camelCase(b)] = c), "string" == typeof b ? (d = t[b], null == d && (d = t[k.camelCase(b)])) : d = t, d
        }
    }

    function q(a,
        b, c) {
        if (k.acceptData(a)) {
            var e, d, t = a.nodeType,
                h = t ? k.cache : a,
                g = t ? a[k.expando] : k.expando;
            if (h[g]) {
                if (b && (e = c ? h[g] : h[g].data)) {
                    k.isArray(b) ? b = b.concat(k.map(b, k.camelCase)) : b in e ? b = [b] : (b = k.camelCase(b), b = b in e ? [b] : b.split(" "));
                    for (d = b.length; d--;) delete e[b[d]];
                    if (c ? !n(e) : !k.isEmptyObject(e)) return
                }(c || (delete h[g].data, n(h[g]))) && (t ? k.cleanData([a], !0) : A.deleteExpando || h != h.window ? delete h[g] : h[g] = null)
            }
        }
    }

    function m() {
        return !0
    }

    function u() {
        return !1
    }

    function v() {
        try {
            return D.activeElement
        } catch (t) {}
    }

    function x(a) {
        var b = eb.split("|");
        a = a.createDocumentFragment();
        if (a.createElement)
            for (; b.length;) a.createElement(b.pop());
        return a
    }

    function w(a, b) {
        var c, e, d = 0,
            t = "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!t)
            for (t = [], c = a.childNodes || a; null != (e = c[d]); d++) !b || k.nodeName(e, b) ? t.push(e) : k.merge(t, w(e, b));
        return void 0 === b || b && k.nodeName(a, b) ? k.merge([a], t) : t
    }

    function E(a) {
        Pa.test(a.type) && (a.defaultChecked =
            a.checked)
    }

    function y(a, b) {
        return k.nodeName(a, "table") && k.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function H(a) {
        return a.type = (null !== k.find.attr(a, "type")) + "/" + a.type, a
    }

    function J(a) {
        var b = Fb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function r(a, b) {
        for (var c, e = 0; null != (c = a[e]); e++) k._data(c, "globalEval", !b || k._data(b[e], "globalEval"))
    }

    function B(a, b) {
        if (1 === b.nodeType && k.hasData(a)) {
            var c,
                e;
            var d = k._data(a);
            var h = k._data(b, d),
                t = d.events;
            if (t)
                for (c in delete h.handle, h.events = {}, t)
                    for (d = 0, e = t[c].length; e > d; d++) k.event.add(b, c, t[c][d]);
            h.data && (h.data = k.extend({}, h.data))
        }
    }

    function Y(b, c) {
        var e = k(c.createElement(b)).appendTo(c.body),
            d = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(e[0]).display : k.css(e[0], "display");
        return e.detach(), d
    }

    function I(a) {
        var b = D,
            c = fb[a];
        return c || (c = Y(a, b), "none" !== c && c || (za = (za || k("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
            b = (za[0].contentWindow || za[0].contentDocument).document, b.write(), b.close(), c = Y(a, b), za.detach()), fb[a] = c), c
    }

    function S(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function z(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), e = b, d = gb.length; d--;)
            if (b = gb[d] + c, b in a) return b;
        return e
    }

    function C(a, b) {
        for (var c, e, d, h = [], t = 0, g = a.length; g > t; t++) e = a[t], e.style && (h[t] = k._data(e, "olddisplay"), c = e.style.display, b ? (h[t] ||
            "none" !== c || (e.style.display = ""), "" === e.style.display && Aa(e) && (h[t] = k._data(e, "olddisplay", I(e.nodeName)))) : h[t] || (d = Aa(e), (c && "none" !== c || !d) && k._data(e, "olddisplay", d ? c : k.css(e, "display"))));
        for (t = 0; g > t; t++) e = a[t], e.style && (b && "none" !== e.style.display && "" !== e.style.display || (e.style.display = b ? h[t] || "" : "none"));
        return a
    }

    function Q(a, b, c) {
        return (a = Gb.exec(b)) ? Math.max(0, a[1] - (c || 0)) + (a[2] || "px") : b
    }

    function Z(a, b, c, e, d) {
        b = c === (e ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var h = 0; 4 > b; b += 2) "margin" ===
            c && (h += k.css(a, c + ea[b], !0, d)), e ? ("content" === c && (h -= k.css(a, "padding" + ea[b], !0, d)), "margin" !== c && (h -= k.css(a, "border" + ea[b] + "Width", !0, d))) : (h += k.css(a, "padding" + ea[b], !0, d), "padding" !== c && (h += k.css(a, "border" + ea[b] + "Width", !0, d)));
        return h
    }

    function W(a, b, c) {
        var e = !0,
            d = "width" === b ? a.offsetWidth : a.offsetHeight,
            h = ja(a),
            t = A.boxSizing() && "border-box" === k.css(a, "boxSizing", !1, h);
        if (0 >= d || null == d) {
            if (d = ma(a, b, h), (0 > d || null == d) && (d = a.style[b]), Ea.test(d)) return d;
            e = t && (A.boxSizingReliable() || d === a.style[b]);
            d = parseFloat(d) || 0
        }
        return d + Z(a, b, c || (t ? "border" : "content"), e, h) + "px"
    }

    function M(a, b, c, e, d) {
        return new M.prototype.init(a, b, c, e, d)
    }

    function X() {
        return setTimeout(function() {
            ua = void 0
        }), ua = k.now()
    }

    function U(a, b) {
        var c = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
            var d = ea[e];
            c["margin" + d] = c["padding" + d] = a
        }
        return b && (c.opacity = c.width = a), c
    }

    function da(a, b, c) {
        for (var e, d = (Ba[b] || []).concat(Ba["*"]), h = 0, t = d.length; t > h; h++)
            if (e = d[h].call(c, b, a)) return e
    }

    function L(a, b) {
        var c, e, d, h, t;
        for (c in a)
            if (e = k.camelCase(c),
                d = b[e], h = a[c], k.isArray(h) && (d = h[1], h = a[c] = h[0]), c !== e && (a[e] = h, delete a[c]), t = k.cssHooks[e], t && "expand" in t)
                for (c in h = t.expand(h), delete a[e], h) c in a || (a[c] = h[c], b[c] = d);
            else b[e] = d
    }

    function N(a, b, c) {
        var e, d = 0,
            h = Fa.length,
            t = k.Deferred().always(function() {
                delete g.elem
            }),
            g = function() {
                if (e) return !1;
                for (var b = ua || X(), b = Math.max(0, f.startTime + f.duration - b), c = 1 - (b / f.duration || 0), d = 0, h = f.tweens.length; h > d; d++) f.tweens[d].run(c);
                return t.notifyWith(a, [f, c, b]), 1 > c && h ? b : (t.resolveWith(a, [f]), !1)
            },
            f = t.promise({
                elem: a,
                props: k.extend({}, b),
                opts: k.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: ua || X(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var e = k.Tween(a, f.opts, b, c, f.opts.specialEasing[b] || f.opts.easing);
                    return f.tweens.push(e), e
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? f.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) f.tweens[c].run(1);
                    return b ? t.resolveWith(a, [f, b]) : t.rejectWith(a, [f, b]), this
                }
            });
        c = f.props;
        for (L(c, f.opts.specialEasing); h > d; d++)
            if (b = Fa[d].call(f, a, c, f.opts)) return b;
        return k.map(c, da, f), k.isFunction(f.opts.start) && f.opts.start.call(a, f), k.fx.timer(k.extend(g, {
            elem: a,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function O(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var e, d = 0,
                h = b.toLowerCase().match(ca) || [];
            if (k.isFunction(c))
                for (; e = h[d++];) "+" === e.charAt(0) ? (e = e.slice(1) || "*", (a[e] = a[e] || []).unshift(c)) : (a[e] = a[e] || []).push(c)
        }
    }

    function T(a, b, c, e) {
        function d(f) {
            var g;
            return h[f] = !0, k.each(a[f] || [], function(a, f) {
                var l = f(b, c, e);
                return "string" != typeof l || t || h[l] ? t ? !(g = l) : void 0 : (b.dataTypes.unshift(l), d(l), !1)
            }), g
        }
        var h = {},
            t = a === Qa;
        return d(b.dataTypes[0]) || !h["*"] && d("*")
    }

    function G(a, b) {
        var c, e, d = k.ajaxSettings.flatOptions || {};
        for (e in b) void 0 !== b[e] && ((d[e] ? a : c || (c = {}))[e] = b[e]);
        return c && k.extend(!0, a, c), a
    }

    function P(a, b, c, e) {
        var d;
        if (k.isArray(b)) k.each(b, function(b, d) {
            c || Ib.test(a) ? e(a, d) : P(a + "[" + ("object" == typeof d ? b : "") + "]", d, c, e)
        });
        else if (c || "object" !==
            k.type(b)) e(a, b);
        else
            for (d in b) P(a + "[" + d + "]", b[d], c, e)
    }

    function aa() {
        try {
            return new a.XMLHttpRequest
        } catch (t) {}
    }

    function fa(a) {
        return k.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var ha = [],
        ka = ha.slice,
        Ga = ha.concat,
        la = ha.push,
        qa = ha.indexOf,
        va = {},
        wa = va.toString,
        na = va.hasOwnProperty,
        Ca = "".trim,
        A = {},
        k = function(a, b) {
            return new k.fn.init(a, b)
        },
        Ra = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Sa = /^-ms-/,
        Da = /-([\da-z])/gi,
        Ta = function(a, b) {
            return b.toUpperCase()
        };
    k.fn = k.prototype = {
        jquery: "1.11.0",
        constructor: k,
        selector: "",
        length: 0,
        toArray: function() {
            return ka.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : ka.call(this)
        },
        pushStack: function(a) {
            a = k.merge(this.constructor(), a);
            return a.prevObject = this, a.context = this.context, a
        },
        each: function(a, b) {
            return k.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(k.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(ka.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && b > a ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: la,
        sort: ha.sort,
        splice: ha.splice
    };
    k.extend = k.fn.extend = function() {
        var a, b, c, e, d = arguments[0] || {},
            h = 1,
            f = arguments.length,
            g = !1;
        "boolean" == typeof d && (g = d, d = arguments[h] || {}, h++);
        "object" == typeof d || k.isFunction(d) || (d = {});
        for (h === f && (d = this, h--); f > h; h++)
            if (null != (c = arguments[h]))
                for (b in c) {
                    var l = d[b];
                    var n = c[b];
                    d !== n && (g && n && (k.isPlainObject(n) ||
                        (a = k.isArray(n))) ? (a ? (a = !1, e = l && k.isArray(l) ? l : []) : e = l && k.isPlainObject(l) ? l : {}, d[b] = k.extend(g, e, n)) : void 0 !== n && (d[b] = n))
                }
        return d
    };
    k.extend({
        expando: "jQuery" + ("1.11.0" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === k.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === k.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return 0 <= a - parseFloat(a)
        },
        isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== k.type(a) || a.nodeType || k.isWindow(a)) return !1;
            try {
                if (a.constructor && !na.call(a, "constructor") && !na.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (K) {
                return !1
            }
            if (A.ownLast)
                for (b in a) return na.call(a, b);
            for (b in a);
            return void 0 === b || na.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? va[wa.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && k.trim(b) && (a.execScript || function(b) {
                a.eval.call(a,
                    b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(Sa, "ms-").replace(Da, Ta)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, e) {
            var d, h = 0,
                t = a.length,
                f = c(a);
            if (e)
                if (f)
                    for (; t > h && (d = b.apply(a[h], e), !1 !== d); h++);
                else
                    for (h in a) {
                        if (d = b.apply(a[h], e), !1 === d) break
                    } else if (f)
                        for (; t > h && (d = b.call(a[h], h, a[h]), !1 !== d); h++);
                    else
                        for (h in a)
                            if (d = b.call(a[h], h, a[h]), !1 === d) break;
            return a
        },
        trim: Ca && !Ca.call("\ufeff\u00a0") ? function(a) {
            return null == a ? "" : Ca.call(a)
        } : function(a) {
            return null == a ? "" : (a + "").replace(Ra, "")
        },
        makeArray: function(a, b) {
            var e = b || [];
            return null != a && (c(Object(a)) ? k.merge(e, "string" == typeof a ? [a] : a) : la.call(e, a)), e
        },
        inArray: function(a, b, c) {
            if (b) {
                if (qa) return qa.call(b, a, c);
                var e = b.length;
                for (c = c ? 0 > c ? Math.max(0, e + c) : c : 0; e > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            for (var c = +b.length, e = 0, d = a.length; c > e;) a[d++] = b[e++];
            if (c !== c)
                for (; void 0 !== b[e];) a[d++] = b[e++];
            return a.length = d, a
        },
        grep: function(a, b, c) {
            for (var e = [], d = 0, h =
                    a.length, t = !c; h > d; d++) c = !b(a[d], d), c !== t && e.push(a[d]);
            return e
        },
        map: function(a, b, e) {
            var d = 0,
                h = a.length,
                t = [];
            if (c(a))
                for (; h > d; d++) {
                    var f = b(a[d], d, e);
                    null != f && t.push(f)
                } else
                    for (d in a) f = b(a[d], d, e), null != f && t.push(f);
            return Ga.apply([], t)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, d;
            return "string" == typeof b && (d = a[b], b = a, a = d), k.isFunction(a) ? (c = ka.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(ka.call(arguments)))
            }, e.guid = a.guid = a.guid || k.guid++, e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: A
    });
    k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        va["[object " + b + "]"] = b.toLowerCase()
    });
    var ia = function(a) {
        function b(a, b, c, e) {
            var d, h, f, t, g;
            if ((b ? b.ownerDocument || b : O) !== P && ea(b), b = b || P, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (t = b.nodeType) && 9 !== t) return [];
            if (v && !e) {
                if (d = Sa.exec(a))
                    if (f = d[1])
                        if (9 === t) {
                            if (h = b.getElementById(f), !h || !h.parentNode) return c;
                            if (h.id === f) return c.push(h), c
                        } else {
                            if (b.ownerDocument && (h = b.ownerDocument.getElementById(f)) &&
                                aa(b, h) && h.id === f) return c.push(h), c
                        }
                else {
                    if (d[2]) return fa.apply(c, b.getElementsByTagName(a)), c;
                    if ((f = d[3]) && V.getElementsByClassName && b.getElementsByClassName) return fa.apply(c, b.getElementsByClassName(f)), c
                }
                if (V.qsa && (!x || !x.test(a))) {
                    if (h = d = B, f = b, g = 9 === t && a, 1 === t && "object" !== b.nodeName.toLowerCase()) {
                        t = m(a);
                        (d = b.getAttribute("id")) ? h = d.replace(Ha, "\\$&"): b.setAttribute("id", h);
                        h = "[id='" + h + "'] ";
                        for (f = t.length; f--;) t[f] = h + p(t[f]);
                        f = Da.test(a) && k(b.parentNode) || b;
                        g = t.join(",")
                    }
                    if (g) try {
                        return fa.apply(c,
                            f.querySelectorAll(g)), c
                    } catch (xc) {} finally {
                        d || b.removeAttribute("id")
                    }
                }
            }
            var l;
            a: {
                a = a.replace(wa, "$1");
                var F, n;h = m(a);
                if (!e && 1 === h.length) {
                    if (l = h[0] = h[0].slice(0), 2 < l.length && "ID" === (F = l[0]).type && V.getById && 9 === b.nodeType && v && R.relative[l[1].type]) {
                        if (b = (R.find.ID(F.matches[0].replace(ba, ca), b) || [])[0], !b) {
                            l = c;
                            break a
                        }
                        a = a.slice(l.shift().value.length)
                    }
                    for (t = qa.needsContext.test(a) ? 0 : l.length; t-- && (F = l[t], !R.relative[d = F.type]);)
                        if ((n = R.find[d]) && (e = n(F.matches[0].replace(ba, ca), Da.test(l[0].type) &&
                                k(b.parentNode) || b))) {
                            if (l.splice(t, 1), a = e.length && p(l), !a) {
                                l = (fa.apply(c, e), c);
                                break a
                            }
                            break
                        }
                }
                l = (ma(a, h)(e, b, !v, c, Da.test(a) && k(b.parentNode) || b), c)
            }
            return l
        }

        function c() {
            function a(c, e) {
                return b.push(c + " ") > R.cacheLength && delete a[b.shift()], a[c + " "] = e
            }
            var b = [];
            return a
        }

        function e(a) {
            return a[B] = !0, a
        }

        function d(a) {
            var b = P.createElement("div");
            try {
                return !!a(b)
            } catch (vc) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }

        function h(a, b) {
            for (var c = a.split("|"), e = a.length; e--;) R.attrHandle[c[e]] =
                b
        }

        function f(a, b) {
            var c = b && a,
                e = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
            if (e) return e;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function t(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function g(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function l(a) {
            return e(function(b) {
                return b = +b, e(function(c, e) {
                    for (var d, h = a([], c.length, b), f = h.length; f--;) c[d =
                        h[f]] && (c[d] = !(e[d] = c[d]))
                })
            })
        }

        function k(a) {
            return a && "undefined" !== typeof a.getElementsByTagName && a
        }

        function n() {}

        function m(a, c) {
            var e, d, h, f, t;
            if (f = I[a + " "]) return c ? 0 : f.slice(0);
            f = a;
            var g = [];
            for (t = R.preFilter; f;) {
                l && !(e = la.exec(f)) || (e && (f = f.slice(e[0].length) || f), g.push(d = []));
                var l = !1;
                (e = Ca.exec(f)) && (l = e.shift(), d.push({
                    value: l,
                    type: e[0].replace(wa, " ")
                }), f = f.slice(l.length));
                for (h in R.filter) !(e = qa[h].exec(f)) || t[h] && !(e = t[h](e)) || (l = e.shift(), d.push({
                    value: l,
                    type: h,
                    matches: e
                }), f = f.slice(l.length));
                if (!l) break
            }
            return c ? f.length : f ? b.error(a) : I(a, g).slice(0)
        }

        function p(a) {
            for (var b = 0, c = a.length, e = ""; c > b; b++) e += a[b].value;
            return e
        }

        function q(a, b, c) {
            var e = b.dir,
                d = c && "parentNode" === e,
                h = J++;
            return b.first ? function(b, c, h) {
                for (; b = b[e];)
                    if (1 === b.nodeType || d) return a(b, c, h)
            } : function(b, c, f) {
                var t, g, l = [Q, h];
                if (f)
                    for (; b = b[e];) {
                        if ((1 === b.nodeType || d) && a(b, c, f)) return !0
                    } else
                        for (; b = b[e];)
                            if (1 === b.nodeType || d) {
                                if (g = b[B] || (b[B] = {}), (t = g[e]) && t[0] === Q && t[1] === h) return l[2] = t[2];
                                if (g[e] = l, l[2] = a(b, c, f)) return !0
                            }
            }
        }

        function w(a) {
            return 1 < a.length ? function(b, c, e) {
                for (var d = a.length; d--;)
                    if (!a[d](b, c, e)) return !1;
                return !0
            } : a[0]
        }

        function z(a, b, c, e, d) {
            for (var h, f = [], t = 0, g = a.length, l = null != b; g > t; t++)(h = a[t]) && (!c || c(h, e, d)) && (f.push(h), l && b.push(t));
            return f
        }

        function u(a, c, d, h, f, t) {
            return h && !h[B] && (h = u(h)), f && !f[B] && (f = u(f, t)), e(function(e, t, g, l) {
                var k, F = [],
                    n = [],
                    m = t.length,
                    K;
                if (!(K = e)) {
                    K = c || "*";
                    for (var p = g.nodeType ? [g] : g, q = [], w = 0, pa = p.length; pa > w; w++) b(K, p[w], q);
                    K = q
                }
                K = !a || !e && c ? K : z(K, F, a, g, l);
                p = d ? f || (e ? a : m || h) ? [] :
                    t : K;
                if (d && d(K, p, g, l), h) {
                    var u = z(p, n);
                    h(u, [], g, l);
                    for (g = u.length; g--;)(k = u[g]) && (p[n[g]] = !(K[n[g]] = k))
                }
                if (e) {
                    if (f || a) {
                        if (f) {
                            u = [];
                            for (g = p.length; g--;)(k = p[g]) && u.push(K[g] = k);
                            f(null, p = [], u, l)
                        }
                        for (g = p.length; g--;)(k = p[g]) && -1 < (u = f ? U.call(e, k) : F[g]) && (e[u] = !(t[u] = k))
                    }
                } else p = z(p === t ? p.splice(m, p.length) : p), f ? f(null, t, p, l) : fa.apply(t, p)
            })
        }

        function L(a) {
            var b, c, e = a.length,
                d = R.relative[a[0].type];
            var h = d || R.relative[" "];
            for (var f = d ? 1 : 0, t = q(function(a) {
                    return a === b
                }, h, !0), g = q(function(a) {
                    return -1 < U.call(b,
                        a)
                }, h, !0), l = [function(a, c, e) {
                    return !d && (e || c !== G) || ((b = c).nodeType ? t(a, c, e) : g(a, c, e))
                }]; e > f; f++)
                if (h = R.relative[a[f].type]) l = [q(w(l), h)];
                else {
                    if (h = R.filter[a[f].type].apply(null, a[f].matches), h[B]) {
                        for (c = ++f; e > c && !R.relative[a[c].type]; c++);
                        return u(1 < f && w(l), 1 < f && p(a.slice(0, f - 1).concat({
                            value: " " === a[f - 2].type ? "*" : ""
                        })).replace(wa, "$1"), h, c > f && L(a.slice(f, c)), e > c && L(a = a.slice(c)), e > c && p(a))
                    }
                    l.push(h)
                }
            return w(l)
        }

        function r(a, c) {
            var d = 0 < c.length,
                h = 0 < a.length,
                f = function(e, f, t, g, l) {
                    var k, F, n, m = 0,
                        K =
                        "0",
                        p = e && [],
                        q = [],
                        w = G,
                        pa = e || h && R.find.TAG("*", l),
                        u = Q += null == w ? 1 : Math.random() || .1,
                        L = pa.length;
                    for (l && (G = f !== P && f); K !== L && null != (k = pa[K]); K++) {
                        if (h && k) {
                            for (F = 0; n = a[F++];)
                                if (n(k, f, t)) {
                                    g.push(k);
                                    break
                                }
                            l && (Q = u)
                        }
                        d && ((k = !n && k) && m--, e && p.push(k))
                    }
                    if (m += K, d && K !== m) {
                        for (F = 0; n = c[F++];) n(p, q, f, t);
                        if (e) {
                            if (0 < m)
                                for (; K--;) p[K] || q[K] || (q[K] = S.call(g));
                            q = z(q)
                        }
                        fa.apply(g, q);
                        l && !e && 0 < q.length && 1 < m + c.length && b.uniqueSort(g)
                    }
                    return l && (Q = u, G = w), p
                };
            return d ? e(f) : f
        }
        var y, G, E, T, P, C, v, x, H, N, aa, B = "sizzle" + -new Date,
            O = a.document,
            Q = 0,
            J = 0,
            W = c(),
            I = c(),
            Z = c(),
            M = function(a, b) {
                return a === b && (T = !0), 0
            },
            A = {}.hasOwnProperty,
            Y = [],
            S = Y.pop,
            ha = Y.push,
            fa = Y.push,
            X = Y.slice,
            U = Y.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            ka = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
            D = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ka + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
            na = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
            D.replace(3, 8) + ")*)|.*)\\)|)",
            wa = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
            la = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            Ca = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            Ga = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"),
            da = new RegExp(na),
            Ra = new RegExp("^" + ka + "$"),
            qa = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                ATTR: new RegExp("^" +
                    D),
                PSEUDO: new RegExp("^" + na),
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            },
            va = /^(?:input|select|textarea|button)$/i,
            Ta = /^h\d$/i,
            ia = /^[^{]+\{\s*\[native \w/,
            Sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Da = /[+~]/,
            Ha = /'|\\/g,
            ba = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
            ca = function(a, b, c) {
                a = "0x" + b - 65536;
                return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
            };
        try {
            fa.apply(Y = X.call(O.childNodes), O.childNodes), Y[O.childNodes.length].nodeType
        } catch (uc) {
            fa = {
                apply: Y.length ? function(a, b) {
                    ha.apply(a, X.call(b))
                } : function(a, b) {
                    for (var c = a.length, e = 0; a[c++] =
                        b[e++];);
                    a.length = c - 1
                }
            }
        }
        var V = b.support = {};
        var oa = b.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        var ea = b.setDocument = function(a) {
            var b, c = a ? a.ownerDocument || a : O;
            a = c.defaultView;
            return c !== P && 9 === c.nodeType && c.documentElement ? (P = c, C = c.documentElement, v = !oa(c), a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function() {
                    ea()
                }, !1) : a.attachEvent && a.attachEvent("onunload", function() {
                    ea()
                })), V.attributes = d(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }),
                V.getElementsByTagName = d(function(a) {
                    return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
                }), V.getElementsByClassName = ia.test(c.getElementsByClassName) && d(function(a) {
                    return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
                }), V.getById = d(function(a) {
                    return C.appendChild(a).id = B, !c.getElementsByName || !c.getElementsByName(B).length
                }), V.getById ? (R.find.ID = function(a, b) {
                    if ("undefined" !== typeof b.getElementById &&
                        v) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, R.filter.ID = function(a) {
                    var b = a.replace(ba, ca);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete R.find.ID, R.filter.ID = function(a) {
                    var b = a.replace(ba, ca);
                    return function(a) {
                        return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                    }
                }), R.find.TAG = V.getElementsByTagName ? function(a, b) {
                    return "undefined" !== typeof b.getElementsByTagName ? b.getElementsByTagName(a) : void 0
                } : function(a, b) {
                    var c, e = [],
                        d = 0,
                        h =
                        b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = h[d++];) 1 === c.nodeType && e.push(c);
                        return e
                    }
                    return h
                }, R.find.CLASS = V.getElementsByClassName && function(a, b) {
                    return "undefined" !== typeof b.getElementsByClassName && v ? b.getElementsByClassName(a) : void 0
                }, H = [], x = [], (V.qsa = ia.test(c.querySelectorAll)) && (d(function(a) {
                    a.innerHTML = "<select t=''><option selected=''></option></select>";
                    a.querySelectorAll("[t^='']").length && x.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                    a.querySelectorAll("[selected]").length || x.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                    a.querySelectorAll(":checked").length || x.push(":checked")
                }), d(function(a) {
                    var b = c.createElement("input");
                    b.setAttribute("type", "hidden");
                    a.appendChild(b).setAttribute("name", "D");
                    a.querySelectorAll("[name=d]").length && x.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                    a.querySelectorAll(":enabled").length || x.push(":enabled", ":disabled");
                    a.querySelectorAll("*,:x");
                    x.push(",.*:")
                })), (V.matchesSelector = ia.test(N = C.webkitMatchesSelector || C.mozMatchesSelector || C.oMatchesSelector || C.msMatchesSelector)) && d(function(a) {
                    V.disconnectedMatch =
                        N.call(a, "div");
                    N.call(a, "[s!='']:x");
                    H.push("!=", na)
                }), x = x.length && new RegExp(x.join("|")), H = H.length && new RegExp(H.join("|")), b = ia.test(C.compareDocumentPosition), aa = b || ia.test(C.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        e = b && b.parentNode;
                    return a === e || !(!e || 1 !== e.nodeType || !(c.contains ? c.contains(e) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(e)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, M = b ? function(a, b) {
                    if (a === b) return T = !0, 0;
                    var e = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return e ? e : (e = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & e || !V.sortDetached && b.compareDocumentPosition(a) === e ? a === c || a.ownerDocument === O && aa(O, a) ? -1 : b === c || b.ownerDocument === O && aa(O, b) ? 1 : E ? U.call(E, a) - U.call(E, b) : 0 : 4 & e ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return T = !0, 0;
                    var e = 0;
                    var d = a.parentNode;
                    var h = b.parentNode,
                        t = [a],
                        g = [b];
                    if (!d || !h) return a === c ? -1 : b === c ? 1 : d ? -1 : h ? 1 : E ? U.call(E, a) - U.call(E, b) : 0;
                    if (d === h) return f(a, b);
                    for (d = a; d = d.parentNode;) t.unshift(d);
                    for (d = b; d = d.parentNode;) g.unshift(d);
                    for (; t[e] === g[e];) e++;
                    return e ? f(t[e], g[e]) : t[e] === O ? -1 : g[e] === O ? 1 : 0
                }, c) : P
        };
        b.matches = function(a, c) {
            return b(a, null, null, c)
        };
        b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== P && ea(a), c = c.replace(Ga, "='$1']"), !(!V.matchesSelector || !v || H && H.test(c) || x && x.test(c))) try {
                var e = N.call(a, c);
                if (e || V.disconnectedMatch || a.document && 11 !== a.document.nodeType) return e
            } catch (wc) {}
            return 0 < b(c, P, null, [a]).length
        };
        b.contains = function(a,
            b) {
            return (a.ownerDocument || a) !== P && ea(a), aa(a, b)
        };
        b.attr = function(a, b) {
            (a.ownerDocument || a) !== P && ea(a);
            var c = R.attrHandle[b.toLowerCase()],
                c = c && A.call(R.attrHandle, b.toLowerCase()) ? c(a, b, !v) : void 0;
            return void 0 !== c ? c : V.attributes || !v ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
        };
        b.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        b.uniqueSort = function(a) {
            var b, c = [],
                e = 0,
                d = 0;
            if (T = !V.detectDuplicates, E = !V.sortStable && a.slice(0), a.sort(M), T) {
                for (; b =
                    a[d++];) b === a[d] && (e = c.push(d));
                for (; e--;) a.splice(c[e], 1)
            }
            return E = null, a
        };
        var ja = b.getText = function(a) {
            var b, c = "",
                e = 0;
            if (b = a.nodeType)
                if (1 === b || 9 === b || 11 === b) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += ja(a)
                } else {
                    if (3 === b || 4 === b) return a.nodeValue
                }
            else
                for (; b = a[e++];) c += ja(b);
            return c
        };
        var R = b.selectors = {
            cacheLength: 50,
            createPseudo: e,
            match: qa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[5] && a[2];
                    return qa.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && da.test(c) &&
                        (b = m(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = W[a + " "];
                    return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"), W(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") ||
                            "")
                    }))
                },
                ATTR: function(a, c, e) {
                    return function(d) {
                        d = b.attr(d, a);
                        return null == d ? "!=" === c : c ? (d += "", "=" === c ? d === e : "!=" === c ? d !== e : "^=" === c ? e && 0 === d.indexOf(e) : "*=" === c ? e && -1 < d.indexOf(e) : "$=" === c ? e && d.slice(-e.length) === e : "~=" === c ? -1 < (" " + d + " ").indexOf(e) : "|=" === c ? d === e || d.slice(0, e.length + 1) === e + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, e, d) {
                    var h = "nth" !== a.slice(0, 3),
                        f = "last" !== a.slice(-4),
                        t = "of-type" === b;
                    return 1 === e && 0 === d ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, g) {
                        var l;
                        c = h !== f ? "nextSibling" : "previousSibling";
                        var k = b.parentNode,
                            F = t && b.nodeName.toLowerCase();
                        g = !g && !t;
                        if (k) {
                            if (h) {
                                for (; c;) {
                                    for (l = b; l = l[c];)
                                        if (t ? l.nodeName.toLowerCase() === F : 1 === l.nodeType) return !1;
                                    var n = c = "only" === a && !n && "nextSibling"
                                }
                                return !0
                            }
                            if (n = [f ? k.firstChild : k.lastChild], f && g) {
                                g = k[B] || (k[B] = {});
                                var m = g[a] || [];
                                var K = m[0] === Q && m[1];
                                var p = m[0] === Q && m[2];
                                for (l = K && k.childNodes[K]; l = ++K && l && l[c] || (p = K = 0) || n.pop();)
                                    if (1 === l.nodeType && ++p && l === b) {
                                        g[a] = [Q, K, p];
                                        break
                                    }
                            } else if (g && (m = (b[B] || (b[B] = {}))[a]) && m[0] === Q) p = m[1];
                            else
                                for (;
                                    (l = ++K && l && l[c] ||
                                        (p = K = 0) || n.pop()) && ((t ? l.nodeName.toLowerCase() !== F : 1 !== l.nodeType) || !++p || (g && ((l[B] || (l[B] = {}))[a] = [Q, p]), l !== b)););
                            return p -= d, p === e || 0 === p % e && 0 <= p / e
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var d, h = R.pseudos[a] || R.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return h[B] ? h(c) : 1 < h.length ? (d = [a, a, "", c], R.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, b) {
                        for (var e, d = h(a, c), f = d.length; f--;) e = U.call(a, d[f]), a[e] = !(b[e] = d[f])
                    }) : function(a) {
                        return h(a, 0, d)
                    }) : h
                }
            },
            pseudos: {
                not: e(function(a) {
                    var b = [],
                        c = [],
                        d = ma(a.replace(wa, "$1"));
                    return d[B] ? e(function(a, b, c, e) {
                        var h;
                        c = d(a, null, e, []);
                        for (e = a.length; e--;)(h = c[e]) && (a[e] = !(b[e] = h))
                    }) : function(a, e, h) {
                        return b[0] = a, d(b, null, h, c), !c.pop()
                    }
                }),
                has: e(function(a) {
                    return function(c) {
                        return 0 < b(a, c).length
                    }
                }),
                contains: e(function(a) {
                    return function(b) {
                        return -1 < (b.textContent || b.innerText || ja(b)).indexOf(a)
                    }
                }),
                lang: e(function(a) {
                    return Ra.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = v ? b.lang : b.getAttribute("xml:lang") ||
                                    b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === C
                },
                focus: function(a) {
                    return a === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" ===
                        b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (6 > a.nodeType) return !1;
                    return !0
                },
                parent: function(a) {
                    return !R.pseudos.empty(a)
                },
                header: function(a) {
                    return Ta.test(a.nodeName)
                },
                input: function(a) {
                    return va.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() &&
                        "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(a, b) {
                    return [b - 1]
                }),
                eq: l(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: l(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: l(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: l(function(a, b, c) {
                    for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b);
                    return a
                }),
                gt: l(function(a, b, c) {
                    for (c = 0 > c ? c + b : c; ++c < b;) a.push(c);
                    return a
                })
            }
        };
        R.pseudos.nth = R.pseudos.eq;
        for (y in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) R.pseudos[y] = t(y);
        for (y in {
                submit: !0,
                reset: !0
            }) R.pseudos[y] = g(y);
        n.prototype = R.filters = R.pseudos;
        R.setFilters = new n;
        var ma = b.compile = function(a, b) {
            var c, e = [],
                d = [],
                h = Z[a + " "];
            if (!h) {
                b || (b = m(a));
                for (c = b.length; c--;) h = L(b[c]), h[B] ? e.push(h) : d.push(h);
                h = Z(a, r(d, e))
            }
            return h
        };
        return V.sortStable = B.split("").sort(M).join("") === B, V.detectDuplicates = !!T, ea(), V.sortDetached = d(function(a) {
            return 1 & a.compareDocumentPosition(P.createElement("div"))
        }), d(function(a) {
            return a.innerHTML =
                "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || h("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), V.attributes && d(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || h("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), d(function(a) {
            return null == a.getAttribute("disabled")
        }) || h("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            function(a, b, c) {
                var e;
                return c ? void 0 : !0 === a[b] ? b.toLowerCase() : (e = a.getAttributeNode(b)) && e.specified ? e.value : null
            }), b
    }(a);
    k.find = ia;
    k.expr = ia.selectors;
    k.expr[":"] = k.expr.pseudos;
    k.unique = ia.uniqueSort;
    k.text = ia.getText;
    k.isXMLDoc = ia.isXML;
    k.contains = ia.contains;
    var Ha = k.expr.match.needsContext,
        ib = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Cb = /^.[^:#\[\.,]*$/;
    k.filter = function(a, b, c) {
        var e = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === e.nodeType ? k.find.matchesSelector(e, a) ? [e] : [] : k.find.matches(a, k.grep(b,
            function(a) {
                return 1 === a.nodeType
            }))
    };
    k.fn.extend({
        find: function(a) {
            var b, c = [],
                e = this,
                d = e.length;
            if ("string" != typeof a) return this.pushStack(k(a).filter(function() {
                for (b = 0; d > b; b++)
                    if (k.contains(e[b], this)) return !0
            }));
            for (b = 0; d > b; b++) k.find(a, e[b], c);
            return c = this.pushStack(1 < d ? k.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(g(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(g(this, a || [], !0))
        },
        is: function(a) {
            return !!g(this, "string" == typeof a &&
                Ha.test(a) ? k(a) : a || [], !1).length
        }
    });
    var D = a.document,
        Lb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (k.fn.init = function(a, b) {
        var c, e;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : Lb.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || Ia).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof k ? b[0] : b, k.merge(this, k.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : D, !0)), ib.test(c[1]) && k.isPlainObject(b))
                    for (c in b) k.isFunction(this[c]) ?
                        this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (e = D.getElementById(c[2]), e && e.parentNode) {
                if (e.id !== c[2]) return Ia.find(a);
                this.length = 1;
                this[0] = e
            }
            return this.context = D, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : k.isFunction(a) ? "undefined" != typeof Ia.ready ? Ia.ready(a) : a(k) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), k.makeArray(a, this))
    }).prototype = k.fn;
    var Ia = k(D);
    var Mb = /^(?:parents|prev(?:Until|All))/,
        Nb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    k.extend({
        dir: function(a, b, c) {
            var e = [];
            for (a = a[b]; a && 9 !== a.nodeType && (void 0 === c || 1 !== a.nodeType || !k(a).is(c));) 1 === a.nodeType && e.push(a), a = a[b];
            return e
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    k.fn.extend({
        has: function(a) {
            var b, c = k(a, this),
                e = c.length;
            return this.filter(function() {
                for (b = 0; e > b; b++)
                    if (k.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, e = 0, d = this.length, h = [], f = Ha.test(a) || "string" != typeof a ? k(a,
                    b || this.context) : 0; d > e; e++)
                for (c = this[e]; c && c !== b; c = c.parentNode)
                    if (11 > c.nodeType && (f ? -1 < f.index(c) : 1 === c.nodeType && k.find.matchesSelector(c, a))) {
                        h.push(c);
                        break
                    }
            return this.pushStack(1 < h.length ? k.unique(h) : h)
        },
        index: function(a) {
            return a ? "string" == typeof a ? k.inArray(this[0], k(a)) : k.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(k.unique(k.merge(this.get(), k(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject :
                this.prevObject.filter(a))
        }
    });
    k.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return k.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return k.dir(a, "parentNode", c)
        },
        next: function(a) {
            return f(a, "nextSibling")
        },
        prev: function(a) {
            return f(a, "previousSibling")
        },
        nextAll: function(a) {
            return k.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return k.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return k.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return k.dir(a,
                "previousSibling", c)
        },
        siblings: function(a) {
            return k.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return k.sibling(a.firstChild)
        },
        contents: function(a) {
            return k.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : k.merge([], a.childNodes)
        }
    }, function(a, b) {
        k.fn[a] = function(c, e) {
            var d = k.map(this, b, c);
            return "Until" !== a.slice(-5) && (e = c), e && "string" == typeof e && (d = k.filter(e, d)), 1 < this.length && (Nb[a] || (d = k.unique(d)), Mb.test(a) && (d = d.reverse())), this.pushStack(d)
        }
    });
    var ca = /\S+/g,
        db = {};
    k.Callbacks = function(a) {
        a = "string" == typeof a ? db[a] || d(a) : k.extend({}, a);
        var b, c, e, h, f, g, t = [],
            l = !a.once && [],
            n = function(d) {
                c = a.memory && d;
                e = !0;
                f = g || 0;
                g = 0;
                h = t.length;
                for (b = !0; t && h > f; f++)
                    if (!1 === t[f].apply(d[0], d[1]) && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1;
                t && (l ? l.length && n(l.shift()) : c ? t = [] : m.disable())
            },
            m = {
                add: function() {
                    if (t) {
                        var e = t.length;
                        ! function Jb(b) {
                            k.each(b, function(b, c) {
                                var e = k.type(c);
                                "function" === e ? a.unique && m.has(c) || t.push(c) : c && c.length && "string" !== e && Jb(c)
                            })
                        }(arguments);
                        b ? h = t.length : c &&
                            (g = e, n(c))
                    }
                    return this
                },
                remove: function() {
                    return t && k.each(arguments, function(a, c) {
                        for (var e; - 1 < (e = k.inArray(c, t, e));) t.splice(e, 1), b && (h >= e && h--, f >= e && f--)
                    }), this
                },
                has: function(a) {
                    return a ? -1 < k.inArray(a, t) : !(!t || !t.length)
                },
                empty: function() {
                    return t = [], h = 0, this
                },
                disable: function() {
                    return t = l = c = void 0, this
                },
                disabled: function() {
                    return !t
                },
                lock: function() {
                    return l = void 0, c || m.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(a, c) {
                    return !t || e && !l || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? l.push(c) :
                        n(c)), this
                },
                fire: function() {
                    return m.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!e
                }
            };
        return m
    };
    k.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", k.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", k.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", k.Callbacks("memory")]
                ],
                c = "pending",
                e = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return d.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return k.Deferred(function(c) {
                            k.each(b, function(b, h) {
                                var f =
                                    k.isFunction(a[b]) && a[b];
                                d[h[1]](function() {
                                    var a = f && f.apply(this, arguments);
                                    a && k.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[h[0] + "With"](this === e ? c.promise() : this, f ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? k.extend(a, e) : e
                    }
                },
                d = {};
            return e.pipe = e.then, k.each(b, function(a, h) {
                var f = h[2],
                    g = h[3];
                e[h[1]] = f.add;
                g && f.add(function() {
                    c = g
                }, b[1 ^ a][2].disable, b[2][2].lock);
                d[h[0]] = function() {
                    return d[h[0] + "With"](this === d ? e : this, arguments),
                        this
                };
                d[h[0] + "With"] = f.fireWith
            }), e.promise(d), a && a.call(d, d), d
        },
        when: function(a) {
            var b = 0,
                c = ka.call(arguments),
                e = c.length,
                d = 1 !== e || a && k.isFunction(a.promise) ? e : 0,
                h = 1 === d ? a : k.Deferred(),
                f = function(a, b, c) {
                    return function(e) {
                        b[a] = this;
                        c[a] = 1 < arguments.length ? ka.call(arguments) : e;
                        c === t ? h.notifyWith(b, c) : --d || h.resolveWith(b, c)
                    }
                },
                g;
            if (1 < e) {
                var t = Array(e);
                var l = Array(e);
                for (g = Array(e); e > b; b++) c[b] && k.isFunction(c[b].promise) ? c[b].promise().done(f(b, g, c)).fail(h.reject).progress(f(b, l, t)) : --d
            }
            return d ||
                h.resolveWith(g, c), h.promise()
        }
    });
    var Ja;
    k.fn.ready = function(a) {
        return k.ready.promise().done(a), this
    };
    k.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? k.readyWait++ : k.ready(!0)
        },
        ready: function(a) {
            if (!0 === a ? !--k.readyWait : !k.isReady) {
                if (!D.body) return setTimeout(k.ready);
                k.isReady = !0;
                !0 !== a && 0 < --k.readyWait || (Ja.resolveWith(D, [k]), k.fn.trigger && k(D).trigger("ready").off("ready"))
            }
        }
    });
    k.ready.promise = function(b) {
        if (!Ja)
            if (Ja = k.Deferred(), "complete" === D.readyState) setTimeout(k.ready);
            else if (D.addEventListener) D.addEventListener("DOMContentLoaded",
            h, !1), a.addEventListener("load", h, !1);
        else {
            D.attachEvent("onreadystatechange", h);
            a.attachEvent("onload", h);
            var c = !1;
            try {
                c = null == a.frameElement && D.documentElement
            } catch (K) {}
            c && c.doScroll && ! function pa() {
                if (!k.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (Bb) {
                        return setTimeout(pa, 50)
                    }
                    e();
                    k.ready()
                }
            }()
        }
        return Ja.promise(b)
    };
    for (var Ob in k(A)) break;
    A.ownLast = "0" !== Ob;
    A.inlineBlockNeedsLayout = !1;
    k(function() {
        var a, b, c = D.getElementsByTagName("body")[0];
        c && (a = D.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
            b = D.createElement("div"), c.appendChild(a).appendChild(b), "undefined" !== typeof b.style.zoom && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (A.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a))
    });
    (function() {
        var a = D.createElement("div");
        if (null == A.deleteExpando) {
            A.deleteExpando = !0;
            try {
                delete a.test
            } catch (F) {
                A.deleteExpando = !1
            }
        }
    })();
    k.acceptData = function(a) {
        var b = k.noData[(a.nodeName + " ").toLowerCase()],
            c = +a.nodeType || 1;
        return 1 !== c && 9 !==
            c ? !1 : !b || !0 !== b && a.getAttribute("classid") === b
    };
    var Eb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Db = /([A-Z])/g;
    k.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? k.cache[a[k.expando]] : a[k.expando], !!a && !n(a)
        },
        data: function(a, b, c) {
            return p(a, b, c)
        },
        removeData: function(a, b) {
            return q(a, b)
        },
        _data: function(a, b, c) {
            return p(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return q(a, b, !0)
        }
    });
    k.fn.extend({
        data: function(a, b) {
            var c, e,
                d = this[0],
                h = d && d.attributes;
            if (void 0 === a) {
                if (this.length && (e = k.data(d), 1 === d.nodeType && !k._data(d, "parsedAttrs"))) {
                    for (c = h.length; c--;) {
                        var f = h[c].name;
                        0 === f.indexOf("data-") && (f = k.camelCase(f.slice(5)), l(d, f, e[f]))
                    }
                    k._data(d, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                k.data(this, a)
            }) : 1 < arguments.length ? this.each(function() {
                k.data(this, a, b)
            }) : d ? l(d, a, k.data(d, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                k.removeData(this, a)
            })
        }
    });
    k.extend({
        queue: function(a,
            b, c) {
            var e;
            return a ? (b = (b || "fx") + "queue", e = k._data(a, b), c && (!e || k.isArray(c) ? e = k._data(a, b, k.makeArray(c)) : e.push(c)), e || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = k.queue(a, b),
                e = c.length,
                d = c.shift(),
                h = k._queueHooks(a, b),
                f = function() {
                    k.dequeue(a, b)
                };
            "inprogress" === d && (d = c.shift(), e--);
            d && ("fx" === b && c.unshift("inprogress"), delete h.stop, d.call(a, f, h));
            !e && h && h.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return k._data(a, c) || k._data(a, c, {
                empty: k.Callbacks("once memory").add(function() {
                    k._removeData(a,
                        b + "queue");
                    k._removeData(a, c)
                })
            })
        }
    });
    k.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? k.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = k.queue(this, a, b);
                k._queueHooks(this, a);
                "fx" === a && "inprogress" !== c[0] && k.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                k.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, e = 1,
                d = k.Deferred(),
                h = this,
                f = this.length,
                g = function() {
                    --e ||
                        d.resolveWith(h, [h])
                };
            "string" != typeof a && (b = a, a = void 0);
            for (a = a || "fx"; f--;)(c = k._data(h[f], a + "queueHooks")) && c.empty && (e++, c.empty.add(g));
            return g(), d.promise(b)
        }
    });
    var Ka = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ea = ["Top", "Right", "Bottom", "Left"],
        Aa = function(a, b) {
            return a = b || a, "none" === k.css(a, "display") || !k.contains(a.ownerDocument, a)
        },
        ra = k.access = function(a, b, c, e, d, h, f) {
            var g = 0,
                t = a.length,
                l = null == c;
            if ("object" === k.type(c))
                for (g in d = !0, c) k.access(a, b, g, c[g], !0, h, f);
            else if (void 0 !== e && (d = !0, k.isFunction(e) || (f = !0), l && (f ? (b.call(a, e), b = null) : (l = b, b = function(a, b, c) {
                    return l.call(k(a), c)
                })), b))
                for (; t > g; g++) b(a[g], c, f ? e : e.call(a[g], g, b(a[g], c)));
            return d ? a : l ? b.call(a) : t ? b(a[0], c) : h
        },
        Pa = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = D.createDocumentFragment(),
            b = D.createElement("div"),
            c = D.createElement("input");
        if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", A.leadingWhitespace = 3 === b.firstChild.nodeType, A.tbody = !b.getElementsByTagName("tbody").length,
            A.htmlSerialize = !!b.getElementsByTagName("link").length, A.html5Clone = "<:nav></:nav>" !== D.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), A.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", A.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", A.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, A.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick",
                function() {
                    A.noCloneEvent = !1
                }), b.cloneNode(!0).click()), null == A.deleteExpando) {
            A.deleteExpando = !0;
            try {
                delete b.test
            } catch (pa) {
                A.deleteExpando = !1
            }
        }
        a = b = c = null
    }();
    (function() {
        var b, c = D.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) {
            var e = "on" + b;
            (A[b + "Bubbles"] = e in a) || (c.setAttribute(e, "t"), A[b + "Bubbles"] = !1 === c.attributes[e].expando)
        }
    })();
    var Ua = /^(?:input|select|textarea)$/i,
        Pb = /^key/,
        Qb = /^(?:mouse|contextmenu)|click/,
        jb = /^(?:focusinfocus|focusoutblur)$/,
        kb = /^([^.]*)(?:\.(.+)|)$/;
    k.event = {
        global: {},
        add: function(a, b, c, e, d) {
            var h, f, g, l, t, n, m, p;
            if (f = k._data(a)) {
                c.handler && (g = c, c = g.handler, d = g.selector);
                c.guid || (c.guid = k.guid++);
                (h = f.events) || (h = f.events = {});
                (t = f.handle) || (t = f.handle = function(a) {
                    return "undefined" === typeof k || a && k.event.triggered === a.type ? void 0 : k.event.dispatch.apply(t.elem, arguments)
                }, t.elem = a);
                b = (b || "").match(ca) || [""];
                for (f = b.length; f--;) {
                    var F = kb.exec(b[f]) || [];
                    var q = p = F[1];
                    F = (F[2] || "").split(".").sort();
                    q && (l = k.event.special[q] || {}, q = (d ? l.delegateType : l.bindType) ||
                        q, l = k.event.special[q] || {}, n = k.extend({
                            type: q,
                            origType: p,
                            data: e,
                            handler: c,
                            guid: c.guid,
                            selector: d,
                            needsContext: d && k.expr.match.needsContext.test(d),
                            namespace: F.join(".")
                        }, g), (m = h[q]) || (m = h[q] = [], m.delegateCount = 0, l.setup && !1 !== l.setup.call(a, e, F, t) || (a.addEventListener ? a.addEventListener(q, t, !1) : a.attachEvent && a.attachEvent("on" + q, t))), l.add && (l.add.call(a, n), n.handler.guid || (n.handler.guid = c.guid)), d ? m.splice(m.delegateCount++, 0, n) : m.push(n), k.event.global[q] = !0)
                }
                a = null
            }
        },
        remove: function(a, b, c, e,
            d) {
            var h, f, g, l, t, n, m, p, F = k.hasData(a) && k._data(a);
            if (F && (t = F.events)) {
                b = (b || "").match(ca) || [""];
                for (l = b.length; l--;)
                    if (f = kb.exec(b[l]) || [], n = p = f[1], m = (f[2] || "").split(".").sort(), n) {
                        var q = k.event.special[n] || {};
                        n = (e ? q.delegateType : q.bindType) || n;
                        var K = t[n] || [];
                        f = f[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (g = h = K.length; h--;) {
                            var w = K[h];
                            !d && p !== w.origType || c && c.guid !== w.guid || f && !f.test(w.namespace) || e && e !== w.selector && ("**" !== e || !w.selector) || (K.splice(h, 1), w.selector && K.delegateCount--,
                                q.remove && q.remove.call(a, w))
                        }
                        g && !K.length && (q.teardown && !1 !== q.teardown.call(a, m, F.handle) || k.removeEvent(a, n, F.handle), delete t[n])
                    } else
                        for (n in t) k.event.remove(a, n + b[l], c, e, !0);
                k.isEmptyObject(t) && (delete F.handle, k._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, d) {
            var h, f, g, l, t = [e || D],
                n = na.call(b, "type") ? b.type : b;
            var m = na.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = e = e || D, 3 !== e.nodeType && 8 !== e.nodeType && !jb.test(n + k.event.triggered) && (0 <= n.indexOf(".") && (m = n.split("."), n = m.shift(),
                    m.sort()), f = 0 > n.indexOf(":") && "on" + n, b = b[k.expando] ? b : new k.Event(n, "object" == typeof b && b), b.isTrigger = d ? 2 : 3, b.namespace = m.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : k.makeArray(c, [b]), l = k.event.special[n] || {}, d || !l.trigger || !1 !== l.trigger.apply(e, c))) {
                if (!d && !l.noBubble && !k.isWindow(e)) {
                    var p = l.delegateType || n;
                    for (jb.test(p + n) || (g = g.parentNode); g; g = g.parentNode) t.push(g), h = g;
                    h === (e.ownerDocument ||
                        D) && t.push(h.defaultView || h.parentWindow || a)
                }
                for (m = 0;
                    (g = t[m++]) && !b.isPropagationStopped();) b.type = 1 < m ? p : l.bindType || n, (h = (k._data(g, "events") || {})[b.type] && k._data(g, "handle")) && h.apply(g, c), (h = f && g[f]) && h.apply && k.acceptData(g) && (b.result = h.apply(g, c), !1 === b.result && b.preventDefault());
                if (b.type = n, !(d || b.isDefaultPrevented() || l._default && !1 !== l._default.apply(t.pop(), c)) && k.acceptData(e) && f && e[n] && !k.isWindow(e)) {
                    (h = e[f]) && (e[f] = null);
                    k.event.triggered = n;
                    try {
                        e[n]()
                    } catch (Hb) {}
                    k.event.triggered =
                        void 0;
                    h && (e[f] = h)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = k.event.fix(a);
            var b, c, e, d, h = ka.call(arguments);
            var f = (k._data(this, "events") || {})[a.type] || [];
            var g = k.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !g.preDispatch || !1 !== g.preDispatch.call(this, a)) {
                var l = k.event.handlers.call(this, a, f);
                for (f = 0;
                    (e = l[f++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, d = 0;
                        (c = e.handlers[d++]) && !a.isImmediatePropagationStopped();) a.namespace_re && !a.namespace_re.test(c.namespace) || (a.handleObj =
                        c, a.data = c.data, b = ((k.event.special[c.origType] || {}).handle || c.handler).apply(e.elem, h), void 0 === b || !1 !== (a.result = b) || (a.preventDefault(), a.stopPropagation()));
                return g.postDispatch && g.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, e = [],
                d = b.delegateCount,
                h = a.target;
            if (d && h.nodeType && (!a.button || "click" !== a.type))
                for (; h != this; h = h.parentNode || this)
                    if (1 === h.nodeType && (!0 !== h.disabled || "click" !== a.type)) {
                        var f = [];
                        for (c = 0; d > c; c++) {
                            var g = b[c];
                            var l = g.selector + " ";
                            void 0 === f[l] && (f[l] =
                                g.needsContext ? 0 <= k(l, this).index(h) : k.find(l, this, null, [h]).length);
                            f[l] && f.push(g)
                        }
                        f.length && e.push({
                            elem: h,
                            handlers: f
                        })
                    }
            return d < b.length && e.push({
                elem: this,
                handlers: b.slice(d)
            }), e
        },
        fix: function(a) {
            if (a[k.expando]) return a;
            var b = a.type;
            var c = a,
                e = this.fixHooks[b];
            e || (this.fixHooks[b] = e = Qb.test(b) ? this.mouseHooks : Pb.test(b) ? this.keyHooks : {});
            var d = e.props ? this.props.concat(e.props) : this.props;
            a = new k.Event(c);
            for (b = d.length; b--;) {
                var h = d[b];
                a[h] = c[h]
            }
            return a.target || (a.target = c.srcElement || D), 3 ===
                a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, e.filter ? e.filter(a, c) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, d, h = b.button,
                    f = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || D, d = e.documentElement, c = e.body, a.pageX = b.clientX + (d && d.scrollLeft || c && c.scrollLeft || 0) - (d && d.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || c && c.scrollTop || 0) - (d && d.clientTop || c && c.clientTop || 0)), !a.relatedTarget && f && (a.relatedTarget = f === a.target ? b.toElement : f), a.which || void 0 === h || (a.which = 1 & h ? 1 : 2 & h ? 3 : 4 & h ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !==
                        v() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === v() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return k.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return k.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, e) {
            a = k.extend(new k.Event,
                c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
            e ? k.event.trigger(a, null, b) : k.event.dispatch.call(b, a);
            a.isDefaultPrevented() && c.preventDefault()
        }
    };
    k.removeEvent = D.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        b = "on" + b;
        a.detachEvent && ("undefined" === typeof a[b] && (a[b] = null), a.detachEvent(b, c))
    };
    k.Event = function(a, b) {
        return this instanceof k.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 ===
            a.defaultPrevented && (!1 === a.returnValue || a.getPreventDefault && a.getPreventDefault()) ? m : u) : this.type = a, b && k.extend(this, b), this.timeStamp = a && a.timeStamp || k.now(), void(this[k.expando] = !0)) : new k.Event(a, b)
    };
    k.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = m;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped =
                m;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = m;
            this.stopPropagation()
        }
    };
    k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        k.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, e = a.relatedTarget,
                    d = a.handleObj;
                return (!e || e !== this && !k.contains(this, e)) && (a.type = d.origType, c = d.handler.apply(this, arguments), a.type = b), c
            }
        }
    });
    A.submitBubbles || (k.event.special.submit = {
        setup: function() {
            return k.nodeName(this,
                "form") ? !1 : void k.event.add(this, "click._submit keypress._submit", function(a) {
                a = a.target;
                (a = k.nodeName(a, "input") || k.nodeName(a, "button") ? a.form : void 0) && !k._data(a, "submitBubbles") && (k.event.add(a, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), k._data(a, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && k.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return k.nodeName(this, "form") ? !1 : void k.event.remove(this,
                "._submit")
        }
    });
    A.changeBubbles || (k.event.special.change = {
        setup: function() {
            return Ua.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (k.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), k.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1);
                k.event.simulate("change", this, a, !0)
            })), !1) : void k.event.add(this, "beforeactivate._change", function(a) {
                a = a.target;
                Ua.test(a.nodeName) &&
                    !k._data(a, "changeBubbles") && (k.event.add(a, "change._change", function(a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || k.event.simulate("change", this.parentNode, a, !0)
                    }), k._data(a, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return k.event.remove(this, "._change"), !Ua.test(this.nodeName)
        }
    });
    A.focusinBubbles || k.each({
            focus: "focusin",
            blur: "focusout"
        },
        function(a, b) {
            var c = function(a) {
                k.event.simulate(b, a.target, k.event.fix(a), !0)
            };
            k.event.special[b] = {
                setup: function() {
                    var e = this.ownerDocument || this,
                        d = k._data(e, b);
                    d || e.addEventListener(a, c, !0);
                    k._data(e, b, (d || 0) + 1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this,
                        d = k._data(e, b) - 1;
                    d ? k._data(e, b, d) : (e.removeEventListener(a, c, !0), k._removeData(e, b))
                }
            }
        });
    k.fn.extend({
        on: function(a, b, c, e, d) {
            var h, f;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (h in a) this.on(h, b, c, a[h], d);
                return this
            }
            if (null ==
                c && null == e ? (e = b, c = b = void 0) : null == e && ("string" == typeof b ? (e = c, c = void 0) : (e = c, c = b, b = void 0)), !1 === e) e = u;
            else if (!e) return this;
            return 1 === d && (f = e, e = function(a) {
                return k().off(a), f.apply(this, arguments)
            }, e.guid = f.guid || (f.guid = k.guid++)), this.each(function() {
                k.event.add(this, a, e, c, b)
            })
        },
        one: function(a, b, c, e) {
            return this.on(a, b, c, e, 1)
        },
        off: function(a, b, c) {
            var e, d;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, k(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector,
                e.handler), this;
            if ("object" == typeof a) {
                for (d in a) this.off(d, b, a[d]);
                return this
            }
            return (!1 === b || "function" == typeof b) && (c = b, b = void 0), !1 === c && (c = u), this.each(function() {
                k.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                k.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? k.event.trigger(a, b, c, !0) : void 0
        }
    });
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Rb = / jQuery\d+="(?:null|\d+)"/g,
        lb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
        Va = /^\s+/,
        mb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        nb = /<([\w:]+)/,
        ob = /<tbody/i,
        Sb = /<|&#?\w+;/,
        Tb = /<(?:script|style|link)/i,
        Ub = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pb = /^$|\/(?:java|ecma)script/i,
        Fb = /^true\/(.*)/,
        Vb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ba = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>",
                "</object>"
            ],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: A.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Wa = x(D).appendChild(D.createElement("div"));
    ba.optgroup = ba.option;
    ba.tbody = ba.tfoot = ba.colgroup = ba.caption = ba.thead;
    ba.th = ba.td;
    k.extend({
        clone: function(a, b, c) {
            var e, d, h, f = k.contains(a.ownerDocument, a);
            if (A.html5Clone || k.isXMLDoc(a) || !lb.test("<" +
                    a.nodeName + ">") ? d = a.cloneNode(!0) : (Wa.innerHTML = a.outerHTML, Wa.removeChild(d = Wa.firstChild)), !(A.noCloneEvent && A.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || k.isXMLDoc(a))) {
                var g = w(d);
                var l = w(a);
                for (h = 0; null != (e = l[h]); ++h)
                    if (g[h]) {
                        var t = void 0,
                            n, m = e,
                            p = g[h];
                        if (1 === p.nodeType) {
                            if (n = p.nodeName.toLowerCase(), !A.noCloneEvent && p[k.expando]) {
                                e = k._data(p);
                                for (t in e.events) k.removeEvent(p, t, e.handle);
                                p.removeAttribute(k.expando)
                            }
                            "script" === n && p.text !== m.text ? (H(p).text = m.text, J(p)) : "object" === n ? (p.parentNode &&
                                (p.outerHTML = m.outerHTML), A.html5Clone && m.innerHTML && !k.trim(p.innerHTML) && (p.innerHTML = m.innerHTML)) : "input" === n && Pa.test(m.type) ? (p.defaultChecked = p.checked = m.checked, p.value !== m.value && (p.value = m.value)) : "option" === n ? p.defaultSelected = p.selected = m.defaultSelected : ("input" === n || "textarea" === n) && (p.defaultValue = m.defaultValue)
                        }
                    }
            }
            if (b)
                if (c)
                    for (l = l || w(a), g = g || w(d), h = 0; null != (e = l[h]); h++) B(e, g[h]);
                else B(a, d);
            return g = w(d, "script"), 0 < g.length && r(g, !f && w(a, "script")), d
        },
        buildFragment: function(a, b, c,
            e) {
            for (var d, h, f, g, l, t, n, m = a.length, p = x(b), q = [], F = 0; m > F; F++)
                if (h = a[F], h || 0 === h)
                    if ("object" === k.type(h)) k.merge(q, h.nodeType ? [h] : h);
                    else if (Sb.test(h)) {
                g = g || p.appendChild(b.createElement("div"));
                l = (nb.exec(h) || ["", ""])[1].toLowerCase();
                n = ba[l] || ba._default;
                g.innerHTML = n[1] + h.replace(mb, "<$1></$2>") + n[2];
                for (d = n[0]; d--;) g = g.lastChild;
                if (!A.leadingWhitespace && Va.test(h) && q.push(b.createTextNode(Va.exec(h)[0])), !A.tbody)
                    for (d = (h = "table" !== l || ob.test(h) ? "<table>" !== n[1] || ob.test(h) ? 0 : g : g.firstChild) &&
                        h.childNodes.length; d--;) k.nodeName(t = h.childNodes[d], "tbody") && !t.childNodes.length && h.removeChild(t);
                k.merge(q, g.childNodes);
                for (g.textContent = ""; g.firstChild;) g.removeChild(g.firstChild);
                g = p.lastChild
            } else q.push(b.createTextNode(h));
            g && p.removeChild(g);
            A.appendChecked || k.grep(w(q, "input"), E);
            for (F = 0; h = q[F++];)
                if ((!e || -1 === k.inArray(h, e)) && (f = k.contains(h.ownerDocument, h), g = w(p.appendChild(h), "script"), f && r(g), c))
                    for (d = 0; h = g[d++];) pb.test(h.type || "") && c.push(h);
            return p
        },
        cleanData: function(a, b) {
            for (var c,
                    e, d, h, f = 0, g = k.expando, l = k.cache, n = A.deleteExpando, t = k.event.special; null != (c = a[f]); f++)
                if ((b || k.acceptData(c)) && (d = c[g], h = d && l[d])) {
                    if (h.events)
                        for (e in h.events) t[e] ? k.event.remove(c, e) : k.removeEvent(c, e, h.handle);
                    l[d] && (delete l[d], n ? delete c[g] : "undefined" !== typeof c.removeAttribute ? c.removeAttribute(g) : c[g] = null, ha.push(d))
                }
        }
    });
    k.fn.extend({
        text: function(a) {
            return ra(this, function(a) {
                    return void 0 === a ? k.text(this) : this.empty().append((this[0] && this[0].ownerDocument || D).createTextNode(a))
                }, null,
                a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || y(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = y(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
                function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
        },
        remove: function(a, b) {
            for (var c, e = a ? k.filter(a, this) : this, d = 0; null != (c = e[d]); d++) b || 1 !== c.nodeType || k.cleanData(w(c)), c.parentNode && (b && k.contains(c.ownerDocument, c) && r(w(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && k.cleanData(w(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && k.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return k.clone(this, a, b)
            })
        },
        html: function(a) {
            return ra(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    e = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(Rb, "") : void 0;
                if (!("string" != typeof a || Tb.test(a) || !A.htmlSerialize && lb.test(a) || !A.leadingWhitespace && Va.test(a) || ba[(nb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(mb, "<$1></$2>");
                    try {
                        for (; e > c; c++) b = this[c] || {}, 1 === b.nodeType && (k.cleanData(w(b, !1)), b.innerHTML =
                            a);
                        b = 0
                    } catch (rc) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode;
                k.cleanData(w(this));
                a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = Ga.apply([], a);
            var c, e, d, h = 0,
                f = this.length,
                g = this,
                l = f - 1,
                n = a[0],
                t = k.isFunction(n);
            if (t || 1 < f && "string" == typeof n && !A.checkClone && Ub.test(n)) return this.each(function(c) {
                var e =
                    g.eq(c);
                t && (a[0] = n.call(this, c, e.html()));
                e.domManip(a, b)
            });
            if (f && (d = k.buildFragment(a, this[0].ownerDocument, !1, this), c = d.firstChild, 1 === d.childNodes.length && (d = c), c)) {
                var m = k.map(w(d, "script"), H);
                for (e = m.length; f > h; h++) c = d, h !== l && (c = k.clone(c, !0, !0), e && k.merge(m, w(c, "script"))), b.call(this[h], c, h);
                if (e)
                    for (d = m[m.length - 1].ownerDocument, k.map(m, J), h = 0; e > h; h++) c = m[h], pb.test(c.type || "") && !k._data(c, "globalEval") && k.contains(d, c) && (c.src ? k._evalUrl && k._evalUrl(c.src) : k.globalEval((c.text || c.textContent ||
                        c.innerHTML || "").replace(Vb, "")));
                d = c = null
            }
            return this
        }
    });
    k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        k.fn[a] = function(a) {
            for (var c = 0, e = [], d = k(a), h = d.length - 1; h >= c; c++) a = c === h ? this : this.clone(!0), k(d[c])[b](a), la.apply(e, a.get());
            return this.pushStack(e)
        }
    });
    var za, fb = {};
    ! function() {
        var a, b = D.createElement("div");
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        var c = b.getElementsByTagName("a")[0];
        c.style.cssText = "float:left;opacity:.5";
        A.opacity = /^0.5/.test(c.style.opacity);
        A.cssFloat = !!c.style.cssFloat;
        b.style.backgroundClip = "content-box";
        b.cloneNode(!0).style.backgroundClip = "";
        A.clearCloneStyle = "content-box" === b.style.backgroundClip;
        c = b = null;
        A.shrinkWrapBlocks = function() {
            var b;
            if (null == a) {
                if (b = D.getElementsByTagName("body")[0], !b) return;
                var c = D.createElement("div");
                var e = D.createElement("div");
                b.appendChild(c).appendChild(e);
                a = !1;
                "undefined" !== typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1",
                    e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", a = 3 !== e.offsetWidth);
                b.removeChild(c)
            }
            return a
        }
    }();
    var qb = /^margin/,
        Ea = new RegExp("^(" + Ka + ")(?!px)[a-z%]+$", "i"),
        ja, ma, Wb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (ja = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, ma = function(a, b, c) {
        var e, d, h, f, g = a.style;
        return c = c || ja(a), f = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== f || k.contains(a.ownerDocument, a) || (f = k.style(a, b)), Ea.test(f) && qb.test(b) && (e = g.width, d = g.minWidth,
            h = g.maxWidth, g.minWidth = g.maxWidth = g.width = f, f = c.width, g.width = e, g.minWidth = d, g.maxWidth = h)), void 0 === f ? f : f + ""
    }) : D.documentElement.currentStyle && (ja = function(a) {
        return a.currentStyle
    }, ma = function(a, b, c) {
        var e, d, h, f, g = a.style;
        return c = c || ja(a), f = c ? c[b] : void 0, null == f && g && g[b] && (f = g[b]), Ea.test(f) && !Wb.test(b) && (e = g.left, d = a.runtimeStyle, h = d && d.left, h && (d.left = a.currentStyle.left), g.left = "fontSize" === b ? "1em" : f, f = g.pixelLeft + "px", g.left = e, h && (d.left = h)), void 0 === f ? f : f + "" || "auto"
    });
    ! function() {
        function b() {
            var b,
                c, g = D.getElementsByTagName("body")[0];
            g && (b = D.createElement("div"), c = D.createElement("div"), b.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", g.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", k.swap(g, null != g.style.zoom ? {
                zoom: 1
            } : {}, function() {
                e = 4 === c.offsetWidth
            }), d = !0, h = !1, f = !0, a.getComputedStyle && (h = "1%" !==
                (a.getComputedStyle(c, null) || {}).top, d = "4px" === (a.getComputedStyle(c, null) || {
                    width: "4px"
                }).width), g.removeChild(b), c = g = null)
        }
        var c, e, d, h, f, g = D.createElement("div");
        g.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        var l = g.getElementsByTagName("a")[0];
        l.style.cssText = "float:left;opacity:.5";
        A.opacity = /^0.5/.test(l.style.opacity);
        A.cssFloat = !!l.style.cssFloat;
        g.style.backgroundClip = "content-box";
        g.cloneNode(!0).style.backgroundClip = "";
        A.clearCloneStyle = "content-box" ===
            g.style.backgroundClip;
        l = g = null;
        k.extend(A, {
            reliableHiddenOffsets: function() {
                if (null != c) return c;
                var a, b, e, d = D.createElement("div"),
                    h = D.getElementsByTagName("body")[0];
                if (h) return d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = D.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", h.appendChild(a).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = d.getElementsByTagName("td"),
                    b[0].style.cssText = "padding:0;margin:0;border:0;display:none", e = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", c = e && 0 === b[0].offsetHeight, h.removeChild(a), c
            },
            boxSizing: function() {
                return null == e && b(), e
            },
            boxSizingReliable: function() {
                return null == d && b(), d
            },
            pixelPosition: function() {
                return null == h && b(), h
            },
            reliableMarginRight: function() {
                var b;
                if (null == f && a.getComputedStyle) {
                    if (b = D.getElementsByTagName("body")[0], !b) return;
                    var c = D.createElement("div");
                    var e = D.createElement("div");
                    c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
                    b.appendChild(c).appendChild(e);
                    var d = e.appendChild(D.createElement("div"));
                    d.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
                    d.style.marginRight = d.style.width = "0";
                    e.style.width = "1px";
                    f = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight);
                    b.removeChild(c)
                }
                return f
            }
        })
    }();
    k.swap = function(a, b, c, e) {
        var d, h = {};
        for (d in b) h[d] = a.style[d], a.style[d] = b[d];
        c = c.apply(a, e || []);
        for (d in b) a.style[d] = h[d];
        return c
    };
    var Xa = /alpha\([^)]*\)/i,
        Xb = /opacity\s*=\s*([^)]*)/,
        Yb = /^(none|table(?!-c[ea]).+)/,
        Gb = new RegExp("^(" + Ka + ")(.*)$", "i"),
        Zb = new RegExp("^([+-])=(" + Ka + ")", "i"),
        $b = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        rb = {
            letterSpacing: 0,
            fontWeight: 400
        },
        gb = ["Webkit", "O", "Moz", "ms"];
    k.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = ma(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": A.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var d, h, f, g = k.camelCase(b),
                    l = a.style;
                if (b = k.cssProps[g] || (k.cssProps[g] = z(l, g)), f = k.cssHooks[b] || k.cssHooks[g], void 0 === c) return f && "get" in f && void 0 !== (d = f.get(a, !1, e)) ? d : l[b];
                if (h = typeof c, "string" === h && (d = Zb.exec(c)) && (c = (d[1] + 1) * d[2] + parseFloat(k.css(a, b)), h = "number"),
                    null != c && c === c && ("number" !== h || k.cssNumber[g] || (c += "px"), A.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (l[b] = "inherit"), !(f && "set" in f && void 0 === (c = f.set(a, c, e))))) try {
                    l[b] = "", l[b] = c
                } catch (tc) {}
            }
        },
        css: function(a, b, c, e) {
            var d, h, f, g = k.camelCase(b);
            return b = k.cssProps[g] || (k.cssProps[g] = z(a.style, g)), f = k.cssHooks[b] || k.cssHooks[g], f && "get" in f && (h = f.get(a, !0, c)), void 0 === h && (h = ma(a, b, e)), "normal" === h && b in rb && (h = rb[b]), "" === c || c ? (d = parseFloat(h), !0 === c || k.isNumeric(d) ? d || 0 : h) : h
        }
    });
    k.each(["height",
        "width"
    ], function(a, b) {
        k.cssHooks[b] = {
            get: function(a, c, e) {
                return c ? 0 === a.offsetWidth && Yb.test(k.css(a, "display")) ? k.swap(a, $b, function() {
                    return W(a, b, e)
                }) : W(a, b, e) : void 0
            },
            set: function(a, c, e) {
                var d = e && ja(a);
                return Q(a, c, e ? Z(a, b, e, A.boxSizing() && "border-box" === k.css(a, "boxSizing", !1, d), d) : 0)
            }
        }
    });
    A.opacity || (k.cssHooks.opacity = {
        get: function(a, b) {
            return Xb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                e = a.currentStyle,
                d = k.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                h = e && e.filter || c.filter || "";
            c.zoom = 1;
            (1 <= b || "" === b) && "" === k.trim(h.replace(Xa, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || e && !e.filter) || (c.filter = Xa.test(h) ? h.replace(Xa, d) : h + " " + d)
        }
    });
    k.cssHooks.marginRight = S(A.reliableMarginRight, function(a, b) {
        return b ? k.swap(a, {
            display: "inline-block"
        }, ma, [a, "marginRight"]) : void 0
    });
    k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        k.cssHooks[a + b] = {
            expand: function(c) {
                var e = 0,
                    d = {};
                for (c = "string" ==
                    typeof c ? c.split(" ") : [c]; 4 > e; e++) d[a + ea[e] + b] = c[e] || c[e - 2] || c[0];
                return d
            }
        };
        qb.test(a) || (k.cssHooks[a + b].set = Q)
    });
    k.fn.extend({
        css: function(a, b) {
            return ra(this, function(a, b, c) {
                var e, d = {},
                    h = 0;
                if (k.isArray(b)) {
                    c = ja(a);
                    for (e = b.length; e > h; h++) d[b[h]] = k.css(a, b[h], !1, c);
                    return d
                }
                return void 0 !== c ? k.style(a, b, c) : k.css(a, b)
            }, a, b, 1 < arguments.length)
        },
        show: function() {
            return C(this, !0)
        },
        hide: function() {
            return C(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Aa(this) ?
                    k(this).show() : k(this).hide()
            })
        }
    });
    k.Tween = M;
    M.prototype = {
        constructor: M,
        init: function(a, b, c, e, d, h) {
            this.elem = a;
            this.prop = c;
            this.easing = d || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = h || (k.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = M.propHooks[this.prop];
            return a && a.get ? a.get(this) : M.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = M.propHooks[this.prop];
            return this.pos = b = this.options.duration ? k.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) :
                a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : M.propHooks._default.set(this), this
        }
    };
    M.prototype.init.prototype = M.prototype;
    M.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = k.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                k.fx.step[a.prop] ? k.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[k.cssProps[a.prop]] || k.cssHooks[a.prop]) ?
                    k.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    k.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    };
    k.fx = M.prototype.init;
    k.fx.step = {};
    var ua, La, ac = /^(?:toggle|show|hide)$/,
        sb = new RegExp("^(?:([+-])=|)(" + Ka + ")([a-z%]*)$", "i"),
        bc = /queueHooks$/,
        Fa = [function(a, b, c) {
            var e, d, h, f, g, l, n, m = this,
                p = {},
                t = a.style,
                q = a.nodeType && Aa(a),
                w = k._data(a,
                    "fxshow");
            c.queue || (f = k._queueHooks(a, "fx"), null == f.unqueued && (f.unqueued = 0, g = f.empty.fire, f.empty.fire = function() {
                f.unqueued || g()
            }), f.unqueued++, m.always(function() {
                m.always(function() {
                    f.unqueued--;
                    k.queue(a, "fx").length || f.empty.fire()
                })
            }));
            1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [t.overflow, t.overflowX, t.overflowY], l = k.css(a, "display"), n = I(a.nodeName), "none" === l && (l = n), "inline" === l && "none" === k.css(a, "float") && (A.inlineBlockNeedsLayout && "inline" !== n ? t.zoom = 1 : t.display = "inline-block"));
            c.overflow && (t.overflow = "hidden", A.shrinkWrapBlocks() || m.always(function() {
                t.overflow = c.overflow[0];
                t.overflowX = c.overflow[1];
                t.overflowY = c.overflow[2]
            }));
            for (e in b)
                if (d = b[e], ac.exec(d)) {
                    if (delete b[e], h = h || "toggle" === d, d === (q ? "hide" : "show")) {
                        if ("show" !== d || !w || void 0 === w[e]) continue;
                        q = !0
                    }
                    p[e] = w && w[e] || k.style(a, e)
                }
            if (!k.isEmptyObject(p))
                for (e in w ? "hidden" in w && (q = w.hidden) : w = k._data(a, "fxshow", {}), h && (w.hidden = !q), q ? k(a).show() : m.done(function() {
                        k(a).hide()
                    }), m.done(function() {
                        var b;
                        k._removeData(a,
                            "fxshow");
                        for (b in p) k.style(a, b, p[b])
                    }), p) b = da(q ? w[e] : 0, e, m), e in w || (w[e] = b.start, q && (b.end = b.start, b.start = "width" === e || "height" === e ? 1 : 0))
        }],
        Ba = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    e = c.cur(),
                    d = sb.exec(b),
                    h = d && d[3] || (k.cssNumber[a] ? "" : "px"),
                    f = (k.cssNumber[a] || "px" !== h && +e) && sb.exec(k.css(c.elem, a)),
                    g = 1,
                    l = 20;
                if (f && f[3] !== h) {
                    h = h || f[3];
                    d = d || [];
                    f = +e || 1;
                    do g = g || ".5", f /= g, k.style(c.elem, a, f + h); while (g !== (g = c.cur() / e) && 1 !== g && --l)
                }
                return d && (f = c.start = +f || +e || 0, c.unit = h, c.end = d[1] ? f + (d[1] + 1) *
                    d[2] : +d[2]), c
            }]
        };
    k.Animation = k.extend(N, {
        tweener: function(a, b) {
            k.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, e = 0, d = a.length; d > e; e++) c = a[e], Ba[c] = Ba[c] || [], Ba[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? Fa.unshift(a) : Fa.push(a)
        }
    });
    k.speed = function(a, b, c) {
        var e = a && "object" == typeof a ? k.extend({}, a) : {
            complete: c || !c && b || k.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !k.isFunction(b) && b
        };
        return e.duration = k.fx.off ? 0 : "number" == typeof e.duration ? e.duration : e.duration in k.fx.speeds ? k.fx.speeds[e.duration] :
            k.fx.speeds._default, (null == e.queue || !0 === e.queue) && (e.queue = "fx"), e.old = e.complete, e.complete = function() {
                k.isFunction(e.old) && e.old.call(this);
                e.queue && k.dequeue(this, e.queue)
            }, e
    };
    k.fn.extend({
        fadeTo: function(a, b, c, e) {
            return this.filter(Aa).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, e)
        },
        animate: function(a, b, c, e) {
            var d = k.isEmptyObject(a),
                h = k.speed(b, c, e);
            b = function() {
                var b = N(this, k.extend({}, a), h);
                (d || k._data(this, "finish")) && b.stop(!0)
            };
            return b.finish = b, d || !1 === h.queue ? this.each(b) : this.queue(h.queue,
                b)
        },
        stop: function(a, b, c) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop;
                b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    d = null != a && a + "queueHooks",
                    h = k.timers,
                    f = k._data(this);
                if (d) f[d] && f[d].stop && e(f[d]);
                else
                    for (d in f) f[d] && f[d].stop && bc.test(d) && e(f[d]);
                for (d = h.length; d--;) h[d].elem !== this || null != a && h[d].queue !== a || (h[d].anim.stop(c), b = !1, h.splice(d, 1));
                !b && c || k.dequeue(this, a)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var b =
                    k._data(this),
                    c = b[a + "queue"];
                var e = b[a + "queueHooks"];
                var d = k.timers,
                    h = c ? c.length : 0;
                b.finish = !0;
                k.queue(this, a, []);
                e && e.stop && e.stop.call(this, !0);
                for (e = d.length; e--;) d[e].elem === this && d[e].queue === a && (d[e].anim.stop(!0), d.splice(e, 1));
                for (e = 0; h > e; e++) c[e] && c[e].finish && c[e].finish.call(this);
                delete b.finish
            })
        }
    });
    k.each(["toggle", "show", "hide"], function(a, b) {
        var c = k.fn[b];
        k.fn[b] = function(a, e, d) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(U(b, !0), a, e, d)
        }
    });
    k.each({
        slideDown: U("show"),
        slideUp: U("hide"),
        slideToggle: U("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        k.fn[a] = function(a, c, e) {
            return this.animate(b, a, c, e)
        }
    });
    k.timers = [];
    k.fx.tick = function() {
        var a = k.timers,
            b = 0;
        for (ua = k.now(); b < a.length; b++) {
            var c = a[b];
            c() || a[b] !== c || a.splice(b--, 1)
        }
        a.length || k.fx.stop();
        ua = void 0
    };
    k.fx.timer = function(a) {
        k.timers.push(a);
        a() ? k.fx.start() : k.timers.pop()
    };
    k.fx.interval = 13;
    k.fx.start = function() {
        La || (La = setInterval(k.fx.tick, k.fx.interval))
    };
    k.fx.stop = function() {
        clearInterval(La);
        La = null
    };
    k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    k.fn.delay = function(a, b) {
        return a = k.fx ? k.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var e = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(e)
            }
        })
    };
    (function() {
        var a = D.createElement("div");
        a.setAttribute("className", "t");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        var b = a.getElementsByTagName("a")[0];
        var c = D.createElement("select");
        var e = c.appendChild(D.createElement("option"));
        var d = a.getElementsByTagName("input")[0];
        b.style.cssText = "top:1px";
        A.getSetAttribute = "t" !== a.className;
        A.style = /top/.test(b.getAttribute("style"));
        A.hrefNormalized = "/a" === b.getAttribute("href");
        A.checkOn = !!d.value;
        A.optSelected = e.selected;
        A.enctype = !!D.createElement("form").enctype;
        c.disabled = !0;
        A.optDisabled = !e.disabled;
        d = D.createElement("input");
        d.setAttribute("value", "");
        A.input = "" === d.getAttribute("value");
        d.value = "t";
        d.setAttribute("type", "radio");
        A.radioValue = "t" === d.value
    })();
    var cc = /\r/g;
    k.fn.extend({
        val: function(a) {
            var b, c, e, d = this[0];
            if (arguments.length) return e = k.isFunction(a), this.each(function(c) {
                var d;
                1 === this.nodeType && (d = e ? a.call(this, c, k(this).val()) : a, null == d ? d = "" : "number" == typeof d ? d += "" : k.isArray(d) && (d = k.map(d, function(a) {
                    return null == a ? "" : a + ""
                })), b = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, d, "value") || (this.value = d))
            });
            if (d) return b = k.valHooks[d.type] || k.valHooks[d.nodeName.toLowerCase()], b && "get" in b && void 0 !==
                (c = b.get(d, "value")) ? c : (c = d.value, "string" == typeof c ? c.replace(cc, "") : null == c ? "" : c)
        }
    });
    k.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = k.find.attr(a, "value");
                    return null != b ? b : k.text(a)
                }
            },
            select: {
                get: function(a) {
                    for (var b, c = a.options, e = a.selectedIndex, d = "select-one" === a.type || 0 > e, h = d ? null : [], f = d ? e + 1 : c.length, g = 0 > e ? f : d ? e : 0; f > g; g++)
                        if (b = c[g], !(!b.selected && g !== e || (A.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && k.nodeName(b.parentNode, "optgroup"))) {
                            if (a = k(b).val(),
                                d) return a;
                            h.push(a)
                        }
                    return h
                },
                set: function(a, b) {
                    for (var c, e, d = a.options, h = k.makeArray(b), f = d.length; f--;)
                        if (e = d[f], 0 <= k.inArray(k.valHooks.option.get(e), h)) try {
                            e.selected = c = !0
                        } catch (sc) {
                            e.scrollHeight
                        } else e.selected = !1;
                    return c || (a.selectedIndex = -1), d
                }
            }
        }
    });
    k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(a, b) {
                return k.isArray(b) ? a.checked = 0 <= k.inArray(k(a).val(), b) : void 0
            }
        };
        A.checkOn || (k.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var xa,
        oa = k.expr.attrHandle,
        Za = /^(?:checked|selected)$/i,
        sa = A.getSetAttribute,
        Ma = A.input;
    k.fn.extend({
        attr: function(a, b) {
            return ra(this, k.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                k.removeAttr(this, a)
            })
        }
    });
    k.extend({
        attr: function(a, b, c) {
            var e, d, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return "undefined" === typeof a.getAttribute ? k.prop(a, b, c) : (1 === h && k.isXMLDoc(a) || (b = b.toLowerCase(), e = k.attrHooks[b] || (k.expr.match.bool.test(b) ? dc : xa)), void 0 === c ? e && "get" in e && null !== (d =
                e.get(a, b)) ? d : (d = k.find.attr(a, b), null == d ? void 0 : d) : null !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : void k.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, e = 0,
                d = b && b.match(ca);
            if (d && 1 === a.nodeType)
                for (; c = d[e++];) {
                    var h = k.propFix[c] || c;
                    k.expr.match.bool.test(c) ? Ma && sa || !Za.test(c) ? a[h] = !1 : a[k.camelCase("default-" + c)] = a[h] = !1 : k.attr(a, c, "");
                    a.removeAttribute(sa ? c : h)
                }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!A.radioValue && "radio" === b && k.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    });
    var dc = {
        set: function(a, b, c) {
            return !1 === b ? k.removeAttr(a, c) : Ma && sa || !Za.test(c) ? a.setAttribute(!sa && k.propFix[c] || c, c) : a[k.camelCase("default-" + c)] = a[c] = !0, c
        }
    };
    k.each(k.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = oa[b] || k.find.attr;
        oa[b] = Ma && sa || !Za.test(b) ? function(a, b, e) {
            var d, h;
            return e || (h = oa[b], oa[b] = d, d = null != c(a, b, e) ? b.toLowerCase() : null, oa[b] = h), d
        } : function(a, b, c) {
            return c ? void 0 : a[k.camelCase("default-" + b)] ? b.toLowerCase() :
                null
        }
    });
    Ma && sa || (k.attrHooks.value = {
        set: function(a, b, c) {
            return k.nodeName(a, "input") ? void(a.defaultValue = b) : xa && xa.set(a, b, c)
        }
    });
    sa || (xa = {
        set: function(a, b, c) {
            var e = a.getAttributeNode(c);
            return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(c)), e.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, oa.id = oa.name = oa.coords = function(a, b, c) {
        var e;
        return c ? void 0 : (e = a.getAttributeNode(b)) && "" !== e.value ? e.value : null
    }, k.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c &&
                c.specified ? c.value : void 0
        },
        set: xa.set
    }, k.attrHooks.contenteditable = {
        set: function(a, b, c) {
            xa.set(a, "" === b ? !1 : b, c)
        }
    }, k.each(["width", "height"], function(a, b) {
        k.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    }));
    A.style || (k.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var ec = /^(?:input|select|textarea|button|object)$/i,
        fc = /^(?:a|area)$/i;
    k.fn.extend({
        prop: function(a, b) {
            return ra(this, k.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            return a = k.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (F) {}
            })
        }
    });
    k.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var e, d, h, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return h = 1 !== f || !k.isXMLDoc(a), h && (b = k.propFix[b] || b, d = k.propHooks[b]), void 0 !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : a[b] = c : d && "get" in d && null !== (e = d.get(a, b)) ? e : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = k.find.attr(a, "tabindex");
                    return b ? parseInt(b,
                        10) : ec.test(a.nodeName) || fc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    });
    A.hrefNormalized || k.each(["href", "src"], function(a, b) {
        k.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    });
    A.optSelected || (k.propHooks.selected = {
        get: function(a) {
            a = a.parentNode;
            return a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex), null
        }
    });
    k.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        k.propFix[this.toLowerCase()] = this
    });
    A.enctype ||
        (k.propFix.enctype = "encoding");
    var $a = /[\t\r\n\f]/g;
    k.fn.extend({
        addClass: function(a) {
            var b, c, e, d, h = 0,
                f = this.length;
            var g = "string" == typeof a && a;
            if (k.isFunction(a)) return this.each(function(b) {
                k(this).addClass(a.call(this, b, this.className))
            });
            if (g)
                for (g = (a || "").match(ca) || []; f > h; h++)
                    if (b = this[h], c = 1 === b.nodeType && (b.className ? (" " + b.className + " ").replace($a, " ") : " ")) {
                        for (d = 0; e = g[d++];) 0 > c.indexOf(" " + e + " ") && (c += e + " ");
                        c = k.trim(c);
                        b.className !== c && (b.className = c)
                    }
            return this
        },
        removeClass: function(a) {
            var b,
                c, e, d, h = 0,
                f = this.length;
            var g = 0 === arguments.length || "string" == typeof a && a;
            if (k.isFunction(a)) return this.each(function(b) {
                k(this).removeClass(a.call(this, b, this.className))
            });
            if (g)
                for (g = (a || "").match(ca) || []; f > h; h++)
                    if (b = this[h], c = 1 === b.nodeType && (b.className ? (" " + b.className + " ").replace($a, " ") : "")) {
                        for (d = 0; e = g[d++];)
                            for (; 0 <= c.indexOf(" " + e + " ");) c = c.replace(" " + e + " ", " ");
                        c = a ? k.trim(c) : "";
                        b.className !== c && (b.className = c)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b &&
                "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(k.isFunction(a) ? function(c) {
                    k(this).toggleClass(a.call(this, c, this.className, b), b)
                } : function() {
                    if ("string" === c)
                        for (var b, e = 0, d = k(this), h = a.match(ca) || []; b = h[e++];) d.hasClass(b) ? d.removeClass(b) : d.addClass(b);
                    else("undefined" === c || "boolean" === c) && (this.className && k._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : k._data(this, "__className__") || "")
                })
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var b = 0, c = this.length; c >
                b; b++)
                if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace($a, " ").indexOf(a)) return !0;
            return !1
        }
    });
    k.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        k.fn[b] = function(a, c) {
            return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
        }
    });
    k.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b ||
                a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, e) {
            return this.on(b, a, c, e)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var ab = k.now(),
        bb = /\?/,
        gc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    k.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, e = null,
            d = k.trim(b +
                "");
        return d && !k.trim(d.replace(gc, function(a, b, d, h) {
            return c && b && (e = 0), 0 === e ? a : (c = d || b, e += !h - !d, "")
        })) ? Function("return " + d)() : k.error("Invalid JSON: " + b)
    };
    k.parseXML = function(b) {
        var c, e;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (e = new DOMParser, c = e.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (pa) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + b), c
    };
    var hc = /#.*$/,
        tb = /([?&])_=[^&]*/,
        ic = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        jc = /^(?:GET|HEAD)$/,
        kc = /^\/\//,
        ub = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        vb = {},
        Qa = {},
        wb = "*/".concat("*");
    try {
        var ta = location.href
    } catch (t) {
        ta = D.createElement("a"), ta.href = "", ta = ta.href
    }
    var ya = ub.exec(ta.toLowerCase()) || [];
    k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ta,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ya[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": k.parseJSON,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? G(G(a, k.ajaxSettings), b) : G(k.ajaxSettings, a)
        },
        ajaxPrefilter: O(vb),
        ajaxTransport: O(Qa),
        ajax: function(a,
            b) {
            function c(a, b, c, e) {
                var d, n, L, r = b;
                if (2 !== t) {
                    t = 2;
                    f && clearTimeout(f);
                    l = void 0;
                    h = e || "";
                    G.readyState = 0 < a ? 4 : 0;
                    e = 200 <= a && 300 > a || 304 === a;
                    if (c) {
                        var y = m;
                        for (var P = G, T, C, x, v, H = y.contents, aa = y.dataTypes;
                            "*" === aa[0];) aa.shift(), void 0 === C && (C = y.mimeType || P.getResponseHeader("Content-Type"));
                        if (C)
                            for (v in H)
                                if (H[v] && H[v].test(C)) {
                                    aa.unshift(v);
                                    break
                                }
                        if (aa[0] in c) x = aa[0];
                        else {
                            for (v in c) {
                                if (!aa[0] || y.converters[v + " " + aa[0]]) {
                                    x = v;
                                    break
                                }
                                T || (T = v)
                            }
                            x = x || T
                        }
                        y = x ? (x !== aa[0] && aa.unshift(x), c[x]) : void 0
                    }
                    a: {
                        c = m;T = y;C = G;
                        x = e;
                        var N, B, O;y = {};P = c.dataTypes.slice();
                        if (P[1])
                            for (N in c.converters) y[N.toLowerCase()] = c.converters[N];
                        for (v = P.shift(); v;)
                            if (c.responseFields[v] && (C[c.responseFields[v]] = T), !O && x && c.dataFilter && (T = c.dataFilter(T, c.dataType)), O = v, v = P.shift())
                                if ("*" === v) v = O;
                                else if ("*" !== O && O !== v) {
                            if (N = y[O + " " + v] || y["* " + v], !N)
                                for (Q in y)
                                    if (B = Q.split(" "), B[1] === v && (N = y[O + " " + B[0]] || y["* " + B[0]])) {
                                        !0 === N ? N = y[Q] : !0 !== y[Q] && (v = B[0], P.unshift(B[1]));
                                        break
                                    }
                            if (!0 !== N)
                                if (N && c["throws"]) T = N(T);
                                else try {
                                    T = N(T)
                                } catch (Kb) {
                                    var Q = {
                                        state: "parsererror",
                                        error: N ? Kb : "No conversion from " + O + " to " + v
                                    };
                                    break a
                                }
                        }
                        Q = {
                            state: "success",
                            data: T
                        }
                    }
                    y = Q;
                    e ? (m.ifModified && (L = G.getResponseHeader("Last-Modified"), L && (k.lastModified[E] = L), L = G.getResponseHeader("etag"), L && (k.etag[E] = L)), 204 === a || "HEAD" === m.type ? r = "nocontent" : 304 === a ? r = "notmodified" : (r = y.state, d = y.data, n = y.error, e = !n)) : (n = r, (a || !r) && (r = "error", 0 > a && (a = 0)));
                    G.status = a;
                    G.statusText = (b || r) + "";
                    e ? w.resolveWith(p, [d, r, G]) : w.rejectWith(p, [G, r, n]);
                    G.statusCode(u);
                    u = void 0;
                    g && q.trigger(e ? "ajaxSuccess" :
                        "ajaxError", [G, m, e ? d : n]);
                    z.fireWith(p, [G, r]);
                    g && (q.trigger("ajaxComplete", [G, m]), --k.active || k.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (b = a, a = void 0);
            b = b || {};
            var e, d, h, f, g, l, n, m = k.ajaxSetup({}, b),
                p = m.context || m,
                q = m.context && (p.nodeType || p.jquery) ? k(p) : k.event,
                w = k.Deferred(),
                z = k.Callbacks("once memory"),
                u = m.statusCode || {},
                L = {},
                r = {},
                t = 0,
                y = "canceled",
                G = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!n)
                                for (n = {}; b = ic.exec(h);) n[b[1].toLowerCase()] = b[2];
                            b = n[a.toLowerCase()]
                        }
                        return null ==
                            b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? h : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = r[c] = r[c] || a, L[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) u[b] = [u[b], a[b]];
                            else G.always(a[G.status]);
                        return this
                    },
                    abort: function(a) {
                        a = a || y;
                        return l && l.abort(a), c(0, a), this
                    }
                };
            if (w.promise(G).complete = z.add, G.success = G.done, G.error = G.fail, m.url = ((a || m.url || ta) + "").replace(hc, "").replace(kc,
                    ya[1] + "//"), m.type = b.method || b.type || m.method || m.type, m.dataTypes = k.trim(m.dataType || "*").toLowerCase().match(ca) || [""], null == m.crossDomain && (e = ub.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === ya[1] && e[2] === ya[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (ya[3] || ("http:" === ya[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = k.param(m.data, m.traditional)), T(vb, m, b, G), 2 === t) return G;
            (g = m.global) && 0 === k.active++ && k.event.trigger("ajaxStart");
            m.type = m.type.toUpperCase();
            m.hasContent = !jc.test(m.type);
            var E = m.url;
            m.hasContent || (m.data && (E = m.url += (bb.test(E) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = tb.test(E) ? E.replace(tb, "$1_=" + ab++) : E + (bb.test(E) ? "&" : "?") + "_=" + ab++));
            m.ifModified && (k.lastModified[E] && G.setRequestHeader("If-Modified-Since", k.lastModified[E]), k.etag[E] && G.setRequestHeader("If-None-Match", k.etag[E]));
            (m.data && m.hasContent && !1 !== m.contentType || b.contentType) && G.setRequestHeader("Content-Type", m.contentType);
            G.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ?
                m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + wb + "; q=0.01" : "") : m.accepts["*"]);
            for (d in m.headers) G.setRequestHeader(d, m.headers[d]);
            if (m.beforeSend && (!1 === m.beforeSend.call(p, G, m) || 2 === t)) return G.abort();
            y = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) G[d](m[d]);
            if (l = T(Qa, m, b, G)) {
                G.readyState = 1;
                g && q.trigger("ajaxSend", [G, m]);
                m.async && 0 < m.timeout && (f = setTimeout(function() {
                    G.abort("timeout")
                }, m.timeout));
                try {
                    t = 1, l.send(L, c)
                } catch (hb) {
                    if (!(2 > t)) throw hb;
                    c(-1, hb)
                }
            } else c(-1, "No Transport");
            return G
        },
        getJSON: function(a, b, c) {
            return k.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return k.get(a, void 0, b, "script")
        }
    });
    k.each(["get", "post"], function(a, b) {
        k[b] = function(a, c, e, d) {
            return k.isFunction(c) && (d = d || e, e = c, c = void 0), k.ajax({
                url: a,
                type: b,
                dataType: d,
                data: c,
                success: e
            })
        }
    });
    k.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        k.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    k._evalUrl = function(a) {
        return k.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    k.fn.extend({
        wrapAll: function(a) {
            if (k.isFunction(a)) return this.each(function(b) {
                k(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = k(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(k.isFunction(a) ? function(b) {
                k(this).wrapInner(a.call(this, b))
            } : function() {
                var b = k(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = k.isFunction(a);
            return this.each(function(c) {
                k(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                k.nodeName(this, "body") || k(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    k.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !A.reliableHiddenOffsets() && "none" === (a.style && a.style.display || k.css(a, "display"))
    };
    k.expr.filters.visible = function(a) {
        return !k.expr.filters.hidden(a)
    };
    var lc = /%20/g,
        Ib = /\[\]$/,
        xb = /\r?\n/g,
        mc = /^(?:submit|button|image|reset|file)$/i,
        nc = /^(?:input|select|textarea|keygen)/i;
    k.param = function(a, b) {
        var c, e = [],
            d = function(a, b) {
                b = k.isFunction(b) ? b() : null == b ? "" : b;
                e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = k.ajaxSettings && k.ajaxSettings.traditional), k.isArray(a) || a.jquery && !k.isPlainObject(a)) k.each(a, function() {
            d(this.name, this.value)
        });
        else
            for (c in a) P(c, a[c], b, d);
        return e.join("&").replace(lc, "+")
    };
    k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = k.prop(this, "elements");
                return a ? k.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !k(this).is(":disabled") && nc.test(this.nodeName) && !mc.test(a) && (this.checked || !Pa.test(a))
            }).map(function(a, b) {
                var c = k(this).val();
                return null == c ? null : k.isArray(c) ? k.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                }
            }).get()
        }
    });
    k.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        var b;
        if (!(b = !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && aa())) a: {
            try {
                b = new a.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (F) {}
            b = void 0
        }
        return b
    } : aa;
    var oc = 0,
        Na = {},
        Oa = k.ajaxSettings.xhr();
    a.ActiveXObject && k(a).on("unload", function() {
        for (var a in Na) Na[a](void 0, !0)
    });
    A.cors = !!Oa && "withCredentials" in Oa;
    (Oa = A.ajax = !!Oa) && k.ajaxTransport(function(a) {
        if (!a.crossDomain || A.cors) {
            var b;
            return {
                send: function(c, e) {
                    var d, h = a.xhr(),
                        f = ++oc;
                    if (h.open(a.type, a.url, a.async, a.username, a.password),
                        a.xhrFields)
                        for (d in a.xhrFields) h[d] = a.xhrFields[d];
                    a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType);
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (d in c) void 0 !== c[d] && h.setRequestHeader(d, c[d] + "");
                    h.send(a.hasContent && a.data || null);
                    b = function(c, d) {
                        if (b && (d || 4 === h.readyState))
                            if (delete Na[f], b = void 0, h.onreadystatechange = k.noop, d) 4 !== h.readyState && h.abort();
                            else {
                                var g = {};
                                var l = h.status;
                                "string" == typeof h.responseText && (g.text = h.responseText);
                                try {
                                    var n =
                                        h.statusText
                                } catch (Hb) {
                                    n = ""
                                }
                                l || !a.isLocal || a.crossDomain ? 1223 === l && (l = 204) : l = g.text ? 200 : 404
                            }
                        g && e(l, n, g, h.getAllResponseHeaders())
                    };
                    a.async ? 4 === h.readyState ? setTimeout(b) : h.onreadystatechange = Na[f] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });
    k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return k.globalEval(a), a
            }
        }
    });
    k.ajaxPrefilter("script", function(a) {
        void 0 ===
            a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET", a.global = !1)
    });
    k.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = D.head || k("head")[0] || D.documentElement;
            return {
                send: function(e, d) {
                    b = D.createElement("script");
                    b.async = !0;
                    a.scriptCharset && (b.charset = a.scriptCharset);
                    b.src = a.url;
                    b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || d(200, "success"))
                    };
                    c.insertBefore(b,
                        c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var yb = [],
        cb = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = yb.pop() || k.expando + "_" + ab++;
            return this[a] = !0, a
        }
    });
    k.ajaxPrefilter("json jsonp", function(b, c, e) {
        var d, h, f, g = !1 !== b.jsonp && (cb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && cb.test(b.data) && "data");
        return g || "jsonp" === b.dataTypes[0] ? (d = b.jsonpCallback = k.isFunction(b.jsonpCallback) ? b.jsonpCallback() :
            b.jsonpCallback, g ? b[g] = b[g].replace(cb, "$1" + d) : !1 !== b.jsonp && (b.url += (bb.test(b.url) ? "&" : "?") + b.jsonp + "=" + d), b.converters["script json"] = function() {
                return f || k.error(d + " was not called"), f[0]
            }, b.dataTypes[0] = "json", h = a[d], a[d] = function() {
                f = arguments
            }, e.always(function() {
                a[d] = h;
                b[d] && (b.jsonpCallback = c.jsonpCallback, yb.push(d));
                f && k.isFunction(h) && h(f[0]);
                f = h = void 0
            }), "script") : void 0
    });
    k.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1);
        b = b || D;
        var e = ib.exec(a);
        c = !c && [];
        return e ? [b.createElement(e[1])] : (e = k.buildFragment([a], b, c), c && c.length && k(c).remove(), k.merge([], e.childNodes))
    };
    var zb = k.fn.load;
    k.fn.load = function(a, b, c) {
        if ("string" != typeof a && zb) return zb.apply(this, arguments);
        var e, d, h, f = this,
            g = a.indexOf(" ");
        return 0 <= g && (e = a.slice(g, a.length), a = a.slice(0, g)), k.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (h = "POST"), 0 < f.length && k.ajax({
            url: a,
            type: h,
            dataType: "html",
            data: b
        }).done(function(a) {
            d = arguments;
            f.html(e ? k("<div>").append(k.parseHTML(a)).find(e) :
                a)
        }).complete(c && function(a, b) {
            f.each(c, d || [a.responseText, b, a])
        }), this
    };
    k.expr.filters.animated = function(a) {
        return k.grep(k.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Ab = a.document.documentElement;
    k.offset = {
        setOffset: function(a, b, c) {
            var e, d, h, f = k.css(a, "position"),
                g = k(a),
                l = {};
            "static" === f && (a.style.position = "relative");
            var n = g.offset();
            var m = k.css(a, "top");
            var p = k.css(a, "left");
            ("absolute" === f || "fixed" === f) && -1 < k.inArray("auto", [m, p]) ? (e = g.position(), h = e.top, d = e.left) : (h = parseFloat(m) || 0,
                d = parseFloat(p) || 0);
            k.isFunction(b) && (b = b.call(a, c, n));
            null != b.top && (l.top = b.top - n.top + h);
            null != b.left && (l.left = b.left - n.left + d);
            "using" in b ? b.using.call(a, l) : g.css(l)
        }
    };
    k.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                k.offset.setOffset(this, a, b)
            });
            var b, c, e = {
                    top: 0,
                    left: 0
                },
                d = this[0],
                h = d && d.ownerDocument;
            if (h) return b = h.documentElement, k.contains(b, d) ? ("undefined" !== typeof d.getBoundingClientRect && (e = d.getBoundingClientRect()), c = fa(h), {
                top: e.top + (c.pageYOffset ||
                    b.scrollTop) - (b.clientTop || 0),
                left: e.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    e = this[0];
                return "fixed" === k.css(e, "position") ? b = e.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), k.nodeName(a[0], "html") || (c = a.offset()), c.top += k.css(a[0], "borderTopWidth", !0), c.left += k.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - k.css(e, "marginTop", !0),
                    left: b.left - c.left - k.css(e, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a =
                        this.offsetParent || Ab; a && !k.nodeName(a, "html") && "static" === k.css(a, "position");) a = a.offsetParent;
                return a || Ab
            })
        }
    });
    k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        k.fn[a] = function(e) {
            return ra(this, function(a, e, d) {
                var h = fa(a);
                return void 0 === d ? h ? b in h ? h[b] : h.document.documentElement[e] : a[e] : void(h ? h.scrollTo(c ? k(h).scrollLeft() : d, c ? d : k(h).scrollTop()) : a[e] = d)
            }, a, e, arguments.length, null)
        }
    });
    k.each(["top", "left"], function(a, b) {
        k.cssHooks[b] = S(A.pixelPosition,
            function(a, c) {
                return c ? (c = ma(a, b), Ea.test(c) ? k(a).position()[b] + "px" : c) : void 0
            })
    });
    k.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        k.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, e) {
            k.fn[e] = function(e, d) {
                var h = arguments.length && (c || "boolean" != typeof e),
                    f = c || (!0 === e || !0 === d ? "margin" : "border");
                return ra(this, function(b, c, e) {
                    var d;
                    return k.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (d = b.documentElement, Math.max(b.body["scroll" + a], d["scroll" + a], b.body["offset" +
                        a], d["offset" + a], d["client" + a])) : void 0 === e ? k.css(b, c, f) : k.style(b, c, e, f)
                }, b, h ? e : void 0, h, null)
            }
        })
    });
    k.fn.size = function() {
        return this.length
    };
    k.fn.andSelf = k.fn.addBack;
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var pc = a.jQuery,
        qc = a.$;
    return k.noConflict = function(b) {
        return a.$ === k && (a.$ = qc), b && a.jQuery === k && (a.jQuery = pc), k
    }, "undefined" === typeof b && (a.jQuery = a.$ = k), k
});
! function(a, b) {
    "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b(require, exports, module) : a.Tether = b()
}(this, function(a, b, c) {
    function g(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    }

    function f(a) {
        var b = getComputedStyle(a).position;
        if ("fixed" === b) return a;
        for (; a = a.parentNode;) {
            var c = void 0;
            try {
                c = getComputedStyle(a)
            } catch (fa) {}
            if ("undefined" == typeof c || null === c) return a;
            var e = c;
            if (/(auto|scroll)/.test(e.overflow + e.overflowY +
                    e.overflowX) && ("absolute" !== b || 0 <= ["relative", "absolute", "fixed"].indexOf(c.position))) return a
        }
        return document.body
    }

    function d(a) {
        var b = void 0;
        a === document ? (b = document, a = document.documentElement) : b = a.ownerDocument;
        var c = b.documentElement,
            e = {};
        a = a.getBoundingClientRect();
        for (var d in a) e[d] = a[d];
        d = Y(b);
        return e.top -= d.top, e.left -= d.left, "undefined" == typeof e.width && (e.width = document.body.scrollWidth - e.left - e.right), "undefined" == typeof e.height && (e.height = document.body.scrollHeight - e.top - e.bottom),
            e.top -= c.clientTop, e.left -= c.clientLeft, e.right = b.body.clientWidth - e.width - e.left, e.bottom = b.body.clientHeight - e.height - e.top, e
    }

    function e(a) {
        return a.offsetParent || document.documentElement
    }

    function h() {
        var a = document.createElement("div");
        a.style.width = "100%";
        a.style.height = "200px";
        var b = document.createElement("div");
        l(b.style, {
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            visibility: "hidden",
            width: "200px",
            height: "150px",
            overflow: "hidden"
        });
        b.appendChild(a);
        document.body.appendChild(b);
        var c =
            a.offsetWidth;
        b.style.overflow = "scroll";
        a = a.offsetWidth;
        c === a && (a = b.clientWidth);
        document.body.removeChild(b);
        b = c - a;
        return {
            width: b,
            height: b
        }
    }

    function l() {
        var a = 0 >= arguments.length || void 0 === arguments[0] ? {} : arguments[0],
            b = [];
        return Array.prototype.push.apply(b, arguments), b.slice(1).forEach(function(b) {
            if (b)
                for (var c in b)({}).hasOwnProperty.call(b, c) && (a[c] = b[c])
        }), a
    }

    function n(a, b) {
        if ("undefined" != typeof a.classList) b.split(" ").forEach(function(b) {
            b.trim() && a.classList.remove(b)
        });
        else {
            var c = new RegExp("(^| )" +
                    b.split(" ").join("|") + "( |$)", "gi"),
                c = m(a).replace(c, " ");
            a.setAttribute("class", c)
        }
    }

    function p(a, b) {
        if ("undefined" != typeof a.classList) b.split(" ").forEach(function(b) {
            b.trim() && a.classList.add(b)
        });
        else {
            n(a, b);
            var c = m(a) + (" " + b);
            a.setAttribute("class", c)
        }
    }

    function q(a, b) {
        if ("undefined" != typeof a.classList) return a.classList.contains(b);
        var c = m(a);
        return (new RegExp("(^| )" + b + "( |$)", "gi")).test(c)
    }

    function m(a) {
        return a.className instanceof SVGAnimatedString ? a.className.baseVal : a.className
    }

    function u(a,
        b, c) {
        c.forEach(function(c) {
            -1 === b.indexOf(c) && q(a, c) && n(a, c)
        });
        b.forEach(function(b) {
            q(a, b) || p(a, b)
        })
    }

    function g(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    }

    function v(a, b) {
        var c = 2 >= arguments.length || void 0 === arguments[2] ? 1 : arguments[2];
        return a + c >= b && b >= a - c
    }

    function x() {
        return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
    }

    function w() {
        for (var a = {
                top: 0,
                left: 0
            }, b = arguments.length, c = Array(b), e = 0; b > e; e++) c[e] = arguments[e];
        return c.forEach(function(b) {
            var c = b.top;
            b = b.left;
            "string" == typeof c && (c = parseFloat(c, 10));
            "string" == typeof b && (b = parseFloat(b, 10));
            a.top += c;
            a.left += b
        }), a
    }

    function E(a, b) {
        return "string" == typeof a.left && -1 !== a.left.indexOf("%") && (a.left = parseFloat(a.left, 10) / 100 * b.width), "string" == typeof a.top && -1 !== a.top.indexOf("%") && (a.top = parseFloat(a.top, 10) / 100 * b.height), a
    }

    function y(a, b) {
        return "scrollParent" === b ? b = a.scrollParent : "window" === b && (b = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]),
            b === document && (b = b.documentElement), "undefined" != typeof b.nodeType && ! function() {
                var a = d(b),
                    c = getComputedStyle(b);
                b = [a.left, a.top, a.width + a.left, a.height + a.top];
                O.forEach(function(a, e) {
                    a = a[0].toUpperCase() + a.substr(1);
                    "Top" === a || "Left" === a ? b[e] += parseFloat(c["border" + a + "Width"]) : b[e] -= parseFloat(c["border" + a + "Width"])
                })
            }(), b
    }
    var H = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var e = b[c];
                    e.enumerable = e.enumerable || !1;
                    e.configurable = !0;
                    "value" in e && (e.writable = !0);
                    Object.defineProperty(a, e.key,
                        e)
                }
            }
            return function(b, c, e) {
                return c && a(b.prototype, c), e && a(b, e), b
            }
        }(),
        J = void 0;
    "undefined" == typeof J && (J = {
        modules: []
    });
    var r = function() {
            var a = 0;
            return function() {
                return ++a
            }
        }(),
        B = {},
        Y = function(a) {
            var b = a._tetherZeroElement;
            "undefined" == typeof b && (b = a.createElement("div"), b.setAttribute("data-tether-id", r()), l(b.style, {
                top: 0,
                left: 0,
                position: "absolute"
            }), a.body.appendChild(b), a._tetherZeroElement = b);
            var c = b.getAttribute("data-tether-id");
            if ("undefined" == typeof B[c]) {
                B[c] = {};
                a = b.getBoundingClientRect();
                for (var e in a) B[c][e] = a[e];
                S(function() {
                    delete B[c]
                })
            }
            return B[c]
        },
        I = [],
        S = function(a) {
            I.push(a)
        },
        z = function() {
            for (var a; a = I.pop();) a()
        };
    a = function() {
        function a() {
            g(this, a)
        }
        return H(a, [{
            key: "on",
            value: function(a, b, c) {
                var e = 3 >= arguments.length || void 0 === arguments[3] ? !1 : arguments[3];
                "undefined" == typeof this.bindings && (this.bindings = {});
                "undefined" == typeof this.bindings[a] && (this.bindings[a] = []);
                this.bindings[a].push({
                    handler: b,
                    ctx: c,
                    once: e
                })
            }
        }, {
            key: "once",
            value: function(a, b, c) {
                this.on(a, b, c, !0)
            }
        }, {
            key: "off",
            value: function(a, b) {
                if ("undefined" == typeof this.bindings || "undefined" == typeof this.bindings[a])
                    if ("undefined" == typeof b) delete this.bindings[a];
                    else
                        for (var c = 0; c < this.bindings[a].length;) this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : ++c
            }
        }, {
            key: "trigger",
            value: function(a) {
                if ("undefined" != typeof this.bindings && this.bindings[a]) {
                    for (var b = 0, c = arguments.length, e = Array(1 < c ? c - 1 : 0), d = 1; c > d; d++) e[d - 1] = arguments[d];
                    for (; b < this.bindings[a].length;) {
                        var h = this.bindings[a][b],
                            c = h.handler,
                            d = h.once,
                            h = h.ctx;
                        "undefined" == typeof h && (h = this);
                        c.apply(h, e);
                        d ? this.bindings[a].splice(b, 1) : ++b
                    }
                }
            }
        }]), a
    }();
    J.Utils = {
        getScrollParent: f,
        getBounds: d,
        getOffsetParent: e,
        extend: l,
        addClass: p,
        removeClass: n,
        hasClass: q,
        updateClasses: u,
        defer: S,
        flush: z,
        uniqueId: r,
        Evented: a,
        getScrollBarSize: h
    };
    var C = function() {
            return function(a, b) {
                if (Array.isArray(a)) return a;
                if (Symbol.iterator in Object(a)) {
                    var c = [],
                        e = !0,
                        d = !1,
                        h = void 0;
                    try {
                        for (var f, g = a[Symbol.iterator](); !(e = (f = g.next()).done) && (c.push(f.value), !b || c.length !== b); e = !0);
                    } catch (la) {
                        d = !0, h = la
                    } finally {
                        try {
                            !e && g["return"] && g["return"]()
                        } finally {
                            if (d) throw h;
                        }
                    }
                    return c
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }
        }(),
        H = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var e = b[c];
                    e.enumerable = e.enumerable || !1;
                    e.configurable = !0;
                    "value" in e && (e.writable = !0);
                    Object.defineProperty(a, e.key, e)
                }
            }
            return function(b, c, e) {
                return c && a(b.prototype, c), e && a(b, e), b
            }
        }();
    if ("undefined" == typeof J) throw Error("You must include the utils.js file before tether.js");
    a = J.Utils;
    var f = a.getScrollParent,
        d = a.getBounds,
        e = a.getOffsetParent,
        l = a.extend,
        p = a.addClass,
        n = a.removeClass,
        u = a.updateClasses,
        S = a.defer,
        z = a.flush,
        h = a.getScrollBarSize,
        Q = function() {
            if ("undefined" == typeof document) return "";
            for (var a = document.createElement("div"), b = ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"], c = 0; c < b.length; ++c) {
                var e = b[c];
                if (void 0 !== a.style[e]) return e
            }
        }(),
        Z = [],
        W = function() {
            Z.forEach(function(a) {
                a.position(!1)
            });
            z()
        };
    ! function() {
        var a = null,
            b = null,
            c = null,
            e = function ha() {
                return "undefined" != typeof b && 16 < b ? (b = Math.min(b - 16, 250), void(c = setTimeout(ha, 250))) : void("undefined" != typeof a && 10 > x() - a || ("undefined" != typeof c && (clearTimeout(c), c = null), a = x(), W(), b = x() - a))
            };
        "undefined" != typeof window && ["resize", "scroll", "touchmove"].forEach(function(a) {
            window.addEventListener(a, e)
        })
    }();
    var M = {
            center: "center",
            left: "right",
            right: "left"
        },
        X = {
            middle: "middle",
            top: "bottom",
            bottom: "top"
        },
        U = {
            top: 0,
            left: 0,
            middle: "50%",
            center: "50%",
            bottom: "100%",
            right: "100%"
        },
        da = function(a,
            b) {
            var c = a.left,
                e = a.top;
            return "auto" === c && (c = M[b.left]), "auto" === e && (e = X[b.top]), {
                left: c,
                top: e
            }
        },
        L = function(a) {
            var b = a.left,
                c = a.top;
            return "undefined" != typeof U[a.left] && (b = U[a.left]), "undefined" != typeof U[a.top] && (c = U[a.top]), {
                left: b,
                top: c
            }
        },
        N = function(a) {
            a = a.split(" ");
            a = C(a, 2);
            return {
                top: a[0],
                left: a[1]
            }
        };
    a = function() {
        function a(b) {
            var c = this;
            g(this, a);
            this.position = this.position.bind(this);
            Z.push(this);
            this.history = [];
            this.setOptions(b, !1);
            J.modules.forEach(function(a) {
                "undefined" != typeof a.initialize &&
                    a.initialize.call(c)
            });
            this.position()
        }
        return H(a, [{
            key: "getClass",
            value: function() {
                var a = 0 >= arguments.length || void 0 === arguments[0] ? "" : arguments[0],
                    b = this.options.classes;
                return "undefined" != typeof b && b[a] ? this.options.classes[a] : this.options.classPrefix ? this.options.classPrefix + "-" + a : a
            }
        }, {
            key: "setOptions",
            value: function(a) {
                var b = this,
                    c = 1 >= arguments.length || void 0 === arguments[1] ? !0 : arguments[1],
                    e = this.options = l({
                        offset: "0 0",
                        targetOffset: "0 0",
                        targetAttachment: "auto auto",
                        classPrefix: "tether"
                    }, a),
                    d = e.target,
                    h = e.targetModifier;
                if (this.element = e.element, this.target = d, this.targetModifier = h, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function(a) {
                        if ("undefined" == typeof b[a]) throw Error("Tether Error: Both element and target must be defined");
                        "undefined" != typeof b[a].jquery ? b[a] = b[a][0] : "string" == typeof b[a] && (b[a] = document.querySelector(b[a]))
                    }),
                    p(this.element, this.getClass("element")), !1 !== this.options.addTargetClasses && p(this.target, this.getClass("target")), !this.options.attachment) throw Error("Tether Error: You must provide an attachment");
                this.targetAttachment = N(this.options.targetAttachment);
                this.attachment = N(this.options.attachment);
                this.offset = N(this.options.offset);
                this.targetOffset = N(this.options.targetOffset);
                "undefined" != typeof this.scrollParent && this.disable();
                "scroll-handle" === this.targetModifier ? this.scrollParent = this.target :
                    this.scrollParent = f(this.target);
                !1 !== this.options.enabled && this.enable(c)
            }
        }, {
            key: "getTargetBounds",
            value: function() {
                if ("undefined" == typeof this.targetModifier) return d(this.target);
                if ("visible" === this.targetModifier) {
                    if (this.target === document.body) return {
                        top: pageYOffset,
                        left: pageXOffset,
                        height: innerHeight,
                        width: innerWidth
                    };
                    var a = d(this.target);
                    var b = {
                        height: a.height,
                        width: a.width,
                        top: a.top,
                        left: a.left
                    };
                    return b.height = Math.min(b.height, a.height - (pageYOffset - a.top)), b.height = Math.min(b.height, a.height -
                        (a.top + a.height - (pageYOffset + innerHeight))), b.height = Math.min(innerHeight, b.height), b.height -= 2, b.width = Math.min(b.width, a.width - (pageXOffset - a.left)), b.width = Math.min(b.width, a.width - (a.left + a.width - (pageXOffset + innerWidth))), b.width = Math.min(innerWidth, b.width), b.width -= 2, b.top < pageYOffset && (b.top = pageYOffset), b.left < pageXOffset && (b.left = pageXOffset), b
                }
                if ("scroll-handle" === this.targetModifier) {
                    a = void 0;
                    var c = this.target;
                    c === document.body ? (c = document.documentElement, a = {
                        left: pageXOffset,
                        top: pageYOffset,
                        height: innerHeight,
                        width: innerWidth
                    }) : a = d(c);
                    var e = getComputedStyle(c);
                    b = 0;
                    (c.scrollWidth > c.clientWidth || 0 <= [e.overflow, e.overflowX].indexOf("scroll") || this.target !== document.body) && (b = 15);
                    var h = a.height - parseFloat(e.borderTopWidth) - parseFloat(e.borderBottomWidth) - b;
                    b = {
                        width: 15,
                        height: h / c.scrollHeight * h * .975,
                        left: a.left + a.width - parseFloat(e.borderLeftWidth) - 15
                    };
                    var f = 0;
                    408 > h && this.target === document.body && (f = -1.1E-4 * Math.pow(h, 2) - .00727 * h + 22.58);
                    this.target !== document.body && (b.height = Math.max(b.height,
                        24));
                    return b.top = this.target.scrollTop / (c.scrollHeight - h) * (h - b.height - f) + a.top + parseFloat(e.borderTopWidth), this.target === document.body && (b.height = Math.max(b.height, 24)), b
                }
            }
        }, {
            key: "clearCache",
            value: function() {
                this._cache = {}
            }
        }, {
            key: "cache",
            value: function(a, b) {
                return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[a] && (this._cache[a] = b.call(this)), this._cache[a]
            }
        }, {
            key: "enable",
            value: function() {
                var a = 0 >= arguments.length || void 0 === arguments[0] ? !0 : arguments[0];
                !1 !==
                    this.options.addTargetClasses && p(this.target, this.getClass("enabled"));
                p(this.element, this.getClass("enabled"));
                this.enabled = !0;
                this.scrollParent !== document && this.scrollParent.addEventListener("scroll", this.position);
                a && this.position()
            }
        }, {
            key: "disable",
            value: function() {
                n(this.target, this.getClass("enabled"));
                n(this.element, this.getClass("enabled"));
                this.enabled = !1;
                "undefined" != typeof this.scrollParent && this.scrollParent.removeEventListener("scroll", this.position)
            }
        }, {
            key: "destroy",
            value: function() {
                var a =
                    this;
                this.disable();
                Z.forEach(function(b, c) {
                    return b === a ? void Z.splice(c, 1) : void 0
                })
            }
        }, {
            key: "updateAttachClasses",
            value: function(a, b) {
                var c = this;
                a = a || this.attachment;
                b = b || this.targetAttachment;
                "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length);
                "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
                var e = this._addAttachClasses;
                a.top && e.push(this.getClass("element-attached") + "-" + a.top);
                a.left && e.push(this.getClass("element-attached") +
                    "-" + a.left);
                b.top && e.push(this.getClass("target-attached") + "-" + b.top);
                b.left && e.push(this.getClass("target-attached") + "-" + b.left);
                var d = [];
                "left top bottom right middle center".split(" ").forEach(function(a) {
                    d.push(c.getClass("element-attached") + "-" + a);
                    d.push(c.getClass("target-attached") + "-" + a)
                });
                S(function() {
                    "undefined" != typeof c._addAttachClasses && (u(c.element, c._addAttachClasses, d), !1 !== c.options.addTargetClasses && u(c.target, c._addAttachClasses, d), delete c._addAttachClasses)
                })
            }
        }, {
            key: "position",
            value: function() {
                var a = this,
                    b = 0 >= arguments.length || void 0 === arguments[0] ? !0 : arguments[0];
                if (this.enabled) {
                    this.clearCache();
                    var c = da(this.targetAttachment, this.attachment);
                    this.updateAttachClasses(this.attachment, c);
                    var f = this.cache("element-bounds", function() {
                            return d(a.element)
                        }),
                        g = f.width,
                        l = f.height;
                    0 === g && 0 === l && "undefined" != typeof this.lastSize ? (l = this.lastSize, g = l.width, l = l.height) : this.lastSize = {
                        width: g,
                        height: l
                    };
                    for (var n = this.cache("target-bounds", function() {
                                return a.getTargetBounds()
                            }),
                            m = E(L(this.attachment), {
                                width: g,
                                height: l
                            }), p = E(L(c), n), q = E(this.offset, {
                                width: g,
                                height: l
                            }), u = E(this.targetOffset, n), m = w(m, q), p = w(p, u), r = n.left + p.left - m.left, y = n.top + p.top - m.top, v = 0; v < J.modules.length; ++v) {
                        var k = J.modules[v].position.call(this, {
                            left: r,
                            top: y,
                            targetAttachment: c,
                            targetPos: n,
                            elementPos: f,
                            offset: m,
                            targetOffset: p,
                            manualOffset: q,
                            manualTargetOffset: u,
                            scrollbarSize: C,
                            attachment: this.attachment
                        });
                        if (!1 === k) return !1;
                        "undefined" != typeof k && "object" == typeof k && (y = k.top, r = k.left)
                    }
                    var x = {
                            page: {
                                top: y,
                                left: r
                            },
                            viewport: {
                                top: y - pageYOffset,
                                bottom: pageYOffset - y - l + innerHeight,
                                left: r - pageXOffset,
                                right: pageXOffset - r - g + innerWidth
                            }
                        },
                        C = void 0;
                    return document.body.scrollWidth > window.innerWidth && (C = this.cache("scrollbar-size", h), x.viewport.bottom -= C.height), document.body.scrollHeight > window.innerHeight && (C = this.cache("scrollbar-size", h), x.viewport.right -= C.width), (-1 === ["", "static"].indexOf(document.body.style.position) || -1 === ["", "static"].indexOf(document.body.parentElement.style.position)) && (x.page.bottom =
                        document.body.scrollHeight - y - l, x.page.right = document.body.scrollWidth - r - g), "undefined" != typeof this.options.optimizations && !1 !== this.options.optimizations.moveElement && "undefined" == typeof this.targetModifier && ! function() {
                        var b = a.cache("target-offsetparent", function() {
                                return e(a.target)
                            }),
                            c = a.cache("target-offsetparent-bounds", function() {
                                return d(b)
                            }),
                            h = getComputedStyle(b),
                            f = {};
                        if (["Top", "Left", "Bottom", "Right"].forEach(function(a) {
                                f[a.toLowerCase()] = parseFloat(h["border" + a + "Width"])
                            }), c.right = document.body.scrollWidth -
                            c.left - c.width + f.right, c.bottom = document.body.scrollHeight - c.top - c.height + f.bottom, x.page.top >= c.top + f.top && x.page.bottom >= c.bottom && x.page.left >= c.left + f.left && x.page.right >= c.right) x.offset = {
                            top: x.page.top - c.top + b.scrollTop - f.top,
                            left: x.page.left - c.left + b.scrollLeft - f.left
                        }
                    }(), this.move(x), this.history.unshift(x), 3 < this.history.length && this.history.pop(), b && z(), !0
                }
            }
        }, {
            key: "move",
            value: function(a) {
                var b = this;
                if ("undefined" != typeof this.element.parentNode) {
                    var c = {};
                    for (q in a) {
                        c[q] = {};
                        for (var d in a[q]) {
                            for (var h = !1, f = 0; f < this.history.length; ++f) {
                                var g = this.history[f];
                                if ("undefined" != typeof g[q] && !v(g[q][d], a[q][d])) {
                                    h = !0;
                                    break
                                }
                            }
                            h || (c[q][d] = !0)
                        }
                    }
                    var n = {
                            top: "",
                            left: "",
                            right: "",
                            bottom: ""
                        },
                        m = function(a, c) {
                            if (!1 !== ("undefined" != typeof b.options.optimizations ? b.options.optimizations.gpu : null)) {
                                var e = void 0,
                                    d = void 0;
                                a.top ? (n.top = 0, e = c.top) : (n.bottom = 0, e = -c.bottom);
                                a.left ? (n.left = 0, d = c.left) : (n.right = 0, d = -c.right);
                                n[Q] = "translateX(" + Math.round(d) + "px) translateY(" + Math.round(e) + "px)";
                                "msTransform" !== Q && (n[Q] += " translateZ(0)")
                            } else a.top ?
                                n.top = c.top + "px" : n.bottom = c.bottom + "px", a.left ? n.left = c.left + "px" : n.right = c.right + "px"
                        },
                        p = !1;
                    if ((c.page.top || c.page.bottom) && (c.page.left || c.page.right) ? (n.position = "absolute", m(c.page, a.page)) : (c.viewport.top || c.viewport.bottom) && (c.viewport.left || c.viewport.right) ? (n.position = "fixed", m(c.viewport, a.viewport)) : "undefined" != typeof c.offset && c.offset.top && c.offset.left ? ! function() {
                            n.position = "absolute";
                            var d = b.cache("target-offsetparent", function() {
                                return e(b.target)
                            });
                            e(b.element) !== d && S(function() {
                                b.element.parentNode.removeChild(b.element);
                                d.appendChild(b.element)
                            });
                            m(c.offset, a.offset);
                            p = !0
                        }() : (n.position = "absolute", m({
                            top: !0,
                            left: !0
                        }, a.page)), !p) {
                        var q = !0;
                        for (h = this.element.parentNode; h && "BODY" !== h.tagName;) {
                            if ("static" !== getComputedStyle(h).position) {
                                q = !1;
                                break
                            }
                            h = h.parentNode
                        }
                        q || (this.element.parentNode.removeChild(this.element), document.body.appendChild(this.element))
                    }
                    var w = {};
                    q = !1;
                    for (d in n) h = n[d], f = this.element.style[d], "" !== f && "" !== h && 0 <= ["top", "left", "bottom", "right"].indexOf(d) && (f = parseFloat(f), h = parseFloat(h)), f !== h && (q = !0, w[d] = h);
                    q && S(function() {
                        l(b.element.style, w)
                    })
                }
            }
        }]), a
    }();
    a.modules = [];
    J.position = W;
    b = l(a, J);
    C = function() {
        return function(a, b) {
            if (Array.isArray(a)) return a;
            if (Symbol.iterator in Object(a)) {
                var c = [],
                    e = !0,
                    d = !1,
                    h = void 0;
                try {
                    for (var f, g = a[Symbol.iterator](); !(e = (f = g.next()).done) && (c.push(f.value), !b || c.length !== b); e = !0);
                } catch (la) {
                    d = !0, h = la
                } finally {
                    try {
                        !e && g["return"] && g["return"]()
                    } finally {
                        if (d) throw h;
                    }
                }
                return c
            }
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
    }();
    a = J.Utils;
    var d = a.getBounds,
        l = a.extend,
        u = a.updateClasses,
        S = a.defer,
        O = ["left", "top", "right", "bottom"];
    J.modules.push({
        position: function(a) {
            var b = this,
                c = a.top,
                e = a.left,
                h = a.targetAttachment;
            if (!this.options.constraints) return !0;
            a = this.cache("element-bounds", function() {
                return d(b.element)
            });
            var f = a.height,
                g = a.width;
            0 === g && 0 === f && "undefined" != typeof this.lastSize && (a = this.lastSize, g = a.width, f = a.height);
            a = this.cache("target-bounds", function() {
                return b.getTargetBounds()
            });
            var n = a.height,
                m = a.width,
                p = [this.getClass("pinned"),
                    this.getClass("out-of-bounds")
                ];
            this.options.constraints.forEach(function(a) {
                var b = a.outOfBoundsClass;
                a = a.pinnedClass;
                b && p.push(b);
                a && p.push(a)
            });
            p.forEach(function(a) {
                ["left", "top", "right", "bottom"].forEach(function(b) {
                    p.push(a + "-" + b)
                })
            });
            var q = [],
                w = l({}, h),
                z = l({}, this.attachment);
            return this.options.constraints.forEach(function(a) {
                var d = a.to,
                    l = a.attachment;
                a = a.pin;
                "undefined" == typeof l && (l = "");
                var p = void 0,
                    u = void 0;
                0 <= l.indexOf(" ") ? (u = l.split(" "), l = C(u, 2), u = l[0], p = l[1]) : p = u = l;
                d = y(b, d);
                ("target" ===
                    u || "both" === u) && (c < d[1] && "top" === w.top && (c += n, w.top = "bottom"), c + f > d[3] && "bottom" === w.top && (c -= n, w.top = "top"));
                "together" === u && (c < d[1] && "top" === w.top && ("bottom" === z.top ? (c += n, w.top = "bottom", c += f, z.top = "top") : "top" === z.top && (c += n, w.top = "bottom", c -= f, z.top = "bottom")), c + f > d[3] && "bottom" === w.top && ("top" === z.top ? (c -= n, w.top = "top", c -= f, z.top = "bottom") : "bottom" === z.top && (c -= n, w.top = "top", c += f, z.top = "top")), "middle" === w.top && (c + f > d[3] && "top" === z.top ? (c -= f, z.top = "bottom") : c < d[1] && "bottom" === z.top && (c += f, z.top =
                    "top")));
                ("target" === p || "both" === p) && (e < d[0] && "left" === w.left && (e += m, w.left = "right"), e + g > d[2] && "right" === w.left && (e -= m, w.left = "left"));
                "together" === p && (e < d[0] && "left" === w.left ? "right" === z.left ? (e += m, w.left = "right", e += g, z.left = "left") : "left" === z.left && (e += m, w.left = "right", e -= g, z.left = "right") : e + g > d[2] && "right" === w.left ? "left" === z.left ? (e -= m, w.left = "left", e -= g, z.left = "right") : "right" === z.left && (e -= m, w.left = "left", e += g, z.left = "left") : "center" === w.left && (e + g > d[2] && "left" === z.left ? (e -= g, z.left = "right") :
                    e < d[0] && "right" === z.left && (e += g, z.left = "left")));
                ("element" === u || "both" === u) && (c < d[1] && "bottom" === z.top && (c += f, z.top = "top"), c + f > d[3] && "top" === z.top && (c -= f, z.top = "bottom"));
                ("element" === p || "both" === p) && (e < d[0] && "right" === z.left && (e += g, z.left = "left"), e + g > d[2] && "left" === z.left && (e -= g, z.left = "right"));
                "string" == typeof a ? a = a.split(",").map(function(a) {
                    return a.trim()
                }) : !0 === a && (a = ["top", "left", "right", "bottom"]);
                a = a || [];
                var L = [],
                    r = [];
                c < d[1] && (0 <= a.indexOf("top") ? (c = d[1], L.push("top")) : r.push("top"));
                c +
                    f > d[3] && (0 <= a.indexOf("bottom") ? (c = d[3] - f, L.push("bottom")) : r.push("bottom"));
                e < d[0] && (0 <= a.indexOf("left") ? (e = d[0], L.push("left")) : r.push("left"));
                e + g > d[2] && (0 <= a.indexOf("right") ? (e = d[2] - g, L.push("right")) : r.push("right"));
                L.length && ! function() {
                    var a = void 0,
                        a = "undefined" != typeof b.options.pinnedClass ? b.options.pinnedClass : b.getClass("pinned");
                    q.push(a);
                    L.forEach(function(b) {
                        q.push(a + "-" + b)
                    })
                }();
                r.length && ! function() {
                    var a = void 0,
                        a = "undefined" != typeof b.options.outOfBoundsClass ? b.options.outOfBoundsClass :
                        b.getClass("out-of-bounds");
                    q.push(a);
                    r.forEach(function(b) {
                        q.push(a + "-" + b)
                    })
                }();
                (0 <= L.indexOf("left") || 0 <= L.indexOf("right")) && (z.left = w.left = !1);
                (0 <= L.indexOf("top") || 0 <= L.indexOf("bottom")) && (z.top = w.top = !1);
                w.top === h.top && w.left === h.left && z.top === b.attachment.top && z.left === b.attachment.left || b.updateAttachClasses(z, w)
            }), S(function() {
                !1 !== b.options.addTargetClasses && u(b.target, q, p);
                u(b.element, q, p)
            }), {
                top: c,
                left: e
            }
        }
    });
    a = J.Utils;
    d = a.getBounds;
    u = a.updateClasses;
    S = a.defer;
    J.modules.push({
        position: function(a) {
            var b =
                this,
                c = a.top,
                e = a.left,
                h = this.cache("element-bounds", function() {
                    return d(b.element)
                });
            a = h.height;
            var h = h.width,
                f = this.getTargetBounds(),
                g = c + a,
                l = e + h,
                n = [];
            c <= f.bottom && g >= f.top && ["left", "right"].forEach(function(a) {
                var b = f[a];
                b !== e && b !== l || n.push(a)
            });
            e <= f.right && l >= f.left && ["top", "bottom"].forEach(function(a) {
                var b = f[a];
                b !== c && b !== g || n.push(a)
            });
            var m = [],
                p = [];
            return m.push(this.getClass("abutted")), ["left", "top", "right", "bottom"].forEach(function(a) {
                    m.push(b.getClass("abutted") + "-" + a)
                }), n.length && p.push(this.getClass("abutted")),
                n.forEach(function(a) {
                    p.push(b.getClass("abutted") + "-" + a)
                }), S(function() {
                    !1 !== b.options.addTargetClasses && u(b.target, p, m);
                    u(b.element, p, m)
                }), !0
        }
    });
    C = function() {
        return function(a, b) {
            if (Array.isArray(a)) return a;
            if (Symbol.iterator in Object(a)) {
                var c = [],
                    e = !0,
                    d = !1,
                    h = void 0;
                try {
                    for (var f, g = a[Symbol.iterator](); !(e = (f = g.next()).done) && (c.push(f.value), !b || c.length !== b); e = !0);
                } catch (la) {
                    d = !0, h = la
                } finally {
                    try {
                        !e && g["return"] && g["return"]()
                    } finally {
                        if (d) throw h;
                    }
                }
                return c
            }
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
    }();
    return J.modules.push({
        position: function(a) {
            var b = a.top;
            a = a.left;
            if (this.options.shift) {
                var c = this.options.shift;
                "function" == typeof this.options.shift && (c = this.options.shift.call(this, {
                    top: b,
                    left: a
                }));
                if ("string" == typeof c) {
                    c = c.split(" ");
                    c[1] = c[1] || c[0];
                    c = C(c, 2);
                    var e = c[0];
                    c = c[1];
                    e = parseFloat(e, 10);
                    c = parseFloat(c, 10)
                } else e = c.top, c = c.left;
                return b += e, a += c, {
                    top: b,
                    left: a
                }
            }
        }
    }), b
});
if ("undefined" == typeof jQuery) throw Error("Bootstrap's JavaScript requires jQuery"); +
function(a) {
    a = a.fn.jquery.split(" ")[0].split(".");
    if (2 > a[0] && 9 > a[1] || 1 == a[0] && 9 == a[1] && 1 > a[2] || 3 <= a[0]) throw Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v3.0.0");
}(jQuery); +
function(a) {
    function b(a, b) {
        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        });
        b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }

    function c(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
    }
    var g = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var e = b[c];
                    e.enumerable =
                        e.enumerable || !1;
                    e.configurable = !0;
                    "value" in e && (e.writable = !0);
                    Object.defineProperty(a, e.key, e)
                }
            }
            return function(b, c, e) {
                return c && a(b.prototype, c), e && a(b, e), b
            }
        }(),
        f = function(a) {
            function b() {
                return {
                    bindType: c.end,
                    delegateType: c.end,
                    handle: function(b) {
                        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
                    }
                }
            }
            var c = !1,
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                },
                d = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(a) {
                        do a += ~~(1E6 * Math.random()); while (document.getElementById(a));
                        return a
                    },
                    getSelectorFromElement: function(a) {
                        var b = a.getAttribute("data-target");
                        return b || (b = a.getAttribute("href") || "", b = /^#[a-z]/i.test(b) ? b : null), b
                    },
                    reflow: function(a) {
                        (new Function("bs", "return bs"))(a.offsetHeight)
                    },
                    triggerTransitionEnd: function(b) {
                        a(b).trigger(c.end)
                    },
                    supportsTransitionEnd: function() {
                        return !!c
                    },
                    typeCheckConfig: function(a, b, c) {
                        for (var e in c)
                            if (c.hasOwnProperty(e)) {
                                var d = c[e],
                                    h = b[e],
                                    f = void 0;
                                if (f =
                                    h && (h[0] || h).nodeType ? "element" : {}.toString.call(h).match(/\s([a-zA-Z]+)/)[1].toLowerCase(), !(new RegExp(d)).test(f)) throw Error(a.toUpperCase() + ": " + ('Option "' + e + '" provided type "' + f + '" ') + ('but expected type "' + d + '".'));
                            }
                    }
                },
                c = function() {
                    if (window.QUnit) return !1;
                    var a = document.createElement("bootstrap"),
                        b;
                    for (b in e)
                        if (void 0 !== a.style[b]) return {
                            end: e[b]
                        };
                    return !1
                }();
            a.fn.emulateTransitionEnd = function(b) {
                var c = this,
                    e = !1;
                return a(this).one(d.TRANSITION_END, function() {
                    e = !0
                }), setTimeout(function() {
                    e ||
                        d.triggerTransitionEnd(c)
                }, b), this
            };
            d.supportsTransitionEnd() && (a.event.special[d.TRANSITION_END] = b());
            return d
        }(jQuery),
        d = (function(a) {
            var b = a.fn.alert,
                e = function() {
                    function b(a) {
                        c(this, b);
                        this._element = a
                    }
                    return g(b, [{
                        key: "close",
                        value: function(a) {
                            a = a || this._element;
                            a = this._getRootElement(a);
                            this._triggerCloseEvent(a).isDefaultPrevented() || this._removeElement(a)
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            a.removeData(this._element, "bs.alert");
                            this._element = null
                        }
                    }, {
                        key: "_getRootElement",
                        value: function(b) {
                            var c =
                                f.getSelectorFromElement(b),
                                e = !1;
                            return c && (e = a(c)[0]), e || (e = a(b).closest(".alert")[0]), e
                        }
                    }, {
                        key: "_triggerCloseEvent",
                        value: function(b) {
                            var c = a.Event("close.bs.alert");
                            return a(b).trigger(c), c
                        }
                    }, {
                        key: "_removeElement",
                        value: function(b) {
                            return a(b).removeClass("in"), f.supportsTransitionEnd() && a(b).hasClass("fade") ? void a(b).one(f.TRANSITION_END, a.proxy(this._destroyElement, this, b)).emulateTransitionEnd(150) : void this._destroyElement(b)
                        }
                    }, {
                        key: "_destroyElement",
                        value: function(b) {
                            a(b).detach().trigger("closed.bs.alert").remove()
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(c) {
                            return this.each(function() {
                                var e = a(this),
                                    d = e.data("bs.alert");
                                d || (d = new b(this), e.data("bs.alert", d));
                                "close" === c && d[c](this)
                            })
                        }
                    }, {
                        key: "_handleDismiss",
                        value: function(a) {
                            return function(b) {
                                b && b.preventDefault();
                                a.close(this)
                            }
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha"
                        }
                    }]), b
                }();
            return a(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', e._handleDismiss(new e)), a.fn.alert = e._jQueryInterface, a.fn.alert.Constructor = e, a.fn.alert.noConflict =
                function() {
                    return a.fn.alert = b, e._jQueryInterface
                }, e
        }(jQuery), function(a) {
            var b = a.fn.button,
                e = function() {
                    function b(a) {
                        c(this, b);
                        this._element = a
                    }
                    return g(b, [{
                        key: "toggle",
                        value: function() {
                            var b = !0,
                                c = a(this._element).closest('[data-toggle="buttons"]')[0];
                            if (c) {
                                var e = a(this._element).find("input")[0];
                                e && ("radio" === e.type && (e.checked && a(this._element).hasClass("active") ? b = !1 : (c = a(c).find(".active")[0]) && a(c).removeClass("active")), b && (e.checked = !a(this._element).hasClass("active"), a(this._element).trigger("change")))
                            } else this._element.setAttribute("aria-pressed", !a(this._element).hasClass("active"));
                            b && a(this._element).toggleClass("active")
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            a.removeData(this._element, "bs.button");
                            this._element = null
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(c) {
                            return this.each(function() {
                                var e = a(this).data("bs.button");
                                e || (e = new b(this), a(this).data("bs.button", e));
                                "toggle" === c && e[c]()
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha"
                        }
                    }]), b
                }();
            return a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(b) {
                b.preventDefault();
                b = b.target;
                a(b).hasClass("btn") || (b = a(b).closest(".btn"));
                e._jQueryInterface.call(a(b), "toggle")
            }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
                var c = a(b.target).closest(".btn")[0];
                a(c).toggleClass("focus", /^focus(in)?$/.test(b.type))
            }), a.fn.button = e._jQueryInterface, a.fn.button.Constructor = e, a.fn.button.noConflict = function() {
                return a.fn.button = b, e._jQueryInterface
            }, e
        }(jQuery), function(a) {
            var b = a.fn.carousel,
                e = {
                    interval: 5E3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                d = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                p = function() {
                    function b(e, d) {
                        c(this, b);
                        this._activeElement = this._interval = this._items = null;
                        this._isSliding = this._isPaused = !1;
                        this._config = this._getConfig(d);
                        this._element = a(e)[0];
                        this._indicatorsElement = a(this._element).find(".carousel-indicators")[0];
                        this._addEventListeners()
                    }
                    return g(b, [{
                            key: "next",
                            value: function() {
                                this._isSliding || this._slide("next")
                            }
                        }, {
                            key: "nextWhenVisible",
                            value: function() {
                                document.hidden || this.next()
                            }
                        }, {
                            key: "prev",
                            value: function() {
                                this._isSliding || this._slide("prev")
                            }
                        }, {
                            key: "pause",
                            value: function(b) {
                                b || (this._isPaused = !0);
                                a(this._element).find(".next, .prev")[0] && f.supportsTransitionEnd() && (f.triggerTransitionEnd(this._element), this.cycle(!0));
                                clearInterval(this._interval);
                                this._interval = null
                            }
                        }, {
                            key: "cycle",
                            value: function(b) {
                                b || (this._isPaused = !1);
                                this._interval && (clearInterval(this._interval), this._interval = null);
                                this._config.interval && !this._isPaused &&
                                    (this._interval = setInterval(a.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval))
                            }
                        }, {
                            key: "to",
                            value: function(b) {
                                var c = this;
                                this._activeElement = a(this._element).find(".active.carousel-item")[0];
                                var e = this._getItemIndex(this._activeElement);
                                if (!(b > this._items.length - 1 || 0 > b)) {
                                    if (this._isSliding) return void a(this._element).one("slid.bs.carousel", function() {
                                        return c.to(b)
                                    });
                                    if (e === b) return this.pause(), void this.cycle();
                                    this._slide(b > e ? "next" : "prev", this._items[b])
                                }
                            }
                        },
                        {
                            key: "dispose",
                            value: function() {
                                a(this._element).off(".bs.carousel");
                                a.removeData(this._element, "bs.carousel");
                                this._indicatorsElement = this._activeElement = this._isSliding = this._isPaused = this._interval = this._element = this._config = this._items = null
                            }
                        }, {
                            key: "_getConfig",
                            value: function(b) {
                                return b = a.extend({}, e, b), f.typeCheckConfig("carousel", b, d), b
                            }
                        }, {
                            key: "_addEventListeners",
                            value: function() {
                                this._config.keyboard && a(this._element).on("keydown.bs.carousel", a.proxy(this._keydown, this));
                                "hover" !== this._config.pause ||
                                    "ontouchstart" in document.documentElement || a(this._element).on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
                            }
                        }, {
                            key: "_keydown",
                            value: function(a) {
                                if (a.preventDefault(), !/input|textarea/i.test(a.target.tagName)) switch (a.which) {
                                    case 37:
                                        this.prev();
                                        break;
                                    case 39:
                                        this.next()
                                }
                            }
                        }, {
                            key: "_getItemIndex",
                            value: function(b) {
                                return this._items = a.makeArray(a(b).parent().find(".carousel-item")), this._items.indexOf(b)
                            }
                        }, {
                            key: "_getItemByDirection",
                            value: function(a,
                                b) {
                                var c = "next" === a,
                                    e = "prev" === a,
                                    d = this._getItemIndex(b),
                                    h = this._items.length - 1;
                                if ((e && 0 === d || c && d === h) && !this._config.wrap) return b;
                                c = (d + ("prev" === a ? -1 : 1)) % this._items.length;
                                return -1 === c ? this._items[this._items.length - 1] : this._items[c]
                            }
                        }, {
                            key: "_triggerSlideEvent",
                            value: function(b, c) {
                                var e = a.Event("slide.bs.carousel", {
                                    relatedTarget: b,
                                    direction: c
                                });
                                return a(this._element).trigger(e), e
                            }
                        }, {
                            key: "_setActiveIndicatorElement",
                            value: function(b) {
                                this._indicatorsElement && (a(this._indicatorsElement).find(".active").removeClass("active"),
                                    (b = this._indicatorsElement.children[this._getItemIndex(b)]) && a(b).addClass("active"))
                            }
                        }, {
                            key: "_slide",
                            value: function(b, c) {
                                var e = this,
                                    d = a(this._element).find(".active.carousel-item")[0],
                                    h = c || d && this._getItemByDirection(b, d),
                                    g = !!this._interval,
                                    l = "next" === b ? "left" : "right";
                                if (h && a(h).hasClass("active")) return void(this._isSliding = !1);
                                if (!this._triggerSlideEvent(h, l).isDefaultPrevented() && d && h) {
                                    this._isSliding = !0;
                                    g && this.pause();
                                    this._setActiveIndicatorElement(h);
                                    var n = a.Event("slid.bs.carousel", {
                                        relatedTarget: h,
                                        direction: l
                                    });
                                    f.supportsTransitionEnd() && a(this._element).hasClass("slide") ? (a(h).addClass(b), f.reflow(h), a(d).addClass(l), a(h).addClass(l), a(d).one(f.TRANSITION_END, function() {
                                        a(h).removeClass(l).removeClass(b);
                                        a(h).addClass("active");
                                        a(d).removeClass("active").removeClass(b).removeClass(l);
                                        e._isSliding = !1;
                                        setTimeout(function() {
                                            return a(e._element).trigger(n)
                                        }, 0)
                                    }).emulateTransitionEnd(600)) : (a(d).removeClass("active"), a(h).addClass("active"), this._isSliding = !1, a(this._element).trigger(n));
                                    g && this.cycle()
                                }
                            }
                        }
                    ], [{
                        key: "_jQueryInterface",
                        value: function(c) {
                            return this.each(function() {
                                var d = a(this).data("bs.carousel"),
                                    h = a.extend({}, e, a(this).data());
                                "object" == typeof c && a.extend(h, c);
                                var f = "string" == typeof c ? c : h.slide;
                                if (d || (d = new b(this, h), a(this).data("bs.carousel", d)), "number" == typeof c) d.to(c);
                                else if ("string" == typeof f) {
                                    if (void 0 === d[f]) throw Error('No method named "' + f + '"');
                                    d[f]()
                                } else h.interval && (d.pause(), d.cycle())
                            })
                        }
                    }, {
                        key: "_dataApiClickHandler",
                        value: function(c) {
                            var e = f.getSelectorFromElement(this);
                            if (e && (e = a(e)[0]) && a(e).hasClass("carousel")) {
                                var d = a.extend({}, a(e).data(), a(this).data()),
                                    h = this.getAttribute("data-slide-to");
                                h && (d.interval = !1);
                                b._jQueryInterface.call(a(e), d);
                                h && a(e).data("bs.carousel").to(h);
                                c.preventDefault()
                            }
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return e
                        }
                    }]), b
                }();
            return a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", p._dataApiClickHandler), a(window).on("load.bs.carousel.data-api", function() {
                a('[data-ride="carousel"]').each(function() {
                    var b =
                        a(this);
                    p._jQueryInterface.call(b, b.data())
                })
            }), a.fn.carousel = p._jQueryInterface, a.fn.carousel.Constructor = p, a.fn.carousel.noConflict = function() {
                return a.fn.carousel = b, p._jQueryInterface
            }, p
        }(jQuery), function(a) {
            var b = a.fn.collapse,
                e = {
                    toggle: !0,
                    parent: ""
                },
                d = {
                    toggle: "boolean",
                    parent: "string"
                },
                p = function() {
                    function b(e, d) {
                        c(this, b);
                        this._isTransitioning = !1;
                        this._element = e;
                        this._config = this._getConfig(d);
                        this._triggerArray = a.makeArray(a('[data-toggle="collapse"][href="#' + e.id + '"],' + ('[data-toggle="collapse"][data-target="#' +
                            e.id + '"]')));
                        this._parent = this._config.parent ? this._getParent() : null;
                        this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray);
                        this._config.toggle && this.toggle()
                    }
                    return g(b, [{
                        key: "toggle",
                        value: function() {
                            a(this._element).hasClass("in") ? this.hide() : this.show()
                        }
                    }, {
                        key: "show",
                        value: function() {
                            var c = this;
                            if (!this._isTransitioning && !a(this._element).hasClass("in")) {
                                var e = void 0,
                                    d = void 0;
                                if (this._parent && (e = a.makeArray(a(".panel > .in, .panel > .collapsing")), e.length || (e = null)), !(e && (d = a(e).data("bs.collapse"), d && d._isTransitioning))) {
                                    var h = a.Event("show.bs.collapse");
                                    if (a(this._element).trigger(h), !h.isDefaultPrevented()) {
                                        e && (b._jQueryInterface.call(a(e), "hide"), d || a(e).data("bs.collapse", null));
                                        var g = this._getDimension();
                                        a(this._element).removeClass("collapse").addClass("collapsing");
                                        this._element.style[g] = 0;
                                        this._element.setAttribute("aria-expanded", !0);
                                        this._triggerArray.length && a(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0);
                                        this.setTransitioning(!0);
                                        e = function() {
                                            a(c._element).removeClass("collapsing").addClass("collapse").addClass("in");
                                            c._element.style[g] = "";
                                            c.setTransitioning(!1);
                                            a(c._element).trigger("shown.bs.collapse")
                                        };
                                        if (!f.supportsTransitionEnd()) return void e();
                                        d = "scroll" + (g[0].toUpperCase() + g.slice(1));
                                        a(this._element).one(f.TRANSITION_END, e).emulateTransitionEnd(600);
                                        this._element.style[g] = this._element[d] + "px"
                                    }
                                }
                            }
                        }
                    }, {
                        key: "hide",
                        value: function() {
                            var b = this;
                            if (!this._isTransitioning && a(this._element).hasClass("in")) {
                                var c = a.Event("hide.bs.collapse");
                                if (a(this._element).trigger(c), !c.isDefaultPrevented()) {
                                    c = this._getDimension();
                                    this._element.style[c] = this._element["width" === c ? "offsetWidth" : "offsetHeight"] + "px";
                                    f.reflow(this._element);
                                    a(this._element).addClass("collapsing").removeClass("collapse").removeClass("in");
                                    this._element.setAttribute("aria-expanded", !1);
                                    this._triggerArray.length && a(this._triggerArray).addClass("collapsed").attr("aria-expanded", !1);
                                    this.setTransitioning(!0);
                                    var e = function() {
                                        b.setTransitioning(!1);
                                        a(b._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                                    };
                                    return this._element.style[c] = 0, f.supportsTransitionEnd() ? void a(this._element).one(f.TRANSITION_END, e).emulateTransitionEnd(600) : void e()
                                }
                            }
                        }
                    }, {
                        key: "setTransitioning",
                        value: function(a) {
                            this._isTransitioning = a
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            a.removeData(this._element, "bs.collapse");
                            this._isTransitioning = this._triggerArray = this._element = this._parent = this._config = null
                        }
                    }, {
                        key: "_getConfig",
                        value: function(b) {
                            return b = a.extend({}, e, b), b.toggle = !!b.toggle, f.typeCheckConfig("collapse", b, d), b
                        }
                    }, {
                        key: "_getDimension",
                        value: function() {
                            return a(this._element).hasClass("width") ? "width" : "height"
                        }
                    }, {
                        key: "_getParent",
                        value: function() {
                            var c = this,
                                e = a(this._config.parent)[0],
                                d = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                            return a(e).find(d).each(function(a, e) {
                                c._addAriaAndCollapsedClass(b._getTargetFromElement(e), [e])
                            }), e
                        }
                    }, {
                        key: "_addAriaAndCollapsedClass",
                        value: function(b, c) {
                            if (b) {
                                var e = a(b).hasClass("in");
                                b.setAttribute("aria-expanded", e);
                                c.length && a(c).toggleClass("collapsed", !e).attr("aria-expanded",
                                    e)
                            }
                        }
                    }], [{
                            key: "_getTargetFromElement",
                            value: function(b) {
                                return (b = f.getSelectorFromElement(b)) ? a(b)[0] : null
                            }
                        }, {
                            key: "_jQueryInterface",
                            value: function(c) {
                                return this.each(function() {
                                    var d = a(this),
                                        h = d.data("bs.collapse"),
                                        f = a.extend({}, e, d.data(), "object" == typeof c && c);
                                    if (!h && f.toggle && /show|hide/.test(c) && (f.toggle = !1), h || (h = new b(this, f), d.data("bs.collapse", h)), "string" == typeof c) {
                                        if (void 0 === h[c]) throw Error('No method named "' + c + '"');
                                        h[c]()
                                    }
                                })
                            }
                        }, {
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha"
                            }
                        },
                        {
                            key: "Default",
                            get: function() {
                                return e
                            }
                        }
                    ]), b
                }();
            return a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(b) {
                b.preventDefault();
                b = p._getTargetFromElement(this);
                var c = a(b).data("bs.collapse") ? "toggle" : a(this).data();
                p._jQueryInterface.call(a(b), c)
            }), a.fn.collapse = p._jQueryInterface, a.fn.collapse.Constructor = p, a.fn.collapse.noConflict = function() {
                return a.fn.collapse = b, p._jQueryInterface
            }, p
        }(jQuery), function(a) {
            var b = a.fn.dropdown,
                e = function() {
                    function b(a) {
                        c(this, b);
                        this._element =
                            a;
                        this._addEventListeners()
                    }
                    return g(b, [{
                            key: "toggle",
                            value: function() {
                                if (this.disabled || a(this).hasClass("disabled")) return !1;
                                var c = b._getParentFromElement(this),
                                    e = a(c).hasClass("open");
                                if (b._clearMenus(), e) return !1;
                                "ontouchstart" in document.documentElement && !a(c).closest(".navbar-nav").length && (e = document.createElement("div"), e.className = "dropdown-backdrop", a(e).insertBefore(this), a(e).on("click", b._clearMenus));
                                var e = {
                                        relatedTarget: this
                                    },
                                    d = a.Event("show.bs.dropdown", e);
                                return a(c).trigger(d), d.isDefaultPrevented() ?
                                    !1 : (this.focus(), this.setAttribute("aria-expanded", "true"), a(c).toggleClass("open"), a(c).trigger(a.Event("shown.bs.dropdown", e)), !1)
                            }
                        }, {
                            key: "dispose",
                            value: function() {
                                a.removeData(this._element, "bs.dropdown");
                                a(this._element).off(".bs.dropdown");
                                this._element = null
                            }
                        }, {
                            key: "_addEventListeners",
                            value: function() {
                                a(this._element).on("click.bs.dropdown", this.toggle)
                            }
                        }], [{
                            key: "_jQueryInterface",
                            value: function(c) {
                                return this.each(function() {
                                    var e = a(this).data("bs.dropdown");
                                    if (e || a(this).data("bs.dropdown",
                                            e = new b(this)), "string" == typeof c) {
                                        if (void 0 === e[c]) throw Error('No method named "' + c + '"');
                                        e[c].call(this)
                                    }
                                })
                            }
                        }, {
                            key: "_clearMenus",
                            value: function(c) {
                                if (!c || 3 !== c.which) {
                                    var e = a(".dropdown-backdrop")[0];
                                    e && e.parentNode.removeChild(e);
                                    for (var e = a.makeArray(a('[data-toggle="dropdown"]')), d = 0; d < e.length; d++) {
                                        var h = b._getParentFromElement(e[d]),
                                            f = {
                                                relatedTarget: e[d]
                                            };
                                        if (a(h).hasClass("open") && !(c && "click" === c.type && /input|textarea/i.test(c.target.tagName) && a.contains(h, c.target))) {
                                            var g = a.Event("hide.bs.dropdown",
                                                f);
                                            a(h).trigger(g);
                                            g.isDefaultPrevented() || (e[d].setAttribute("aria-expanded", "false"), a(h).removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))
                                        }
                                    }
                                }
                            }
                        }, {
                            key: "_getParentFromElement",
                            value: function(b) {
                                var c = void 0,
                                    e = f.getSelectorFromElement(b);
                                return e && (c = a(e)[0]), c || b.parentNode
                            }
                        }, {
                            key: "_dataApiKeydownHandler",
                            value: function(c) {
                                if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName) && (c.preventDefault(), c.stopPropagation(), !this.disabled && !a(this).hasClass("disabled"))) {
                                    var e =
                                        b._getParentFromElement(this),
                                        d = a(e).hasClass("open");
                                    if (!d && 27 !== c.which || d && 27 === c.which) return 27 === c.which && (c = a(e).find('[data-toggle="dropdown"]')[0], a(c).trigger("focus")), void a(this).trigger("click");
                                    e = a.makeArray(a('[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'));
                                    if (e = e.filter(function(a) {
                                            return a.offsetWidth || a.offsetHeight
                                        }), e.length) d = e.indexOf(c.target), 38 === c.which && 0 < d && d--, 40 === c.which && d < e.length - 1 && d++, ~d || (d = 0), e[d].focus()
                                }
                            }
                        }, {
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha"
                            }
                        }]),
                        b
                }();
            return a(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', e._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", '[role="menu"]', e._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", '[role="listbox"]', e._dataApiKeydownHandler).on("click.bs.dropdown.data-api", e._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', e.prototype.toggle).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
                    a.stopPropagation()
                }), a.fn.dropdown = e._jQueryInterface,
                a.fn.dropdown.Constructor = e, a.fn.dropdown.noConflict = function() {
                    return a.fn.dropdown = b, e._jQueryInterface
                }, e
        }(jQuery), function(a) {
            var b = a.fn.modal,
                e = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                d = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                p = function() {
                    function b(e, d) {
                        c(this, b);
                        this._config = this._getConfig(d);
                        this._element = e;
                        this._dialog = a(e).find(".modal-dialog")[0];
                        this._backdrop = null;
                        this._ignoreBackdropClick = this._isBodyOverflowing = this._isShown = !1;
                        this._scrollbarWidth =
                            this._originalBodyPadding = 0
                    }
                    return g(b, [{
                            key: "toggle",
                            value: function(a) {
                                return this._isShown ? this.hide() : this.show(a)
                            }
                        }, {
                            key: "show",
                            value: function(b) {
                                var c = this,
                                    e = a.Event("show.bs.modal", {
                                        relatedTarget: b
                                    });
                                a(this._element).trigger(e);
                                this._isShown || e.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), a(document.body).addClass("modal-open"), this._setEscapeEvent(), this._setResizeEvent(), a(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide,
                                    this)), a(this._dialog).on("mousedown.dismiss.bs.modal", function() {
                                    a(c._element).one("mouseup.dismiss.bs.modal", function(b) {
                                        a(b.target).is(c._element) && (c._ignoreBackdropClick = !0)
                                    })
                                }), this._showBackdrop(a.proxy(this._showElement, this, b)))
                            }
                        }, {
                            key: "hide",
                            value: function(b) {
                                b && b.preventDefault();
                                b = a.Event("hide.bs.modal");
                                a(this._element).trigger(b);
                                this._isShown && !b.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), a(document).off("focusin.bs.modal"), a(this._element).removeClass("in"),
                                    a(this._element).off("click.dismiss.bs.modal"), a(this._dialog).off("mousedown.dismiss.bs.modal"), f.supportsTransitionEnd() && a(this._element).hasClass("fade") ? a(this._element).one(f.TRANSITION_END, a.proxy(this._hideModal, this)).emulateTransitionEnd(300) : this._hideModal())
                            }
                        }, {
                            key: "dispose",
                            value: function() {
                                a.removeData(this._element, "bs.modal");
                                a(window).off(".bs.modal");
                                a(document).off(".bs.modal");
                                a(this._element).off(".bs.modal");
                                a(this._backdrop).off(".bs.modal");
                                this._scrollbarWidth = this._originalBodyPadding =
                                    this._ignoreBackdropClick = this._isBodyOverflowing = this._isShown = this._backdrop = this._dialog = this._element = this._config = null
                            }
                        }, {
                            key: "_getConfig",
                            value: function(b) {
                                return b = a.extend({}, e, b), f.typeCheckConfig("modal", b, d), b
                            }
                        }, {
                            key: "_showElement",
                            value: function(b) {
                                var c = this,
                                    e = f.supportsTransitionEnd() && a(this._element).hasClass("fade");
                                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element);
                                this._element.style.display = "block";
                                this._element.scrollTop =
                                    0;
                                e && f.reflow(this._element);
                                a(this._element).addClass("in");
                                this._config.focus && this._enforceFocus();
                                var d = a.Event("shown.bs.modal", {
                                    relatedTarget: b
                                });
                                b = function() {
                                    c._config.focus && c._element.focus();
                                    a(c._element).trigger(d)
                                };
                                e ? a(this._dialog).one(f.TRANSITION_END, b).emulateTransitionEnd(300) : b()
                            }
                        }, {
                            key: "_enforceFocus",
                            value: function() {
                                var b = this;
                                a(document).off("focusin.bs.modal").on("focusin.bs.modal", function(c) {
                                    b._element === c.target || a(b._element).has(c.target).length || b._element.focus()
                                })
                            }
                        },
                        {
                            key: "_setEscapeEvent",
                            value: function() {
                                var b = this;
                                this._isShown && this._config.keyboard ? a(this._element).on("keydown.dismiss.bs.modal", function(a) {
                                    27 === a.which && b.hide()
                                }) : this._isShown || a(this._element).off("keydown.dismiss.bs.modal")
                            }
                        }, {
                            key: "_setResizeEvent",
                            value: function() {
                                this._isShown ? a(window).on("resize.bs.modal", a.proxy(this._handleUpdate, this)) : a(window).off("resize.bs.modal")
                            }
                        }, {
                            key: "_hideModal",
                            value: function() {
                                var b = this;
                                this._element.style.display = "none";
                                this._showBackdrop(function() {
                                    a(document.body).removeClass("modal-open");
                                    b._resetAdjustments();
                                    b._resetScrollbar();
                                    a(b._element).trigger("hidden.bs.modal")
                                })
                            }
                        }, {
                            key: "_removeBackdrop",
                            value: function() {
                                this._backdrop && (a(this._backdrop).remove(), this._backdrop = null)
                            }
                        }, {
                            key: "_showBackdrop",
                            value: function(b) {
                                var c = this,
                                    e = a(this._element).hasClass("fade") ? "fade" : "";
                                if (this._isShown && this._config.backdrop) {
                                    var d = f.supportsTransitionEnd() && e;
                                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", e && a(this._backdrop).addClass(e), a(this._backdrop).appendTo(document.body),
                                        a(this._element).on("click.dismiss.bs.modal", function(a) {
                                            return c._ignoreBackdropClick ? void(c._ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" === c._config.backdrop ? c._element.focus() : c.hide()))
                                        }), d && f.reflow(this._backdrop), a(this._backdrop).addClass("in"), b) {
                                        if (!d) return void b();
                                        a(this._backdrop).one(f.TRANSITION_END, b).emulateTransitionEnd(150)
                                    }
                                } else !this._isShown && this._backdrop ? (a(this._backdrop).removeClass("in"), e = function() {
                                        c._removeBackdrop();
                                        b && b()
                                    }, f.supportsTransitionEnd() &&
                                    a(this._element).hasClass("fade") ? a(this._backdrop).one(f.TRANSITION_END, e).emulateTransitionEnd(150) : e()) : b && b()
                            }
                        }, {
                            key: "_handleUpdate",
                            value: function() {
                                this._adjustDialog()
                            }
                        }, {
                            key: "_adjustDialog",
                            value: function() {
                                var a = this._element.scrollHeight > document.documentElement.clientHeight;
                                !this._isBodyOverflowing && a && (this._element.style.paddingLeft = this._scrollbarWidth + "px");
                                this._isBodyOverflowing && !a && (this._element.style.paddingRight = this._scrollbarWidth + "px~")
                            }
                        }, {
                            key: "_resetAdjustments",
                            value: function() {
                                this._element.style.paddingLeft =
                                    "";
                                this._element.style.paddingRight = ""
                            }
                        }, {
                            key: "_checkScrollbar",
                            value: function() {
                                var a = window.innerWidth;
                                a || (a = document.documentElement.getBoundingClientRect(), a = a.right - Math.abs(a.left));
                                this._isBodyOverflowing = document.body.clientWidth < a;
                                this._scrollbarWidth = this._getScrollbarWidth()
                            }
                        }, {
                            key: "_setScrollbar",
                            value: function() {
                                var b = parseInt(a(".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed").css("padding-right") || 0, 10);
                                this._originalBodyPadding = document.body.style.paddingRight || "";
                                this._isBodyOverflowing &&
                                    (document.body.style.paddingRight = b + this._scrollbarWidth + "px")
                            }
                        }, {
                            key: "_resetScrollbar",
                            value: function() {
                                document.body.style.paddingRight = this._originalBodyPadding
                            }
                        }, {
                            key: "_getScrollbarWidth",
                            value: function() {
                                var a = document.createElement("div");
                                a.className = "modal-scrollbar-measure";
                                document.body.appendChild(a);
                                var b = a.offsetWidth - a.clientWidth;
                                return document.body.removeChild(a), b
                            }
                        }
                    ], [{
                        key: "_jQueryInterface",
                        value: function(c, e) {
                            return this.each(function() {
                                var d = a(this).data("bs.modal"),
                                    h = a.extend({},
                                        b.Default, a(this).data(), "object" == typeof c && c);
                                if (d || (d = new b(this, h), a(this).data("bs.modal", d)), "string" == typeof c) {
                                    if (void 0 === d[c]) throw Error('No method named "' + c + '"');
                                    d[c](e)
                                } else h.show && d.show(e)
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return e
                        }
                    }]), b
                }();
            return a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
                var c = this,
                    e = void 0,
                    d = f.getSelectorFromElement(this);
                d && (e = a(d)[0]);
                d = a(e).data("bs.modal") ? "toggle" : a.extend({},
                    a(e).data(), a(this).data());
                "A" === this.tagName && b.preventDefault();
                var h = a(e).one("show.bs.modal", function(b) {
                    b.isDefaultPrevented() || h.one("hidden.bs.modal", function() {
                        a(c).is(":visible") && c.focus()
                    })
                });
                p._jQueryInterface.call(a(e), d, this)
            }), a.fn.modal = p._jQueryInterface, a.fn.modal.Constructor = p, a.fn.modal.noConflict = function() {
                return a.fn.modal = b, p._jQueryInterface
            }, p
        }(jQuery), function(a) {
            var b = a.fn.scrollspy,
                e = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                d = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                p = function() {
                    function b(e, d) {
                        c(this, b);
                        this._element = e;
                        this._scrollElement = "BODY" === e.tagName ? window : e;
                        this._config = this._getConfig(d);
                        this._selector = this._config.target + " .nav-link," + (this._config.target + " .dropdown-item");
                        this._offsets = [];
                        this._targets = [];
                        this._activeTarget = null;
                        this._scrollHeight = 0;
                        a(this._scrollElement).on("scroll.bs.scrollspy", a.proxy(this._process, this));
                        this.refresh();
                        this._process()
                    }
                    return g(b, [{
                            key: "refresh",
                            value: function() {
                                var b = this,
                                    c = this._scrollElement !== this._scrollElement.window ?
                                    "position" : "offset",
                                    e = "auto" === this._config.method ? c : this._config.method,
                                    d = "position" === e ? this._getScrollTop() : 0;
                                this._offsets = [];
                                this._targets = [];
                                this._scrollHeight = this._getScrollHeight();
                                a.makeArray(a(this._selector)).map(function(b) {
                                    var c = void 0;
                                    b = f.getSelectorFromElement(b);
                                    return b && (c = a(b)[0]), c && (c.offsetWidth || c.offsetHeight) ? [a(c)[e]().top + d, b] : void 0
                                }).filter(function(a) {
                                    return a
                                }).sort(function(a, b) {
                                    return a[0] - b[0]
                                }).forEach(function(a) {
                                    b._offsets.push(a[0]);
                                    b._targets.push(a[1])
                                })
                            }
                        },
                        {
                            key: "dispose",
                            value: function() {
                                a.removeData(this._element, "bs.scrollspy");
                                a(this._scrollElement).off(".bs.scrollspy");
                                this._scrollHeight = this._activeTarget = this._targets = this._offsets = this._selector = this._config = this._scrollElement = this._element = null
                            }
                        }, {
                            key: "_getConfig",
                            value: function(b) {
                                if (b = a.extend({}, e, b), "string" != typeof b.target) {
                                    var c = a(b.target).attr("id");
                                    c || (c = f.getUID("scrollspy"), a(b.target).attr("id", c));
                                    b.target = "#" + c
                                }
                                return f.typeCheckConfig("scrollspy", b, d), b
                            }
                        }, {
                            key: "_getScrollTop",
                            value: function() {
                                return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop
                            }
                        }, {
                            key: "_getScrollHeight",
                            value: function() {
                                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                            }
                        }, {
                            key: "_process",
                            value: function() {
                                var a = this._getScrollTop() + this._config.offset,
                                    b = this._getScrollHeight(),
                                    c = this._config.offset + b - this._scrollElement.offsetHeight;
                                if (this._scrollHeight !== b && this.refresh(), a >= c) b = this._targets[this._targets.length -
                                    1], this._activeTarget !== b && this._activate(b);
                                if (this._activeTarget && a < this._offsets[0]) return this._activeTarget = null, void this._clear();
                                for (b = this._offsets.length; b--;) this._activeTarget !== this._targets[b] && a >= this._offsets[b] && (void 0 === this._offsets[b + 1] || a < this._offsets[b + 1]) && this._activate(this._targets[b])
                            }
                        }, {
                            key: "_activate",
                            value: function(b) {
                                this._activeTarget = b;
                                this._clear();
                                var c = this._selector.split(","),
                                    c = c.map(function(a) {
                                        return a + '[data-target="' + b + '"],' + (a + '[href="' + b + '"]')
                                    }),
                                    c = a(c.join(","));
                                c.hasClass("dropdown-item") ? (c.closest(".dropdown").find(".dropdown-toggle").addClass("active"), c.addClass("active")) : c.parents("li").find(".nav-link").addClass("active");
                                a(this._scrollElement).trigger("activate.bs.scrollspy", {
                                    relatedTarget: b
                                })
                            }
                        }, {
                            key: "_clear",
                            value: function() {
                                a(this._selector).filter(".active").removeClass("active")
                            }
                        }
                    ], [{
                        key: "_jQueryInterface",
                        value: function(c) {
                            return this.each(function() {
                                var e = a(this).data("bs.scrollspy"),
                                    d = "object" == typeof c && c || null;
                                if (e || (e = new b(this, d), a(this).data("bs.scrollspy",
                                        e)), "string" == typeof c) {
                                    if (void 0 === e[c]) throw Error('No method named "' + c + '"');
                                    e[c]()
                                }
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return e
                        }
                    }]), b
                }();
            return a(window).on("load.bs.scrollspy.data-api", function() {
                    for (var b = a.makeArray(a('[data-spy="scroll"]')), c = b.length; c--;) {
                        var e = a(b[c]);
                        p._jQueryInterface.call(e, e.data())
                    }
                }), a.fn.scrollspy = p._jQueryInterface, a.fn.scrollspy.Constructor = p, a.fn.scrollspy.noConflict = function() {
                    return a.fn.scrollspy = b, p._jQueryInterface
                },
                p
        }(jQuery), function(a) {
            var b = a.fn.tab,
                e = function() {
                    function b(a) {
                        c(this, b);
                        this._element = a
                    }
                    return g(b, [{
                        key: "show",
                        value: function() {
                            var b = this;
                            if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !a(this._element).hasClass("active")) {
                                var c = void 0,
                                    e = void 0,
                                    d = a(this._element).closest("ul:not(.dropdown-menu)")[0],
                                    h = f.getSelectorFromElement(this._element);
                                d && (e = a.makeArray(a(d).find(".active")), e = e[e.length - 1]);
                                var g = a.Event("hide.bs.tab", {
                                        relatedTarget: this._element
                                    }),
                                    l = a.Event("show.bs.tab", {
                                        relatedTarget: e
                                    });
                                (e && a(e).trigger(g), a(this._element).trigger(l), l.isDefaultPrevented() || g.isDefaultPrevented()) || (h && (c = a(h)[0]), this._activate(this._element, d), d = function() {
                                    var c = a.Event("hidden.bs.tab", {
                                            relatedTarget: b._element
                                        }),
                                        d = a.Event("shown.bs.tab", {
                                            relatedTarget: e
                                        });
                                    a(e).trigger(c);
                                    a(b._element).trigger(d)
                                }, c ? this._activate(c, c.parentNode, d) : d())
                            }
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            a.removeClass(this._element, "bs.tab");
                            this._element = null
                        }
                    }, {
                        key: "_activate",
                        value: function(b,
                            c, e) {
                            var d = a(c).find("> .nav-item > .active, > .active")[0];
                            c = e && f.supportsTransitionEnd() && (d && a(d).hasClass("fade") || !!a(c).find("> .nav-item .fade, > .fade")[0]);
                            b = a.proxy(this._transitionComplete, this, b, d, c, e);
                            d && c ? a(d).one(f.TRANSITION_END, b).emulateTransitionEnd(150) : b();
                            d && a(d).removeClass("in")
                        }
                    }, {
                        key: "_transitionComplete",
                        value: function(b, c, e, d) {
                            if (c) {
                                a(c).removeClass("active");
                                var h = a(c).find("> .dropdown-menu .active")[0];
                                h && a(h).removeClass("active");
                                c.setAttribute("aria-expanded", !1)
                            }
                            if (a(b).addClass("active"),
                                b.setAttribute("aria-expanded", !0), e ? (f.reflow(b), a(b).addClass("in")) : a(b).removeClass("fade"), b.parentNode && a(b.parentNode).hasClass("dropdown-menu"))(c = a(b).closest(".dropdown")[0]) && a(c).find(".dropdown-toggle").addClass("active"), b.setAttribute("aria-expanded", !0);
                            d && d()
                        }
                    }], [{
                        key: "_jQueryInterface",
                        value: function(c) {
                            return this.each(function() {
                                var e = a(this),
                                    d = e.data("bs.tab");
                                if (d || (d = d = new b(this), e.data("bs.tab", d)), "string" == typeof c) {
                                    if (void 0 === d[c]) throw Error('No method named "' + c + '"');
                                    d[c]()
                                }
                            })
                        }
                    }, {
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-alpha"
                        }
                    }]), b
                }();
            return a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
                b.preventDefault();
                e._jQueryInterface.call(a(this), "show")
            }), a.fn.tab = e._jQueryInterface, a.fn.tab.Constructor = e, a.fn.tab.noConflict = function() {
                return a.fn.tab = b, e._jQueryInterface
            }, e
        }(jQuery), function(a) {
            if (void 0 === window.Tether) throw Error("Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)");
            var b = a.fn.tooltip,
                d = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: "0 0",
                    constraints: []
                },
                e = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "string",
                    constraints: "array"
                },
                p = {
                    TOP: "bottom center",
                    RIGHT: "middle left",
                    BOTTOM: "top center",
                    LEFT: "middle right"
                },
                q = {
                    HIDE: "hide.bs.tooltip",
                    HIDDEN: "hidden.bs.tooltip",
                    SHOW: "show.bs.tooltip",
                    SHOWN: "shown.bs.tooltip",
                    INSERTED: "inserted.bs.tooltip",
                    CLICK: "click.bs.tooltip",
                    FOCUSIN: "focusin.bs.tooltip",
                    FOCUSOUT: "focusout.bs.tooltip",
                    MOUSEENTER: "mouseenter.bs.tooltip",
                    MOUSELEAVE: "mouseleave.bs.tooltip"
                },
                m = {
                    element: !1,
                    enabled: !1
                },
                u = function() {
                    function b(a, d) {
                        c(this, b);
                        this._isEnabled = !0;
                        this._timeout = 0;
                        this._hoverState = "";
                        this._activeTrigger = {};
                        this._tether = null;
                        this.element =
                            a;
                        this.config = this._getConfig(d);
                        this.tip = null;
                        this._setListeners()
                    }
                    return g(b, [{
                            key: "enable",
                            value: function() {
                                this._isEnabled = !0
                            }
                        }, {
                            key: "disable",
                            value: function() {
                                this._isEnabled = !1
                            }
                        }, {
                            key: "toggleEnabled",
                            value: function() {
                                this._isEnabled = !this._isEnabled
                            }
                        }, {
                            key: "toggle",
                            value: function(b) {
                                if (b) {
                                    var c = this.constructor.DATA_KEY,
                                        d = a(b.currentTarget).data(c);
                                    d || (d = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(c, d));
                                    d._activeTrigger.click = !d._activeTrigger.click;
                                    d._isWithActiveTrigger() ? d._enter(null, d) : d._leave(null, d)
                                } else {
                                    if (a(this.getTipElement()).hasClass("in")) return void this._leave(null, this);
                                    this._enter(null, this)
                                }
                            }
                        }, {
                            key: "dispose",
                            value: function() {
                                clearTimeout(this._timeout);
                                this.cleanupTether();
                                a.removeData(this.element, this.constructor.DATA_KEY);
                                a(this.element).off(this.constructor.EVENT_KEY);
                                this.tip && a(this.tip).remove();
                                this.tip = this.config = this.element = this._tether = this._activeTrigger = this._hoverState = this._timeout = this._isEnabled = null
                            }
                        },
                        {
                            key: "show",
                            value: function() {
                                var c = this,
                                    d = a.Event(this.constructor.Event.SHOW);
                                if (this.isWithContent() && this._isEnabled) {
                                    a(this.element).trigger(d);
                                    var e = a.contains(this.element.ownerDocument.documentElement, this.element);
                                    if (!d.isDefaultPrevented() && e) {
                                        d = this.getTipElement();
                                        e = f.getUID(this.constructor.NAME);
                                        d.setAttribute("id", e);
                                        this.element.setAttribute("aria-describedby", e);
                                        this.setContent();
                                        this.config.animation && a(d).addClass("fade");
                                        e = "function" == typeof this.config.placement ? this.config.placement.call(this,
                                            d, this.element) : this.config.placement;
                                        e = this._getAttachment(e);
                                        a(d).data(this.constructor.DATA_KEY, this).appendTo(document.body);
                                        a(this.element).trigger(this.constructor.Event.INSERTED);
                                        this._tether = new Tether({
                                            attachment: e,
                                            element: d,
                                            target: this.element,
                                            classes: m,
                                            classPrefix: "bs-tether",
                                            offset: this.config.offset,
                                            constraints: this.config.constraints,
                                            addTargetClasses: !1
                                        });
                                        f.reflow(d);
                                        this._tether.position();
                                        a(d).addClass("in");
                                        d = function() {
                                            var b = c._hoverState;
                                            c._hoverState = null;
                                            a(c.element).trigger(c.constructor.Event.SHOWN);
                                            "out" === b && c._leave(null, c)
                                        };
                                        if (f.supportsTransitionEnd() && a(this.tip).hasClass("fade")) return void a(this.tip).one(f.TRANSITION_END, d).emulateTransitionEnd(b._TRANSITION_DURATION);
                                        d()
                                    }
                                }
                            }
                        }, {
                            key: "hide",
                            value: function(b) {
                                var c = this,
                                    d = this.getTipElement(),
                                    e = a.Event(this.constructor.Event.HIDE),
                                    h = function() {
                                        "in" !== c._hoverState && d.parentNode && d.parentNode.removeChild(d);
                                        c.element.removeAttribute("aria-describedby");
                                        a(c.element).trigger(c.constructor.Event.HIDDEN);
                                        c.cleanupTether();
                                        b && b()
                                    };
                                a(this.element).trigger(e);
                                e.isDefaultPrevented() || (a(d).removeClass("in"), f.supportsTransitionEnd() && a(this.tip).hasClass("fade") ? a(d).one(f.TRANSITION_END, h).emulateTransitionEnd(150) : h(), this._hoverState = "")
                            }
                        }, {
                            key: "isWithContent",
                            value: function() {
                                return !!this.getTitle()
                            }
                        }, {
                            key: "getTipElement",
                            value: function() {
                                return this.tip = this.tip || a(this.config.template)[0]
                            }
                        }, {
                            key: "setContent",
                            value: function() {
                                var b = a(this.getTipElement());
                                this.setElementContent(b.find(".tooltip-inner"), this.getTitle());
                                b.removeClass("fade").removeClass("in");
                                this.cleanupTether()
                            }
                        }, {
                            key: "setElementContent",
                            value: function(b, c) {
                                var d = this.config.html;
                                "object" == typeof c && (c.nodeType || c.jquery) ? d ? a(c).parent().is(b) || b.empty().append(c) : b.text(a(c).text()) : b[d ? "html" : "text"](c)
                            }
                        }, {
                            key: "getTitle",
                            value: function() {
                                var a = this.element.getAttribute("data-original-title");
                                return a || (a = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), a
                            }
                        }, {
                            key: "cleanupTether",
                            value: function() {
                                this._tether && this._tether.destroy()
                            }
                        }, {
                            key: "_getAttachment",
                            value: function(a) {
                                return p[a.toUpperCase()]
                            }
                        }, {
                            key: "_setListeners",
                            value: function() {
                                var b = this;
                                this.config.trigger.split(" ").forEach(function(c) {
                                    if ("click" === c) a(b.element).on(b.constructor.Event.CLICK, b.config.selector, a.proxy(b.toggle, b));
                                    else if ("manual" !== c) {
                                        var d = "hover" === c ? b.constructor.Event.MOUSEENTER : b.constructor.Event.FOCUSIN;
                                        c = "hover" === c ? b.constructor.Event.MOUSELEAVE : b.constructor.Event.FOCUSOUT;
                                        a(b.element).on(d, b.config.selector, a.proxy(b._enter, b)).on(c, b.config.selector, a.proxy(b._leave,
                                            b))
                                    }
                                });
                                this.config.selector ? this.config = a.extend({}, this.config, {
                                    trigger: "manual",
                                    selector: ""
                                }) : this._fixTitle()
                            }
                        }, {
                            key: "_fixTitle",
                            value: function() {
                                var a = typeof this.element.getAttribute("data-original-title");
                                (this.element.getAttribute("title") || "string" !== a) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                            }
                        }, {
                            key: "_enter",
                            value: function(b, c) {
                                var d = this.constructor.DATA_KEY;
                                return c = c || a(b.currentTarget).data(d), c ||
                                    (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusin" === b.type ? "focus" : "hover"] = !0), a(c.getTipElement()).hasClass("in") || "in" === c._hoverState ? void(c._hoverState = "in") : (clearTimeout(c._timeout), c._hoverState = "in", c.config.delay && c.config.delay.show ? void(c._timeout = setTimeout(function() {
                                        "in" === c._hoverState && c.show()
                                    }, c.config.delay.show)) : void c.show())
                            }
                        }, {
                            key: "_leave",
                            value: function(b, c) {
                                var d = this.constructor.DATA_KEY;
                                return c =
                                    c || a(b.currentTarget).data(d), c || (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusout" === b.type ? "focus" : "hover"] = !1), c._isWithActiveTrigger() ? void 0 : (clearTimeout(c._timeout), c._hoverState = "out", c.config.delay && c.config.delay.hide ? void(c._timeout = setTimeout(function() {
                                        "out" === c._hoverState && c.hide()
                                    }, c.config.delay.hide)) : void c.hide())
                            }
                        }, {
                            key: "_isWithActiveTrigger",
                            value: function() {
                                for (var a in this._activeTrigger)
                                    if (this._activeTrigger[a]) return !0;
                                return !1
                            }
                        }, {
                            key: "_getConfig",
                            value: function(b) {
                                return b = a.extend({}, this.constructor.Default, a(this.element).data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
                                    show: b.delay,
                                    hide: b.delay
                                }), f.typeCheckConfig("tooltip", b, this.constructor.DefaultType), b
                            }
                        }, {
                            key: "_getDelegateConfig",
                            value: function() {
                                var a = {};
                                if (this.config)
                                    for (var b in this.config) this.constructor.Default[b] !== this.config[b] && (a[b] = this.config[b]);
                                return a
                            }
                        }
                    ], [{
                            key: "_jQueryInterface",
                            value: function(c) {
                                return this.each(function() {
                                    var d =
                                        a(this).data("bs.tooltip"),
                                        e = "object" == typeof c ? c : null;
                                    if ((d || !/destroy|hide/.test(c)) && (d || (d = new b(this, e), a(this).data("bs.tooltip", d)), "string" == typeof c)) {
                                        if (void 0 === d[c]) throw Error('No method named "' + c + '"');
                                        d[c]()
                                    }
                                })
                            }
                        }, {
                            key: "VERSION",
                            get: function() {
                                return "4.0.0-alpha"
                            }
                        }, {
                            key: "Default",
                            get: function() {
                                return d
                            }
                        }, {
                            key: "NAME",
                            get: function() {
                                return "tooltip"
                            }
                        }, {
                            key: "DATA_KEY",
                            get: function() {
                                return "bs.tooltip"
                            }
                        }, {
                            key: "Event",
                            get: function() {
                                return q
                            }
                        }, {
                            key: "EVENT_KEY",
                            get: function() {
                                return ".bs.tooltip"
                            }
                        },
                        {
                            key: "DefaultType",
                            get: function() {
                                return e
                            }
                        }
                    ]), b
                }();
            return a.fn.tooltip = u._jQueryInterface, a.fn.tooltip.Constructor = u, a.fn.tooltip.noConflict = function() {
                return a.fn.tooltip = b, u._jQueryInterface
            }, u
        }(jQuery));
    (function(a) {
        var e = a.fn.popover,
            f = a.extend({}, d.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }),
            n = a.extend({}, d.DefaultType, {
                content: "(string|element|function)"
            }),
            p = {
                HIDE: "hide.bs.popover",
                HIDDEN: "hidden.bs.popover",
                SHOW: "show.bs.popover",
                SHOWN: "shown.bs.popover",
                INSERTED: "inserted.bs.popover",
                CLICK: "click.bs.popover",
                FOCUSIN: "focusin.bs.popover",
                FOCUSOUT: "focusout.bs.popover",
                MOUSEENTER: "mouseenter.bs.popover",
                MOUSELEAVE: "mouseleave.bs.popover"
            },
            q = function(d) {
                function e() {
                    c(this, e);
                    a: {
                        var a = Object.getPrototypeOf(e.prototype),
                            b = "constructor";
                        var d = this;
                        for (var h = !0; h;) {
                            null === a && (a = Function.prototype);
                            h = Object.getOwnPropertyDescriptor(a, b);
                            if (void 0 !== h) {
                                if ("value" in
                                    h) {
                                    d = h.value;
                                    break a
                                }
                                b = h.get;
                                if (void 0 === b) break;
                                d = b.call(d);
                                break a
                            }
                            a = Object.getPrototypeOf(a);
                            if (null === a) break;
                            h = !0
                        }
                        d = void 0
                    }
                    d.apply(this, arguments)
                }
                return b(e, d), g(e, [{
                    key: "isWithContent",
                    value: function() {
                        return this.getTitle() || this._getContent()
                    }
                }, {
                    key: "getTipElement",
                    value: function() {
                        return this.tip = this.tip || a(this.config.template)[0]
                    }
                }, {
                    key: "setContent",
                    value: function() {
                        var b = a(this.getTipElement());
                        this.setElementContent(b.find(".popover-title"), this.getTitle());
                        this.setElementContent(b.find(".popover-content"),
                            this._getContent());
                        b.removeClass("fade").removeClass("in");
                        this.cleanupTether()
                    }
                }, {
                    key: "_getContent",
                    value: function() {
                        return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                    }
                }], [{
                    key: "_jQueryInterface",
                    value: function(b) {
                        return this.each(function() {
                            var c = a(this).data("bs.popover"),
                                d = "object" == typeof b ? b : null;
                            if ((c || !/destroy|hide/.test(b)) && (c || (c = new e(this, d), a(this).data("bs.popover", c)), "string" == typeof b)) {
                                if (void 0 ===
                                    c[b]) throw Error('No method named "' + b + '"');
                                c[b]()
                            }
                        })
                    }
                }, {
                    key: "VERSION",
                    get: function() {
                        return "4.0.0-alpha"
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return f
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return "popover"
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return "bs.popover"
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return p
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return ".bs.popover"
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return n
                    }
                }]), e
            }(d);
        return a.fn.popover = q._jQueryInterface, a.fn.popover.Constructor = q, a.fn.popover.noConflict = function() {
            return a.fn.popover =
                e, q._jQueryInterface
        }, q
    })(jQuery)
}(jQuery);
! function(a, b) {
    var c = a();
    a.fn.dropdownHover = function(g) {
        return "ontouchstart" in document ? this : (c = c.add(this.parent()), this.each(function() {
            function f() {
                b.clearTimeout(d);
                b.clearTimeout(e);
                e = b.setTimeout(function() {
                    c.find(":focus").blur();
                    !0 === q.instantlyCloseOthers && c.removeClass("open");
                    b.clearTimeout(e);
                    h.attr("aria-expanded", "true");
                    l.addClass("open");
                    h.trigger(p)
                }, q.hoverDelay)
            }
            var d, e, h = a(this),
                l = h.parent(),
                n = {
                    delay: a(this).data("delay"),
                    hoverDelay: a(this).data("hover-delay"),
                    instantlyCloseOthers: a(this).data("close-others")
                },
                p = "show.bs.dropdown",
                q = a.extend(!0, {}, {
                    delay: 500,
                    hoverDelay: 0,
                    instantlyCloseOthers: !0
                }, g, n);
            l.hover(function(a) {
                return l.hasClass("open") || h.is(a.target) ? void f(a) : !0
            }, function() {
                b.clearTimeout(e);
                d = b.setTimeout(function() {
                    h.attr("aria-expanded", "false");
                    l.removeClass("open");
                    h.trigger("hide.bs.dropdown")
                }, q.delay)
            });
            h.hover(function(a) {
                return l.hasClass("open") || l.is(a.target) ? void f(a) : !0
            });
            l.find(".dropdown-submenu").each(function() {
                var c, d = a(this);
                d.hover(function() {
                    b.clearTimeout(c);
                    d.children(".dropdown-menu").show();
                    d.siblings().children(".dropdown-menu").hide()
                }, function() {
                    var a = d.children(".dropdown-menu");
                    c = b.setTimeout(function() {
                        a.hide()
                    }, q.delay)
                })
            })
        }))
    };
    a(document).ready(function() {
        a('[data-hover="dropdown"]').dropdownHover()
    })
}(jQuery, window);
! function(a, b, c, g) {
    function f(b, c) {
        this.settings = null;
        this.options = a.extend({}, f.Defaults, c);
        this.$element = a(b);
        this._handlers = {};
        this._plugins = {};
        this._supress = {};
        this._speed = this._current = null;
        this._coordinates = [];
        this._width = this._breakpoint = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._widths = [];
        this._invalidated = {};
        this._pipe = [];
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        };
        this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        };
        a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this));
        a.each(f.Plugins, a.proxy(function(a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this));
        a.each(f.Workers, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this));
        this.setup();
        this.initialize()
    }
    f.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    };
    f.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    };
    f.Type = {
        Event: "event",
        State: "state"
    };
    f.Plugins = {};
    f.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this.settings.margin || "",
                c = this.settings.rtl,
                b = {
                    width: "auto",
                    "margin-left": c ? b : "",
                    "margin-right": c ? "" : b
                };
            this.settings.autoWidth && this.$stage.children().css(b);
            a.css = b
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = this._items.length,
                d = !this.settings.autoWidth,
                f = [];
            for (a.items = {
                    merge: !1,
                    width: b
                }; c--;) {
                var g = this._mergers[c];
                g = this.settings.mergeFit && Math.min(g, this.settings.items) || g;
                a.items.merge = 1 < g || a.items.merge;
                f[c] = d ? b * g : this._items[c].width()
            }
            this._widths =
                f
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            for (var b = [], c = this._items, h = this.settings, f = Math.max(2 * h.items, 4), g = 2 * Math.ceil(c.length / 2), h = h.loop && c.length ? h.rewind ? f : Math.max(f, g) : 0, g = f = "", h = h / 2; h--;) b.push(this.normalize(b.length / 2, !0)), f += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), g = c[b[b.length - 1]][0].outerHTML + g;
            this._clones = b;
            a(f).addClass("cloned").appendTo(this.$stage);
            a(g).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, f, g, p = []; ++c < b;) f = p[c - 1] || 0, g = this._widths[this.relative(c)] + this.settings.margin, p.push(f + g * a);
            this._coordinates = p
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a = this.settings.stagePadding,
                b = this._coordinates;
            this.$stage.css({
                width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                "padding-left": a || "",
                "padding-right": a || ""
            })
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children();
            if (c && a.items.merge)
                for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            else c && (a.css.width = a.items.width, d.css(a.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            1 > this._coordinates.length && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0;
            a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current));
            this.reset(a.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b = this.settings.rtl ? 1 : -1,
                c = 2 * this.settings.stagePadding,
                f = this.coordinates(this.current()) + c,
                g = f + this.width() * b,
                p = [];
            var q = 0;
            for (a = this._coordinates.length; a > q; q++) {
                var m = this._coordinates[q - 1] || 0;
                var u = Math.abs(this._coordinates[q]) + c * b;
                (this.op(m, "<=", f) && this.op(m, ">", g) || this.op(u, "<", f) && this.op(u, ">", g)) && p.push(q)
            }
            this.$stage.children(".active").removeClass("active");
            this.$stage.children(":eq(" + p.join("), :eq(") + ")").addClass("active");
            this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }];
    f.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var b = this.$element.find("img");
            var c = this.$element.children(this.settings.nestedItemSelector ?
                "." + this.settings.nestedItemSelector : g).width();
            b.length && 0 >= c && this.preloadAutoWidthImages(b)
        }
        this.$element.addClass(this.options.loadingClass);
        this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>');
        this.$element.append(this.$stage.parent());
        this.replace(this.$element.children().not(this.$stage.parent()));
        this.$element.is(":visible") ? this.refresh() : this.invalidate("width");
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
        this.registerEventHandlers();
        this.leave("initializing");
        this.trigger("initialized")
    };
    f.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            h = -1,
            f = null;
        c ? (a.each(c, function(a) {
            b >= a && a > h && (h = Number(a))
        }), f = a.extend({}, this.options, c[h]), delete f.responsive, f.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + h))) : f = a.extend({}, this.options);
        null !== this.settings && this._breakpoint === h ||
            (this.trigger("change", {
                property: {
                    name: "settings",
                    value: f
                }
            }), this._breakpoint = h, this.settings = f, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            }))
    };
    f.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    };
    f.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
            content: c.data
        }), c.data
    };
    f.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, h = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), f = {}; c > b;)(this._invalidated.all || 0 < a.grep(this._pipe[b].filter, h).length) && this._pipe[b].run(f), b++;
        this._invalidated = {};
        !this.is("valid") && this.enter("valid")
    };
    f.prototype.width = function(a) {
        switch (a || f.Width.Default) {
            case f.Width.Inner:
            case f.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    };
    f.prototype.refresh =
        function() {
            this.enter("refreshing");
            this.trigger("refresh");
            this.setup();
            this.optionsLogic();
            this.$element.addClass(this.options.refreshClass);
            this.update();
            this.$element.removeClass(this.options.refreshClass);
            this.leave("refreshing");
            this.trigger("refreshed")
        };
    f.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer);
        this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    };
    f.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ?
            !1 : this.$element.is(":visible") ? (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) : !1 : !1
    };
    f.prototype.registerEventHandlers = function() {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this));
        !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize);
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
            this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            }));
        this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    };
    f.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ?
                13 : 5]
        }) : (d = this.$stage.position(), d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core",
            a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this));
            Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    };
    f.prototype.onDragMove = function(a) {
        var b = null,
            c = null,
            d = null,
            f = this.difference(this._drag.pointer, this.pointer(a)),
            g = this.difference(this._drag.stage.start,
                f);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, g.x = ((g.x - b) % c + c) % c + b) : (b = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), c = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), d = this.settings.pullDrag ? -1 * f.x / 5 : 0, g.x = Math.max(Math.min(g.x, b + d), c + d)), this._drag.stage.current = g, this.animate(g.x))
    };
    f.prototype.onDragEnd = function(b) {
        b = this.difference(this._drag.pointer, this.pointer(b));
        var d = this._drag.stage.current,
            h = 0 < b.x ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core");
        this.$element.removeClass(this.options.grabClass);
        (0 !== b.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(d.x, 0 !== b.x ? h : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = h, (3 < Math.abs(b.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function() {
            return !1
        }));
        this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    };
    f.prototype.closest = function(b, c) {
        var d = -1,
            e = this.width(),
            f = this.coordinates();
        return this.settings.freeDrag || a.each(f, a.proxy(function(a, h) {
            return b > h - 30 && h + 30 > b ? d = a : this.op(b, "<", h) && this.op(b, ">", f[a + 1] || h - e) && (d = "left" === c ? a + 1 : a), -1 === d
        }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (d = b = this.maximum())), d
    };
    f.prototype.animate = function(b) {
        var c = 0 < this.speed();
        this.is("animating") && this.onTransitionEnd();
        c && (this.enter("animating"), this.trigger("translate"));
        a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1E3 + "s"
        }) : c ? this.$stage.animate({
            left: b + "px"
        }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: b + "px"
        })
    };
    f.prototype.is = function(a) {
        return this._states.current[a] && 0 < this._states.current[a]
    };
    f.prototype.current = function(a) {
        if (a ===
            g) return this._current;
        if (0 === this._items.length) return g;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== g && (a = this.normalize(b.data));
            this._current = a;
            this.invalidate("position");
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    };
    f.prototype.invalidate = function(b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a,
            b) {
            return b
        })
    };
    f.prototype.reset = function(a) {
        a = this.normalize(a);
        a !== g && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    };
    f.prototype.normalize = function(b, c) {
        var d = this._items.length,
            e = c ? 0 : this._clones.length;
        return !a.isNumeric(b) || 1 > d ? b = g : (0 > b || b >= d + e) && (b = ((b - e / 2) % d + d) % d + e / 2), b
    };
    f.prototype.relative = function(a) {
        return a -= this._clones.length / 2, this.normalize(a, !0)
    };
    f.prototype.maximum = function(a) {
        var b,
            c = this.settings,
            d = this._coordinates.length,
            f = Math.abs(this._coordinates[d - 1]) - this._width,
            g = -1;
        if (c.loop) d = this._clones.length / 2 + this._items.length - 1;
        else if (c.autoWidth || c.merge)
            for (; 1 < d - g;) Math.abs(this._coordinates[b = d + g >> 1]) < f ? g = b : d = b;
        else d = c.center ? this._items.length - 1 : this._items.length - c.items;
        return a && (d -= this._clones.length / 2), Math.max(d, 0)
    };
    f.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    };
    f.prototype.items = function(a) {
        return a === g ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    };
    f.prototype.mergers = function(a) {
        return a === g ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    };
    f.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            d = c + this._items.length;
        return b === g ? a.map(this._clones, function(a, b) {
            return 0 === b % 2 ? d + b / 2 : c - (b + 1) / 2
        }) : a.map(this._clones, function(a, e) {
            return a === b ? 0 === e % 2 ? d + e / 2 : c - (e + 1) / 2 : null
        })
    };
    f.prototype.speed = function(a) {
        return a !== g && (this._speed = a), this._speed
    };
    f.prototype.coordinates = function(b) {
        var c = null;
        return b ===
            g ? a.map(this._coordinates, a.proxy(function(a, b) {
                return this.coordinates(b)
            }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
    };
    f.prototype.duration = function(a, b, c) {
        return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    };
    f.prototype.to = function(a, b) {
        var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (0 < e) - (0 > e),
            g = this._items.length,
            m = this.minimum(),
            u = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, d = ((a - m) % g + g) % g + m, d !== a && u >= d - e && 0 < d - e && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (u += 1, a = (a % u + u) % u) : a = Math.max(m, Math.min(u, a));
        this.speed(this.duration(c, a, b));
        this.current(a);
        this.$element.is(":visible") && this.update()
    };
    f.prototype.next = function(a) {
        a = a || !1;
        this.to(this.relative(this.current()) + 1, a)
    };
    f.prototype.prev = function(a) {
        a = a || !1;
        this.to(this.relative(this.current()) - 1, a)
    };
    f.prototype.onTransitionEnd = function(a) {
        return a !==
            g && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.leave("animating"), void this.trigger("translated"))
    };
    f.prototype.viewport = function() {
        if (this.options.responsiveBaseElement !== b) var d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth) d = b.innerWidth;
        else {
            if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
            d = c.documentElement.clientWidth
        }
        return d
    };
    f.prototype.replace = function(b) {
        this.$stage.empty();
        this._items = [];
        b && (b = b instanceof jQuery ? b : a(b));
        this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector));
        b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b);
            this.$stage.append(b);
            this._items.push(b);
            this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this));
        this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate("items")
    };
    f.prototype.add = function(b,
        c) {
        var d = this.relative(this._current);
        c = c === g ? this._items.length : this.normalize(c, !0);
        b = b instanceof jQuery ? b : a(b);
        this.trigger("add", {
            content: b,
            position: c
        });
        b = this.prepare(b);
        0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c,
            0, 1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1));
        this._items[d] && this.reset(this._items[d].index());
        this.invalidate("items");
        this.trigger("added", {
            content: b,
            position: c
        })
    };
    f.prototype.remove = function(a) {
        a = this.normalize(a, !0);
        a !== g && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    };
    f.prototype.preloadAutoWidthImages =
        function(b) {
            b.each(a.proxy(function(b, c) {
                this.enter("pre-loading");
                c = a(c);
                a(new Image).one("load", a.proxy(function(a) {
                    c.attr("src", a.target.src);
                    c.css("opacity", 1);
                    this.leave("pre-loading");
                    this.is("pre-loading") || this.is("initializing") || this.refresh()
                }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
            }, this))
        };
    f.prototype.destroy = function() {
        this.$element.off(".owl.core");
        this.$stage.off(".owl.core");
        a(c).off(".owl.core");
        !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer),
            this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove();
        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass +
            "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    };
    f.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : c > a;
            case ">":
                return d ? c > a : a > c;
            case ">=":
                return d ? c >= a : a >= c;
            case "<=":
                return d ? a >= c : c >= a
        }
    };
    f.prototype.on = function(a, b, c, f) {
        a.addEventListener ? a.addEventListener(b, c, f) : a.attachEvent && a.attachEvent("on" + b, c)
    };
    f.prototype.off = function(a, b, c, f) {
        a.removeEventListener ? a.removeEventListener(b, c, f) : a.detachEvent && a.detachEvent("on" + b, c)
    };
    f.prototype.trigger = function(b, c,
        h, g, n) {
        g = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        };
        n = a.camelCase(a.grep(["on", b, h], function(a) {
            return a
        }).join("-").toLowerCase());
        var d = a.Event([b, "owl", h || "carousel"].join(".").toLowerCase(), a.extend({
            relatedTarget: this
        }, g, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(d)
        }), this.register({
            type: f.Type.Event,
            name: b
        }), this.$element.trigger(d), this.settings && "function" == typeof this.settings[n] && this.settings[n].call(this, d)), d
    };
    f.prototype.enter =
        function(b) {
            a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
                this._states.current[b] === g && (this._states.current[b] = 0);
                this._states.current[b]++
            }, this))
        };
    f.prototype.leave = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b]--
        }, this))
    };
    f.prototype.register = function(b) {
        if (b.type === f.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default =
                    function(a) {
                        return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && -1 < a.namespace.indexOf("owl") : c.apply(this, arguments)
                    };
                a.event.special[b.name].owl = !0
            }
        } else b.type === f.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d
        }, this)))
    };
    f.prototype.suppress = function(b) {
        a.each(b,
            a.proxy(function(a, b) {
                this._supress[b] = !0
            }, this))
    };
    f.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    };
    f.prototype.pointer = function(a) {
        var c = {
            x: null,
            y: null
        };
        return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
    };
    f.prototype.difference = function(a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y
        }
    };
    a.fn.owlCarousel = function(b) {
        var c =
            Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this),
                e = d.data("owl.carousel");
            e || (e = new f(this, "object" == typeof b && b), d.data("owl.carousel", e), a.each("next prev to destroy refresh replace add remove".split(" "), function(b, c) {
                e.register({
                    type: f.Type.Event,
                    name: c
                });
                e.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), e[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                }, e))
            }));
            "string" == typeof b && "_" !==
                b.charAt(0) && e[b].apply(e, c)
        })
    };
    a.fn.owlCarousel.Constructor = f
}(window.Zepto || window.jQuery, window, document);
(function(a, b, c, g) {
    var f = function(b) {
        this._core = b;
        this._visible = this._interval = null;
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        };
        this._core.options = a.extend({}, f.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    f.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    };
    f.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh,
            this), this._core.settings.autoRefreshInterval))
    };
    f.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    };
    f.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] &&
            (this[c] = null)
    };
    a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = f
})(window.Zepto || window.jQuery, window, document);
(function(a, b, c, g) {
    var f = function(b) {
        this._core = b;
        this._loaded = [];
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
                    var c = this._core.settings,
                        d = c.center && Math.ceil(c.items / 2) || c.items,
                        c = c.center && -1 * d || 0;
                    b = (b.property && b.property.value || this._core.current()) + c;
                    for (var e = this._core.clones().length, f = a.proxy(function(a, b) {
                                this.load(b)
                            },
                            this); c++ < d;) this.load(e / 2 + this._core.relative(b)), e && a.each(this._core.clones(this._core.relative(b)), f), b++
                }
            }, this)
        };
        this._core.options = a.extend({}, f.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    f.Defaults = {
        lazyLoad: !1
    };
    f.prototype.load = function(c) {
        var d = (c = this._core.$stage.children().eq(c)) && c.find(".owl-lazy");
        !d || -1 < a.inArray(c.get(0), this._loaded) || (d.each(a.proxy(function(c, d) {
            var e, h = a(d),
                f = 1 < b.devicePixelRatio && h.attr("data-src-retina") || h.attr("data-src");
            this._core.trigger("load", {
                element: h,
                url: f
            }, "lazy");
            h.is("img") ? h.one("load.owl.lazy", a.proxy(function() {
                h.css("opacity", 1);
                this._core.trigger("loaded", {
                    element: h,
                    url: f
                }, "lazy")
            }, this)).attr("src", f) : (e = new Image, e.onload = a.proxy(function() {
                h.css({
                    "background-image": "url(" + f + ")",
                    opacity: "1"
                });
                this._core.trigger("loaded", {
                    element: h,
                    url: f
                }, "lazy")
            }, this), e.src = f)
        }, this)), this._loaded.push(c.get(0)))
    };
    f.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" !=
            typeof this[b] && (this[b] = null)
    };
    a.fn.owlCarousel.Constructor.Plugins.Lazy = f
})(window.Zepto || window.jQuery, window, document);
(function(a, b, c, g) {
    var f = function(b) {
        this._core = b;
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() &&
                    this.update()
            }, this)
        };
        this._core.options = a.extend({}, f.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    f.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    };
    f.prototype.update = function() {
        var b = this._core._current,
            c = b + this._core.settings.items,
            b = this._core.$stage.children().toArray().slice(b, c);
        heights = [];
        maxheight = 0;
        a.each(b, function(b, c) {
            heights.push(a(c).height())
        });
        maxheight = Math.max.apply(null, heights);
        this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass)
    };
    f.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    };
    a.fn.owlCarousel.Constructor.Plugins.AutoHeight = f
})(window.Zepto || window.jQuery, window, document);
(function(a, b, c, g) {
    var f = function(b) {
        this._core = b;
        this._videos = {};
        this._playing = null;
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                },
                this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                }
            }, this)
        };
        this._core.options = a.extend({}, f.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    f.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    };
    f.prototype.fetch = function(a, b) {
        a.attr("data-vimeo-id");
        var c = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
            d = a.attr("data-width") || this._core.settings.videoWidth,
            e = a.attr("data-height") || this._core.settings.videoHeight,
            f = a.attr("href");
        if (!f) throw Error("Missing video URL.");
        if (c = f.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), -1 < c[3].indexOf("youtu")) var g =
            "youtube";
        else {
            if (!(-1 < c[3].indexOf("vimeo"))) throw Error("Video URL not supported.");
            g = "vimeo"
        }
        c = c[6];
        this._videos[f] = {
            type: g,
            id: c,
            width: d,
            height: e
        };
        b.attr("data-video", f);
        this.thumbnail(a, this._videos[f])
    };
    f.prototype.thumbnail = function(b, c) {
        var d, e, f = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            g = b.find("img"),
            q = "src",
            m = "",
            u = this._core.settings,
            v = function(a) {
                d = u.lazyLoad ? '<div class="owl-video-tn ' + m + '" ' + q + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                    a + ')"></div>';
                b.after(d);
                b.after('<div class="owl-video-play-icon"></div>')
            };
        return b.wrap('<div class="owl-video-wrapper"' + f + "></div>"), this._core.settings.lazyLoad && (q = "data-src", m = "owl-lazy"), g.length ? (v(g.attr(q)), g.remove(), !1) : void("youtube" === c.type ? (e = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", v(e)) : "vimeo" === c.type && a.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                e = a[0].thumbnail_large;
                v(e)
            }
        }))
    };
    f.prototype.stop =
        function() {
            this._core.trigger("stop", null, "video");
            this._playing.find(".owl-video-frame").remove();
            this._playing.removeClass("owl-video-playing");
            this._playing = null;
            this._core.leave("playing");
            this._core.trigger("stopped", null, "video")
        };
    f.prototype.play = function(b) {
        var c;
        b = a(b.target).closest("." + this._core.settings.itemClass);
        var d = this._videos[b.attr("data-video")],
            f = d.width || "100%",
            g = d.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null,
                "video"), b = this._core.items(this._core.relative(b.index())), this._core.reset(b.index()), "youtube" === d.type ? c = '<iframe width="' + f + '" height="' + g + '" src="http://www.youtube.com/embed/' + d.id + "?autoplay=1&v=" + d.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === d.type && (c = '<iframe src="http://player.vimeo.com/video/' + d.id + '?autoplay=1" width="' + f + '" height="' + g + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(b.find(".owl-video")),
            this._playing = b.addClass("owl-video-playing"))
    };
    f.prototype.isInFullScreen = function() {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    };
    f.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    };
    a.fn.owlCarousel.Constructor.Plugins.Video = f
})(window.Zepto ||
    window.jQuery, window, document);
(function(a, b, c, g) {
    var f = function(b) {
        this.core = b;
        this.core.options = a.extend({}, f.Defaults, this.core.options);
        this.swapping = !0;
        this.next = this.previous = g;
        this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this),
            "translate.owl.carousel": a.proxy(function(a) {
                a.namespace && this.swapping &&
                    (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        };
        this.core.$element.on(this.handlers)
    };
    f.Defaults = {
        animateOut: !1,
        animateIn: !1
    };
    f.prototype.swap = function() {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this),
                h = this.core.$stage.children().eq(this.previous),
                f = this.core.$stage.children().eq(this.next),
                g = this.core.settings.animateIn,
                p = this.core.settings.animateOut;
            this.core.current() !== this.previous &&
                (p && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), h.one(a.support.animation.end, c).css({
                    left: b + "px"
                }).addClass("animated owl-animated-out").addClass(p)), g && f.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(g))
        }
    };
    f.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd()
    };
    f.prototype.destroy =
        function() {
            var a, b;
            for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        };
    a.fn.owlCarousel.Constructor.Plugins.Animate = f
})(window.Zepto || window.jQuery, window, document);
(function(a, b, c, g) {
    var f = function(b) {
        this._core = b;
        this._interval = null;
        this._paused = !1;
        this._handlers = {
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "settings" === a.property.name && (this._core.settings.autoplay ? this.play() : this.stop())
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                a.namespace && this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function(a) {
                    a.namespace && this.stop()
                },
                this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this)
        };
        this._core.$element.on(this._handlers);
        this._core.options = a.extend({}, f.Defaults, this._core.options)
    };
    f.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5E3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    };
    f.prototype.play = function(d, e) {
        this._paused = !1;
        this._core.is("rotating") || (this._core.enter("rotating"), this._interval = b.setInterval(a.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
        }, this), d || this._core.settings.autoplayTimeout))
    };
    f.prototype.stop = function() {
        this._core.is("rotating") && (b.clearInterval(this._interval), this._core.leave("rotating"))
    };
    f.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    };
    f.prototype.destroy = function() {
        var a,
            b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    };
    a.fn.owlCarousel.Constructor.Plugins.autoplay = f
})(window.Zepto || window.jQuery, window, document);
(function(a, b, c, g) {
    var f = function(b) {
        this._core = b;
        this._initialized = !1;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };
        this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": a.proxy(function(a) {
                a.namespace &&
                    this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(),
                    this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        };
        this._core.options = a.extend({}, f.Defaults, this._core.options);
        this.$element.on(this._handlers)
    };
    f.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    };
    f.prototype.initialize = function() {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
                this.prev(c.navSpeed)
            },
            this));
        this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.next(c.navSpeed)
        }, this));
        c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]);
        this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$absolute.on("click", "div", a.proxy(function(b) {
            var d =
                a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault();
            this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
    };
    f.prototype.destroy = function() {
        var a, b, c, f;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (f in this.overides) this._core[f] = this._overrides[f];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] =
            null)
    };
    f.prototype.update = function() {
        var a, b, c = this._core.clones().length / 2,
            f = c + this._core.items().length,
            g = this._core.maximum(!0);
        var p = this._core.settings;
        var q = p.center || p.autoWidth || p.dotsData ? 1 : p.dotsEach || p.items;
        if ("page" !== p.slideBy && (p.slideBy = Math.min(p.slideBy, p.items)), p.dots || "page" == p.slideBy)
            for (this._pages = [], p = c, b = a = 0; f > p; p++) {
                if (a >= q || 0 === a) {
                    if (this._pages.push({
                            start: Math.min(g, p - c),
                            end: p - c + q - 1
                        }), Math.min(g, p - c) === g) break;
                    a = 0;
                    ++b
                }
                a += this._core.mergers(this._core.relative(p))
            }
    };
    f.prototype.draw = function() {
        var b, c = this._core.settings,
            h = this._core.items().length <= c.items,
            f = this._core.relative(this._core.current()),
            g = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || h);
        c.nav && (this._controls.$previous.toggleClass("disabled", !g && f <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !g && f >= this._core.maximum(!0)));
        this._controls.$absolute.toggleClass("disabled", !c.dots || h);
        c.dots && (b = this._pages.length - this._controls.$absolute.children().length,
            c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : 0 < b ? this._controls.$absolute.append(Array(b + 1).join(this._templates[0])) : 0 > b && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    };
    f.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    };
    f.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function(a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    };
    f.prototype.getPosition = function(b) {
        var c, d, f = this._core.settings;
        return "page" == f.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), this._core.items(), b ? c +=
            f.slideBy : c -= f.slideBy), c
    };
    f.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    };
    f.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    };
    f.prototype.to = function(b, c, h) {
        var d;
        h ? a.proxy(this._overrides.to, this._core)(b, c) : (d = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % d + d) % d].start, c))
    };
    a.fn.owlCarousel.Constructor.Plugins.Navigation = f
})(window.Zepto || window.jQuery, window, document);
(function(a, b, c, g) {
    var f = function(c) {
        this._core = c;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                    c && (this._hashes[c] = b.content)
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace &&
                    "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current()));
                    (c = a.map(this._hashes, function(a, b) {
                        return a === d ? b : null
                    }).join()) && b.location.hash.slice(1) !== c && (b.location.hash = c)
                }
            }, this)
        };
        this._core.options = a.extend({}, f.Defaults, this._core.options);
        this.$element.on(this._handlers);
        a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
            a = b.location.hash.substring(1);
            var c = this._core.$stage.children();
            a = this._hashes[a] && c.index(this._hashes[a]);
            a !== g && a !== this._core.current() &&
                this._core.to(this._core.relative(a), !1, !0)
        }, this))
    };
    f.Defaults = {
        URLhashListener: !1
    };
    f.prototype.destroy = function() {
        var c, e;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    };
    a.fn.owlCarousel.Constructor.Plugins.Hash = f
})(window.Zepto || window.jQuery, window, document);
(function(a, b, c, g) {
    function f(b, c) {
        var h = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + e.join(f + " ") + f).split(" "), function(a, b) {
            return d[b] !== g ? (h = c ? b : !0, !1) : void 0
        }), h
    }
    var d = a("<support>").get(0).style,
        e = ["Webkit", "Moz", "O", "ms"];
    b = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        transition: "transitionend"
    };
    c = {
        WebkitAnimation: "webkitAnimationEnd",
        MozAnimation: "animationend",
        OAnimation: "oAnimationEnd",
        animation: "animationend"
    };
    var h = {
        csstransforms: function() {
            return !!f("transform")
        },
        csstransforms3d: function() {
            return !!f("perspective")
        },
        csstransitions: function() {
            return !!f("transition")
        },
        cssanimations: function() {
            return !!f("animation")
        }
    };
    h.csstransitions() && (a.support.transition = new String(f("transition", !0)), a.support.transition.end = b[a.support.transition]);
    h.cssanimations() && (a.support.animation = new String(f("animation", !0)), a.support.animation.end = c[a.support.animation]);
    h.csstransforms() && (a.support.transform = new String(f("transform", !0)), a.support.transform3d = h.csstransforms3d())
})(window.Zepto || window.jQuery, window, document);
! function(a, b) {
    "function" == typeof define && define.amd ? define(function() {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b : a.echo = b(a)
}(this, function(a) {
    var b, c, g, f, d, e, h, l, n = {},
        p = function() {},
        q = function() {
            (h || !d) && (clearTimeout(d), d = setTimeout(function() {
                n.render();
                d = null
            }, e))
        };
    return n.init = function(d) {
        d = d || {};
        var m = d.offset || 0,
            v = d.offsetVertical || m,
            m = d.offsetHorizontal || m;
        b = parseInt(d.offsetTop || v, 10);
        c = parseInt(d.offsetBottom || v, 10);
        g = parseInt(d.offsetLeft || m, 10);
        f = parseInt(d.offsetRight ||
            m, 10);
        e = parseInt(d.throttle || 250, 10);
        h = !1 !== d.debounce;
        l = !!d.unload;
        p = d.callback || p;
        n.render();
        document.addEventListener ? (a.addEventListener("scroll", q, !1), a.addEventListener("load", q, !1)) : (a.attachEvent("onscroll", q), a.attachEvent("onload", q))
    }, n.render = function() {
        for (var d, e, h = document.querySelectorAll("img[data-echo], [data-echo-background]"), q = h.length, w = {
                l: 0 - g,
                t: 0 - b,
                b: (a.innerHeight || document.documentElement.clientHeight) + c,
                r: (a.innerWidth || document.documentElement.clientWidth) + f
            }, E = 0; q > E; E++) {
            e =
                h[E];
            var y = e;
            var H = w;
            null === y.offsetParent ? H = !1 : (y = y.getBoundingClientRect(), H = y.right >= H.l && y.bottom >= H.t && y.left <= H.r && y.top <= H.b);
            H ? (l && e.setAttribute("data-echo-placeholder", e.src), null !== e.getAttribute("data-echo-background") ? e.style.backgroundImage = "url(" + e.getAttribute("data-echo-background") + ")" : e.src = e.getAttribute("data-echo"), l || (e.removeAttribute("data-echo"), e.removeAttribute("data-echo-background")), p(e, "load")) : l && (d = e.getAttribute("data-echo-placeholder")) && (null !== e.getAttribute("data-echo-background") ?
                e.style.backgroundImage = "url(" + d + ")" : e.src = d, e.removeAttribute("data-echo-placeholder"), p(e, "unload"))
        }
        q || n.detach()
    }, n.detach = function() {
        document.removeEventListener ? a.removeEventListener("scroll", q) : a.detachEvent("onscroll", q);
        clearTimeout(d)
    }, n
});
(function() {
    var a = function(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        },
        b = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    var c = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c;
            for (c in b) {
                var d = b[c];
                null == a[c] && (a[c] = d)
            }
            return a
        }, a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }, a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1), null ==
                c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
        }, a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }, a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) :
                a[b] = c
        }, a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }, a.prototype.innerHeight = function() {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, a
    }();
    var g = this.WeakMap || this.MozWeakMap || (g = function() {
        function a() {
            this.keys = [];
            this.values = []
        }
        return a.prototype.get = function(a) {
                var b, c, d;
                var e = this.keys;
                var h = c = 0;
                for (d = e.length; d > c; h = ++c)
                    if (b = e[h], b === a) return this.values[h]
            },
            a.prototype.set = function(a, b) {
                var c, d, e;
                var h = this.keys;
                var f = d = 0;
                for (e = h.length; e > d; f = ++d)
                    if (c = h[f], c === a) return void(this.values[f] = b);
                return this.keys.push(a), this.values.push(b)
            }, a
    }());
    var f = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (f = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser.");
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0, a.prototype.observe = function() {}, a
    }());
    var d = this.getComputedStyle || function(a) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }, this
    };
    var e = /(\-([a-z]){1})/g;
    this.WOW = function() {
        function e(b) {
            null == b && (b = {});
            this.scrollCallback = a(this.scrollCallback, this);
            this.scrollHandler = a(this.scrollHandler, this);
            this.resetAnimation = a(this.resetAnimation,
                this);
            this.start = a(this.start, this);
            this.scrolled = !0;
            this.config = this.util().extend(b, this.defaults);
            this.animationNameCache = new g;
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null
            }, e.prototype.init = function() {
                var a;
                return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded",
                    this.start), this.finished = []
            }, e.prototype.start = function() {
                var a;
                if (this.stopped = !1, this.boxes = function() {
                        var a;
                        var b = this.element.querySelectorAll("." + this.config.boxClass);
                        var c = [];
                        var e = 0;
                        for (a = b.length; a > e; e++) d = b[e], c.push(d);
                        return c
                    }.call(this), this.all = function() {
                        var a;
                        var b = this.boxes;
                        var c = [];
                        var e = 0;
                        for (a = b.length; a > e; e++) d = b[e], c.push(d);
                        return c
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else {
                        var b = this.boxes;
                        var c = 0;
                        for (a = b.length; a > c; c++) {
                            var d = b[c];
                            this.applyStyle(d, !0)
                        }
                    }
                return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? (new f(function(a) {
                    return function(b) {
                        var c, d;
                        var e = [];
                        var h = 0;
                        for (c = b.length; c > h; h++) {
                            var f = b[h];
                            e.push(function() {
                                var a;
                                var b = f.addedNodes || [];
                                var c = [];
                                var e = 0;
                                for (a = b.length; a > e; e++) d = b[e], c.push(this.doSync(d));
                                return c
                            }.call(a))
                        }
                        return e
                    }
                }(this))).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, e.prototype.stop = function() {
                return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
            }, e.prototype.sync = function() {
                return f.notSupported ? this.doSync(this.element) : void 0
            }, e.prototype.doSync = function(a) {
                var c;
                if (null == a && (a = this.element), 1 === a.nodeType) {
                    a = a.parentNode || a;
                    var d = a.querySelectorAll("." + this.config.boxClass);
                    var e = [];
                    var h = 0;
                    for (c = d.length; c > h; h++) a = d[h], 0 > b.call(this.all, a) ? (this.boxes.push(a), this.all.push(a), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(a, !0), e.push(this.scrolled = !0)) : e.push(void 0);
                    return e
                }
            }, e.prototype.show = function(a) {
                return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend",
                    this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
            }, e.prototype.applyStyle = function(a, b) {
                var c, d, e;
                return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(h) {
                    return function() {
                        return h.customStyle(a, b, d, c, e)
                    }
                }(this))
            }, e.prototype.animate = function() {
                return "requestAnimationFrame" in window ? function(a) {
                        return window.requestAnimationFrame(a)
                    } :
                    function(a) {
                        return a()
                    }
            }(), e.prototype.resetStyle = function() {
                var a;
                var b = this.boxes;
                var c = [];
                var d = 0;
                for (a = b.length; a > d; d++) {
                    var e = b[d];
                    c.push(e.style.visibility = "visible")
                }
                return c
            }, e.prototype.resetAnimation = function(a) {
                var b;
                return 0 <= a.type.toLowerCase().indexOf("animationend") ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
            }, e.prototype.customStyle = function(a, b, c, d, e) {
                return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible",
                    c && this.vendorSet(a.style, {
                        animationDuration: c
                    }), d && this.vendorSet(a.style, {
                        animationDelay: d
                    }), e && this.vendorSet(a.style, {
                        animationIterationCount: e
                    }), this.vendorSet(a.style, {
                        animationName: b ? "none" : this.cachedAnimationName(a)
                    }), a
            }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
                var c, d;
                var e = [];
                for (c in b) {
                    var h = b[c];
                    a["" + c] = h;
                    e.push(function() {
                        var b;
                        var e = this.vendors;
                        var f = [];
                        var g = 0;
                        for (b = e.length; b > g; g++) d = e[g], f.push(a["" + d + c.charAt(0).toUpperCase() + c.substr(1)] = h);
                        return f
                    }.call(this))
                }
                return e
            },
            e.prototype.vendorCSS = function(a, b) {
                var c;
                var e = d(a);
                var h = e.getPropertyCSSValue(b);
                var f = this.vendors;
                var g = 0;
                for (c = f.length; c > g; g++) {
                    var l = f[g];
                    h = h || e.getPropertyCSSValue("-" + l + "-" + b)
                }
                return h
            }, e.prototype.animationName = function(a) {
                try {
                    var b = this.vendorCSS(a, "animation-name").cssText
                } catch (p) {
                    b = d(a).getPropertyValue("animation-name")
                }
                return "none" === b ? "" : b
            }, e.prototype.cacheAnimationName = function(a) {
                return this.animationNameCache.set(a, this.animationName(a))
            }, e.prototype.cachedAnimationName = function(a) {
                return this.animationNameCache.get(a)
            },
            e.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, e.prototype.scrollCallback = function() {
                var a;
                if (!(a = !this.scrolled)) {
                    this.scrolled = !1;
                    var b;
                    var c = this.boxes;
                    var d = [];
                    var e = 0;
                    for (b = c.length; b > e; e++)(a = c[e]) && (this.isVisible(a) ? this.show(a) : d.push(a));
                    a = (this.boxes = d, this.boxes.length || this.config.live)
                }
                return a ? void 0 : this.stop()
            }, e.prototype.offsetTop = function(a) {
                for (var b; void 0 === a.offsetTop;) a = a.parentNode;
                for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
                return b
            }, e.prototype.isVisible =
            function(a) {
                var b, c, d, e, h;
                return c = a.getAttribute("data-wow-offset") || this.config.offset, h = window.pageYOffset, e = h + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= h
            }, e.prototype.util = function() {
                return null != this._util ? this._util : this._util = new c
            }, e.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, e
    }()
}).call(this);
(function(a) {
    a.easing.jswing = a.easing.swing;
    a.extend(a.easing, {
        def: "easeOutQuad",
        swing: function(b, c, g, f, d) {
            return a.easing[a.easing.def](b, c, g, f, d)
        },
        easeInQuad: function(a, c, g, f, d) {
            return f * (c /= d) * c + g
        },
        easeOutQuad: function(a, c, g, f, d) {
            return -f * (c /= d) * (c - 2) + g
        },
        easeInOutQuad: function(a, c, g, f, d) {
            return 1 > (c /= d / 2) ? f / 2 * c * c + g : -f / 2 * (--c * (c - 2) - 1) + g
        },
        easeInCubic: function(a, c, g, f, d) {
            return f * (c /= d) * c * c + g
        },
        easeOutCubic: function(a, c, g, f, d) {
            return f * ((c = c / d - 1) * c * c + 1) + g
        },
        easeInOutCubic: function(a, c, g, f, d) {
            return 1 >
                (c /= d / 2) ? f / 2 * c * c * c + g : f / 2 * ((c -= 2) * c * c + 2) + g
        },
        easeInQuart: function(a, c, g, f, d) {
            return f * (c /= d) * c * c * c + g
        },
        easeOutQuart: function(a, c, g, f, d) {
            return -f * ((c = c / d - 1) * c * c * c - 1) + g
        },
        easeInOutQuart: function(a, c, g, f, d) {
            return 1 > (c /= d / 2) ? f / 2 * c * c * c * c + g : -f / 2 * ((c -= 2) * c * c * c - 2) + g
        },
        easeInQuint: function(a, c, g, f, d) {
            return f * (c /= d) * c * c * c * c + g
        },
        easeOutQuint: function(a, c, g, f, d) {
            return f * ((c = c / d - 1) * c * c * c * c + 1) + g
        },
        easeInOutQuint: function(a, c, g, f, d) {
            return 1 > (c /= d / 2) ? f / 2 * c * c * c * c * c + g : f / 2 * ((c -= 2) * c * c * c * c + 2) + g
        },
        easeInSine: function(a, c,
            g, f, d) {
            return -f * Math.cos(c / d * (Math.PI / 2)) + f + g
        },
        easeOutSine: function(a, c, g, f, d) {
            return f * Math.sin(c / d * (Math.PI / 2)) + g
        },
        easeInOutSine: function(a, c, g, f, d) {
            return -f / 2 * (Math.cos(Math.PI * c / d) - 1) + g
        },
        easeInExpo: function(a, c, g, f, d) {
            return 0 == c ? g : f * Math.pow(2, 10 * (c / d - 1)) + g
        },
        easeOutExpo: function(a, c, g, f, d) {
            return c == d ? g + f : f * (-Math.pow(2, -10 * c / d) + 1) + g
        },
        easeInOutExpo: function(a, c, g, f, d) {
            return 0 == c ? g : c == d ? g + f : 1 > (c /= d / 2) ? f / 2 * Math.pow(2, 10 * (c - 1)) + g : f / 2 * (-Math.pow(2, -10 * --c) + 2) + g
        },
        easeInCirc: function(a, c, g, f, d) {
            return -f *
                (Math.sqrt(1 - (c /= d) * c) - 1) + g
        },
        easeOutCirc: function(a, c, g, f, d) {
            return f * Math.sqrt(1 - (c = c / d - 1) * c) + g
        },
        easeInOutCirc: function(a, c, g, f, d) {
            return 1 > (c /= d / 2) ? -f / 2 * (Math.sqrt(1 - c * c) - 1) + g : f / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + g
        },
        easeInElastic: function(a, c, g, f, d) {
            a = 1.70158;
            var b = 0,
                h = f;
            if (0 == c) return g;
            if (1 == (c /= d)) return g + f;
            b || (b = .3 * d);
            h < Math.abs(f) ? (h = f, a = b / 4) : a = b / (2 * Math.PI) * Math.asin(f / h);
            return -(h * Math.pow(2, 10 * --c) * Math.sin(2 * (c * d - a) * Math.PI / b)) + g
        },
        easeOutElastic: function(a, c, g, f, d) {
            a = 1.70158;
            var b = 0,
                h = f;
            if (0 ==
                c) return g;
            if (1 == (c /= d)) return g + f;
            b || (b = .3 * d);
            h < Math.abs(f) ? (h = f, a = b / 4) : a = b / (2 * Math.PI) * Math.asin(f / h);
            return h * Math.pow(2, -10 * c) * Math.sin(2 * (c * d - a) * Math.PI / b) + f + g
        },
        easeInOutElastic: function(a, c, g, f, d) {
            a = 1.70158;
            var b = 0,
                h = f;
            if (0 == c) return g;
            if (2 == (c /= d / 2)) return g + f;
            b || (b = .3 * d * 1.5);
            h < Math.abs(f) ? (h = f, a = b / 4) : a = b / (2 * Math.PI) * Math.asin(f / h);
            return 1 > c ? -.5 * h * Math.pow(2, 10 * --c) * Math.sin(2 * (c * d - a) * Math.PI / b) + g : h * Math.pow(2, -10 * --c) * Math.sin(2 * (c * d - a) * Math.PI / b) * .5 + f + g
        },
        easeInBack: function(a, c, g, f, d, e) {
            void 0 ==
                e && (e = 1.70158);
            return f * (c /= d) * c * ((e + 1) * c - e) + g
        },
        easeOutBack: function(a, c, g, f, d, e) {
            void 0 == e && (e = 1.70158);
            return f * ((c = c / d - 1) * c * ((e + 1) * c + e) + 1) + g
        },
        easeInOutBack: function(a, c, g, f, d, e) {
            void 0 == e && (e = 1.70158);
            return 1 > (c /= d / 2) ? f / 2 * c * c * (((e *= 1.525) + 1) * c - e) + g : f / 2 * ((c -= 2) * c * (((e *= 1.525) + 1) * c + e) + 2) + g
        },
        easeInBounce: function(b, c, g, f, d) {
            return f - a.easing.easeOutBounce(b, d - c, 0, f, d) + g
        },
        easeOutBounce: function(a, c, g, f, d) {
            return (c /= d) < 1 / 2.75 ? 7.5625 * f * c * c + g : c < 2 / 2.75 ? f * (7.5625 * (c -= 1.5 / 2.75) * c + .75) + g : c < 2.5 / 2.75 ? f * (7.5625 *
                (c -= 2.25 / 2.75) * c + .9375) + g : f * (7.5625 * (c -= 2.625 / 2.75) * c + .984375) + g
        },
        easeInOutBounce: function(b, c, g, f, d) {
            return c < d / 2 ? .5 * a.easing.easeInBounce(b, 2 * c, 0, f, d) + g : .5 * a.easing.easeOutBounce(b, 2 * c - d, 0, f, d) + .5 * f + g
        }
    })
})(jQuery);
! function() {
    function a(g) {
        if (!g) throw Error("No options passed to Waypoint constructor");
        if (!g.element) throw Error("No element option passed to Waypoint constructor");
        if (!g.handler) throw Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + b;
        this.options = a.Adapter.extend({}, a.defaults, g);
        this.element = this.options.element;
        this.adapter = new a.Adapter(this.element);
        this.callback = g.handler;
        this.axis = this.options.horizontal ? "horizontal" : "vertical";
        this.enabled = this.options.enabled;
        this.triggerPoint = null;
        this.group = a.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        });
        this.context = a.Context.findOrCreateByElement(this.options.context);
        a.offsetAliases[this.options.offset] && (this.options.offset = a.offsetAliases[this.options.offset]);
        this.group.add(this);
        this.context.add(this);
        c[this.key] = this;
        b += 1
    }
    var b = 0,
        c = {};
    a.prototype.queueTrigger = function(a) {
        this.group.queueTrigger(this, a)
    };
    a.prototype.trigger = function(a) {
        this.enabled && this.callback && this.callback.apply(this, a)
    };
    a.prototype.destroy =
        function() {
            this.context.remove(this);
            this.group.remove(this);
            delete c[this.key]
        };
    a.prototype.disable = function() {
        return this.enabled = !1, this
    };
    a.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    };
    a.prototype.next = function() {
        return this.group.next(this)
    };
    a.prototype.previous = function() {
        return this.group.previous(this)
    };
    a.invokeAll = function(a) {
        var b = [];
        for (d in c) b.push(c[d]);
        var d = 0;
        for (var e = b.length; e > d; d++) b[d][a]()
    };
    a.destroyAll = function() {
        a.invokeAll("destroy")
    };
    a.disableAll =
        function() {
            a.invokeAll("disable")
        };
    a.enableAll = function() {
        a.invokeAll("enable")
    };
    a.refreshAll = function() {
        a.Context.refreshAll()
    };
    a.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    };
    a.viewportWidth = function() {
        return document.documentElement.clientWidth
    };
    a.adapters = [];
    a.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    };
    a.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    };
    window.Waypoint = a
}();
(function() {
    function a(a) {
        window.setTimeout(a, 1E3 / 60)
    }

    function b(a) {
        this.element = a;
        this.Adapter = f.Adapter;
        this.adapter = new this.Adapter(a);
        this.key = "waypoint-context-" + c;
        this.didResize = this.didScroll = !1;
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        };
        this.waypoints = {
            vertical: {},
            horizontal: {}
        };
        a.waypointContextKey = this.key;
        g[a.waypointContextKey] = this;
        c += 1;
        this.createThrottledScrollHandler();
        this.createThrottledResizeHandler()
    }
    var c = 0,
        g = {},
        f = window.Waypoint,
        d = window.onload;
    b.prototype.add = function(a) {
        this.waypoints[a.options.horizontal ? "horizontal" : "vertical"][a.key] = a;
        this.refresh()
    };
    b.prototype.checkEmpty = function() {
        var a = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            b = this.Adapter.isEmptyObject(this.waypoints.vertical);
        a && b && (this.adapter.off(".waypoints"), delete g[this.key])
    };
    b.prototype.createThrottledResizeHandler = function() {
        function a() {
            b.handleResize();
            b.didResize = !1
        }
        var b = this;
        this.adapter.on("resize.waypoints", function() {
            b.didResize || (b.didResize = !0, f.requestAnimationFrame(a))
        })
    };
    b.prototype.createThrottledScrollHandler = function() {
        function a() {
            b.handleScroll();
            b.didScroll = !1
        }
        var b = this;
        this.adapter.on("scroll.waypoints", function() {
            b.didScroll && !f.isTouch || (b.didScroll = !0, f.requestAnimationFrame(a))
        })
    };
    b.prototype.handleResize = function() {
        f.Context.refreshAll()
    };
    b.prototype.handleScroll = function() {
        var a = {},
            b = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            },
            c;
        for (c in b) {
            var d = b[c],
                f = d.newScroll > d.oldScroll ? d.forward : d.backward,
                g;
            for (g in this.waypoints[c]) {
                var m = this.waypoints[c][g],
                    u = d.oldScroll < m.triggerPoint,
                    v = d.newScroll >= m.triggerPoint,
                    x = !u && !v;
                (u && v || x) && (m.queueTrigger(f), a[m.group.id] = m.group)
            }
        }
        for (var w in a) a[w].flushTriggers();
        this.oldScroll = {
            x: b.horizontal.newScroll,
            y: b.vertical.newScroll
        }
    };
    b.prototype.innerHeight = function() {
        return this.element == this.element.window ? f.viewportHeight() :
            this.adapter.innerHeight()
    };
    b.prototype.remove = function(a) {
        delete this.waypoints[a.axis][a.key];
        this.checkEmpty()
    };
    b.prototype.innerWidth = function() {
        return this.element == this.element.window ? f.viewportWidth() : this.adapter.innerWidth()
    };
    b.prototype.destroy = function() {
        var a = [];
        for (c in this.waypoints)
            for (var b in this.waypoints[c]) a.push(this.waypoints[c][b]);
        var c = 0;
        for (b = a.length; b > c; c++) a[c].destroy()
    };
    b.prototype.refresh = function() {
        var a, b = (a = this.element == this.element.window) ? void 0 : this.adapter.offset(),
            c = {};
        this.handleScroll();
        a = {
            horizontal: {
                contextOffset: a ? 0 : b.left,
                contextScroll: a ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: a ? 0 : b.top,
                contextScroll: a ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var d in a) {
            var b = a[d],
                g;
            for (g in this.waypoints[d]) {
                var q = this.waypoints[d][g];
                var m = q.options.offset;
                var u =
                    q.triggerPoint;
                var v = 0;
                var x = null == u;
                q.element !== q.element.window && (v = q.adapter.offset()[b.offsetProp]);
                "function" == typeof m ? m = m.apply(q) : "string" == typeof m && (m = parseFloat(m), -1 < q.options.offset.indexOf("%") && (m = Math.ceil(b.contextDimension * m / 100)));
                q.triggerPoint = v + (b.contextScroll - b.contextOffset) - m;
                u = u < b.oldScroll;
                v = q.triggerPoint >= b.oldScroll;
                m = u && v;
                u = !u && !v;
                !x && m ? (q.queueTrigger(b.backward), c[q.group.id] = q.group) : !x && u ? (q.queueTrigger(b.forward), c[q.group.id] = q.group) : x && b.oldScroll >= q.triggerPoint &&
                    (q.queueTrigger(b.forward), c[q.group.id] = q.group)
            }
        }
        return f.requestAnimationFrame(function() {
            for (var a in c) c[a].flushTriggers()
        }), this
    };
    b.findOrCreateByElement = function(a) {
        return b.findByElement(a) || new b(a)
    };
    b.refreshAll = function() {
        for (var a in g) g[a].refresh()
    };
    b.findByElement = function(a) {
        return g[a.waypointContextKey]
    };
    window.onload = function() {
        d && d();
        b.refreshAll()
    };
    f.requestAnimationFrame = function(b) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
            a).call(window, b)
    };
    f.Context = b
})();
(function() {
    function a(a, b) {
        return a.triggerPoint - b.triggerPoint
    }

    function b(a, b) {
        return b.triggerPoint - a.triggerPoint
    }

    function c(a) {
        this.name = a.name;
        this.axis = a.axis;
        this.id = this.name + "-" + this.axis;
        this.waypoints = [];
        this.clearTriggerQueues();
        g[this.axis][this.name] = this
    }
    var g = {
            vertical: {},
            horizontal: {}
        },
        f = window.Waypoint;
    c.prototype.add = function(a) {
        this.waypoints.push(a)
    };
    c.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    };
    c.prototype.flushTriggers = function() {
        for (var c in this.triggerQueues) {
            var e =
                this.triggerQueues[c];
            e.sort("up" === c || "left" === c ? b : a);
            for (var h = 0, f = e.length; f > h; h += 1) {
                var g = e[h];
                (g.options.continuous || h === e.length - 1) && g.trigger([c])
            }
        }
        this.clearTriggerQueues()
    };
    c.prototype.next = function(b) {
        this.waypoints.sort(a);
        b = f.Adapter.inArray(b, this.waypoints);
        return b === this.waypoints.length - 1 ? null : this.waypoints[b + 1]
    };
    c.prototype.previous = function(b) {
        this.waypoints.sort(a);
        return (b = f.Adapter.inArray(b, this.waypoints)) ? this.waypoints[b - 1] : null
    };
    c.prototype.queueTrigger = function(a, b) {
        this.triggerQueues[b].push(a)
    };
    c.prototype.remove = function(a) {
        a = f.Adapter.inArray(a, this.waypoints); - 1 < a && this.waypoints.splice(a, 1)
    };
    c.prototype.first = function() {
        return this.waypoints[0]
    };
    c.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    };
    c.findOrCreate = function(a) {
        return g[a.axis][a.name] || new c(a)
    };
    f.Group = c
})();
(function() {
    function a(a) {
        this.$element = b(a)
    }
    var b = window.jQuery,
        c = window.Waypoint;
    b.each("innerHeight innerWidth off offset on outerHeight outerWidth scrollLeft scrollTop".split(" "), function(b, c) {
        a.prototype[c] = function() {
            var a = Array.prototype.slice.call(arguments);
            return this.$element[c].apply(this.$element, a)
        }
    });
    b.each(["extend", "inArray", "isEmptyObject"], function(c, f) {
        a[f] = b[f]
    });
    c.adapters.push({
        name: "jquery",
        Adapter: a
    });
    c.Adapter = a
})();
(function() {
    function a(a) {
        return function(c, f) {
            var d = [],
                e = c;
            return a.isFunction(c) && (e = a.extend({}, f), e.handler = c), this.each(function() {
                var c = a.extend({}, e, {
                    element: this
                });
                "string" == typeof c.context && (c.context = a(this).closest(c.context)[0]);
                d.push(new b(c))
            }), d
        }
    }
    var b = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = a(window.jQuery));
    window.Zepto && (window.Zepto.fn.waypoint = a(window.Zepto))
})();
(function(a, b) {
    a.fn.resizeselect = function(b) {
        return this.each(function() {
            a(this).change(function() {
                var b = a(this),
                    c = b.find("option:selected").text(),
                    c = a("<span>").html(c);
                c.appendTo("body");
                var d = c.width();
                c.remove();
                b.width(d + 16)
            }).change()
        })
    };
    a.fn.arrangeObjects = function(b, g) {
        this.each(function() {
            a(this).parent(b).length && a(this).unwrap()
        });
        this.parent().each(function() {
            for (var b = a(this).children(), c = !0, e = [], h = 0; h < g; h++) e.push(a("<ul></ul>")), e[h].appendTo(a(this));
            b = b.sort(function(b, c) {
                return a(b).height() >
                    a(c).height() ? 0 : 1
            });
            h = 0;
            b.each(function() {
                if (0 > h || h === g)(c = !c) ? h++ : h--;
                e[h].append(a(this));
                c ? h++ : h--
            })
        })
    };
    a("select.resizeselect").resizeselect()
})(jQuery, window);
(function(a) {
    function b() {
        a(".product-outer").each(function() {
            var b = a(this);
            0 != b.height() && b.height(b.height())
        })
    }
    a(document).ready(function() {
        (new WOW).init()
    });
    a(document).ready(function() {
        function b() {
            a("#owl-main .active .caption .fadeIn-1").stop().delay(500).animate({
                opacity: 1
            }, {
                duration: 800,
                easing: "easeOutCubic"
            });
            a("#owl-main .active .caption .fadeIn-2").stop().delay(700).animate({
                opacity: 1
            }, {
                duration: 800,
                easing: "easeOutCubic"
            });
            a("#owl-main .active .caption .fadeIn-3").stop().delay(1E3).animate({
                opacity: 1
            }, {
                duration: 800,
                easing: "easeOutCubic"
            });
            a("#owl-main .active .caption .fadeIn-4").stop().delay(1E3).animate({
                opacity: 1
            }, {
                duration: 800,
                easing: "easeOutCubic"
            })
        }

        function g() {
            a("#owl-main .active .caption .fadeInDown-1").stop().delay(500).animate({
                opacity: 1,
                top: "0"
            }, {
                duration: 800,
                easing: "easeOutCubic"
            });
            a("#owl-main .active .caption .fadeInDown-2").stop().delay(700).animate({
                opacity: 1,
                top: "0"
            }, {
                duration: 800,
                easing: "easeOutCubic"
            });
            a("#owl-main .active .caption .fadeInDown-3").stop().delay(1E3).animate({
                opacity: 1,
                top: "0"
            }, {
                duration: 800,
                easing: "easeOutCubic"
            });
            a("#owl-main .active .caption .fadeInDown-4").stop().delay(1E3).animate({
                opacity: 1,
                top: "0"
            }, {
                duration: 800,
                easing: "easeOutCubic"
            })
        }

        function f() {
            a("#owl-main .active .caption .fadeInUp-1").stop().delay(500).animate({
                opacity: 1,
                top: "0"
            }, {
                duration: 800,
                easing: "easeOutCubic"
            });
            a("#owl-main .active .caption .fadeInUp-2").stop().delay(700).animate({
                opacity: 1,
                top: "0"
            }, {
                duration: 800,
                easing: "easeOutCubic"
            });
            a("#owl-main .active .caption .fadeInUp-3").stop().delay(1E3).animate({
                opacity: 1,
                top: "0"
            }, {
                duration: 800,
                easing: "easeOutCubic"
            });
            a("#owl-main .active .caption .fadeInUp-4").stop().delay(1E3).animate({
                opacity: 1,
                top: "0"
            }, {
                duration: 800,
                easing: "easeOutCubic"
            })
        }

        function d() {
            a("#owl-main .active .caption .fadeInLeft-1").stop().delay(500).animate({
                opacity: 1,
                left: "0"
            }, {
                duration: 800,
                easing: "easeOutCubic"
            });
            a("#owl-main .active .caption .fadeInLeft-2").stop().delay(700).animate({
                opacity: 1,
                left: "0"
            }, {
                duration: 800,
                easing: "easeOutCubic"
            });
            a("#owl-main .active .caption .fadeInLeft-3").stop().delay(1E3).animate({
                opacity: 1,
                left: "0"
            }, {
                duration: 800,
                easing: "easeOutCubic"
            });
            a("#owl-main .active .caption .fadeInLeft-4").stop().delay(1E3).animate({
                opacity: 1,
                left: "0"
            }, {
                duration: 800,
                easing: "easeOutCubic"
            })
        }

        function e() {
            a("#owl-main .active .caption .fadeInRight-1").stop().delay(500).animate({
                opacity: 1,
                left: "0"
            }, {
                duration: 800,
                easing: "easeOutCubic"
            });
            a("#owl-main .active .caption .fadeInRight-2").stop().delay(700).animate({
                opacity: 1,
                left: "0"
            }, {
                duration: 800,
                easing: "easeOutCubic"
            });
            a("#owl-main .active .caption .fadeInRight-3").stop().delay(1E3).animate({
                opacity: 1,
                left: "0"
            }, {
                duration: 800,
                easing: "easeOutCubic"
            });
            a("#owl-main .active .caption .fadeInRight-4").stop().delay(1E3).animate({
                opacity: 1,
                left: "0"
            }, {
                duration: 800,
                easing: "easeOutCubic"
            })
        }
        var h = !0;
        a("#owl-main").owlCarousel({
            animateOut: "fadeOut",
            autoplay: !0,
            autoplayTimeout: 5E3,
            autoplayHoverPause: !1,
            stopOnHover: !0,
            loop: !0,
            navRewind: !0,
            items: 1,
            dots: !0,
            nav: !1,
            lazyLoad: !0,
            stagePadding: 0,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1199: {
                    items: 1
                },
                onTranslate: function() {
                    echo.render()
                }
            },
            onInitialize: function() {
                b();
                g();
                f();
                d();
                e()
            },
            onInitialized: function() {
                b();
                g();
                f();
                d();
                e()
            },
            onResize: function() {
                b();
                g();
                f();
                d();
                e()
            },
            onResized: function() {
                b();
                g();
                f();
                d();
                e()
            },
            onRefresh: function() {
                b();
                g();
                f();
                d();
                e()
            },
            onRefreshed: function() {
                b();
                g();
                f();
                d();
                e()
            },
            onUpdate: function() {
                b();
                g();
                f();
                d();
                e()
            },
            onUpdated: function() {
                b();
                g();
                f();
                d();
                e()
            },
            onDrag: function() {
                h = !0
            },
            onTranslate: function() {
                b();
                g();
                f();
                d();
                e()
            },
            onTranslated: function() {
                b();
                g();
                f();
                d();
                e()
            },
            onTo: function() {
                b();
                g();
                f();
                d();
                e()
            },
            onChanged: function() {
                h ? a("#owl-main .caption .fadeIn-1, #owl-main .caption .fadeIn-2, #owl-main .caption .fadeIn-3,#owl-main .caption .fadeIn-4").css({
                        opacity: 0
                    }) :
                    a("#owl-main .caption .fadeIn-1, #owl-main .caption .fadeIn-2, #owl-main .caption .fadeIn-3,#owl-main .caption .fadeIn-4").stop().delay(800).animate({
                        opacity: 0
                    }, {
                        duration: 400,
                        easing: "easeInCubic"
                    });
                h ? a("#owl-main .caption .fadeInDown-1, #owl-main .caption .fadeInDown-2, #owl-main .caption .fadeInDown-3,#owl-main .caption .fadeInDown-4").css({
                    opacity: 0,
                    top: "-15px"
                }) : a("#owl-main .caption .fadeInDown-1, #owl-main .caption .fadeInDown-2, #owl-main .caption .fadeInDown-3,#owl-main .caption .fadeInDown-4").stop().delay(800).animate({
                    opacity: 0,
                    top: "-15px"
                }, {
                    duration: 400,
                    easing: "easeInCubic"
                });
                h ? a("#owl-main .caption .fadeInUp-1, #owl-main .caption .fadeInUp-2, #owl-main .caption .fadeInUp-3,#owl-main .caption .fadeInUp-4").css({
                    opacity: 0,
                    top: "15px"
                }) : a("#owl-main .caption .fadeInUp-1, #owl-main .caption .fadeInUp-2, #owl-main .caption .fadeInUp-3,#owl-main .caption .fadeInUp-4").stop().delay(800).animate({
                    opacity: 0,
                    top: "15px"
                }, {
                    duration: 400,
                    easing: "easeInCubic"
                });
                h ? a("#owl-main .caption .fadeInLeft-1, #owl-main .caption .fadeInLeft-2, #owl-main .caption .fadeInLeft-3,#owl-main .caption .fadeInLeft-4").css({
                    opacity: 0,
                    left: "15px"
                }) : a("#owl-main .caption .fadeInLeft-1, #owl-main .caption .fadeInLeft-2, #owl-main .caption .fadeInLeft-3, #owl-main .caption .fadeInLeft-4").stop().delay(800).animate({
                    opacity: 0,
                    left: "15px"
                }, {
                    duration: 400,
                    easing: "easeInCubic"
                });
                h ? a("#owl-main .caption .fadeInRight-1, #owl-main .caption .fadeInRight-2, #owl-main .caption .fadeInRight-3,#owl-main .caption .fadeInRight-4").css({
                    opacity: 0,
                    left: "-15px"
                }) : a("#owl-main .caption .fadeInRight-1, #owl-main .caption .fadeInRight-2, #owl-main .caption .fadeInRight-3,#owl-main .caption .fadeInRight-4").stop().delay(800).animate({
                    opacity: 0,
                    left: "-15px"
                }, {
                    duration: 400,
                    easing: "easeInCubic"
                });
                h = !1
            }
        });
        var l = a("#recently-added-products-carousel .owl-carousel");
        l.on("initialized.owl.carousel translated.owl.carousel", function() {
            a(this).find(".owl-item.last-active").each(function() {
                a(this).removeClass("last-active")
            });
            a(this).find(".owl-item.active").last().addClass("last-active")
        });
        l.owlCarousel({
            items: "6",
            nav: !0,
            slideSpeed: 300,
            dots: !0,
            rtl: !1,
            paginationSpeed: 400,
            navText: ["", ""],
            margin: 0,
            touchDrag: !0,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 6
                },
                onTranslate: function() {
                    echo.render()
                }
            }
        });
        l = a("#recommended-product .owl-carousel");
        l.on("initialized.owl.carousel translated.owl.carousel", function() {
            a(this).find(".owl-item.last-active").each(function() {
                a(this).removeClass("last-active")
            });
            a(this).find(".owl-item.active").last().addClass("last-active")
        });
        l.owlCarousel({
            items: "4",
            nav: !1,
            slideSpeed: 300,
            dots: "true",
            rtl: !1,
            paginationSpeed: 400,
            navText: ["", ""],
            margin: 0,
            touchDrag: !1,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
        l = a(".home-v3-owl-carousel-tabs .owl-carousel");
        l.on("initialized.owl.carousel translated.owl.carousel", function() {
            a(this).find(".owl-item.last-active").each(function() {
                a(this).removeClass("last-active")
            });
            a(this).find(".owl-item.active").last().addClass("last-active")
        });
        l.owlCarousel({
            items: 4,
            nav: !1,
            slideSpeed: 300,
            dots: !0,
            rtl: !1,
            paginationSpeed: 400,
            navText: ["", ""],
            margin: 0,
            touchDrag: !0,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
        l = a(".home-v2-owl-carousel-tabs .owl-carousel");
        l.on("initialized.owl.carousel translated.owl.carousel", function() {
            a(this).find(".owl-item.last-active").each(function() {
                a(this).removeClass("last-active")
            });
            a(this).find(".owl-item.active").last().addClass("last-active")
        });
        l.owlCarousel({
            items: 3,
            nav: !1,
            slideSpeed: 300,
            dots: !0,
            rtl: !1,
            paginationSpeed: 400,
            navText: ["", ""],
            margin: 0,
            touchDrag: !0,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
        l = a("#products-carousel-with-umage .owl-carousel");
        l.on("initialized.owl.carousel translated.owl.carousel", function() {
            a(this).find(".owl-item.last-active").each(function() {
                a(this).removeClass("last-active")
            });
            a(this).find(".owl-item.active").last().addClass("last-active")
        });
        l.owlCarousel({
            items: 2,
            nav: !1,
            slideSpeed: 300,
            dots: !0,
            rtl: !1,
            paginationSpeed: 400,
            navText: ["", ""],
            margin: 30,
            touchDrag: !0,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        });
        l = a("#homev3-products-cards-carousel .owl-carousel");
        l.on("initialized.owl.carousel translated.owl.carousel",
            function() {
                a(this).find(".owl-item.last-active").each(function() {
                    a(this).removeClass("last-active")
                });
                a(this).find(".owl-item.active").last().addClass("last-active")
            });
        l.owlCarousel({
            items: 1,
            nav: !1,
            slideSpeed: 300,
            dots: !0,
            rtl: !1,
            paginationSpeed: 400,
            navText: ["", ""],
            margin: 0,
            touchDrag: !0
        });
        l = a("#product-category-carousel .owl-carousel");
        l.on("initialized.owl.carousel translated.owl.carousel", function() {
            a(this).find(".owl-item.last-active").each(function() {
                a(this).removeClass("last-active")
            });
            a(this).find(".owl-item.active").last().addClass("last-active")
        });
        l.owlCarousel({
            items: 6,
            nav: !1,
            slideSpeed: 300,
            dots: !0,
            rtl: !1,
            paginationSpeed: 400,
            navText: ["", ""],
            margin: 0,
            touchDrag: !0,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 6
                }
            }
        });
        a(".home-carousel-tabs").owlCarousel({
            items: 4,
            nav: !1,
            slideSpeed: 300,
            dots: !0,
            rtl: !1,
            paginationSpeed: 400,
            navText: ["", ""],
            margin: 0,
            touchDrag: !0
        });
        a("#owl-brands").owlCarousel({
            items: 5,
            navRewind: !0,
            autoplayHoverPause: !0,
            nav: !0,
            stagePadding: 1,
            dots: !1,
            rtl: !1,
            navText: ['<i class="fa fa-chevron-left"></i>',
                '<i class="fa fa-chevron-right"></i>'
            ],
            touchDrag: !1,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        });
        a(".home-v2-categories-products").owlCarousel({
            items: 4,
            nav: !1,
            slideSpeed: 300,
            dots: !0,
            rtl: !1,
            paginationSpeed: 400,
            navText: ["", ""],
            margin: 0,
            touchDrag: !0,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
        a(".recently-added-products").owlCarousel({
            items: 1,
            nav: !1,
            slideSpeed: 300,
            dots: !0,
            rtl: !1,
            paginationSpeed: 400,
            navText: ["", ""],
            margin: 0,
            touchDrag: !0,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 1
                }
            }
        });
        a("#owl-carousel-media").owlCarousel({
            items: 1,
            nav: !1,
            slideSpeed: 300,
            dots: !0,
            paginationSpeed: 400,
            navText: ["", ""],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1E3: {
                    items: 1
                }
            }
        });
        a(".products-carousel-widget").owlCarousel({
            items: 1,
            nav: !0,
            slideSpeed: 300,
            dots: !1,
            paginationSpeed: 400,
            navText: ["", ""],
            autoHeight: !1,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1E3: {
                    items: 1
                }
            }
        });
        a(".blog-carousel-widget").owlCarousel({
            items: 1,
            nav: !0,
            slideSpeed: 300,
            dots: !1,
            paginationSpeed: 400,
            navText: ["", ""],
            autoHeight: !1,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1E3: {
                    items: 1
                }
            }
        });
        a(".home-v1-product-cards-carousel").owlCarousel({
            items: 1,
            nav: !1,
            slideSpeed: 300,
            dots: !0,
            rtl: !1,
            paginationSpeed: 400,
            navText: ["", ""],
            margin: 0,
            touchDrag: !0
        });
        a(".onsale-product-carousel").owlCarousel({
            items: 1,
            nav: !1,
            slideSpeed: 300,
            dots: !0,
            rtl: !1,
            paginationSpeed: 400,
            navText: ["", ""],
            margin: 0,
            touchDrag: !0
        })
    });
    jQuery(document).ready(function(a) {
        function b() {
            var b = 0;
            a(".accessory-checkbox .product-check").each(function() {
                a(this).is(":checked") &&
                    b++
            });
            return b
        }

        function c() {
            var b = 0;
            a(".accessory-checkbox .product-check").each(function() {
                a(this).is(":checked") && (b += parseFloat(a(this).data("price")))
            });
            return b
        }

        function d() {
            var b = [];
            a(".accessory-checkbox .product-check").each(function() {
                a(this).is(":checked") && b.push(a(this).data("product-id"))
            });
            return b
        }

        function e() {
            var b = [];
            a(".accessory-checkbox .product-check").each(function() {
                a(this).is(":checked") || b.push(a(this).data("product-id"))
            });
            return b
        }

        function h() {
            var b = [];
            a(".accessory-checkbox .product-check").each(function() {
                a(this).is(":checked") &&
                    "variable" == a(this).data("product-type") && b.push(a(this).data("product-id"))
            });
            return b
        }

        function l(b) {
            var c = window.location.toString();
            (b = b.fragments) && a.each(b, function(b) {
                a(b).addClass("updating")
            });
            b && a.each(b, function(b, c) {
                a(b).replaceWith(c)
            });
            a(".shop_table.cart").load(c + " .shop_table.cart:eq(0) > *", function() {
                a(".shop_table.cart").stop(!0).css("opacity", "1").unblock();
                a(document.body).trigger("cart_page_refreshed")
            });
            a(".cart_totals").load(c + " .cart_totals:eq(0) > *", function() {
                a(".cart_totals").stop(!0).css("opacity",
                    "1").unblock()
            })
        }
        a(".accessory-checkbox .product-check").on("click", function() {
            a.ajax({
                cache: !1,
                url: "http://demo2.transvelo.in/electro/wp-admin/admin-ajax.php",
                success: function(d) {
                    d = a("span.total-price-html .amount").text().replace(/\.|\,/g, "");
                    var h = c().toFixed(2).replace(/./g, function(a, b, c) {
                        return b && "." !== a && 0 === (c.length - b) % 3 ? "," + a : a
                    });
                    total_price = d.replace(/\d+/g, h);
                    a("span.total-price-html .amount").html(total_price);
                    a("span.total-products").html(b());
                    var f = e();
                    a(".accessories ul.products > li").each(function() {
                        a(this).show();
                        for (var b = 0; b < f.length; b++) a(this).hasClass("post-" + f[b]) && a(this).hide()
                    })
                }
            })
        });
        a(".accessories-add-all-to-cart .add-all-to-cart").on("click", function() {
            var b = d();
            var c = h();
            if (0 === b.length) b = '<div class="woocommerce-error">No Products selected.</div>';
            else {
                var e;
                if (e = 0 < c.length) e = a(".single_add_to_cart_button").is(":disabled") ? !1 : !0, e = !1 === e;
                if (e) b = '<div class="woocommerce-error">Product Variation does not selected.</div>';
                else {
                    for (e = 0; e < b.length; e++)
                        if (a.inArray(b[e], c)) a.ajax({
                            type: "POST",
                            async: !1,
                            url: "http://demo2.transvelo.in/electro/wp-admin/admin-ajax.php",
                            data: {
                                action: "woocommerce_add_to_cart",
                                product_id: b[e]
                            },
                            success: function(a) {
                                l(a)
                            }
                        });
                        else {
                            var f = a(".variations_form .variations_button").find("input[name^=variation_id]").val(),
                                g = {};
                            a(".variations_form").find("select[name^=attribute]").length ? a(".variations_form").find("select[name^=attribute]").each(function() {
                                var b = a(this).attr("name"),
                                    c = a(this).val();
                                g[b] = c
                            }) : a(".variations_form").find(".select").each(function() {
                                var b = a(this).attr("data-attribute-name"),
                                    c = a(this).find(".selected").attr("data-name");
                                g[b] = c
                            });
                            a.ajax({
                                type: "POST",
                                async: !1,
                                url: "http://demo2.transvelo.in/electro/wp-admin/admin-ajax.php",
                                data: {
                                    action: "electro_variable_add_to_cart",
                                    product_id: b[e],
                                    variation_id: f,
                                    variation: g
                                },
                                success: function(a) {
                                    l(a)
                                }
                            })
                        }
                    b = '<div class="woocommerce-message">Products was successfully added to your cart. <a class="button wc-forward" href="http://demo2.transvelo.in/electro/cart/">View Cart</a></div>'
                }
            }
            a(".electro-wc-message").html(b)
        })
    });
    a(window).on("resize",
        function() {
            b()
        });
    a(".ec-tabs > li > a").on("click", function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var b = a(this.hash),
                b = b.length ? b : a("[name=" + this.hash.slice(1) + "]");
            b.length && a("html, body").animate({
                scrollTop: b.offset().top
            }, 1E3)
        }
    });
    a('a[data-toggle="tab"]').on("shown.bs.tab", function(a) {
        "#grid" != a.target && "#grid-extended" != a.target || b()
    });
    a(document).ready(function() {
        a(".add_to_wishlist").on("click", function() {
            a(this).closest(".images-and-summary").block();
            a(this).closest(".product-inner").block();
            a(this).closest(".product-list-view-inner").block();
            a(this).closest(".product-item-inner").block()
        });
        a(".yith-wcwl-wishlistaddedbrowse > .feedback").on("click", function() {
            var b = a(this).next().attr("href");
            window.location.href = b
        })
    });
    a(document).on("added_to_wishlist", function() {
        a(".images-and-summary").unblock();
        a(".product-inner").unblock();
        a(".product-list-view-inner").unblock();
        a(".product-item-inner").unblock()
    });
    echo.init({
        offset: 100,
        throttle: 250,
        unload: !1
    });
    a(document).on("click", ".add-to-compare-link:not(.added)", function(b) {
        b.preventDefault();
        var c = a(this);
        b = {
            _yitnonce_ajax: yith_woocompare.nonceadd,
            action: yith_woocompare.actionadd,
            id: c.data("product_id"),
            context: "frontend"
        };
        var f = a(".yith-woocompare-widget ul.products-list");
        "undefined" != typeof woocommerce_params && (c.closest(".images-and-summary").block(), c.closest(".product-inner").block(), c.closest(".product-list-view-inner").block(), c.closest(".product-item-inner").block(), f.block());
        a.ajax({
            type: "post",
            url: yith_woocompare.ajaxurl.toString().replace("%%endpoint%%", yith_woocompare.actionadd),
            data: b,
            dataType: "json",
            success: function(b) {
                "undefined" != typeof woocommerce_params && (a(".images-and-summary").unblock(), a(".product-inner").unblock(), a(".product-list-view-inner").unblock(), a(".product-item-inner").unblock(), f.unblock());
                c.addClass("added").attr("href", mc_options.compare_page_url).text(yith_woocompare.added_label);
                f.html(b.widget_table)
            }
        })
    });
    a("body").on("adding_to_cart", function(a, b, f) {
        b.closest("li.product").block()
    });
    a("body").on("added_to_cart", function() {
        a("li.product").unblock();
        return !1
    });
    a(document).ready(function() {
        var c = window.location.hash;
        switch (c) {
            case "#grid-extended":
            case "#list-view":
            case "#list-view-small":
            case "#grid":
                a('.shop-view-switcher a[href="' + c + '"]').tab("show");
                break;
            case "#tab-accessories":
            case "#tab-description":
            case "#tab-specification":
            case "#tab-reviews":
                a('.wc-tabs a[href="' + c + '"]').trigger("click")
        }
        b();
        var c = a(".page-template-template-homepage-v2 .departments-menu > li > ul.dropdown-menu").height(),
            g = a(".page-template-template-homepage-v2 .home-v2-slider").height(),
            f = 0,
            f = (c > g ? c + 24 : g) + 35;
        a(".page-template-template-homepage-v2 #sidebar").css("margin-top", f);
        a(".price-add-to-cart > .price").each(function() {
            var b = a(this);
            b[0].scrollWidth > b.innerWidth() && (b.find(".electro-price").css("position", "relative"), b.find("del").attr("style", "position:absolute;left:0;top:-14px;"))
        });
        var c = a(".vertical-menu"),
            d = c.height() - 52.25;
        c.find(".dropdown > .dropdown-menu").each(function() {
            a(this).css("min-height",
                d);
            a(this).find(".menu-item-object-static_block").css("min-height", d)
        });
        var c = a(".vertical-menu > .list-group-item > .dropdown-menu"),
            g = c.attr("style"),
            e = 0;
        c.css({
            visibility: "hidden",
            display: "none"
        });
        e = c.height() + 15;
        c.attr("style", g ? g : "");
        c.find(".dropdown-menu").each(function() {
            a(this).css("min-height", e);
            a(this).find(".menu-item-object-static_block").css("min-height", e)
        });
        var c = a(".departments-menu-dropdown"),
            h = c.height();
        c.find(".dropdown > .dropdown-menu").each(function() {
            a(this).find(".menu-item-object-static_block").css("min-height",
                h + 24);
            a(this).css("min-height", h + 28)
        });
        a(".vertical-menu, .departments-menu-dropdown").on("mouseleave", function() {
            a(this).removeClass("animated-dropdown")
        });
        a(".vertical-menu .menu-item-has-children, .departments-menu-dropdown .menu-item-has-children").on({
            mouseenter: function() {
                var b = a(this),
                    c = b.find(".dropdown-menu"),
                    d = b.parents(".vertical-menu"),
                    e = b.parents(".departments-menu-dropdown"),
                    h = {
                        width: 540,
                        opacity: 1
                    },
                    f = "";
                0 < d.length ? f = d : 0 < e.length && (f = e);
                b.hasClass("yamm-tfw") ? (h.width = 540, 0 < e.length &&
                    (h.width = 930)) : b.hasClass("yamm-fw") ? h.width = 900 : b.hasClass("yamm-hw") ? h.width = 450 : h.width = 277;
                c.css({
                    visibility: "visible",
                    display: "block"
                });
                f.hasClass("animated-dropdown") ? c.css(h) : c.animate(h, 300, function() {
                    f.addClass("animated-dropdown")
                })
            },
            mouseleave: function() {
                a(this).find(".dropdown-menu").css({
                    visibility: "hidden",
                    opacity: 0,
                    width: 0,
                    display: "none"
                })
            }
        });
        a(".slider-next").on("click", function() {
            a(a(this).data("target") + " .owl-carousel").trigger("next.owl.carousel");
            return !1
        });
        a(".slider-prev").on("click",
            function() {
                a(a(this).data("target") + " .owl-carousel").trigger("prev.owl.carousel");
                return !1
            });
        a(".animate-in-view").each(function() {
            var b = a(this),
                c = b.data("animation");
            "undefined" !== typeof b && b.waypoint(function(b) {
                a(this).addClass(c + " animated")
            }, {
                triggerOnce: !0,
                offset: "90%"
            })
        });
        a(".single-product .electro-gallery").each(function() {
            var b = a(this).children(".thumbnails-single"),
                c = a(this).children(".thumbnails-all"),
                d = !1;
            b.owlCarousel({
                items: 1,
                margin: 0,
                dots: !1,
                nav: !1,
                rtl: !1,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    768: {
                        items: 1
                    }
                }
            });
            b.on("changed.owl.carousel", function(a) {
                d || (d = !0, c.trigger("to.owl.carousel", [a.item.index, 300, !0]), d = !1);
                c.find(".owl-item").removeClass("synced").eq(a.item.index).addClass("synced")
            });
            c.on("initialized.owl.carousel", function(a) {
                c.find(".owl-item").eq(0).addClass("synced")
            });
            var e = c.attr("class"),
                e = parseInt(e.replace("thumbnails-all columns-", ""));
            c.owlCarousel({
                items: e,
                margin: 8,
                dots: !0,
                nav: !1,
                rtl: !1,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 3
                    },
                    768: {
                        items: e
                    }
                }
            });
            c.on("click",
                "a",
                function(a) {
                    a.preventDefault()
                });
            c.on("click", ".owl-item", function() {
                b.trigger("to.owl.carousel", [a(this).index(), 300, !0])
            });
            c.on("changed.owl.carousel", function(a) {
                d || (d = !0, b.trigger("to.owl.carousel", [a.item.index, 300, !0]), d = !1)
            })
        });
        a(".electro-store-directory .product-categories > li").arrangeObjects("ul", 4);
        a(".product-categories .show-all-cat-dropdown").each(function() {
            if (0 < a(this).siblings("ul").length) {
                var b = a('<span class="child-indicator"><i class="fa fa-angle-right"></i></span>');
                a(this).siblings("ul").hide();
                a(this).siblings("ul").is(":visible") && (b.addClass("open"), b.html('<i class="fa fa-angle-up"></i>'));
                a(this).on("click", function() {
                    a(this).siblings("ul").toggle("fast", function() {
                        a(this).is(":visible") ? (b.addClass("open"), b.html('<i class="fa fa-angle-up"></i>')) : (b.removeClass("open"), b.html('<i class="fa fa-angle-right"></i>'))
                    });
                    return !1
                });
                a(this).append(b)
            }
        });
        a(".cat-item > a").each(function() {
            if (0 < a(this).siblings("ul.children").length) {
                var b = a('<span class="child-indicator"><i class="fa fa-angle-right"></i></span>');
                a(this).siblings(".children").hide();
                a(".current-cat > .children").show();
                a(".current-cat-parent > .children").show();
                a(this).siblings(".children").is(":visible") && (b.addClass("open"), b.html('<i class="fa fa-angle-up"></i>'));
                b.on("click", function() {
                    a(this).parent().siblings(".children").toggle("fast", function() {
                        a(this).is(":visible") ? (b.addClass("open"), b.html('<i class="fa fa-angle-up"></i>')) : (b.removeClass("open"), b.html('<i class="fa fa-angle-right"></i>'))
                    });
                    return !1
                });
                a(this).prepend(b)
            } else a(this).prepend('<span class="no-child"></span>')
        })
    })
})(jQuery);
var MgStore = function() {};
MgStore.prototype.resize = function(a, b, c) {
    return ["/image.php?width=", b, "&height=", c, "&crop&image=", a].join("")
};
MgStore.prototype.parsePhotoPath = function(a) {
    return a.replace(/\&amp\;/g, "&")
};
MgStore.prototype.pluralize = function(a, b) {
    if (0 == a % 1) {
        var c = a % 10;
        var g = a % 100;
        c = 0 == c || 5 <= c && 9 >= c || 11 <= g && 14 >= g ? 2 : 1 == c ? 0 : 1
    } else c = 2;
    return b[c]
};
var MS = new MgStore;
(function() {
    MgStore.prototype.getUrl = function(a) {
        return "/" + currentLangUrl + a
    }
})();
var inArray = function(a, b) {
    for (var c = b.length, g = 0; g < c; g++)
        if (parseInt(b[g], 10) === parseInt(a, 10)) return !0;
    return !1
};
Function.prototype.of = function(a) {
    var b = this;
    return function() {
        return b.apply(a, arguments)
    }
};
Array.prototype.swap = function(a, b) {
    var c = this[a];
    this[a] = this[b];
    this[b] = c
};
Array.prototype.unsetByContent = function(a) {
    for (var b = this.length, c = 0; c < b; c++)
        if (this[c] === a) {
            this.splice(c, 1);
            break
        }
};
jQuery.fn.swapWith = function(a) {
    return this.each(function() {
        var b = $(a).clone(!0),
            c = $(this).clone(!0);
        $(a).replaceWith(c);
        $(this).replaceWith(b)
    })
};
jQuery.fn.setTo = function(a) {
    return this.each(function() {
        var b = $(this);
        $(a).replaceWith(b.clone(!0));
        return b
    })
};
String.prototype.url = function() {
    return str_replace([" ", '"', "'"], ["+", "", ""], this)
};
var str_replace = function(a, b, c, g) {
    var f, d;
    a = [].concat(a);
    b = [].concat(b);
    var e = c,
        h = "[object Array]" === Object.prototype.toString.call(b),
        l = "[object Array]" === Object.prototype.toString.call(e),
        e = [].concat(e);
    g && (this.window[g] = 0);
    c = 0;
    for (f = e.length; c < f; c++)
        if ("" !== e[c]) {
            var n = 0;
            for (d = a.length; n < d; n++) {
                var p = e[c] + "";
                var q = h ? void 0 !== b[n] ? b[n] : "" : b[0];
                e[c] = p.split(a[n]).join(q);
                g && e[c] !== p && (this.window[g] += (p.length - e[c].length) / a[n].length)
            }
        }
    return l ? e : e[0]
};
(function(a) {
    function b(b) {
        this.input = b;
        "password" == b.attr("type") && this.handlePassword();
        a(b[0].form).submit(function() {
            b.hasClass("placeholder") && b[0].value == b.attr("placeholder") && (b[0].value = "")
        })
    }
    b.prototype = {
        show: function(a) {
            if ("" === this.input[0].value || a && this.valueIsPlaceholder()) {
                if (this.isPassword) try {
                    this.input[0].setAttribute("type", "text")
                } catch (f) {
                    this.input.before(this.fakePassword.show()).hide()
                }
                this.input.addClass("placeholder");
                this.input[0].value = this.input.attr("placeholder")
            }
        },
        hide: function() {
            if (this.valueIsPlaceholder() && this.input.hasClass("placeholder") && (this.input.removeClass("placeholder"), this.input[0].value = "", this.isPassword)) {
                try {
                    this.input[0].setAttribute("type", "password")
                } catch (g) {}
                this.input.show();
                this.input[0].focus()
            }
        },
        valueIsPlaceholder: function() {
            return this.input[0].value == this.input.attr("placeholder")
        },
        handlePassword: function() {
            var b = this.input;
            b.attr("realType", "password");
            this.isPassword = !0;
            if (a.browser.msie && b[0].outerHTML) {
                var c = a(b[0].outerHTML.replace(/type=(['"])?password\1/gi,
                    "type=$1text$1"));
                this.fakePassword = c.val(b.attr("placeholder")).addClass("placeholder").focus(function() {
                    b.trigger("focus");
                    a(this).hide()
                });
                a(b[0].form).submit(function() {
                    c.remove();
                    b.show()
                })
            }
        }
    };
    var c = !!("placeholder" in document.createElement("input"));
    a.fn.placeholder = function() {
        return c ? this : this.each(function() {
            var c = a(this),
                f = new b(c);
            f.show(!0);
            c.focus(function() {
                f.hide()
            });
            c.blur(function() {
                f.show(!1)
            });
            a.browser.msie && (a(window).load(function() {
                    c.val() && c.removeClass("placeholder");
                    f.show(!0)
                }),
                c.focus(function() {
                    if ("" == this.value) {
                        var a = this.createTextRange();
                        a.collapse(!0);
                        a.moveStart("character", 0);
                        a.select()
                    }
                }))
        })
    }
})(jQuery);
(function(a, b) {
    function c(b, c) {
        var d = b.nodeName.toLowerCase();
        if ("area" === d) {
            d = b.parentNode;
            var e = d.name;
            if (!b.href || !e || "map" !== d.nodeName.toLowerCase()) return !1;
            d = a("img[usemap=#" + e + "]")[0];
            return !!d && g(d)
        }
        return (/input|select|textarea|button|object/.test(d) ? !b.disabled : "a" === d ? b.href || c : c) && g(b)
    }

    function g(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
            return "hidden" === a.css(this, "visibility")
        }).length
    }
    var f = 0,
        d = /^ui-id-\d+$/;
    a.ui = a.ui || {};
    a.extend(a.ui, {
        version: "@VERSION",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    a.fn.extend({
        focus: function(b) {
            return function(c, d) {
                return "number" === typeof c ? this.each(function() {
                    var b = this;
                    setTimeout(function() {
                        a(b).focus();
                        d && d.call(b)
                    }, c)
                }) : b.apply(this, arguments)
            }
        }(a.fn.focus),
        scrollParent: function() {
            var b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(a.css(this,
                    "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
            }).eq(0);
            return /fixed/.test(this.css("position")) || !b.length ? a(this[0].ownerDocument || document) : b
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++f)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                d.test(this.id) &&
                    a(this).removeAttr("id")
            })
        }
    });
    a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
            return function(c) {
                return !!a.data(c, b)
            }
        }) : function(b, c, d) {
            return !!a.data(b, d[3])
        },
        focusable: function(b) {
            return c(b, !isNaN(a.attr(b, "tabindex")))
        },
        tabbable: function(b) {
            var d = a.attr(b, "tabindex"),
                e = isNaN(d);
            return (e || 0 <= d) && c(b, !e)
        }
    });
    a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(c, d) {
        function e(b, c, d, e) {
            a.each(h, function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0;
                d && (c -=
                    parseFloat(a.css(b, "border" + this + "Width")) || 0);
                e && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            });
            return c
        }
        var h = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"],
            f = d.toLowerCase(),
            g = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
        a.fn["inner" + d] = function(c) {
            return c === b ? g["inner" + d].call(this) : this.each(function() {
                a(this).css(f, e(this, c) + "px")
            })
        };
        a.fn["outer" + d] = function(b, c) {
            return "number" !== typeof b ? g["outer" + d].call(this, b) : this.each(function() {
                a(this).css(f,
                    e(this, b, !0, c) + "px")
            })
        }
    });
    a.fn.addBack || (a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    });
    a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
        return function(c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
        }
    }(a.fn.removeData));
    a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    a.support.selectstart = "onselectstart" in document.createElement("div");
    a.fn.extend({
        disableSelection: function() {
            return this.bind((a.support.selectstart ?
                "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                a.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(c) {
            if (c !== b) return this.css("zIndex", c);
            if (this.length) {
                c = a(this[0]);
                for (var d; c.length && c[0] !== document;) {
                    d = c.css("position");
                    if ("absolute" === d || "relative" === d || "fixed" === d)
                        if (d = parseInt(c.css("zIndex"), 10), !isNaN(d) && 0 !== d) return d;
                    c = c.parent()
                }
            }
            return 0
        }
    });
    a.ui.plugin = {
        add: function(b, c, d) {
            var e;
            b = a.ui[b].prototype;
            for (e in d) b.plugins[e] =
                b.plugins[e] || [], b.plugins[e].push([c, d[e]])
        },
        call: function(a, b, c, d) {
            if ((b = a.plugins[b]) && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                for (d = 0; d < b.length; d++) a.options[b[d][0]] && b[d][1].apply(a.element, c)
        }
    }
})(jQuery);
(function(a, b) {
    var c = 0,
        g = Array.prototype.slice,
        f = a.cleanData;
    a.cleanData = function(b) {
        for (var c = 0, d; null != (d = b[c]); c++) try {
            a(d).triggerHandler("remove")
        } catch (l) {}
        f(b)
    };
    a.widget = function(b, c, h) {
        var d = {},
            e = b.split(".")[0];
        b = b.split(".")[1];
        var f = e + "-" + b;
        h || (h = c, c = a.Widget);
        a.expr[":"][f.toLowerCase()] = function(b) {
            return !!a.data(b, f)
        };
        a[e] = a[e] || {};
        var g = a[e][b];
        var m = a[e][b] = function(a, b) {
            if (!this._createWidget) return new m(a, b);
            arguments.length && this._createWidget(a, b)
        };
        a.extend(m, g, {
            version: h.version,
            _proto: a.extend({}, h),
            _childConstructors: []
        });
        var u = new c;
        u.options = a.widget.extend({}, u.options);
        a.each(h, function(b, e) {
            a.isFunction(e) ? d[b] = function() {
                var a = function() {
                        return c.prototype[b].apply(this, arguments)
                    },
                    d = function(a) {
                        return c.prototype[b].apply(this, a)
                    };
                return function() {
                    var b = this._super,
                        c = this._superApply;
                    this._super = a;
                    this._superApply = d;
                    var h = e.apply(this, arguments);
                    this._super = b;
                    this._superApply = c;
                    return h
                }
            }() : d[b] = e
        });
        m.prototype = a.widget.extend(u, {
            widgetEventPrefix: g ? u.widgetEventPrefix ||
                b : b
        }, d, {
            constructor: m,
            namespace: e,
            widgetName: b,
            widgetFullName: f
        });
        g ? (a.each(g._childConstructors, function(b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, m, c._proto)
        }), delete g._childConstructors) : c._childConstructors.push(m);
        a.widget.bridge(b, m);
        return m
    };
    a.widget.extend = function(c) {
        for (var d = g.call(arguments, 1), h = 0, f = d.length, n, p; h < f; h++)
            for (n in d[h]) p = d[h][n], d[h].hasOwnProperty(n) && p !== b && (a.isPlainObject(p) ? c[n] = a.isPlainObject(c[n]) ? a.widget.extend({}, c[n], p) : a.widget.extend({},
                p) : c[n] = p);
        return c
    };
    a.widget.bridge = function(c, e) {
        var d = e.prototype.widgetFullName || c;
        a.fn[c] = function(h) {
            var f = "string" === typeof h,
                l = g.call(arguments, 1),
                q = this;
            h = !f && l.length ? a.widget.extend.apply(null, [h].concat(l)) : h;
            f ? this.each(function() {
                var e = a.data(this, d);
                if ("instance" === h) return q = e, !1;
                if (!e) return a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + h + "'");
                if (!a.isFunction(e[h]) || "_" === h.charAt(0)) return a.error("no such method '" + h + "' for " + c + " widget instance");
                var f = e[h].apply(e, l);
                if (f !== e && f !== b) return q = f && f.jquery ? q.pushStack(f.get()) : f, !1
            }) : this.each(function() {
                var b = a.data(this, d);
                b ? b.option(h || {})._init() : a.data(this, d, new e(h, this))
            });
            return q
        }
    };
    a.Widget = function() {};
    a.Widget._childConstructors = [];
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(b, e) {
            e = a(e || this.defaultElement || this)[0];
            this.element = a(e);
            this.uuid = c++;
            this.eventNamespace = "." + this.widgetName +
                this.uuid;
            this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b);
            this.bindings = a();
            this.hoverable = a();
            this.focusable = a();
            e !== this && (a.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(a) {
                    a.target === e && this.destroy()
                }
            }), this.document = a(e.style ? e.ownerDocument : e.document || e), this.window = a(this.document[0].defaultView || this.document[0].parentWindow));
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function() {
            return this.element
        },
        option: function(c, e) {
            var d = c,
                f;
            if (0 === arguments.length) return a.widget.extend({}, this.options);
            if ("string" === typeof c) {
                d = {};
                var g = c.split(".");
                c = g.shift();
                if (g.length) {
                    var p = d[c] = a.widget.extend({}, this.options[c]);
                    for (f = 0; f < g.length - 1; f++) p[g[f]] = p[g[f]] || {}, p = p[g[f]];
                    c = g.pop();
                    if (e === b) return p[c] === b ? null : p[c];
                    p[c] = e
                } else {
                    if (e === b) return this.options[c] === b ? null : this.options[c];
                    d[c] = e
                }
            }
            this._setOptions(d);
            return this
        },
        _setOptions: function(a) {
            for (var b in a) this._setOption(b, a[b]);
            return this
        },
        _setOption: function(a, b) {
            this.options[a] = b;
            "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"));
            return this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(b, c, h) {
            var d, e = this;
            "boolean" !== typeof b && (h = c, c = b, b = !1);
            h ? (c = d = a(c), this.bindings = this.bindings.add(c)) : (h = c, c = this.element, d = this.widget());
            a.each(h,
                function(h, f) {
                    function g() {
                        if (b || !0 !== e.options.disabled && !a(this).hasClass("ui-state-disabled")) return ("string" === typeof f ? e[f] : f).apply(e, arguments)
                    }
                    "string" !== typeof f && (g.guid = f.guid = f.guid || g.guid || a.guid++);
                    var l = h.match(/^(\w+)\s*(.*)$/),
                        n = l[1] + e.eventNamespace;
                    (l = l[2]) ? d.delegate(l, n, g): c.bind(n, g)
                })
        },
        _off: function(a, b) {
            b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            a.unbind(b).undelegate(b)
        },
        _delay: function(a, b) {
            var c = this;
            return setTimeout(function() {
                return ("string" ===
                    typeof a ? c[a] : a).apply(c, arguments)
            }, b || 0)
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b);
            this._on(b, {
                mouseenter: function(b) {
                    a(b.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(b) {
                    a(b.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b);
            this._on(b, {
                focusin: function(b) {
                    a(b.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(b) {
                    a(b.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(b, c, f) {
            var d,
                e = this.options[b];
            f = f || {};
            c = a.Event(c);
            c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase();
            c.target = this.element[0];
            if (b = c.originalEvent)
                for (d in b) d in c || (c[d] = b[d]);
            this.element.trigger(c, f);
            return !(a.isFunction(e) && !1 === e.apply(this.element[0], [c].concat(f)) || c.isDefaultPrevented())
        }
    };
    a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
            "string" === typeof e && (e = {
                effect: e
            });
            var h = e ? !0 === e || "number" === typeof e ? c : e.effect || c : b;
            e = e || {};
            "number" === typeof e && (e = {
                duration: e
            });
            var g = !a.isEmptyObject(e);
            e.complete = f;
            e.delay && d.delay(e.delay);
            if (g && a.effects && a.effects.effect[h]) d[b](e);
            else if (h !== b && d[h]) d[h](e.duration, e.easing, f);
            else d.queue(function(c) {
                a(this)[b]();
                f && f.call(d[0]);
                c()
            })
        }
    })
})(jQuery);
(function(a, b) {
    var c = !1;
    a(document).mouseup(function() {
        c = !1
    });
    a.widget("ui.mouse", {
        version: "@VERSION",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var b = this;
            this.element.bind("mousedown." + this.widgetName, function(a) {
                return b._mouseDown(a)
            }).bind("click." + this.widgetName, function(c) {
                if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) return a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1
            });
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(b) {
            if (!c) {
                this._mouseStarted && this._mouseUp(b);
                this._mouseDownEvent = b;
                var f = this,
                    d = 1 === b.which,
                    e = "string" === typeof this.options.cancel && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
                if (!d || e || !this._mouseCapture(b)) return !0;
                this.mouseDelayMet = !this.options.delay;
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    f.mouseDelayMet = !0
                }, this.options.delay));
                if (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = !1 !== this._mouseStart(b), !this._mouseStarted)) return b.preventDefault(), !0;
                !0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent");
                this._mouseMoveDelegate = function(a) {
                    return f._mouseMove(a)
                };
                this._mouseUpDelegate = function(a) {
                    return f._mouseUp(a)
                };
                this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
                b.preventDefault();
                return c = !0
            }
        },
        _mouseMove: function(b) {
            if (a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !b.button || !b.which) return this._mouseUp(b);
            if (this._mouseStarted) return this._mouseDrag(b), b.preventDefault();
            this._mouseDistanceMet(b) && this._mouseDelayMet(b) && ((this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, b)) ? this._mouseDrag(b) : this._mouseUp(b));
            return !this._mouseStarted
        },
        _mouseUp: function(b) {
            this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b));
            return c = !1
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
})(jQuery);
(function(a, b) {
    function c(a) {
        a = a.cloneNode(!1);
        return 1 < a.hash.length && decodeURIComponent(a.href.replace(f, "")) === decodeURIComponent(location.href.replace(f, ""))
    }
    var g = 0,
        f = /#.*$/;
    a.widget("ui.tabs", {
        version: "@VERSION",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var b = this,
                c = this.options;
            this.running = !1;
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",
                c.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(b) {
                a(this).is(".ui-state-disabled") && b.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                a(this).closest("li").is(".ui-state-disabled") && this.blur()
            });
            this._processTabs();
            c.active = this._initialActive();
            a.isArray(c.disabled) && (c.disabled = a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function(a) {
                return b.tabs.index(a)
            }))).sort());
            this.active = !1 !== this.options.active &&
                this.anchors.length ? this._findActive(c.active) : a();
            this._refresh();
            this.active.length && this.load(c.active)
        },
        _initialActive: function() {
            var b = this.options.active,
                c = this.options.collapsible,
                f = location.hash.substring(1);
            null === b && (f && this.tabs.each(function(c, d) {
                if (a(d).attr("aria-controls") === f) return b = c, !1
            }), null === b && (b = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null === b || -1 === b) && (b = this.tabs.length ? 0 : !1);
            !1 !== b && (b = this.tabs.index(this.tabs.eq(b)), -1 === b && (b = c ? !1 : 0));
            !c && !1 === b && this.anchors.length &&
                (b = 0);
            return b
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : a()
            }
        },
        _tabKeydown: function(b) {
            var c = a(this.document[0].activeElement).closest("li"),
                d = this.tabs.index(c),
                f = !0;
            if (!this._handlePageNav(b)) {
                switch (b.keyCode) {
                    case a.ui.keyCode.RIGHT:
                    case a.ui.keyCode.DOWN:
                        d++;
                        break;
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.LEFT:
                        f = !1;
                        d--;
                        break;
                    case a.ui.keyCode.END:
                        d = this.anchors.length - 1;
                        break;
                    case a.ui.keyCode.HOME:
                        d = 0;
                        break;
                    case a.ui.keyCode.SPACE:
                        b.preventDefault();
                        clearTimeout(this.activating);
                        this._activate(d);
                        return;
                    case a.ui.keyCode.ENTER:
                        b.preventDefault();
                        clearTimeout(this.activating);
                        this._activate(d === this.options.active ? !1 : d);
                        return;
                    default:
                        return
                }
                b.preventDefault();
                clearTimeout(this.activating);
                d = this._focusNextTab(d, f);
                b.ctrlKey || (c.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", d)
                }, this.delay))
            }
        },
        _panelKeydown: function(b) {
            !this._handlePageNav(b) && b.ctrlKey && b.keyCode ===
                a.ui.keyCode.UP && (b.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(b) {
            if (b.altKey && b.keyCode === a.ui.keyCode.PAGE_UP) return this._activate(this._focusNextTab(this.options.active - 1, !1)), !0;
            if (b.altKey && b.keyCode === a.ui.keyCode.PAGE_DOWN) return this._activate(this._focusNextTab(this.options.active + 1, !0)), !0
        },
        _findNextTab: function(b, c) {
            function d() {
                b > e && (b = 0);
                0 > b && (b = e);
                return b
            }
            for (var e = this.tabs.length - 1; - 1 !== a.inArray(d(), this.options.disabled);) b = c ? b + 1 : b - 1;
            return b
        },
        _focusNextTab: function(a,
            b) {
            a = this._findNextTab(a, b);
            this.tabs.eq(a).focus();
            return a
        },
        _setOption: function(a, b) {
            "active" === a ? this._activate(b) : "disabled" === a ? this._setupDisabled(b) : (this._super(a, b), "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", b), b || !1 !== this.options.active || this._activate(0)), "event" === a && this._setupEvents(b), "heightStyle" === a && this._setupHeightStyle(b))
        },
        _tabId: function(a) {
            return a.attr("aria-controls") || "ui-tabs-" + ++g
        },
        _sanitizeSelector: function(a) {
            return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,
                "\\$&") : ""
        },
        refresh: function() {
            var b = this.options,
                c = this.tablist.children(":has(a[href])");
            b.disabled = a.map(c.filter(".ui-state-disabled"), function(a) {
                return c.index(a)
            });
            this._processTabs();
            !1 !== b.active && this.anchors.length ? this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1, this.active = a()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active = this.tabs.index(this.active) : (b.active = !1, this.active = a());
            this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            });
            this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var b = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist");
            this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            });
            this.anchors = this.tabs.map(function() {
                return a("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            });
            this.panels =
                a();
            this.anchors.each(function(d, f) {
                var e = a(f).uniqueId().attr("id"),
                    h = a(f).closest("li"),
                    g = h.attr("aria-controls");
                if (c(f)) {
                    var q = f.hash;
                    var m = b.element.find(b._sanitizeSelector(q))
                } else {
                    var u = b._tabId(h);
                    q = "#" + u;
                    m = b.element.find(q);
                    m.length || (m = b._createPanel(u), m.insertAfter(b.panels[d - 1] || b.tablist));
                    m.attr("aria-live", "polite")
                }
                m.length && (b.panels = b.panels.add(m));
                g && h.data("ui-tabs-aria-controls", g);
                h.attr({
                    "aria-controls": q.substring(1),
                    "aria-labelledby": e
                });
                m.attr("aria-labelledby", e)
            });
            this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role",
                "tabpanel")
        },
        _getList: function() {
            return this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(b) {
            return a("<div>").attr("id", b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(b) {
            a.isArray(b) && (b.length ? b.length === this.anchors.length && (b = !0) : b = !1);
            for (var c = 0, d; d = this.tabs[c]; c++) !0 === b || -1 !== a.inArray(c, b) ? a(d).addClass("ui-state-disabled").attr("aria-disabled", "true") : a(d).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = b
        },
        _setupEvents: function(b) {
            var c = {};
            b && a.each(b.split(" "), function(a, b) {
                c[b] = "_eventHandler"
            });
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(!0, this.anchors, {
                click: function(a) {
                    a.preventDefault()
                }
            });
            this._on(this.anchors, c);
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            });
            this._on(this.panels, {
                keydown: "_panelKeydown"
            });
            this._focusable(this.tabs);
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(b) {
            var c = this.element.parent();
            if ("fill" === b) {
                var d = c.height();
                d -= this.element.outerHeight() - this.element.height();
                this.element.siblings(":visible").each(function() {
                    var b = a(this),
                        c = b.css("position");
                    "absolute" !== c && "fixed" !== c && (d -= b.outerHeight(!0))
                });
                this.element.children().not(this.panels).each(function() {
                    d -= a(this).outerHeight(!0)
                });
                this.panels.each(function() {
                    a(this).height(Math.max(0, d - a(this).innerHeight() + a(this).height()))
                }).css("overflow", "auto")
            } else "auto" === b && (d = 0, this.panels.each(function() {
                d = Math.max(d, a(this).height("").height())
            }).height(d))
        },
        _eventHandler: function(b) {
            var c = this.options,
                d = this.active,
                f = a(b.currentTarget).closest("li"),
                g = f[0] === d[0],
                p = g && c.collapsible,
                q = p ? a() : this._getPanelForTab(f),
                m = d.length ? this._getPanelForTab(d) : a(),
                d = {
                    oldTab: d,
                    oldPanel: m,
                    newTab: p ? a() : f,
                    newPanel: q
                };
            b.preventDefault();
            f.hasClass("ui-state-disabled") || f.hasClass("ui-tabs-loading") || this.running || g && !c.collapsible || !1 === this._trigger("beforeActivate", b, d) || (c.active = p ? !1 : this.tabs.index(f), this.active = g ? a() : f, this.xhr && this.xhr.abort(), m.length || q.length ||
                a.error("jQuery UI Tabs: Mismatching fragment identifier."), q.length && this.load(this.tabs.index(f), b), this._toggle(b, d))
        },
        _toggle: function(b, c) {
            function d() {
                f.running = !1;
                f._trigger("activate", b, c)
            }

            function e() {
                c.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
                g.length && f.options.show ? f._show(g, f.options.show, d) : (g.show(), d())
            }
            var f = this,
                g = c.newPanel,
                q = c.oldPanel;
            this.running = !0;
            q.length && this.options.hide ? this._hide(q, this.options.hide, function() {
                c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                e()
            }) : (c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), q.hide(), e());
            q.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            });
            c.oldTab.attr("aria-selected", "false");
            g.length && q.length ? c.oldTab.attr("tabIndex", -1) : g.length && this.tabs.filter(function() {
                return 0 === a(this).attr("tabIndex")
            }).attr("tabIndex", -1);
            g.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            });
            c.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function(b) {
            b = this._findActive(b);
            b[0] !== this.active[0] &&
                (b.length || (b = this.active), b = b.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: b,
                    currentTarget: b,
                    preventDefault: a.noop
                }))
        },
        _findActive: function(b) {
            return !1 === b ? a() : this.tabs.eq(b)
        },
        _getIndex: function(a) {
            "string" === typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']")));
            return a
        },
        _destroy: function() {
            this.xhr && this.xhr.abort();
            this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
            this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
            this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
            this.tabs.add(this.panels).each(function() {
                a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            });
            this.tabs.each(function() {
                var b = a(this),
                    c = b.data("ui-tabs-aria-controls");
                c ? b.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : b.removeAttr("aria-controls")
            });
            this.panels.show();
            "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(c) {
            var d = this.options.disabled;
            !1 !== d && (c === b ? d = !1 : (c = this._getIndex(c), d = a.isArray(d) ? a.map(d, function(a) {
                return a !== c ? a : null
            }) : a.map(this.tabs, function(a, b) {
                return b !== c ? b : null
            })), this._setupDisabled(d))
        },
        disable: function(c) {
            var d =
                this.options.disabled;
            if (!0 !== d) {
                if (c === b) d = !0;
                else {
                    c = this._getIndex(c);
                    if (-1 !== a.inArray(c, d)) return;
                    d = a.isArray(d) ? a.merge([c], d).sort() : [c]
                }
                this._setupDisabled(d)
            }
        },
        load: function(b, e) {
            b = this._getIndex(b);
            var d = this,
                f = this.tabs.eq(b),
                g = f.find(".ui-tabs-anchor"),
                p = this._getPanelForTab(f),
                q = {
                    tab: f,
                    panel: p
                };
            c(g[0]) || (this.xhr = a.ajax(this._ajaxSettings(g, e, q))) && "canceled" !== this.xhr.statusText && (f.addClass("ui-tabs-loading"), p.attr("aria-busy", "true"), this.xhr.success(function(a) {
                setTimeout(function() {
                    p.html(a);
                    d._trigger("load", e, q)
                }, 1)
            }).complete(function(a, b) {
                setTimeout(function() {
                    "abort" === b && d.panels.stop(!1, !0);
                    f.removeClass("ui-tabs-loading");
                    p.removeAttr("aria-busy");
                    a === d.xhr && delete d.xhr
                }, 1)
            }))
        },
        _ajaxSettings: function(b, c, f) {
            var d = this;
            return {
                url: b.attr("href"),
                beforeSend: function(b, e) {
                    return d._trigger("beforeLoad", c, a.extend({
                        jqXHR: b,
                        ajaxSettings: e
                    }, f))
                }
            }
        },
        _getPanelForTab: function(b) {
            b = a(b).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + b))
        }
    })
})(jQuery);
(function(a, b) {
    a.widget("ui.slider", a.ui.mouse, {
        version: "@VERSION",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._mouseSliding = this._keySliding = !1;
            this._animateOff = !0;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
            this._refresh();
            this._setOption("disabled", this.options.disabled);
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },
        _createHandles: function() {
            var b = this.options;
            var g = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                f = [];
            var d = b.values && b.values.length || 1;
            g.length > d && (g.slice(d).remove(), g = g.slice(0, d));
            for (b = g.length; b < d; b++) f.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
            this.handles = g.add(a(f.join("")).appendTo(this.element));
            this.handle = this.handles.eq(0);
            this.handles.each(function(b) {
                a(this).data("ui-slider-handle-index", b)
            })
        },
        _createRange: function() {
            var b = this.options,
                g = "";
            b.range ? (!0 === b.range && (b.values ? b.values.length && 2 !== b.values.length ? b.values = [b.values[0], b.values[0]] : a.isArray(b.values) && (b.values = b.values.slice(0)) : b.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = a("<div></div>").appendTo(this.element), g = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(g + ("min" === b.range || "max" === b.range ? " ui-slider-range-" + b.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            var a = this.handles.add(this.range).filter("a");
            this._off(a);
            this._on(a, this._handleEvents);
            this._hoverable(a);
            this._focusable(a)
        },
        _destroy: function() {
            this.handles.remove();
            this.range && this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
            this._mouseDestroy()
        },
        _mouseCapture: function(b) {
            var c, f, d = this,
                e = this.options;
            if (e.disabled) return !1;
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();
            var h = this._normValueFromMouse({
                x: b.pageX,
                y: b.pageY
            });
            var l = this._valueMax() - this._valueMin() + 1;
            this.handles.each(function(b) {
                var g = Math.abs(h - d.values(b));
                if (l > g || l === g && (b === d._lastChangedValue || d.values(b) === e.min)) l = g, c = a(this), f = b
            });
            if (!1 === this._start(b, f)) return !1;
            this._mouseSliding = !0;
            this._handleIndex = f;
            c.addClass("ui-state-active").focus();
            var n = c.offset();
            this._clickOffset = a(b.target).parents().addBack().is(".ui-slider-handle") ? {
                left: b.pageX - n.left - c.width() / 2,
                top: b.pageY - n.top - c.height() / 2 - (parseInt(c.css("borderTopWidth"), 10) || 0) - (parseInt(c.css("borderBottomWidth"), 10) || 0) + (parseInt(c.css("marginTop"), 10) || 0)
            } : {
                left: 0,
                top: 0
            };
            this.handles.hasClass("ui-state-hover") || this._slide(b, f, h);
            return this._animateOff = !0
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(a) {
            var b =
                this._normValueFromMouse({
                    x: a.pageX,
                    y: a.pageY
                });
            this._slide(a, this._handleIndex, b);
            return !1
        },
        _mouseStop: function(a) {
            this.handles.removeClass("ui-state-active");
            this._mouseSliding = !1;
            this._stop(a, this._handleIndex);
            this._change(a, this._handleIndex);
            this._clickOffset = this._handleIndex = null;
            return this._animateOff = !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(a) {
            if ("horizontal" === this.orientation) {
                var b =
                    this.elementSize.width;
                a = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
            } else b = this.elementSize.height, a = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0);
            b = a / b;
            1 < b && (b = 1);
            0 > b && (b = 0);
            "vertical" === this.orientation && (b = 1 - b);
            a = this._valueMax() - this._valueMin();
            b = this._valueMin() + b * a;
            return this._trimAlignValue(b)
        },
        _start: function(a, b) {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            this.options.values && this.options.values.length && (c.value = this.values(b),
                c.values = this.values());
            return this._trigger("start", a, c)
        },
        _slide: function(a, b, f) {
            if (this.options.values && this.options.values.length) {
                var c = this.values(b ? 0 : 1);
                2 === this.options.values.length && !0 === this.options.range && (0 === b && f > c || 1 === b && f < c) && (f = c);
                f !== this.values(b) && (c = this.values(), c[b] = f, a = this._trigger("slide", a, {
                    handle: this.handles[b],
                    value: f,
                    values: c
                }), this.values(b ? 0 : 1), !1 !== a && this.values(b, f, !0))
            } else f !== this.value() && (a = this._trigger("slide", a, {
                    handle: this.handles[b],
                    value: f
                }), !1 !== a &&
                this.value(f))
        },
        _stop: function(a, b) {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values());
            this._trigger("stop", a, c)
        },
        _change: function(a, b) {
            if (!this._keySliding && !this._mouseSliding) {
                var c = {
                    handle: this.handles[b],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values());
                this._lastChangedValue = b;
                this._trigger("change", a, c)
            }
        },
        value: function(a) {
            if (arguments.length) this.options.value =
                this._trimAlignValue(a), this._refreshValue(), this._change(null, 0);
            else return this._value()
        },
        values: function(b, g) {
            var c;
            if (1 < arguments.length) this.options.values[b] = this._trimAlignValue(g), this._refreshValue(), this._change(null, b);
            else if (arguments.length)
                if (a.isArray(arguments[0])) {
                    var d = this.options.values;
                    var e = arguments[0];
                    for (c = 0; c < d.length; c += 1) d[c] = this._trimAlignValue(e[c]), this._change(null, c);
                    this._refreshValue()
                } else return this.options.values && this.options.values.length ? this._values(b) :
                    this.value();
            else return this._values()
        },
        _setOption: function(b, g) {
            var c, d = 0;
            "range" === b && !0 === this.options.range && ("min" === g ? (this.options.value = this._values(0), this.options.values = null) : "max" === g && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null));
            a.isArray(this.options.values) && (d = this.options.values.length);
            "disabled" === b && this.element.toggleClass("ui-state-disabled", !!g);
            this._super(b, g);
            switch (b) {
                case "orientation":
                    this._detectOrientation();
                    this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" +
                        this.orientation);
                    this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = !1;
                    break;
                case "values":
                    this._animateOff = !0;
                    this._refreshValue();
                    for (c = 0; c < d; c += 1) this._change(null, c);
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0;
                    this._refreshValue();
                    this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() {
            var a = this.options.value;
            return a = this._trimAlignValue(a)
        },
        _values: function(a) {
            var b;
            if (arguments.length) {
                var c = this.options.values[a];
                return c = this._trimAlignValue(c)
            }
            if (this.options.values && this.options.values.length) {
                c = this.options.values.slice();
                for (b = 0; b < c.length; b += 1) c[b] = this._trimAlignValue(c[b]);
                return c
            }
            return []
        },
        _trimAlignValue: function(a) {
            if (a <= this._valueMin()) return this._valueMin();
            if (a >= this._valueMax()) return this._valueMax();
            var b = 0 < this.options.step ? this.options.step : 1,
                c = (a - this._valueMin()) % b;
            a -= c;
            2 * Math.abs(c) >= b && (a += 0 < c ? b : -b);
            return parseFloat(a.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var b, g = this.options.range,
                f = this.options,
                d = this,
                e = this._animateOff ? !1 : f.animate,
                h = {};
            if (this.options.values && this.options.values.length) this.handles.each(function(c) {
                q = (d.values(c) - d._valueMin()) / (d._valueMax() - d._valueMin()) * 100;
                h["horizontal" === d.orientation ? "left" : "bottom"] = q + "%";
                a(this).stop(1, 1)[e ? "animate" : "css"](h, f.animate);
                if (!0 === d.options.range)
                    if ("horizontal" === d.orientation) {
                        if (0 ===
                            c) d.range.stop(1, 1)[e ? "animate" : "css"]({
                            left: q + "%"
                        }, f.animate);
                        if (1 === c) d.range[e ? "animate" : "css"]({
                            width: q - b + "%"
                        }, {
                            queue: !1,
                            duration: f.animate
                        })
                    } else {
                        if (0 === c) d.range.stop(1, 1)[e ? "animate" : "css"]({
                            bottom: q + "%"
                        }, f.animate);
                        if (1 === c) d.range[e ? "animate" : "css"]({
                            height: q - b + "%"
                        }, {
                            queue: !1,
                            duration: f.animate
                        })
                    }
                b = q
            });
            else {
                var l = this.value();
                var n = this._valueMin();
                var p = this._valueMax();
                var q = p !== n ? (l - n) / (p - n) * 100 : 0;
                h["horizontal" === this.orientation ? "left" : "bottom"] = q + "%";
                this.handle.stop(1, 1)[e ? "animate" :
                    "css"](h, f.animate);
                if ("min" === g && "horizontal" === this.orientation) this.range.stop(1, 1)[e ? "animate" : "css"]({
                    width: q + "%"
                }, f.animate);
                if ("max" === g && "horizontal" === this.orientation) this.range[e ? "animate" : "css"]({
                    width: 100 - q + "%"
                }, {
                    queue: !1,
                    duration: f.animate
                });
                if ("min" === g && "vertical" === this.orientation) this.range.stop(1, 1)[e ? "animate" : "css"]({
                    height: q + "%"
                }, f.animate);
                if ("max" === g && "vertical" === this.orientation) this.range[e ? "animate" : "css"]({
                    height: 100 - q + "%"
                }, {
                    queue: !1,
                    duration: f.animate
                })
            }
        },
        _handleEvents: {
            keydown: function(b) {
                var c,
                    f = a(b.target).data("ui-slider-handle-index");
                switch (b.keyCode) {
                    case a.ui.keyCode.HOME:
                    case a.ui.keyCode.END:
                    case a.ui.keyCode.PAGE_UP:
                    case a.ui.keyCode.PAGE_DOWN:
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.RIGHT:
                    case a.ui.keyCode.DOWN:
                    case a.ui.keyCode.LEFT:
                        if (b.preventDefault(), !this._keySliding) {
                            this._keySliding = !0;
                            a(b.target).addClass("ui-state-active");
                            var d = this._start(b, f);
                            if (!1 === d) return
                        }
                }
                var e = this.options.step;
                d = this.options.values && this.options.values.length ? c = this.values(f) : c = this.value();
                switch (b.keyCode) {
                    case a.ui.keyCode.HOME:
                        c = this._valueMin();
                        break;
                    case a.ui.keyCode.END:
                        c = this._valueMax();
                        break;
                    case a.ui.keyCode.PAGE_UP:
                        c = this._trimAlignValue(d + (this._valueMax() - this._valueMin()) / 5);
                        break;
                    case a.ui.keyCode.PAGE_DOWN:
                        c = this._trimAlignValue(d - (this._valueMax() - this._valueMin()) / 5);
                        break;
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.RIGHT:
                        if (d === this._valueMax()) return;
                        c = this._trimAlignValue(d + e);
                        break;
                    case a.ui.keyCode.DOWN:
                    case a.ui.keyCode.LEFT:
                        if (d === this._valueMin()) return;
                        c = this._trimAlignValue(d -
                            e)
                }
                this._slide(b, f, c)
            },
            click: function(a) {
                a.preventDefault()
            },
            keyup: function(b) {
                var c = a(b.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(b, c), this._change(b, c), a(b.target).removeClass("ui-state-active"))
            }
        }
    })
})(jQuery);
(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (this.length) {
                var c = a.data(this[0], "validator");
                if (c) return c;
                this.attr("novalidate", "novalidate");
                c = new a.validator(b, this[0]);
                a.data(this[0], "validator", c);
                c.settings.onsubmit && (b = this.find("input, button"), b.filter(".cancel").click(function() {
                    c.cancelSubmit = !0
                }), c.settings.submitHandler && b.filter(":submit").click(function() {
                    c.submitButton = this
                }), this.submit(function(b) {
                    function f() {
                        var b;
                        return c.settings.submitHandler ? (c.submitButton && (b = a("<input type='hidden'/>").attr("name",
                            c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm), c.submitButton && b.remove(), !1) : !0
                    }
                    c.settings.beforeValidate && c.settings.beforeValidate.call(c, c.currentForm);
                    c.settings.debug && b.preventDefault();
                    if (c.cancelSubmit) return c.cancelSubmit = !1, f();
                    if (c.form()) return c.pendingRequest ? (c.formSubmitted = !0, !1) : f();
                    c.focusInvalid();
                    return !1
                }));
                return c
            }
            b && b.debug && window.console && console.warn("nothing selected, can't validate, returning nothing")
        },
        valid: function() {
            if (a(this[0]).is("form")) return this.validate().form();
            var b = !0,
                c = a(this[0].form).validate();
            this.each(function() {
                b &= c.element(this)
            });
            return b
        },
        removeAttrs: function(b) {
            var c = {},
                g = this;
            a.each(b.split(/\s/), function(a, b) {
                c[b] = g.attr(b);
                g.removeAttr(b)
            });
            return c
        },
        rules: function(b, c) {
            var g = this[0];
            if (b) {
                var f = a.data(g.form, "validator").settings,
                    d = f.rules,
                    e = a.validator.staticRules(g);
                switch (b) {
                    case "add":
                        a.extend(e, a.validator.normalizeRule(c));
                        d[g.name] = e;
                        c.messages && (f.messages[g.name] =
                            a.extend(f.messages[g.name], c.messages));
                        break;
                    case "remove":
                        if (!c) return delete d[g.name], e;
                        var h = {};
                        a.each(c.split(/\s/), function(a, b) {
                            h[b] = e[b];
                            delete e[b]
                        });
                        return h
                }
            }
            g = a.validator.normalizeRules(a.extend({}, a.validator.metadataRules(g), a.validator.classRules(g), a.validator.attributeRules(g), a.validator.staticRules(g)), g);
            g.required && (f = g.required, delete g.required, g = a.extend({
                required: f
            }, g));
            return g
        }
    });
    a.extend(a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + b.value)
        },
        filled: function(b) {
            return !!a.trim("" +
                b.value)
        },
        unchecked: function(a) {
            return !a.checked
        }
    });
    a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b);
        this.currentForm = c;
        this.init()
    };
    a.validator.format = function(b, c) {
        if (1 == arguments.length) return function() {
            var c = a.makeArray(arguments);
            c.unshift(b);
            return a.validator.format.apply(this, c)
        };
        2 < arguments.length && c.constructor != Array && (c = a.makeArray(arguments).slice(1));
        c.constructor != Array && (c = [c]);
        a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), c)
        });
        return b
    };
    a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a, c) {
                this.lastActive = a;
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide())
            },
            onfocusout: function(a,
                c) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(a, c) {
                (a.name in this.submitted || a == this.lastElement) && this.element(a)
            },
            onclick: function(a, c) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(b, c, g) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(g) : a(b).addClass(c).removeClass(g)
            },
            unhighlight: function(b, c, g) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(g) :
                    a(b).removeClass(c).addClass(g)
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
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Please enter a value with a valid extension.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    var c =
                        a.data(this[0].form, "validator"),
                        e = "on" + b.type.replace(/^validate/, "");
                    c.settings[e] && c.settings[e].call(c, this[0], b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm);
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var c = this.groups = {};
                a.each(this.settings.groups,
                    function(b, d) {
                        a.each(d.split(/\s/), function(a, d) {
                            c[d] = b
                        })
                    });
                var g = this.settings.rules;
                a.each(g, function(b, c) {
                    g[b] = a.validator.normalizeRule(c)
                });
                a(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option",
                    "click", b);
                this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                this.checkForm();
                a.extend(this.submitted, this.errorMap);
                this.invalid = a.extend({}, this.errorMap);
                this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]);
                this.showErrors();
                return this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, c = this.currentElements = this.elements(); c[a]; a++) this.check(c[a]);
                return this.valid()
            },
            element: function(b) {
                this.lastElement =
                    b = this.validationTargetFor(this.clean(b));
                this.prepareElement(b);
                this.currentElements = a(b);
                var c = this.check(b);
                c ? delete this.invalid[b.name] : this.invalid[b.name] = !0;
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers));
                this.showErrors();
                return c
            },
            showErrors: function(b) {
                if (b) {
                    a.extend(this.errorMap, b);
                    this.errorList = [];
                    for (var c in b) this.errorList.push({
                        message: b[c],
                        element: this.findByName(c)[0]
                    });
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ?
                    this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b = 0,
                    g;
                for (g in a) b++;
                return b
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 ==
                    this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 == a.grep(this.errorList, function(a) {
                    return a.element.name == b.name
                }).length && b
            },
            elements: function() {
                var b = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    !this.name &&
                        b.settings.debug && window.console && console.error("%o has no name assigned", this);
                    return this.name in c || !b.objectLength(a(this).rules()) ? !1 : c[this.name] = !0
                })
            },
            clean: function(b) {
                return a(b)[0]
            },
            errors: function() {
                return a(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = a([]);
                this.toHide = a([]);
                this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset();
                this.toHide = this.errorsFor(a)
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c = a(b).rules(),
                    g = !1,
                    f;
                for (f in c) {
                    var d = {
                        method: f,
                        parameters: c[f]
                    };
                    try {
                        var e = a.validator.methods[f].call(this, b.value.replace(/\r/g, ""), b, d.parameters);
                        if ("dependency-mismatch" == e) g = !0;
                        else {
                            g = !1;
                            if ("pending" == e) {
                                this.toHide = this.toHide.not(this.errorsFor(b));
                                return
                            }
                            if (!e) return this.formatAndAdd(b, d), !1
                        }
                    } catch (h) {
                        throw this.settings.debug && window.console && console.log("exception occured when checking element " +
                            b.id + ", check the '" + d.method + "' method", h), h;
                    }
                }
                if (!g) return this.objectLength(c) && this.successList.push(b), !0
            },
            customMetaMessage: function(b, c) {
                if (a.metadata) {
                    var g = this.settings.meta ? a(b).metadata()[this.settings.meta] : a(b).metadata();
                    return g && g.messages && g.messages[c]
                }
            },
            customMessage: function(a, c) {
                var b = this.settings.messages[a];
                return b && (b.constructor == String ? b : b[c])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a]
            },
            defaultMessage: function(b,
                c) {
                return this.findDefined(this.customMessage(b.name, c), this.customMetaMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            },
            formatAndAdd: function(a, c) {
                var b = this.defaultMessage(a, c.method),
                    f = /\$?\{(\d+)\}/g;
                "function" == typeof b ? b = b.call(this, c.parameters, a) : f.test(b) && (b = jQuery.format(b.replace(f, "{$1}"), c.parameters));
                this.errorList.push({
                    message: b,
                    element: a
                });
                this.errorMap[a.name] = b;
                this.submitted[a.name] =
                    b
            },
            addWrapper: function(a) {
                this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper)));
                return a
            },
            defaultShowErrors: function() {
                for (var a = 0; this.errorList[a]; a++) {
                    var c = this.errorList[a];
                    this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass);
                    this.showLabel(c.element, c.message)
                }
                this.errorList.length && (this.toShow = this.toShow.add(this.containers));
                if (this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, c = this.validElements(); c[a]; a++) this.settings.unhighlight.call(this, c[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
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
                var g = this.errorsFor(b);
                g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                    g.attr("generated") && g.html(c)) : (g = a("<" + this.settings.errorElement + "/>").attr({
                    "for": this.idOrName(b),
                    generated: !0
                }).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (g = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(g).length || (this.settings.errorPlacement ? this.settings.errorPlacement(g, a(b)) : g.insertAfter(b)));
                !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g));
                this.toShow = this.toShow.add(g)
            },
            errorsFor: function(b) {
                var c = this.idOrName(b);
                return this.errors().filter(function() {
                    return a(this).attr("for") == c
                })
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(a) {
                this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]);
                return a
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(b) {
                var c = this.currentForm;
                return a(document.getElementsByName(b)).map(function(a,
                    f) {
                    return f.form == c && f.name == b && f || null
                })
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
            depend: function(a, c) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, c) : !0
            },
            dependTypes: {
                "boolean": function(a, c) {
                    return a
                },
                string: function(b, c) {
                    return !!a(b, c.form).length
                },
                "function": function(a, c) {
                    return a(c)
                }
            },
            optional: function(b) {
                return !a.validator.methods.required.call(this,
                    a.trim(b.value), b) && "dependency-mismatch"
            },
            startRequest: function(a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
            },
            stopRequest: function(b, c) {
                this.pendingRequest--;
                0 > this.pendingRequest && (this.pendingRequest = 0);
                delete this.pending[b.name];
                c && 0 == this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 == this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, "remote")
                })
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
            dateDE: {
                dateDE: !0
            },
            number: {
                number: !0
            },
            numberDE: {
                numberDE: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor == String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
            var c = {};
            (b = a(b).attr("class")) && a.each(b.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            });
            return c
        },
        attributeRules: function(b) {
            var c = {};
            b = a(b);
            for (var g in a.validator.methods) {
                var f;
                (f = "required" === g && "function" === typeof a.fn.prop ? b.prop(g) : b.attr(g)) ? c[g] = f: b[0].getAttribute("type") === g && (c[g] = !0)
            }
            c.maxlength && /-1|2147483647|524288/.test(c.maxlength) && delete c.maxlength;
            return c
        },
        metadataRules: function(b) {
            if (!a.metadata) return {};
            var c = a.data(b.form,
                "validator").settings.meta;
            return c ? a(b).metadata()[c] : a(b).metadata()
        },
        staticRules: function(b) {
            var c = {},
                g = a.data(b.form, "validator");
            g.settings.rules && (c = a.validator.normalizeRule(g.settings.rules[b.name]) || {});
            return c
        },
        normalizeRules: function(b, c) {
            a.each(b, function(g, f) {
                if (!1 === f) delete b[g];
                else if (f.param || f.depends) {
                    var d = !0;
                    switch (typeof f.depends) {
                        case "string":
                            d = !!a(f.depends, c.form).length;
                            break;
                        case "function":
                            d = f.depends.call(c, c)
                    }
                    d ? b[g] = void 0 !== f.param ? f.param : !0 : delete b[g]
                }
            });
            a.each(b,
                function(g, f) {
                    b[g] = a.isFunction(f) ? f(c) : f
                });
            a.each(["minlength", "maxlength", "min", "max"], function() {
                b[this] && (b[this] = Number(b[this]))
            });
            a.each(["rangelength", "range"], function() {
                b[this] && (b[this] = [Number(b[this][0]), Number(b[this][1])])
            });
            a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength));
            b.messages && delete b.messages;
            return b
        },
        normalizeRule: function(b) {
            if ("string" ==
                typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0
                });
                b = c
            }
            return b
        },
        addMethod: function(b, c, g) {
            a.validator.methods[b] = c;
            a.validator.messages[b] = void 0 != g ? g : a.validator.messages[b];
            3 > c.length && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function(b, c, g) {
                if (!this.depend(g, c)) return "dependency-mismatch";
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return (b = a(c).val()) && 0 < b.length;
                    case "input":
                        if (this.checkable(c)) return 0 < this.getLength(b, c);
                    default:
                        return 0 <
                            a.trim(b).length
                }
            },
            remote: function(b, c, g) {
                if (this.optional(c)) return "dependency-mismatch";
                var f = this.previousValue(c);
                this.settings.messages[c.name] || (this.settings.messages[c.name] = {});
                f.originalMessage = this.settings.messages[c.name].remote;
                this.settings.messages[c.name].remote = f.message;
                g = "string" == typeof g && {
                    url: g
                } || g;
                if (this.pending[c.name]) return "pending";
                if (f.old === b) return f.valid;
                f.old = b;
                var d = this;
                this.startRequest(c);
                var e = {};
                e[c.name] = b;
                a.ajax(a.extend(!0, {
                    url: g,
                    mode: "abort",
                    port: "validate" +
                        c.name,
                    dataType: "json",
                    data: e,
                    success: function(e) {
                        d.settings.messages[c.name].remote = f.originalMessage;
                        var h = !0 === e.status;
                        if (h) {
                            var g = d.formSubmitted;
                            d.prepareElement(c);
                            d.formSubmitted = g;
                            d.successList.push(c);
                            d.showErrors()
                        } else g = {}, e = e.error || d.defaultMessage(c, "remote"), g[c.name] = f.message = a.isFunction(e) ? e(b) : e, d.showErrors(g);
                        f.valid = h;
                        d.stopRequest(c, h)
                    }
                }, g));
                return "pending"
            },
            minlength: function(b, c, g) {
                return this.optional(c) || this.getLength(a.trim(b), c) >= g
            },
            maxlength: function(b, c, g) {
                return this.optional(c) ||
                    this.getLength(a.trim(b), c) <= g
            },
            rangelength: function(b, c, g) {
                b = this.getLength(a.trim(b), c);
                return this.optional(c) || b >= g[0] && b <= g[1]
            },
            min: function(a, c, g) {
                return this.optional(c) || a >= g
            },
            max: function(a, c, g) {
                return this.optional(c) || a <= g
            },
            range: function(a, c, g) {
                return this.optional(c) || a >= g[0] && a <= g[1]
            },
            email: function(a, c) {
                return this.optional(c) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)
            },
            url: function(a, c) {
                return this.optional(c) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            },
            date: function(a, c) {
                return this.optional(c) || !/Invalid|NaN/.test(new Date(a))
            },
            dateISO: function(a, c) {
                return this.optional(c) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)
            },
            number: function(a, c) {
                return this.optional(c) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)
            },
            digits: function(a, c) {
                return this.optional(c) || /^\d+$/.test(a)
            },
            creditcard: function(a, c) {
                if (this.optional(c)) return "dependency-mismatch";
                if (/[^0-9 -]+/.test(a)) return !1;
                var b = 0,
                    f = !1;
                a = a.replace(/\D/g, "");
                for (var d = a.length - 1; 0 <= d; d--) {
                    var e =
                        a.charAt(d);
                    e = parseInt(e, 10);
                    f && 9 < (e *= 2) && (e -= 9);
                    b += e;
                    f = !f
                }
                return 0 == b % 10
            },
            accept: function(a, c, g) {
                g = "string" == typeof g ? g.replace(/,/g, "|") : "png|jpe?g|gif";
                return this.optional(c) || a.match(new RegExp(".(" + g + ")$", "i"))
            },
            equalTo: function(b, c, g) {
                g = a(g).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    a(c).valid()
                });
                return b == g.val()
            }
        }
    });
    a.format = a.validator.format
})(jQuery);
(function(a) {
    var b = {};
    if (a.ajaxPrefilter) a.ajaxPrefilter(function(a, c, d) {
        c = a.port;
        "abort" == a.mode && (b[c] && b[c].abort(), b[c] = d)
    });
    else {
        var c = a.ajax;
        a.ajax = function(g) {
            var f = ("port" in g ? g : a.ajaxSettings).port;
            return "abort" == ("mode" in g ? g : a.ajaxSettings).mode ? (b[f] && b[f].abort(), b[f] = c.apply(this, arguments)) : c.apply(this, arguments)
        }
    }
})(jQuery);
(function(a) {
    jQuery.event.special.focusin || jQuery.event.special.focusout || !document.addEventListener || a.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, c) {
        function g(b) {
            b = a.event.fix(b);
            b.type = c;
            return a.event.handle.call(this, b)
        }
        a.event.special[c] = {
            setup: function() {
                this.addEventListener(b, g, !0)
            },
            teardown: function() {
                this.removeEventListener(b, g, !0)
            },
            handler: function(b) {
                arguments[0] = a.event.fix(b);
                arguments[0].type = c;
                return a.event.handle.apply(this, arguments)
            }
        }
    });
    a.extend(a.fn, {
        validateDelegate: function(b,
            c, g) {
            return this.bind(c, function(c) {
                var d = a(c.target);
                if (d.is(b)) return g.apply(d, arguments)
            })
        }
    })
})(jQuery);
(function(a) {
    "function" === typeof define && define.amd ? define(["jquery.cookie"], a) : a(jQuery)
})(function(a) {
    function b(a) {
        return f.raw ? a : decodeURIComponent(a.replace(g, " "))
    }

    function c(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        a = b(a);
        try {
            return f.json ? JSON.parse(a) : a
        } catch (e) {}
    }
    var g = /\+/g,
        f = a.cookie = function(d, e, h) {
            if (void 0 !== e) {
                h = a.extend({}, f.defaults, h);
                if ("number" === typeof h.expires) {
                    var g = h.expires,
                        n = h.expires = new Date;
                    n.setDate(n.getDate() + g)
                }
                e = f.json ?
                    JSON.stringify(e) : String(e);
                return document.cookie = [f.raw ? d : encodeURIComponent(d), "=", f.raw ? e : encodeURIComponent(e), h.expires ? "; expires=" + h.expires.toUTCString() : "", h.path ? "; path=" + h.path : "", h.domain ? "; domain=" + h.domain : "", h.secure ? "; secure" : ""].join("")
            }
            e = document.cookie.split("; ");
            h = d ? void 0 : {};
            g = 0;
            for (n = e.length; g < n; g++) {
                var p = e[g].split("="),
                    q = b(p.shift()),
                    p = p.join("=");
                if (d && d === q) {
                    h = c(p);
                    break
                }
                d || (h[q] = c(p))
            }
            return h
        };
    f.defaults = {};
    a.removeCookie = function(b, c) {
        return void 0 !== a.cookie(b) ?
            (a.cookie(b, "", a.extend({}, c, {
                expires: -1
            })), !0) : !1
    }
});
(function() {
    var a = [],
        b = function(b, g) {
            var c = !1,
                d = !1,
                e;
            this._bindBody = function() {
                d || (d = !0, $("body").bind("click", function() {
                    this.isOpen() && this.close()
                }.of(this)))
            };
            this._bindOpen = function() {
                b.find(".rm-select-link, .rm-select-marker").bind("click", function() {
                    this.isOpen() ? this.close() : this.open();
                    return !1
                }.of(this))
            };
            this._unbindOpen = function() {
                b.children(".rm-select-link, .rm-select-marker").unbind("click")
            };
            this._bindSelectItem = function() {
                b.find("li").bind("click", function(a) {
                    this.select($(a.currentTarget));
                    return !1
                }.of(this)).last().addClass("last")
            };
            this._unbindSelectItem = function() {
                b.find("li").unbind("click")
            };
            this._bind = function() {
                this._bindOpen();
                this._bindSelectItem();
                this._bindBody();
                this._findInput()
            };
            this._unbind = function() {
                this._unbindOpen();
                this._unbindSelectItem()
            };
            this._findInput = function() {
                e = b.find('input[type="hidden"]')
            };
            this.isOpen = function() {
                return c
            };
            this._getList = function() {
                return b.children("ul")
            };
            this.open = function() {
                $.each(a, function(a, b) {
                    b.isOpen() && b.close()
                });
                this._getList().show();
                b.addClass("is-current");
                c = !0
            };
            this.refresh = function() {
                this._unbindOpen();
                this._bindOpen();
                this._unbindSelectItem();
                this._bindSelectItem()
            };
            this.updateInput = function(a) {
                void 0 !== e[0] && e.val(a.attr("data-val"))
            };
            this.select = function(a, c) {
                c = $.extend({
                    silent: !1
                }, c);
                this._unbind();
                var d = a.children("a").clone();
                d.addClass("rm-select-link display-link");
                d.setTo(b.children(".rm-select-link"));
                this._bind();
                this.close();
                this.updateInput(d);
                void 0 === g || c.silent || g(d);
                return !0
            };
            this.close = function() {
                this._getList().hide();
                b.removeClass("is-current");
                c = !1
            };
            this._bind();
            a.push(this)
        };
    jQuery.fn.rmSelect = function(a) {
        var c = $(this);
        if (void 0 === c.data("rmSelect")) {
            if (1 < c.length) {
                var f = [];
                $.each(c, function(c, e) {
                    f.push(new b($(e), a))
                }.of(this))
            } else f = new b($(this), a);
            c.data("rmSelect", f)
        }
        return c.data("rmSelect")
    }
})();
(function() {
    var a = function(a, c) {
        var b = this,
            f = void 0,
            d = void 0,
            e = void 0,
            h = void 0,
            l = void 0,
            n = void 0,
            p = void 0,
            q = void 0,
            m = void 0,
            u = void 0,
            v = 0,
            x = 0,
            w = 0,
            E = 0,
            y = 0,
            H = 0,
            J = 0,
            r = 0,
            B = !1,
            Y = !1,
            I = $.extend({
                slideTime: 400,
                slideItems: 3,
                eClick: !0,
                vertical: !1,
                autoSlide: !1,
                autoSlideTime: 1E3,
                distanceBetweenItems: 0
            }, c || {});
        this._checkOption = function() {
            1 > I.slideItems && (I.slideItems = 1)
        };
        this.next = function() {
            y + v - I.distanceBetweenItems <= w && (B ? (v += x, this._changePosition()) : (p.append(q.clone()), q = p.children("div"), this._setWidth(),
                B = !0));
            v -= E;
            this._animate()
        };
        this.prev = function() {
            0 <= v && (v = -x, Y || (p.prepend(m.clone()), q = p.children("div"), this._setWidth(), Y = !0), this._changePosition());
            v += E;
            this._animate()
        };
        this.showNext = function() {
            this.next();
            this._itemClick(q.eq(++H))
        };
        this.showPrev = function() {
            this.prev();
            this._itemClick(q.eq(--H))
        };
        this._animate = function() {
            this._unbind();
            p.animate(I.vertical ? {
                top: v
            } : {
                left: v
            }, I.slideTime, null, function() {
                b._bind()
            })
        };
        this._changePosition = function() {
            p.css(I.vertical ? {
                top: v
            } : {
                left: v
            })
        };
        this._itemClick =
            function(a) {
                u && u.removeClass("current");
                a.addClass("current");
                H = a.index();
                u = a;
                a = a.attr("data-src");
                h.attr("src", a)
            };
        this._findElements = function() {
            f = a.find(".thumb-holder");
            d = a.find(".rm-next");
            e = a.find(".rm-prev");
            p = a.find(".thumbnails");
            m = q = p.children("div");
            I.eClick && (h = a.find(".gallery-item img"), l = a.find(".nextShow"), n = a.find(".prevShow"), this._itemClick(q.eq(0)))
        };
        this._getStyleWidth = function(a, b) {
            var c = parseInt(a.css(b), 10);
            return isNaN(c) ? 0 : c
        };
        this._getWidth = function(a) {
            return I.vertical ? a.height() +
                this._getStyleWidth(a, "padding-top") + this._getStyleWidth(a, "padding-bottom") + this._getStyleWidth(a, "margin-top") + this._getStyleWidth(a, "margin-bottom") + this._getStyleWidth(a, "borderTopWidth") + this._getStyleWidth(a, "borderBottomWidth") : a.width() + this._getStyleWidth(a, "padding-left") + this._getStyleWidth(a, "padding-right") + this._getStyleWidth(a, "margin-left") + this._getStyleWidth(a, "margin-right") + this._getStyleWidth(a, "borderLeftWidth") + this._getStyleWidth(a, "borderRightWidth")
        };
        this._setWidth = function() {
            var a =
                this._getWidth(q);
            w = this._getWidth(f);
            J = Math.ceil(w / a);
            J < I.slideItems && (I.slideItems = J);
            E = a * I.slideItems;
            this._getStyleWidth(q, "margin-right");
            y = a * q.length;
            I.vertical ? (p.width("auto"), p.height(y)) : p.width(y)
        };
        this._bind = function() {
            q.length > J && (d.bind("click", function() {
                b.next()
            }), e.bind("click", function() {
                b.prev()
            }), I.autoSlide && this._startInterval())
        };
        this._startInterval = function() {
            r = setInterval(function() {
                b.next()
            }, I.autoSlideTime)
        };
        this._bindClick = function() {
            p.children(".thumb-item").not('[data-gallery="ignore"]').bind("click",
                function(a) {
                    b._itemClick($(a.currentTarget));
                    return !1
                });
            l.bind("click", function() {
                b.showNext()
            });
            n.bind("click", function() {
                b.showPrev()
            })
        };
        this._unbind = function() {
            d.unbind("click");
            e.unbind("click");
            clearInterval(r)
        };
        this.refresh = function() {
            this._checkOption();
            this._findElements();
            this._setWidth();
            this._bind()
        };
        this.refresh();
        I.eClick && this._bindClick();
        x = this._getWidth(p)
    };
    jQuery.fn.cyclicGallery = function(b) {
        var c = $(this);
        return 1 < c.length ? ($.each(c, function(c, f) {
            new a($(f), b)
        }), c) : new a($(this),
            b)
    }
})();
(function() {
    var a = function(a, c) {
        var b = void 0,
            f = void 0,
            d = void 0,
            e = void 0,
            h = void 0,
            l = void 0,
            n = void 0,
            p = void 0,
            q = void 0,
            m = void 0,
            u = 0,
            v = 0,
            x = 0,
            w = 0,
            E = 0,
            y = 0,
            H = 0,
            J = 0,
            r = 0;
        c = $.extend({
            slideTime: 400,
            slideItems: 3,
            eClick: !0,
            vertical: !1,
            autoWidth: !1,
            loadPhotoCallback: void 0,
            onClickCallback: void 0
        }, c || {});
        this._checkOption = function() {
            1 > c.slideItems && (c.slideItems = 1)
        };
        this.goToSlide = function(a) {};
        this.next = function() {
            this.refreshParams();
            w + u > v && (u -= x, w + u + E < v && (u = -1 * (w - v) + E), this._animate())
        };
        this.prev = function() {
            this.refreshParams();
            0 >
                u && (u += x, 0 < u && (u = 0), this._animate())
        };
        this.showNext = function() {
            ++y;
            y > J - 1 ? --y : (y - H >= r && this.next(), this._itemClick(q.eq(y)))
        };
        this.showPrev = function() {
            --y;
            0 > y ? ++y : ((1 > y - H && 0 !== H || 0 == y) && this.prev(), this._itemClick(q.eq(y)))
        };
        this.refreshParams = function() {
            this._checkOption();
            this._findElements();
            this._setImgCounter();
            this._setWidth()
        };
        this._animate = function() {
            this._unbind();
            H = -1 * Math.ceil(u / x) * c.slideItems;
            c.vertical ? p.animate({
                top: u
            }, c.slideTime, null, function() {
                this._bind()
            }.of(this)) : p.animate({
                    left: u
                },
                c.slideTime, null,
                function() {
                    this._bind()
                }.of(this))
        };
        this._itemClick = function(a) {
            m && m.removeClass("current");
            a.addClass("current");
            y = a.index();
            m = a;
            this._loadPhoto(a.attr("data-src"), h, function(a) {
                h.attr("src", a);
                this._setCurrentCounter()
            }.of(this))
        };
        this._findElements = function() {
            b = a.find(".thumb-holder");
            d = a.find(".rm-next");
            e = a.find(".rm-prev");
            p = a.find(".thumbnails");
            q = p.children(".thumb-item");
            f = a.find(".rm-gallery-photo-counter");
            c.eClick && (h = a.find(".gallery-item img"), l = a.find(".rm-next-image"),
                n = a.find(".rm-prev-image"), this._itemClick(q.eq(0)))
        };
        this._setImgCounter = function() {
            f.children(".rm-gallery-photo-all").text(q.length)
        };
        this._setCurrentCounter = function() {
            f.children(".rm-gallery-photo-current").text(y + 1)
        };
        this._getStyleWidth = function(a, b) {
            var c = parseInt(a.css(b), 10);
            return isNaN(c) ? 0 : c
        };
        this._getWidth = function(a) {
            return c.vertical ? a.height() + this._getStyleWidth(a, "padding-top") + this._getStyleWidth(a, "padding-bottom") + this._getStyleWidth(a, "margin-top") + this._getStyleWidth(a, "margin-bottom") +
                this._getStyleWidth(a, "borderTopWidth") + this._getStyleWidth(a, "borderBottomWidth") : a.width() + this._getStyleWidth(a, "padding-left") + this._getStyleWidth(a, "padding-right") + this._getStyleWidth(a, "margin-left") + this._getStyleWidth(a, "margin-right") + this._getStyleWidth(a, "borderLeftWidth") + this._getStyleWidth(a, "borderRightWidth")
        };
        this._setWidth = function() {
            var a = Math.ceil(this._getWidth(q));
            J = q.length;
            v = this._getWidth(b);
            r = Math.ceil(v / a);
            r < c.slideItems && (c.slideItems = r);
            x = a * c.slideItems;
            E = this._getStyleWidth(q,
                "margin-right");
            w = a * q.length;
            c.vertical ? (p.width("auto"), p.height(w)) : p.width(w);
            c.autoWidth ? (p.width("auto"), p.height("auto")) : p.width(w)
        };
        this._bind = function() {
            d.bind("click", function() {
                this.next()
            }.of(this));
            e.bind("click", function() {
                this.prev()
            }.of(this))
        };
        this._bindClick = function() {
            p.children(".thumb-item").bind("click", function(a) {
                this._triggerClick();
                this._itemClick($(a.currentTarget))
            }.of(this));
            l.bind("click", function(a) {
                this._triggerClick();
                this.showNext()
            }.of(this));
            n.bind("click", function(a) {
                this._triggerClick();
                this.showPrev()
            }.of(this))
        };
        this._loadPhoto = function(a, b, d) {
            c.loadPhotoCallback ? c.loadPhotoCallback(a, b, d) : d(a)
        };
        this._triggerClick = function() {
            console.log(c);
            if (c.onClickCallback) c.onClickCallback()
        };
        this._unbind = function() {
            d.unbind("click");
            e.unbind("click")
        };
        this.refreshParams();
        this._bind();
        c.eClick && this._bindClick()
    };
    jQuery.fn.rmGallery = function(b) {
        var c = $(this);
        if (c.data("rm-gallery") instanceof a) return c.data("rm-gallery");
        1 < c.length ? $.each(c, function(c, f) {
            $(f).data("rm-gallery", new a($(this),
                b))
        }.of(this)) : c.data("rm-gallery", new a($(this), b));
        return c
    }
})();
(function(a) {
    a.fn.slides = function(b) {
        b = a.extend({}, a.fn.slides.option, b);
        return this.each(function() {
            function c(c, g, l) {
                if (!E && w) {
                    E = !0;
                    b.animationStart(x + 1);
                    switch (c) {
                        case "next":
                            u = x;
                            m = x + 1;
                            m = e === m ? 0 : m;
                            H = 2 * h;
                            c = 2 * -h;
                            x = m;
                            break;
                        case "prev":
                            u = x;
                            m = x - 1;
                            m = -1 === m ? e - 1 : m;
                            c = H = 0;
                            x = m;
                            break;
                        case "pagination":
                            m = parseInt(l, 10), u = a("." + b.paginationClass + " li." + b.currentClass + " a", f).attr("href").match("[^#/]+$"), m > u ? (H = 2 * h, c = 2 * -h) : c = H = 0, x = m
                    }
                    "fade" === g ? b.crossfade ? d.children(":eq(" + m + ")", f).css({
                        zIndex: 10
                    }).fadeIn(b.fadeSpeed,
                        b.fadeEasing,
                        function() {
                            b.autoHeight ? d.animate({
                                height: d.children(":eq(" + m + ")", f).outerHeight()
                            }, b.autoHeightSpeed, function() {
                                d.children(":eq(" + u + ")", f).css({
                                    display: "none",
                                    zIndex: 0
                                });
                                d.children(":eq(" + m + ")", f).css({
                                    zIndex: 0
                                });
                                b.animationComplete(m + 1);
                                E = !1
                            }) : (d.children(":eq(" + u + ")", f).css({
                                display: "none",
                                zIndex: 0
                            }), d.children(":eq(" + m + ")", f).css({
                                zIndex: 0
                            }), b.animationComplete(m + 1), E = !1)
                        }) : d.children(":eq(" + u + ")", f).fadeOut(b.fadeSpeed, b.fadeEasing, function() {
                        b.autoHeight ? d.animate({
                            height: d.children(":eq(" +
                                m + ")", f).outerHeight()
                        }, b.autoHeightSpeed, function() {
                            d.children(":eq(" + m + ")", f).fadeIn(b.fadeSpeed, b.fadeEasing)
                        }) : d.children(":eq(" + m + ")", f).fadeIn(b.fadeSpeed, b.fadeEasing, function() {
                            a.browser.msie && a(this).get(0).style.removeAttribute("filter")
                        });
                        b.animationComplete(m + 1);
                        E = !1
                    }) : (d.children(":eq(" + m + ")").css({
                        left: H,
                        display: "block"
                    }), b.autoHeight ? d.animate({
                        left: c,
                        height: d.children(":eq(" + m + ")").outerHeight()
                    }, b.slideSpeed, b.slideEasing, function() {
                        d.css({
                            left: -h
                        });
                        d.children(":eq(" + m + ")").css({
                            left: h,
                            zIndex: 5
                        });
                        d.children(":eq(" + u + ")").css({
                            left: h,
                            display: "none",
                            zIndex: 0
                        });
                        b.animationComplete(m + 1);
                        E = !1
                    }) : d.animate({
                        left: c
                    }, b.slideSpeed, b.slideEasing, function() {
                        d.css({
                            left: -h
                        });
                        d.children(":eq(" + m + ")").css({
                            left: h,
                            zIndex: 5
                        });
                        d.children(":eq(" + u + ")").css({
                            left: h,
                            display: "none",
                            zIndex: 0
                        });
                        b.animationComplete(m + 1);
                        E = !1
                    }));
                    b.pagination && (a("." + b.paginationClass + " li." + b.currentClass, f).removeClass(b.currentClass), a("." + b.paginationClass + " li:eq(" + m + ")", f).addClass(b.currentClass))
                }
            }

            function g() {
                b.pause ?
                    (clearTimeout(f.data("pause")), clearInterval(f.data("interval")), J = setTimeout(function() {
                        clearTimeout(f.data("pause"));
                        B = setInterval(function() {
                            c("next", p)
                        }, b.play);
                        f.data("interval", B)
                    }, b.pause), f.data("pause", J)) : clearInterval(f.data("interval"))
            }
            a("." + b.container, a(this)).children().wrapAll('<div class="slides_control"/>');
            var f = a(this),
                d = a(".slides_control", f),
                e = d.children().size(),
                h = d.children().outerWidth(),
                l = d.children().outerHeight(),
                n = b.start - 1,
                p = 0 > b.effect.indexOf(",") ? b.effect : b.effect.replace(" ",
                    "").split(",")[0],
                q = 0 > b.effect.indexOf(",") ? p : b.effect.replace(" ", "").split(",")[1],
                m = 0,
                u = 0,
                v = 0,
                x = 0,
                w, E, y, H, J;
            if (2 > e) return a("." + b.container, a(this)).fadeIn(b.fadeSpeed, b.fadeEasing, function() {
                w = !0;
                b.slidesLoaded()
            }), a("." + b.next + ", ." + b.prev).fadeOut(0), !1;
            if (!(2 > e)) {
                0 > n && (n = 0);
                n > e && (n = e - 1);
                b.start && (x = n);
                b.randomize && d.randomize();
                a("." + b.container, f).css({
                    overflow: "hidden",
                    position: "relative"
                });
                d.children().css({
                    position: "absolute",
                    top: 0,
                    left: d.children().outerWidth(),
                    zIndex: 0,
                    display: "none"
                });
                d.css({
                    position: "relative",
                    width: 3 * h,
                    height: l,
                    left: -h
                });
                a("." + b.container, f).css({
                    display: "block"
                });
                b.autoHeight && (d.children().css({
                    height: "auto"
                }), d.animate({
                    height: d.children(":eq(" + n + ")").outerHeight()
                }, b.autoHeightSpeed));
                if (b.preload && d.find("img:eq(" + n + ")").length) {
                    a("." + b.container, f).css({
                        background: "url(" + b.preloadImage + ") no-repeat 50% 50%"
                    });
                    l = d.find("img:eq(" + n + ")").attr("src") + "?" + (new Date).getTime();
                    var r = "slides_control" != a("img", f).parent().attr("class") ? d.children(":eq(0)")[0].tagName.toLowerCase() :
                        d.find("img:eq(" + n + ")");
                    d.find("img:eq(" + n + ")").attr("src", l).load(function() {
                        d.find(r + ":eq(" + n + ")").fadeIn(b.fadeSpeed, b.fadeEasing, function() {
                            a(this).css({
                                zIndex: 5
                            });
                            a("." + b.container, f).css({
                                background: ""
                            });
                            w = !0;
                            b.slidesLoaded()
                        })
                    })
                } else d.children(":eq(" + n + ")").fadeIn(b.fadeSpeed, b.fadeEasing, function() {
                    w = !0;
                    b.slidesLoaded()
                });
                b.bigTarget && (d.children().css({
                    cursor: "pointer"
                }), d.children().click(function() {
                    c("next", p);
                    return !1
                }));
                b.hoverPause && b.play && (d.bind("mouseover", function() {
                        clearInterval(f.data("interval"))
                    }),
                    d.bind("mouseleave", function() {
                        g()
                    }));
                b.generateNextPrev && (a("." + b.container, f).after('<a href="#" class="' + b.prev + '">Prev</a>'), a("." + b.prev, f).after('<a href="#" class="' + b.next + '">Next</a>'));
                a("." + b.next, f).click(function(a) {
                    a.preventDefault();
                    b.play && g();
                    c("next", p)
                });
                a("." + b.prev, f).click(function(a) {
                    a.preventDefault();
                    b.play && g();
                    c("prev", p)
                });
                b.generatePagination ? (b.prependPagination ? f.prepend("<ul class=" + b.paginationClass + "></ul>") : f.append("<ul class=" + b.paginationClass + "></ul>"), d.children().each(function() {
                    a("." +
                        b.paginationClass, f).append('<li><a href="#' + v + '">' + (v + 1) + "</a></li>");
                    v++
                })) : a("." + b.paginationClass + " li a", f).each(function() {
                    a(this).attr("href", "#" + v);
                    v++
                });
                a("." + b.paginationClass + " li:eq(" + n + ")", f).addClass(b.currentClass);
                a("." + b.paginationClass + " li a", f).click(function() {
                    b.play && g();
                    y = a(this).attr("href").match("[^#/]+$");
                    x != y && c("pagination", q, y);
                    return !1
                });
                a("a.link", f).click(function() {
                    b.play && g();
                    y = a(this).attr("href").match("[^#/]+$") - 1;
                    x != y && c("pagination", q, y);
                    return !1
                });
                if (b.play) {
                    var B =
                        setInterval(function() {
                            c("next", p)
                        }, b.play);
                    f.data("interval", B)
                }
            }
        })
    };
    a.fn.slides.option = {
        preload: !1,
        preloadImage: "/slides/loading.gif",
        container: "slides_container",
        generateNextPrev: !1,
        next: "next",
        prev: "prev",
        pagination: !0,
        generatePagination: !1,
        prependPagination: !1,
        paginationClass: "pagination",
        currentClass: "current",
        fadeSpeed: 350,
        fadeEasing: "",
        slideSpeed: 350,
        slideEasing: "",
        start: 1,
        effect: "slide",
        crossfade: !1,
        randomize: !1,
        play: 0,
        pause: 0,
        hoverPause: !1,
        autoHeight: !1,
        autoHeightSpeed: 350,
        bigTarget: !1,
        animationStart: function() {},
        animationComplete: function() {},
        slidesLoaded: function() {}
    };
    a.fn.randomize = function(b) {
        function c() {
            return Math.round(Math.random()) - .5
        }
        return a(this).each(function() {
            var g = a(this),
                f = g.children(),
                d = f.length;
            if (1 < d) {
                f.hide();
                var e = [];
                for (i = 0; i < d; i++) e[e.length] = i;
                e = e.sort(c);
                a.each(e, function(a, c) {
                    var d = f.eq(c),
                        e = d.clone(!0);
                    e.show().appendTo(g);
                    void 0 !== b && b(d, e);
                    d.remove()
                })
            }
        })
    }
})(jQuery);
(function() {
    function a(b, c, d) {
        if (b === c) return 0 !== b || 1 / b == 1 / c;
        if (null == b || null == c) return b === c;
        b._chain && (b = b._wrapped);
        c._chain && (c = c._wrapped);
        if (b.isEqual && r.isFunction(b.isEqual)) return b.isEqual(c);
        if (c.isEqual && r.isFunction(c.isEqual)) return c.isEqual(b);
        var e = l.call(b);
        if (e != l.call(c)) return !1;
        switch (e) {
            case "[object String]":
                return b == String(c);
            case "[object Number]":
                return b != +b ? c != +c : 0 == b ? 1 / b == 1 / c : b == +c;
            case "[object Date]":
            case "[object Boolean]":
                return +b == +c;
            case "[object RegExp]":
                return b.source ==
                    c.source && b.global == c.global && b.multiline == c.multiline && b.ignoreCase == c.ignoreCase
        }
        if ("object" != typeof b || "object" != typeof c) return !1;
        for (var f = d.length; f--;)
            if (d[f] == b) return !0;
        d.push(b);
        var f = 0,
            h = !0;
        if ("[object Array]" == e) {
            if (f = b.length, h = f == c.length)
                for (; f-- && (h = f in b == f in c && a(b[f], c[f], d)););
        } else {
            if ("constructor" in b != "constructor" in c || b.constructor != c.constructor) return !1;
            for (var g in b)
                if (r.has(b, g) && (f++, !(h = r.has(c, g) && a(b[g], c[g], d)))) break;
            if (h) {
                for (g in c)
                    if (r.has(c, g) && !f--) break;
                h = !f
            }
        }
        d.pop();
        return h
    }
    var b = this,
        c = b._,
        g = {},
        f = Array.prototype,
        d = Object.prototype,
        e = f.slice,
        h = f.unshift,
        l = d.toString,
        n = d.hasOwnProperty,
        p = f.forEach,
        q = f.map,
        m = f.reduce,
        u = f.reduceRight,
        v = f.filter,
        x = f.every,
        w = f.some,
        E = f.indexOf,
        y = f.lastIndexOf,
        d = Array.isArray,
        H = Object.keys,
        J = Function.prototype.bind,
        r = function(a) {
            return new X(a)
        };
    "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = r), exports._ = r) : b._ = r;
    r.VERSION = "1.3.3";
    var B = r.each = r.forEach = function(a,
        b, c) {
        if (null != a)
            if (p && a.forEach === p) a.forEach(b, c);
            else if (a.length === +a.length)
            for (var d = 0, e = a.length; d < e && !(d in a && b.call(c, a[d], d, a) === g); d++);
        else
            for (d in a)
                if (r.has(a, d) && b.call(c, a[d], d, a) === g) break
    };
    r.map = r.collect = function(a, b, c) {
        var d = [];
        if (null == a) return d;
        if (q && a.map === q) return a.map(b, c);
        B(a, function(a, e, f) {
            d[d.length] = b.call(c, a, e, f)
        });
        a.length === +a.length && (d.length = a.length);
        return d
    };
    r.reduce = r.foldl = r.inject = function(a, b, c, d) {
        var e = 2 < arguments.length;
        null == a && (a = []);
        if (m && a.reduce ===
            m) return d && (b = r.bind(b, d)), e ? a.reduce(b, c) : a.reduce(b);
        B(a, function(a, f, h) {
            e ? c = b.call(d, c, a, f, h) : (c = a, e = !0)
        });
        if (!e) throw new TypeError("Reduce of empty array with no initial value");
        return c
    };
    r.reduceRight = r.foldr = function(a, b, c, d) {
        var e = 2 < arguments.length;
        null == a && (a = []);
        if (u && a.reduceRight === u) return d && (b = r.bind(b, d)), e ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = r.toArray(a).reverse();
        d && !e && (b = r.bind(b, d));
        return e ? r.reduce(f, b, c, d) : r.reduce(f, b)
    };
    r.find = r.detect = function(a, b, c) {
        var d;
        Y(a, function(a,
            e, f) {
            if (b.call(c, a, e, f)) return d = a, !0
        });
        return d
    };
    r.filter = r.select = function(a, b, c) {
        var d = [];
        if (null == a) return d;
        if (v && a.filter === v) return a.filter(b, c);
        B(a, function(a, e, f) {
            b.call(c, a, e, f) && (d[d.length] = a)
        });
        return d
    };
    r.reject = function(a, b, c) {
        var d = [];
        if (null == a) return d;
        B(a, function(a, e, f) {
            b.call(c, a, e, f) || (d[d.length] = a)
        });
        return d
    };
    r.every = r.all = function(a, b, c) {
        var d = !0;
        if (null == a) return d;
        if (x && a.every === x) return a.every(b, c);
        B(a, function(a, e, f) {
            if (!(d = d && b.call(c, a, e, f))) return g
        });
        return !!d
    };
    var Y = r.some = r.any = function(a, b, c) {
        b || (b = r.identity);
        var d = !1;
        if (null == a) return d;
        if (w && a.some === w) return a.some(b, c);
        B(a, function(a, e, f) {
            if (d || (d = b.call(c, a, e, f))) return g
        });
        return !!d
    };
    r.include = r.contains = function(a, b) {
        var c = !1;
        return null == a ? c : E && a.indexOf === E ? -1 != a.indexOf(b) : c = Y(a, function(a) {
            return a === b
        })
    };
    r.invoke = function(a, b) {
        var c = e.call(arguments, 2);
        return r.map(a, function(a) {
            return (r.isFunction(b) ? b || a : a[b]).apply(a, c)
        })
    };
    r.pluck = function(a, b) {
        return r.map(a, function(a) {
            return a[b]
        })
    };
    r.max = function(a, b, c) {
        if (!b && r.isArray(a) && a[0] === +a[0]) return Math.max.apply(Math, a);
        if (!b && r.isEmpty(a)) return -Infinity;
        var d = {
            computed: -Infinity
        };
        B(a, function(a, e, f) {
            e = b ? b.call(c, a, e, f) : a;
            e >= d.computed && (d = {
                value: a,
                computed: e
            })
        });
        return d.value
    };
    r.min = function(a, b, c) {
        if (!b && r.isArray(a) && a[0] === +a[0]) return Math.min.apply(Math, a);
        if (!b && r.isEmpty(a)) return Infinity;
        var d = {
            computed: Infinity
        };
        B(a, function(a, e, f) {
            e = b ? b.call(c, a, e, f) : a;
            e < d.computed && (d = {
                value: a,
                computed: e
            })
        });
        return d.value
    };
    r.shuffle =
        function(a) {
            var b = [],
                c;
            B(a, function(a, d, e) {
                c = Math.floor(Math.random() * (d + 1));
                b[d] = b[c];
                b[c] = a
            });
            return b
        };
    r.sortBy = function(a, b, c) {
        var d = r.isFunction(b) ? b : function(a) {
            return a[b]
        };
        return r.pluck(r.map(a, function(a, b, e) {
            return {
                value: a,
                criteria: d.call(c, a, b, e)
            }
        }).sort(function(a, b) {
            var c = a.criteria,
                d = b.criteria;
            return void 0 === c ? 1 : void 0 === d ? -1 : c < d ? -1 : c > d ? 1 : 0
        }), "value")
    };
    r.groupBy = function(a, b) {
        var c = {},
            d = r.isFunction(b) ? b : function(a) {
                return a[b]
            };
        B(a, function(a, b) {
            var e = d(a, b);
            (c[e] || (c[e] = [])).push(a)
        });
        return c
    };
    r.sortedIndex = function(a, b, c) {
        c || (c = r.identity);
        for (var d = 0, e = a.length; d < e;) {
            var f = d + e >> 1;
            c(a[f]) < c(b) ? d = f + 1 : e = f
        }
        return d
    };
    r.toArray = function(a) {
        return a ? r.isArray(a) || r.isArguments(a) ? e.call(a) : a.toArray && r.isFunction(a.toArray) ? a.toArray() : r.values(a) : []
    };
    r.size = function(a) {
        return r.isArray(a) ? a.length : r.keys(a).length
    };
    r.first = r.head = r.take = function(a, b, c) {
        return null == b || c ? a[0] : e.call(a, 0, b)
    };
    r.initial = function(a, b, c) {
        return e.call(a, 0, a.length - (null == b || c ? 1 : b))
    };
    r.last = function(a, b,
        c) {
        return null == b || c ? a[a.length - 1] : e.call(a, Math.max(a.length - b, 0))
    };
    r.rest = r.tail = function(a, b, c) {
        return e.call(a, null == b || c ? 1 : b)
    };
    r.compact = function(a) {
        return r.filter(a, function(a) {
            return !!a
        })
    };
    r.flatten = function(a, b) {
        return r.reduce(a, function(a, c) {
            if (r.isArray(c)) return a.concat(b ? c : r.flatten(c));
            a[a.length] = c;
            return a
        }, [])
    };
    r.without = function(a) {
        return r.difference(a, e.call(arguments, 1))
    };
    r.uniq = r.unique = function(a, b, c) {
        c = c ? r.map(a, c) : a;
        var d = [];
        3 > a.length && (b = !0);
        r.reduce(c, function(c, e, f) {
            (b ?
                r.last(c) === e && c.length : r.include(c, e)) || (c.push(e), d.push(a[f]));
            return c
        }, []);
        return d
    };
    r.union = function() {
        return r.uniq(r.flatten(arguments, !0))
    };
    r.intersection = r.intersect = function(a) {
        var b = e.call(arguments, 1);
        return r.filter(r.uniq(a), function(a) {
            return r.every(b, function(b) {
                return 0 <= r.indexOf(b, a)
            })
        })
    };
    r.difference = function(a) {
        var b = r.flatten(e.call(arguments, 1), !0);
        return r.filter(a, function(a) {
            return !r.include(b, a)
        })
    };
    r.zip = function() {
        for (var a = e.call(arguments), b = r.max(r.pluck(a, "length")),
                c = Array(b), d = 0; d < b; d++) c[d] = r.pluck(a, "" + d);
        return c
    };
    r.indexOf = function(a, b, c) {
        if (null == a) return -1;
        var d;
        if (c) return c = r.sortedIndex(a, b), a[c] === b ? c : -1;
        if (E && a.indexOf === E) return a.indexOf(b);
        c = 0;
        for (d = a.length; c < d; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    r.lastIndexOf = function(a, b) {
        if (null == a) return -1;
        if (y && a.lastIndexOf === y) return a.lastIndexOf(b);
        for (var c = a.length; c--;)
            if (c in a && a[c] === b) return c;
        return -1
    };
    r.range = function(a, b, c) {
        1 >= arguments.length && (b = a || 0, a = 0);
        c = arguments[2] || 1;
        for (var d =
                Math.max(Math.ceil((b - a) / c), 0), e = 0, f = Array(d); e < d;) f[e++] = a, a += c;
        return f
    };
    var I = function() {};
    r.bind = function(a, b) {
        var c;
        if (a.bind === J && J) return J.apply(a, e.call(arguments, 1));
        if (!r.isFunction(a)) throw new TypeError;
        var d = e.call(arguments, 2);
        return c = function() {
            if (!(this instanceof c)) return a.apply(b, d.concat(e.call(arguments)));
            I.prototype = a.prototype;
            var f = new I,
                h = a.apply(f, d.concat(e.call(arguments)));
            return Object(h) === h ? h : f
        }
    };
    r.bindAll = function(a) {
        var b = e.call(arguments, 1);
        0 == b.length && (b = r.functions(a));
        B(b, function(b) {
            a[b] = r.bind(a[b], a)
        });
        return a
    };
    r.memoize = function(a, b) {
        var c = {};
        b || (b = r.identity);
        return function() {
            var d = b.apply(this, arguments);
            return r.has(c, d) ? c[d] : c[d] = a.apply(this, arguments)
        }
    };
    r.delay = function(a, b) {
        var c = e.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c)
        }, b)
    };
    r.defer = function(a) {
        return r.delay.apply(r, [a, 1].concat(e.call(arguments, 1)))
    };
    r.throttle = function(a, b) {
        var c, d, e, f, h, g, l = r.debounce(function() {
            h = f = !1
        }, b);
        return function() {
            c = this;
            d = arguments;
            e ||
                (e = setTimeout(function() {
                    e = null;
                    h && a.apply(c, d);
                    l()
                }, b));
            f ? h = !0 : g = a.apply(c, d);
            l();
            f = !0;
            return g
        }
    };
    r.debounce = function(a, b, c) {
        var d;
        return function() {
            var e = this,
                f = arguments;
            c && !d && a.apply(e, f);
            clearTimeout(d);
            d = setTimeout(function() {
                d = null;
                c || a.apply(e, f)
            }, b)
        }
    };
    r.once = function(a) {
        var b = !1,
            c;
        return function() {
            if (b) return c;
            b = !0;
            return c = a.apply(this, arguments)
        }
    };
    r.wrap = function(a, b) {
        return function() {
            var c = [a].concat(e.call(arguments, 0));
            return b.apply(this, c)
        }
    };
    r.compose = function() {
        var a = arguments;
        return function() {
            for (var b = arguments, c = a.length - 1; 0 <= c; c--) b = [a[c].apply(this, b)];
            return b[0]
        }
    };
    r.after = function(a, b) {
        return 0 >= a ? b() : function() {
            if (1 > --a) return b.apply(this, arguments)
        }
    };
    r.keys = H || function(a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var b = [],
            c;
        for (c in a) r.has(a, c) && (b[b.length] = c);
        return b
    };
    r.values = function(a) {
        return r.map(a, r.identity)
    };
    r.functions = r.methods = function(a) {
        var b = [],
            c;
        for (c in a) r.isFunction(a[c]) && b.push(c);
        return b.sort()
    };
    r.extend = function(a) {
        B(e.call(arguments,
            1), function(b) {
            for (var c in b) a[c] = b[c]
        });
        return a
    };
    r.pick = function(a) {
        var b = {};
        B(r.flatten(e.call(arguments, 1)), function(c) {
            c in a && (b[c] = a[c])
        });
        return b
    };
    r.defaults = function(a) {
        B(e.call(arguments, 1), function(b) {
            for (var c in b) null == a[c] && (a[c] = b[c])
        });
        return a
    };
    r.clone = function(a) {
        return r.isObject(a) ? r.isArray(a) ? a.slice() : r.extend({}, a) : a
    };
    r.tap = function(a, b) {
        b(a);
        return a
    };
    r.isEqual = function(b, c) {
        return a(b, c, [])
    };
    r.isEmpty = function(a) {
        if (null == a) return !0;
        if (r.isArray(a) || r.isString(a)) return 0 ===
            a.length;
        for (var b in a)
            if (r.has(a, b)) return !1;
        return !0
    };
    r.isElement = function(a) {
        return !(!a || 1 != a.nodeType)
    };
    r.isArray = d || function(a) {
        return "[object Array]" == l.call(a)
    };
    r.isObject = function(a) {
        return a === Object(a)
    };
    r.isArguments = function(a) {
        return "[object Arguments]" == l.call(a)
    };
    r.isArguments(arguments) || (r.isArguments = function(a) {
        return !(!a || !r.has(a, "callee"))
    });
    r.isFunction = function(a) {
        return "[object Function]" == l.call(a)
    };
    r.isString = function(a) {
        return "[object String]" == l.call(a)
    };
    r.isNumber = function(a) {
        return "[object Number]" ==
            l.call(a)
    };
    r.isFinite = function(a) {
        return r.isNumber(a) && isFinite(a)
    };
    r.isNaN = function(a) {
        return a !== a
    };
    r.isBoolean = function(a) {
        return !0 === a || !1 === a || "[object Boolean]" == l.call(a)
    };
    r.isDate = function(a) {
        return "[object Date]" == l.call(a)
    };
    r.isRegExp = function(a) {
        return "[object RegExp]" == l.call(a)
    };
    r.isNull = function(a) {
        return null === a
    };
    r.isUndefined = function(a) {
        return void 0 === a
    };
    r.has = function(a, b) {
        return n.call(a, b)
    };
    r.noConflict = function() {
        b._ = c;
        return this
    };
    r.identity = function(a) {
        return a
    };
    r.times =
        function(a, b, c) {
            for (var d = 0; d < a; d++) b.call(c, d)
        };
    r.escape = function(a) {
        return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
    };
    r.result = function(a, b) {
        if (null == a) return null;
        var c = a[b];
        return r.isFunction(c) ? c.call(a) : c
    };
    r.mixin = function(a) {
        B(r.functions(a), function(b) {
            da(b, r[b] = a[b])
        })
    };
    var S = 0;
    r.uniqueId = function(a) {
        var b = S++;
        return a ? a + b : b
    };
    r.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var z = /.^/,
        C = {
            "\\": "\\",
            "'": "'",
            r: "\r",
            n: "\n",
            t: "\t",
            u2028: "\u2028",
            u2029: "\u2029"
        },
        Q;
    for (Q in C) C[C[Q]] = Q;
    var Z = /\\|'|\r|\n|\t|\u2028|\u2029/g,
        W = /\\(\\|'|r|n|t|u2028|u2029)/g,
        M = function(a) {
            return a.replace(W, function(a, b) {
                return C[b]
            })
        };
    r.template = function(a, b, c) {
        c = r.defaults(c || {}, r.templateSettings);
        a = "__p+='" + a.replace(Z, function(a) {
            return "\\" + C[a]
        }).replace(c.escape || z, function(a, b) {
            return "'+\n_.escape(" + M(b) + ")+\n'"
        }).replace(c.interpolate || z, function(a, b) {
            return "'+\n(" +
                M(b) + ")+\n'"
        }).replace(c.evaluate || z, function(a, b) {
            return "';\n" + M(b) + "\n;__p+='"
        }) + "';\n";
        c.variable || (a = "with(obj||{}){\n" + a + "}\n");
        a = "var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n" + a + "return __p;\n";
        var d = new Function(c.variable || "obj", "_", a);
        if (b) return d(b, r);
        b = function(a) {
            return d.call(this, a, r)
        };
        b.source = "function(" + (c.variable || "obj") + "){\n" + a + "}";
        return b
    };
    r.chain = function(a) {
        return r(a).chain()
    };
    var X = function(a) {
        this._wrapped = a
    };
    r.prototype = X.prototype;
    var U = function(a, b) {
            return b ? r(a).chain() : a
        },
        da = function(a, b) {
            X.prototype[a] = function() {
                var a = e.call(arguments);
                h.call(a, this._wrapped);
                return U(b.apply(r, a), this._chain)
            }
        };
    r.mixin(r);
    B("pop push reverse shift sort splice unshift".split(" "), function(a) {
        var b = f[a];
        X.prototype[a] = function() {
            var c = this._wrapped;
            b.apply(c, arguments);
            var d = c.length;
            "shift" != a && "splice" != a || 0 !== d || delete c[0];
            return U(c, this._chain)
        }
    });
    B(["concat", "join", "slice"], function(a) {
        var b = f[a];
        X.prototype[a] = function() {
            return U(b.apply(this._wrapped,
                arguments), this._chain)
        }
    });
    X.prototype.chain = function() {
        this._chain = !0;
        return this
    };
    X.prototype.value = function() {
        return this._wrapped
    }
}).call(this);
(function() {
    var a = this,
        b = a.Backbone,
        c = Array.prototype.slice,
        g = Array.prototype.splice;
    var f = "undefined" !== typeof exports ? exports : a.Backbone = {};
    f.VERSION = "0.9.2";
    var d = a._;
    d || "undefined" === typeof require || (d = require("underscore"));
    var e = a.jQuery || a.Zepto || a.ender;
    f.setDomLibrary = function(a) {
        e = a
    };
    f.noConflict = function() {
        a.Backbone = b;
        return this
    };
    f.emulateHTTP = !1;
    f.emulateJSON = !1;
    var h = /\s+/,
        l = f.Events = {
            on: function(a, b, c) {
                var d, e, f, g;
                if (!b) return this;
                a = a.split(h);
                for (d = this._callbacks || (this._callbacks = {}); e = a.shift();) {
                    var l = (g = d[e]) ? g.tail : {};
                    l.next = f = {};
                    l.context = c;
                    l.callback = b;
                    d[e] = {
                        tail: f,
                        next: g ? g.next : l
                    }
                }
                return this
            },
            off: function(a, b, c) {
                var e, f, g;
                if (f = this._callbacks) {
                    if (!(a || b || c)) return delete this._callbacks, this;
                    for (a = a ? a.split(h) : d.keys(f); e = a.shift();) {
                        var l = f[e];
                        delete f[e];
                        if (l && (b || c))
                            for (g = l.tail;
                                (l = l.next) !== g;) {
                                var n = l.callback;
                                var z = l.context;
                                if (b && n !== b || c && z !== c) this.on(e, n, z)
                            }
                    }
                    return this
                }
            },
            trigger: function(a) {
                var b, d, e, f, g;
                if (!(e = this._callbacks)) return this;
                var l = e.all;
                a =
                    a.split(h);
                for (g = c.call(arguments, 1); b = a.shift();) {
                    if (d = e[b])
                        for (f = d.tail;
                            (d = d.next) !== f;) d.callback.apply(d.context || this, g);
                    if (d = l)
                        for (f = d.tail, b = [b].concat(g);
                            (d = d.next) !== f;) d.callback.apply(d.context || this, b)
                }
                return this
            }
        };
    l.bind = l.on;
    l.unbind = l.off;
    var n = f.Model = function(a, b) {
        var c;
        a || (a = {});
        b && b.parse && (a = this.parse(a));
        if (c = I(this, "defaults")) a = d.extend({}, c, a);
        b && b.collection && (this.collection = b.collection);
        this.attributes = {};
        this._escapedAttributes = {};
        this.cid = d.uniqueId("c");
        this.changed = {};
        this._silent = {};
        this._pending = {};
        this.set(a, {
            silent: !0
        });
        this.changed = {};
        this._silent = {};
        this._pending = {};
        this._previousAttributes = d.clone(this.attributes);
        this.initialize.apply(this, arguments)
    };
    d.extend(n.prototype, l, {
        changed: null,
        _silent: null,
        _pending: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(a) {
            return d.clone(this.attributes)
        },
        get: function(a) {
            return this.attributes[a]
        },
        escape: function(a) {
            var b;
            if (b = this._escapedAttributes[a]) return b;
            b = this.get(a);
            return this._escapedAttributes[a] =
                d.escape(null == b ? "" : "" + b)
        },
        has: function(a) {
            return null != this.get(a)
        },
        set: function(a, b, c) {
            var e;
            if (d.isObject(a) || null == a) {
                var f = a;
                c = b
            } else f = {}, f[a] = b;
            c || (c = {});
            if (!f) return this;
            f instanceof n && (f = f.attributes);
            if (c.unset)
                for (e in f) f[e] = void 0;
            if (!this._validate(f, c)) return !1;
            this.idAttribute in f && (this.id = f[this.idAttribute]);
            b = c.changes = {};
            var h = this.attributes,
                g = this._escapedAttributes,
                l = this._previousAttributes || {};
            for (e in f) {
                a = f[e];
                if (!d.isEqual(h[e], a) || c.unset && d.has(h, e)) delete g[e], (c.silent ?
                    this._silent : b)[e] = !0;
                c.unset ? delete h[e] : h[e] = a;
                d.isEqual(l[e], a) && d.has(h, e) == d.has(l, e) ? (delete this.changed[e], delete this._pending[e]) : (this.changed[e] = a, c.silent || (this._pending[e] = !0))
            }
            c.silent || this.change(c);
            return this
        },
        unset: function(a, b) {
            (b || (b = {})).unset = !0;
            return this.set(a, null, b)
        },
        clear: function(a) {
            (a || (a = {})).unset = !0;
            return this.set(d.clone(this.attributes), a)
        },
        fetch: function(a) {
            a = a ? d.clone(a) : {};
            var b = this,
                c = a.success;
            a.success = function(d, e, f) {
                if (!b.set(b.parse(d, f), a)) return !1;
                c && c(b, d)
            };
            a.error = f.wrapError(a.error, b, a);
            return (this.sync || f.sync).call(this, "read", this, a)
        },
        save: function(a, b, c) {
            if (d.isObject(a) || null == a) {
                var e = a;
                c = b
            } else e = {}, e[a] = b;
            c = c ? d.clone(c) : {};
            if (c.wait) {
                if (!this._validate(e, c)) return !1;
                var h = d.clone(this.attributes)
            }
            a = d.extend({}, c, {
                silent: !0
            });
            if (e && !this.set(e, c.wait ? a : c)) return !1;
            var g = this,
                l = c.success;
            c.success = function(a, b, f) {
                b = g.parse(a, f);
                c.wait && (delete c.wait, b = d.extend(e || {}, b));
                if (!g.set(b, c)) return !1;
                l ? l(g, a) : g.trigger("sync", g, a, c)
            };
            c.error =
                f.wrapError(c.error, g, c);
            b = this.isNew() ? "create" : "update";
            b = (this.sync || f.sync).call(this, b, this, c);
            c.wait && this.set(h, a);
            return b
        },
        destroy: function(a) {
            a = a ? d.clone(a) : {};
            var b = this,
                c = a.success,
                e = function() {
                    b.trigger("destroy", b, b.collection, a)
                };
            if (this.isNew()) return e(), !1;
            a.success = function(d) {
                a.wait && e();
                c ? c(b, d) : b.trigger("sync", b, d, a)
            };
            a.error = f.wrapError(a.error, b, a);
            var h = (this.sync || f.sync).call(this, "delete", this, a);
            a.wait || e();
            return h
        },
        url: function() {
            var a = I(this, "urlRoot") || I(this.collection,
                "url") || S();
            return this.isNew() ? a : a + ("/" == a.charAt(a.length - 1) ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function(a, b) {
            return a
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return null == this.id
        },
        change: function(a) {
            a || (a = {});
            var b = this._changing;
            this._changing = !0;
            for (var c in this._silent) this._pending[c] = !0;
            var e = d.extend({}, a.changes, this._silent);
            this._silent = {};
            for (c in e) this.trigger("change:" + c, this, this.get(c), a);
            if (b) return this;
            for (; !d.isEmpty(this._pending);) {
                this._pending = {};
                this.trigger("change", this, a);
                for (c in this.changed) this._pending[c] || this._silent[c] || delete this.changed[c];
                this._previousAttributes = d.clone(this.attributes)
            }
            this._changing = !1;
            return this
        },
        hasChanged: function(a) {
            return arguments.length ? d.has(this.changed, a) : !d.isEmpty(this.changed)
        },
        changedAttributes: function(a) {
            if (!a) return this.hasChanged() ? d.clone(this.changed) : !1;
            var b, c = !1,
                e = this._previousAttributes,
                f;
            for (f in a) d.isEqual(e[f], b = a[f]) || ((c || (c = {}))[f] = b);
            return c
        },
        previous: function(a) {
            return arguments.length &&
                this._previousAttributes ? this._previousAttributes[a] : null
        },
        previousAttributes: function() {
            return d.clone(this._previousAttributes)
        },
        isValid: function() {
            return !this.validate(this.attributes)
        },
        _validate: function(a, b) {
            if (b.silent || !this.validate) return !0;
            a = d.extend({}, this.attributes, a);
            var c = this.validate(a, b);
            if (!c) return !0;
            b && b.error ? b.error(this, c, b) : this.trigger("error", this, c, b);
            return !1
        }
    });
    var p = f.Collection = function(a, b) {
        b || (b = {});
        b.model && (this.model = b.model);
        b.comparator && (this.comparator = b.comparator);
        this._reset();
        this.initialize.apply(this, arguments);
        a && this.reset(a, {
            silent: !0,
            parse: b.parse
        })
    };
    d.extend(p.prototype, l, {
        model: n,
        initialize: function() {},
        toJSON: function(a) {
            return this.map(function(b) {
                return b.toJSON(a)
            })
        },
        add: function(a, b) {
            var c, e, f = {},
                h = {},
                l = [];
            b || (b = {});
            a = d.isArray(a) ? a.slice() : [a];
            var n = 0;
            for (c = a.length; n < c; n++) {
                if (!(e = a[n] = this._prepareModel(a[n], b))) throw Error("Can't add an invalid model to a collection");
                var p = e.cid;
                var m = e.id;
                f[p] || this._byCid[p] || null != m && (h[m] || this._byId[m]) ?
                    l.push(n) : f[p] = h[m] = e
            }
            for (n = l.length; n--;) a.splice(l[n], 1);
            n = 0;
            for (c = a.length; n < c; n++)(e = a[n]).on("all", this._onModelEvent, this), this._byCid[e.cid] = e, null != e.id && (this._byId[e.id] = e);
            this.length += c;
            g.apply(this.models, [null != b.at ? b.at : this.models.length, 0].concat(a));
            this.comparator && this.sort({
                silent: !0
            });
            if (b.silent) return this;
            n = 0;
            for (c = this.models.length; n < c; n++) f[(e = this.models[n]).cid] && (b.index = n, e.trigger("add", e, this, b));
            return this
        },
        remove: function(a, b) {
            var c, e;
            b || (b = {});
            a = d.isArray(a) ?
                a.slice() : [a];
            var f = 0;
            for (c = a.length; f < c; f++)
                if (e = this.getByCid(a[f]) || this.get(a[f])) {
                    delete this._byId[e.id];
                    delete this._byCid[e.cid];
                    var h = this.indexOf(e);
                    this.models.splice(h, 1);
                    this.length--;
                    b.silent || (b.index = h, e.trigger("remove", e, this, b));
                    this._removeReference(e)
                }
            return this
        },
        push: function(a, b) {
            a = this._prepareModel(a, b);
            this.add(a, b);
            return a
        },
        pop: function(a) {
            var b = this.at(this.length - 1);
            this.remove(b, a);
            return b
        },
        unshift: function(a, b) {
            a = this._prepareModel(a, b);
            this.add(a, d.extend({
                    at: 0
                },
                b));
            return a
        },
        shift: function(a) {
            var b = this.at(0);
            this.remove(b, a);
            return b
        },
        get: function(a) {
            if (null != a) return this._byId[null != a.id ? a.id : a]
        },
        getByCid: function(a) {
            return a && this._byCid[a.cid || a]
        },
        at: function(a) {
            return this.models[a]
        },
        where: function(a) {
            return d.isEmpty(a) ? [] : this.filter(function(b) {
                for (var c in a)
                    if (a[c] !== b.get(c)) return !1;
                return !0
            })
        },
        sort: function(a) {
            a || (a = {});
            if (!this.comparator) throw Error("Cannot sort a set without a comparator");
            var b = d.bind(this.comparator, this);
            1 == this.comparator.length ?
                this.models = this.sortBy(b) : this.models.sort(b);
            a.silent || this.trigger("reset", this, a);
            return this
        },
        pluck: function(a) {
            return d.map(this.models, function(b) {
                return b.get(a)
            })
        },
        reset: function(a, b) {
            a || (a = []);
            b || (b = {});
            for (var c = 0, e = this.models.length; c < e; c++) this._removeReference(this.models[c]);
            this._reset();
            this.add(a, d.extend({
                silent: !0
            }, b));
            b.silent || this.trigger("reset", this, b);
            return this
        },
        fetch: function(a) {
            a = a ? d.clone(a) : {};
            void 0 === a.parse && (a.parse = !0);
            var b = this,
                c = a.success;
            a.success = function(d,
                e, f) {
                b[a.add ? "add" : "reset"](b.parse(d, f), a);
                c && c(b, d)
            };
            a.error = f.wrapError(a.error, b, a);
            return (this.sync || f.sync).call(this, "read", this, a)
        },
        create: function(a, b) {
            var c = this;
            b = b ? d.clone(b) : {};
            a = this._prepareModel(a, b);
            if (!a) return !1;
            b.wait || c.add(a, b);
            var e = b.success;
            b.success = function(d, f, h) {
                b.wait && c.add(d, b);
                e ? e(d, f) : d.trigger("sync", a, f, b)
            };
            a.save(null, b);
            return a
        },
        parse: function(a, b) {
            return a
        },
        chain: function() {
            return d(this.models).chain()
        },
        _reset: function(a) {
            this.length = 0;
            this.models = [];
            this._byId = {};
            this._byCid = {}
        },
        _prepareModel: function(a, b) {
            b || (b = {});
            a instanceof n ? a.collection || (a.collection = this) : (b.collection = this, a = new this.model(a, b), a._validate(a.attributes, b) || (a = !1));
            return a
        },
        _removeReference: function(a) {
            this == a.collection && delete a.collection;
            a.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(a, b, c, d) {
            if ("add" != a && "remove" != a || c == this) "destroy" == a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], this._byId[b.id] = b), this.trigger.apply(this,
                arguments)
        }
    });
    d.each("forEach each map reduce reduceRight find detect filter select reject every all some any include contains invoke max min sortBy sortedIndex toArray size first initial rest last without indexOf shuffle lastIndexOf isEmpty groupBy".split(" "), function(a) {
        p.prototype[a] = function() {
            return d[a].apply(d, [this.models].concat(d.toArray(arguments)))
        }
    });
    var q = f.Router = function(a) {
            a || (a = {});
            a.routes && (this.routes = a.routes);
            this._bindRoutes();
            this.initialize.apply(this, arguments)
        },
        m = /:\w+/g,
        u = /\*\w+/g,
        v = /[-[\]{}()+?.,\\^$|#\s]/g;
    d.extend(q.prototype, l, {
        initialize: function() {},
        route: function(a, b, c) {
            f.history || (f.history = new x);
            d.isRegExp(a) || (a = this._routeToRegExp(a));
            c || (c = this[b]);
            f.history.route(a, d.bind(function(d) {
                d = this._extractParameters(a, d);
                c && c.apply(this, d);
                this.trigger.apply(this, ["route:" + b].concat(d));
                f.history.trigger("route", this, b, d)
            }, this));
            return this
        },
        navigate: function(a, b) {
            f.history.navigate(a, b)
        },
        _bindRoutes: function() {
            if (this.routes) {
                var a = [];
                for (b in this.routes) a.unshift([b,
                    this.routes[b]
                ]);
                var b = 0;
                for (var c = a.length; b < c; b++) this.route(a[b][0], a[b][1], this[a[b][1]])
            }
        },
        _routeToRegExp: function(a) {
            a = a.replace(v, "\\$&").replace(m, "([^/]+)").replace(u, "(.*?)");
            return new RegExp("^" + a + "$")
        },
        _extractParameters: function(a, b) {
            return a.exec(b).slice(1)
        }
    });
    var x = f.History = function() {
            this.handlers = [];
            d.bindAll(this, "checkUrl")
        },
        w = /^[#\/]/,
        E = /msie [\w.]+/;
    x.started = !1;
    d.extend(x.prototype, l, {
        interval: 50,
        getHash: function(a) {
            return (a = (a ? a.location : window.location).href.match(/#(.*)$/)) ?
                a[1] : ""
        },
        getFragment: function(a, b) {
            if (null == a)
                if (this._hasPushState || b) {
                    a = window.location.pathname;
                    var c = window.location.search;
                    c && (a += c)
                } else a = this.getHash();
            a.indexOf(this.options.root) || (a = a.substr(this.options.root.length));
            return a.replace(w, "")
        },
        start: function(a) {
            if (x.started) throw Error("Backbone.history has already been started");
            x.started = !0;
            this.options = d.extend({}, {
                root: "/"
            }, this.options, a);
            this._wantsHashChange = !1 !== this.options.hashChange;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.options.pushState && window.history && window.history.pushState);
            a = this.getFragment();
            var b = document.documentMode;
            if (b = E.exec(navigator.userAgent.toLowerCase()) && (!b || 7 >= b)) this.iframe = e('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(a);
            this._hasPushState ? e(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !b ? e(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval =
                setInterval(this.checkUrl, this.interval));
            this.fragment = a;
            a = window.location;
            b = a.pathname == this.options.root;
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !b) return this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0;
            this._wantsPushState && this._hasPushState && b && a.hash && (this.fragment = this.getHash().replace(w, ""), window.history.replaceState({}, document.title, a.protocol + "//" + a.host + this.options.root + this.fragment));
            if (!this.options.silent) return this.loadUrl()
        },
        stop: function() {
            e(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl);
            clearInterval(this._checkUrlInterval);
            x.started = !1
        },
        route: function(a, b) {
            this.handlers.unshift({
                route: a,
                callback: b
            })
        },
        checkUrl: function(a) {
            a = this.getFragment();
            a == this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe)));
            if (a == this.fragment) return !1;
            this.iframe && this.navigate(a);
            this.loadUrl() || this.loadUrl(this.getHash())
        },
        loadUrl: function(a) {
            var b = this.fragment = this.getFragment(a);
            return d.any(this.handlers,
                function(a) {
                    if (a.route.test(b)) return a.callback(b), !0
                })
        },
        navigate: function(a, b) {
            if (!x.started) return !1;
            b && !0 !== b || (b = {
                trigger: b
            });
            var c = (a || "").replace(w, "");
            this.fragment != c && (this._hasPushState ? (0 != c.indexOf(this.options.root) && (c = this.options.root + c), this.fragment = c, window.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c)) : this._wantsHashChange ? (this.fragment = c, this._updateHash(window.location, c, b.replace), this.iframe && c != this.getFragment(this.getHash(this.iframe)) && (b.replace ||
                this.iframe.document.open().close(), this._updateHash(this.iframe.location, c, b.replace))) : window.location.assign(this.options.root + a), b.trigger && this.loadUrl(a))
        },
        _updateHash: function(a, b, c) {
            c ? a.replace(a.toString().replace(/(javascript:|#).*$/, "") + "#" + b) : a.hash = b
        }
    });
    var y = f.View = function(a) {
            this.cid = d.uniqueId("view");
            this._configure(a || {});
            this._ensureElement();
            this.initialize.apply(this, arguments);
            this.delegateEvents()
        },
        H = /^(\S+)\s*(.*)$/,
        J = "model collection el id attributes className tagName".split(" ");
    d.extend(y.prototype, l, {
        tagName: "div",
        $: function(a) {
            return this.$el.find(a)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            this.$el.remove();
            return this
        },
        make: function(a, b, c) {
            a = document.createElement(a);
            b && e(a).attr(b);
            c && e(a).html(c);
            return a
        },
        setElement: function(a, b) {
            this.$el && this.undelegateEvents();
            this.$el = a instanceof e ? a : e(a);
            this.el = this.$el[0];
            !1 !== b && this.delegateEvents();
            return this
        },
        delegateEvents: function(a) {
            if (a || (a = I(this, "events"))) {
                this.undelegateEvents();
                for (var b in a) {
                    var c = a[b];
                    d.isFunction(c) || (c = this[a[b]]);
                    if (!c) throw Error('Method "' + a[b] + '" does not exist');
                    var e = b.match(H),
                        f = e[1],
                        e = e[2],
                        c = d.bind(c, this),
                        f = f + (".delegateEvents" + this.cid);
                    "" === e ? this.$el.bind(f, c) : this.$el.delegate(e, f, c)
                }
            }
        },
        undelegateEvents: function() {
            this.$el.unbind(".delegateEvents" + this.cid)
        },
        _configure: function(a) {
            this.options && (a = d.extend({}, this.options, a));
            for (var b = 0, c = J.length; b < c; b++) {
                var e = J[b];
                a[e] && (this[e] = a[e])
            }
            this.options = a
        },
        _ensureElement: function() {
            if (this.el) this.setElement(this.el, !1);
            else {
                var a = I(this, "attributes") || {};
                this.id && (a.id = this.id);
                this.className && (a["class"] = this.className);
                this.setElement(this.make(this.tagName, a), !1)
            }
        }
    });
    n.extend = p.extend = q.extend = y.extend = function(a, b) {
        var c = Y(this, a, b);
        c.extend = this.extend;
        return c
    };
    var r = {
        create: "POST",
        update: "PUT",
        "delete": "DELETE",
        read: "GET"
    };
    f.sync = function(a, b, c) {
        var h = r[a];
        c || (c = {});
        var g = {
            type: h,
            dataType: "json"
        };
        c.url || (g.url = I(b, "url") || S());
        c.data || !b || "create" != a && "update" != a || (g.contentType = "application/json", g.data =
            JSON.stringify(b.toJSON()));
        f.emulateJSON && (g.contentType = "application/x-www-form-urlencoded", g.data = g.data ? {
            model: g.data
        } : {});
        !f.emulateHTTP || "PUT" !== h && "DELETE" !== h || (f.emulateJSON && (g.data._method = h), g.type = "POST", g.beforeSend = function(a) {
            a.setRequestHeader("X-HTTP-Method-Override", h)
        });
        "GET" === g.type || f.emulateJSON || (g.processData = !1);
        return e.ajax(d.extend(g, c))
    };
    f.wrapError = function(a, b, c) {
        return function(d, e) {
            e = d === b ? e : d;
            a ? a(b, e, c) : b.trigger("error", b, e, c)
        }
    };
    var B = function() {},
        Y = function(a,
            b, c) {
            var e = b && b.hasOwnProperty("constructor") ? b.constructor : function() {
                a.apply(this, arguments)
            };
            d.extend(e, a);
            B.prototype = a.prototype;
            e.prototype = new B;
            b && d.extend(e.prototype, b);
            c && d.extend(e, c);
            e.prototype.constructor = e;
            e.__super__ = a.prototype;
            return e
        },
        I = function(a, b) {
            return a && a[b] ? d.isFunction(a[b]) ? a[b]() : a[b] : null
        },
        S = function() {
            throw Error('A "url" property or function must be specified');
        }
}).call(this);
Backbone.EventBroker = Backbone.EventBroker || function() {
    var a = {},
        b = function(a, b, c, e) {
            !b && a.interests && (b = a, a = a.interests);
            for (var d in a)
                if (a.hasOwnProperty(d)) c[e](d, b[a[d]], b);
            return c
        },
        c = {
            register: function(a, c) {
                return a || c ? b(a, c, this, "on") : this
            },
            unregister: function(a, c) {
                return a || c ? b(a, c, this, "off") : this
            }
        };
    return _.extend({
        namespace: "",
        get: function(b) {
            void 0 === a[b] && (a[b] = _.extend({
                namespace: b
            }, Backbone.Events, c));
            return a[b]
        },
        has: function(b) {
            return void 0 !== a[b]
        },
        destroy: function(b) {
            if (b) a[b] &&
                (a[b].off(), delete a[b]);
            else
                for (b in a) a.hasOwnProperty(b) && this.destroy(b);
            return this
        }
    }, Backbone.Events, c)
}();
(function(a, b, c) {
    var g = function() {},
        f = b.Notifier = b.Model.extend({
            defaults: {
                baseCls: "notifier",
                types: ["warning", "error", "info", "success"],
                dialog: !1,
                theme: "plastic",
                message: "",
                closeBtn: !1,
                title: void 0,
                hideOnClick: !0,
                type: null,
                cls: null,
                ms: 1E4,
                loader: !1,
                destroy: !1,
                modal: !1,
                opacity: 1,
                offsetY: 0,
                fadeInMs: 500,
                fadeOutMs: 500,
                position: "top",
                screenOpacity: .65,
                zIndex: 1E4,
                width: void 0,
                modules: void 0
            },
            transitions: {
                top: {
                    "in": function(a, b, c, d, e) {
                        a.css({
                            display: "block",
                            top: -1E3
                        });
                        a.css({
                            top: -b.innerHeight()
                        }).animate({
                            top: c.offsetY,
                            opacity: c.opacity
                        }, d, e || g)
                    },
                    out: function(a, b, c, d, e) {
                        a.animate({
                            top: -b.innerHeight(),
                            opacity: 0
                        }, d, e || g)
                    }
                },
                center: {
                    "in": function(a, b, c, d, e) {
                        a.css({
                            top: c.offsetY - 40,
                            display: "block"
                        }).animate({
                            top: "50%",
                            marginTop: -b.innerHeight() / 2,
                            opacity: c.opacity
                        }, d, e || g)
                    },
                    out: function(a, b, c, d, e) {
                        a.animate({
                            top: "0%",
                            opacity: 0
                        }, d, e || g)
                    }
                },
                bottom: {
                    "in": function(a, b, c, d, e) {
                        a.css({
                            bottom: c.offsetY - 40,
                            top: "auto",
                            display: "block"
                        }).animate({
                            bottom: b.innerHeight() + c.offsetY,
                            opacity: c.opacity
                        }, d, e || g)
                    },
                    out: function(a, b, c, d,
                        e) {
                        a.animate({
                            bottom: -b.height(),
                            opacity: 0
                        }, d, e || g)
                    }
                }
            },
            template: function(b) {
                var d = ['<div class="' + b.wrapperCls + '">', '<div class="' + b.innerCls + '">', b.title ? '<div class="' + b.baseCls + '-title">' + b.title + "</div>" : "", b.closeBtn ? '<button class="' + b.baseCls + '-close" data-handler="destroy"><span>x</span></button>' : ""];
                b.dialog ? d.push('<div class="' + b.baseCls + '-message">' + b.message + (b.loader ? '<div class="' + b.baseCls + '-loader"></div>' : "") + "</div>") : d.push('<div class="' + b.baseCls + '-message">' + b.message + "</div>",
                    b.loader ? '<div class="' + b.baseCls + '-loader"></div>' : "");
                if (b.buttons) {
                    var e = a("<div />");
                    c.each(b.buttons, function(b) {
                        e.append(a("<button/>", b))
                    });
                    d.push('<div class="' + b.baseCls + '-btns">' + e.html() + "</div>")
                }
                d.push("</div></div>");
                return d.join("")
            },
            initEl: function() {
                var b = this.el ? this.el : "body",
                    b = c.isObject(b) ? b : a(b);
                if (!b.length) return a(a.proxy(this.initEl, this));
                this.$el = b;
                this._cssPos = b.get(0) === document.body ? "fixed" : "absolute";
                b.get(0) !== document.body && b.css("position", "relative");
                "absolute" ===
                this._cssPos && b.css("overflow", "hidden")
            },
            initialize: function(d) {
                var e = this;
                this.el = d && d.el;
                this.initEl.call(this, d && d.el);
                this.current = {};
                e.NotificationView = b.View.extend({
                    defaults: e.attributes,
                    on: function(a, d) {
                        var e = d,
                            f = this;
                        c.isString(d) && (e = function() {
                            f[d].apply(f, arguments)
                        });
                        return b.View.prototype.on.call(this, a, e)
                    }
                });
                var h = function(a) {
                    e[a] = e[a] || function(b) {
                        c.isString(b) && (b = {
                            message: b
                        });
                        b = c.extend({}, {
                            type: ""
                        }, b);
                        b.type = b.type ? a + " " + b.type : a;
                        return e.notify(b)
                    }
                };
                c.each(e.attributes.types,
                    function(a) {
                        h(a)
                    });
                if (e.attributes) {
                    var g = this.attributes.modules;
                    g && a.each(g, function(a, b) {
                        b.name = c.isArray(g) ? b.name : a;
                        f.regModule(b)
                    });
                    e.attributes.modules = void 0
                }
            },
            calcZIndex: function() {
                if ("absolute" === this._cssPos) return this.attributes.zIndex;
                var a = this.attributes.zIndex + 1;
                c.each(this.current, function(b) {
                    a = b.zIndex > a ? b.zIndex : a
                });
                return ++a
            },
            destroyAll: function(a, b) {
                var d = 0;
                c.isFunction(a) ? c.each(this.current, function(b) {
                    a(b) && (b.destroy.call(b), d++)
                }) : void 0 !== a ? c.each(this.current, function(c) {
                    c.settings[a] ===
                        b && (c.destroy.call(c), d++)
                }) : c.each(this.current, function(a) {
                    a.destroy.call(a);
                    d++
                });
                return d
            },
            getWrapperCls: function(b) {
                return a.trim(b.baseCls + " " + (b.type ? b.type + " " : "") + ("theme-" + b.theme + " ") + (b.dialog ? "dialog " : "") + ("pos-" + b.position + " ") + (b.buttons ? "with-buttons " : "") + (b.loader ? "with-loader " : "") + (b.closeBtn ? "with-close-btn " : "")).split(" ").join(" " + b.baseCls + "-") + " " + (b.cls || "")
            },
            getSettings: function(b) {
                c.isString(b) && (b = {
                    message: b
                });
                var d = a.extend({}, this.attributes, b);
                d.title && void 0 === b.dialog &&
                    (d.dialog = !0);
                (d.modal || d.dialog) && void 0 === b.hideOnClick && (d.hideOnClick = !1);
                d.dialog && void 0 === b.ms && (d.ms = null);
                d.dialog && void 0 === b.position && (d.position = "center");
                return d
            },
            notify: function(b) {
                b = b || {};
                var d = this,
                    e = this.getSettings(b);
                c.isObject(e.destroy) ? e.destroy instanceof d.NotificationView ? e.destroy.destroy() : d.destroyAll.apply(d, c.isArray(e.destroy) ? e.destroy : [e.destroy]) : !0 === e.destroy && d.destroyAll();
                b = b.zIndex || d.calcZIndex.call(d);
                e.wrapperCls = d.getWrapperCls(e);
                e.innerCls = e.baseCls +
                    "-inner";
                var h = a(d.template(e)),
                    g = h.find("." + e.innerCls);
                e.width && g.css({
                    width: e.width
                });
                f._modulesBinder.trigger("beforeAppendMsgEl", d, e, h, g);
                h.css({
                    display: "none",
                    opacity: 0,
                    position: d._cssPos,
                    zIndex: e.modal ? ++b : b
                }).prependTo(d.$el);
                var m = new d.NotificationView({
                    el: h
                });
                m.settings = e;
                if (e.buttons || g.find("button").length) g.on("click", "button[data-handler]", function() {
                    var b = a(this).data("handler");
                    (c.isFunction(b) ? b : m[b]).apply(m, arguments)
                }), g.on("button click", function(b) {
                    m.trigger("click:" + a(b.target).data("role"))
                });
                var u = m.destroy = function(b) {
                        c.isObject(b) && b.preventDefault && (b.preventDefault(), b.stopPropagation());
                        m.trigger("beforeHide", m, h);
                        e.modal && m.screenEl.fadeOut(300, function() {
                            m.trigger("screenHide", m, h);
                            m.screenEl.remove()
                        });
                        f._modulesBinder.trigger("beforeHideMsgEl", d, e, h, g, m);
                        (a.isFunction(e.out) ? e.out : d.transitions[e.position].out).call(d, h, g, e, e.fadeOutMs, function() {
                            m.remove();
                            m.trigger("destroy", m, h);
                            f._modulesBinder.trigger("afterDestroyMsgEl", d, e, h, g, m);
                            c.isFunction(b) && b.call(m, m, h)
                        });
                        m.timeoutId &&
                            clearTimeout(m.timeoutId);
                        delete m.timeoutId;
                        delete d.current[m.cid]
                    },
                    v = function(a) {
                        a && (a.preventDefault(), a.stopPropagation())
                    };
                e.modal && (m.screenEl = a("<div/>", {
                    "class": e.baseCls + "-screen " + e.baseCls + "-theme-" + e.theme,
                    css: {
                        position: d._cssPos,
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        opacity: 0,
                        zIndex: b - 1
                    }
                }).prependTo(d.$el).click(function(a) {
                    a.preventDefault();
                    a.stopPropagation();
                    return !1
                }).fadeTo(300, e.screenOpacity));
                if (0 < e.ms || 0 === e.ms) m.timeoutId = setTimeout(function() {
                        m.trigger("timeout", m, h);
                        u()
                    },
                    e.ms);
                g.click(e.hideOnClick ? u : v);
                e.css && g.css(e.css);
                v = a.isFunction(e["in"]) ? e["in"] : d.transitions[e.position]["in"];
                d.current[m.cid] = m;
                m.zIndex = b;
                f._modulesBinder.trigger("beforeAnimateInMsgEl", d, e, h, g, m);
                v.call(d, h, g, e, e.fadeInMs, function() {
                    f._modulesBinder.trigger("afterAnimateInMsgEl", d, e, h, g, m)
                });
                return m
            }
        });
    f.getModule = function(a) {
        return c.isObject(a) ? a : f.modules[a]
    };
    var d = {},
        e = Array.prototype.shift;
    c.extend(d, b.Events);
    f._modulesBinder = d;
    f.regModule = function(b, d) {
        1 === arguments.length ? (d = a.isFunction(b) ?
            b() : b, b = d.name) : (d = a.isFunction(d) ? d() : d, d.name = b);
        if (!b) throw "module name is not defined.";
        d.extend && a.each(d.extend, function(b, e) {
            var h = f.prototype[b];
            c.isFunction(e) || void 0 === h ? f.prototype[b] = function() {
                return e.apply({
                    scope: this,
                    supr: h,
                    module: d
                }, arguments)
            } : c.isObject(e) ? f.prototype[b] = a.extend(!0, {}, h, e) : f.prototype[b] = e
        });
        (f.modules = f.modules || {})[b] = d;
        a.isFunction(d.register) && d.register.call(d, f);
        d.enabled && f.enableModule(d);
        return d
    };
    f.enableModule = function(b) {
        var c = f.getModule(b);
        return c ?
            (c._handlers = c._handlers || {}, c.events && a.each(c.events, function(a, b) {
                var d = c._handlers[a] = function() {
                    var a = e.call(arguments);
                    b.apply({
                        module: c,
                        scope: a
                    }, arguments)
                };
                f._modulesBinder.on(a, d)
            }), c.enabled = !0, a.isFunction(c.enable) && c.enable.call(c, f), c) : !1
    };
    f.disableModule = function(b) {
        return (b = f.getModule(b)) ? (a.each(b._handlers, function(a, b) {
            f._modulesBinder.off(a, b)
        }), b.enabled = !1, a.isFunction(b.disable) && b.disable.call(b, f), b) : !1
    }
})(jQuery, Backbone, _);
(function(a, b, c) {
    a.regModule({
        name: "template",
        enabled: !0,
        extend: {
            template: function(a) {
                if (a.data) {
                    var b = c.template(a.message);
                    a.message = b(a.data)
                }
                return this.supr.call(this.scope, a)
            }
        }
    })
})(Backbone.Notifier, jQuery, _);
(function() {
    var a = {
        create: "POST",
        update: "POST",
        "delete": "GET",
        read: "GET"
    };
    Backbone.sync = function(b, c, g) {
        g = _.extend({
            dataType: "json",
            type: a[b],
            data: {}
        }, g);
        if (!g.url) {
            var f = c && c.url ? _.isFunction(c.url) ? c.url() : c.url : null;
            if (!f) throw Error('A "url" property or function must be specified');
            g.url = f;
            g.url += "/" + b
        }
        "create" != b && (g.data.id = c.id);
        if ("create" == b || "update" == b) g.data = _.extend(g.data, c.toJSON());
        $.ajax(g)
    }
})();
(function() {
    var a = [_tr.january, _tr.february, _tr.march, _tr.april, _tr.may, _tr.june, _tr.july, _tr.august, _tr.september, _tr.october, _tr.november, _tr.december];
    Date.prototype.getMonthName = function() {
        return a[this.getMonth()]
    };
    Date.prototype.getZeroFillMinutes = function() {
        return ("00" + this.getMinutes()).slice(-2)
    }
})();
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery.cookie"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(a) {
    var b, c = navigator.userAgent,
        g = /iphone/i.test(c),
        f = /chrome/i.test(c),
        d = /android/i.test(c);
    a.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    };
    a.fn.extend({
        caret: function(a, b) {
            var c;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function() {
                this.setSelectionRange ?
                    this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select())
            })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1E5), b = a + c.text.length), {
                begin: a,
                end: b
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(c, h) {
            var e, n, p, q, m, u, v;
            if (!c && 0 <
                this.length) {
                var x = a(this[0]);
                return (x = x.data(a.mask.dataName)) ? x() : void 0
            }
            return h = a.extend({
                autoclear: a.mask.autoclear,
                placeholder: a.mask.placeholder,
                completed: null
            }, h), e = a.mask.definitions, n = [], p = u = c.length, q = null, a.each(c.split(""), function(a, b) {
                "?" == b ? (u--, p = a) : e[b] ? (n.push(new RegExp(e[b])), null === q && (q = n.length - 1), p > a && (m = n.length - 1)) : n.push(null)
            }), this.trigger("unmask").each(function() {
                function l() {
                    if (h.completed) {
                        for (var a = q; m >= a; a++)
                            if (n[a] && C[a] === E(a)) return;
                        h.completed.call(z)
                    }
                }

                function E(a) {
                    return h.placeholder.charAt(a <
                        h.placeholder.length ? a : 0)
                }

                function y(a) {
                    for (; ++a < u && !n[a];);
                    return a
                }

                function H(a, b) {
                    var c;
                    if (!(0 > a)) {
                        var d = a;
                        for (c = y(b); u > d; d++)
                            if (n[d]) {
                                if (!(u > c && n[d].test(C[c]))) break;
                                C[d] = C[c];
                                C[c] = E(c);
                                c = y(c)
                            }
                        I();
                        z.caret(Math.max(q, a))
                    }
                }

                function J(a) {
                    var b, c;
                    var d = a;
                    for (a = E(a); u > d; d++)
                        if (n[d]) {
                            if (b = y(d), c = C[d], C[d] = a, !(u > b && n[b].test(c))) break;
                            a = c
                        }
                }

                function r() {
                    var a = z.val(),
                        b = z.caret();
                    if (a.length < v.length) {
                        for (S(!0); 0 < b.begin && !n[b.begin - 1];) b.begin--;
                        if (0 === b.begin)
                            for (; b.begin < q && !n[b.begin];) b.begin++
                    } else
                        for (S(!0); b.begin <
                            u && !n[b.begin];) b.begin++;
                    z.caret(b.begin, b.begin);
                    l()
                }

                function B() {
                    S();
                    z.val() != Z && z.change()
                }

                function x(a, b) {
                    var c;
                    for (c = a; b > c && u > c; c++) n[c] && (C[c] = E(c))
                }

                function I() {
                    z.val(C.join(""))
                }

                function S(a) {
                    var b, c, d, e = z.val(),
                        f = -1;
                    for (d = b = 0; u > b; b++)
                        if (n[b]) {
                            for (C[b] = E(b); d++ < e.length;)
                                if (c = e.charAt(d - 1), n[b].test(c)) {
                                    C[b] = c;
                                    f = b;
                                    break
                                }
                            if (d > e.length) {
                                x(b + 1, u);
                                break
                            }
                        } else C[b] === e.charAt(d) && d++, p > b && (f = b);
                    return a ? I() : p > f + 1 ? h.autoclear || C.join("") === Q ? (z.val() && z.val(""), x(0, u)) : I() : (I(), z.val(z.val().substring(0,
                        f + 1))), p ? b : q
                }
                var z = a(this),
                    C = a.map(c.split(""), function(a, b) {
                        return "?" != a ? e[a] ? E(b) : a : void 0
                    }),
                    Q = C.join(""),
                    Z = z.val();
                z.data(a.mask.dataName, function() {
                    return a.map(C, function(a, b) {
                        return n[b] && a != E(b) ? a : null
                    }).join("")
                });
                z.one("unmask", function() {
                    z.off(".mask").removeData(a.mask.dataName)
                }).on("focus.mask", function() {
                    if (!z.prop("readonly")) {
                        clearTimeout(b);
                        Z = z.val();
                        var a = S();
                        b = setTimeout(function() {
                            I();
                            a == c.replace("?", "").length ? z.caret(0, a) : z.caret(a)
                        }, 10)
                    }
                }).on("blur.mask", B).on("keydown.mask",
                    function(a) {
                        if (!z.prop("readonly")) {
                            var b = a.which || a.keyCode;
                            v = z.val();
                            if (8 === b || 46 === b || g && 127 === b) {
                                var c = z.caret();
                                var d = c.begin;
                                c = c.end;
                                if (0 === c - d) {
                                    if (46 !== b)
                                        for (; 0 <= --d && !n[d];);
                                    else d = c = y(d - 1);
                                    c = 46 === b ? y(c) : c
                                }
                                x(d, c);
                                H(d, c - 1);
                                a.preventDefault()
                            } else 13 === b ? B.call(this, a) : 27 === b && (z.val(Z), z.caret(0, S()), a.preventDefault())
                        }
                    }).on("keypress.mask", function(b) {
                    if (!z.prop("readonly")) {
                        var c, e, f, h = b.which || b.keyCode,
                            g = z.caret();
                        if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > h) && h && 13 !== h) {
                            if (0 !== g.end - g.begin &&
                                (x(g.begin, g.end), H(g.begin, g.end - 1)), c = y(g.begin - 1), u > c && (e = String.fromCharCode(h), n[c].test(e)))(J(c), C[c] = e, I(), f = y(c), d) ? setTimeout(function() {
                                a.proxy(a.fn.caret, z, f)()
                            }, 0) : z.caret(f), g.begin <= m && l();
                            b.preventDefault()
                        }
                    }
                }).on("input.mask paste.mask", function() {
                    z.prop("readonly") || setTimeout(function() {
                        var a = S(!0);
                        z.caret(a);
                        l()
                    }, 0)
                });
                f && d && z.off("input.mask").on("input.mask", r);
                S()
            })
        }
    })
});
var qq = qq || {};
qq.extend = function(a, b) {
    for (var c in b) a[c] = b[c]
};
qq.indexOf = function(a, b, c) {
    if (a.indexOf) return a.indexOf(b, c);
    c = c || 0;
    var g = a.length;
    for (0 > c && (c += g); c < g; c++)
        if (c in a && a[c] === b) return c;
    return -1
};
qq.getUniqueId = function() {
    var a = 0;
    return function() {
        return a++
    }
}();
qq.attach = function(a, b, c) {
    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
};
qq.detach = function(a, b, c) {
    a.removeEventListener ? a.removeEventListener(b, c, !1) : a.attachEvent && a.detachEvent("on" + b, c)
};
qq.preventDefault = function(a) {
    a.preventDefault ? a.preventDefault() : a.returnValue = !1
};
qq.insertBefore = function(a, b) {
    b.parentNode.insertBefore(a, b)
};
qq.remove = function(a) {
    a.parentNode.removeChild(a)
};
qq.contains = function(a, b) {
    return a == b ? !0 : a.contains ? a.contains(b) : !!(b.compareDocumentPosition(a) & 8)
};
qq.toElement = function() {
    var a = document.createElement("div");
    return function(b) {
        a.innerHTML = b;
        b = a.firstChild;
        a.removeChild(b);
        return b
    }
}();
qq.css = function(a, b) {
    null != b.opacity && "string" != typeof a.style.opacity && "undefined" != typeof a.filters && (b.filter = "alpha(opacity=" + Math.round(100 * b.opacity) + ")");
    qq.extend(a.style, b)
};
qq.hasClass = function(a, b) {
    return (new RegExp("(^| )" + b + "( |$)")).test(a.className)
};
qq.addClass = function(a, b) {
    qq.hasClass(a, b) || (a.className += " " + b)
};
qq.removeClass = function(a, b) {
    a.className = a.className.replace(new RegExp("(^| )" + b + "( |$)"), " ").replace(/^\s+|\s+$/g, "")
};
qq.setText = function(a, b) {
    a.innerText = b;
    a.textContent = b
};
qq.children = function(a) {
    var b = [];
    for (a = a.firstChild; a;) 1 == a.nodeType && b.push(a), a = a.nextSibling;
    return b
};
qq.getByClass = function(a, b) {
    if (a.querySelectorAll) return a.querySelectorAll("." + b);
    for (var c = [], g = a.getElementsByTagName("*"), f = g.length, d = 0; d < f; d++) qq.hasClass(g[d], b) && c.push(g[d]);
    return c
};
qq.obj2url = function(a, b, c) {
    var g = [],
        f = "&",
        d = function(a, c) {
            var d = b ? /\[\]$/.test(b) ? b : b + "[" + c + "]" : c;
            "undefined" != d && "undefined" != c && g.push("object" === typeof a ? qq.obj2url(a, d, !0) : "[object Function]" === Object.prototype.toString.call(a) ? encodeURIComponent(d) + "=" + encodeURIComponent(a()) : encodeURIComponent(d) + "=" + encodeURIComponent(a))
        };
    if (!c && b) f = /\?/.test(b) ? /\?$/.test(b) ? "" : "&" : "?", g.push(b), g.push(qq.obj2url(a));
    else if ("[object Array]" === Object.prototype.toString.call(a) && "undefined" != typeof a) {
        var e =
            0;
        for (c = a.length; e < c; ++e) d(a[e], e)
    } else if ("undefined" != typeof a && null !== a && "object" === typeof a)
        for (e in a) d(a[e], e);
    else g.push(encodeURIComponent(b) + "=" + encodeURIComponent(a));
    return g.join(f).replace(/^&/, "").replace(/%20/g, "+")
};
qq = qq || {};
qq.FileUploaderBasic = function(a) {
    this._options = {
        debug: !1,
        action: "/server/upload",
        params: {},
        button: null,
        multiple: !0,
        userXhr: !0,
        maxConnections: 3,
        allowedExtensions: [],
        sizeLimit: 0,
        minSizeLimit: 0,
        onSubmit: function(a, c) {},
        onProgress: function(a, c, g, f) {},
        onComplete: function(a, c, g) {},
        onCancel: function(a, c) {},
        messages: {
            typeError: "{file} has invalid extension. Only {extensions} are allowed.",
            sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
            minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
            emptyError: "{file} is empty, please select files again without it.",
            onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
        },
        showMessage: function(a) {
            alert(a)
        }
    };
    qq.extend(this._options, a);
    this._filesInProgress = 0;
    this._handler = this._createUploadHandler();
    this._options.button && (this._button = this._createUploadButton(this._options.button));
    this._preventLeaveInProgress()
};
qq.FileUploaderBasic.prototype = {
    setParams: function(a) {
        this._options.params = a
    },
    getInProgress: function() {
        return this._filesInProgress
    },
    _createUploadButton: function(a) {
        var b = this;
        return new qq.UploadButton({
            element: a,
            multiple: this._options.multiple && qq.UploadHandlerXhr.isSupported(),
            onChange: function(a) {
                b._onInputChange(a)
            }
        })
    },
    _createUploadHandler: function() {
        var a = this;
        var b = this._options.userXhr && qq.UploadHandlerXhr.isSupported() ? "UploadHandlerXhr" : "UploadHandlerForm";
        return new qq[b]({
            debug: this._options.debug,
            action: this._options.action,
            maxConnections: this._options.maxConnections,
            onProgress: function(b, g, f, d) {
                a._onProgress(b, g, f, d);
                a._options.onProgress(b, g, f, d)
            },
            onComplete: function(b, g, f) {
                a._onComplete(b, g, f);
                a._options.onComplete(b, g, f)
            },
            onCancel: function(b, g) {
                a._onCancel(b, g);
                a._options.onCancel(b, g)
            }
        })
    },
    _preventLeaveInProgress: function() {
        var a = this;
        qq.attach(window, "beforeunload", function(b) {
            if (a._filesInProgress) return b = b || window.event, b.returnValue = a._options.messages.onLeave
        })
    },
    _onSubmit: function(a,
        b) {
        this._filesInProgress++
    },
    _onProgress: function(a, b, c, g) {},
    _onComplete: function(a, b, c) {
        this._filesInProgress--;
        c.error && this._options.showMessage(c.error)
    },
    _onCancel: function(a, b) {
        this._filesInProgress--
    },
    _onInputChange: function(a) {
        this._handler instanceof qq.UploadHandlerXhr ? this._uploadFileList(a.files) : this._validateFile(a) && this._uploadFile(a);
        this._button.reset()
    },
    _uploadFileList: function(a) {
        for (var b = 0; b < a.length; b++)
            if (!this._validateFile(a[b])) return;
        for (b = 0; b < a.length; b++) this._uploadFile(a[b])
    },
    _uploadFile: function(a) {
        a = this._handler.add(a);
        var b = this._handler.getName(a);
        !1 !== this._options.onSubmit(a, b) && (this._onSubmit(a, b), this._handler.upload(a, this._options.params))
    },
    _validateFile: function(a) {
        if (a.value) var b = a.value.replace(/.*(\/|\\)/, "");
        else {
            b = null != a.fileName ? a.fileName : a.name;
            var c = null != a.fileSize ? a.fileSize : a.size
        }
        if (this._isAllowedExtension(b)) {
            if (0 === c) return this._error("emptyError", b), !1;
            if (c && this._options.sizeLimit && c > this._options.sizeLimit) return this._error("sizeError",
                b), !1;
            if (c && c < this._options.minSizeLimit) return this._error("minSizeError", b), !1
        } else return this._error("typeError", b), !1;
        return !0
    },
    _error: function(a, b) {
        var c = this._options.messages[a],
            g = this._formatFileName(b),
            c = c.replace("{file}", g),
            g = this._options.allowedExtensions.join(", "),
            c = c.replace("{extensions}", g),
            g = this._formatSize(this._options.sizeLimit),
            c = c.replace("{sizeLimit}", g),
            g = this._formatSize(this._options.minSizeLimit),
            c = c.replace("{minSizeLimit}", g);
        this._options.showMessage(c)
    },
    _formatFileName: function(a) {
        33 <
            a.length && (a = a.slice(0, 19) + "..." + a.slice(-13));
        return a
    },
    _isAllowedExtension: function(a) {
        a = -1 !== a.indexOf(".") ? a.replace(/.*[.]/, "").toLowerCase() : "";
        var b = this._options.allowedExtensions;
        if (!b.length) return !0;
        for (var c = 0; c < b.length; c++)
            if (b[c].toLowerCase() == a) return !0;
        return !1
    },
    _formatSize: function(a) {
        var b = -1;
        do a /= 1024, b++; while (99 < a);
        return Math.max(a, .1).toFixed(1) + "kB MB GB TB PB EB".split(" ")[b]
    }
};
qq.FileUploader = function(a) {
    qq.FileUploaderBasic.apply(this, arguments);
    qq.extend(this._options, {
        element: null,
        listElement: null,
        template: '<div class="qq-uploader"><div class="qq-upload-drop-area"><span>Drop files here to upload</span></div><div class="qq-upload-button btn btn_type_refresh">\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e</div><ul class="qq-upload-list"></ul></div>',
        fileTemplate: '<li><span class="qq-upload-file"></span><span class="qq-upload-spinner"></span><span class="qq-upload-size"></span><a class="qq-upload-cancel" href="#">Cancel</a><span class="qq-upload-failed-text">Failed</span></li>',
        classes: {
            button: "qq-upload-button",
            drop: "qq-upload-drop-area",
            dropActive: "qq-upload-drop-area-active",
            list: "qq-upload-list",
            file: "qq-upload-file",
            spinner: "qq-upload-spinner",
            size: "qq-upload-size",
            cancel: "qq-upload-cancel",
            success: "qq-upload-success",
            fail: "qq-upload-fail"
        }
    });
    qq.extend(this._options, a);
    this._element = this._options.element;
    this._listElement = this._options.listElement || this._find(this._element, "list");
    this._classes = this._options.classes;
    this._button = this._createUploadButton(this._find(this._element,
        "button"));
    this._bindCancelEvent();
    this._setupDragDrop()
};
qq.extend(qq.FileUploader.prototype, qq.FileUploaderBasic.prototype);
qq.extend(qq.FileUploader.prototype, {
    _find: function(a, b) {
        var c = qq.getByClass(a, this._options.classes[b])[0];
        if (!c) throw Error("element not found " + b);
        return c
    },
    _setupDragDrop: function() {
        var a = this,
            b = this._find(this._element, "drop"),
            c = new qq.UploadDropZone({
                element: b,
                onEnter: function(c) {
                    qq.addClass(b, a._classes.dropActive);
                    c.stopPropagation()
                },
                onLeave: function(a) {
                    a.stopPropagation()
                },
                onLeaveNotDescendants: function(c) {
                    qq.removeClass(b, a._classes.dropActive)
                },
                onDrop: function(c) {
                    qq.removeClass(b, a._classes.dropActive);
                    a._uploadFileList(c.dataTransfer.files)
                }
            });
        qq.attach(document, "dragenter", function(a) {
            c._isValidFileDrag(a)
        });
        qq.attach(document, "dragleave", function(a) {
            c._isValidFileDrag(a) && document.elementFromPoint(a.clientX, a.clientY)
        })
    },
    _onSubmit: function(a, b) {
        qq.FileUploaderBasic.prototype._onSubmit.apply(this, arguments);
        this._addToList(a, b)
    },
    _onProgress: function(a, b, c, g) {
        qq.FileUploaderBasic.prototype._onProgress.apply(this, arguments);
        var f = this._getItemByFileId(a),
            f = this._find(f, "size");
        f.style.display = "inline";
        var d = c != g ? Math.round(c / g * 100) + "% from " + this._formatSize(g) : this._formatSize(g);
        qq.setText(f, d)
    },
    _onComplete: function(a, b, c) {
        qq.FileUploaderBasic.prototype._onComplete.apply(this, arguments);
        var g = this._getItemByFileId(a);
        qq.remove(this._find(g, "cancel"));
        qq.remove(this._find(g, "spinner"));
        c.success ? qq.addClass(g, this._classes.success) : qq.addClass(g, this._classes.fail)
    },
    _addToList: function(a, b) {
        var c = qq.toElement(this._options.fileTemplate);
        c.qqFileId = a;
        var g = this._find(c, "file");
        qq.setText(g, this._formatFileName(b));
        this._find(c, "size").style.display = "none";
        this._listElement.appendChild(c)
    },
    _getItemByFileId: function(a) {
        for (var b = this._listElement.firstChild; b;) {
            if (b.qqFileId == a) return b;
            b = b.nextSibling
        }
    },
    _bindCancelEvent: function() {
        var a = this;
        qq.attach(this._listElement, "click", function(b) {
            b = b || window.event;
            var c = b.target || b.srcElement;
            qq.hasClass(c, a._classes.cancel) && (qq.preventDefault(b), b = c.parentNode, a._handler.cancel(b.qqFileId), qq.remove(b))
        })
    }
});
qq.UploadDropZone = function(a) {
    this._options = {
        element: null,
        onEnter: function(a) {},
        onLeave: function(a) {},
        onLeaveNotDescendants: function(a) {},
        onDrop: function(a) {}
    };
    qq.extend(this._options, a);
    this._element = this._options.element;
    this._disableDropOutside();
    this._attachEvents()
};
qq.UploadDropZone.prototype = {
    _disableDropOutside: function(a) {
        qq.UploadDropZone.dropOutsideDisabled || (qq.attach(document, "dragover", function(a) {
            a.dataTransfer && (a.dataTransfer.dropEffect = "none", a.preventDefault())
        }), qq.UploadDropZone.dropOutsideDisabled = !0)
    },
    _attachEvents: function() {
        var a = this;
        qq.attach(a._element, "dragover", function(b) {
            if (a._isValidFileDrag(b)) {
                var c = b.dataTransfer.effectAllowed;
                b.dataTransfer.dropEffect = "move" == c || "linkMove" == c ? "move" : "copy";
                b.stopPropagation();
                b.preventDefault()
            }
        });
        qq.attach(a._element, "dragenter", function(b) {
            if (a._isValidFileDrag(b)) a._options.onEnter(b)
        });
        qq.attach(a._element, "dragleave", function(b) {
            if (a._isValidFileDrag(b)) {
                a._options.onLeave(b);
                var c = document.elementFromPoint(b.clientX, b.clientY);
                if (!qq.contains(this, c)) a._options.onLeaveNotDescendants(b)
            }
        });
        qq.attach(a._element, "drop", function(b) {
            a._isValidFileDrag(b) && (b.preventDefault(), a._options.onDrop(b))
        })
    },
    _isValidFileDrag: function(a) {
        a = a.dataTransfer;
        var b = -1 < navigator.userAgent.indexOf("AppleWebKit");
        return a && "none" != a.effectAllowed && (a.files || !b && a.types.contains && a.types.contains("Files"))
    }
};
qq.UploadButton = function(a) {
    this._options = {
        element: null,
        multiple: !1,
        name: "file",
        onChange: function(a) {},
        hoverClass: "qq-upload-button-hover",
        focusClass: "qq-upload-button-focus"
    };
    qq.extend(this._options, a);
    this._element = this._options.element;
    qq.css(this._element, {
        overflow: "hidden",
        direction: "ltr"
    });
    this._input = this._createInput()
};
qq.UploadButton.prototype = {
    getInput: function() {
        return this._input
    },
    reset: function() {
        this._input.parentNode && qq.remove(this._input);
        qq.removeClass(this._element, this._options.focusClass);
        this._input = this._createInput()
    },
    _createInput: function() {
        var a = document.createElement("input");
        this._options.multiple && a.setAttribute("multiple", "multiple");
        a.setAttribute("type", "file");
        a.setAttribute("name", this._options.name);
        qq.css(a, {
            position: "absolute",
            right: 0,
            top: 0,
            fontFamily: "Arial",
            fontSize: "118px",
            margin: 0,
            padding: 0,
            cursor: "pointer",
            opacity: 0
        });
        $(this._element).find("#qq-input-box").append(a);
        var b = this;
        qq.attach(a, "change", function() {
            b._options.onChange(a)
        });
        qq.attach(a, "mouseover", function() {
            qq.addClass(b._element, b._options.hoverClass)
        });
        qq.attach(a, "mouseout", function() {
            qq.removeClass(b._element, b._options.hoverClass)
        });
        qq.attach(a, "focus", function() {
            qq.addClass(b._element, b._options.focusClass)
        });
        qq.attach(a, "blur", function() {
            qq.removeClass(b._element, b._options.focusClass)
        });
        window.attachEvent &&
            a.setAttribute("tabIndex", "-1");
        return a
    }
};
qq.UploadHandlerAbstract = function(a) {
    this._options = {
        debug: !1,
        action: "/upload.php",
        maxConnections: 999,
        onProgress: function(a, c, g, f) {},
        onComplete: function(a, c, g) {},
        onCancel: function(a, c) {}
    };
    qq.extend(this._options, a);
    this._queue = [];
    this._params = []
};
qq.UploadHandlerAbstract.prototype = {
    log: function(a) {
        this._options.debug && window.console && console.log("[uploader] " + a)
    },
    add: function(a) {},
    upload: function(a, b) {
        var c = this._queue.push(a),
            g = {};
        qq.extend(g, b);
        this._params[a] = g;
        c <= this._options.maxConnections && this._upload(a, this._params[a])
    },
    cancel: function(a) {
        this._cancel(a);
        this._dequeue(a)
    },
    cancelAll: function() {
        for (var a = 0; a < this._queue.length; a++) this._cancel(this._queue[a]);
        this._queue = []
    },
    getName: function(a) {},
    getSize: function(a) {},
    getQueue: function() {
        return this._queue
    },
    _upload: function(a) {},
    _cancel: function(a) {},
    _dequeue: function(a) {
        a = qq.indexOf(this._queue, a);
        this._queue.splice(a, 1);
        var b = this._options.maxConnections;
        this._queue.length >= b && a < b && (a = this._queue[b - 1], this._upload(a, this._params[a]))
    }
};
qq.UploadHandlerForm = function(a) {
    qq.UploadHandlerAbstract.apply(this, arguments);
    this._inputs = {}
};
qq.extend(qq.UploadHandlerForm.prototype, qq.UploadHandlerAbstract.prototype);
qq.extend(qq.UploadHandlerForm.prototype, {
    add: function(a) {
        a.setAttribute("name", "qqfile");
        var b = "qq-upload-handler-iframe" + qq.getUniqueId();
        this._inputs[b] = a;
        a.parentNode && qq.remove(a);
        return b
    },
    getName: function(a) {
        return this._inputs[a].value.replace(/.*(\/|\\)/, "")
    },
    _cancel: function(a) {
        this._options.onCancel(a, this.getName(a));
        delete this._inputs[a];
        if (a = document.getElementById(a)) a.setAttribute("src", "javascript:false;"), qq.remove(a)
    },
    _upload: function(a, b) {
        var c = this._inputs[a];
        if (!c) throw Error("file with passed id was not added, or already uploaded or cancelled");
        var g = this.getName(a),
            f = this._createIframe(a),
            d = this._createForm(f, b);
        d.appendChild(c);
        var e = this;
        this._attachLoadEvent(f, function() {
            e.log("iframe loaded");
            var b = e._getIframeContentJSON(f);
            e._options.onComplete(a, g, b);
            e._dequeue(a);
            delete e._inputs[a];
            setTimeout(function() {
                qq.remove(f)
            }, 1)
        });
        d.submit();
        qq.remove(d);
        return a
    },
    _attachLoadEvent: function(a, b) {
        qq.attach(a, "load", function() {
            a.parentNode && (a.contentDocument && a.contentDocument.body && "false" == a.contentDocument.body.innerHTML || b())
        })
    },
    _getIframeContentJSON: function(a) {
        a =
            a.contentDocument ? a.contentDocument : a.contentWindow.document;
        this.log("converting iframe's innerHTML to JSON");
        this.log("innerHTML = " + a.body.innerHTML);
        try {
            var b = eval("(" + a.body.innerHTML + ")")
        } catch (c) {
            b = {}
        }
        return b
    },
    _createIframe: function(a) {
        var b = qq.toElement('<iframe src="javascript:false;" name="' + a + '" />');
        b.setAttribute("id", a);
        b.style.display = "none";
        document.body.appendChild(b);
        return b
    },
    _createForm: function(a, b) {
        var c = qq.toElement('<form method="post" enctype="multipart/form-data"></form>'),
            g = qq.obj2url(b, this._options.action);
        c.setAttribute("action", g);
        c.setAttribute("target", a.name);
        c.style.display = "none";
        document.body.appendChild(c);
        return c
    }
});
qq.UploadHandlerXhr = function(a) {
    qq.UploadHandlerAbstract.apply(this, arguments);
    this._files = [];
    this._xhrs = [];
    this._loaded = []
};
qq.UploadHandlerXhr.isSupported = function() {
    var a = document.createElement("input");
    a.type = "file";
    return "multiple" in a && "undefined" != typeof File && "undefined" != typeof(new XMLHttpRequest).upload
};
qq.extend(qq.UploadHandlerXhr.prototype, qq.UploadHandlerAbstract.prototype);
qq.extend(qq.UploadHandlerXhr.prototype, {
    add: function(a) {
        if (!(a instanceof File)) throw Error("Passed obj in not a File (in qq.UploadHandlerXhr)");
        return this._files.push(a) - 1
    },
    getName: function(a) {
        a = this._files[a];
        return null != a.fileName ? a.fileName : a.name
    },
    getSize: function(a) {
        a = this._files[a];
        return null != a.fileSize ? a.fileSize : a.size
    },
    getLoaded: function(a) {
        return this._loaded[a] || 0
    },
    _upload: function(a, b) {
        var c = this._files[a],
            g = this.getName(a);
        this.getSize(a);
        this._loaded[a] = 0;
        var f = this._xhrs[a] = new XMLHttpRequest,
            d = this;
        f.upload.onprogress = function(b) {
            b.lengthComputable && (d._loaded[a] = b.loaded, d._options.onProgress(a, g, b.loaded, b.total))
        };
        f.onreadystatechange = function() {
            4 == f.readyState && d._onComplete(a, f)
        };
        b = b || {};
        b.qqfile = g;
        var e = qq.obj2url(b, this._options.action);
        f.open("POST", e, !0);
        f.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        f.setRequestHeader("X-File-Name", encodeURIComponent(g));
        f.setRequestHeader("Content-Type", "application/octet-stream");
        f.send(c)
    },
    _onComplete: function(a, b) {
        if (this._files[a]) {
            var c =
                this.getName(a),
                g = this.getSize(a);
            this._options.onProgress(a, c, g, g);
            if (200 == b.status) {
                this.log("xhr - server response received");
                this.log("responseText = " + b.responseText);
                try {
                    var f = eval("(" + b.responseText + ")")
                } catch (d) {
                    f = {}
                }
                this._options.onComplete(a, c, f)
            } else this._options.onComplete(a, c, {});
            this._files[a] = null;
            this._xhrs[a] = null;
            this._dequeue(a)
        }
    },
    _cancel: function(a) {
        this._options.onCancel(a, this.getName(a));
        this._files[a] = null;
        this._xhrs[a] && (this._xhrs[a].abort(), this._xhrs[a] = null)
    }
});
! function(a) {
    function b(b, c, d) {
        b.each(function() {
            var b = a(this);
            b.off(".alphanum").on("keyup.alphanum change.alphanum paste.alphanum", function(a) {
                var e = "";
                a.originalEvent && a.originalEvent.clipboardData && a.originalEvent.clipboardData.getData && (e = a.originalEvent.clipboardData.getData("text/plain"));
                setTimeout(function() {
                    var a = e,
                        f = b.val();
                    "" == f && 0 < a.length && (f = a);
                    a = c(f, d);
                    if (f != a) {
                        var h = b.alphanum_caret();
                        b.val(a);
                        f.length == a.length + 1 ? b.alphanum_caret(h - 1) : b.alphanum_caret(h)
                    }
                }, 0)
            }).on("keypress.alphanum",
                function(a) {
                    var e = a.charCode ? a.charCode : a.which;
                    if (!((32 <= e ? 0 : 10 == e ? 0 : 13 != e) || a.ctrlKey || a.metaKey)) {
                        var e = String.fromCharCode(e),
                            f = b.selection(),
                            h = f.start,
                            f = f.end,
                            g = b.val(),
                            e = g.substring(0, h) + e + g.substring(f);
                        c(e, d) != e && a.preventDefault()
                    }
                })
        })
    }

    function c(b, c) {
        "undefined" == typeof c && (c = n);
        var d = {};
        a.extend(d, c, "string" == typeof b ? q[b] : "undefined" == typeof b ? {} : b);
        if ("undefined" == typeof d.blacklist) {
            var e = d.allow,
                f = new l(u + d.disallow),
                e = new l(e),
                f = f.subtract(e);
            d.blacklistSet = f
        }
        return d
    }

    function g(b) {
        var c,
            d = {};
        return c = "string" == typeof b ? m[b] : "undefined" == typeof b ? {} : b, a.extend(d, p, c), d
    }

    function f(a, b, c) {
        if (w[b]) {
            var e = c.maxDigits;
            e = "" == e || isNaN(e) ? !1 : d(a) >= e ? !0 : !1;
            if (e) a = !1;
            else if (e = c.maxPreDecimalPlaces, e = "" == e || isNaN(e) ? !1 : 0 <= a.indexOf(x) ? !1 : d(a) >= e ? !0 : !1, e) a = !1;
            else {
                e = c.maxDecimalPlaces;
                if ("" == e || isNaN(e)) e = !1;
                else {
                    var f = a.indexOf(x); - 1 == f ? e = !1 : (f = a.substring(f), e = d(f) >= e ? !0 : !1)
                }
                e ? a = !1 : (e = !c.max || 0 > c.max ? !1 : parseFloat(a + b) > c.max ? !0 : !1, e ? a = !1 : (a = !c.min || 0 < c.min ? !1 : parseFloat(a + b) < c.min ? !0 : !1, a =
                    a ? !1 : !0))
            }
            return a
        }!(e = c.allowPlus && "+" == b && "" == a || c.allowMinus && "-" == b && "" == a) && (e = b == v && c.allowThouSep) && (0 == a.length || 0 <= a.indexOf(x) ? e = !1 : (e = a.indexOf(v), 0 > e ? e = !0 : (f = a.lastIndexOf(v), e = 3 > a.length - f - 1 ? !1 : 0 < d(a.substring(e)) % 3 ? !1 : !0)));
        if (e) return !0;
        if (b == x) {
            if (0 <= a.indexOf(x)) return !1;
            if (c.allowDecSep) return !0
        }
        return !1
    }

    function d(a) {
        return a += "", a.replace(/[^0-9]/g, "").length
    }

    function e(a, b) {
        if ("string" != typeof a) return a;
        var c = a.split(""),
            d = [],
            e;
        for (e = 0; e < c.length; e++) {
            var f = c[e];
            var h = d.join(""),
                g = f,
                l = b;
            if (l.maxLength && h.length >= l.maxLength) g = 0;
            else {
                if (!(h = 0 <= l.allow.indexOf(g)) && !(h = l.allowSpace && " " == g) && (h = l.allowNewline || "\n" != g && "\r" != g)) {
                    if (l.blacklistSet.contains(g)) g = 0;
                    else if (!l.allowNumeric && w[g]) g = 0;
                    else {
                        if (h = !l.allowUpper) var h = g,
                            n = h.toUpperCase(),
                            m = h.toLowerCase(),
                            h = h == n && n != m ? !0 : !1;
                        if (h) g = 0;
                        else {
                            if (h = !l.allowLower) h = g, n = h.toUpperCase(), m = h.toLowerCase(), h = h == m && n != m ? !0 : !1;
                            if (h) g = 0;
                            else {
                                if (h = !l.allowCaseless) h = g, h = h.toUpperCase() == h.toLowerCase() ? !0 : !1;
                                g = h ? 0 : !l.allowLatin && E.contains(g) ?
                                    0 : l.allowOtherCharSets || w[g] || E.contains(g)
                            }
                        }
                    }
                    h = g
                }
                g = h
            }
            g && d.push(f)
        }
        f = d.join("");
        return b.forceLower ? f = f.toLowerCase() : b.forceUpper && (f = f.toUpperCase()), f
    }

    function h(a, b) {
        if ("string" != typeof a) return a;
        var c = a.split(""),
            d = [],
            e;
        for (e = 0; e < c.length; e++) {
            var h = c[e];
            var g = d.join("");
            f(g, h, b) && d.push(h)
        }
        return d.join("")
    }

    function l(a) {
        if ("string" == typeof a) {
            var b = {},
                c = a.split(""),
                d;
            for (d = 0; d < c.length; d++) a = c[d], b[a] = !0;
            this.map = b
        } else this.map = {}
    }
    a.fn.alphanum = function(a) {
        a = c(a);
        return b(this, e, a), this
    };
    a.fn.alpha = function(a) {
        var d = c("alpha");
        a = c(a, d);
        return b(this, e, a), this
    };
    a.fn.numeric = function(c) {
        var d = g(c);
        return b(this, h, d), this.blur(function() {
            var b = parseFloat(a(this).val()),
                d = a(this);
            isNaN(b) ? d.val("") : (!isNaN(c.min) && b < c.min && d.val(""), !isNaN(c.max) && b > c.max && d.val(""))
        }), this
    };
    var n = {
            allow: "",
            disallow: "",
            allowSpace: !0,
            allowNewline: !0,
            allowNumeric: !0,
            allowUpper: !0,
            allowLower: !0,
            allowCaseless: !0,
            allowLatin: !0,
            allowOtherCharSets: !0,
            forceUpper: !1,
            forceLower: !1,
            maxLength: NaN
        },
        p = {
            allowPlus: !1,
            allowMinus: !0,
            allowThouSep: !0,
            allowDecSep: !0,
            allowLeadingSpaces: !1,
            maxDigits: NaN,
            maxDecimalPlaces: NaN,
            maxPreDecimalPlaces: NaN,
            max: NaN,
            min: NaN
        },
        q = {
            alpha: {
                allowNumeric: !1
            },
            upper: {
                allowNumeric: !1,
                allowUpper: !0,
                allowLower: !1,
                allowCaseless: !0
            },
            lower: {
                allowNumeric: !1,
                allowUpper: !1,
                allowLower: !0,
                allowCaseless: !0
            }
        },
        m = {
            integer: {
                allowPlus: !1,
                allowMinus: !0,
                allowThouSep: !1,
                allowDecSep: !1
            },
            positiveInteger: {
                allowPlus: !1,
                allowMinus: !1,
                allowThouSep: !1,
                allowDecSep: !1
            }
        },
        u = "!@#$%^&*()+=[]\\';,/{}|\":<>?~`.-_ \u00ac\u20ac\u00a3\u00a6",
        v = ",",
        x = ".",
        w = function() {
            var a = "0123456789".split(""),
                b = {},
                c;
            for (c = 0; c < a.length; c++) {
                var d = a[c];
                b[d] = !0
            }
            return b
        }(),
        E = new l("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    l.prototype.add = function(a) {
        var b = this.clone(),
            c;
        for (c in a.map) b.map[c] = !0;
        return b
    };
    l.prototype.subtract = function(a) {
        var b = this.clone(),
            c;
        for (c in a.map) delete b.map[c];
        return b
    };
    l.prototype.contains = function(a) {
        return this.map[a] ? !0 : !1
    };
    l.prototype.clone = function() {
        var a = new l,
            b;
        for (b in this.map) a.map[b] = !0;
        return a
    };
    a.fn.alphanum.backdoorAlphaNum = function(a, b) {
        var d = c(b);
        return e(a, d)
    };
    a.fn.alphanum.backdoorNumeric = function(a, b) {
        var c = g(b);
        return h(a, c)
    };
    a.fn.alphanum.setNumericSeparators = function(a) {
        1 == a.thousandsSeparator.length && 1 == a.decimalSeparator.length && (v = a.thousandsSeparator, x = a.decimalSeparator)
    }
}(jQuery);
(function(a) {
    function b(a, b) {
        if (a.createTextRange) {
            var c = a.createTextRange();
            c.move("character", b);
            c.select()
        } else null != a.selectionStart && (a.focus(), a.setSelectionRange(b, b))
    }

    function c(a) {
        if ("selection" in document) {
            a = a.createTextRange();
            try {
                a.setEndPoint("EndToStart", document.selection.createRange())
            } catch (f) {
                return 0
            }
            return a.text.length
        }
        return null != a.selectionStart ? a.selectionStart : void 0
    }
    a.fn.alphanum_caret = function(g, f) {
        return "undefined" == typeof g ? c(this.get(0)) : this.queue(function(c) {
            if (isNaN(g)) {
                var d =
                    a(this).val().indexOf(g);
                !0 === f ? d += g.length : "undefined" != typeof f && (d += f);
                b(this, d)
            } else b(this, g);
            c()
        })
    }
})(jQuery);
(function(a) {
    var b = function(a) {
            return a ? a.ownerDocument.defaultView || a.ownerDocument.parentWindow : window
        },
        c = function(b, c) {
            var d = a.Range.current(b).clone(),
                e = a.Range(b).select(b);
            return d.overlaps(e) ? (1 > d.compare("START_TO_START", e) ? (startPos = 0, d.move("START_TO_START", e)) : (fromElementToCurrent = e.clone(), fromElementToCurrent.move("END_TO_START", d), startPos = fromElementToCurrent.toString().length), 0 <= d.compare("END_TO_END", e) ? endPos = e.toString().length : endPos = startPos + d.toString().length, {
                start: startPos,
                end: endPos
            }) : null
        },
        g = function(d) {
            var e = b(d);
            if (void 0 !== d.selectionStart) return document.activeElement && document.activeElement != d && d.selectionStart == d.selectionEnd && 0 == d.selectionStart ? {
                start: d.value.length,
                end: d.value.length
            } : {
                start: d.selectionStart,
                end: d.selectionEnd
            };
            if (e.getSelection) return c(d, e);
            try {
                if ("input" == d.nodeName.toLowerCase()) {
                    var f = b(d).document.selection.createRange(),
                        g = d.createTextRange();
                    g.setEndPoint("EndToStart", f);
                    var n = g.text.length;
                    return {
                        start: n,
                        end: n + f.text.length
                    }
                }
                var p =
                    c(d, e);
                if (!p) return p;
                var q = a.Range.current().clone(),
                    m = q.clone().collapse().range,
                    u = q.clone().collapse(!1).range;
                return m.moveStart("character", -1), u.moveStart("character", -1), 0 != p.startPos && "" == m.text && (p.startPos += 2), 0 != p.endPos && "" == u.text && (p.endPos += 2), p
            } catch (v) {
                return {
                    start: d.value.length,
                    end: d.value.length
                }
            }
        },
        f = function(a, b, c) {
            c = c || 0;
            for (var d = 0; a[d]; d++) {
                var e = a[d];
                if (3 === e.nodeType || 4 === e.nodeType) {
                    var h = c;
                    var g = c += e.nodeValue.length,
                        m = b;
                    "number" == typeof m[0] && m[0] < g && (m[0] = {
                        el: e,
                        count: m[0] -
                            h
                    });
                    "number" == typeof m[1] && m[1] <= g && (m[1] = {
                        el: e,
                        count: m[1] - h
                    })
                } else 8 !== e.nodeType && (c = f(e.childNodes, b, c))
            }
            return c
        };
    jQuery.fn.selection = function(a, c) {
        return void 0 !== a ? this.each(function() {
            var d = c,
                e = b(this);
            if (this.setSelectionRange) void 0 === d ? (this.focus(), this.setSelectionRange(a, a)) : (this.select(), this.selectionStart = a, this.selectionEnd = d);
            else if (this.createTextRange) e = this.createTextRange(), e.moveStart("character", a), d = d || a, e.moveEnd("character", d - this.value.length), e.select();
            else if (e.getSelection) {
                var g =
                    e.document;
                e = e.getSelection();
                g = g.createRange();
                d = [a, void 0 !== d ? d : a];
                f([this], d);
                g.setStart(d[0].el, d[0].count);
                g.setEnd(d[1].el, d[1].count);
                e.removeAllRanges();
                e.addRange(g)
            } else e.document.body.createTextRange && (g = document.body.createTextRange(), g.moveToElementText(this), g.collapse(), g.moveStart("character", a), g.moveEnd("character", void 0 !== d ? d : a), g.select())
        }) : g(this[0])
    };
    a.fn.selection.getCharElement = f
})(jQuery);
(function(a, b, c, g) {
    var f = c("html"),
        d = c(a),
        e = c(b),
        h = c.fancybox = function() {
            h.open.apply(this, arguments)
        },
        l = navigator.userAgent.match(/msie/i),
        n = null,
        p = b.createTouch !== g,
        q = function(a) {
            return a && a.hasOwnProperty && a instanceof c
        },
        m = function(a) {
            return a && "string" === c.type(a)
        },
        u = function(a) {
            return m(a) && 0 < a.indexOf("%")
        },
        v = function(a, b) {
            var c = parseInt(a, 10) || 0;
            b && u(a) && (c *= h.getViewport()[b] / 100);
            return Math.ceil(c)
        },
        x = function(a, b) {
            return v(a, b) + "px"
        };
    c.extend(h, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !p,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3E3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
                    (l ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: c.noop,
            beforeLoad: c.noop,
            afterLoad: c.noop,
            beforeShow: c.noop,
            afterShow: c.noop,
            beforeChange: c.noop,
            beforeClose: c.noop,
            afterClose: c.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(a, b) {
            if (a && (c.isPlainObject(b) || (b = {}), !1 !== h.close(!0))) return c.isArray(a) || (a = q(a) ? c(a).get() : [a]), c.each(a, function(d, e) {
                var f = {},
                    l;
                "object" === c.type(e) && (e.nodeType && (e = c(e)), q(e) ? (f = {
                        href: e.data("fancybox-href") || e.attr("href"),
                        title: e.data("fancybox-title") || e.attr("title"),
                        isDom: !0,
                        element: e
                    }, c.metadata && c.extend(!0, f, e.metadata())) :
                    f = e);
                var n = b.href || f.href || (m(e) ? e : null);
                var p = b.title !== g ? b.title : f.title || "";
                var w = (l = b.content || f.content) ? "html" : b.type || f.type;
                !w && f.isDom && (w = e.data("fancybox-type"), w || (w = (w = e.prop("class").match(/fancybox\.(\w+)/)) ? w[1] : null));
                if (m(n) && (w || (h.isImage(n) ? w = "image" : h.isSWF(n) ? w = "swf" : "#" === n.charAt(0) ? w = "inline" : m(e) && (w = "html", l = e)), "ajax" === w)) {
                    var y = n.split(/\s+/, 2);
                    n = y.shift();
                    y = y.shift()
                }
                l || ("inline" === w ? n ? l = c(m(n) ? n.replace(/.*(?=#[^\s]+$)/, "") : n) : f.isDom && (l = e) : "html" === w ? l = n : w || n || !f.isDom ||
                    (w = "inline", l = e));
                c.extend(f, {
                    href: n,
                    type: w,
                    content: l,
                    title: p,
                    selector: y
                });
                a[d] = f
            }), h.opts = c.extend(!0, {}, h.defaults, b), b.keys !== g && (h.opts.keys = b.keys ? c.extend({}, h.defaults.keys, b.keys) : !1), h.group = a, h._start(h.opts.index)
        },
        cancel: function() {
            var a = h.coming;
            a && !1 !== h.trigger("onCancel") && (h.hideLoading(), h.ajaxLoad && h.ajaxLoad.abort(), h.ajaxLoad = null, h.imgPreload && (h.imgPreload.onload = h.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), h.coming = null, h.current || h._afterZoomOut(a))
        },
        close: function(a) {
            h.cancel();
            !1 !== h.trigger("beforeClose") && (h.unbindEvents(), h.isActive && (h.isOpen && !0 !== a ? (h.isOpen = h.isOpened = !1, h.isClosing = !0, c(".fancybox-item, .fancybox-nav").remove(), h.wrap.stop(!0, !0).removeClass("fancybox-opened"), h.transitions[h.current.closeMethod]()) : (c(".fancybox-wrap").stop(!0).trigger("onReset").remove(), h._afterZoomOut())))
        },
        play: function(a) {
            var b = function() {
                    clearTimeout(h.player.timer)
                },
                c = function() {
                    b();
                    h.current && h.player.isActive && (h.player.timer = setTimeout(h.next,
                        h.current.playSpeed))
                },
                d = function() {
                    b();
                    e.unbind(".player");
                    h.player.isActive = !1;
                    h.trigger("onPlayEnd")
                };
            !0 === a || !h.player.isActive && !1 !== a ? h.current && (h.current.loop || h.current.index < h.group.length - 1) && (h.player.isActive = !0, e.bind({
                "onCancel.player beforeClose.player": d,
                "onUpdate.player": c,
                "beforeLoad.player": b
            }), c(), h.trigger("onPlayStart")) : d()
        },
        next: function(a) {
            var b = h.current;
            b && (m(a) || (a = b.direction.next), h.jumpto(b.index + 1, a, "next"))
        },
        prev: function(a) {
            var b = h.current;
            b && (m(a) || (a = b.direction.prev),
                h.jumpto(b.index - 1, a, "prev"))
        },
        jumpto: function(a, b, c) {
            var d = h.current;
            d && (a = v(a), h.direction = b || d.direction[a >= d.index ? "next" : "prev"], h.router = c || "jumpto", d.loop && (0 > a && (a = d.group.length + a % d.group.length), a %= d.group.length), d.group[a] !== g && (h.cancel(), h._start(a)))
        },
        reposition: function(a, b) {
            var d = h.current,
                e = d ? d.wrap : null;
            if (e) {
                var f = h._getPosition(b);
                a && "scroll" === a.type ? (delete f.position, e.stop(!0, !0).animate(f, 200)) : (e.css(f), d.pos = c.extend({}, d.dim, f))
            }
        },
        update: function(a) {
            var b = a && a.type,
                c = !b || "orientationchange" === b;
            c && (clearTimeout(n), n = null);
            h.isOpen && !n && (n = setTimeout(function() {
                var d = h.current;
                d && !h.isClosing && (h.wrap.removeClass("fancybox-tmp"), (c || "load" === b || "resize" === b && d.autoResize) && h._setDimension(), "scroll" === b && d.canShrink || h.reposition(a), h.trigger("onUpdate"), n = null)
            }, c && !p ? 0 : 300))
        },
        toggle: function(a) {
            h.isOpen && (h.current.fitToView = "boolean" === c.type(a) ? a : !h.current.fitToView, p && (h.wrap.removeAttr("style").addClass("fancybox-tmp"), h.trigger("onUpdate")), h.update())
        },
        hideLoading: function() {
            e.unbind(".loading");
            c("#fancybox-loading").remove()
        },
        showLoading: function() {
            h.hideLoading();
            var a = c('<div id="fancybox-loading"><div></div></div>').click(h.cancel).appendTo("body");
            e.bind("keydown.loading", function(a) {
                27 === (a.which || a.keyCode) && (a.preventDefault(), h.cancel())
            });
            if (!h.defaults.fixed) {
                var b = h.getViewport();
                a.css({
                    position: "absolute",
                    top: .5 * b.h + b.y,
                    left: .5 * b.w + b.x
                })
            }
        },
        getViewport: function() {
            var b = h.current && h.current.locked || !1,
                c = {
                    x: d.scrollLeft(),
                    y: d.scrollTop()
                };
            b ? (c.w = b[0].clientWidth, c.h = b[0].clientHeight) : (c.w = p && a.innerWidth ? a.innerWidth : d.width(), c.h = p && a.innerHeight ? a.innerHeight : d.height());
            return c
        },
        unbindEvents: function() {
            h.wrap && q(h.wrap) && h.wrap.unbind(".fb");
            e.unbind(".fb");
            d.unbind(".fb")
        },
        bindEvents: function() {
            var a = h.current,
                b;
            a && (d.bind("orientationchange.fb" + (p ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), h.update), (b = a.keys) && e.bind("keydown.fb", function(d) {
                var e = d.which || d.keyCode,
                    f = d.target || d.srcElement;
                if (27 === e && h.coming) return !1;
                d.ctrlKey || d.altKey || d.shiftKey || d.metaKey || f && (f.type || c(f).is("[contenteditable]")) || c.each(b, function(b, f) {
                    if (1 < a.group.length && f[e] !== g) return h[b](f[e]), d.preventDefault(), !1;
                    if (-1 < c.inArray(e, f)) return h[b](), d.preventDefault(), !1
                })
            }), c.fn.mousewheel && a.mouseWheel && h.wrap.bind("mousewheel.fb", function(b, d, e, f) {
                for (var g = c(b.target || null), l = !1; g.length && !(l || g.is(".fancybox-skin") || g.is(".fancybox-wrap"));) l = (l = g[0]) && !(l.style.overflow && "hidden" === l.style.overflow) && (l.clientWidth && l.scrollWidth >
                    l.clientWidth || l.clientHeight && l.scrollHeight > l.clientHeight), g = c(g).parent();
                0 !== d && !l && 1 < h.group.length && !a.canShrink && (0 < f || 0 < e ? h.prev(0 < f ? "down" : "left") : (0 > f || 0 > e) && h.next(0 > f ? "up" : "right"), b.preventDefault())
            }))
        },
        trigger: function(a, b) {
            var d, f = b || h.coming || h.current;
            if (f) {
                c.isFunction(f[a]) && (d = f[a].apply(f, Array.prototype.slice.call(arguments, 1)));
                if (!1 === d) return !1;
                f.helpers && c.each(f.helpers, function(b, d) {
                    if (d && h.helpers[b] && c.isFunction(h.helpers[b][a])) h.helpers[b][a](c.extend(!0, {}, h.helpers[b].defaults,
                        d), f)
                });
                e.trigger(a)
            }
        },
        isImage: function(a) {
            return m(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(a) {
            return m(a) && a.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(a) {
            var b = {};
            a = v(a);
            var d = h.group[a] || null;
            if (!d) return !1;
            b = c.extend(!0, {}, h.opts, d);
            d = b.margin;
            var e = b.padding;
            "number" === c.type(d) && (b.margin = [d, d, d, d]);
            "number" === c.type(e) && (b.padding = [e, e, e, e]);
            b.modal && c.extend(!0, b, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            });
            b.autoSize && (b.autoWidth = b.autoHeight = !0);
            "auto" === b.width && (b.autoWidth = !0);
            "auto" === b.height && (b.autoHeight = !0);
            b.group = h.group;
            b.index = a;
            h.coming = b;
            if (!1 === h.trigger("beforeLoad")) h.coming = null;
            else {
                e = b.type;
                d = b.href;
                if (!e) return h.coming = null, h.current && h.router && "jumpto" !== h.router ? (h.current.index = a, h[h.router](h.direction)) : !1;
                h.isActive = !0;
                if ("image" === e || "swf" === e) b.autoHeight = b.autoWidth = !1, b.scrolling = "visible";
                "image" === e && (b.aspectRatio = !0);
                "iframe" === e && p && (b.scrolling = "scroll");
                b.wrap = c(b.tpl.wrap).addClass("fancybox-" + (p ? "mobile" : "desktop") + " fancybox-type-" + e + " fancybox-tmp " + b.wrapCSS).appendTo(b.parent || "body");
                c.extend(b, {
                    skin: c(".fancybox-skin", b.wrap),
                    outer: c(".fancybox-outer", b.wrap),
                    inner: c(".fancybox-inner", b.wrap)
                });
                c.each(["Top", "Right", "Bottom", "Left"], function(a, c) {
                    b.skin.css("padding" + c, x(b.padding[a]))
                });
                h.trigger("onReady");
                if ("inline" === e || "html" === e) {
                    if (!b.content || !b.content.length) return h._error("content")
                } else if (!d) return h._error("href");
                "image" === e ? h._loadImage() : "ajax" === e ? h._loadAjax() : "iframe" === e ? h._loadIframe() : h._afterLoad()
            }
        },
        _error: function(a) {
            c.extend(h.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: h.coming.tpl.error
            });
            h._afterLoad()
        },
        _loadImage: function() {
            var a = h.imgPreload = new Image;
            a.onload = function() {
                this.onload = this.onerror = null;
                h.coming.width = this.width / h.opts.pixelRatio;
                h.coming.height = this.height / h.opts.pixelRatio;
                h._afterLoad()
            };
            a.onerror = function() {
                this.onload =
                    this.onerror = null;
                h._error("image")
            };
            a.src = h.coming.href;
            !0 !== a.complete && h.showLoading()
        },
        _loadAjax: function() {
            var a = h.coming;
            h.showLoading();
            h.ajaxLoad = c.ajax(c.extend({}, a.ajax, {
                url: a.href,
                error: function(a, b) {
                    h.coming && "abort" !== b ? h._error("ajax", a) : h.hideLoading()
                },
                success: function(b, c) {
                    "success" === c && (a.content = b, h._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var a = h.coming,
                b = c(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", p ? "auto" : a.iframe.scrolling).attr("src", a.href);
            c(a.wrap).bind("onReset", function() {
                try {
                    c(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (y) {}
            });
            a.iframe.preload && (h.showLoading(), b.one("load", function() {
                c(this).data("ready", 1);
                p || c(this).bind("load.fb", h.update);
                c(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                h._afterLoad()
            }));
            a.content = b.appendTo(a.inner);
            a.iframe.preload || h._afterLoad()
        },
        _preloadImages: function() {
            var a = h.group,
                b = h.current,
                c = a.length,
                d = b.preload ? Math.min(b.preload,
                    c - 1) : 0,
                e;
            for (e = 1; e <= d; e += 1) {
                var f = a[(b.index + e) % c];
                "image" === f.type && f.href && ((new Image).src = f.href)
            }
        },
        _afterLoad: function() {
            var a = h.coming,
                b = h.current;
            h.hideLoading();
            if (a && !1 !== h.isActive)
                if (!1 === h.trigger("afterLoad", a, b)) a.wrap.stop(!0).trigger("onReset").remove(), h.coming = null;
                else {
                    b && (h.trigger("beforeChange", b), b.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                    h.unbindEvents();
                    var d = a.content;
                    var e = a.type;
                    var f = a.scrolling;
                    c.extend(h, {
                        wrap: a.wrap,
                        skin: a.skin,
                        outer: a.outer,
                        inner: a.inner,
                        current: a,
                        previous: b
                    });
                    var g = a.href;
                    switch (e) {
                        case "inline":
                        case "ajax":
                        case "html":
                            a.selector ? d = c("<div>").html(d).find(a.selector) : q(d) && (d.data("fancybox-placeholder") || d.data("fancybox-placeholder", c('<div class="fancybox-placeholder"></div>').insertAfter(d).hide()), d = d.show().detach(), a.wrap.bind("onReset", function() {
                                c(this).find(d).length && d.hide().replaceAll(d.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                            }));
                            break;
                        case "image":
                            d = a.tpl.image.replace("{href}",
                                g);
                            break;
                        case "swf":
                            d = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>';
                            var l = "";
                            c.each(a.swf, function(a, b) {
                                d += '<param name="' + a + '" value="' + b + '"></param>';
                                l += " " + a + '="' + b + '"'
                            });
                            d += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + l + "></embed></object>"
                    }
                    q(d) && d.parent().is(a.inner) || a.inner.append(d);
                    h.trigger("beforeShow");
                    a.inner.css("overflow", "yes" === f ? "scroll" :
                        "no" === f ? "hidden" : f);
                    h._setDimension();
                    h.reposition();
                    h.isOpen = !1;
                    h.coming = null;
                    h.bindEvents();
                    if (!h.isOpened) c(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
                    else if (b.prevMethod) h.transitions[b.prevMethod]();
                    h.transitions[h.isOpened ? a.nextMethod : a.openMethod]();
                    h._preloadImages()
                }
        },
        _setDimension: function() {
            var a = h.getViewport(),
                b = 0,
                d = h.wrap,
                e = h.skin,
                f = h.inner,
                g = h.current;
            var l = g.width;
            var n = g.height,
                m = g.minWidth,
                p = g.minHeight,
                q = g.maxWidth,
                C = g.maxHeight,
                Q = g.scrolling,
                Z = g.scrollOutside ?
                g.scrollbarWidth : 0,
                W = g.margin,
                M = v(W[1] + W[3]),
                X = v(W[0] + W[2]);
            d.add(e).add(f).width("auto").height("auto").removeClass("fancybox-tmp");
            W = v(e.outerWidth(!0) - e.width());
            var U = v(e.outerHeight(!0) - e.height());
            var da = M + W;
            var L = X + U;
            var N = u(l) ? (a.w - da) * v(l) / 100 : l;
            var O = u(n) ? (a.h - L) * v(n) / 100 : n;
            if ("iframe" === g.type) {
                var T = g.content;
                if (g.autoHeight && 1 === T.data("ready")) try {
                    if (T[0].contentWindow.document.location) {
                        f.width(N).height(9999);
                        var G = T.contents().find("body");
                        Z && G.css("overflow-x", "hidden");
                        O = G.outerHeight(!0)
                    }
                } catch (fa) {}
            } else if (g.autoWidth ||
                g.autoHeight) f.addClass("fancybox-tmp"), g.autoWidth || f.width(N), g.autoHeight || f.height(O), g.autoWidth && (N = f.width()), g.autoHeight && (O = f.height()), f.removeClass("fancybox-tmp");
            l = v(N);
            n = v(O);
            var P = N / O;
            m = v(u(m) ? v(m, "w") - da : m);
            q = v(u(q) ? v(q, "w") - da : q);
            p = v(u(p) ? v(p, "h") - L : p);
            C = v(u(C) ? v(C, "h") - L : C);
            G = q;
            var aa = C;
            g.fitToView && (q = Math.min(a.w - da, q), C = Math.min(a.h - L, C));
            da = a.w - M;
            X = a.h - X;
            g.aspectRatio ? (l > q && (l = q, n = v(l / P)), n > C && (n = C, l = v(n * P)), l < m && (l = m, n = v(l / P)), n < p && (n = p, l = v(n * P))) : (l = Math.max(m, Math.min(l,
                q)), g.autoHeight && "iframe" !== g.type && (f.width(l), n = f.height()), n = Math.max(p, Math.min(n, C)));
            if (g.fitToView)
                if (f.width(l).height(n), d.width(l + W), a = d.width(), M = d.height(), g.aspectRatio)
                    for (;
                        (a > da || M > X) && l > m && n > p && !(19 < b++);) n = Math.max(p, Math.min(C, n - 10)), l = v(n * P), l < m && (l = m, n = v(l / P)), l > q && (l = q, n = v(l / P)), f.width(l).height(n), d.width(l + W), a = d.width(), M = d.height();
                else l = Math.max(m, Math.min(l, l - (a - da))), n = Math.max(p, Math.min(n, n - (M - X)));
            Z && "auto" === Q && n < O && l + W + Z < da && (l += Z);
            f.width(l).height(n);
            d.width(l +
                W);
            a = d.width();
            M = d.height();
            b = (a > da || M > X) && l > m && n > p;
            l = g.aspectRatio ? l < G && n < aa && l < N && n < O : (l < G || n < aa) && (l < N || n < O);
            c.extend(g, {
                dim: {
                    width: x(a),
                    height: x(M)
                },
                origWidth: N,
                origHeight: O,
                canShrink: b,
                canExpand: l,
                wPadding: W,
                hPadding: U,
                wrapSpace: M - e.outerHeight(!0),
                skinSpace: e.height() - n
            });
            !T && g.autoHeight && n > p && n < C && !l && f.height("auto")
        },
        _getPosition: function(a) {
            var b = h.current,
                c = h.getViewport(),
                d = b.margin,
                e = h.wrap.width() + d[1] + d[3],
                f = h.wrap.height() + d[0] + d[2],
                d = {
                    position: "absolute",
                    top: d[0],
                    left: d[3]
                };
            b.autoCenter &&
                b.fixed && !a && f <= c.h && e <= c.w ? d.position = "fixed" : b.locked || (d.top += c.y, d.left += c.x);
            d.top = x(Math.max(d.top, d.top + (c.h - f) * b.topRatio));
            d.left = x(Math.max(d.left, d.left + (c.w - e) * b.leftRatio));
            return d
        },
        _afterZoomIn: function() {
            var a = h.current;
            a && ((h.isOpen = h.isOpened = !0, h.wrap.css("overflow", "visible").addClass("fancybox-opened"), h.update(), (a.closeClick || a.nextClick && 1 < h.group.length) && h.inner.css("cursor", "pointer").bind("click.fb", function(b) {
                c(b.target).is("a") || c(b.target).parent().is("a") || (b.preventDefault(),
                    h[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && c(a.tpl.closeBtn).appendTo(h.skin).bind("click.fb", function(a) {
                a.preventDefault();
                h.close()
            }), a.arrows && 1 < h.group.length && ((a.loop || 0 < a.index) && c(a.tpl.prev).appendTo(h.outer).bind("click.fb", h.prev), (a.loop || a.index < h.group.length - 1) && c(a.tpl.next).appendTo(h.outer).bind("click.fb", h.next)), h.trigger("afterShow"), a.loop || a.index !== a.group.length - 1) ? h.opts.autoPlay && !h.player.isActive && (h.opts.autoPlay = !1, h.play()) : h.play(!1))
        },
        _afterZoomOut: function(a) {
            a =
                a || h.current;
            c(".fancybox-wrap").trigger("onReset").remove();
            c.extend(h, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            h.trigger("afterClose", a)
        }
    });
    h.transitions = {
        getOrigPosition: function() {
            var a = h.current,
                b = a.element,
                c = a.orig,
                d = {},
                e = 50,
                f = 50,
                g = a.hPadding,
                l = a.wPadding,
                n = h.getViewport();
            !c && a.isDom && b.is(":visible") && (c = b.find("img:first"), c.length || (c = b));
            q(c) ? (d = c.offset(), c.is("img") && (e = c.outerWidth(), f = c.outerHeight())) :
                (d.top = n.y + (n.h - f) * a.topRatio, d.left = n.x + (n.w - e) * a.leftRatio);
            if ("fixed" === h.wrap.css("position") || a.locked) d.top -= n.y, d.left -= n.x;
            return d = {
                top: x(d.top - g * a.topRatio),
                left: x(d.left - l * a.leftRatio),
                width: x(e + l),
                height: x(f + g)
            }
        },
        step: function(a, b) {
            var c = b.prop;
            var d = h.current;
            var e = d.wrapSpace,
                f = d.skinSpace;
            if ("width" === c || "height" === c) {
                var g = b.end === b.start ? 1 : (a - b.start) / (b.end - b.start);
                h.isClosing && (g = 1 - g);
                d = "width" === c ? d.wPadding : d.hPadding;
                d = a - d;
                h.skin[c](v("width" === c ? d : d - e * g));
                h.inner[c](v("width" ===
                    c ? d : d - e * g - f * g))
            }
        },
        zoomIn: function() {
            var a = h.current,
                b = a.pos,
                d = a.openEffect,
                e = "elastic" === d,
                f = c.extend({
                    opacity: 1
                }, b);
            delete f.position;
            e ? (b = this.getOrigPosition(), a.openOpacity && (b.opacity = .1)) : "fade" === d && (b.opacity = .1);
            h.wrap.css(b).animate(f, {
                duration: "none" === d ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: e ? this.step : null,
                complete: h._afterZoomIn
            })
        },
        zoomOut: function() {
            var a = h.current,
                b = a.closeEffect,
                c = "elastic" === b,
                d = {
                    opacity: .1
                };
            c && (d = this.getOrigPosition(), a.closeOpacity && (d.opacity = .1));
            h.wrap.animate(d, {
                duration: "none" === b ? 0 : a.closeSpeed,
                easing: a.closeEasing,
                step: c ? this.step : null,
                complete: h._afterZoomOut
            })
        },
        changeIn: function() {
            var a = h.current,
                b = a.nextEffect,
                c = a.pos,
                d = {
                    opacity: 1
                },
                e = h.direction;
            c.opacity = .1;
            if ("elastic" === b) {
                var f = "down" === e || "up" === e ? "top" : "left";
                "down" === e || "right" === e ? (c[f] = x(v(c[f]) - 200), d[f] = "+=200px") : (c[f] = x(v(c[f]) + 200), d[f] = "-=200px")
            }
            "none" === b ? h._afterZoomIn() : h.wrap.css(c).animate(d, {
                duration: a.nextSpeed,
                easing: a.nextEasing,
                complete: h._afterZoomIn
            })
        },
        changeOut: function() {
            var a =
                h.previous,
                b = a.prevEffect,
                d = {
                    opacity: .1
                },
                e = h.direction;
            "elastic" === b && (d["down" === e || "up" === e ? "top" : "left"] = ("up" === e || "left" === e ? "-" : "+") + "=200px");
            a.wrap.animate(d, {
                duration: "none" === b ? 0 : a.prevSpeed,
                easing: a.prevEasing,
                complete: function() {
                    c(this).trigger("onReset").remove()
                }
            })
        }
    };
    h.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !p,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: c("html"),
        create: function(a) {
            a = c.extend({}, this.defaults, a);
            this.overlay && this.close();
            this.overlay =
                c('<div class="fancybox-overlay"></div>').appendTo(h.coming ? h.coming.parent : a.parent);
            this.fixed = !1;
            a.fixed && h.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function(a) {
            var b = this;
            a = c.extend({}, this.defaults, a);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
            this.fixed || (d.bind("resize.overlay", c.proxy(this.update, this)), this.update());
            a.closeClick && this.overlay.bind("click.overlay", function(a) {
                if (c(a.target).hasClass("fancybox-overlay")) return h.isActive ?
                    h.close() : b.close(), !1
            });
            this.overlay.css(a.css).show()
        },
        close: function() {
            d.unbind("resize.overlay");
            if (this.el.hasClass("fancybox-lock")) {
                c(".fancybox-margin").removeClass("fancybox-margin");
                var a = d.scrollTop();
                var b = d.scrollLeft();
                this.el.removeClass("fancybox-lock");
                d.scrollTop(a).scrollLeft(b)
            }
            c(".fancybox-overlay").remove().hide();
            c.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function() {
            var a = "100%";
            this.overlay.width(a).height("100%");
            if (l) {
                var c = Math.max(b.documentElement.offsetWidth, b.body.offsetWidth);
                e.width() > c && (a = e.width())
            } else e.width() > d.width() && (a = e.width());
            this.overlay.width(a).height(e.height())
        },
        onReady: function(a, b) {
            var f = this.overlay;
            c(".fancybox-overlay").stop(!0, !0);
            f || this.create(a);
            a.locked && this.fixed && b.fixed && (f || (this.margin = e.height() > d.height() ? c("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);
            !0 === a.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(a, b) {
            if (b.locked) {
                !1 !== this.margin && (c("*").filter(function() {
                    return "fixed" ===
                        c(this).css("position") && !c(this).hasClass("fancybox-overlay") && !c(this).hasClass("fancybox-wrap")
                }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin"));
                var e = d.scrollTop();
                var f = d.scrollLeft();
                this.el.addClass("fancybox-lock");
                d.scrollTop(e).scrollLeft(f)
            }
            this.open(a)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(a) {
            this.overlay && !h.coming && this.overlay.fadeOut(a.speedOut, c.proxy(this.close, this))
        }
    };
    h.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(a) {
            var b =
                h.current,
                d = b.title,
                e = a.type;
            c.isFunction(d) && (d = d.call(b.element, b));
            if (m(d) && "" !== c.trim(d)) {
                b = c('<div class="fancybox-title fancybox-title-' + e + '-wrap">' + d + "</div>");
                switch (e) {
                    case "inside":
                        e = h.skin;
                        break;
                    case "outside":
                        e = h.wrap;
                        break;
                    case "over":
                        e = h.inner;
                        break;
                    default:
                        e = h.skin, b.appendTo("body"), l && b.width(b.width()), b.wrapInner('<span class="child"></span>'), h.current.margin[2] += Math.abs(v(b.css("margin-bottom")))
                }
                b["top" === a.position ? "prependTo" : "appendTo"](e)
            }
        }
    };
    c.fn.fancybox = function(a) {
        var b =
            c(this),
            d = this.selector || "",
            f = function(e) {
                var f = c(this).blur(),
                    l = g;
                if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || f.is(".fancybox-wrap"))) {
                    var n = a.groupAttr || "data-fancybox-group";
                    var m = f.attr(n);
                    m || (n = "rel", m = f.get(0)[n]);
                    m && "" !== m && "nofollow" !== m && (f = d.length ? c(d) : b, f = f.filter("[" + n + '="' + m + '"]'), l = f.index(this));
                    a.index = l;
                    !1 !== h.open(f, a) && e.preventDefault()
                }
            };
        a = a || {};
        var g = a.index || 0;
        d && !1 !== a.live ? e.undelegate(d, "click.fb-start").delegate(d + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start",
            f) : b.unbind("click.fb-start").bind("click.fb-start", f);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    e.ready(function() {
        c.scrollbarWidth === g && (c.scrollbarWidth = function() {
            var a = c('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                b = a.children(),
                b = b.innerWidth() - b.height(99).innerWidth();
            a.remove();
            return b
        });
        c.support.fixedPosition === g && (c.support.fixedPosition = function() {
            var a = c('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                b = 20 === a[0].offsetTop || 15 === a[0].offsetTop;
            a.remove();
            return b
        }());
        c.extend(h.defaults, {
            scrollbarWidth: c.scrollbarWidth(),
            fixed: c.support.fixedPosition,
            parent: c("body")
        });
        var b = c(a).width();
        f.addClass("fancybox-lock-test");
        var d = c(a).width();
        f.removeClass("fancybox-lock-test");
        c("<style type='text/css'>.fancybox-margin{margin-right:" + (d - b) + "px;}</style>").appendTo("head")
    })
})(window, document, jQuery);
(function(a) {
    a.fancybox.helpers.thumbs = {
        defaults: {
            width: 50,
            height: 50,
            position: "bottom",
            source: function(b) {
                var c;
                b.element && (c = a(b.element).find("img").attr("src"));
                !c && "image" === b.type && b.href && (c = b.href);
                return c
            }
        },
        wrap: null,
        list: null,
        width: 0,
        init: function(b, c) {
            var g = this,
                f = b.width,
                d = b.height,
                e = b.source;
            var h = "";
            for (var l = 0; l < c.group.length; l++) h += '<li><a style="width:' + f + "px;height:" + d + 'px;" href="javascript:jQuery.fancybox.jumpto(' + l + ');"></a></li>';
            this.wrap = a('<div id="fancybox-thumbs"></div>').addClass(b.position).appendTo("body");
            this.list = a("<ul>" + h + "</ul>").appendTo(this.wrap);
            a.each(c.group, function(b) {
                var h = e(c.group[b]);
                h && a("<img />").load(function() {
                    var c = this.width,
                        e = this.height;
                    if (g.list && c && e) {
                        var h = c / f;
                        var l = e / d;
                        var n = g.list.children().eq(b).find("a");
                        1 <= h && 1 <= l && (h > l ? (c = Math.floor(c / l), e = d) : (c = f, e = Math.floor(e / h)));
                        a(this).css({
                            width: c,
                            height: e,
                            top: Math.floor(d / 2 - e / 2),
                            left: Math.floor(f / 2 - c / 2)
                        });
                        n.width(f).height(d);
                        a(this).hide().appendTo(n).fadeIn(300)
                    }
                }).attr("src", h)
            });
            this.width = this.list.children().eq(0).outerWidth(!0);
            this.list.width(this.width * (c.group.length + 1)).css("left", Math.floor(.5 * a(window).width() - (c.index * this.width + .5 * this.width)))
        },
        beforeLoad: function(a, c) {
            2 > c.group.length ? c.helpers.thumbs = !1 : c.margin["top" === a.position ? 0 : 2] += a.height + 15
        },
        afterShow: function(a, c) {
            if (this.list) this.onUpdate(a, c);
            else this.init(a, c);
            this.list.children().removeClass("active").eq(c.index).addClass("active")
        },
        onUpdate: function(b, c) {
            this.list && this.list.stop(!0).animate({
                left: Math.floor(.5 * a(window).width() - (c.index * this.width +
                    .5 * this.width))
            }, 150)
        },
        beforeClose: function() {
            this.wrap && this.wrap.remove();
            this.list = this.wrap = null;
            this.width = 0
        }
    }
})(jQuery);
(function(a) {
    return a.fn.serializeObject = function() {
        var b = this;
        var c = {};
        var g = {};
        var f = /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/;
        var d = /[a-zA-Z0-9_]+|(?=\[\])/g;
        var e = /^$/;
        var h = /^\d+$/;
        var l = /^[a-zA-Z0-9_]+$/;
        this.build = function(a, b, c) {
            a[b] = c;
            return a
        };
        this.push_counter = function(a) {
            void 0 === g[a] && (g[a] = 0);
            return g[a]++
        };
        a.each(a(this).serializeArray(), function(g, p) {
            var n, m;
            if (f.test(p.name)) {
                var u = p.name.match(d);
                var v = p.value;
                for (m = p.name; void 0 !== (n = u.pop());) e.test(n) ? (n = new RegExp("\\[" +
                    n + "\\]$"), m = m.replace(n, ""), v = b.build([], b.push_counter(m), v)) : h.test(n) ? v = b.build([], n, v) : l.test(n) && (v = b.build({}, n, v));
                return c = a.extend(!0, c, v)
            }
        });
        return c
    }
})(jQuery);
MgStore.prototype.Good = Backbone.Model.extend({
    initialize: function() {},
    toggle: function() {},
    clear: function() {
        this.destroy()
    }
});
MgStore.prototype.GoodView = Backbone.View.extend({
    tagName: "li",
    className: "product",
    template: function() {
        var a = $("#good-preview-template");
        return void 0 !== a[0] ? _.template(a.html()) : ""
    }(),
    getHTML: function() {
        return this.template(this.model.toJSON())
    },
    render: function() {
        this.$el.html(this.getHTML());
        this.model.get("isLast") && this.$el.addClass("last");
        this.delegateEvents(this.events);
        return this
    }
});
MgStore.prototype.GoodViewList = Backbone.View.extend({
    tagName: "li",
    className: "product list-view",
    template: function() {
        var a = $("#good-preview-template-list");
        return void 0 !== a[0] ? _.template(a.html()) : ""
    }(),
    getHTML: function() {
        return this.template(this.model.toJSON())
    },
    render: function() {
        this.$el.html(this.getHTML());
        this.model.get("isLast") && this.$el.addClass("last");
        this.delegateEvents(this.events);
        return this
    }
});
MgStore.prototype.FilterModelAbstract = Backbone.Model.extend({
    defaults: {
        id: "",
        description: "",
        value: void 0,
        defaultValue: void 0,
        inGroup: !1
    },
    setAjaxData: function(a) {},
    getId: function() {
        return this.get("description")
    },
    setValue: function(a) {
        this.set("value", a, {
            silent: !0
        });
        this.trigger("updateView")
    },
    getValue: function() {
        return this.get("value")
    },
    resetValue: function() {
        this.set("value", _.clone(this.get("defaultValue")))
    }
});
MgStore.prototype.FilterModelPaginator = MgStore.prototype.FilterModelAbstract.extend({
    defaults: {
        description: "page",
        defaultValue: 1,
        paginationData: void 0
    },
    setAjaxData: function(a) {
        this.set("paginationData", a.paginator, {
            silent: !0
        });
        this.trigger("updateView")
    }
});
MgStore.prototype.FilterModelPerPage = MgStore.prototype.FilterModelAbstract.extend({
    defaults: {
        description: "perPage",
        defaultValue: 6
    }
});
MgStore.prototype.FilterModelOrder = MgStore.prototype.FilterModelAbstract.extend({
    defaults: {
        description: "order",
        defaultValue: 0
    }
});
MgStore.prototype.FilterModelBrand = MgStore.prototype.FilterModelAbstract.extend({
    defaults: {
        description: "brands",
        defaultValue: {},
        inGroup: !0
    },
    getValue: function() {
        var a = this.get("value");
        if (!_.isEmpty(a)) return _.keys(a).join(",")
    }
});
MgStore.prototype.FilterModelSubCategory = MgStore.prototype.FilterModelAbstract.extend({
    defaults: {
        description: "categories",
        defaultValue: {},
        inGroup: !0
    },
    getValue: function() {
        var a = this.get("value");
        if (!_.isEmpty(a)) return _.keys(a).join(",")
    }
});
MgStore.prototype.FilterModelPrice = MgStore.prototype.FilterModelAbstract.extend({
    defaults: {
        description: "prices",
        defaultValue: [0, 0],
        minPrice: 0,
        maxPrice: 0,
        inGroup: !0
    },
    initialize: function() {
        this.on("change:minPrice", this.updateDefaultValue, this);
        this.on("change:maxPrice", this.updateDefaultValue, this)
    },
    updateDefaultValue: function() {
        this.set("defaultValue", [this.get("minPrice"), this.get("maxPrice")], {
            silent: !0
        })
    },
    setPrices: function(a, b) {
        if (a > b) {
            var c = b;
            var g = a
        } else c = a, g = b;
        this.set("value", [Math.max(c,
            this.get("minPrice")), Math.min(g, this.get("maxPrice"))])
    },
    getPriceFrom: function() {
        return this.get("value")[0]
    },
    getPriceTo: function() {
        return this.get("value")[1]
    },
    getValue: function() {
        var a = this.get("value");
        if (_.isArray(a) && 0 < a.length) return a.join("-")
    }
});
MgStore.prototype.FilterModelAttribute = MgStore.prototype.FilterModelAbstract.extend({
    defaults: {
        description: "options",
        defaultValue: {},
        inGroup: !0,
        idAttribute: 0
    },
    getValue: function() {
        var a = this.get("value");
        if (!_.isEmpty(a)) {
            var b = this,
                c = [];
            _.each(a, function(a, f) {
                c.push(b.get("idAttribute") + ":" + f)
            });
            return c.join(",")
        }
    },
    getId: function() {
        return this.get("description") + " " + this.get("idAttribute")
    }
});
MgStore.prototype.FilterModelAvailabilty = MgStore.prototype.FilterModelAbstract.extend({
    defaults: {
        description: "available",
        defaultId: 1,
        inGroup: !0,
        alwaysInChosen: !0
    },
    getValue: function() {
        var a = this.get("value");
        if (!_.isEmpty(a)) return _.keys(a).join(",")
    }
});
MgStore.prototype.FilterItemCollection = Backbone.Collection.extend({
    model: MS.FilterModelAbstract,
    subCategories: void 0,
    brands: void 0,
    attributesView: void 0,
    setSubCategories: function(a) {
        this.subCategories = a;
        this.add(a)
    },
    setBrands: function(a) {
        this.brands = a;
        this.add(a)
    },
    setAttributesView: function(a) {
        this.attributesView = a;
        this.add(this.attributesView.getAttributes())
    },
    setAjaxData: function(a) {
        this.each(function(b) {
            b.setAjaxData(a)
        });
        this.subCategories.set("countItems", a.subCategories);
        this.brands.set("countItems",
            a.brands);
        this.attributesView.showAttributeValues(a.attributeValues)
    },
    setFilterValues: function(a) {
        this.each(function(b) {
            b.setValue(a[b.getId()])
        });
        this.attributesView.showAttributeValues(a.attributesView)
    },
    getParams: function() {
        var a = {};
        this.each(function(b) {
            var c = b.getValue();
            _.isUndefined(c) || (_.isUndefined(a[b.get("description")]) ? a[b.get("description")] = c : a[b.get("description")] += "," + c)
        });
        return a
    },
    getFilterValues: function() {
        var a = {};
        this.each(function(b) {
            a[b.getId()] = b.get("value")
        });
        a.attributesView =
            this.attributesView.getAttributeValues();
        return a
    }
}, {
    initFilterItems: function(a) {
        var b = new MS.FilterItemCollection;
        a = new MS.FilterModelPaginator({
            paginationData: a
        });
        new MS.FilterViewPaginator({
            model: a,
            el: $("#paginator")
        });
        b.add(a);
        var c = new MS.FilterModelPerPage;
        new MS.FilterViewSelect({
            model: c,
            el: $("#per-page-filter")
        });
        b.add(c);
        c = new MS.FilterModelOrder;
        new MS.FilterViewSelect({
            model: c,
            el: $("#sort-filter")
        });
        b.add(c);
        c = new MS.FilterModelBrand;
        new MS.FilterViewCheckbox({
            model: c,
            el: $("#brand-filter")
        });
        b.setBrands(c);
        var c = new MS.FilterModelSubCategory,
            g = $("#subcategory-filter");
        0 < g.length ? new MS.FilterViewCheckbox({
            model: c,
            el: g
        }) : new MS.FilterViewList({
            model: c,
            el: $("#subcategory-filter-list")
        });
        g = $("#search-info");
        0 < g.length && new MS.FilterViewSearchInfo({
            model: c,
            paginatorModel: a,
            el: g
        });
        b.setSubCategories(c);
        a = new MS.FilterModelAvailabilty;
        new MS.FilterViewRadiobox({
            model: a,
            el: $("#availability-filter")
        });
        b.add(a);
        a = $("#price-slider");
        0 < a.length && (c = new MS.FilterModelPrice, new MS.FilterViewSlider({
            model: c,
            el: a
        }), b.add(c));
        b.setAttributesView(MS.FilterViewAttributes.init($("#attribute-filter")));
        return b
    }
});
MgStore.prototype.FilterItemGroupCollection = Backbone.Collection.extend({
    model: MS.FilterModelAbstract,
    resetValues: function() {
        this.each(function(a) {
            a.resetValue()
        })
    },
    isEmpty: function() {
        var a = this.find(function(a) {
            return a.get("alwaysInChosen") || !_.isEqual(a.get("value"), a.get("defaultValue"))
        });
        return _.isUndefined(a)
    }
});
MgStore.prototype.FilterViewAbstract = Backbone.View.extend({
    model: MS.FilterModelAbstract,
    initValue: function(a) {
        this.model.set("value", a, {
            silent: !0
        })
    }
});
MgStore.prototype.FilterViewPaginator = MgStore.prototype.FilterViewAbstract.extend({
    tagName: "div",
    className: "paginator",
    events: {
        "click .page": "pageClick",
        "click .ico": "arrowClick"
    },
    initialize: function() {
        this.initValue(this.$el.find(".current").data("page"));
        this.model.on("change:value", this.changeCurrent, this);
        this.model.on("updateView", this.render, this)
    },
    template: function() {
        var a = $("#paginator-preview-template");
        return void 0 !== a[0] ? _.template(a.html()) : ""
    }(),
    getHTML: function() {
        return this.template(this.model.toJSON())
    },
    render: function() {
        this.$el.html(this.getHTML());
        var a = this.model.get("paginationData");
        _.isUndefined(a) || 2 > a.pageCount ? this.$el.addClass("hide") : this.$el.removeClass("hide");
        this.delegateEvents(this.events);
        return this
    },
    changeCurrent: function() {
        this.$el.find(".current").removeClass("current").end().find("[data-page=" + this.model.get("value") + "]").addClass("current")
    },
    pageClick: function(a) {
        this.model.set("value", $(a.currentTarget).data("page"))
    },
    arrowClick: function(a) {
        a = $(a.currentTarget);
        if (!a.hasClass("unactive")) {
            var b =
                this.model.get("value");
            this.model.set("value", a.hasClass("next") ? ++b : --b)
        }
    }
});
MgStore.prototype.FilterViewSelect = MgStore.prototype.FilterViewAbstract.extend({
    initialize: function() {
        var a = this;
        this.$el.change(function(b) {
            console.log("Order changed");
            a.model.set("value", a.$el.val())
        });
        this.initValue(this.$el.val())
    },
    updateSelect: function() {
        var a = this.$el.find("span[data-id=" + this.model.get("value") + "]").parent();
        this.$el.data("rmSelect").select(a, {
            silent: !0
        })
    }
});
MgStore.prototype.FilterViewChoice = MgStore.prototype.FilterViewAbstract.extend({
    events: {
        "click input": "check"
    },
    _$choiceElements: [],
    initialize: function() {
        this._$list = this.$el.find(".category-filter-items");
        this._$choiceElements = this.$el.find("input");
        this._$count = this.$el.find(".count");
        this._initValues();
        this.model.on("change:value", this._updateChoiceElements, this);
        this.model.on("change:countItems", this._changeChoiceElements, this);
        this.model.on("updateView", this._updateChoiceElements, this)
    },
    _updateChoiceElements: function() {
        var a =
            this.model.get("value");
        this._updateCount(Object.keys(a).length);
        this._$choiceElements.each(function() {
            var b = $(this),
                c = a.hasOwnProperty(b.data("id"));
            b.closest("li").toggleClass("current", c);
            b.prop("checked", c)
        })
    },
    _updateCount: function(a) {
        this._$count.text("(" + a + ")");
        this._$count.toggleClass("hide", 0 == a)
    },
    _changeChoiceElements: function() {
        var a = this,
            b = "",
            c = _.values(this.model.get("countItems")),
            g = 7 < c.length;
        _.each(c, function(c, d) {
            b += a._renderChoiceElement(c, g && 5 <= d)
        });
        g && (b += this._renderExpandElement());
        this._$list.html(b);
        this.$el.toggleClass("hide", 0 == c.length);
        this._$choiceElements = this.$el.find("input");
        this._updateChoiceElements()
    },
    _initValues: function() {
        var a = {};
        this._$choiceElements.filter(":checked").each(function() {
            a[$(this).data("id")] = $(this).siblings("span").text()
        });
        this.initValue(a)
    },
    _renderChoiceElement: function(a, b) {
        return "<li" + (b ? ' class="hide" data-expand-item' : "") + "><label>" + this._renderInput(a) + "<span>" + a.value + "</span></label></li>"
    },
    _renderExpandElement: function() {
        return '<div class="action-btn-box orange"><span class="action-btn">+ <span>' +
            _tr.expandFilter + '</span></span><span class="action-btn hide">- <span>' + _tr.reduceFilter + "</span></span></div>"
    },
    check: function(a) {},
    _renderInput: function(a) {
        return ""
    }
});
MgStore.prototype.FilterViewCheckbox = MgStore.prototype.FilterViewChoice.extend({
    check: function(a) {
        a = $(a.currentTarget);
        var b = a.data("id"),
            c = _.clone(this.model.get("value"));
        c.hasOwnProperty(b) ? delete c[b] : c[b] = a.siblings("span").text();
        this.model.set("value", c)
    },
    _renderInput: function(a) {
        return '<input type="checkbox" data-id="' + a.idItem + '">'
    }
});
MgStore.prototype.FilterViewRadiobox = MgStore.prototype.FilterViewChoice.extend({
    initialize: function() {
        MgStore.prototype.FilterViewRadiobox.__super__.initialize.apply(this, arguments);
        this.model.set("defaultValue", this._getDefaultValue())
    },
    check: function(a) {
        a = $(a.currentTarget);
        var b = a.data("id");
        if (!this.model.get("value").hasOwnProperty(b)) {
            var c = {};
            c[b] = a.siblings("span").text();
            this.model.set("value", c)
        }
    },
    _renderInput: function(a) {
        return '<input type="radio" name="' + this.model.get("description") +
            '" data-id="' + a.idItem + '">'
    },
    _getDefaultValue: function() {
        var a = {},
            b = this.$el.find('[data-id="' + this.model.get("defaultId") + '"]');
        a[this.model.get("defaultId")] = b.siblings("span").text();
        return a
    }
});
MgStore.prototype.FilterViewList = MgStore.prototype.FilterViewAbstract.extend({
    events: {
        "click li": "updateValue"
    },
    initialize: function() {
        this._$list = this.$el.find(".category-filter-items");
        this.model.on("change:countItems", this._updateList, this)
    },
    updateValue: function(a) {
        a = $(a.currentTarget);
        var b = {};
        b[a.data("id")] = a.text();
        this.model.set("value", b)
    },
    _updateList: function() {
        var a = this,
            b = "",
            c = 7 < this.model.get("countItems").length;
        _.each(this.model.get("countItems"), function(g, f) {
            b += a._renderListItem(g,
                c && 5 <= f)
        });
        c && (b += this._renderExpandElement());
        this._$list.html(b);
        this.$el.toggleClass("hide", 0 == this.model.get("countItems").length)
    },
    _renderListItem: function(a, b) {
        return '<li data-id="' + a.idItem + '"' + (b ? ' class="hide" data-expand-item' : "") + '><a href="javascript:void(0)">' + a.value + "</a></li>"
    },
    _renderExpandElement: function() {
        return '<div class="action-btn-box orange"><span class="action-btn">+ <span>' + _tr.expandFilter + '</span></span><span class="action-btn hide">- <span>' + _tr.reduceFilter + "</span></span></div>"
    }
});
MgStore.prototype.FilterViewSearchInfo = MgStore.prototype.FilterViewAbstract.extend({
    initialize: function() {
        this.model.on("change:value", this._updateLink, this);
        this.model.on("change:countItems", this._updateLink, this);
        this.options.paginatorModel.on("updateView", this._updateCount, this)
    },
    _updateLink: function() {
        this.$el.find("[data-category-count]").toggleClass("hide", !_.isUndefined(this.model.collection.subCategories.getValue()));
        if (this.model.get("countItems") && this.model.get("value")) {
            var a, b = _.first(_.keys(this.model.get("value")));
            _.each(this.model.get("countItems"), function(c) {
                if (c.idItem == b) return a = c, !1
            });
            void 0 == a ? this.$el.find("[data-category-link]").addClass("hide") : this.$el.find("[data-category-link]").removeClass("hide").find("a").attr("href", a.url).text(a.value).end()
        }
    },
    _updateCount: function() {
        var a = this.options.paginatorModel.get("paginationData").totalItemCount;
        this.$el.find("[data-count]").text(a + " " + MS.pluralize(a, [_tr.item, _tr.items2, _tr.items]))
    }
});
MgStore.prototype.FilterViewSlider = MgStore.prototype.FilterViewAbstract.extend({
    events: {
        "click .range-slider-btn": "setPrices"
    },
    _$slider: void 0,
    _$currentFromPrice: void 0,
    _$currentToPrice: void 0,
    initialize: function() {
        this._$slider = this.$el.find("#slider-range");
        this._$currentFromPrice = this.$el.find("#slider-range-min");
        this._$currentToPrice = this.$el.find("#slider-range-max");
        this.model.set("maxPrice", this.$el.data("max-price") - 0);
        this.initValue([this._$currentFromPrice.val() - 0, this._$currentToPrice.val() -
            0
        ]);
        this._initSlider();
        this._initKeyPress();
        this.model.on("change:value", this.changePriceRange, this);
        this.model.on("updateView", this.changePriceRange, this)
    },
    changePriceRange: function() {
        this._updateSlider();
        this._updateInputs()
    },
    setPrices: function() {
        this.model.setPrices(this._$currentFromPrice.val() - 0, this._$currentToPrice.val() - 0)
    },
    _initSlider: function() {
        var a = this;
        this._$slider.slider({
            range: !0,
            min: a.model.get("minPrice"),
            max: a.model.get("maxPrice"),
            values: a.model.get("value"),
            slide: function(b, c) {
                a._$currentFromPrice.val(c.values[0]);
                a._$currentToPrice.val(c.values[1])
            },
            stop: function(b, c) {
                a.model.set("value", c.values, {
                    silent: !0
                });
                a.model.trigger("change:value", a.model)
            }
        })
    },
    _initKeyPress: function() {
        var a = this;
        this._$currentFromPrice.keyup(function(b) {
            13 == b.keyCode && a._$currentToPrice.focus()
        });
        this._$currentToPrice.keyup(function(b) {
            13 == b.keyCode && a.setPrices()
        })
    },
    _updateSlider: function() {
        this._$slider.slider({
            values: this.model.get("value")
        })
    },
    _updateInputs: function() {
        this._$currentFromPrice.val(this.model.getPriceFrom());
        this._$currentToPrice.val(this.model.getPriceTo())
    }
});
MgStore.prototype.FilterViewGroup = MgStore.prototype.FilterViewAbstract.extend({
    events: {
        "click .filter-current-group-item-del-ico": "reset"
    },
    _$groupList: [],
    initialize: function() {
        this._$groupList = this.$el.find(".filter-group-list");
        this.model.on("change:value", this.updateView, this);
        this.model.on("updateView", this.updateView, this)
    },
    updateView: function() {},
    reset: function(a) {}
});
MgStore.prototype.FilterViewGroupCheckbox = MgStore.prototype.FilterViewGroup.extend({
    updateView: function() {
        var a = this.model.get("value");
        _.isEmpty(a) ? this.$el.addClass("hide") : (this._renderItems(a), this.$el.removeClass("hide"))
    },
    reset: function(a) {
        if (!this.model.get("alwaysInChosen")) {
            var b = $(a.currentTarget).closest(".filter-current-group-item");
            a = _.clone(this.model.get("value"));
            b = b.data("id");
            a.hasOwnProperty(b) && (delete a[b], this.model.set("value", a))
        }
    },
    _renderItems: function(a) {
        var b = [];
        $.each(a,
            function(a, g) {
                b.push(['<p class="filter-current-group-item" data-id="', a, '">', g, '<i class="ico filter-current-group-item-del-ico"></i></p>'].join(""))
            });
        this._$groupList.html(b.join(""))
    }
});
MgStore.prototype.FilterViewGroupPrice = MgStore.prototype.FilterViewGroup.extend({
    updateView: function() {
        _.isEqual(this.model.get("value"), this.model.get("defaultValue")) ? this.$el.addClass("hide") : (this.$el.removeClass("hide"), this._renderPrice())
    },
    _renderPrice: function() {
        this._$groupList.html(['<p class="filter-current-group-item">', this.model.get("value").join("-"), '<i class="ico filter-current-group-item-del-ico"></i></p>'].join(""))
    },
    reset: function() {
        this.model.resetValue()
    }
});
MgStore.prototype.FilterItemGroupCollectionView = Backbone.View.extend({
    events: {
        "click .filter-current-cancel-all": "resetAll"
    },
    _itemGroupCollection: void 0,
    initialize: function(a) {
        this._itemGroupCollection = a.collection;
        this._itemGroupCollection.on("change:value", this.updateView, this);
        this._itemGroupCollection.on("updateView", this.updateView, this)
    },
    updateView: function() {
        this._itemGroupCollection.isEmpty() ? this.$el.addClass("hide") : this.$el.removeClass("hide")
    },
    resetAll: function() {
        this._itemGroupCollection.resetValues()
    }
}, {
    initGroupCollection: function(a) {
        var b = new MS.FilterItemGroupCollection;
        a.each(function(a) {
            if (a.get("inGroup"))
                if (b.add(a), a instanceof MS.FilterModelPrice) new MS.FilterViewGroupPrice({
                    model: a,
                    el: $("#price-group")
                });
                else {
                    var c = a instanceof MS.FilterModelAttribute ? $("#" + a.get("description") + "-group-" + a.get("idAttribute")) : $("#" + a.get("description") + "-group");
                    new MS.FilterViewGroupCheckbox({
                        model: a,
                        el: c
                    })
                }
        });
        new MS.FilterItemGroupCollectionView({
            collection: b,
            el: $("#chosen-filters")
        })
    }
});
MgStore.prototype.FilterViewAttributes = Backbone.View.extend({
    attributes: [],
    attributeValues: [],
    initItems: function() {
        var a = this;
        this.$el.find(".category-filter-item").each(function() {
            var b = $(this),
                c = b.data("id"),
                g = new MS.FilterModelAttribute({
                    idAttribute: c
                });
            new MS.FilterViewCheckbox({
                model: g,
                el: b
            });
            a.attributes[c] = g
        })
    },
    showAttributeValues: function(a) {
        var b = this;
        this.attributeValues = a;
        this.$el.find(".category-filter-item").each(function() {
            var c = $(this),
                g = c.data("id"),
                f = a[g];
            _.isUndefined(f) && (f = {});
            b.attributes[g].set("countItems", f);
            c.toggleClass("hide", 0 == _.keys(f).length)
        })
    },
    getAttributeValues: function() {
        return this.attributeValues
    },
    getAttributes: function() {
        return this.attributes
    }
}, {
    init: function(a) {
        a = new MS.FilterViewAttributes({
            el: a
        });
        a.initItems();
        return a
    }
});
MgStore.prototype.FilterLoader = Backbone.View.extend({
    show: function() {
        this.$el.show()
    },
    hide: function() {
        this.$el.hide()
    }
}, {
    init: function(a) {
        return new MgStore.prototype.FilterLoader({
            el: a
        })
    }
});
MgStore.prototype.FilterContainer = Backbone.View.extend({
    _loader: void 0,
    _switcher: void 0,
    setViewTypeSwitcher: function(a) {
        this._switcher = a;
        this._switcher.setGoodList(this.$el)
    },
    setLoader: function(a) {
        a instanceof MS.FilterLoader && (this._loader = a)
    },
    renderGoods: function(a) {
        var b = $('<div class="clear"></div>'),
            c = [];
        $.each(a, function(a, f) {
            var d = 2 == a % 3;
            f.url = "/" + currentLangUrl + "/good/" + f.goodAlias;
            f.isLast = d;
            var e = new MS.Good(f);
            e = "list" == $("[data-filter-view-type].active").data("filter-view-type") ? new MS.GoodViewList({
                    model: e
                }) :
                new MS.GoodView({
                    model: e
                });
            c.push(e.render().$el);
            d && c.push(b)
        });
        this.$el.empty().hide().append(c);
        this._switcher.refreshView();
        this.$el.show()
    },
    getLoader: function() {
        if (!(this._loader instanceof MS.FilterLoader)) throw Error("Loader was not set");
        return this._loader
    },
    loadStart: function() {
        this.$el.addClass("box-loading");
        this.getLoader().show()
    },
    loadFinish: function() {
        this.$el.removeClass("box-loading");
        this.getLoader().hide()
    }
}, {
    init: function(a, b, c) {
        a = new MgStore.prototype.FilterContainer({
            el: a
        });
        a.setViewTypeSwitcher(b);
        a.setLoader(c);
        return a
    }
});
MgStore.prototype.FilterContainer.ViewType = Backbone.View.extend({
    VIEW_TYPE_VERTICAL: 2,
    _currentType: 0,
    _$goodList: void 0,
    events: {
        "click .item-view-type-item": "changeType"
    },
    changeType: function(a) {
        a = $(a.currentTarget);
        this._setCurrent(a);
        this._changeType(a.data("type"));
        this.refreshView()
    },
    setGoodList: function(a) {
        this._$goodList = a
    },
    refreshView: function() {
        var a = this._$goodList.find(".item-data-container");
        a.removeClass("vertical");
        this._currentType == this.VIEW_TYPE_VERTICAL && a.addClass("vertical")
    },
    loadCurrentType: function() {
        var a =
            parseInt($.cookie("view-type"), 10);
        this._currentType = isNaN(a) ? this.VIEW_TYPE_VERTICAL : a
    },
    _setCurrent: function(a) {
        a.addClass("current").siblings(".current").removeClass("current")
    },
    _changeType: function(a) {
        this._currentType = a = parseInt(a, 10);
        $.cookie("view-type", a, {
            path: "/",
            expires: 7
        })
    }
}, {
    init: function(a) {
        a = new MgStore.prototype.FilterContainer.ViewType({
            el: a
        });
        a.loadCurrentType();
        return a
    }
});
MgStore.prototype.GoodsFilters = Backbone.View.extend({
    _goodsContainer: void 0,
    _filterItems: void 0,
    _params: [],
    _ajaxUrl: "",
    _baseUrl: "",
    _idCategory: 0,
    _timeout: 0,
    _ajaxRequest: void 0,
    _$filterContainer: void 0,
    lastData: void 0,
    setGoodsContainer: function(a, b) {
        a instanceof MS.FilterContainer && (this._goodsContainer = a);
        this._$filterContainer = b
    },
    setUrls: function(a, b) {
        this._ajaxUrl = a;
        this._baseUrl = b
    },
    setCategory: function(a) {
        this._idCategory = a
    },
    setFilterItems: function(a) {
        a instanceof MS.FilterItemCollection && (this._filterItems =
            a)
    },
    bindListeners: function(a) {
        var b = this;
        $("[data-filter-view-type]").click(function() {
            b._updateView()
        });
        this._filterItems.on("change:value", function(c) {
            b._updateParams();
            a && c instanceof MS.FilterModelPrice ? window.location.href = [a, b.getParamsAsUrl()].join("/") : (b._updateUrlState(), b._updateView())
        })
    },
    historyListener: function() {
        var a = this;
        $(window).bind("popstate", function(b) {
            (b = b.originalEvent.state) && b.module === MS.GoodsFilters.MODULE_NAME && (a._params = b.params, a._filterItems.setFilterValues(b.values),
                a._updateView())
        })
    },
    initHistory: function() {
        this._updateParams();
        void 0 !== history.replaceState && history.replaceState(this._getHistoryParams(), document.title)
    },
    _updateParams: function() {
        this._params = this._filterItems.getParams()
    },
    _updateView: function() {
        var a = this;
        clearTimeout(this._timeout);
        _.isUndefined(this._ajaxRequest) || this._ajaxRequest.abort();
        this._goodsContainer.loadStart();
        var b = this._params;
        b.idCategory = this._idCategory;
        this._timeout = setTimeout(function() {
            a._ajaxRequest = $.ajax({
                type: "post",
                url: a._ajaxUrl,
                data: b,
                dataType: "json",
                success: function(b) {
                    a.lastData = b;
                    a._goodsContainer.renderGoods(b.goods);
                    a._filterItems.setAjaxData(b);
                    a._goodsContainer.loadFinish();
                    a._scrollTop()
                }
            })
        }, 500)
    },
    _scrollTop: function() {
        $("html, body").animate({
            scrollTop: this._$filterContainer ? this._$filterContainer.offset().top : 250
        }, 300)
    },
    getParamsAsUrl: function() {
        var a = [];
        $.each(this._params, function(b, c) {
            "page" == b ? a.unshift(c) : _.isUndefined(c) || a.push(b + "=" + c)
        });
        return a.join("&").replace("&", "?")
    },
    _updateUrlState: function() {
        void 0 !==
            history.pushState && history.pushState(this._getHistoryParams(), document.title, [this._baseUrl, this.getParamsAsUrl()].join("/"))
    },
    _getHistoryParams: function() {
        return {
            params: this._params,
            values: this._filterItems.getFilterValues(),
            module: MS.GoodsFilters.MODULE_NAME
        }
    }
}, {
    MODULE_NAME: "goodsFilter",
    initFilters: function(a, b, c, g, f, d) {
        console.log(d);
        var e = new MS.GoodsFilters;
        e.setUrls(a, b);
        e.setCategory(g);
        a = MS.FilterItemCollection.initFilterItems(c);
        e.setFilterItems(a);
        MS.FilterItemGroupCollectionView.initGroupCollection(a);
        e.setGoodsContainer(MS.FilterContainer.init($("#goodsList"), MS.FilterContainer.ViewType.init($("#viewType")), MS.FilterLoader.init($("#filterLoader"))), d);
        e.bindListeners(f);
        e.historyListener();
        e.initHistory();
        MS.FilterItemToggler.init();
        MS.FilterExpander.init()
    }
});
MgStore.prototype.SearchFilters = MgStore.prototype.GoodsFilters.extend({
    _searchText: "",
    _updateParams: function() {
        this._params = this._filterItems.getParams();
        this._params.text = this._searchText
    },
    setSearchText: function(a) {
        this._searchText = a
    },
    getParamsAsUrl: function() {
        var a = [];
        $.each(this._params, function(b, c) {
            _.isUndefined(c) || a.push(b + "=" + c)
        });
        return a.join("&")
    },
    historyListener: function() {
        var a = this;
        $(window).bind("popstate", function(b) {
            (b = b.originalEvent.state) && b.module === MS.GoodsFilters.MODULE_NAME &&
                (a._params = b.params, a._filterItems.setFilterValues(b.values), a._searchText = b.values.text, a._updateView())
        })
    },
    _updateUrlState: function() {
        if (void 0 !== history.pushState) {
            var a = _.extend(this._filterItems.getFilterValues(), {
                text: this._searchText
            });
            history.pushState({
                params: this._params,
                values: a,
                module: MS.GoodsFilters.MODULE_NAME
            }, document.title, [this._baseUrl, this.getParamsAsUrl()].join("?"))
        }
    }
}, {
    MODULE_NAME: "searchFilter",
    initSearchFilters: function(a, b, c, g) {
        var f = new MS.SearchFilters;
        f.setUrls(a, b);
        f.setSearchText(g);
        a = MS.FilterItemCollection.initFilterItems(c);
        f.setFilterItems(a);
        MS.FilterItemGroupCollectionView.initGroupCollection(a);
        f.setGoodsContainer(MS.FilterContainer.init($("#goodsList"), MS.FilterContainer.ViewType.init($("#viewType")), MS.FilterLoader.init($("#filterLoader"))));
        f.bindListeners();
        f.historyListener();
        f.initHistory();
        MS.FilterItemToggler.init();
        MS.FilterExpander.init()
    }
});
MgStore.prototype.FilterItemToggler = function() {
    this.init = function() {
        $(".category-filter-item-name-text").on("click", function() {
            $(this).closest(".category-filter-item").toggleClass("clicked").find(".category-filter-items").toggle(200)
        })
    }
};
MgStore.prototype.FilterItemToggler.init = function() {
    var a = new MS.FilterItemToggler;
    a.init();
    return a
};
MgStore.prototype.FilterExpander = function() {
    this.initExpand = function() {
        $("[data-expand]").on("click", ".action-btn-box", function() {
            $(this).children().toggleClass("hide").end().closest("[data-expand]").find("[data-expand-item]").slideToggle(300)
        })
    }
};
MgStore.prototype.FilterExpander.init = function() {
    var a = new MS.FilterExpander;
    a.initExpand();
    return a
};
MgStore.prototype.GoodTabs = function() {
    this.initTabs = function() {
        $("#good-tabs").tabs()
    };
    this.initAdditionalButtons = function(a) {
        $("#toAttributes").click(function() {
            $("#attributesTab").click()
        });
        $("#toAccessories").click(function() {
            $("#accessoriesTab").click()
        });
        $("#toComments").click(function() {
            a && $("#commentsTab").click()
        })
    }
};
MgStore.prototype.GoodTabs.init = function(a) {
    var b = new MS.GoodTabs;
    b.initTabs();
    b.initAdditionalButtons(a)
};
MgStore.prototype.MainSearch = Backbone.View.extend({
    events: {
        "click .main-search-ico": "focusInput"
    },
    focusInput: function() {
        this.$el.find(".main-search").focus()
    }
});
MgStore.prototype.MainSearch.init = function(a) {
    return new MS.MainSearch({
        el: a
    })
};
(function() {
    var a = function(a) {
        var b = function(b) {
                void 0 === a.rules && (a.rules = {});
                void 0 === a.messages && (a.messages = {});
                void 0 === a.rules[b] && (a.rules[b] = {});
                void 0 === a.messages[b] && (a.messages[b] = {})
            },
            g = function(c, d, e) {
                !1 !== c && (b(c), $.each(d, function(b, d) {
                    a.rules[c][b] = d
                }), $.each(e, function(b, d) {
                    a.messages[c][b] = d
                }))
            };
        this.setRequiredValidation = function(a, b) {
            g(a, {
                required: !0
            }, {
                required: b
            });
            return this
        };
        this.setNameValidation = function(a) {
            g(a, {
                required: !0,
                minlength: 1,
                maxlength: 150
            }, {
                required: _tr.enterName,
                minlength: _tr.nameTooShort,
                maxlength: _tr.nameTooLong
            });
            return this
        };
        this.setLastNameValidation = function(a) {
            g(a, {
                required: !0,
                minlength: 1,
                maxlength: 150
            }, {
                required: _tr.enterLastname,
                minlength: _tr.lastnameTooShort,
                maxlength: _tr.lastnameTooLong
            });
            return this
        };
        this.setPhoneValidation = function(a) {
            g(a, {
                required: !0
            }, {
                required: _tr.enterPhoneNumber
            });
            return this
        };
        this.setEmailValidation = function(a, b) {
            void 0 === b && (b = !0);
            g(a, {
                required: b,
                email: !0
            }, {
                required: _tr.enterEmail,
                email: _tr.enterEmail
            });
            return this
        };
        this.setEmailFreeValidation =
            function(a) {
                this.setEmailValidation(a);
                g(a, {
                    remote: "/profile-ajax/validation?type=checkEmail"
                }, {
                    remote: _tr.emailNotFree
                });
                return this
            };
        this.setEmailExistValidation = function(a) {
            this.setEmailValidation(a);
            g(a, {
                remote: "/profile-ajax/validation?type=checkForgotEmail"
            }, {
                remote: _tr.emailNotFound
            });
            return this
        };
        this.setEmailLoginValidation = function(a) {
            this.setEmailValidation(a);
            g(a, {
                remote: "/profile-ajax/validation?type=checkLoginEmail"
            }, {
                remote: _tr.emailNotFound
            });
            return this
        };
        this.setPasswordValidation =
            function(a, b) {
                g(a, {
                    required: !0,
                    minlength: 5,
                    maxlength: 40
                }, {
                    required: _tr.enterPassword,
                    minlength: _tr.passwordTooShort,
                    maxlength: _tr.passwordTooLong
                });
                g(b, {
                    required: !0,
                    equalTo: "#" + a
                }, {
                    required: _tr.repeatPassword,
                    equalTo: _tr.notEqualPasswords
                });
                return this
            };
        this.setCardNumberValidation = function(a, b) {
            g(a, {
                required: !!b,
                minlength: 5,
                maxlength: 40
            }, {
                required: _tr.enterCardNumber,
                minlength: _tr.cardNumberTooShort,
                maxlength: _tr.cardNumberTooLong
            });
            return this
        };
        this.setPinCodeValidation = function(a, b) {
            g(a, {
                required: !!b,
                minlength: 4,
                maxlength: 40
            }, {
                required: _tr.enterPinCode,
                minlength: _tr.pinCodeTooShort,
                maxlength: _tr.pinCodeTooLong
            });
            return this
        };
        this.setVerifyCodeValidation = function(a) {
            g(a, {
                required: !0,
                minlength: 4
            }, {
                required: _tr.enterVerifyCode,
                minlength: _tr.enterVerifyCode
            });
            return this
        };
        this.setTextValidation = function(a) {
            g(a, {
                minlength: 2,
                maxlength: 5E3
            }, {
                minlength: _tr.textTooShort,
                maxlength: _tr.textTooLong
            });
            return this
        };
        this.setThemeValidation = function(a) {
            g(a, {
                minlength: 2,
                maxlength: 255
            }, {
                minlength: _tr.themeTooShort,
                maxlength: _tr.themeTooLong
            });
            return this
        };
        this.setRequiredTextValidation = function(a) {
            g(a, {
                required: !0,
                minlength: 2,
                maxlength: 5E3
            }, {
                required: _tr.enterText,
                minlength: _tr.textTooShort,
                maxlength: _tr.textTooLong
            });
            return this
        };
        this.setCommentValidation = function(a) {
            g(a, {
                required: !0,
                minlength: 2,
                maxlength: 5E3
            }, {
                required: _tr.enterComment,
                minlength: _tr.commentTooShort,
                maxlength: _tr.commentTooLong
            });
            return this
        };
        this.setNotRequiredPasswordValidation = function(a, b) {
            g(a, {
                minlength: 6,
                maxlength: 50
            }, {
                minlength: _tr.passwordTooShort,
                maxlength: _tr.passwordTooLong
            });
            g(b, {
                equalTo: "#" + a
            }, {
                equalTo: _tr.notEqualPasswords
            });
            return this
        }
    };
    MgStore.prototype.getBaseValidate = function() {
        return {
            errorPlacement: function(a, c) {
                var b = $(c);
                b.siblings(".error-message").remove();
                $('<span class="error-message">' + $(a).text() + '<i class="ico error-buble"></i></span>').insertAfter(b)
            },
            highlight: function(a) {
                $(a).parent().removeClass("success").addClass("error")
            },
            unhighlight: function(a, c) {
                $(a).parent().removeClass("error").addClass("success")
            }
        }
    };
    MgStore.prototype.getNotificationValidation =
        function() {
            return {
                errorPlacement: function(a, c) {
                    var b = $(c);
                    b.siblings(".input-notification").remove();
                    $('<span class="input-notification"><span class="input-notification-text">' + $(a).text() + "</span></span>").insertAfter(b)
                },
                highlight: function(a) {
                    $(a).parent().removeClass("success").addClass("error")
                },
                unhighlight: function(a, c) {
                    $(a).siblings(".input-notification").remove().end().parent().removeClass("error").addClass("success")
                }
            }
        };
    MgStore.prototype.validate = function(b) {
        return new a(b)
    }
})();
jQuery.validator.addMethod("phone", function(a, b) {
    return "" == a ? !0 : !!a.match(/^\+?\d{8,14}$/)
}, "Enter valid phone");
jQuery.validator.addMethod("float", function(a, b) {
    return "" == a ? !0 : !!a.match(/^[0-9]{1,20}(\.[0-9]{1,2})?$/)
}, "Enter valid number");
MgStore.prototype.initSliders = function(a) {
    a.slides({
        generatePagination: !0,
        play: 4E3,
        pause: 100,
        hoverPause: !0,
        next: "slider-right-btn",
        prev: "slider-left-btn"
    });
    var b = a.find(".pagination");
    a = (a.width() - b.width()) / 2;
    b.css({
        "margin-left": a,
        display: "block"
    })
};
MgStore.prototype.StoreMapModel = Backbone.Model.extend({
    options: {},
    initialize: function(a) {
        this.options = a
    },
    getOptions: function() {
        return this.options
    }
});
MgStore.prototype.StoreMap = Backbone.View.extend({
    map: void 0,
    initialize: function() {
        this.map = new google.maps.Map(this.el, this.model.getOptions())
    },
    showCurrentOnMap: function() {
        this.getGeometry().viewport ? this.map.fitBounds(this.getGeometry().viewport) : (this.map.setCenter(this.getGeometry().location), this.map.setZoom(16));
        this.map.setZoom(this.map.getZoom() + 1)
    },
    setGeometry: function(a) {
        this.geometry = a
    },
    getGeometry: function() {
        return this.geometry
    },
    setZoom: function(a) {
        this.map.setZoom(a)
    },
    getZoom: function() {
        return this.map.getZoom()
    }
});
MgStore.prototype.StoreMap._storeMap = void 0;
MgStore.prototype.StoreMap.init = function(a, b) {
    var c = new MS.StoreMapModel(b);
    MgStore.prototype.StoreMap._storeMap = new MS.StoreMap({
        model: c,
        el: a[0]
    });
    return MgStore.prototype.StoreMap._storeMap
};
MgStore.prototype.StoreMap.getMap = function() {
    return MgStore.prototype.StoreMap._storeMap
};
MgStore.prototype.StoreMarkerModel = Backbone.Model.extend({
    markerPosition: void 0,
    index: 0,
    initialize: function(a) {
        this.index = a.index;
        this.markerPosition = new google.maps.LatLng(a.lat, a.lng);
        this.storeUrl = a.storeUrl
    },
    getIndex: function() {
        return this.index
    },
    getMarkerPosition: function() {
        return this.markerPosition
    },
    getStoreUrl: function() {
        return this.storeUrl
    }
});
MgStore.prototype.StoreMarker = Backbone.View.extend({
    broker: Backbone.EventBroker,
    marker: void 0,
    getMap: function() {
        return this.model.collection.getMap()
    },
    getIcon: function() {
        return new google.maps.MarkerImage("/s/public/images/map_markers.png", new google.maps.Size(40, 47), new google.maps.Point(0, 51 * (this.model.getIndex() - 1)))
    },
    createMarker: function() {
        this.marker = new google.maps.Marker({
            clickable: !0,
            icon: this.getIcon(),
            map: this.getMap(),
            position: this.model.getMarkerPosition()
        })
    },
    initClick: function() {
        var a =
            this;
        google.maps.event.addListener(this.marker, "click", function() {
            var b = a.model.getStoreUrl();
            void 0 != b && (window.location.href = b)
        })
    }
});
MgStore.prototype.StoreMarker.init = function(a) {
    a = new MS.StoreMarker({
        model: a
    });
    a.createMarker();
    a.initClick();
    return a
};
MgStore.prototype.StoreMapMarkerCollection = Backbone.Collection.extend({
    mapWidget: void 0,
    setMapWidget: function(a) {
        this.mapWidget = a
    },
    getMap: function() {
        return this.mapWidget.map
    },
    initMarkers: function(a) {
        $.each(a, function(a, c) {
            var b = new MS.StoreMarkerModel(c);
            this.add(b);
            MS.StoreMarker.init(b)
        }.of(this))
    }
});
MgStore.prototype.StoreMapMarkerCollection.init = function(a, b) {
    var c = new MS.StoreMapMarkerCollection;
    c.setMapWidget(a);
    c.initMarkers(b);
    return c
};
MgStore.prototype.initSingleStoreMap = function(a, b, c) {
    var g = {
            zoom: 13,
            center: new google.maps.LatLng(b, c),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        g = MS.StoreMap.init($("#single_store_map"), g),
        f = [];
    f.push({
        lat: b,
        lng: c,
        index: a
    });
    MS.StoreMapMarkerCollection.init(g, f)
};
MgStore.prototype.initAllStoresMap = function(a) {
    var b = {
            zoom: 12,
            center: new google.maps.LatLng(40.389443, 49.871698),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        b = MS.StoreMap.init($("#store_map"), b);
    MS.StoreMapMarkerCollection.init(b, a)
};
MgStore.prototype.CommentModel = Backbone.Model.extend({
    url: "/comment-ajax",
    defaults: {
        idFor: 0,
        idParent: 0,
        forType: 0,
        commentLevel: 0,
        idAdmin: !1,
        userFullName: "",
        avatarPath: "",
        commentText: "",
        addStringDate: ""
    },
    createAnswer: function() {
        return new MS.CommentModel({
            idFor: this.get("idFor"),
            forType: this.get("forType"),
            isAdmin: this.get("isAdmin"),
            commentLevel: this.get("commentLevel"),
            idParent: this.id
        })
    },
    isFetched: function() {
        return 0 !== this.get("idFor") - 0
    },
    vote: function(a) {
        this.set("rating", this.get("rating") + (1 ==
            a ? 1 : -1))
    }
});
MgStore.prototype.CommentView = Backbone.View.extend({
    tagName: "li",
    className: "comment",
    template: "#comment-preview-template",
    events: {
        "click .give-answer": "showAnswerForm"
    },
    initialize: function() {
        this.model.set("rating", this.$el.find(".comment-rating-val:first").text() - 0);
        this.model.on("change:rating", this.updateRating, this)
    },
    render: function() {
        this.$el.append(this.precompileTemplate()(this.model.toJSON()));
        this.$el.addClass("comment_" + this.model.id);
        return this
    },
    show: function() {
        this.$el.fadeIn(300)
    },
    vote: function(a) {
        var b =
            this,
            c = $(a.currentTarget).data("type");
        $.ajax({
            type: "post",
            url: "/comment-ajax/vote",
            data: {
                idComment: this.model.id,
                voteType: c
            },
            dataType: "json",
            success: function() {
                b.model.vote(c)
            }
        })
    },
    scrollToComment: function() {
        $("body, html").animate({
            scrollTop: this.$el.offset().top - 235
        }, 500)
    },
    showAnswerForm: function(a) {
        $(a.currentTarget).attr("data-id") - 0 === this.model.id && this.model.isFetched() && (a = MS.CommentFormAnswerView.init(this.model), a.appendTo(this.$el.children(".childComment")), a.toggle())
    },
    updateRating: function() {
        var a =
            this.$el.find(".comment-rating:first"),
            b = this.model.get("rating");
        a.removeClass("positive negative");
        a.find(".comment-rating-btn").fadeOut(300);
        a.find(".comment-rating-val").text(b);
        0 < b ? a.addClass("positive") : 0 > b && a.addClass("negative")
    },
    precompileTemplate: function() {
        var a = this.constructor.prototype;
        return a.precompiledTemplate ? a.precompiledTemplate : a.precompiledTemplate = _.template($(this.template).html())
    }
});
(function() {
    var a = {};
    MgStore.prototype.CommentView.getById = function(b, c, g) {
        if (a[b]) c(a[b]);
        else {
            var f = new MS.CommentModel({
                    id: b
                }),
                d = new MS.CommentView({
                    model: f,
                    el: g instanceof jQuery ? g.find(".comment_" + b) : $(".comment_" + b)
                });
            f.fetch({
                success: function() {
                    a[b] = d;
                    c(a[b])
                }
            })
        }
    };
    MgStore.prototype.CommentView.createCommentView = function(b) {
        var c = b.id;
        if (a[c]) return a[c];
        c = new MS.CommentView({
            model: b
        });
        c.render();
        c.$el.hide();
        return a[b.id] = c
    }
})();
MgStore.prototype.CommentView.initLazyAnswer = function(a) {
    a.find(".comment .give-answer").bind("click", function(b) {
        MS.CommentView.getById(parseInt($(this).attr("data-id"), 10), function(a) {
            a.showAnswerForm(b);
            $(b.currentTarget).unbind("click")
        }, a)
    })
};
MgStore.prototype.CommentView.initLazyVote = function(a) {
    a.find(".comment .comment-rating-btn").bind("click", function(b) {
        MS.CommentView.getById(parseInt($(this).closest(".comment").attr("data-id"), 10), function(a) {
            a.vote(b);
            $(b.currentTarget).unbind("click")
        }, a)
    })
};
MgStore.prototype.CommentCollection = Backbone.Collection.extend({
    _$commentCount: void 0,
    getCommentCountBlock: function() {
        this._$commentCount instanceof jQuery || (this._$commentCount = $("#commentCount"));
        return this._$commentCount
    },
    plusCount: function() {
        if (void 0 !== this.getCommentCountBlock()[0]) {
            var a = this.getCommentCountBlock().text() - 0;
            this.getCommentCountBlock().text(a + 1)
        }
    },
    add: function(a) {
        this.plusCount()
    }
});
MgStore.prototype.CommentCollection.getInstance = function() {
    var a;
    return function() {
        a instanceof MS.CommentCollection || (a = new MS.CommentCollection);
        return a
    }
}();
MgStore.prototype.CommentFormView = Backbone.View.extend({
    tagName: "div",
    className: "add-new-comment",
    textName: "commentText",
    commentList: void 0,
    setCommentList: function(a) {
        this.commentList = a
    },
    getForm: function() {
        return this.$el.find("form")
    },
    bindValidate: function() {
        var a = MS.getBaseValidate();
        a.submitHandler = function() {
            this._addComment();
            this._clearCommentBlock();
            return !1
        }.of(this);
        MS.validate(a).setCommentValidation(this.textName);
        this.getForm().validate(a)
    },
    _addComment: function() {
        var a = this.model.clone();
        a.set("commentText", this._getCommentMessage().val());
        a.save({}, {
            success: function() {
                this._appendCommentModel(a);
                MS.CommentCollection.getInstance().add(a)
            }.of(this)
        })
    },
    _appendCommentModel: function(a) {
        a = MS.CommentView.createCommentView(a);
        this.commentList.append(a.$el);
        a.show()
    },
    _getHTML: function() {
        return this.template(this.model.toJSON())
    },
    _getCommentMessage: function() {
        return this.getForm().find('textarea[name="' + this.textName + '"]')
    },
    _clearCommentBlock: function() {
        this._getCommentMessage().val("")
    }
});
MgStore.prototype.CommentFormView.init = function(a, b, c, g, f) {
    b = new MS.CommentModel({
        idFor: b,
        forType: c,
        isAdmin: g
    });
    a = new MS.CommentFormView({
        model: b,
        el: a
    });
    a.setCommentList(f);
    a.bindValidate();
    return a
};
MgStore.prototype.CommentFormAnswerView = MgStore.prototype.CommentFormView.extend({
    template: function() {
        var a = $("#comment-answer-template");
        return _.template(void 0 !== a[0] ? a.html() : "")
    }(),
    _opened: !1,
    toggle: function() {
        this._opened ? this.hide() : this.show()
    },
    show: function() {
        MS.CommentFormAnswerView.closeOpened();
        this._opened = !0;
        this.$el.show();
        MS.CommentFormAnswerView.opened = this
    },
    hide: function() {
        this._opened = !1;
        0 < this.model.get("idParent") && this.$el.hide()
    },
    render: function() {
        this.$el.html(this._getHTML());
        return this
    },
    appendTo: function(a) {
        void 0 === this.$el.parent()[0] && this.$el.insertBefore(a)
    },
    _getAppendBlock: function(a, b, c) {
        a = a.get("idParent");
        return MS.CommentView.getById(a, function(a) {
            a.$el.children(".childComment").append(b);
            c()
        })
    },
    _appendCommentModel: function(a) {
        var b = MS.CommentView.createCommentView(a);
        this._getAppendBlock(a, b.$el, function() {
            b.show();
            b.scrollToComment()
        }.of(this));
        this.hide()
    }
});
MgStore.prototype.CommentFormAnswerView.opened = void 0;
MgStore.prototype.CommentFormAnswerView.closeOpened = function() {
    MS.CommentFormAnswerView.opened instanceof MgStore.prototype.CommentFormAnswerView && MS.CommentFormAnswerView.opened.hide()
};
(function() {
    var a = {};
    MgStore.prototype.CommentFormAnswerView.init = function(b) {
        var c = b.id;
        a[c] instanceof MS.CommentFormAnswerView || (b = new MS.CommentFormAnswerView({
            model: b.createAnswer()
        }), b.render(), b.$el.hide(), b.bindValidate(), a[c] = b);
        return a[c]
    }
})();
MgStore.prototype.CommentAddScroll = function() {
    this.bindButton = function(a, b) {
        a.click(function() {
            if (!b.is(":visible")) {
                var a = b.closest(".ui-tabs-panel"),
                    a = $('[aria-controls="' + a.attr("id") + '"]');
                b.closest(".ui-tabs").tabs({
                    active: a.index()
                })
            }
            $("body").scrollTop(b.offset().top)
        })
    }
};
MgStore.prototype.CommentAddScroll.init = function(a, b) {
    var c = new MS.CommentAddScroll;
    c.bindButton(a, b);
    return c
};
Function.prototype.of = function(a) {
    var b = this;
    return function() {
        return b.apply(a, arguments)
    }
};
$(function() {
    var a = $(".main-menu").width(),
        b = a / 2,
        c;
    $(".main-menu td").hover(function() {
        $(".main-menu .hover").removeClass("hover");
        clearTimeout(c);
        var g = $(this).addClass("hover").find(".drop-down"),
            f = $(this).position().left,
            d = g.outerWidth();
        f > d || f > b ? (g.css({
            left: f,
            width: g.find(".items-category").length * g.find(".items-category").outerWidth()
        }), d + f > a && g.css({
            left: a - d
        })) : f + $(this).outerWidth() > d && g.css({
            left: f + $(this).outerWidth() - d
        })
    }, function() {
        var a = $(this);
        c = setTimeout(function() {
                a.removeClass("hover")
            },
            300)
    })
});
MgStore.prototype.SubscriptionForm = function() {
    var a, b, c = !1,
        g = "/";
    this.setForm = function(b) {
        a = b
    };
    this.getForm = function() {
        return a
    };
    this.setSubmitButton = function(a) {
        b = a
    };
    this.setAjaxUrl = function(a) {
        g = a
    };
    this.bindSubmit = function() {
        b.click(function() {
            a.submit()
        })
    };
    this.bindValidate = function() {
        var a = MS.getBaseValidate();
        a.submitHandler = function() {
            this._subscribeUser();
            return !1
        }.of(this);
        MS.validate(a).setEmailValidation("subscriptionEmail");
        this.getForm().validate(a)
    };
    this.getEmailInput = function() {
        var a;
        return function() {
            a instanceof
            jQuery || (a = $("#subscriptionEmail"));
            return a
        }
    }();
    this._subscribeUser = function() {
        c || (c = !0, $.ajax({
            type: "post",
            url: g,
            data: {
                email: this.getEmailInput().val()
            },
            dataType: "json",
            success: function(a) {
                c = !1;
                if (1 == a.status) return !0
            }.of(this)
        }))
    }
};
MgStore.prototype.SubscriptionForm.init = function() {
    var a = new MS.SubscriptionForm;
    a.setAjaxUrl("/news-ajax/subscribe");
    a.setForm($("#subscriptionForm"));
    a.setSubmitButton($("#subscriptionButton"));
    a.bindValidate();
    a.bindSubmit()
};
MgStore.prototype.FeedbackForm = function() {
    var a, b, c = !1,
        g = "/",
        f;
    this.setForm = function(b) {
        a = b
    };
    this.getForm = function() {
        return a
    };
    this.setSubmitButton = function(a) {
        b = a
    };
    this.setAjaxUrl = function(a) {
        g = a
    };
    this.bindSubmit = function() {
        b.click(function() {
            a.submit()
        })
    };
    this.bindValidate = function() {
        var a = MS.getBaseValidate();
        a.submitHandler = function() {
            this._sendFeedback();
            return !1
        }.of(this);
        MS.validate(a).setNameValidation("userFullName").setEmailValidation("userEmail").setThemeValidation("feedbackTheme").setRequiredTextValidation("feedbackText");
        f = this.getForm().validate(a)
    };
    this.getFullNameInput = function() {
        var a;
        return function() {
            a instanceof jQuery || (a = $("#userFullName"));
            return a
        }
    }();
    this.getEmailInput = function() {
        var a;
        return function() {
            a instanceof jQuery || (a = $("#userEmail"));
            return a
        }
    }();
    this.getClubCartNumberInput = function() {
        var a;
        return function() {
            a instanceof jQuery || (a = $("#clubCartNumber"));
            return a
        }
    }();
    this.getThemeInput = function() {
        var a;
        return function() {
            a instanceof jQuery || (a = $("#feedbackTheme"));
            return a
        }
    }();
    this.getTextInput =
        function() {
            var a;
            return function() {
                a instanceof jQuery || (a = $("#feedbackText"));
                return a
            }
        }();
    this._sendFeedback = function() {
        c || (c = !0, $.ajax({
            type: "post",
            url: g,
            data: {
                fullName: this.getFullNameInput().val(),
                email: this.getEmailInput().val(),
                clubCartNumber: this.getClubCartNumberInput().val(),
                theme: this.getThemeInput().val(),
                text: this.getTextInput().val()
            },
            dataType: "json",
            success: function(a) {
                c = !1;
                a.status ? this.showThanksBlock() : (a = {}, a.feedbackText = _tr.errorOccured, f.showErrors(a))
            }.of(this)
        }))
    };
    this.showThanksBlock =
        function() {
            a.fadeOut(300);
            setTimeout(function() {
                $("#thxForFeedback").fadeIn(300)
            }, 300)
        }
};
MgStore.prototype.FeedbackForm.init = function() {
    var a = new MS.FeedbackForm;
    a.setAjaxUrl("/feedback-ajax/send");
    a.setForm($("#feedbackForm"));
    a.setSubmitButton($("#feedbackSubmit"));
    a.bindValidate();
    a.bindSubmit()
};
MgStore.prototype.RegistrationTabs = function() {
    var a = this;
    this.bindElements = function() {
        this.$tabItems = $("[data-reg-tab-item]");
        this.$tabContent = $("[data-reg-tab-content]");
        this.$recaptcha = $("#recaptcha");
        this.$currentTabContent = $("[data-reg-tab-content].active")
    };
    this.bindTabChange = function() {
        this.$tabItems.click(function() {
            var b = $(this);
            a._clearAll();
            b.addClass("is-current");
            a.$currentTabContent = $(b.attr("href"));
            a.$currentTabContent.removeClass("hide");
            a.moveCaptchaToCurrent()
        })
    };
    this.moveCaptchaToCurrent =
        function() {
            $("#g-recaptcha-response").val("");
            this.$currentTabContent.find("[data-recaptcha]").append(this.$recaptcha)
        };
    this._clearAll = function() {
        this.$tabItems.removeClass("is-current");
        this.$tabContent.addClass("hide")
    }
};
MgStore.prototype.RegistrationTabs.init = function() {
    var a = new MS.RegistrationTabs;
    a.bindElements();
    a.moveCaptchaToCurrent();
    a.bindTabChange();
    return a
};
MgStore.prototype.RegistrationForm = function() {
    var a = this,
        b, c, g = !1,
        f = "/",
        d;
    this.setForm = function(a) {
        b = a
    };
    this.getForm = function() {
        return b
    };
    this.setSubmitButton = function(a) {
        c = a
    };
    this.setAjaxUrl = function(a) {
        f = a
    };
    this.bindSubmit = function() {
        c.click(function() {
            b.submit()
        })
    };
    this.listenCaptcha = function() {
        setInterval(function() {
            a._getRecaptchaCode() ? a._enableButton() : a._disableButton()
        }, 100)
    };
    this.bindValidate = function() {
        var b = MS.getBaseValidate();
        b.submitHandler = function() {
            a._registerUser();
            return !1
        };
        MS.validate(b).setNameValidation("userFirstName").setLastNameValidation("userLastName").setEmailFreeValidation("userEmail");
        d = this.getForm().validate(b)
    };
    this._registerUser = function() {
        g || (this._showLoader(), $.ajax({
            type: "post",
            url: f,
            data: {
                firstName: $("#userFirstName").val(),
                lastName: $("#userLastName").val(),
                emailAddress: $("#userEmail").val(),
                recaptcha: this._getRecaptchaCode()
            },
            dataType: "json",
            success: function(b) {
                a._hideLoader();
                a._handleData(b)
            }
        }))
    };
    this._handleData = function(b) {
        switch (b.status) {
            case 0:
                this._showError(_tr.registrationError);
                break;
            case 1:
                a._showThxMessage();
                break;
            case 3:
                this._showError(_tr.recaptchaError)
        }
    };
    this._showError = function(a) {
        var b = {};
        b.userEmail = a;
        d.showErrors(b)
    };
    this._getLoaderBlock = function() {
        var a;
        return function() {
            a instanceof jQuery || (a = b.find(".reg-data"));
            return a
        }
    }();
    this._showLoader = function() {
        g = !0;
        this._getLoaderBlock().find(".loader-img").show();
        this._disableButton()
    };
    this._hideLoader = function() {
        g = !1;
        this._getLoaderBlock().find(".loader-img").hide();
        this._enableButton()
    };
    this._disableButton = function() {
        c.attr("disabled", "disabled")
    };
    this._enableButton = function() {
        c.removeAttr("disabled")
    };
    this._showThxMessage = function() {
        b.hide();
        $("#thanksBlock").fadeIn(300)
    };
    this._getRecaptchaCode = function() {
        return $("#g-recaptcha-response").val()
    }
};
MgStore.prototype.RegistrationForm.init = function() {
    var a = new MS.RegistrationForm;
    a.setAjaxUrl("/profile-ajax/registration");
    a.setForm($("#registrationForm"));
    a.setSubmitButton($("#registrationButton"));
    a.bindValidate();
    a.bindSubmit();
    a.listenCaptcha()
};
MgStore.prototype.ClubCardRegistrationForm = function() {
    var a = this,
        b, c, g, f = !1,
        d = "/",
        e;
    this.setForm = function(a) {
        b = a;
        c = a.parent()
    };
    this.getForm = function() {
        return b
    };
    this.setSubmitButton = function(a) {
        g = a
    };
    this.setAjaxUrl = function(a) {
        d = a
    };
    this.bindSubmit = function() {
        g.click(function() {
            b.submit()
        })
    };
    this.listenCaptcha = function() {
        setInterval(function() {
            a._getRecaptchaCode() ? a._enableButton() : a._disableButton()
        }, 100)
    };
    this.bindTryAgainButton = function() {
        c.find(".reg-error-link").click(function() {
            a._clearMemberError()
        })
    };
    this.bindValidate = function() {
        var b = MS.getBaseValidate();
        b.submitHandler = function() {
            a._registerUser();
            return !1
        };
        MS.validate(b).setCardNumberValidation("cardNumber").setPinCodeValidation("pinCode");
        e = this.getForm().validate(b)
    };
    this._registerUser = function() {
        f || (this._showLoader(), $.ajax({
            type: "post",
            url: d,
            data: {
                cardNumber: $("#cardNumber").val(),
                pinCode: $("#pinCode").val(),
                recaptcha: this._getRecaptchaCode()
            },
            dataType: "json",
            success: function(b) {
                a._hideLoader();
                a._clearMemberError();
                a._handleData(b)
            }
        }))
    };
    this._handleData = function(a) {
        switch (a.status) {
            case 0:
                this._showError(_tr.registrationError);
                break;
            case 2:
                c.addClass("is-error");
                break;
            case 3:
                this._showError(_tr.recaptchaError);
                break;
            default:
                window.location.href = MS.getUrl("/profile")
        }
    };
    this._showError = function(a) {
        var b = {};
        b.cardNumber = a;
        e.showErrors(b)
    };
    this._getLoaderBlock = function() {
        var a;
        return function() {
            a instanceof jQuery || (a = b.find(".reg-data"));
            return a
        }
    }();
    this._showLoader = function() {
        f = !0;
        this._getLoaderBlock().find(".loader-img").show();
        this._disableButton()
    };
    this._hideLoader = function() {
        f = !1;
        this._getLoaderBlock().find(".loader-img").hide();
        this._enableButton()
    };
    this._disableButton = function() {
        g.attr("disabled", "disabled")
    };
    this._enableButton = function() {
        g.removeAttr("disabled")
    };
    this._clearMemberError = function() {
        c.removeClass("is-error")
    };
    this._getRecaptchaCode = function() {
        return $("#g-recaptcha-response").val()
    }
};
MgStore.prototype.ClubCardRegistrationForm.init = function() {
    var a = new MS.ClubCardRegistrationForm;
    a.setAjaxUrl("/profile-ajax/club-card-registration");
    a.setForm($("#clubCardRegistrationForm"));
    a.setSubmitButton($("#clubCardRegistrationButton"));
    a.bindValidate();
    a.bindSubmit();
    a.bindTryAgainButton();
    a.listenCaptcha()
};
MgStore.prototype.SmsRegistrationForm = function() {
    var a = this,
        b, c, g = !1,
        f = "/",
        d;
    this.setForm = function(a) {
        b = a;
        a.parent()
    };
    this.getForm = function() {
        return b
    };
    this.setSubmitButton = function(a) {
        c = a
    };
    this.setAjaxUrl = function(a) {
        f = a
    };
    this.bindSubmit = function() {
        c.click(function() {
            b.submit()
        })
    };
    this.listenCaptcha = function() {
        setInterval(function() {
            a._getRecaptchaCode() ? a._enableButton() : a._disableButton()
        }, 100)
    };
    this.bindValidate = function() {
        var b = MS.getNotificationValidation();
        b.submitHandler = function() {
            a._registerUser();
            return !1
        };
        MS.validate(b).setVerifyCodeValidation("verifyCode");
        d = this.getForm().validate(b)
    };
    this._registerUser = function() {
        g || (this._showLoader(), $.ajax({
            type: "post",
            url: f,
            data: {
                name: $("#smsName").val(),
                phone: $("#smsPhone").val(),
                verifyCode: $("#verifyCode").val(),
                recaptcha: this._getRecaptchaCode()
            },
            dataType: "json",
            success: function(b) {
                a._hideLoader();
                a._handleData(b)
            }
        }))
    };
    this._handleData = function(a) {
        switch (a.status) {
            case 1:
                window.location.href = MS.getUrl("/profile");
                break;
            case 2:
                this._showError(a.error);
                break;
            case 3:
                this._showError(_tr.recaptchaError)
        }
    };
    this._showError = function(a) {
        var b = {};
        b.verifyCode = a;
        d.showErrors(b)
    };
    this._getLoaderBlock = function() {
        var a;
        return function() {
            a instanceof jQuery || (a = b.find(".reg-data"));
            return a
        }
    }();
    this._showLoader = function() {
        g = !0;
        this._getLoaderBlock().find(".loader-img").show();
        this._disableButton()
    };
    this._hideLoader = function() {
        g = !1;
        this._getLoaderBlock().find(".loader-img").hide();
        this._enableButton()
    };
    this._disableButton = function() {
        c.attr("disabled", "disabled")
    };
    this._enableButton = function() {
        c.removeAttr("disabled")
    };
    this._getRecaptchaCode = function() {
        return $("#g-recaptcha-response").val()
    }
};
MgStore.prototype.SmsRegistrationForm.init = function() {
    var a = new MS.SmsRegistrationForm;
    a.setAjaxUrl("/profile-ajax/sms-registration");
    a.setForm($("#smsRegistrationForm"));
    a.setSubmitButton($("#smsRegistrationButton"));
    a.bindValidate();
    a.bindSubmit();
    a.listenCaptcha()
};
MgStore.prototype.SmsVerifyCode = function() {
    var a = this,
        b, c, g = !1,
        f = "/",
        d;
    this.setForm = function(a) {
        b = a
    };
    this.getForm = function() {
        return b
    };
    this.setVerifyBox = function(a) {
        c = a
    };
    this.setAjaxUrl = function(a) {
        f = a
    };
    this.bindSubmit = function() {
        c.find("[data-verify-button]").click(function() {
            b.submit()
        })
    };
    this.bindValidate = function() {
        var b = MS.getBaseValidate();
        b.submitHandler = function() {
            a._sendVerifyCode();
            return !1
        };
        MS.validate(b).setNameValidation("smsName").setPhoneValidation("smsPhone");
        d = this.getForm().validate(b)
    };
    this._sendVerifyCode = function() {
        g || (g = !0, $.ajax({
            type: "post",
            url: f,
            data: {
                phone: $("#smsPhone").val()
            },
            dataType: "json",
            success: function(a) {
                g = !1;
                if (1 == a.status) c.addClass("is-success");
                else if (2 == a.status) {
                    var b = {};
                    b.smsPhone = a.error;
                    d.showErrors(b)
                }
            }
        }))
    }
};
MgStore.prototype.SmsVerifyCode.init = function() {
    var a = new MS.SmsVerifyCode;
    a.setAjaxUrl("/profile-ajax/sms-verify-code");
    a.setForm($("#smsVerifyCodeForm"));
    a.setVerifyBox($("#smsVerifyBox"));
    a.bindValidate();
    a.bindSubmit()
};
(function() {
    var a = function(b) {
        var c = this,
            g = void 0;
        this.bindClose = function(a) {
            a.bind("click", this.close);
            b.click(function(a) {
                a = $(a.target);
                a.is("[data-popup-container]") || 0 != a.closest("[data-popup-container]").length || c.close()
            })
        };
        this.close = function() {
            c.hide();
            g && g()
        };
        this.bindOpen = function(a) {
            a.click(function() {
                c.show()
            })
        };
        this.hide = function() {
            b.hide();
            $("html").removeClass("opened-popup")
        };
        this.onClose = function(a) {
            g = a
        };
        this.show = function() {
            this._openedClose();
            b.fadeIn(400);
            $("html").addClass("opened-popup")
        };
        this._openedClose = function() {
            a.opened instanceof a && a.opened.hide();
            a.opened = this
        };
        this.getCloseElements = function() {
            return $(".rmPopupClose, [data-popup-close]")
        }
    };
    MgStore.prototype.initPopup = function(b, c) {
        var g = b.data("rmPopup");
        g instanceof a || (g = new a(b), g.bindClose(g.getCloseElements()), c instanceof jQuery && g.bindOpen(c), b.data("rmPopup", g));
        return g
    };
    MgStore.prototype.initNewPopup = function(b) {
        b = new a(b);
        b.bindClose(b.getCloseElements());
        return b
    }
})();
MgStore.prototype.AuthPopup = function() {
    var a = this;
    this.initElements = function() {
        this.$popup = $("#authPopup");
        this.$signInButton = $(".signIn");
        this.$loginForm = $("#signInForm");
        this.$forgotForm = $("#forgotForm");
        this.$signEmail = $("#signEmail");
        this.$forgotEmail = $("#forgotEmail")
    };
    this.bindClick = function() {
        this.$signInButton.click(a.show);
        this.$popup.find(".ico-popup-close").click(a.hide);
        this.$popup.find(".forgot-passwd-link").click(a._toggleLogin);
        this.$popup.click(function(b) {
            b = $(b.target);
            b.is("[data-popup-container]") ||
                0 != b.closest("[data-popup-container]").length || a.hide()
        })
    };
    this.initAuthInfo = function(a, c, g) {
        this.$title = this.$popup.find(".popup-title");
        this.$message = this.$popup.find(".popup-msg");
        this.onLoginUrl = this.defaultOnLoginUrl = a;
        this.defaultTitle = c;
        this.defaultMessage = g;
        this.changePopupText(c, g)
    };
    this.setOnLoginUrl = function(a) {
        this.onLoginUrl = a
    };
    this.getOnLoginUrl = function() {
        return this.onLoginUrl
    };
    this.changePopupText = function(a, c) {
        this.$title.html(a);
        this.$message.html(c)
    };
    this.resetAuthInfo = function() {
        a.changePopupText(a.defaultTitle,
            a.defaultMessage);
        a.setOnLoginUrl(a.defaultOnLoginUrl)
    };
    this.show = function() {
        $("html").addClass("opened-popup");
        a.$popup.fadeIn(300)
    };
    this.hide = function() {
        $("html").removeClass("opened-popup");
        a.$popup.fadeOut(300);
        setTimeout(a.resetAuthInfo, 300)
    };
    this._toggleLogin = function() {
        a.$loginForm.slideToggle(300);
        a.$forgotForm.slideToggle(300);
        a.$forgotEmail.val(a.$signEmail.val())
    }
};
var authPopup = null;
MgStore.prototype.AuthPopup.init = function() {
    authPopup = new MS.AuthPopup;
    authPopup.initElements();
    authPopup.bindClick();
    return authPopup
};
MgStore.prototype.AuthPopup.getInstance = function() {
    null == authPopup && (authPopup = MS.AuthPopup.init());
    return authPopup
};
MgStore.prototype.UserMenuPopup = function() {
    var a = this;
    this.setUserMenu = function(a) {
        this.$userMenu = a
    };
    this.bindClick = function(b) {
        b.click(function() {
            a.$userMenu.show();
            return !1
        })
    };
    this.bindDocumentClick = function() {
        $(document).click(function(b) {
            0 == $(b.target).closest(".sign-in").length && a.$userMenu.hide()
        })
    }
};
MgStore.prototype.UserMenuPopup.init = function(a, b) {
    var c = new MS.UserMenuPopup;
    c.setUserMenu(b);
    c.bindClick(a);
    c.bindDocumentClick();
    return c
};
MgStore.prototype.CartPopup = function() {
    this.bindOpen = function() {
        $("[data-cart-popup]").click(function() {
            MS.Cart.getInstance().showPopup()
        })
    }
};
MgStore.prototype.CartPopup.init = function() {
    var a = new MS.CartPopup;
    a.bindOpen();
    return a
};
MgStore.prototype.LoginForm = function() {
    var a = this,
        b, c, g = !1,
        f = "/",
        d, e = function(a) {
            a.keypress(function(a) {
                13 == a.which && b.submit()
            })
        };
    this.setForm = function(a) {
        b = a
    };
    this.getForm = function() {
        return b
    };
    this.setSubmitButton = function(a) {
        c = a
    };
    this.setAjaxUrl = function(a) {
        f = a
    };
    this.bindSubmit = function() {
        c.click(function() {
            b.submit()
        });
        e(this.getLoginEmailInput());
        e(this.getLoginPasswordInput())
    };
    this.bindValidate = function() {
        var b = MS.getBaseValidate();
        b.submitHandler = function() {
            a._checkUserData();
            return !1
        };
        MS.validate(b).setEmailLoginValidation("signEmail").setPasswordValidation("signPasswd");
        d = this.getForm().validate(b)
    };
    this.getLoginEmailInput = function() {
        var a;
        return function() {
            a instanceof jQuery || (a = $("#signEmail"));
            return a
        }
    }();
    this.getLoginPasswordInput = function() {
        var a;
        return function() {
            a instanceof jQuery || (a = $("#signPasswd"));
            return a
        }
    }();
    this._checkUserData = function() {
        g || (g = !0, $.ajax({
            type: "post",
            url: f,
            data: {
                emailAddress: this.getLoginEmailInput().val(),
                loginPassword: this.getLoginPasswordInput().val()
            },
            dataType: "json",
            success: function(a) {
                g = !1;
                a.status ? window.location.href = MS.AuthPopup.getInstance().getOnLoginUrl() :
                    (a = {}, a.signPasswd = _tr.wrongPassword, d.showErrors(a))
            }
        }))
    }
};
MgStore.prototype.LoginForm.init = function(a, b) {
    var c = new MS.LoginForm;
    c.setAjaxUrl("/profile-ajax/login");
    c.setForm(a);
    c.setSubmitButton(b);
    c.bindValidate();
    c.bindSubmit();
    return c
};
MgStore.prototype.ForgotForm = function() {
    var a = this,
        b, c, g = !1,
        f = "/",
        d, e = function(a) {
            a.keypress(function(a) {
                13 == a.which && b.submit()
            })
        };
    this.setForm = function(a) {
        b = a
    };
    this.getForm = function() {
        return b
    };
    this.setSubmitButton = function(a) {
        c = a
    };
    this.setAjaxUrl = function(a) {
        f = a
    };
    this.bindSubmit = function() {
        c.click(function() {
            b.submit()
        });
        e($("#forgotEmail"))
    };
    this.bindValidate = function() {
        var b = MS.getBaseValidate();
        b.submitHandler = function() {
            a._checkUserData();
            return !1
        };
        MS.validate(b).setEmailExistValidation("forgotEmail");
        d = this.getForm().validate(b)
    };
    this._checkUserData = function() {
        g || (g = !0, $.ajax({
            type: "post",
            url: f,
            data: {
                emailAddress: $("#forgotEmail").val()
            },
            dataType: "json",
            success: function(a) {
                g = !1;
                a.status ? MS.AuthPopup.getInstance().hide() : (a = {}, a.forgotEmail = _tr.recoveryPasswordError, d.showErrors(a))
            }
        }))
    }
};
MgStore.prototype.ForgotForm.init = function(a, b) {
    var c = new MS.ForgotForm;
    c.setAjaxUrl("/profile-ajax/forgot");
    c.setForm(a);
    c.setSubmitButton(b);
    c.bindValidate();
    c.bindSubmit();
    return c
};
MgStore.prototype.ClubCardLoginForm = function() {
    var a = this,
        b, c, g = !1,
        f = "/",
        d;
    this.initElements = function() {
        this.$clubCardNumber = $("#clubCardNumber");
        this.$clubCardPinCode = $("#clubCardPinCode")
    };
    this.setForm = function(a) {
        b = a
    };
    this.getForm = function() {
        return b
    };
    this.setSubmitButton = function(a) {
        c = a
    };
    this.setAjaxUrl = function(a) {
        f = a
    };
    this.bindSubmit = function() {
        c.click(function() {
            b.submit()
        })
    };
    this.bindValidate = function() {
        var b = MS.getBaseValidate();
        b.submitHandler = function() {
            a._login();
            return !1
        };
        MS.validate(b).setCardNumberValidation("clubCardNumber", !0).setPinCodeValidation("clubCardPinCode", !0);
        d = this.getForm().validate(b)
    };
    this._login = function() {
        g || (g = !0, $.ajax({
            type: "post",
            url: f,
            data: {
                clubCardNumber: this.$clubCardNumber.val(),
                clubCardPinCode: this.$clubCardPinCode.val()
            },
            dataType: "json",
            success: function(a) {
                g = !1;
                a.status ? window.location.href = MS.AuthPopup.getInstance().getOnLoginUrl() : d.showErrors(a.errors)
            }
        }))
    }
};
MgStore.prototype.ClubCardLoginForm.init = function(a, b, c) {
    var g = new MS.ClubCardLoginForm;
    g.initElements();
    g.setAjaxUrl(c);
    g.setForm(a);
    g.setSubmitButton(b);
    g.bindValidate();
    g.bindSubmit()
};
MgStore.prototype.SmsVerifyCodeValidation = function() {
    var a = this,
        b, c, g = "/",
        f;
    this.setForm = function(a) {
        b = a
    };
    this.getForm = function() {
        return b
    };
    this.setSubmitButton = function(a) {
        c = a
    };
    this.setAjaxUrl = function(a) {
        g = a
    };
    this.bindSubmit = function() {
        c.click(function() {
            b.submit()
        })
    };
    this.bindValidate = function() {
        var b = MS.getBaseValidate();
        b.submitHandler = function() {
            a._sendVerifyCode();
            return !1
        };
        MS.validate(b).setPhoneValidation("loginPhone");
        f = this.getForm().validate(b)
    };
    this._sendVerifyCode = function() {
        $.ajax({
            type: "post",
            url: g,
            data: {
                phone: $("#loginPhone").val()
            },
            dataType: "json",
            success: function(a) {
                if (2 == a.status) {
                    var b = {};
                    b.loginPhone = a.error;
                    f.showErrors(b)
                }
            }
        })
    }
};
MgStore.prototype.SmsVerifyCodeValidation.init = function() {
    var a = new MS.SmsVerifyCodeValidation;
    a.setAjaxUrl("/profile-ajax/sms-verify-code-validation");
    a.setForm($("#verifyCodeValidationForm"));
    a.setSubmitButton($("#verifyCodeValidationButton"));
    a.bindValidate();
    a.bindSubmit()
};
MgStore.prototype.SmsLoginForm = function() {
    var a = this,
        b, c, g = !1,
        f = "/",
        d;
    this.setForm = function(a) {
        b = a;
        a.parent()
    };
    this.getForm = function() {
        return b
    };
    this.setSubmitButton = function(a) {
        c = a
    };
    this.setAjaxUrl = function(a) {
        f = a
    };
    this.bindSubmit = function() {
        c.click(function() {
            b.submit()
        })
    };
    this.bindValidate = function() {
        var b = MS.getNotificationValidation();
        b.submitHandler = function() {
            a._loginUser();
            return !1
        };
        MS.validate(b).setVerifyCodeValidation("loginVerifyCode");
        d = this.getForm().validate(b)
    };
    this._loginUser = function() {
        g ||
            (g = !0, $.ajax({
                type: "post",
                url: f,
                data: {
                    phone: $("#loginPhone").val(),
                    verifyCode: $("#loginVerifyCode").val()
                },
                dataType: "json",
                success: function(a) {
                    g = !1;
                    if (1 == a.status) window.location.href = MS.AuthPopup.getInstance().getOnLoginUrl();
                    else if (2 == a.status) {
                        var b = {};
                        b.loginVerifyCode = a.error;
                        d.showErrors(b)
                    }
                }
            }))
    }
};
MgStore.prototype.SmsLoginForm.init = function() {
    var a = new MS.SmsLoginForm;
    a.setAjaxUrl("/profile-ajax/sms-login");
    a.setForm($("#smsLoginForm"));
    a.setSubmitButton($("#smsLoginButton"));
    a.bindValidate();
    a.bindSubmit()
};
MgStore.prototype.CommentLogin = function() {
    var a;
    this.bindClick = function(b) {
        b.click(function() {
            var b = MS.AuthPopup.getInstance();
            b.setOnLoginUrl(a);
            b.show();
            return !1
        })
    };
    this.setOnLoginUrl = function(b) {
        a = b
    }
};
MgStore.prototype.CommentLogin.init = function(a, b) {
    var c = new MS.CommentLogin;
    c.setOnLoginUrl(b);
    c.bindClick(a);
    return c
};
$(function() {
    var a = new function(a) {
            var b = this,
                c;
            this.addGood = function(c) {
                $.ajax({
                    url: a,
                    dataType: "json",
                    type: "POST",
                    data: {
                        idGood: c
                    }
                }).done(function(a) {
                    b.updateCompareListCounter(a.count)
                })
            };
            this.removeGood = function(c) {
                $.ajax({
                    url: a + "/" + c,
                    dataType: "json",
                    type: "POST",
                    data: {
                        idGood: c
                    }
                }).done(function(a) {
                    b.updateCompareListCounter(a.count)
                })
            };
            this.updateCompareListCounter = function(a) {
                c instanceof $ || (c = $("#compare"));
                a = parseInt(a);
                c.stop(!1, !1);
                c.find(".count-value").text(a);
                0 < a ? c.fadeIn(150) : c.fadeOut(150)
            }
        }("/ru/compare"),
        b = $("#compare-list-filter-button-any"),
        c = $("#compare-list-filter-button-differ"),
        g = function() {
            var a = $(".goods-compare-attributes-item");
            a.not(".different").filter(":visible").slideToggle(150);
            a.filter(".different").not(":visible").slideToggle(150)
        },
        f = function() {
            $(".goods-compare-attributes-item:not(:visible)").slideToggle(150)
        },
        d = function(a) {
            return $("span.goods-compare-attributes li:nth-child(" + a + ")")
        },
        e = function(a) {
            return $("ul.goods-compare-attributes li:nth-child(" + a + ")")
        },
        h = function() {
            var a =
                0,
                b = $(),
                c = $();
            do {
                var f = !1,
                    g = null;
                c.each(function() {
                    if (!g) g = $(this).text();
                    else if (g != $(this).text()) return f = !0, !1
                });
                f || "-" == g && 1 < c.length ? b.add(c).addClass("different") : b.add(c).removeClass("different");
                b = d(++a);
                c = e(a)
            } while (c.length)
        },
        l = function() {
            var a = 0,
                b = $(),
                c = $();
            do {
                var f = !0;
                c.each(function() {
                    if ("-" !== $(this).text()) return f = !1
                });
                f && c.length && (b.add(c).remove(), --a);
                b = d(++a);
                c = e(a)
            } while (c.length)
        };
    $(".thumbnails").on("click", ".goods-compare-item-close", function() {
        var b = $(this).closest(".thumb-item");
        a.removeGood(b.attr("data-id"));
        b.remove();
        h();
        l();
        c.hasClass("current") ? g() : f();
        0 == $(".thumb-item").length && $(".goods-compare-attributes").remove()
    });
    $("body").on("change", ".compare-control input[type=checkbox]", function() {
        var b = $(this),
            c = b.closest(".good-item").find("input[type=checkbox]");
        b.is(":checked") ? (c.filter(":not(:checked)").prop("checked", !0), a.addGood(b.attr("data-id")), b.siblings("span").fadeOut(150, function() {
            b.siblings("a").fadeIn(150)
        })) : (c.filter(":checked").prop("checked", !1), b.siblings("a").fadeOut(150,
            function() {
                b.siblings("span").fadeIn(150)
            }), a.removeGood(b.attr("data-id")))
    });
    b.click(function() {
        var a = $(this);
        a.hasClass("current") || (f(), a.siblings("a").removeClass("current"), a.addClass("current"))
    });
    c.click(function() {
        var a = $(this);
        a.hasClass("current") || (g(), a.siblings("a").removeClass("current"), a.addClass("current"))
    })
});
var phone_landscape = 576;
$(function() {
    function a() {
        $(".full_nav").removeClass("show_me")
    }
    MS.Gallery.init($("#special-goods-gallery"), !1, !0);
    MS.PhoneMask.init("+994 XX XXX-XX-XX");
    $("input.numeric").numeric();
    $(".order-show-btn").bind("click", function() {
        $(this).closest(".item").toggleClass("open")
    });
    $(".gallery-item-img").fancybox({
        prevEffect: "none",
        nextEffect: "none",
        wrapCSS: "item-gallery-fancybox",
        helpers: {
            thumbs: {
                width: 90,
                height: 65
            }
        }
    });
    $("#filterLoader").appendTo($("body"));
    $(".categories a").click(function() {
        $(".full_nav.inset").length &&
            $(".full_nav").toggleClass("show_me");
        return !1
    });
    $(document).on("mouseout", ".full_nav", function() {
        $("body").on("click", a)
    });
    $(document).on("mouseover", ".full_nav", function() {
        $("body").off("click", a)
    });
    $("a.toggler").click(function() {
        $(this).toggleClass("active");


        if ($(".cabinet_icons ul li a.basket").hasClass("active")) {
            $(".cabinet_icons ul li a.basket").click();
        }


        if ($(this).hasClass("active")) {
            $("#aside_block").addClass("active");
            setTimeout(function(){
                $("#aside_block").addClass("show_me");
            }, 10);
        } else {
            $("#aside_block").removeClass("show_me");
            setTimeout(function(){
                $("#aside_block").removeClass("active");
            }, 600);
        }


        $(this).hasClass("active") ? ($("body").addClass("overflow"), $("#aside_block").css("height", $(window).height() - $("#header_new").height() + "px"), $("#aside_block > div:first-child").css("height", $(window).height() -
            $("#header_new").height() - 60 + "px")) : ($("body").removeClass("overflow"), $("#aside_block > div:first-child").removeAttr("style"), setTimeout(function() {
            $(".filtre_toggler").removeAttr("style")
        }, 600), $(".mobile_nav > ul > li, .mobile_nav > a").removeClass("active"), $(".mobile_nav > ul.show_me").removeClass("show_me"), $(".mobile_simple_nav").removeClass("hide_me"));
        return !1
    });
    $(".mobile_nav > a").click(function() {
        var a = $(this);
        a.toggleClass("active");
        a.next().toggleClass("show_me");
        $(".mobile_simple_nav").toggleClass("hide_me");
        return !1
    });
    $(".mobile_nav > ul > li > a").click(function() {
        $(this).parent().toggleClass("active");
        return !1
    });
    $(window).resize(function() {
        $("a.toggler.active").click()
    });
    $(".first_header .right_top .lang select").change(function() {
        var a = $(this).find("option:selected").index(),
            a = $(".first_header .right_top .lang ul li").eq(a).find("a").attr("href");
        location.href = a
    });
    onResize()
});
$(window).resize(onResize);

function onResize() {
    992 > $(window).width() ? $("#menu-vertical-menu.is-main").removeClass("show") : $("#menu-vertical-menu.is-main").addClass("show")
}
$(function() {
    setTimeout(function() {
        var a = document.getElementsByTagName("script")[0];
        if (!document.getElementById("facebook-jssdk")) {
            var b = document.createElement("script");
            b.id = "facebook-jssdk";
            b.src = "//connect.facebook.net/ru_RU/all.js#xfbml=1";
            a.parentNode.insertBefore(b, a)
        }
    }, 1E3);
    setTimeout(function() {
        window.___gcfg = {
            lang: "ru"
        };
        var a = document.createElement("script");
        a.type = "text/javascript";
        a.async = !0;
        a.src = "https://apis.google.com/js/platform.js";
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b)
    }, 1E3)
});
(function() {
    var a;
    MgStore.prototype.window = {
        open: function(b) {
            "object" != typeof a || a.closed ? a = window.open(b, "MgStore", "toolbar=0,status=0,width=1024,height=436,left=100,top=100,screenX=100,screenY=100") : a.focus()
        },
        to: function(a) {
            this.getParent().location.href = a
        },
        error: function(a) {},
        vkCreate: function(a) {
            this.getParent().MS.vkLogin(a)
        },
        fbConnected: function() {
            this.getParent().$("#fbConnect").addClass("connected")
        },
        vkConnected: function() {
            this.getParent().$("#vkConnect").addClass("connected")
        },
        getParent: function() {
            return window.opener ?
                -1 == navigator.appVersion.indexOf("MSIE") ? window.opener.parent : window.opener : window
        },
        close: function() {
            window.opener ? window.close() : window.location.href = "/"
        }
    }
})();
MgStore.prototype.AddressPart = Backbone.Model.extend({
    getFormattedValue: function() {
        return this.get("value")
    }
});
MgStore.prototype.AddressEntityPart = MgStore.prototype.AddressPart.extend({
    setData: function(a) {
        a ? this.set({
            value: a.id,
            formattedValue: a.name
        }) : this.set({
            value: 0,
            formattedValue: ""
        })
    },
    getFormattedValue: function() {
        return this.get("formattedValue")
    }
});
MgStore.prototype.AddressPartCity = MgStore.prototype.AddressEntityPart.extend({
    defaults: {
        name: "city",
        data: [],
        placeholder: void 0,
        value: 0,
        formattedValue: "",
        deliveryPrice: 0,
        deliveryTimeRange: [],
        requiredMessage: !1
    },
    initialize: function() {
        this.loadData()
    },
    loadData: function() {
        var a = this;
        $.ajax({
            type: "get",
            url: MS.getUrl("/address-ajax/cities"),
            dataType: "json",
            success: function(b) {
                a.set("data", b);
                0 == a.get("value") && a.setData(b[0])
            }
        })
    },
    setData: function(a) {
        a ? this.set({
            value: a.id,
            formattedValue: a.name,
            deliveryPrice: a.deliveryPrice,
            deliveryTimeRange: a.deliveryTimeRange
        }) : this.set({
            value: 0,
            formattedValue: "",
            deliveryPrice: 0,
            deliveryTimeRange: []
        })
    }
});
MgStore.prototype.AddressPartDistrict = MgStore.prototype.AddressEntityPart.extend({
    defaults: {
        name: "district",
        data: [],
        placeholder: _tr.chooseDistrict,
        formattedValue: void 0,
        requiredMessage: _tr.chooseDistrict
    },
    setCity: function(a) {
        if (!this.get("city")) {
            var b = this;
            this.set("city", a);
            0 == this.get("data").length && this.loadData();
            this.get("city").on("change:value", function() {
                b.loadData()
            })
        }
    },
    loadData: function() {
        if (this.get("city").get("value")) {
            var a = this;
            $.ajax({
                type: "get",
                url: MS.getUrl("/address-ajax/districts"),
                data: {
                    cityId: this.get("city").get("value")
                },
                dataType: "json",
                success: function(b) {
                    a.set("data", b);
                    0 != a.get("value") && a._valueIsFromData() || a.setData()
                }
            })
        }
    },
    _valueIsFromData: function() {
        var a = this.get("value");
        return _.any(this.get("data"), function(b) {
            return b.id == a
        })
    }
});
MgStore.prototype.AddressPartStreet = MgStore.prototype.AddressPart.extend({
    defaults: {
        name: "street",
        placeholder: _tr.addressStreet,
        value: "",
        requiredMessage: _tr.addressStreet
    }
});
MgStore.prototype.AddressPartHouse = MgStore.prototype.AddressPart.extend({
    defaults: {
        name: "house",
        placeholder: _tr.addressHouse,
        value: "",
        requiredMessage: _tr.addressHouse
    }
});
MgStore.prototype.AddressPartFlat = MgStore.prototype.AddressPart.extend({
    defaults: {
        name: "flat",
        placeholder: _tr.addressFlat,
        value: "",
        requiredMessage: _tr.addressFlat
    }
});
MgStore.prototype.AddressPartAdditionalInfo = MgStore.prototype.AddressPart.extend({
    defaults: {
        name: "additionalInfo",
        placeholder: _tr.addressAdditionalInfo,
        value: "",
        requiredMessage: !1
    }
});
MgStore.prototype.AddressPartCollection = Backbone.Collection.extend({
    model: MS.AddressPart,
    setId: function(a) {
        this.id = a
    },
    getId: function() {
        return this.id
    },
    getData: function() {
        var a = {};
        this.each(function(b) {
            a[b.get("name")] = b.get("value")
        });
        return a
    },
    toJSON: function() {
        return {
            formattedValue: this._getFormattedValue(),
            additionalDescription: this.last().get("value")
        }
    },
    _getFormattedValue: function() {
        var a = [];
        _.each(this.initial(), function(b) {
            b.get("value") && a.push(b.getFormattedValue())
        });
        return a.join(", ")
    }
}, {
    init: function(a) {
        var b = new MS.AddressPartCollection;
        b.setId(a.id);
        var c = new MS.AddressPartCity;
        c.setData(a.city);
        b.add(c);
        var g = new MS.AddressPartDistrict;
        g.setData(a.district);
        g.setCity(c);
        b.add(g);
        b.add(new MS.AddressPartStreet({
            value: a.street
        }));
        b.add(new MS.AddressPartHouse({
            value: a.house
        }));
        b.add(new MS.AddressPartFlat({
            value: a.flat
        }));
        b.add(new MS.AddressPartAdditionalInfo({
            value: a.additionalInfo
        }));
        return b
    }
});
MgStore.prototype.AddressCollection = Backbone.Collection.extend({
    initialize: function() {
        this._newIndex = this._length = 0;
        this._addresses = [];
        this._removedAddresses = [];
        this._newAddresses = {}
    },
    add: function(a) {
        this._addresses.push(a);
        this.trigger("address-add", a, this._length++)
    },
    addAddresses: function(a) {
        var b = this;
        _.each(a, function(a) {
            b.add(MS.AddressPartCollection.init(a))
        })
    },
    removeAt: function(a) {
        this._removedAddresses.push(this._addresses[a].getId());
        this._addresses.splice(a, 1);
        this._length--;
        this.trigger("address-remove")
    },
    getAddresses: function() {
        return this._addresses
    },
    getRemovedAddresses: function() {
        return this._removedAddresses
    },
    addNewAddressAt: function(a, b) {
        this._newAddresses[a] = b;
        this._newIndex++;
        this.trigger("new-address", _.keys(this._newAddresses))
    },
    removeNewAddressAt: function(a) {
        delete this._newAddresses[a]
    },
    getNewIndex: function() {
        return this._newIndex
    },
    getLength: function() {
        return this._length
    },
    saveNew: function(a) {
        _.each(this._newAddresses, function(a) {
            a.trigger("removed")
        });
        this._newAddresses = {};
        this.addAddresses(a)
    },
    getNewData: function() {
        return _.map(this._newAddresses, function(a) {
            return a.getData()
        })
    }
}, {
    init: function(a) {
        var b = new MS.AddressCollection;
        b.addAddresses(a);
        return b
    }
});
MgStore.prototype.AddressInput = Backbone.View.extend({
    events: {
        "input input": "updateValue"
    },
    updateValue: function() {
        this.model.set("value", this.$el.find("input").val())
    },
    getHTML: function() {
        return _.template($("#address-input-template").html())(_.extend({
            additionalClasses: this.options.additionalClasses,
            index: this.options.index
        }, this.model.toJSON()))
    },
    render: function() {
        this.$el.html(this.getHTML());
        this.delegateEvents(this.events);
        return this
    }
});
MgStore.prototype.AddressSelect = Backbone.View.extend({
    initialize: function() {
        this.model.on("change", this.render, this)
    },
    getHTML: function() {
        return _.template(this.getTemplate().html())(_.extend({
            index: this.options.index
        }, this.model.toJSON()))
    },
    getTemplate: function() {
        return $("#address-select-template")
    },
    render: function() {
        this.$el.html(this.getHTML());
        this._initSelect();
        this.delegateEvents(this.events);
        return this
    },
    _initSelect: function() {
        var a = this;
        this.$el.find(".rm-select").rmSelect(function(b) {
            a.model.setData(a._getElement(b.data("id")))
        })
    },
    _getElement: function(a) {
        var b = void 0;
        _.each(this.model.get("data"), function(c) {
            c.id == a && (b = c)
        });
        return b
    }
});
MgStore.prototype.AddressCitySelect = MgStore.prototype.AddressSelect.extend({
    getTemplate: function() {
        return $("#address-city-select-template")
    },
    _getElementData: function(a) {
        return _.extend({
            deliveryPrice: a.data("price")
        }, MgStore.prototype.AddressCitySelect.__super__._getElementData.apply(this, arguments))
    }
});
MgStore.prototype.AddressView = Backbone.View.extend({
    events: {
        "click [data-new-address]": "newAddress"
    },
    newAddress: function() {
        var a = this,
            b = this.collection.getNewIndex(),
            c = MS.AddressForm.init(this.$el, b);
        this.$el.find("[data-new-address]").before(c.$el);
        this.collection.addNewAddressAt(b, c.collection);
        c.on("remove", function() {
            a.collection.removeNewAddressAt(b)
        })
    }
}, {
    init: function(a, b) {
        var c = new MS.AddressView({
            collection: b,
            el: a
        });
        c.newAddress();
        return c
    }
});
MgStore.prototype.AddressPreview = Backbone.View.extend({
    events: {
        "click .item-delete": "remove"
    },
    getHTML: function() {
        var a = $("#address-preview-template");
        return 0 == a.length ? "" : _.template(a.html())(_.extend({
            index: this.options.index
        }, this.model.toJSON()))
    },
    render: function() {
        this.$el.html(this.getHTML());
        this.delegateEvents(this.events);
        return this
    },
    remove: function() {
        this.undelegateEvents();
        var a = this;
        this.$el.find(".input-container").fadeOut(300, function() {
            a.trigger("removed")
        })
    }
});
MgStore.prototype.AddressList = Backbone.View.extend({
    initialize: function() {
        this.collection.on("address-add", function(a, b) {
            this.toggle();
            this.renderModel(a, b)
        }, this);
        this.collection.on("address-remove", this.render, this)
    },
    render: function() {
        this.renderCollection();
        this.delegateEvents(this.events);
        return this
    },
    renderCollection: function() {
        var a = this;
        this.toggle();
        this.$el.html("");
        _.each(this.collection.getAddresses(), function(b, c) {
            a.renderModel(b, c)
        })
    },
    renderModel: function(a, b) {
        var c = this,
            g = new MS.AddressPreview({
                model: a,
                index: b
            });
        g.on("removed", function() {
            c.collection.removeAt(b)
        });
        this.$el.append(g.render().$el)
    },
    toggle: function() {
        this.$el.toggleClass("hide", 0 == this.collection.getLength())
    }
}, {
    init: function(a, b) {
        var c = new MS.AddressList({
            collection: b,
            el: a
        });
        c.render();
        return c
    }
});
MgStore.prototype.AddressOrderView = Backbone.View.extend({}, {
    init: function(a, b, c, g) {
        b = MS.AddressCollection.init(b ? [b] : []);
        MS.AddressList.init(a, b);
        g = MS.AddressOrderForm.init(b.getAddresses()[0], g, a.data("addressForm"));
        a.append(g.$el);
        a.toggle(0 == c.length || 0 == c.val());
        b.addNewAddressAt(0, g.collection);
        return b
    }
});
MgStore.prototype.AddressForm = Backbone.View.extend({
    className: "address",
    events: {
        "click .item-delete": "remove"
    },
    initialize: function() {
        this.collection.on("removed", this.remove, this)
    },
    getHTML: function() {
        return _.template($("#address-form-template").html())({
            title: this.options.title
        })
    },
    render: function() {
        this.$el.html(this.getHTML());
        this.delegateEvents(this.events);
        return this
    },
    remove: function() {
        this.undelegateEvents();
        this.trigger("remove");
        var a = this;
        this.$el.fadeOut(300, function() {
            a.$el.remove()
        })
    },
    bindValidation: function(a, b) {
        var c = MS.validate(a.data("validator").settings);
        void 0 == b && (b = "");
        this.collection.each(function(a) {
            a.get("requiredMessage") && c.setRequiredValidation(a.get("name") + b, a.get("requiredMessage"))
        })
    }
}, {
    init: function(a, b) {
        var c = new MS.AddressPartCollection,
            g = new this({
                collection: c,
                index: b,
                title: this.getAddressTitle
            });
        g.render();
        this.initAddressParts(g.$el, c, b);
        g.bindValidation(a, b);
        return g
    },
    initAddressParts: function(a, b, c) {
        var g = new MS.AddressPartCity;
        (new MS.AddressSelect({
            model: g,
            el: a.find("[data-city]"),
            index: c
        })).render();
        b.add(g);
        var f = new MS.AddressPartDistrict;
        f.setCity(g);
        (new MS.AddressSelect({
            model: f,
            el: a.find("[data-district]"),
            index: c
        })).render();
        b.add(f);
        g = new MS.AddressPartStreet;
        (new MS.AddressInput({
            model: g,
            el: a.find("[data-street]"),
            additionalClasses: "is-medium",
            index: c
        })).render();
        b.add(g);
        g = new MS.AddressPartHouse;
        (new MS.AddressInput({
            model: g,
            el: a.find("[data-house]"),
            additionalClasses: "is-small",
            index: c
        })).render();
        b.add(g);
        g = new MS.AddressPartFlat;
        (new MS.AddressInput({
            model: g,
            el: a.find("[data-flat]"),
            additionalClasses: "is-small",
            index: c
        })).render();
        b.add(g);
        g = new MS.AddressPartAdditionalInfo;
        (new MS.AddressInput({
            model: g,
            el: a.find("[data-additional-info]"),
            index: c
        })).render();
        b.add(g)
    },
    getTitle: function() {
        return _tr.deliveryAddress
    }
});
MgStore.prototype.AddressOrderForm = MgStore.prototype.AddressForm.extend({}, {
    TYPE_DELIVERY: "delivery",
    init: function(a, b, c) {
        var g = new MS.AddressPartCollection,
            f = new this({
                collection: g,
                title: this.getTitle(c)
            });
        f.render();
        this.initAddressParts(f.$el, g, a, c);
        f.bindValidation(b, c);
        return f
    },
    initAddressParts: function(a, b, c, g) {
        var f = this.getAddressPart(c, MS.AddressPartCity);
        (new MS.AddressCitySelect({
            model: f,
            el: a.find("[data-city]"),
            index: g
        })).render();
        if (g == this.TYPE_DELIVERY) f.on("change", function() {
            $("#deliveryTimeRange").val(f.get("deliveryTimeRange")).trigger("change")
        });
        b.add(f);
        var d = this.getAddressPart(c, MS.AddressPartDistrict);
        d.setCity(f);
        (new MS.AddressSelect({
            model: d,
            el: a.find("[data-district]"),
            index: g
        })).render();
        b.add(d);
        d = this.getAddressPart(c, MS.AddressPartStreet);
        (new MS.AddressInput({
            model: d,
            el: a.find("[data-street]"),
            index: g
        })).render();
        b.add(d);
        d = this.getAddressPart(c, MS.AddressPartHouse);
        (new MS.AddressInput({
            model: d,
            el: a.find("[data-house]"),
            index: g
        })).render();
        b.add(d);
        d = this.getAddressPart(c, MS.AddressPartFlat);
        (new MS.AddressInput({
            model: d,
            el: a.find("[data-flat]"),
            index: g
        })).render();
        b.add(d);
        c = this.getAddressPart(c, MS.AddressPartAdditionalInfo);
        (new MS.AddressInput({
            model: c,
            el: a.find("[data-additional-info]"),
            index: g
        })).render();
        b.add(c)
    },
    getAddressPart: function(a, b) {
        return a ? a.find(function(a) {
            return a instanceof b
        }) : new b
    },
    getTitle: function(a) {
        return a == this.TYPE_DELIVERY ? MgStore.prototype.AddressForm.getTitle.apply(this, arguments) : _tr.installAddress
    }
});
MgStore.prototype.ProfileEditEnableButton = function() {
    this.bindEnable = function(a) {
        a.click(function() {
            var a = $(this),
                c = a.siblings("input");
            c.removeAttr("disabled").focus();
            "clear" == a.data("enableButton") && c.val("")
        })
    }
};
MgStore.prototype.ProfileEditEnableButton.init = function() {
    var a = new MS.ProfileEditEnableButton;
    a.bindEnable($("[data-enable-button]"));
    return a
};
(function() {
    var a = function() {
        var a, c = this;
        this.getTmpAvatar = function() {
            a instanceof jQuery || (a = $("#newPhotoBox img"));
            return a
        };
        this.bindUpload = function() {
            new qq.FileUploader({
                element: document.getElementById("avatarUpload"),
                action: "/profile-ajax/avatar-upload",
                allowedExtensions: ["jpg", "jpeg", "png", "gif"],
                sizeLimit: 8388608,
                debug: !1,
                multiple: !1,
                template: "",
                classes: {
                    button: "uplProfile",
                    drop: "avatarDropArea",
                    dropActive: "avatarDropArea-active",
                    list: "qq-upload-list",
                    file: "qq-upload-file",
                    spinner: "qq-upload-spinner",
                    size: "qq-upload-size",
                    cancel: "qq-upload-cancel"
                },
                onComplete: function(a, b, d) {
                    c._updateTmpSource(d)
                }
            })
        };
        this.bindDelete = function() {
            $("#deleteAvatar").click(function() {
                $.ajax({
                    type: "post",
                    url: "/profile-ajax/avatar-remove",
                    dataType: "json",
                    success: function(a) {
                        c._updateTmpSource(a)
                    }
                })
            })
        };
        this._updateTmpSource = function(a) {
            c.getTmpAvatar().attr("src", MS.resize(a.photoPath, 140, 140))
        }
    };
    MgStore.prototype.uploadAvatar = function() {
        var b = new a;
        b.bindUpload();
        b.bindDelete()
    }
})();
MgStore.prototype.ProfileEditPersonalForm = function() {
    var a = this,
        b, c, g = !1;
    this.setForm = function(a) {
        b = a
    };
    this.setMessageElement = function(a) {
        c = a
    };
    this.bindSubmit = function(a) {
        a.click(function() {
            b.submit()
        })
    };
    this.bindValidate = function(c) {
        var d = MS.getBaseValidate();
        d.submitHandler = function() {
            a._savePersonalInfo(c);
            return !1
        };
        MS.validate(d).setNameValidation("firstName").setLastNameValidation("lastName");
        b.validate(d)
    };
    this._savePersonalInfo = function(c) {
        g || (g = !0, $.ajax({
            type: "post",
            url: c,
            data: b.serializeObject(),
            dataType: "json",
            success: function(b) {
                g = !1;
                1 == b.status && a._showSuccessMessage()
            }
        }))
    };
    this._showSuccessMessage = function() {
        c.fadeIn(300).find(".close-not").one("click", function() {
            c.fadeOut(300)
        })
    }
};
MgStore.prototype.ProfileEditPersonalForm.init = function() {
    var a = new MS.ProfileEditPersonalForm;
    a.setForm($("#profileEditForm"));
    a.setMessageElement($("#editSuccessMessage"));
    a.bindValidate("/profile-edit-ajax/personal");
    a.bindSubmit($("#profileEditFormSubmit"))
};
MgStore.prototype.ProfileEditAddressForm = function() {
    var a = this,
        b, c, g = !1,
        f;
    this.setAddressCollection = function(a) {
        f = a
    };
    this.setForm = function(a) {
        b = a
    };
    this.setMessageElement = function(a) {
        c = a
    };
    this.bindSubmit = function(a) {
        a.click(function() {
            b.submit()
        })
    };
    this.bindValidate = function(c) {
        var d = MS.getBaseValidate();
        d.submitHandler = function() {
            a._savePersonalInfo(c);
            return !1
        };
        MS.validate(d);
        b.validate(d)
    };
    this._savePersonalInfo = function(b) {
        g || (g = !0, $.ajax({
            type: "post",
            url: b,
            data: {
                newAddresses: f.getNewData(),
                removedAddresses: f.getRemovedAddresses()
            },
            dataType: "json",
            success: function(b) {
                g = !1;
                1 == b.status && (a._showSuccessMessage(), f.saveNew(b.addresses))
            }
        }))
    };
    this._showSuccessMessage = function() {
        c.fadeIn(300).find(".close-not").one("click", function() {
            c.fadeOut(300)
        })
    }
};
MgStore.prototype.ProfileEditAddressForm.init = function(a) {
    var b = new MS.ProfileEditAddressForm;
    b.setForm($("#profileEditForm"));
    b.setMessageElement($("#editSuccessMessage"));
    b.bindValidate("/profile-edit-ajax/address");
    b.bindSubmit($("#profileEditFormSubmit"));
    b.setAddressCollection(a);
    return b
};
MgStore.prototype.ProfileEditClubCardForm = function() {
    var a = this,
        b, c, g = !1;
    this.setForm = function(a) {
        b = a
    };
    this.setMessageElement = function(a) {
        c = a
    };
    this.bindSubmit = function(a) {
        a.click(function() {
            b.submit()
        })
    };
    this.bindValidate = function(c) {
        var d = MS.getNotificationValidation();
        d.submitHandler = function() {
            a._savePersonalInfo(c);
            return !1
        };
        MS.validate(d).setCardNumberValidation("clubCardNumber").setPinCodeValidation("clubCardPinCode");
        b.validate(d)
    };
    this.bindClubCardUpperCase = function() {
        var a = $("#clubCardNumber");
        a.on("input", function() {
            a.val(a.val().toUpperCase())
        })
    };
    this._savePersonalInfo = function(c) {
        g || (g = !0, $.ajax({
            type: "post",
            url: c,
            data: b.serializeObject(),
            dataType: "json",
            success: function(c) {
                g = !1;
                a._clearErrorClasses();
                1 == c.status ? (a._disableFields(), a._showSuccessMessage()) : $.each(c.errors, function(a, c) {
                    var d = b.find("#" + a);
                    $('<span class="input-notification"><span>' + c + "</span></span>").insertAfter(d);
                    d.parent().addClass("error")
                })
            }
        }))
    };
    this._clearErrorClasses = function() {
        b.find(".error").removeClass("error");
        b.find(".input-notification").remove()
    };
    this._disableFields = function() {
        b.find("#clubCardNumber, #clubCardPinCode").attr("disabled", "disabled")
    };
    this._showSuccessMessage = function() {
        c.fadeIn(300).find(".close-not").one("click", function() {
            c.fadeOut(300)
        })
    }
};
MgStore.prototype.ProfileEditClubCardForm.init = function() {
    var a = new MS.ProfileEditClubCardForm;
    a.setForm($("#profileEditForm"));
    a.setMessageElement($("#editSuccessMessage"));
    a.bindValidate("/profile-edit-ajax/club-card");
    a.bindSubmit($("#profileEditFormSubmit"));
    a.bindClubCardUpperCase()
};
MgStore.prototype.ProfileEditContactsForm = function() {
    var a = this,
        b, c, g = !1;
    this.setForm = function(a) {
        b = a
    };
    this.setMessageElement = function(a) {
        c = a
    };
    this.bindSubmit = function(a) {
        a.click(function() {
            b.submit()
        })
    };
    this.bindValidate = function(c) {
        var d = MS.getBaseValidate();
        d.submitHandler = function() {
            a._savePersonalInfo(c);
            return !1
        };
        MS.validate(d).setRequiredValidation("profilePhone").setEmailValidation("profileEmail").setPasswordValidation("newPassword");
        b.validate(d)
    };
    this._savePersonalInfo = function(b) {
        g || (g = !0, $.ajax({
            type: "post",
            url: b,
            data: this._getData(),
            dataType: "json",
            success: function(b) {
                g = !1;
                1 == b.status ? a._showSuccessMessage() : 0 == b.status && (new Backbone.Notifier).notify(b.error)
            }
        }))
    };
    this._showSuccessMessage = function() {
        c.fadeIn(300).find(".close-not").one("click", function() {
            c.fadeOut(300)
        })
    };
    this._getData = function() {
        var a = b.serializeObject();
        a.secondaryPhones = {};
        b.find("[data-phone-id]").each(function() {
            var b = $(this);
            a.secondaryPhones[b.data("phoneId")] = b.val()
        });
        return a
    }
};
MgStore.prototype.ProfileEditContactsForm.init = function() {
    var a = new MS.ProfileEditContactsForm;
    a.setForm($("#profileEditForm"));
    a.setMessageElement($("#editSuccessMessage"));
    a.bindValidate("/profile-edit-ajax/contacts");
    a.bindSubmit($("#profileEditFormSubmit"))
};
MgStore.prototype.OrderAbstractModel = Backbone.Model.extend({
    url: "/cart-ajax",
    initialize: function() {
        this.on("change:count", this.saveData, this);
        this.on("remove", this.remove, this)
    },
    saveData: function() {
        this.save({}, {
            success: function() {
                MS.Cart.getInstance().updateCartInfo()
            }
        })
    },
    remove: function() {
        var a = this;
        $.ajax({
            type: "post",
            url: a.url + "/remove",
            data: this.getRemoveData(),
            success: function() {
                a.destroy();
                MS.Cart.getInstance().updateCartInfo()
            }
        })
    },
    getRemoveData: function() {
        return {}
    }
});
MgStore.prototype.OrderGoodModel = MgStore.prototype.OrderAbstractModel.extend({
    defaults: {
        idGood: 0,
        count: 1,
        price: 0,
        bonus: 0
    },
    initialize: function() {
        MgStore.prototype.OrderGoodModel.__super__.initialize.apply(this, arguments);
        this.on("remove", this.removeServices, this)
    },
    removeServices: function() {
        var a = this;
        this.collection.each(function(b) {
            b.get("idMainGood") == a.get("idGood") && b.trigger("remove")
        })
    },
    getRemoveData: function() {
        return {
            idGood: this.get("idGood")
        }
    },
    getUniqueId: function() {
        return "good_" + this.get("idGood")
    }
});
MgStore.prototype.OrderComplectModel = MgStore.prototype.OrderAbstractModel.extend({
    defaults: {
        idComplect: 0,
        goodIds: [],
        count: 1,
        price: 0,
        bonus: 0
    },
    getRemoveData: function() {
        return {
            idComplect: this.get("idComplect"),
            goodIds: this.get("goodIds")
        }
    },
    getUniqueId: function() {
        return "complect_" + this.get("idComplect")
    }
});
MgStore.prototype.OrderServiceModel = MgStore.prototype.OrderAbstractModel.extend({
    defaults: {
        idGoodService: 0,
        count: 1,
        price: 0,
        bonus: 0
    },
    getRemoveData: function() {
        return {
            idGoodService: this.get("idGoodService")
        }
    },
    getUniqueId: function() {
        return "service_" + this.get("idGoodService")
    }
});
MgStore.prototype.OrderItemView = Backbone.View.extend({
    events: {
        "click [data-add-good]": "changeAddCount",
        "click [data-remove-good]": "changeRemoveCount",
        "click .delete-cart-item-ico": "removeItem"
    },
    initialize: function() {
        this.model.on("updateViewCount", this.updateViewCount, this);
        this.model.on("remove", this.removeElement, this)
    },
    changeAddCount: function() {
        this.changeCount(1)
    },
    changeRemoveCount: function() {
        this.changeCount(-1)
    },
    changeCount: function(a) {
        var b = this.$el.find("[data-count-good]");
        a = Number(b.text()) +
            a;
        0 != a ? (a = Math.max(1, Math.min(99, a - 0)), b.text(a), this.model.set("count", a), $('[data-cart-item-count="' + this.model.get("idGood") + '"]').text(a)) : this.removeItem()
    },
    updateViewCount: function() {
        this.$el.find("[data-count-good]").text(this.model.get("count"))
    },
    removeItem: function() {
        confirm(_tr.confirmDelete) && MS.Cart.getInstance().remove(this.model)
    },
    removeElement: function() {
        this.$el.fadeOut(300)
    }
});
MgStore.prototype.Cart = Backbone.Collection.extend({
    model: MS.OrderAbstractModel,
    url: "/cart-ajax",
    setData: function(a) {
        var b = this;
        b.reset();
        $.each(a, function(a, g) {
            var c = g.hasOwnProperty("idGood") ? new MS.OrderGoodModel(g) : g.hasOwnProperty("idGoodService") ? new MS.OrderServiceModel(g) : new MS.OrderComplectModel(g);
            b.add(c, {
                silent: !0
            })
        })
    },
    addGood: function(a, b, c) {
        var g = this.find(function(b) {
            return b.get("idGood") == a
        });
        g instanceof MS.OrderGoodModel ? this.increaseOrderItemCount(g) : g = new MS.OrderGoodModel({
            idGood: a,
            price: b,
            preDiscountPrice: c
        });
        this.createOrderItem(g)
    },
    addService: function(a, b) {
        var c = this.find(function(b) {
            return b.get("idGoodService") == a
        });
        c instanceof MS.OrderServiceModel ? this.increaseOrderItemCount(c) : c = new MS.OrderServiceModel({
            idGoodService: a,
            price: b
        });
        this.createOrderItem(c)
    },
    addComplect: function(a, b, c) {
        var g = this.find(function(c) {
            return c.get("idComplect") == a && _.isEqual(c.get("goodIds"), b)
        });
        g instanceof MS.OrderComplectModel ? this.increaseOrderItemCount(g) : g = new MS.OrderComplectModel({
            idComplect: a,
            goodIds: b,
            price: c
        });
        this.createOrderItem(g)
    },
    increaseOrderItemCount: function(a) {
        a.set("count", a.get("count") - 0 + 1);
        this.trigger("add", a)
    },
    createOrderItem: function(a) {
        var b = this;
        this.create(a, {
            success: function() {
                b.showPopup()
            }
        })
    },
    showPopup: function() {
        var a = this;
        $.get(MS.getUrl("/cart-ajax/popup"), function(b) {
            var c = $(b);
            c.appendTo(document.body);
            var g = a.initPopup(c);
            a.updateCartData(function() {
                MS.CartView.init(c.find("[data-cart]"), g)
            });
            $("input.numeric").numeric();
            MS.ActionPromoCodeForm.init()
        })
    },
    initPopup: function(a) {
        var b =
            MS.initNewPopup(a);
        b.onClose(function() {
            a.remove()
        });
        a.find("[data-popup-continue]").click(function() {
            window.location.pathname.match(/^\/(\w{2})\/cart\d$/) ? 1 < window.history.length && document.referrer ? window.history.back() : window.location.href = MS.getUrl("") : b.close()
        });
        b.show();
        return b
    },
    getCartInfo: function() {
        return this.cartInfo
    },
    updateCartInfo: function() {
        var a = this;
        $.ajax({
            type: "post",
            url: this.url + "/info",
            dataType: "json",
            success: function(b) {
                a.cartInfo = b;
                a.trigger("change:info")
            }
        })
    },
    updateCartData: function(a) {
        var b =
            this;
        $.ajax({
            type: "post",
            url: this.url + "/data",
            dataType: "json",
            success: function(c) {
                b.setData(c);
                a()
            }
        })
    }
});
MgStore.prototype.Cart._cart = void 0;
MgStore.prototype.Cart.getInstance = function() {
    _.isUndefined(MS.Cart._cart) && (MS.Cart._cart = new MS.Cart);
    return MS.Cart._cart
};
MgStore.prototype.CartSummaryModel = Backbone.Model.extend({
    defaults: {
        totalPrice: 0,
        usedBonuses: 0,
        userBonuses: 0,
        totalPreDiscountPrice: 0
    },
    getFinalPrice: function() {
        return this.get("totalPrice") - this.get("usedBonuses")
    },
    getDiscount: function() {
        return this.get("totalPreDiscountPrice") - this.get("totalPrice") - this.get("usedBonuses")
    }
});
MgStore.prototype.CartBonusFormView = Backbone.View.extend({
    _$form: void 0,
    _validator: void 0,
    _idUsedBonuses: "usedBonuses",
    _tempUsedBonuses: 0,
    events: {
        "click .cancel-action": "resetUsedBonuses",
        "keyup #usedBonuses": "changeUsedBonuses"
    },
    initialize: function() {
        this._$form = this.$el.find("form");
        this.model.on("change", this._updateFinalPrice, this);
        this.model.on("change", this._updateUsedBonuses, this);
        this._tempUsedBonuses = this.model.get("usedBonuses")
    },
    bindSubmit: function(a) {
        var b = this;
        a.click(function() {
            b._$form.submit()
        })
    },
    bindValidate: function() {
        var a = this,
            b = MS.getBaseValidate();
        b.submitHandler = function() {
            a._validate() && (a.$el.data("rmPopup").hide(), a.model.set("usedBonuses", a._tempUsedBonuses));
            return !1
        };
        this._validator = this._$form.validate(b)
    },
    resetUsedBonuses: function() {
        this.$el.find("#" + this._idUsedBonuses).val(this._tempUsedBonuses)
    },
    changeUsedBonuses: function() {
        this._validate() && this.$el.find("#bonusFormTotalPrice").text(this.model.get("totalPrice") - this._tempUsedBonuses)
    },
    _validate: function() {
        var a = {},
            b = this.$el.find("#" +
                this._idUsedBonuses);
        this._tempUsedBonuses = b.val() - 0;
        this._tempUsedBonuses > this.model.get("userBonuses") && (a[this._idUsedBonuses] = _tr.bonusTooHigh);
        this._tempUsedBonuses > this.model.get("totalPrice") && (a[this._idUsedBonuses] = _tr.bonusMoreThanPrice);
        if (_.isEmpty(a)) return b.parent().removeClass("error"), !0;
        this._validator.showErrors(a);
        return !1
    },
    _updateUsedBonuses: function() {
        this.$el.find("#" + this._idUsedBonuses).val(this.model.get("usedBonuses"))
    },
    _updateFinalPrice: function() {
        var a = this.model.getFinalPrice();
        0 >= a && this.model.set("usedBonuses", 0);
        this.$el.find("#bonusFormTotalPrice").text(a)
    }
});
MgStore.prototype.CartBonusFormView.init = function(a, b) {
    var c = new MS.CartBonusFormView({
        model: a,
        el: b
    });
    c.bindSubmit($("#orderBonusSubmit"));
    c.bindValidate();
    return c
};
MgStore.prototype.CartSummaryView = Backbone.View.extend({
    initialize: function() {
        var a = this;
        this.model.on("change:totalPrice", function() {
            a._updateTotalPrice();
            a._updateDiscount()
        });
        this.model.on("change:totalPreDiscountPrice", function() {
            a._updateDiscount()
        });
        this.model.on("change:usedBonuses", this._updateUsedBonuses, this);
        this.model.on("change", this._updateFinalPrice, this)
    },
    _updateTotalPrice: function() {
        $("[data-cart-total-price]").text(this.model.get("totalPrice"))
    },
    _updateDiscount: function() {
        var a =
            $("[data-cart-total-discount-price]"),
            b = this._formatPrice(this.model.getDiscount());
        a.text("-" + b);
        a.closest(".order-summary-item").toggleClass("important-hide", 0 == b)
    },
    _updateUsedBonuses: function() {
        $("[data-cart-total-bonuses]").text(this.model.get("usedBonuses")).closest(".order-summary-item").toggleClass("important-hide", 0 == this.model.get("usedBonuses"))
    },
    _updateFinalPrice: function() {
        this.$el.find("#finalPrice").text(this.model.getFinalPrice())
    },
    _formatPrice: function(a) {
        return Math.round(100 * a) /
            100
    }
});
MgStore.prototype.CartSummaryView.init = function(a, b) {
    return new MS.CartSummaryView({
        model: a,
        el: b
    })
};
MgStore.prototype.CartView = Backbone.View.extend({
    events: {
        "change [data-bonus-usage]": "updateBonusUsage"
    },
    initialize: function() {
        this.collection.on("change:info", this.renderCartInfo, this);
        this.initBonus();
        this.initSummary();
        this.initSelects()
    },
    initSelects: function() {
        var a = this,
            b = $("#selectedPaymentType");
        this._updateOrder({
            paymentType: b.val()
        });
        $("#payment-type").rmSelect(function(c) {
            c = c.attr("data-id");
            b.val(c);
            a._updateOrder({
                paymentType: c
            })
        })
    },
    initBonus: function() {
        this.$bonusUsage = this.$el.find("[data-bonus-usage]");
        this.bonusUsage = this.$bonusUsage.val() || 0;
        this.availableBonuses = this.$el.find("[data-available-bonuses]").text() - 0
    },
    initSummary: function() {
        this.summary = new MS.CartSummaryModel({
            totalPrice: this.$el.find("[data-cart-total-price]").text() - 0,
            usedBonuses: this.$el.find("[data-cart-total-bonuses]").text() - 0,
            totalPreDiscountPrice: this.$el.find("[data-cart-total-pre-discount-price]").text() - 0
        });
        MS.CartSummaryView.init(this.summary, $("#orderSummary"))
    },
    renderCartInfo: function() {
        var a = this.collection.getCartInfo();
        0 == a.totalCount ? this.options.popup ? (this.options.popup.hide(), this.collection.trigger("updatePrice", a.totalCount, a.totalPrice)) : window.location.href = "/" : (this.summary.set({
            totalPrice: this._formatPrice(a.totalPrice),
            usedBonuses: a.bonusUsage,
            totalPreDiscountPrice: this._formatPrice(a.totalPreDiscountPrice)
        }), this.collection.trigger("updatePrice", a.totalCount, a.totalPrice), $("[data-cart-count]").text(a.totalCount + " " + MS.pluralize(a.totalCount, [_tr.item, _tr.items2, _tr.items])), $("[data-cart-count-mini]").text(a.totalCount))
    },
    updateTotalBonus: function(a) {
        var b = this.$el.find(".totalBonus");
        0 == a ? 0 < b.length && b.closest(".user-bonuses").hide() : b.text(a)
    },
    updateBonusUsage: function() {
        this.$bonusUsage.val() > this.availableBonuses && this.$bonusUsage.val(this.availableBonuses);
        this.bonusUsage = this.$bonusUsage.val();
        this._updateOrder({
            orderBonus: this.bonusUsage
        })
    },
    _updateOrder: function(a) {
        var b = this;
        $.ajax({
            type: "post",
            url: "/order-ajax/popup-form",
            data: a,
            dataType: "json",
            success: function() {
                b.collection.updateCartInfo()
            }
        })
    },
    _formatPrice: function(a) {
        return Math.round(100 *
            a) / 100
    }
});
MgStore.prototype.CartView.init = function(a, b) {
    var c = new MS.CartView({
        collection: MS.Cart.getInstance(),
        el: a,
        popup: b
    });
    c.collection.each(function(a) {
        new MS.OrderItemView({
            model: a,
            el: $("#order_item_" + a.getUniqueId())
        })
    });
    return c
};
MgStore.prototype.Tray = Backbone.View.extend({
    initialize: function() {
        var a = this;
        MS.Cart.getInstance().on("add", function(b) {
            a.updateOnAdd(b)
        });
        MS.Cart.getInstance().on("updatePrice", function(b, c) {
            a.updateTrayText(b, c)
        })
    },
    updateOnAdd: function(a) {
        var b = this.getCountBlock().html().match(/(\d+)(.*)/)[1] - 0 + 1,
            c = this.getPriceBlock().text() - 0;
        this.updateTrayText(b, c + a.get("price"))
    },
    updateTrayText: function(a, b) {
        this.$el.toggleClass("full", 0 != a);
        this.getCountBlock().html(a);
        this.getPriceBlock().text(Math.round(100 *
            b) / 100)
    },
    getCountBlock: function() {
        return this.$el.find(".count")
    },
    getPriceBlock: function() {
        return $("#totalPrice")
    },
    getGoodMorphology: function(a) {
        var b = a % 10;
        return 0 == b || 5 <= b && 9 >= b || 11 <= a && 14 >= a ? _tr.items : 1 == b ? _tr.item : _tr.items2
    }
});
MgStore.prototype.Tray.init = function(a) {
    return new MS.Tray({
        el: a
    })
};
MgStore.prototype.Step2Form = function(a) {
    var b = this,
        c, g, f = !1,
        d = "/",
        e;
    this.setForm = function(a) {
        c = a
    };
    this.getForm = function() {
        return c
    };
    this.setSubmitButton = function(a) {
        g = a
    };
    this.setAjaxUrl = function(a) {
        d = a
    };
    this.bindSubmit = function() {
        g.click(function() {
            c.submit()
        })
    };
    this.initPhoneVerify = function(a) {
        e = MS.OrderPhoneVerify.init(a)
    };
    this.initCheckboxes = function() {
        $("[data-service-address-same]").click(function() {
            $(this).closest(".cart-order-info-box").find(".cart-order-info-item.address").toggle(!$(this).is(":checked"))
        })
    };
    this.bindValidate = function() {
        var a = MS.getBaseValidate();
        a.submitHandler = function() {
            b._order();
            return !1
        };
        MS.validate(a).setNameValidation("clientName").setNameValidation("clientLastName").setEmailValidation("clientEmail");
        this.getForm().validate(a)
    };
    this._order = function() {
        f || (e.isLastStep() ? (f = !0, $.ajax({
                type: "post",
                url: d,
                data: this._getData(),
                dataType: "json",
                success: function(a) {
                    f = !1;
                    1 == a.status ? window.location.href = MS.getUrl("/cart3") : 2 == a.status ? b._showOrderAuthPopup() : 0 == a.status && (new Backbone.Notifier).notify(a.message)
                }
            })) :
            e.showRequiredPhoneError())
    };
    this._showOrderAuthPopup = function() {
        var a = MS.AuthPopup.getInstance();
        a.changePopupText(_tr.orderLoginPopupTitle, _tr.orderLoginPopupMessage);
        a.setOnLoginUrl(MS.getUrl("/cart2"));
        a.show()
    };
    this._getData = function() {
        var b = $("#makePhoneMain"),
            d = $("#clientPhoneCountryCode"),
            e = $("#clientPhoneNumber"),
            f = {
                idOrder: a,
                clientName: $("#clientName").val(),
                clientLastName: $("#clientLastName").val(),
                clientPhone: d.val() + e.val(),
                makePhoneMain: b.is(":visible") && b.is(":checked") ? 1 : 0,
                verifyCode: $("#verifyCode").val(),
                clientEmail: $("#clientEmail").val()
            };
        c.find("[data-order-service]").find('input[type="hidden"], textarea').each(function() {
            var a = $(this);
            a.attr("name") && (f[a.attr("name")] = a.val())
        });
        return f
    };
    this._initAddressData = function(a) {
        _.each(void 0, function(b, c) {
            if ($('[data-service-address-same="' + c + '"]').is(":checked")) a.idAddress_delivery ? a["idAddress_" + c] = a.idAddress_delivery : a["address_" + c] = a.address_delivery;
            else {
                var d = $('[data-order-address-id="' + c + '"]').val() - 0;
                d ? a["idAddress_" + c] = d : a["address_" + c] =
                    _.first(b.getNewData())
            }
        })
    }
};
MgStore.prototype.Step2Form.init = function(a) {
    var b = new MS.Step2Form;
    b.setAjaxUrl("/order-ajax/create-profile");
    b.setForm($("#orderForm"));
    b.setSubmitButton($("#orderSubmitButton"));
    b.bindValidate();
    b.bindSubmit();
    b.initPhoneVerify(a)
};
MgStore.prototype.Step3Form = function(a) {
    var b = this,
        c, g, f = !1,
        d = "/",
        e;
    this.setForm = function(a) {
        c = a
    };
    this.getForm = function() {
        return c
    };
    this.setSubmitButton = function(a) {
        g = a
    };
    this.initAddressCollections = function(a) {
        e = {};
        _.each(a, function(a, b) {
            e[b] = MS.AddressOrderView.init($('[data-address-form="' + b + '"]'), a, $('[data-order-address-id="' + b + '"]'), c)
        })
    };
    this.setAjaxUrl = function(a) {
        d = a
    };
    this.bindSubmit = function() {
        g.click(function() {
            c.submit()
        })
    };
    this.initCheckboxes = function() {
        $("[data-service-address-same]").click(function() {
            $(this).closest(".cart-order-info-box").find(".cart-order-info-item.address").toggle(!$(this).is(":checked"))
        })
    };
    this.bindValidate = function() {
        var a = MS.getBaseValidate();
        a.submitHandler = function() {
            b._order();
            return !1
        };
        MS.validate(a).setTextValidation("orderNote");
        this.getForm().validate(a)
    };
    this._order = function() {
        f || (f = !0, $.ajax({
            type: "post",
            url: d,
            data: this._getData(),
            dataType: "json",
            success: function(a) {
                f = !1;
                1 == a.status ? window.location.href = MS.getUrl("/cart4") : 2 == a.status ? b._showOrderAuthPopup() : 0 == a.status && (new Backbone.Notifier).notify(a.message)
            }
        }))
    };
    this._showOrderAuthPopup = function() {
        var a = MS.AuthPopup.getInstance();
        a.changePopupText(_tr.orderLoginPopupTitle, _tr.orderLoginPopupMessage);
        a.setOnLoginUrl(MS.getUrl("/cart2"));
        a.show()
    };
    this._getData = function() {
        var a = $("#fastDelivery"),
            b = {
                orderNote: $("#orderNote").val(),
                deliveryNote: $("#deliveryNote").val(),
                deliveryType: $("#selectedDeliveryType").val(),
                deliveryDate: $("#deliveryDate").val(),
                deliverTimeFrom: $("#deliverTimeFrom").val(),
                deliverTimeTo: $("#deliverTimeTo").val(),
                isExpress: a.is(":checked") && a.is(":visible") ? 1 : 0,
                store: $("#store").val()
            };
        c.find("[data-order-service]").find('input[type="hidden"], select, textarea').each(function() {
            var a =
                $(this);
            a.attr("name") && (b[a.attr("name")] = a.val())
        });
        this._initAddressData(b);
        return b
    };
    this._initAddressData = function(a) {
        _.each(e, function(b, c) {
            if ($('[data-service-address-same="' + c + '"]').is(":checked")) a.idAddress_delivery ? a["idAddress_" + c] = a.idAddress_delivery : a["address_" + c] = a.address_delivery;
            else {
                var d = $('[data-order-address-id="' + c + '"]').val() - 0;
                d ? a["idAddress_" + c] = d : a["address_" + c] = _.first(b.getNewData())
            }
        })
    }
};
MgStore.prototype.Step3Form.init = function(a) {
    var b = new MS.Step3Form;
    b.setAjaxUrl("/order-ajax/create");
    b.setForm($("#orderForm"));
    b.setSubmitButton($("#orderSubmitButton"));
    b.bindValidate();
    b.bindSubmit();
    b.initCheckboxes();
    b.initAddressCollections(a)
};
MgStore.prototype.OrderCancel = function() {
    var a = this,
        b;
    this.setAjaxUrl = function(a) {
        b = a
    };
    this.initClick = function(b) {
        b.click(function() {
            confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0437\u0430\u043a\u0430\u0437?") && a._cancelOrder($(this))
        })
    };
    this._cancelOrder = function(a) {
        $.ajax({
            type: "post",
            url: b,
            data: {
                idOrder: a.data("id")
            },
            dataType: "json",
            success: function(b) {
                b.status && (a.closest(".item").find("[data-order-status-value]").text(_tr.orderStatusCancelled), a.closest("[data-cancellation-box]").hide())
            }
        })
    }
};
MgStore.prototype.OrderCancel.init = function(a, b) {
    var c = new MS.OrderCancel;
    c.setAjaxUrl(b);
    c.initClick(a);
    return c
};
MgStore.prototype.OrderItem = function() {
    this.open = function() {
        $(window.location.hash).addClass("open")
    }
};
MgStore.prototype.OrderItem.open = function() {
    var a = new MS.OrderItem;
    a.open();
    return a
};
MgStore.prototype.DeliveryTypeSelect = function() {
    var a = this;
    this.setElements = function(a, c) {
        this.$select = a;
        this.$input = c
    };
    this.bindSelect = function() {
        var b = $("[data-delivery-type]");
        a.$select.bind("click", function(c) {
            c = $(c.target).attr("data-id");
            a.$input.val(c);
            b.addClass("hide").filter('[data-delivery-type="' + c + '"]').removeClass("hide")
        })
    }
};
MgStore.prototype.DeliveryTypeSelect.init = function(a, b) {
    var c = new MS.DeliveryTypeSelect;
    c.setElements(a, b);
    c.bindSelect();
    return c
};
MgStore.prototype.OrderPhoneVerify = function() {
    var a = this,
        b, c, g = {};
    this.setBlock = function(a) {
        b = a
    };
    this.initSteps = function(f) {
        for (var d = 1; 3 >= d; d++) g[d] = MS.OrderPhoneVerify["Step" + d].init(b.find('[data-step="' + d + '"]'), f);
        this._setStep($("[data-step]:visible").data("step"));
        b.on("phone-verify:next-step", function() {
            a._setStep(c + 1)
        });
        b.on("phone-verify:reset", function() {
            a._setStep(1)
        });
        b.on("phone-verify:last-step", function() {
            a._setStep(3)
        })
    };
    this.showRequiredPhoneError = function() {
        this._getCurrentStep().showError(_tr.verifyPhoneError)
    };
    this.isLastStep = function() {
        return 3 == c
    };
    this._getCurrentStep = function() {
        return g[c]
    };
    this._setStep = function(a) {
        g[c] && g[c].hide();
        c = a;
        g[c].show()
    }
};
MgStore.prototype.OrderPhoneVerify.init = function(a) {
    var b = new MS.OrderPhoneVerify;
    b.setBlock($("#orderPhoneVerify"));
    b.initSteps(a);
    return b
};
MgStore.prototype.OrderPhoneVerify.SmsSender = function() {
    var a, b = !1;
    this.setAjaxUrl = function(b) {
        a = b
    };
    this.sendSms = function(c, g, f, d) {
        b || (b = !0, $.ajax({
            type: "post",
            url: a,
            data: {
                clientPhone: c
            },
            dataType: "json",
            success: function(a) {
                b = !1;
                1 == a.status ? g() : 10 == a.status ? d() : 2 == a.status && f && f(a.error)
            }
        }))
    }
};
MgStore.prototype.OrderPhoneVerify.SmsSender.init = function() {
    var a = new MS.OrderPhoneVerify.SmsSender;
    a.setAjaxUrl("/order-ajax/phone-verify");
    return a
};
MgStore.prototype.OrderPhoneVerify.Step = function() {
    var a = this;
    this.initElements = function(a) {
        this._$block = a;
        this._$phoneCountryCode = $("#clientPhoneCountryCode");
        this._$phoneCountryCode.mask("+994");
        this._$phoneNumber = $("#clientPhoneNumber");
        this._$phoneNumber.mask("XX XXX-XX-XX");
        this._$orderPhoneSelect = $("#orderPhoneSelect");
        this._$makeMainHolder = $("#makeMainHolder");
        this._$verifyMessage = a.find(".verify-text");
        this._$countryCodeHolder = this._$block.find("[data-order-country-code-holder]");
        this._$phoneHolder =
            this._$block.find("[data-order-phone-holder]");
        this._$phoneSelectHolder = this._$block.find("[data-order-phone-select-holder]");
        this._hasPhoneSelect = 0 < this._$orderPhoneSelect.length
    };
    this.setMainPhone = function(a) {
        this._mainPhone = a
    };
    this.initPhoneSelect = function() {
        this._$phoneSelect = $("#profilePhoneSelect");
        this._$selectedPhone = $("#profilePhone");
        this._$phoneSelect.rmSelect(function(b) {
            a._$selectedPhone.val(b.data("id"));
            a._reset();
            0 != b.data("id") && (a._$phoneCountryCode.val(b.text().substring(0, a.COUNTRY_CODE_LENGTH)),
                a._$phoneNumber.val(b.text().substring(a.COUNTRY_CODE_LENGTH + 1)), a._nextStep())
        })
    };
    this.show = function() {
        this._beforeShow && this._beforeShow();
        this._$phoneCountryCode.appendTo(this._$countryCodeHolder);
        this._$phoneNumber.appendTo(this._$phoneHolder);
        this._$orderPhoneSelect.appendTo(this._$phoneSelectHolder);
        this._$phoneSelectHolder.next().toggle(!this._hasPhoneSelect || 0 == this._$selectedPhone.val());
        this._toggleMakeMain();
        this._$block.show();
        this._afterShow && this._afterShow()
    };
    this.hide = function() {
        this._$block.hide();
        this.hideError();
        this._afterHide && this._afterHide()
    };
    this.showError = function(a) {
        var b = this._$block.children("[data-order-phone-holder]");
        b.addClass("is-error");
        b.append('<span class="error-message">' + a + "</span>");
        a = this._$block.offset().top - 10;
        $(window).scrollTop() > a && $(window).scrollTop(a, 300)
    };
    this.hideError = function() {
        this._$block.children(".error-message").remove();
        this._$block.children().removeClass("is-error")
    };
    this._nextStep = function() {
        this._$block.trigger("phone-verify:next-step")
    };
    this._lastStep =
        function() {
            this._$block.trigger("phone-verify:last-step")
        };
    this._reset = function() {
        this._$block.trigger("phone-verify:reset")
    };
    this._showVerifyMessage = function(a) {
        this._$block.find('[data-verify-message="' + a + '"]').show().siblings("[data-verify-message]").hide()
    };
    this._toggleMakeMain = function() {
        this._$block.find("[data-can-be-main]").hide();
        if (this._hasPhoneSelect) {
            this._$makeMainHolder.appendTo(this._$block.find('[data-can-be-main="true"]'));
            var b = a._getPhoneNumber() != this._mainPhone;
            this._$block.find('[data-can-be-main="' +
                b + '"]').show()
        }
    };
    this._getPhoneNumber = function() {
        return this._$phoneCountryCode.val() + this._$phoneNumber.val()
    }
};
MgStore.prototype.OrderPhoneVerify.Step.init = function(a, b) {
    var c = new MS.OrderPhoneVerify.Step;
    c.initElements(a);
    c.setMainPhone(b);
    c.initPhoneSelect();
    return c
};
MgStore.prototype.OrderPhoneVerify.Step1 = function() {
    var a = this,
        b;
    this.extendStep = function(a, b) {
        _.extend(this, MS.OrderPhoneVerify.Step.init(a, b))
    };
    this.initSmsSender = function() {
        b = MS.OrderPhoneVerify.SmsSender.init()
    };
    this.bindInputMask = function() {
        this._$phoneCountryCode.bind("keyup", function() {
            a.hideError();
            a._toggleMakeMain()
        })
    };
    this.bindInputNumber = function() {
        this._$phoneNumber.bind("keyup", function() {
            a.hideError();
            a._toggleMakeMain()
        })
    };
    this.bindButton = function() {
        this._$button = this._$block.find("[data-sms-send]");
        this._$button.bind("click", function() {
            a._sendSms()
        })
    };
    this._sendSms = function() {
        b.sendSms(a._getPhoneNumber(), function() {
            a._nextStep()
        }, function(b) {
            a.showError(b)
        }, function() {
            a._lastStep()
        })
    };
    this._beforeShow = function() {
        this.bindInputMask();
        this.bindInputNumber();
        this.bindButton()
    };
    this._afterShow = function() {
        this._showVerifyMessage("new")
    };
    this._afterHide = function() {
        this._$phoneCountryCode.unbind("keyup");
        this._$phoneNumber.unbind("keyup");
        this._$button.unbind("click")
    }
};
MgStore.prototype.OrderPhoneVerify.Step1.init = function(a, b) {
    var c = new MS.OrderPhoneVerify.Step1;
    c.extendStep(a, b);
    c.initSmsSender();
    return c
};
MgStore.prototype.OrderPhoneVerify.Step2 = function() {
    var a = this,
        b, c, g = !1;
    this.extendStep = function(a, b) {
        _.extend(this, MS.OrderPhoneVerify.Step.init(a, b));
        this._$verifyCode = this._$block.find("[data-verify-code]")
    };
    this.initSmsSender = function() {
        c = MS.OrderPhoneVerify.SmsSender.init()
    };
    this.bindInputMask = function() {
        this._$phoneCountryCode.bind("change", function() {
            a._reset()
        })
    };
    this.bindInputNumber = function() {
        this._$phoneNumber.bind("change", function() {
            a._reset()
        })
    };
    this.bindButtons = function() {
        this._$verifyButton =
            this._$block.find("[data-verify-code-button]");
        this._$verifyButton.bind("click", function() {
            a._verifyCode()
        });
        this._$smsSendButton = this._$block.find("[data-sms-send]");
        this._$smsSendButton.bind("click", function() {
            a._sendSms()
        })
    };
    this.setAjaxUrl = function(a) {
        b = a
    };
    this._verifyCode = function() {
        g || (g = !0, $.ajax({
            type: "post",
            url: b,
            data: {
                clientPhone: this._$phoneCountryCode.val() + this._$phoneNumber.val(),
                verifyCode: this._$verifyCode.val()
            },
            dataType: "json",
            success: function(b) {
                g = !1;
                1 == b.status ? a._nextStep() : a.showError(b.error)
            }
        }))
    };
    this._sendSms = function() {
        c.sendSms(a._getPhoneNumber(), function() {
            a._updateSentTime();
            a.hideError()
        }, function() {
            console.log("error")
        }, function() {
            a._nextStep()
        })
    };
    this._updateSentTime = function() {
        var a = new Date,
            a = a.getHours() + ":" + ("0" + a.getMinutes()).slice(-2);
        this._$block.find("[data-verification-time]").text(a)
    };
    this._updateSelectedPhoneMessage = function() {
        if (0 == this._$selectedPhone.val()) var a = "new";
        else a = "sent", this._sendSms();
        this._showVerifyMessage(a)
    };
    this._beforeShow = function() {
        this.bindInputMask();
        this.bindInputNumber();
        this.bindButtons()
    };
    this._afterShow = function() {
        this._hasPhoneSelect && this._updateSelectedPhoneMessage();
        this._updateSentTime()
    };
    this._afterHide = function() {
        this._$phoneCountryCode.unbind("change");
        this._$phoneNumber.unbind("change");
        this._$verifyButton.unbind("click");
        this._$smsSendButton.unbind("click");
        this.hideError()
    }
};
MgStore.prototype.OrderPhoneVerify.Step2.init = function(a, b) {
    var c = new MS.OrderPhoneVerify.Step2;
    c.extendStep(a, b);
    c.setAjaxUrl("/order-ajax/phone-verify-validation");
    c.initSmsSender();
    return c
};
MgStore.prototype.OrderPhoneVerify.Step3 = function() {
    var a = this;
    this.extendStep = function(a, c) {
        _.extend(this, MS.OrderPhoneVerify.Step.init(a, c))
    };
    this.bindInputMask = function() {
        this._$phoneCountryCode.bind("change", function() {
            a._reset()
        })
    };
    this.bindInputNumber = function() {
        this._$phoneNumber.bind("keyup", function() {
            a._reset()
        })
    };
    this._beforeShow = function() {
        this.bindInputMask();
        this.bindInputNumber()
    };
    this._afterShow = function() {
        this._hasPhoneSelect && 0 != this._$selectedPhone.val() && this._showVerifyMessage("done")
    };
    this._afterHide = function() {
        this._$phoneCountryCode.unbind("change");
        this._$phoneNumber.unbind("change")
    }
};
MgStore.prototype.OrderPhoneVerify.Step3.init = function(a, b) {
    var c = new MS.OrderPhoneVerify.Step3;
    c.extendStep(a, b);
    return c
};
MgStore.prototype.ActionPromoCodeForm = function() {
    var a = this,
        b, c, g, f, d = !1,
        e = "/";
    this.setForm = function(a) {
        b = a
    };
    this.getForm = function() {
        return b
    };
    this.setSubmitButton = function(a) {
        c = a
    };
    this.setAjaxUrl = function(a) {
        e = a
    };
    this.bindSubmit = function() {
        c.click(function() {
            b.submit()
        })
    };
    this.bindValidate = function() {
        var b = MS.getBaseValidate();
        b.submitHandler = function() {
            a._usePromoCode();
            return !1
        };
        MS.validate(b);
        this.getForm().validate(b)
    };
    this.initInput = function() {
        var a = b.find("#actionPromoCode");
        g = a.closest(".order-items-count");
        f = g.find(".order-msg");
        a.on("keyup", function() {
            g.toggleClass("is-active", "" != a.val())
        });
        f.click(function() {
            g.removeClass("is-done")
        })
    };
    this.listenDiscountChange = function() {
        var a = MS.Cart.getInstance(),
            c = $("#actionPromoDiscount"),
            d = 0 == $("#bonusUsageForm").length;
        a.on("change:info", function() {
            var e = a.getCartInfo().additionalPromoDiscount;
            c.text(e);
            b.toggleClass("hide", 0 >= e);
            b.parent().toggleClass("hide", d && 0 >= e)
        })
    };
    this._usePromoCode = function() {
        d || (d = !0, $.ajax({
            type: "post",
            url: e,
            data: b.serializeObject(),
            dataType: "json",
            success: function(a) {
                d = !1;
                g.addClass("is-done");
                1 == a.status ? (f.removeClass("is-error"), a = _tr.actionPromoCodeUsed) : (f.addClass("is-error"), a = _tr.wrongActionPromoCode);
                f.find(".order-msg-text").text(a);
                MS.Cart.getInstance().updateCartInfo()
            }
        }))
    }
};
MgStore.prototype.ActionPromoCodeForm.init = function() {
    var a = new MS.ActionPromoCodeForm;
    a.setAjaxUrl("/order-ajax/promo-code/check");
    a.setForm($("#actionPromoCodeForm"));
    a.setSubmitButton($("#actionPromoCodeSubmit"));
    a.bindValidate();
    a.bindSubmit();
    a.initInput();
    a.listenDiscountChange()
};
MgStore.prototype.OrderAddressSelect = function() {
    var a = this,
        b, c, g, f, d;
    this.setElements = function(a, h, l, n) {
        b = a;
        c = h;
        l && (g = l, f = l.closest(".address-delivery-text"), d = n)
    };
    this.bindSelect = function(b) {
        b.rmSelect(function(b) {
            a._updateId(b.data("id"));
            a._updatePrice(b.data("price"));
            a._updateTimeRange(b.data("timeRange"))
        })
    };
    this._updateId = function(a) {
        c.val(a);
        b.toggle(0 == a)
    };
    this._updatePrice = function(a) {
        g && (g.text(a), f.toggleClass("hide", 0 == a))
    };
    this._updateTimeRange = function(a) {
        d && d.val(a).trigger("change")
    }
};
MgStore.prototype.OrderAddressSelect.init = function(a, b, c, g, f) {
    var d = new MS.OrderAddressSelect;
    d.setElements(b, c, g, f);
    d.bindSelect(a);
    return d
};
MgStore.prototype.CallRequestForm = function() {
    var a = this,
        b, c, g = !1,
        f = "/";
    this.setForm = function(a) {
        b = a
    };
    this.getForm = function() {
        return b
    };
    this.setSubmitButton = function(a) {
        c = a
    };
    this.setAjaxUrl = function(a) {
        f = a
    };
    this.bindSubmit = function() {
        c.click(function() {
            b.submit()
        })
    };
    this.bindValidate = function() {
        var b = MS.getBaseValidate();
        b.submitHandler = function() {
            a._createCallRequest();
            return !1
        };
        MS.validate(b).setPhoneValidation("callRequestPhone").setEmailValidation("callRequestEmail", !1);
        this.getForm().validate(b)
    };
    this._createCallRequest = function() {
        g || (g = !0, $.ajax({
            type: "post",
            url: f,
            data: {
                phone: $("#callRequestPhone").val(),
                email: $("#callRequestEmail").val(),
                message: $("#callRequestMessage").val()
            },
            dataType: "json",
            success: function(b) {
                g = !1;
                b.status && a._showThxMessage()
            }
        }))
    };
    this._showThxMessage = function() {
        $("#callRequestPopupForm").hide();
        $("#callRequestPopupMessage").fadeIn(300)
    }
};
MgStore.prototype.CallRequestForm.init = function() {
    var a = new MS.CallRequestForm;
    a.setAjaxUrl("/call-request-ajax/create");
    a.setForm($("#callRequestForm"));
    a.setSubmitButton($("#callRequestSubmit"));
    a.bindValidate();
    a.bindSubmit()
};
MgStore.prototype.Action = {
    TimerStart: function(a, b) {
        var c = a.find(".t-day"),
            g = a.find(".t-hour"),
            f = a.find(".t-min"),
            d = a.find(".t-sec");
        setInterval(function() {
            var a = Math.round((1E3 * b - (new Date).getTime()) / 1E3),
                h = Math.max(Math.floor(a / 86400), 0),
                l = Math.max(Math.floor((a -= 86400 * h) / 3600), 0),
                n = Math.max(Math.floor((a -= 3600 * l) / 60), 0),
                a = Math.max(Math.floor(a - 60 * n), 0);
            c.html(h);
            g.html(l);
            f.html(n);
            d.html(a)
        }, 1E3)
    }
};
MgStore.prototype.Gallery = function() {};
MgStore.prototype.CompareGallery = function() {};
MgStore.prototype.CompareGallery.init = function(a) {
    a.rmGallery({
        eClick: !1,
        slideItems: 1
    })
};
MgStore.prototype.Gallery.init = function(a, b, c) {
    a.cyclicGallery({
        slideTime: 300,
        eClick: !0,
        slideItems: 1,
        vertical: b,
        autoSlide: c,
        autoSlideTime: 5E3,
        distanceBetweenItems: 20
    })
};
MgStore.prototype.Gallery.initKit = function(a) {
    a.slides({
        preload: !1,
        preloadImage: "/s/public/images/slides/loading.gif",
        play: 0,
        pause: 0,
        hoverPause: !0,
        slidesLoaded: function() {
            $(".sliderNav").fadeIn(300)
        }
    })
};
MgStore.prototype.Gallery.initFancy = function(a) {
    a.fancybox({
        loop: !1,
        padding: 0,
        helpers: {
            thumbs: {
                width: 60,
                height: 60
            }
        },
        type: "image"
    })
};
MgStore.prototype.MediaGallery = function() {
    var a = this,
        b, c, g, f, d, e, h;
    this.initElements = function(a) {
        b = a;
        c = b.find("[data-thumb-holder]");
        g = b.find("[data-thumbnail-id]");
        f = b.find("[data-media-id]")
    };
    this.bindThumbnails = function() {
        g.click(function() {
            a._moveTo($(this))
        })
    };
    this.bindPaginator = function() {
        d = b.find(".pagination-arrow");
        e = d.filter(".left");
        h = d.filter(".right");
        var a = g.outerWidth(),
            c = this._initPaginator(a);
        this._bindArrowClick(a, c)
    };
    this.bindNavigation = function() {
        b.find(".slider-btn").click(function() {
            var b =
                $("[data-thumbnail-id].current");
            $(this).hasClass("right") ? a._moveTo(b.next()) : a._moveTo(b.prev())
        })
    };
    this._initPaginator = function(a) {
        var b = c.width();
        a *= g.length;
        b -= a;
        0 > b && h.addClass("disabled");
        c.width(a);
        return b
    };
    this._bindArrowClick = function(a, b) {
        var f = 0;
        d.click(function() {
            $(this).hasClass("right") ? (f -= a, e.addClass("disabled")) : (f += a, h.addClass("disabled"));
            f <= b && (f = b, h.removeClass("disabled"));
            0 <= f && (f = 0, e.removeClass("disabled"));
            c.css("left", f)
        })
    };
    this._moveTo = function(a) {
        0 < a.length && (g.removeClass("current"),
            a.addClass("current"), f.addClass("important-hide"), b.find('[data-media-id="' + a.data("thumbnailId") + '"]').removeClass("important-hide"))
    }
};
MgStore.prototype.MediaGallery.init = function(a) {
    var b = new MS.MediaGallery;
    b.initElements(a);
    b.bindThumbnails();
    b.bindPaginator();
    b.bindNavigation();
    return b
};
MgStore.prototype.GallerySlider = function() {
    var a = this,
        b, c, g, f = 0,
        d, e;
    this.initElements = function(a) {
        b = a;
        c = a.find("[data-paginator] li");
        g = a.find("[data-holder]");
        e = g.outerWidth();
        d = c.length - 1
    };
    this.bindPaginator = function() {
        c.click(function() {
            f = $(this).data("page");
            a._moveToCurrentPage()
        })
    };
    this.bindArrows = function() {
        b.find(".slider-good-btn").click(function() {
            $(this).hasClass("right") ? f++ : f--;
            0 > f ? f = d : f > d && (f = 0);
            a._moveToCurrentPage()
        })
    };
    this._moveToCurrentPage = function() {
        c.removeClass("current");
        c.filter(":eq(" +
            f + ")").addClass("current");
        g.css("left", -f * e)
    }
};
MgStore.prototype.GallerySlider.init = function(a) {
    var b = new MS.GallerySlider;
    b.initElements(a);
    b.bindPaginator();
    b.bindArrows();
    return b
};
(function(a, b, c, g, f, d, e) {
    a.GoogleAnalyticsObject = f;
    a[f] = a[f] || function() {
        (a[f].q = a[f].q || []).push(arguments)
    };
    a[f].l = 1 * new Date;
    d = b.createElement(c);
    e = b.getElementsByTagName(c)[0];
    d.async = 1;
    d.src = g;
    e.parentNode.insertBefore(d, e)
})(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");
ga("create", "UA-86314030-1", "auto");
ga("send", "pageview");
(function(a, b, c) {
    (b[c] = b[c] || []).push(function() {
        try {
            b.yaCounter22516228 = new Ya.Metrika({
                id: 22516228,
                clickmap: !0,
                trackLinks: !0,
                accurateTrackBounce: !0,
                webvisor: !0
            })
        } catch (d) {}
    });
    var g = a.getElementsByTagName("script")[0],
        f = a.createElement("script");
    c = function() {
        g.parentNode.insertBefore(f, g)
    };
    f.type = "text/javascript";
    f.async = !0;
    f.src = "https://mc.yandex.ru/metrika/watch.js";
    "[object Opera]" == b.opera ? a.addEventListener("DOMContentLoaded", c, !1) : c()
})(document, window, "yandex_metrika_callbacks");
(function() {
    var a = new function() {
        var a = {
                "cart-disabled": {
                    url: "/good/popup/ajax"
                },
                "delivery-info": {
                    url: "/good/popup/ajax"
                },
                "self-pickup-info": {
                    url: "/good/popup/ajax"
                }
            },
            c = [];
        this.load = function(b, f, d) {
            var e = d.idGood,
                g = (c[e] || (c[e] = {}))[b];
            (g ? g.$el : void 0) instanceof $ ? f(g) : (c[e][b] = {}, a[b].url ? $.get(MS.getUrl(a[b].url), _.extend(d || {}, {
                popup: b
            }), function(a) {
                c[e][b].$el = $(a);
                f(c[e][b])
            }) : a[b].el && (c[e][b].$el = $(a[b].el), f(c[e][b])))
        }
    };
    MgStore.prototype.goodPopups = new function() {
        this.showCartDisabledMessage =
            function(c) {
                a.load("cart-disabled", function(a) {
                    var f = c.good;
                    a.$el.find(".popup-item-name").text(f.name);
                    var d = a.$el.find(".popup-item-img img");
                    f.photo && f.photo.url ? d.attr({
                        src: f.photo.url,
                        width: f.photo.w,
                        height: f.photo.h
                    }).parent("a").show() : d.parent("a").hide();
                    b(a).show()
                }, {
                    idGood: c.good.id,
                    complect: c.good.complect
                })
            };
        this.showDeliveryInfo = function(c) {
            a.load("delivery-info", function(a) {
                b(a).show()
            }, c)
        };
        this.showSelfPickupInfo = function(c) {
            a.load("self-pickup-info", function(a) {
                b(a).show()
            }, c)
        };
        var b =
            function(a) {
                a.instance || (a.$el.hide().appendTo(document.body), a.instance = MgStore.prototype.initNewPopup(a.$el));
                return a.instance
            }
    };
    $(function() {
        $("#self-pickup-info-popup-btn").click(function() {
            MgStore.prototype.goodPopups.showSelfPickupInfo({
                idGood: $(this).attr("data-id")
            })
        });
        $("#delivery-info-popup-btn").click(function() {
            MgStore.prototype.goodPopups.showDeliveryInfo({
                idGood: $(this).attr("data-id")
            })
        })
    })
})();
MgStore.prototype.PhoneMask = function() {
    var a;
    this.setMask = function(b) {
        a = b
    };
    this.changeDefinitions = function() {
        $.mask.definitions["9"] = void 0;
        $.mask.definitions.X = "[0-9]"
    };
    this.initMask = function() {
        $("[data-phone-mask]").mask(a)
    }
};
MgStore.prototype.PhoneMask.init = function(a) {
    var b = new MS.PhoneMask;
    b.setMask(a);
    b.changeDefinitions();
    b.initMask();
    return b
};
MgStore.prototype.DeliveryTime = function() {
    var a = this,
        b, c;
    this.setElements = function(a, f) {
        b = a;
        c = f
    };
    this.bindInputChange = function() {
        this._onInputChange();
        b.on("change", function() {
            a._onInputChange()
        })
    };
    this._onInputChange = function() {
        var a = b.val();
        a && this._fillSelects(a.split(","))
    };
    this._fillSelects = function(a) {
        var b = "";
        _.each(a, function(a) {
            b += '<option value="' + a + '" data-id="' + a + '">' + a + "</a></li>"
        });
        c.each(function() {
            var a = $(this);
            a.html(b);
            a.data("selected") ? a.val(a.data("selected")) : a.val(a.find("option").eq(0).attr("value"))
        })
    }
};
MgStore.prototype.DeliveryTime.init = function(a, b) {
    var c = new MS.DeliveryTime;
    c.setElements(a, b);
    c.bindInputChange();
    return c
};