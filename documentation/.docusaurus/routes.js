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
    component: ComponentCreator('/document-editor/docs', '174'),
    routes: [
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
        path: '/document-editor/docs/category/get-started',
        component: ComponentCreator(
          '/document-editor/docs/category/get-started',
          '5b7'
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
        path: '/document-editor/docs/category/release',
        component: ComponentCreator(
          '/document-editor/docs/category/release',
          'de3'
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
        path: '/document-editor/docs/category/why-we-use-canvas',
        component: ComponentCreator(
          '/document-editor/docs/category/why-we-use-canvas',
          '403'
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
