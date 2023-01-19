// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Grayson\'s Docs', // 標題
  tagline: '這個人很懶，甚麼都沒有留下',
  url: 'https://grayson-docs.pages.dev', // 主機站名，先使用 cloudflare pages
  baseUrl: '/', // 預設路徑
  onBrokenLinks: 'throw', // 檢測到無效連結時
  onBrokenMarkdownLinks: 'warn', // 檢測到無效 markdown 連結時
  favicon: 'img/favicon.ico', // 網站圖標

  // GitHub pages deployment config. 不使用 docusaurus deploy 就不需要
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Grayson Lin', // Usually your GitHub org/user name.
  projectName: 'Grayson-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // 語系
  i18n: {
    defaultLocale: 'zh-TW',
    locales: ['zh-TW'],
  },
  plugins: ['docusaurus-plugin-sass'], // 改使用 scss

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // 暫時不使用編輯此頁
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // 顯示最後更新日期、作者
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // 暫時不使用編輯此頁
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'), // 改使用 scss
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 顏色模式
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true, // 是否使用系統預設模式
      },
      navbar: {
        title: 'Grayson\'s Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '技術筆記',
          },
          {to: '/blog', label: '日常隨筆', position: 'left'},
          {to: '/readme', label: '網站說明', position: 'left'},
          {
            href: 'https://github.com/GavinLin512',
            label: 'GitHub',
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
                label: '技術筆記',
                to: '/docs/intro',
              },
            ],
          },
          /*{
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },*/
          {
            title: 'More',
            items: [
              {
                label: '日常隨筆',
                to: '/blog',
              },
              {
                label: '網站說明',
                to: '/readme',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/GavinLin512',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Grayson\'s Docs. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
