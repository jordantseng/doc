// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const organizationName = 'jordantseng';
const projectName = 'frontendwiz';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FrontendWiz',
  tagline: 'Dinosaurs are cool',

  // Set the production url of your site here
  url: 'https://frontendwiz.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      algolia: {
        appId: 'Y4F1Y54M1P',
        apiKey: 'd8e348da984f4a67eb60bac26a1511e7',
        indexName: 'netlify_9f5c12af-6b1e-4ded-839e-c7fdaa7c77e1_main_all',
        contextualSearch: true,
        selector: 'div#',
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'FrontendWiz',
        items: [
          {
            type: 'doc',
            docId: 'README',
            position: 'left',
            label: 'Wizard book',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Wizard book',
                to: '/',
              },
            ],
          },
          {
            title: 'John',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/chuan-chih-cheng/',
              },
              {
                label: 'Github',
                href: 'https://github.com/OInVein',
              },
            ],
          },
          {
            title: 'Jordan',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/jordan-tseng/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/jordantseng',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FrontendWiz, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
