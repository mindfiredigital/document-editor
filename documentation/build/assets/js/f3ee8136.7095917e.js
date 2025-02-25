'use strict';
(self.webpackChunkdocument = self.webpackChunkdocument || []).push([
  [290],
  {
    5680: (e, t, o) => {
      o.d(t, { xA: () => l, yg: () => f });
      var n = o(6540);
      function r(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      function i(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, n);
        }
        return o;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(o), !0).forEach(function (t) {
                r(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : i(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t)
                  );
                });
        }
        return e;
      }
      function c(e, t) {
        if (null == e) return {};
        var o,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var o,
              n,
              r = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (o = i[n]), t.indexOf(o) >= 0 || (r[o] = e[o]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (o = i[n]),
              t.indexOf(o) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, o) &&
                  (r[o] = e[o]));
        }
        return r;
      }
      var s = n.createContext({}),
        u = function (e) {
          var t = n.useContext(s),
            o = t;
          return e && (o = 'function' == typeof e ? e(t) : a(a({}, t), e)), o;
        },
        l = function (e) {
          var t = u(e.components);
          return n.createElement(s.Provider, { value: t }, e.children);
        },
        d = 'mdxType',
        p = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        m = n.forwardRef(function (e, t) {
          var o = e.components,
            r = e.mdxType,
            i = e.originalType,
            s = e.parentName,
            l = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
            d = u(o),
            m = r,
            f = d[''.concat(s, '.').concat(m)] || d[m] || p[m] || i;
          return o
            ? n.createElement(f, a(a({ ref: t }, l), {}, { components: o }))
            : n.createElement(f, a({ ref: t }, l));
        });
      function f(e, t) {
        var o = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var i = o.length,
            a = new Array(i);
          a[0] = m;
          var c = {};
          for (var s in t) hasOwnProperty.call(t, s) && (c[s] = t[s]);
          (c.originalType = e),
            (c[d] = 'string' == typeof e ? e : r),
            (a[1] = c);
          for (var u = 2; u < i; u++) a[u] = o[u];
          return n.createElement.apply(null, a);
        }
        return n.createElement.apply(null, o);
      }
      m.displayName = 'MDXCreateElement';
    },
    7169: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => s,
          contentTitle: () => a,
          default: () => p,
          frontMatter: () => i,
          metadata: () => c,
          toc: () => u,
        });
      var n = o(8168),
        r = (o(6540), o(5680));
      const i = { sidebar_position: 2 },
        a = 'Code of conduct',
        c = {
          unversionedId: 'contributors/code-of-conduct',
          id: 'contributors/code-of-conduct',
          title: 'Code of conduct',
          description:
            'As contributors and maintainers of the React Document Editor package, we are dedicated to demonstrating respect to all individuals who contribute to this project. This respect encompasses actions such as posting issues, updating documentation, submitting pull requests, providing constructive feedback in comments, and engaging in any other project-related activities.',
          source: '@site/docs/contributors/code-of-conduct.md',
          sourceDirName: 'contributors',
          slug: '/contributors/code-of-conduct',
          permalink: '/react-canvas-editor/docs/contributors/code-of-conduct',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 2,
          frontMatter: { sidebar_position: 2 },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'How to Contribute',
            permalink:
              '/react-canvas-editor/docs/contributors/how-to-contribute',
          },
          next: {
            title: 'Release',
            permalink: '/react-canvas-editor/docs/category/release',
          },
        },
        s = {},
        u = [],
        l = { toc: u },
        d = 'wrapper';
      function p(e) {
        let { components: t, ...o } = e;
        return (0, r.yg)(
          d,
          (0, n.A)({}, l, o, { components: t, mdxType: 'MDXLayout' }),
          (0, r.yg)('h1', { id: 'code-of-conduct' }, 'Code of conduct'),
          (0, r.yg)(
            'p',
            null,
            'As contributors and maintainers of the React Document Editor package, we are dedicated to demonstrating respect to all individuals who contribute to this project. This respect encompasses actions such as posting issues, updating documentation, submitting pull requests, providing constructive feedback in comments, and engaging in any other project-related activities.'
          ),
          (0, r.yg)(
            'p',
            null,
            'In our communications through GitHub and other project channels, we are firmly committed to maintaining a constructive and professional atmosphere. We will not condone personal attacks, trolling, public or private harassment, insults, or any other unprofessional behavior.'
          ),
          (0, r.yg)(
            'p',
            null,
            'Our dedication extends to showing courtesy and respect to everyone involved in this project, regardless of their gender, gender identity, sexual orientation, disability, age, race, ethnicity, religion, or level of experience. We also expect that all contributors to the React Document Editor project will adhere to these principles.'
          ),
          (0, r.yg)(
            'p',
            null,
            'In situations where a community member violates this code of conduct, the maintainers of the React Document Editor package may take appropriate actions, including the removal of issues, comments, and pull requests, or the suspension of user accounts.'
          ),
          (0, r.yg)(
            'p',
            null,
            'If you encounter or observe any behavior that goes against this code of conduct or if you have other concerns, please do not hesitate to contact us via email at ',
            '[email address]',
            '.'
          )
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
