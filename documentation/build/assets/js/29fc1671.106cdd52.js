'use strict';
(self.webpackChunkdocument = self.webpackChunkdocument || []).push([
  [688],
  {
    5680: (e, a, t) => {
      t.d(a, { xA: () => p, yg: () => m });
      var n = t(6540);
      function r(e, a, t) {
        return (
          a in e
            ? Object.defineProperty(e, a, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[a] = t),
          e
        );
      }
      function i(e, a) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          a &&
            (n = n.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function o(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? i(Object(t), !0).forEach(function (a) {
                r(e, a, t[a]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
              : i(Object(t)).forEach(function (a) {
                  Object.defineProperty(
                    e,
                    a,
                    Object.getOwnPropertyDescriptor(t, a)
                  );
                });
        }
        return e;
      }
      function s(e, a) {
        if (null == e) return {};
        var t,
          n,
          r = (function (e, a) {
            if (null == e) return {};
            var t,
              n,
              r = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (t = i[n]), a.indexOf(t) >= 0 || (r[t] = e[t]);
            return r;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (t = i[n]),
              a.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (r[t] = e[t]));
        }
        return r;
      }
      var l = n.createContext({}),
        c = function (e) {
          var a = n.useContext(l),
            t = a;
          return e && (t = 'function' == typeof e ? e(a) : o(o({}, a), e)), t;
        },
        p = function (e) {
          var a = c(e.components);
          return n.createElement(l.Provider, { value: a }, e.children);
        },
        d = 'mdxType',
        g = {
          inlineCode: 'code',
          wrapper: function (e) {
            var a = e.children;
            return n.createElement(n.Fragment, {}, a);
          },
        },
        u = n.forwardRef(function (e, a) {
          var t = e.components,
            r = e.mdxType,
            i = e.originalType,
            l = e.parentName,
            p = s(e, ['components', 'mdxType', 'originalType', 'parentName']),
            d = c(t),
            u = r,
            m = d[''.concat(l, '.').concat(u)] || d[u] || g[u] || i;
          return t
            ? n.createElement(m, o(o({ ref: a }, p), {}, { components: t }))
            : n.createElement(m, o({ ref: a }, p));
        });
      function m(e, a) {
        var t = arguments,
          r = a && a.mdxType;
        if ('string' == typeof e || r) {
          var i = t.length,
            o = new Array(i);
          o[0] = u;
          var s = {};
          for (var l in a) hasOwnProperty.call(a, l) && (s[l] = a[l]);
          (s.originalType = e),
            (s[d] = 'string' == typeof e ? e : r),
            (o[1] = s);
          for (var c = 2; c < i; c++) o[c] = t[c];
          return n.createElement.apply(null, o);
        }
        return n.createElement.apply(null, t);
      }
      u.displayName = 'MDXCreateElement';
    },
    3813: (e, a, t) => {
      t.r(a),
        t.d(a, {
          assets: () => l,
          contentTitle: () => o,
          default: () => g,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => c,
        });
      var n = t(8168),
        r = (t(6540), t(5680));
      const i = { sidebar_position: 1 },
        o = 'Why Canvas Editor',
        s = {
          unversionedId: 'Why-we-use-canvas/Why-we-use-canvas',
          id: 'Why-we-use-canvas/Why-we-use-canvas',
          title: 'Why Canvas Editor',
          description: 'Canvas vs HTML Editor',
          source: '@site/docs/Why-we-use-canvas/Why-we-use-canvas.md',
          sourceDirName: 'Why-we-use-canvas',
          slug: '/Why-we-use-canvas/',
          permalink: '/react-canvas-editor/docs/Why-we-use-canvas/',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'Why we use Canvas',
            permalink: '/react-canvas-editor/docs/category/why-we-use-canvas',
          },
          next: {
            title: 'Get Started',
            permalink: '/react-canvas-editor/docs/category/get-started',
          },
        },
        l = {},
        c = [
          {
            value: 'Canvas vs HTML Editor',
            id: 'canvas-vs-html-editor',
            level: 2,
          },
          {
            value: 'Advantages of Canvas Editor',
            id: 'advantages-of-canvas-editor',
            level: 2,
          },
          {
            value: 'How Canvas Editor Perforance is better than HTML Editor',
            id: 'how-canvas-editor-perforance-is-better-than-html-editor',
            level: 2,
          },
          { value: 'Conclusion', id: 'conclusion', level: 2 },
        ],
        p = { toc: c },
        d = 'wrapper';
      function g(e) {
        let { components: a, ...t } = e;
        return (0, r.yg)(
          d,
          (0, n.A)({}, p, t, { components: a, mdxType: 'MDXLayout' }),
          (0, r.yg)('h1', { id: 'why-canvas-editor' }, 'Why Canvas Editor'),
          (0, r.yg)(
            'h2',
            { id: 'canvas-vs-html-editor' },
            'Canvas vs HTML Editor'
          ),
          (0, r.yg)(
            'p',
            null,
            'Canvas is better suited for projects that require high levels of customization, interactivity, and performance, especially when developed by individuals with programming skills.'
          ),
          (0, r.yg)(
            'table',
            null,
            (0, r.yg)(
              'tr',
              null,
              (0, r.yg)('th', null, 'Features'),
              (0, r.yg)('th', null, 'Canvas Editor'),
              (0, r.yg)('th', null, 'HTML Editor')
            ),
            (0, r.yg)(
              'tr',
              null,
              (0, r.yg)('td', null, 'Rendering'),
              (0, r.yg)(
                'td',
                null,
                'Canvas provides low-level APIs and immediate mode rendering, enabling precise syncing of each stroke vector across iframes to achieve real-time collaborative effect.'
              ),
              (0, r.yg)(
                'td',
                null,
                'HTML updates are more granular and complex to synchronize.'
              )
            ),
            (0, r.yg)(
              'tr',
              null,
              (0, r.yg)('td', null, 'Complexity'),
              (0, r.yg)(
                'td',
                null,
                'Canvas data (stroke vectors) are simple to reproduce identically on separate canvases. '
              ),
              (0, r.yg)(
                'td',
                null,
                'HTML editor reconciliation is harder across multiple complex nested elements.'
              )
            ),
            (0, r.yg)(
              'tr',
              null,
              (0, r.yg)('td', null, 'Dynamic Content and Interactivity'),
              (0, r.yg)(
                'td',
                null,
                'Canvas is particularly powerful for creating dynamic and interactive content, such as animations, games, and data visualizations. It provides a drawing API that allows you to manipulate pixels directly, offering fine-grained control over the visual elements.'
              ),
              (0, r.yg)(
                'td',
                null,
                'HTML editors are generally designed for static content creation, and while they may offer some interactivity features, they might not provide the same level of control as Canvas when it comes to dynamic and custom interactions.'
              )
            ),
            (0, r.yg)(
              'tr',
              null,
              (0, r.yg)('td', null, 'Customization and Flexibility'),
              (0, r.yg)(
                'td',
                null,
                'Canvas allows developers to create highly customized and unique visual elements. It provides a blank canvas where you have complete control over the rendering process. This makes it suitable for projects that require a high degree of customization.'
              ),
              (0, r.yg)(
                'td',
                null,
                'HTML editors often come with predefined templates and styles, which can limit the level of customization. While they are great for quick and easy content creation, they may not be as flexible for highly tailored or specialized designs.'
              )
            ),
            (0, r.yg)(
              'tr',
              null,
              (0, r.yg)('td', null, 'Programmatic Control'),
              (0, r.yg)(
                'td',
                null,
                'Canvas is manipulated through JavaScript, giving developers programmatic control over every aspect of the canvas. This enables the creation of complex graphics and animations using code.'
              ),
              (0, r.yg)(
                'td',
                null,
                'HTML editors are typically designed for users who prefer a visual interface over coding. While they might provide some level of scripting or automation, they may not offer the same level of programmatic control as Canvas.'
              )
            ),
            (0, r.yg)(
              'tr',
              null,
              (0, r.yg)('td', null, 'Performance'),
              (0, r.yg)(
                'td',
                null,
                'Drawing on canvas is very lightweight allowing high frame rate interactive applications ideal for fast collaboration. Canvas can be more performant for certain graphics-intensive tasks, especially when dealing with a large number of elements or complex animations. This is because it allows for direct manipulation of pixels and can leverage hardware acceleration.'
              ),
              (0, r.yg)(
                'td',
                null,
                'HTML editors have slower change rendering. HTML editors might introduce some overhead, as they often generate complex HTML and CSS structures to represent the content, which can impact performance, especially in resource-intensive applications.'
              )
            ),
            (0, r.yg)(
              'tr',
              null,
              (0, r.yg)('td', null, 'Learning and Development'),
              (0, r.yg)(
                'td',
                null,
                'Canvas is a good choice for developers who are comfortable with programming and want to create graphics and visualizations using code. It requires a solid understanding of JavaScript and the Canvas API.'
              ),
              (0, r.yg)(
                'td',
                null,
                'HTML editors are generally more user-friendly for non-programmers and can be a quicker way to create visually appealing content without the need for coding skills.'
              )
            )
          ),
          (0, r.yg)(
            'h2',
            { id: 'advantages-of-canvas-editor' },
            'Advantages of Canvas Editor'
          ),
          (0, r.yg)(
            'ul',
            null,
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)('strong', { parentName: 'p' }, 'Features'),
                ': Canvas gives flexibility to build custom drawing and painting features beyond basic text/images offered in HTML editors. More creative tools and possibilities.'
              )
            ),
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)(
                  'strong',
                  { parentName: 'p' },
                  'Real-time synchronization'
                ),
                ': Canvas state is very fast and lightweight to synchronize across users, enabling smoother real-time co-editing over sluggish HTML updates.'
              )
            ),
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)('strong', { parentName: 'p' }, 'Responsiveness'),
                ': Drawing and updating canvas elements has less overhead for snappier feedback compared to DOM manipulation.'
              )
            ),
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)('strong', { parentName: 'p' }, 'Graphical freedom'),
                ': Canvas gives greater pixel-level control for images, drawings, diagrams beyond basic image insertion.'
              )
            ),
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)('strong', { parentName: 'p' }, 'Customizable UI'),
                ': Canvas lets you build custom menus, toolbars, and inputs tailored to doc editing vs generic HTML editor chrome.'
              )
            ),
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)('strong', { parentName: 'p' }, 'Expressiveness'),
                ': New interactive content like animations, timelines, stylized text etc can enrich documents more readily in canvas.'
              )
            ),
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)('strong', { parentName: 'p' }, 'Offline handling'),
                ': Queue canvas operations while offline similar to input buffering for better disconnected support.'
              )
            ),
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)(
                  'strong',
                  { parentName: 'p' },
                  'Cross-device testing'
                ),
                ': Canvas provides very consistent rendering across platforms, great for cross-device doc editing.'
              )
            ),
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)('strong', { parentName: 'p' }, 'Accessibility'),
                ': Canvas graphics can programmatically expose required semantics for screen-readers on drawings.'
              )
            ),
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)('strong', { parentName: 'p' }, 'Undo infrastructure'),
                ': Canvas edits are simple to capture for smoother undo/redo than HTML parsing.'
              )
            )
          ),
          (0, r.yg)(
            'h2',
            { id: 'how-canvas-editor-perforance-is-better-than-html-editor' },
            'How Canvas Editor Perforance is better than HTML Editor'
          ),
          (0, r.yg)(
            'ul',
            null,
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)('strong', { parentName: 'p' }, 'Efficient Rendering'),
                ': Canvas provides a low-level drawing API, allowing developers to directly manipulate pixels. This fine-grained control can lead to more efficient rendering, especially when dealing with complex graphics or animations.'
              )
            ),
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)(
                  'strong',
                  { parentName: 'p' },
                  'Hardware Acceleration'
                ),
                ": Modern browsers often utilize hardware acceleration for canvas rendering. This means that certain operations, such as drawing on a canvas, can be offloaded to the computer's GPU (Graphics Processing Unit), leading to faster and smoother performance."
              )
            ),
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)(
                  'strong',
                  { parentName: 'p' },
                  'Optimized for Custom Graphics'
                ),
                ': When creating custom graphics or interactive visualizations, canvas allows developers to optimize rendering based on the specific requirements of the application. This can result in better performance compared to a more generic approach used by HTML editors.'
              )
            ),
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)(
                  'strong',
                  { parentName: 'p' },
                  'Direct Manipulation of Pixels'
                ),
                ': With canvas, you have direct control over each pixel on the canvas. This level of control can be crucial for certain performance-intensive applications, such as games or simulations, where fine-grained adjustments are necessary.'
              )
            ),
            (0, r.yg)(
              'li',
              { parentName: 'ul' },
              (0, r.yg)(
                'p',
                { parentName: 'li' },
                (0, r.yg)('strong', { parentName: 'p' }, 'No Excess Markup'),
                ': HTML editors often generate a significant amount of HTML markup to achieve a visually rich design. This additional markup can lead to increased page load times and, in some cases, impact performance. In contrast, canvas typically requires less code, reducing the overall file size and enhancing performance.'
              )
            )
          ),
          (0, r.yg)(
            'p',
            null,
            'Canvas provides a more customizable, responsive and consistent foundation for building performant real-time collaborative rich text editors like Google Docs.'
          ),
          (0, r.yg)('h2', { id: 'conclusion' }, 'Conclusion'),
          (0, r.yg)(
            'p',
            null,
            "It's important to note that the performance benefits of using canvas editor are most evident in scenarios where a high level of customization and dynamic graphics are required."
          ),
          (0, r.yg)(
            'p',
            null,
            'The performance of a Canvas editor is greatly influenced by the precise optimizations implemented by software developers. Fine-tuning rendering processes, minimizing redundant computations, and leveraging the inherent capabilities of web browsers collectively contribute to achieving optimal performance for a canvas editor. In essence, the role of developers in crafting a high-performance canvas editor is pivotal, as their expertise directly impacts the fluidity and efficiency of the graphical editing experience on the web.'
          ),
          (0, r.yg)(
            'p',
            null,
            'Ultimately, the choice between canvas and a HTML editor depends on the specific needs of your project. If performance is a critical factor, especially for applications with complex graphics or animations, then leveraging the capabilities of canvas editor might be a preferred option.'
          )
        );
      }
      g.isMDXComponent = !0;
    },
  },
]);
