(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    5557: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return n(3916)
        }
        ])
    },
    1551: function(e, t, n) {
        "use strict";
        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function o(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i = [], a = !0, l = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value),
                        !t || i.length !== t); a = !0)
                            ;
                    } catch (s) {
                        l = !0,
                        o = s
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (l)
                                throw o
                        }
                    }
                    return i
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return r(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var i, a = (i = n(7294)) && i.__esModule ? i : {
            default: i
        }, l = n(1003), s = n(880), c = n(9246);
        function u(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        var p = {};
        function f(e, t, n, r) {
            if (e && l.isLocalURL(t)) {
                e.prefetch(t, n, r).catch((function(e) {
                    0
                }
                ));
                var o = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
                p[t + "%" + n + (o ? "%" + o : "")] = !0
            }
        }
        var m = a.default.forwardRef((function(e, t) {
            var n, r = e.legacyBehavior, i = void 0 === r ? !0 !== Boolean(!1) : r, m = e.href, d = e.as, h = e.children, b = e.prefetch, x = e.passHref, v = e.replace, g = e.shallow, y = e.scroll, w = e.locale, j = e.onClick, k = e.onMouseEnter, N = u(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter"]);
            n = h,
            i && "string" === typeof n && (n = a.default.createElement("a", null, n));
            var M, D = !1 !== b, A = s.useRouter(), C = a.default.useMemo((function() {
                var e = o(l.resolveHref(A, m, !0), 2)
                  , t = e[0]
                  , n = e[1];
                return {
                    href: t,
                    as: d ? l.resolveHref(A, d) : n || t
                }
            }
            ), [A, m, d]), H = C.href, S = C.as, I = a.default.useRef(H), O = a.default.useRef(S);
            i && (M = a.default.Children.only(n));
            var E = i ? M && "object" === typeof M && M.ref : t
              , L = o(c.useIntersection({
                rootMargin: "200px"
            }), 3)
              , W = L[0]
              , T = L[1]
              , _ = L[2]
              , B = a.default.useCallback((function(e) {
                O.current === S && I.current === H || (_(),
                O.current = S,
                I.current = H),
                W(e),
                E && ("function" === typeof E ? E(e) : "object" === typeof E && (E.current = e))
            }
            ), [S, E, H, _, W]);
            a.default.useEffect((function() {
                var e = T && D && l.isLocalURL(H)
                  , t = "undefined" !== typeof w ? w : A && A.locale
                  , n = p[H + "%" + S + (t ? "%" + t : "")];
                e && !n && f(A, H, S, {
                    locale: t
                })
            }
            ), [S, H, T, w, D, A]);
            var P = {
                ref: B,
                onClick: function(e) {
                    i || "function" !== typeof j || j(e),
                    i && M.props && "function" === typeof M.props.onClick && M.props.onClick(e),
                    e.defaultPrevented || function(e, t, n, r, o, i, a, s) {
                        ("A" !== e.currentTarget.nodeName.toUpperCase() || !function(e) {
                            var t = e.currentTarget.target;
                            return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) && l.isLocalURL(n)) && (e.preventDefault(),
                        t[o ? "replace" : "push"](n, r, {
                            shallow: i,
                            locale: s,
                            scroll: a
                        }))
                    }(e, A, H, S, v, g, y, w)
                },
                onMouseEnter: function(e) {
                    i || "function" !== typeof k || k(e),
                    i && M.props && "function" === typeof M.props.onMouseEnter && M.props.onMouseEnter(e),
                    l.isLocalURL(H) && f(A, H, S, {
                        priority: !0
                    })
                }
            };
            if (!i || x || "a" === M.type && !("href"in M.props)) {
                var R = "undefined" !== typeof w ? w : A && A.locale
                  , X = A && A.isLocaleDomain && l.getDomainLocale(S, R, A && A.locales, A && A.domainLocales);
                P.href = X || l.addBasePath(l.addLocale(S, R, A && A.defaultLocale))
            }
            return i ? a.default.cloneElement(M, P) : a.default.createElement("a", Object.assign({}, N, P), n)
        }
        ));
        t.default = m,
        ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && (Object.assign(t.default, t),
        e.exports = t.default)
    },
    9246: function(e, t, n) {
        "use strict";
        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function o(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i = [], a = !0, l = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value),
                        !t || i.length !== t); a = !0)
                            ;
                    } catch (s) {
                        l = !0,
                        o = s
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (l)
                                throw o
                        }
                    }
                    return i
                }
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return r(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useIntersection = function(e) {
            var t = e.rootRef
              , n = e.rootMargin
              , r = e.disabled || !l
              , u = i.useRef()
              , p = o(i.useState(!1), 2)
              , f = p[0]
              , m = p[1]
              , d = o(i.useState(t ? t.current : null), 2)
              , h = d[0]
              , b = d[1]
              , x = i.useCallback((function(e) {
                u.current && (u.current(),
                u.current = void 0),
                r || f || e && e.tagName && (u.current = function(e, t, n) {
                    var r = function(e) {
                        var t, n = {
                            root: e.root || null,
                            margin: e.rootMargin || ""
                        }, r = c.find((function(e) {
                            return e.root === n.root && e.margin === n.margin
                        }
                        ));
                        r ? t = s.get(r) : (t = s.get(n),
                        c.push(n));
                        if (t)
                            return t;
                        var o = new Map
                          , i = new IntersectionObserver((function(e) {
                            e.forEach((function(e) {
                                var t = o.get(e.target)
                                  , n = e.isIntersecting || e.intersectionRatio > 0;
                                t && n && t(n)
                            }
                            ))
                        }
                        ),e);
                        return s.set(n, t = {
                            id: n,
                            observer: i,
                            elements: o
                        }),
                        t
                    }(n)
                      , o = r.id
                      , i = r.observer
                      , a = r.elements;
                    return a.set(e, t),
                    i.observe(e),
                    function() {
                        if (a.delete(e),
                        i.unobserve(e),
                        0 === a.size) {
                            i.disconnect(),
                            s.delete(o);
                            var t = c.findIndex((function(e) {
                                return e.root === o.root && e.margin === o.margin
                            }
                            ));
                            t > -1 && c.splice(t, 1)
                        }
                    }
                }(e, (function(e) {
                    return e && m(e)
                }
                ), {
                    root: h,
                    rootMargin: n
                }))
            }
            ), [r, h, n, f])
              , v = i.useCallback((function() {
                m(!1)
            }
            ), []);
            return i.useEffect((function() {
                if (!l && !f) {
                    var e = a.requestIdleCallback((function() {
                        return m(!0)
                    }
                    ));
                    return function() {
                        return a.cancelIdleCallback(e)
                    }
                }
            }
            ), [f]),
            i.useEffect((function() {
                t && b(t.current)
            }
            ), [t]),
            [x, f, v]
        }
        ;
        var i = n(7294)
          , a = n(4686)
          , l = "undefined" !== typeof IntersectionObserver;
        var s = new Map
          , c = [];
        ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && (Object.assign(t.default, t),
        e.exports = t.default)
    },
    3916: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return m
            }
        });
        var r = n(5893)
          , o = n(7294)
          , i = n(1664)
          , a = n.n(i)
          , l = function(e) {
            var t = e.children
              , n = e.type
              , o = e.onClick;
            return "primary" === n ? (0,
            r.jsx)("button", {
                onClick: o,
                className: "mob:text-sm laptop:text-base p-2 mob:p-1 laptop:p-2 m-2 mob:m-1 laptop:m-2 rounded-lg text-white bg-sky-400 hover:bg-sky-600 first:ml-0",
                children: t
            }) : (0,
            r.jsx)("button", {
                onClick: o,
                className: "mob:text-sm laptop:text-base p-2 mob:p-1 laptop:p-2 m-2 mob:m-1 laptop:m-2 rounded-lg transition-all ease-out duration-300 hover:bg-slate-100 hover:scale-105 active:scale-100 first:ml-0",
                children: t
            })
        }
          , s = function(e) {
            var t = e.handleWorkScroll
              , n = e.handleAboutScroll;
            return (0,
            r.jsxs)("div", {
                className: "mt-6 flex items-center justify-between sticky top-0 z-10 bg-white",
                children: [(0,
                r.jsx)("h1", {
                    className: "font-medium mob:p-2 laptop:p-0",
                    children: "/root/junowoz.xyz "
                }), (0,
                r.jsxs)("div", {
                    children: [(0,
                    r.jsx)(l, {
                        onClick: t,
                        children: "Projects"
                    }), (0,
                    r.jsx)(l, {
                        onClick: n,
                        children: "Resources"
                    }), (0,
                    r.jsx)(l, {
                        onClick: function() {
                            return window.open("mailto:junogouvea@gmail.com")
                        },
                        children: "@E-mail"
                    })]
                })]
            })
        }
          , c = function(e) {
            var t = e.name
              , n = e.description;
            return (0,
            r.jsxs)("div", {
                className: "w-full p-4 mob:p-2 rounded-lg transition-all ease-out duration-300 hover:bg-slate-50 hover:scale-105 cursor-pointer",
                children: [(0,
                r.jsx)("h1", {
                    className: "text-3xl",
                    children: t || "Heading"
                }), (0,
                r.jsx)("p", {
                    className: "mt-5 opacity-40 text-xl",
                    children: n || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
                })]
            })
        }
          , u = {
            name: "chetan",
            headerTaglineOne: "🌐 junowoz.xyz",
            headerTaglineTwo: "",
            socials: [{
                title: "Code",
                link: "https://github.com/junowoz"
            }, {
                title: "LinkedIn",
                link: "https://www.linkedin.com/in/juanjosegouveac/"
            }, {
                title: "Twitter",
                link: "https://twitter.com/junow0z"
            }, {
                title: "Blog",
                link: "https://blog.junowoz.xyz/"
            }, {
                title: "Email",
                link: "mailto:junogouvea@gmail.com"
            }],
            projects: [{
                title: "Plethora Hub",
                description: "Web3 Portal | Community",
                imageSrc: "./images/logos/Plethora.jpg",
                src: "./pages/plethora.html"
            }, {
                title: "Project Two",
                description: "Web Development",
                imageSrc: "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
                url: "http://chetanverma.com/"
            }, {
                title: "Project Three",
                description: "Design",
                imageSrc: "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
                url: "http://chetanverma.com/"
            }, {
                title: "Project Four",
                description: "Marketing",
                imageSrc: "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
                url: "http://chetanverma.com/"
            }, {
                title: "Project Five",
                description: "Development",
                imageSrc: "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
                url: "http://chetanverma.com/"
            }, {
                title: "Project Six",
                description: "Design & Development",
                imageSrc: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
                url: "http://chetanverma.com/"
            }],
            services: [{
                title: "Art Direction",
                description: "We help with the creation and development of online advertising ideas, with particular focus on their visual appearance."
            }, {
                title: "Branding",
                description: "We design key brand elements such as the logo, color scheme, typography, and other design components that makes your brand stand out from competitors."
            }, {
                title: "Web Design",
                description: "We build and optimize your online presence.  Website is the digital entry point into your business and a powerful revenue channel."
            }, {
                title: "3D Design",
                description: "We combine creative design and technical skills to build striking 3D visualisations that bring your project to life."
            }],
            aboutpara: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
          , p = function(e) {
            var t = e.className;
            return (0,
            r.jsx)("div", {
                className: "".concat(t, " flex"),
                children: u.socials.map((function(e, t) {
                    return (0,
                    r.jsx)(l, {
                        onClick: function() {
                            return window.open(e.link)
                        },
                        children: e.title
                    }, t)
                }
                ))
            })
        }
          , f = function(e) {
            var t = e.img
              , n = e.name
              , o = e.description
              , i = e.onClick;
            return (0,
            r.jsxs)("div", {
                className: "overflow-hidden cursor-pointer rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0",
                onClick: i,
                children: [(0,
                r.jsx)("div", {
                    className: "overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-95 mob:h-48",
                    style: {
                        height: "600px"
                    },
                    children: (0,
                    r.jsx)("img", {
                        alt: n,
                        className: "h-full w-full object-cover",
                        src: t
                    })
                }), (0,
                r.jsx)("h1", {
                    className: "mt-5 text-3xl font-medium",
                    children: n || "Project Name"
                }), (0,
                r.jsx)("h2", {
                    className: "text-xl opacity-50",
                    children: o || "Description"
                })]
            })
        };
        function m() {
            var e = (0,
            o.useRef)()
              , t = (0,
            o.useRef)();
            return (0,
            r.jsxs)("div", {
                className: "container mx-auto mb-10",
                children: [(0,
                r.jsx)(s, {
                    handleWorkScroll: function() {
                        window.scrollTo({
                            top: e.current.offsetTop,
                            left: 0,
                            behavior: "smooth"
                        })
                    },
                    handleAboutScroll: function() {
                        window.scrollTo({
                            top: t.current.offsetTop,
                            left: 0,
                            behavior: "smooth"
                        })
                    }
                }), (0,
                r.jsxs)("div", {
                    className: "laptop:mt-20 mob:mt-10",
                    children: [(0,
                    r.jsxs)("h1", {
                        className: "mt-5 text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5",
                        children: [u.headerTaglineOne, " ", (0,
                        r.jsx)("br", {}), u.headerTaglineTwo]
                    }), (0,
                    r.jsx)(p, {
                        className: "mt-5 mob:mt-2 laptop:mt-5"
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0",
                    ref: e,
                    children: [(0,
                    r.jsx)("h1", {
                        className: "text-2xl text-bold",
                        children: "Projects"
                    }), (0,
                    r.jsx)("div", {
                        className: "mt-10 mob:mt-5 laptop:mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-4",
                        children: u.projects.map((function(e, t) {
                            return (0,
                            r.jsx)(f, {
                                img: e.imageSrc,
                                name: e.title,
                                description: e.description,
                                onClick: function() {
                                    return window.open(e.url)
                                }
                            }, t)
                        }
                        ))
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0",
                    children: [(0,
                    r.jsx)("h1", {
                        className: "text-2xl text-bold",
                        children: "Services."
                    }), (0,
                    r.jsx)("div", {
                        className: "mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-6",
                        children: u.services.map((function(e, t) {
                            return (0,
                            r.jsx)(c, {
                                name: e.title,
                                description: e.description
                            }, t)
                        }
                        ))
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0",
                    ref: t,
                    children: [(0,
                    r.jsx)("h1", {
                        className: "text-2xl text-bold",
                        children: "About."
                    }), (0,
                    r.jsx)("p", {
                        className: "m-5 mob:m-0 laptop:m-5 mob:mt-2 laptop:ml-0 ml-0 text-3xl mob:text-xl laptop:text-3xl w-3/5 mob:w-full laptop:w-3/5",
                        children: u.aboutpara
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "mt-40 mob:mt-5 laptop:mt-40 mob:p-2 laptop:p-0",
                    children: [(0,
                    r.jsx)("h1", {
                        className: "text-2xl text-bold",
                        children: "Contact."
                    }), (0,
                    r.jsx)("div", {
                        className: "mt-5",
                        children: (0,
                        r.jsx)(p, {})
                    })]
                }), (0,
                r.jsxs)("h1", {
                    className: "text-sm text-bold mt-10 mob:mt-2 laptop:mt-10 mob:p-2 laptop:p-0",
                    children: ["© 2022 |", " ", (0,
                    r.jsx)(a(), {
                        href: "https://www.junowoz.xyz",
                        children: (0,
                        r.jsx)("a", {
                            className: "underline underline-offset-1",
                            children: "@junowoz"
                        })
                    })]
                })]
            })
        }
    },
    1664: function(e, t, n) {
        e.exports = n(1551)
    }
}, function(e) {
    e.O(0, [774, 888, 179], (function() {
        return t = 5557,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
