'use strict';
(self.webpackChunkdocument = self.webpackChunkdocument || []).push([
  [643],
  {
    5680: (e, t, o) => {
      o.d(t, { xA: () => u, yg: () => g });
      var r = o(6540);
      function n(e, t, o) {
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
      function a(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            o.push.apply(o, r);
        }
        return o;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(o), !0).forEach(function (t) {
                n(e, t, o[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
              : a(Object(o)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(o, t)
                  );
                });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var o,
          r,
          n = (function (e, t) {
            if (null == e) return {};
            var o,
              r,
              n = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (o = a[r]), t.indexOf(o) >= 0 || (n[o] = e[o]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (o = a[r]),
              t.indexOf(o) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, o) &&
                  (n[o] = e[o]));
        }
        return n;
      }
      var c = r.createContext({}),
        s = function (e) {
          var t = r.useContext(c),
            o = t;
          return e && (o = 'function' == typeof e ? e(t) : i(i({}, t), e)), o;
        },
        u = function (e) {
          var t = s(e.components);
          return r.createElement(c.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        d = r.forwardRef(function (e, t) {
          var o = e.components,
            n = e.mdxType,
            a = e.originalType,
            c = e.parentName,
            u = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = s(o),
            d = n,
            g = p[''.concat(c, '.').concat(d)] || p[d] || m[d] || a;
          return o
            ? r.createElement(g, i(i({ ref: t }, u), {}, { components: o }))
            : r.createElement(g, i({ ref: t }, u));
        });
      function g(e, t) {
        var o = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var a = o.length,
            i = new Array(a);
          i[0] = d;
          var l = {};
          for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
          (l.originalType = e),
            (l[p] = 'string' == typeof e ? e : n),
            (i[1] = l);
          for (var s = 2; s < a; s++) i[s] = o[s];
          return r.createElement.apply(null, i);
        }
        return r.createElement.apply(null, o);
      }
      d.displayName = 'MDXCreateElement';
    },
    7589: (e, t, o) => {
      o.r(t),
        o.d(t, {
          assets: () => c,
          contentTitle: () => i,
          default: () => m,
          frontMatter: () => a,
          metadata: () => l,
          toc: () => s,
        });
      var r = o(8168),
        n = (o(6540), o(5680));
      const a = { sidebar_position: 1 },
        i = 'How to customize toolbar',
        l = {
          unversionedId: 'tutorial-basics/customized-tool',
          id: 'tutorial-basics/customized-tool',
          title: 'How to customize toolbar',
          description:
            "Customizing the user interface and actions of the editor to align with your application's requirements is essential.",
          source: '@site/docs/tutorial-basics/customized-tool.md',
          sourceDirName: 'tutorial-basics',
          slug: '/tutorial-basics/customized-tool',
          permalink:
            '/react-canvas-editor/docs/tutorial-basics/customized-tool',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'Tutorials',
            permalink: '/react-canvas-editor/docs/category/tutorials',
          },
          next: {
            title: 'How to customize style',
            permalink:
              '/react-canvas-editor/docs/tutorial-basics/customized-style',
          },
        },
        c = {},
        s = [
          { value: 'Customize toolbar', id: 'customize-toolbar', level: 2 },
          {
            value: 'Adding or Removing Tools',
            id: 'adding-or-removing-tools',
            level: 2,
          },
        ],
        u = { toc: s },
        p = 'wrapper';
      function m(e) {
        let { components: t, ...o } = e;
        return (0, n.yg)(
          p,
          (0, r.A)({}, u, o, { components: t, mdxType: 'MDXLayout' }),
          (0, n.yg)(
            'h1',
            { id: 'how-to-customize-toolbar' },
            'How to customize toolbar'
          ),
          (0, n.yg)(
            'p',
            null,
            "Customizing the user interface and actions of the editor to align with your application's requirements is essential."
          ),
          (0, n.yg)('h2', { id: 'customize-toolbar' }, 'Customize toolbar'),
          (0, n.yg)(
            'p',
            null,
            'The toolbar offers the flexibility to add or remove various tools to suit your specific needs. By default, all tools in the toolbar options are displayed.'
          ),
          (0, n.yg)(
            'h2',
            { id: 'adding-or-removing-tools' },
            'Adding or Removing Tools'
          ),
          (0, n.yg)(
            'p',
            null,
            'To customize the toolbar, you can create an object with the following structure:'
          ),
          (0, n.yg)(
            'pre',
            null,
            (0, n.yg)(
              'code',
              { parentName: 'pre', className: 'language-javascript' },
              'const toolbarItem = {\n  bold: true,\n  italic: true,\n  underline: true,\n  undo: true,\n  redo: true,\n  image: false,\n};\n'
            )
          ),
          (0, n.yg)(
            'ul',
            null,
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              'To add a tool, set its value to true.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              'To remove a tool, set its value to false.'
            )
          ),
          (0, n.yg)(
            'p',
            null,
            "Here's an example of how to implement this in your code:"
          ),
          (0, n.yg)(
            'ul',
            null,
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)(
                'p',
                { parentName: 'li' },
                (0, n.yg)('strong', { parentName: 'p' }, 'React Component')
              ),
              (0, n.yg)(
                'pre',
                { parentName: 'li' },
                (0, n.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-javascript' },
                  'import { DocumentEditor } from "@mindfiredigital/react-canvas-editor";\nimport React from "react";\n\nexport const App = () => {\n  const toolbarItem = {\n    bold: true,\n    italic: true,\n    underline: true,\n    undo: true,\n    redo: true,\n    image: false,\n  };\n\n  return <DocumentEditor toolbar={toolbarItem} />;\n};\n'
                )
              )
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)(
                'p',
                { parentName: 'li' },
                (0, n.yg)(
                  'strong',
                  { parentName: 'p' },
                  'Web Component for React'
                )
              ),
              (0, n.yg)(
                'pre',
                { parentName: 'li' },
                (0, n.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-javascript' },
                  'import { DocumentEditorWebComponent } from "@mindfiredigital/react-canvas-editor";\nimport React from "react";\n\nconst toolbarItem = {\n  bold: true,\n  italic: true,\n  underline: true,\n  undo: true,\n  redo: true,\n  image: false,\n};\n\nDocumentEditorWebComponent({ toolbar: toolbarItem });\n\nexport const App = () => <div id=\'document-editor\'></div>;\n'
                )
              )
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)(
                'p',
                { parentName: 'li' },
                (0, n.yg)(
                  'strong',
                  { parentName: 'p' },
                  'Web Component for JavaScript'
                )
              ),
              (0, n.yg)(
                'pre',
                { parentName: 'li' },
                (0, n.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-html' },
                  '\x3c!-- In you html file add following code in a body tag where you want to use react canvas editor --\x3e\n<body>\n  <div id="document-editor"></div>\n  <script type="module" src="/main.js"><\/script>\n</body>\n;\n'
                )
              ),
              (0, n.yg)(
                'pre',
                { parentName: 'li' },
                (0, n.yg)(
                  'code',
                  { parentName: 'pre', className: 'language-javascript' },
                  '// In main.js file(i.e. used as a script in html file) add the following code\nimport { DocumentEditorWebComponent } from "@mindfiredigital/react-canvas-editor";\n\nconst toolbarItem = {\n  bold: true,\n  italic: true,\n  underline: true,\n  undo: true,\n  redo: true,\n  image: false,\n};\n\nDocumentEditorWebComponent({ toolbar: toolbarItem });\n'
                )
              )
            )
          )
        );
      }
      m.isMDXComponent = !0;
    },
  },
]);
