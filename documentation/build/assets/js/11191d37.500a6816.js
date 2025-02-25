'use strict';
(self.webpackChunkdocument = self.webpackChunkdocument || []).push([
  [194],
  {
    5680: (e, t, r) => {
      r.d(t, { xA: () => p, yg: () => d });
      var a = r(6540);
      function n(e, t, r) {
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
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
        }
        return r;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : i(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var r,
          a,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              a,
              n = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++)
              (r = i[a]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (r = i[a]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (n[r] = e[r]));
        }
        return n;
      }
      var s = a.createContext({}),
        c = function (e) {
          var t = a.useContext(s),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : o(o({}, t), e)), r;
        },
        p = function (e) {
          var t = c(e.components);
          return a.createElement(s.Provider, { value: t }, e.children);
        },
        u = 'mdxType',
        g = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return a.createElement(a.Fragment, {}, t);
          },
        },
        m = a.forwardRef(function (e, t) {
          var r = e.components,
            n = e.mdxType,
            i = e.originalType,
            s = e.parentName,
            p = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = c(r),
            m = n,
            d = u[''.concat(s, '.').concat(m)] || u[m] || g[m] || i;
          return r
            ? a.createElement(d, o(o({ ref: t }, p), {}, { components: r }))
            : a.createElement(d, o({ ref: t }, p));
        });
      function d(e, t) {
        var r = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var i = r.length,
            o = new Array(i);
          o[0] = m;
          var l = {};
          for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
          (l.originalType = e),
            (l[u] = 'string' == typeof e ? e : n),
            (o[1] = l);
          for (var c = 2; c < i; c++) o[c] = r[c];
          return a.createElement.apply(null, o);
        }
        return a.createElement.apply(null, r);
      }
      m.displayName = 'MDXCreateElement';
    },
    5571: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => s,
          contentTitle: () => o,
          default: () => g,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => c,
        });
      var a = r(8168),
        n = (r(6540), r(5680));
      const i = { sidebar_position: 1 },
        o = 'What is React Document Editor?',
        l = {
          unversionedId: 'what-is-document-editor',
          id: 'what-is-document-editor',
          title: 'What is React Document Editor?',
          description:
            'react-document-editor is a tool that allows developers to integrate multipage document editor inside react application.',
          source: '@site/docs/what-is-document-editor.md',
          sourceDirName: '.',
          slug: '/what-is-document-editor',
          permalink: '/react-canvas-editor/docs/what-is-document-editor',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: 'tutorialSidebar',
          next: {
            title: 'Why we use Canvas',
            permalink: '/react-canvas-editor/docs/category/why-we-use-canvas',
          },
        },
        s = {},
        c = [{ value: 'Key features', id: 'key-features', level: 2 }],
        p = { toc: c },
        u = 'wrapper';
      function g(e) {
        let { components: t, ...r } = e;
        return (0, n.yg)(
          u,
          (0, a.A)({}, p, r, { components: t, mdxType: 'MDXLayout' }),
          (0, n.yg)(
            'h1',
            { id: 'what-is-react-document-editor' },
            'What is React Document Editor?'
          ),
          (0, n.yg)(
            'p',
            null,
            (0, n.yg)(
              'inlineCode',
              { parentName: 'p' },
              'react-document-editor'
            ),
            ' is a tool that allows developers to integrate multipage document editor inside react application.'
          ),
          (0, n.yg)('h2', { id: 'key-features' }, 'Key features'),
          (0, n.yg)(
            'ul',
            null,
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Undo'),
              ": This feature allows you to reverse the most recent action you performed. It's particularly useful when you make a mistake and want to go back one step."
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Redo'),
              ": Redo is the opposite of undo. It allows you to reapply an action that you've previously undone."
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Bold'),
              ': When you apply bold formatting to text, it makes the selected text appear thicker and more prominent.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Italic'),
              ': Italic text is slanted to the right.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Underline'),
              ': Underlining text places a horizontal line beneath it.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Subscript'),
              ': Subscript lowers the selected text below the baseline.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Superscript'),
              ': Superscript raises the selected text above the baseline.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Strikethrough'),
              ': Text with a strikethrough line through it is used to indicate that the content should be deleted or is no longer valid.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Left Align'),
              ': This feature aligns text to the left margin, creating a straight left edge.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Center Align'),
              ': Center alignment places text in the middle of the page or text box.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Right Align'),
              ': Text is aligned to the right margin, creating a straight right edge.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Justify'),
              ': Justification spreads text evenly between both the left and right margins, creating a clean and straight appearance on both sides.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Bullet List'),
              ': Bullet lists present information as a series of items with bullets.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Numbered List'),
              ': Numbered lists provide a sequential order to items.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Font Type'),
              ': Font type refers to the specific style of text characters. Examples include Arial, Times New Roman, and Calibri.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Insert Table'),
              ': This feature allows you to create tables to organize data.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Text Color'),
              ': Text color lets you change the color of the text.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Highlight Color'),
              ': Highlighting text adds a background color.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Font Size'),
              ': Font size controls the size of the text characters.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Heading'),
              ': Headings are typically used to divide a document into sections or chapters. They are usually styled differently, such as with larger text or bold formatting.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Hyperlink'),
              ': A hyperlink is a clickable link that connects to a webpage or another location within the document.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Image'),
              ': This feature allows you to insert images or graphics into your document to enhance its visual appeal or convey additional information.'
            ),
            (0, n.yg)(
              'li',
              { parentName: 'ul' },
              (0, n.yg)('strong', { parentName: 'li' }, 'Customizable UI'),
              ": Easily customize the document editor's user interface to match your application's theme."
            )
          )
        );
      }
      g.isMDXComponent = !0;
    },
  },
]);
