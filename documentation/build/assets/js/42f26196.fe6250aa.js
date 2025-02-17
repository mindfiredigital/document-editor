'use strict';
(self.webpackChunkdocument = self.webpackChunkdocument || []).push([
  [563],
  {
    5680: (e, t, n) => {
      n.d(t, { xA: () => s, yg: () => y });
      var r = n(6540);
      function o(e, t, n) {
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
      function i(e, t) {
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
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : i(Object(n)).forEach(function (t) {
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
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var c = r.createContext({}),
        u = function (e) {
          var t = r.useContext(c),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : a(a({}, t), e)), n;
        },
        s = function (e) {
          var t = u(e.components);
          return r.createElement(c.Provider, { value: t }, e.children);
        },
        p = 'mdxType',
        d = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        g = r.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            i = e.originalType,
            c = e.parentName,
            s = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = u(n),
            g = o,
            y = p[''.concat(c, '.').concat(g)] || p[g] || d[g] || i;
          return n
            ? r.createElement(y, a(a({ ref: t }, s), {}, { components: n }))
            : r.createElement(y, a({ ref: t }, s));
        });
      function y(e, t) {
        var n = arguments,
          o = t && t.mdxType;
        if ('string' == typeof e || o) {
          var i = n.length,
            a = new Array(i);
          a[0] = g;
          var l = {};
          for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
          (l.originalType = e),
            (l[p] = 'string' == typeof e ? e : o),
            (a[1] = l);
          for (var u = 2; u < i; u++) a[u] = n[u];
          return r.createElement.apply(null, a);
        }
        return r.createElement.apply(null, n);
      }
      g.displayName = 'MDXCreateElement';
    },
    5453: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => a,
          default: () => d,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => u,
        });
      var r = n(8168),
        o = (n(6540), n(5680));
      const i = { sidebar_position: 1 },
        a = 'How to Contribute',
        l = {
          unversionedId: 'contributors/how-to-contribute',
          id: 'contributors/how-to-contribute',
          title: 'How to Contribute',
          description:
            'We genuinely appreciate your interest in contributing to the React Document Editor project. Your invaluable contributions play a pivotal role in enhancing this project. Before you embark on your journey, please take a moment to familiarize yourself with the following guidelines:',
          source: '@site/docs/contributors/how-to-contribute.md',
          sourceDirName: 'contributors',
          slug: '/contributors/how-to-contribute',
          permalink: '/react-canvas-editor/docs/contributors/how-to-contribute',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'Contributors',
            permalink: '/react-canvas-editor/docs/contributors/',
          },
          next: {
            title: 'Code of conduct',
            permalink: '/react-canvas-editor/docs/contributors/code-of-conduct',
          },
        },
        c = {},
        u = [
          { value: 'Table of Contents', id: 'table-of-contents', level: 2 },
          { value: 'Getting Started', id: 'getting-started', level: 2 },
          {
            value: 'Selecting an Issue or Feature',
            id: 'selecting-an-issue-or-feature',
            level: 2,
          },
          { value: 'Making Changes', id: 'making-changes', level: 2 },
          {
            value: 'Submitting a Pull Request',
            id: 'submitting-a-pull-request',
            level: 2,
          },
          { value: 'Code of Conduct', id: 'code-of-conduct', level: 2 },
          { value: 'Licensing', id: 'licensing', level: 2 },
        ],
        s = { toc: u },
        p = 'wrapper';
      function d(e) {
        let { components: t, ...n } = e;
        return (0, o.yg)(
          p,
          (0, r.A)({}, s, n, { components: t, mdxType: 'MDXLayout' }),
          (0, o.yg)('h1', { id: 'how-to-contribute' }, 'How to Contribute'),
          (0, o.yg)(
            'p',
            null,
            'We genuinely appreciate your interest in contributing to the React Document Editor project. Your invaluable contributions play a pivotal role in enhancing this project. Before you embark on your journey, please take a moment to familiarize yourself with the following guidelines:'
          ),
          (0, o.yg)('h2', { id: 'table-of-contents' }, 'Table of Contents'),
          (0, o.yg)(
            'ul',
            null,
            (0, o.yg)(
              'li',
              { parentName: 'ul' },
              (0, o.yg)(
                'a',
                { parentName: 'li', href: '#getting-started' },
                'Getting Started'
              )
            ),
            (0, o.yg)(
              'li',
              { parentName: 'ul' },
              (0, o.yg)(
                'a',
                { parentName: 'li', href: '#selecting-an-issue-or-feature' },
                'Selecting an Issue or Feature'
              )
            ),
            (0, o.yg)(
              'li',
              { parentName: 'ul' },
              (0, o.yg)(
                'a',
                { parentName: 'li', href: '#making-changes' },
                'Making Changes'
              )
            ),
            (0, o.yg)(
              'li',
              { parentName: 'ul' },
              (0, o.yg)(
                'a',
                { parentName: 'li', href: '#submitting-a-pull-request' },
                'Submitting a Pull Request'
              )
            ),
            (0, o.yg)(
              'li',
              { parentName: 'ul' },
              (0, o.yg)(
                'a',
                { parentName: 'li', href: '#code-of-conduct' },
                'Code of Conduct'
              )
            ),
            (0, o.yg)(
              'li',
              { parentName: 'ul' },
              (0, o.yg)(
                'a',
                { parentName: 'li', href: '#licensing' },
                'Licensing'
              )
            )
          ),
          (0, o.yg)('h2', { id: 'getting-started' }, 'Getting Started'),
          (0, o.yg)(
            'ol',
            null,
            (0, o.yg)(
              'li',
              { parentName: 'ol' },
              'Begin by downloading the installer for the Long-Term Support (LTS) version of Node.js. This step also streamlines the npm installation process.'
            ),
            (0, o.yg)(
              'li',
              { parentName: 'ol' },
              'Proceed by forking the React Canvas Editor repository.'
            ),
            (0, o.yg)(
              'li',
              { parentName: 'ol' },
              'Execute ',
              (0, o.yg)('inlineCode', { parentName: 'li' }, 'npm install'),
              ' to install the necessary dependencies for this package.'
            ),
            (0, o.yg)(
              'li',
              { parentName: 'ol' },
              "Acquire insights into the document editor's functionality by running ",
              (0, o.yg)(
                'inlineCode',
                { parentName: 'li' },
                'npm run storybook'
              ),
              '.'
            )
          ),
          (0, o.yg)(
            'h2',
            { id: 'selecting-an-issue-or-feature' },
            'Selecting an Issue or Feature'
          ),
          (0, o.yg)(
            'p',
            null,
            "Review the project's issue tracker and GitHub repository to identify open issues or features that align with your interests. If you can't pinpoint a specific task, do not hesitate to reach out to the project maintainers for guidance."
          ),
          (0, o.yg)('h2', { id: 'making-changes' }, 'Making Changes'),
          (0, o.yg)(
            'ol',
            null,
            (0, o.yg)(
              'li',
              { parentName: 'ol' },
              'Create a new branch within your forked repository, providing it with a descriptive name.'
            ),
            (0, o.yg)(
              'li',
              { parentName: 'ol' },
              'Implement the desired feature or address the identified issue within your branch.'
            ),
            (0, o.yg)(
              'li',
              { parentName: 'ol' },
              "Adhere to the project's coding style and conventions to ensure consistency."
            ),
            (0, o.yg)(
              'li',
              { parentName: 'ol' },
              "If applicable, create tests to comprehensively cover the functionality you're introducing or modifying."
            )
          ),
          (0, o.yg)(
            'h2',
            { id: 'submitting-a-pull-request' },
            'Submitting a Pull Request'
          ),
          (0, o.yg)(
            'ol',
            null,
            (0, o.yg)(
              'li',
              { parentName: 'ol' },
              'Initiate a pull request (PR) on the primary project repository.'
            ),
            (0, o.yg)(
              'li',
              { parentName: 'ol' },
              'Provide a clear and concise description of the changes within the PR.'
            ),
            (0, o.yg)(
              'li',
              { parentName: 'ol' },
              'Elaborate on the issue you are addressing and outline the proposed solution.'
            ),
            (0, o.yg)(
              'li',
              { parentName: 'ol' },
              'Be prepared to receive constructive feedback and engage in productive discussions.'
            ),
            (0, o.yg)(
              'li',
              { parentName: 'ol' },
              'Adjust your code as necessary based on the feedback received.'
            )
          ),
          (0, o.yg)('h2', { id: 'code-of-conduct' }, 'Code of Conduct'),
          (0, o.yg)(
            'p',
            null,
            'Kindly be aware that we uphold a code of conduct to maintain a positive and inclusive community. We urge you to thoroughly read and adhere to these guidelines during your participation in the project.'
          ),
          (0, o.yg)('h2', { id: 'licensing' }, 'Licensing'),
          (0, o.yg)(
            'p',
            null,
            "By contributing to this project, you consent to the licensing terms chosen by the project. Ensure you review the project's licensing file for detailed information."
          ),
          (0, o.yg)(
            'p',
            null,
            'We extend our gratitude for your contributions and eagerly anticipate your active involvement in the React Document Editor project!'
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
