'use strict';
(self.webpackChunkdocument = self.webpackChunkdocument || []).push([
  [950],
  {
    5680: (e, t, r) => {
      r.d(t, { xA: () => s, yg: () => y });
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
      function i(e) {
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
      function c(e, t) {
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
        p = function (e) {
          var t = n.useContext(l),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : i(i({}, t), e)), r;
        },
        s = function (e) {
          var t = p(e.components);
          return n.createElement(l.Provider, { value: t }, e.children);
        },
        d = 'mdxType',
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        m = n.forwardRef(function (e, t) {
          var r = e.components,
            a = e.mdxType,
            o = e.originalType,
            l = e.parentName,
            s = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
            d = p(r),
            m = a,
            y = d[''.concat(l, '.').concat(m)] || d[m] || u[m] || o;
          return r
            ? n.createElement(y, i(i({ ref: t }, s), {}, { components: r }))
            : n.createElement(y, i({ ref: t }, s));
        });
      function y(e, t) {
        var r = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var o = r.length,
            i = new Array(o);
          i[0] = m;
          var c = {};
          for (var l in t) hasOwnProperty.call(t, l) && (c[l] = t[l]);
          (c.originalType = e),
            (c[d] = 'string' == typeof e ? e : a),
            (i[1] = c);
          for (var p = 2; p < o; p++) i[p] = r[p];
          return n.createElement.apply(null, i);
        }
        return n.createElement.apply(null, r);
      }
      m.displayName = 'MDXCreateElement';
    },
    3504: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => l,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => o,
          metadata: () => c,
          toc: () => p,
        });
      var n = r(8168),
        a = (r(6540), r(5680));
      const o = { sidebar_position: 2 },
        i = 'Quick Start',
        c = {
          unversionedId: 'Get-started/quickstart',
          id: 'Get-started/quickstart',
          title: 'Quick Start',
          description:
            "Let's explore the Document Editor in less than 5 minutes.",
          source: '@site/docs/Get-started/quickstart.md',
          sourceDirName: 'Get-started',
          slug: '/Get-started/quickstart',
          permalink: '/react-canvas-editor/docs/Get-started/quickstart',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 2,
          frontMatter: { sidebar_position: 2 },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'Installation',
            permalink: '/react-canvas-editor/docs/Get-started/Installation',
          },
          next: {
            title: 'Tutorials',
            permalink: '/react-canvas-editor/docs/category/tutorials',
          },
        },
        l = {},
        p = [{ value: 'Getting Started', id: 'getting-started', level: 2 }],
        s = { toc: p },
        d = 'wrapper';
      function u(e) {
        let { components: t, ...r } = e;
        return (0, a.yg)(
          d,
          (0, n.A)({}, s, r, { components: t, mdxType: 'MDXLayout' }),
          (0, a.yg)('h1', { id: 'quick-start' }, 'Quick Start'),
          (0, a.yg)(
            'p',
            null,
            "Let's explore the Document Editor in less than 5 minutes."
          ),
          (0, a.yg)('h2', { id: 'getting-started' }, 'Getting Started'),
          (0, a.yg)(
            'p',
            null,
            "To get started with the Document Editor, you'll need to initialize it in your project and specify the container element where the editor will be embedded."
          ),
          (0, a.yg)(
            'ul',
            null,
            (0, a.yg)(
              'li',
              { parentName: 'ul' },
              (0, a.yg)(
                'p',
                { parentName: 'li' },
                (0, a.yg)('strong', { parentName: 'p' }, 'React Component')
              ),
              (0, a.yg)(
                'pre',
                { parentName: 'li' },
                (0, a.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-javascript' },
                  'import { DocumentEditor } from "@mindfiredigital/react-canvas-editor";\nimport React from "react";\n\nexport const App = () => <DocumentEditor />;\n'
                )
              )
            ),
            (0, a.yg)(
              'li',
              { parentName: 'ul' },
              (0, a.yg)(
                'p',
                { parentName: 'li' },
                (0, a.yg)(
                  'strong',
                  { parentName: 'p' },
                  'Web Component for React'
                )
              ),
              (0, a.yg)(
                'pre',
                { parentName: 'li' },
                (0, a.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-javascript' },
                  'import { DocumentEditorWebComponent } from "@mindfiredigital/react-canvas-editor";\nimport React from "react";\n\nDocumentEditorWebComponent();\n\nexport const App = () => <div id=\'document-editor\'></div>;\n'
                )
              )
            ),
            (0, a.yg)(
              'li',
              { parentName: 'ul' },
              (0, a.yg)(
                'p',
                { parentName: 'li' },
                (0, a.yg)(
                  'strong',
                  { parentName: 'p' },
                  'Web Component for JavaScript'
                )
              ),
              (0, a.yg)(
                'pre',
                { parentName: 'li' },
                (0, a.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-html' },
                  '\x3c!-- In you html file add following code in a body tag where you want to use react canvas editor --\x3e\n<body>\n  <div id="document-editor"></div>\n  <script type="module" src="/main.js"><\/script>\n</body>\n;\n'
                )
              ),
              (0, a.yg)(
                'pre',
                { parentName: 'li' },
                (0, a.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-javascript' },
                  '// In main.js file(i.e. used as a script in html file) add the following code\nimport { DocumentEditorWebComponent } from "@mindfiredigital/react-canvas-editor";\n\nDocumentEditorWebComponent();\n'
                )
              )
            )
          ),
          (0, a.yg)(
            'admonition',
            { type: 'info' },
            (0, a.yg)(
              'p',
              { parentName: 'admonition' },
              "Note that after importing '@mindfiredigital/react-canvas-editor,' your project may experience a longer initial load time, but subsequent loads should be quicker."
            )
          ),
          (0, a.yg)(
            'p',
            null,
            'Please make sure that you import the library correctly, and your editor will function smoothly.'
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
