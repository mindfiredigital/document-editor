'use strict';
(self.webpackChunkdocument = self.webpackChunkdocument || []).push([
  [602],
  {
    5680: (e, t, r) => {
      r.d(t, { xA: () => l, yg: () => y });
      var n = r(6540);
      function o(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : a(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function c(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var u = n.createContext({}),
        s = function (e) {
          var t = n.useContext(u),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : i(i({}, t), e)), r;
        },
        l = function (e) {
          var t = s(e.components);
          return n.createElement(u.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        b = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        m = n.forwardRef(function (e, t) {
          var r = e.components,
            o = e.mdxType,
            a = e.originalType,
            u = e.parentName,
            l = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = s(r),
            m = o,
            y = p[''.concat(u, '.').concat(m)] || p[m] || b[m] || a;
          return r
            ? n.createElement(y, i(i({ ref: t }, l), {}, { components: r }))
            : n.createElement(y, i({ ref: t }, l));
        });
      function y(e, t) {
        var r = arguments,
          o = t && t.mdxType;
        if ('string' == typeof e || o) {
          var a = r.length,
            i = new Array(a);
          i[0] = m;
          var c = {};
          for (var u in t) hasOwnProperty.call(t, u) && (c[u] = t[u]);
          (c.originalType = e),
            (c[p] = 'string' == typeof e ? e : o),
            (i[1] = c);
          for (var s = 2; s < a; s++) i[s] = r[s];
          return n.createElement.apply(null, i);
        }
        return n.createElement.apply(null, r);
      }
      m.displayName = 'MDXCreateElement';
    },
    4887: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => u,
          contentTitle: () => i,
          default: () => b,
          frontMatter: () => a,
          metadata: () => c,
          toc: () => s,
        });
      var n = r(8168),
        o = (r(6540), r(5680));
      const a = { sidebar_position: 1 },
        i = 'Contributors',
        c = {
          unversionedId: 'contributors/contributors',
          id: 'contributors/contributors',
          title: 'Contributors',
          description: '- Ashutosh Jena',
          source: '@site/docs/contributors/contributors.md',
          sourceDirName: 'contributors',
          slug: '/contributors/',
          permalink: '/react-canvas-editor/docs/contributors/',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'Contribution Guide',
            permalink: '/react-canvas-editor/docs/category/contribution-guide',
          },
          next: {
            title: 'How to Contribute',
            permalink:
              '/react-canvas-editor/docs/contributors/how-to-contribute',
          },
        },
        u = {},
        s = [],
        l = { toc: s },
        p = 'wrapper';
      function b(e) {
        let { components: t, ...r } = e;
        return (0, o.yg)(
          p,
          (0, n.A)({}, l, r, { components: t, mdxType: 'MDXLayout' }),
          (0, o.yg)('h1', { id: 'contributors' }, 'Contributors'),
          (0, o.yg)(
            'ul',
            null,
            (0, o.yg)(
              'li',
              { parentName: 'ul' },
              (0, o.yg)('p', { parentName: 'li' }, 'Ashutosh Jena'),
              (0, o.yg)(
                'ul',
                { parentName: 'li' },
                (0, o.yg)(
                  'li',
                  { parentName: 'ul' },
                  'GitHub: ',
                  (0, o.yg)(
                    'a',
                    {
                      parentName: 'li',
                      href: 'https://github.com/ashutosh-jena-mindfire',
                    },
                    'github.com/ashutosh-jena-mindfire'
                  )
                )
              )
            ),
            (0, o.yg)(
              'li',
              { parentName: 'ul' },
              (0, o.yg)('p', { parentName: 'li' }, 'Vershala Tandon'),
              (0, o.yg)(
                'ul',
                { parentName: 'li' },
                (0, o.yg)(
                  'li',
                  { parentName: 'ul' },
                  'GitHub: ',
                  (0, o.yg)(
                    'a',
                    { parentName: 'li', href: 'https://github.com/VershalaT' },
                    'https://github.com/VershalaT'
                  )
                )
              )
            )
          ),
          (0, o.yg)('p', null, 'Thank you, for your valuable contributions!')
        );
      }
      b.isMDXComponent = !0;
    },
  },
]);
