'use strict';
(self.webpackChunkdocument = self.webpackChunkdocument || []).push([
  [198],
  {
    5680: (e, t, n) => {
      n.d(t, { xA: () => p, yg: () => y });
      var r = n(6540);
      function a(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var s = r.createContext({}),
        c = function (e) {
          var t = r.useContext(s),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : i(i({}, t), e)), n;
        },
        p = function (e) {
          var t = c(e.components);
          return r.createElement(s.Provider, { value: t }, e.children);
        },
        u = 'mdxType',
        d = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        m = r.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            o = e.originalType,
            s = e.parentName,
            p = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = c(n),
            m = a,
            y = u[''.concat(s, '.').concat(m)] || u[m] || d[m] || o;
          return n
            ? r.createElement(y, i(i({ ref: t }, p), {}, { components: n }))
            : r.createElement(y, i({ ref: t }, p));
        });
      function y(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var o = n.length,
            i = new Array(o);
          i[0] = m;
          var l = {};
          for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
          (l.originalType = e),
            (l[u] = 'string' == typeof e ? e : a),
            (i[1] = l);
          for (var c = 2; c < o; c++) i[c] = n[c];
          return r.createElement.apply(null, i);
        }
        return r.createElement.apply(null, n);
      }
      m.displayName = 'MDXCreateElement';
    },
    3897: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => s,
          contentTitle: () => i,
          default: () => d,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => c,
        });
      var r = n(8168),
        a = (n(6540), n(5680));
      const o = { sidebar_position: 1 },
        i = 'Installation',
        l = {
          unversionedId: 'Get-started/Installation',
          id: 'Get-started/Installation',
          title: 'Installation',
          description:
            'The React Document Editor is a collection of npm packages, which can be found on GitHub.',
          source: '@site/docs/Get-started/Installation.md',
          sourceDirName: 'Get-started',
          slug: '/Get-started/Installation',
          permalink: '/react-canvas-editor/docs/Get-started/Installation',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'Get Started',
            permalink: '/react-canvas-editor/docs/category/get-started',
          },
          next: {
            title: 'Quick Start',
            permalink: '/react-canvas-editor/docs/Get-started/quickstart',
          },
        },
        s = {},
        c = [
          { value: 'System Requirements', id: 'system-requirements', level: 2 },
          { value: 'Installation', id: 'installation-1', level: 2 },
        ],
        p = { toc: c },
        u = 'wrapper';
      function d(e) {
        let { components: t, ...n } = e;
        return (0, a.yg)(
          u,
          (0, r.A)({}, p, n, { components: t, mdxType: 'MDXLayout' }),
          (0, a.yg)('h1', { id: 'installation' }, 'Installation'),
          (0, a.yg)(
            'p',
            null,
            'The React Document Editor is a collection of npm packages, which can be found on ',
            (0, a.yg)(
              'a',
              {
                parentName: 'p',
                href: 'https://github.com/mindfiredigital/react-canvas-editor',
              },
              'GitHub'
            ),
            '.'
          ),
          (0, a.yg)('h2', { id: 'system-requirements' }, 'System Requirements'),
          (0, a.yg)(
            'p',
            null,
            'To ensure a smooth installation and operation, please make sure your system meets the following requirements:'
          ),
          (0, a.yg)(
            'ul',
            null,
            (0, a.yg)(
              'li',
              { parentName: 'ul' },
              'Node.js: Version 12.0 or above is required. When installing Node.js, it is recommended to select all checkboxes related to dependencies.'
            )
          ),
          (0, a.yg)('h2', { id: 'installation-1' }, 'Installation'),
          (0, a.yg)(
            'p',
            null,
            'To add the ',
            (0, a.yg)(
              'inlineCode',
              { parentName: 'p' },
              '@mindfiredigital/react-canvas-editor'
            ),
            ' npm package to your project, follow these steps:'
          ),
          (0, a.yg)(
            'ol',
            null,
            (0, a.yg)(
              'li',
              { parentName: 'ol' },
              (0, a.yg)(
                'p',
                { parentName: 'li' },
                'Open a terminal or integrated terminal within your code editor.'
              )
            ),
            (0, a.yg)(
              'li',
              { parentName: 'ol' },
              (0, a.yg)(
                'p',
                { parentName: 'li' },
                'Run the following command to install the @mindfiredigital/react-canvas-editor package:'
              )
            )
          ),
          (0, a.yg)(
            'pre',
            null,
            (0, a.yg)(
              'code',
              { parentName: 'pre', className: 'language-bash' },
              'npm install @mindfiredigital/react-canvas-editor\n'
            )
          ),
          (0, a.yg)(
            'ol',
            { start: 3 },
            (0, a.yg)(
              'li',
              { parentName: 'ol' },
              'This command will automatically add the necessary dependencies to your project, enabling you to run the Document Editor smoothly.'
            )
          ),
          (0, a.yg)(
            'p',
            null,
            'Please ensure that your Node.js version meets the specified requirements before proceeding with the installation.'
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
