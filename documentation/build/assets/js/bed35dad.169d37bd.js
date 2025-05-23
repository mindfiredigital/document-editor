'use strict';
(self.webpackChunkdocument = self.webpackChunkdocument || []).push([
  [347],
  {
    5680: (e, t, r) => {
      r.d(t, { xA: () => p, yg: () => f });
      var n = r(6540);
      function a(e, t, r) {
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
      function o(e, t) {
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
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                a(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : o(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function i(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (a[r] = e[r]));
        }
        return a;
      }
      var l = n.createContext({}),
        s = function (e) {
          var t = n.useContext(l),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : c(c({}, t), e)), r;
        },
        p = function (e) {
          var t = s(e.components);
          return n.createElement(l.Provider, { value: t }, e.children);
        },
        u = 'mdxType',
        d = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        g = n.forwardRef(function (e, t) {
          var r = e.components,
            a = e.mdxType,
            o = e.originalType,
            l = e.parentName,
            p = i(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = s(r),
            g = a,
            f = u[''.concat(l, '.').concat(g)] || u[g] || d[g] || o;
          return r
            ? n.createElement(f, c(c({ ref: t }, p), {}, { components: r }))
            : n.createElement(f, c({ ref: t }, p));
        });
      function f(e, t) {
        var r = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var o = r.length,
            c = new Array(o);
          c[0] = g;
          var i = {};
          for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
          (i.originalType = e),
            (i[u] = 'string' == typeof e ? e : a),
            (c[1] = i);
          for (var s = 2; s < o; s++) c[s] = r[s];
          return n.createElement.apply(null, c);
        }
        return n.createElement.apply(null, r);
      }
      g.displayName = 'MDXCreateElement';
    },
    9904: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => l,
          contentTitle: () => c,
          default: () => d,
          frontMatter: () => o,
          metadata: () => i,
          toc: () => s,
        });
      var n = r(8168),
        a = (r(6540), r(5680));
      const o = { sidebar_position: 1 },
        c = 'DOM Events',
        i = {
          unversionedId: 'references/dom-event',
          id: 'references/dom-event',
          title: 'DOM Events',
          description:
            '| Event         |                                                                                |',
          source: '@site/docs/references/dom-event.md',
          sourceDirName: 'references',
          slug: '/references/dom-event',
          permalink: '/react-canvas-editor/docs/references/dom-event',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'References',
            permalink: '/react-canvas-editor/docs/category/references',
          },
          next: {
            title: 'Toolbar Options',
            permalink: '/react-canvas-editor/docs/references/toolbar-option',
          },
        },
        l = {},
        s = [],
        p = { toc: s },
        u = 'wrapper';
      function d(e) {
        let { components: t, ...r } = e;
        return (0, a.yg)(
          u,
          (0, n.A)({}, p, r, { components: t, mdxType: 'MDXLayout' }),
          (0, a.yg)('h1', { id: 'dom-events' }, 'DOM Events'),
          (0, a.yg)(
            'table',
            null,
            (0, a.yg)(
              'thead',
              { parentName: 'table' },
              (0, a.yg)(
                'tr',
                { parentName: 'thead' },
                (0, a.yg)('th', { parentName: 'tr', align: null }, 'Event'),
                (0, a.yg)('th', { parentName: 'tr', align: 'left' })
              )
            ),
            (0, a.yg)(
              'tbody',
              { parentName: 'table' },
              (0, a.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, a.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, a.yg)('strong', { parentName: 'td' }, 'on_change')
                ),
                (0, a.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'The onchange event occurs when the text of the page is changed'
                )
              ),
              (0, a.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, a.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, a.yg)('strong', { parentName: 'td' }, 'on_select')
                ),
                (0, a.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'The onSelect event occurs when user selects or highlights the text of the page'
                )
              ),
              (0, a.yg)(
                'tr',
                { parentName: 'tbody' },
                (0, a.yg)(
                  'td',
                  { parentName: 'tr', align: null },
                  (0, a.yg)('strong', { parentName: 'td' }, 'value')
                ),
                (0, a.yg)(
                  'td',
                  { parentName: 'tr', align: 'left' },
                  'To assign a text to a page'
                )
              )
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
