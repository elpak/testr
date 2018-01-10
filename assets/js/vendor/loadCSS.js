/*! loadCSS: load a CSS file asynchronously. [c]2016 @scottjehl, Filament Group, Inc. Licensed MIT */
! function(e) {
    "use strict";
    var n = function(n, t, o) {
        function i(e) {
            return a.body ? e() : void setTimeout(function() {
                i(e)
            })
        }

        function r() {
            l.addEventListener && l.removeEventListener("load", r), l.media = o || "all"
        }
        var d, a = e.document,
            l = a.createElement("link");
        if (t) d = t;
        else {
            var s = (a.body || a.getElementsByTagName("head")[0]).childNodes;
            d = s[s.length - 1]
        }
        var f = a.styleSheets;
        l.rel = "stylesheet", l.href = n, l.media = "only x", i(function() {
            d.parentNode.insertBefore(l, t ? d : d.nextSibling)
        });
        var u = function(e) {
            for (var n = l.href, t = f.length; t--;)
                if (f[t].href === n) return e();
            setTimeout(function() {
                u(e)
            })
        };
        return l.addEventListener && l.addEventListener("load", r), l.onloadcssdefined = u, u(r), l
    };
    "undefined" != typeof exports ? exports.loadCSS = n : e.loadCSS = n
}("undefined" != typeof global ? global : this);
