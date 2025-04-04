import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/document-editor/__docusaurus/debug',
    component: ComponentCreator('/document-editor/__docusaurus/debug', '0fe'),
    exact: true,
  },
  {
    path: '/document-editor/__docusaurus/debug/config',
    component: ComponentCreator(
      '/document-editor/__docusaurus/debug/config',
      'bc8'
    ),
    exact: true,
  },
  {
    path: '/document-editor/__docusaurus/debug/content',
    component: ComponentCreator(
      '/document-editor/__docusaurus/debug/content',
      '6d8'
    ),
    exact: true,
  },
  {
    path: '/document-editor/__docusaurus/debug/globalData',
    component: ComponentCreator(
      '/document-editor/__docusaurus/debug/globalData',
      '6ba'
    ),
    exact: true,
  },
  {
    path: '/document-editor/__docusaurus/debug/metadata',
    component: ComponentCreator(
      '/document-editor/__docusaurus/debug/metadata',
      'ad4'
    ),
    exact: true,
  },
  {
    path: '/document-editor/__docusaurus/debug/registry',
    component: ComponentCreator(
      '/document-editor/__docusaurus/debug/registry',
      '7df'
    ),
    exact: true,
  },
  {
    path: '/document-editor/__docusaurus/debug/routes',
    component: ComponentCreator(
      '/document-editor/__docusaurus/debug/routes',
      'ac8'
    ),
    exact: true,
  },
  {
    path: '/document-editor/markdown-page',
    component: ComponentCreator('/document-editor/markdown-page', 'ec1'),
    exact: true,
  },
  {
    path: '/document-editor/docs',
    component: ComponentCreator('/document-editor/docs', '3ee'),
    routes: [
      {
        path: '/document-editor/docs/angular/contributors/',
        component: ComponentCreator(
          '/document-editor/docs/angular/contributors/',
          '454'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/angular/contributors/code-of-conduct',
        component: ComponentCreator(
          '/document-editor/docs/angular/contributors/code-of-conduct',
          'b15'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/angular/contributors/how-to-contribute',
        component: ComponentCreator(
          '/document-editor/docs/angular/contributors/how-to-contribute',
          'e9f'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/angular/Get-started/Installation',
        component: ComponentCreator(
          '/document-editor/docs/angular/Get-started/Installation',
          '104'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/angular/Get-started/quickstart',
        component: ComponentCreator(
          '/document-editor/docs/angular/Get-started/quickstart',
          'd09'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/angular/references/dom-event',
        component: ComponentCreator(
          '/document-editor/docs/angular/references/dom-event',
          '662'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/angular/references/toolbar-option',
        component: ComponentCreator(
          '/document-editor/docs/angular/references/toolbar-option',
          'df5'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/angular/release/change-logs',
        component: ComponentCreator(
          '/document-editor/docs/angular/release/change-logs',
          'bf7'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/angular/release/release-notes',
        component: ComponentCreator(
          '/document-editor/docs/angular/release/release-notes',
          '609'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/angular/tutorial-basics/customized-style',
        component: ComponentCreator(
          '/document-editor/docs/angular/tutorial-basics/customized-style',
          '43b'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/angular/tutorial-basics/customized-tool',
        component: ComponentCreator(
          '/document-editor/docs/angular/tutorial-basics/customized-tool',
          'b38'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/angular/tutorial-basics/dom-handle',
        component: ComponentCreator(
          '/document-editor/docs/angular/tutorial-basics/dom-handle',
          '09d'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/angular/what-is-document-editor',
        component: ComponentCreator(
          '/document-editor/docs/angular/what-is-document-editor',
          'fe2'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/angular/Why-we-use-canvas/',
        component: ComponentCreator(
          '/document-editor/docs/angular/Why-we-use-canvas/',
          'ece'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/category/contribution-guide',
        component: ComponentCreator(
          '/document-editor/docs/category/contribution-guide',
          'af4'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/category/contribution-guide-1',
        component: ComponentCreator(
          '/document-editor/docs/category/contribution-guide-1',
          '4f2'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/category/contribution-guide-2',
        component: ComponentCreator(
          '/document-editor/docs/category/contribution-guide-2',
          '03f'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/category/get-started',
        component: ComponentCreator(
          '/document-editor/docs/category/get-started',
          '5b7'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/category/get-started-1',
        component: ComponentCreator(
          '/document-editor/docs/category/get-started-1',
          'c15'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/category/get-started-2',
        component: ComponentCreator(
          '/document-editor/docs/category/get-started-2',
          'ca4'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/category/references',
        component: ComponentCreator(
          '/document-editor/docs/category/references',
          'ab0'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/category/references-1',
        component: ComponentCreator(
          '/document-editor/docs/category/references-1',
          'a1b'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/category/references-2',
        component: ComponentCreator(
          '/document-editor/docs/category/references-2',
          '629'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/category/release',
        component: ComponentCreator(
          '/document-editor/docs/category/release',
          'de3'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/category/release-1',
        component: ComponentCreator(
          '/document-editor/docs/category/release-1',
          'fb6'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/category/release-2',
        component: ComponentCreator(
          '/document-editor/docs/category/release-2',
          '6d1'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/category/tutorials',
        component: ComponentCreator(
          '/document-editor/docs/category/tutorials',
          '66a'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/category/tutorials-1',
        component: ComponentCreator(
          '/document-editor/docs/category/tutorials-1',
          '9b8'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/category/tutorials-2',
        component: ComponentCreator(
          '/document-editor/docs/category/tutorials-2',
          '997'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/category/why-we-use-canvas',
        component: ComponentCreator(
          '/document-editor/docs/category/why-we-use-canvas',
          '403'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/category/why-we-use-canvas-1',
        component: ComponentCreator(
          '/document-editor/docs/category/why-we-use-canvas-1',
          '693'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/category/why-we-use-canvas-2',
        component: ComponentCreator(
          '/document-editor/docs/category/why-we-use-canvas-2',
          '216'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/contributors/',
        component: ComponentCreator(
          '/document-editor/docs/contributors/',
          '392'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/contributors/code-of-conduct',
        component: ComponentCreator(
          '/document-editor/docs/contributors/code-of-conduct',
          '69f'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/contributors/how-to-contribute',
        component: ComponentCreator(
          '/document-editor/docs/contributors/how-to-contribute',
          '695'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/Get-started/Installation',
        component: ComponentCreator(
          '/document-editor/docs/Get-started/Installation',
          '00d'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/Get-started/quickstart',
        component: ComponentCreator(
          '/document-editor/docs/Get-started/quickstart',
          '0bb'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/react/contributors/',
        component: ComponentCreator(
          '/document-editor/docs/react/contributors/',
          '118'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/react/contributors/code-of-conduct',
        component: ComponentCreator(
          '/document-editor/docs/react/contributors/code-of-conduct',
          '541'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/react/contributors/how-to-contribute',
        component: ComponentCreator(
          '/document-editor/docs/react/contributors/how-to-contribute',
          '27b'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/react/Get-started/Installation',
        component: ComponentCreator(
          '/document-editor/docs/react/Get-started/Installation',
          '3f8'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/react/Get-started/quickstart',
        component: ComponentCreator(
          '/document-editor/docs/react/Get-started/quickstart',
          'e7b'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/react/references/dom-event',
        component: ComponentCreator(
          '/document-editor/docs/react/references/dom-event',
          '575'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/react/references/toolbar-option',
        component: ComponentCreator(
          '/document-editor/docs/react/references/toolbar-option',
          'bd4'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/react/release/change-logs',
        component: ComponentCreator(
          '/document-editor/docs/react/release/change-logs',
          '48e'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/react/release/release-notes',
        component: ComponentCreator(
          '/document-editor/docs/react/release/release-notes',
          'd1d'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/react/tutorial-basics/customized-style',
        component: ComponentCreator(
          '/document-editor/docs/react/tutorial-basics/customized-style',
          '67c'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/react/tutorial-basics/customized-tool',
        component: ComponentCreator(
          '/document-editor/docs/react/tutorial-basics/customized-tool',
          'f3b'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/react/tutorial-basics/dom-handle',
        component: ComponentCreator(
          '/document-editor/docs/react/tutorial-basics/dom-handle',
          'f64'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/react/what-is-document-editor',
        component: ComponentCreator(
          '/document-editor/docs/react/what-is-document-editor',
          'ffc'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/react/Why-we-use-canvas/',
        component: ComponentCreator(
          '/document-editor/docs/react/Why-we-use-canvas/',
          '967'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/references/dom-event',
        component: ComponentCreator(
          '/document-editor/docs/references/dom-event',
          'cf2'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/references/toolbar-option',
        component: ComponentCreator(
          '/document-editor/docs/references/toolbar-option',
          'c7d'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/release/change-logs',
        component: ComponentCreator(
          '/document-editor/docs/release/change-logs',
          '965'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/release/release-notes',
        component: ComponentCreator(
          '/document-editor/docs/release/release-notes',
          'de4'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/tutorial-basics/customized-style',
        component: ComponentCreator(
          '/document-editor/docs/tutorial-basics/customized-style',
          '02e'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/tutorial-basics/customized-tool',
        component: ComponentCreator(
          '/document-editor/docs/tutorial-basics/customized-tool',
          '18b'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/tutorial-basics/dom-handle',
        component: ComponentCreator(
          '/document-editor/docs/tutorial-basics/dom-handle',
          '954'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/what-is-document-editor',
        component: ComponentCreator(
          '/document-editor/docs/what-is-document-editor',
          'd76'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
      {
        path: '/document-editor/docs/Why-we-use-canvas/',
        component: ComponentCreator(
          '/document-editor/docs/Why-we-use-canvas/',
          'af9'
        ),
        exact: true,
        sidebar: 'tutorialSidebar',
      },
    ],
  },
  {
    path: '/document-editor/',
    component: ComponentCreator('/document-editor/', 'b94'),
    exact: true,
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
