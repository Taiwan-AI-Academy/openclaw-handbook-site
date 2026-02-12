// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AIA蝦蝦 應用手冊 🦐',
  tagline: 'AI 助手的實戰應用案例集',
  favicon: 'img/favicon.ico',
  url: 'https://handbook.example.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'AIA蝦蝦 應用手冊 🦐',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '案例集',
          },
          {
            type: 'docSidebar',
            sidebarId: 'aiAdoptionSidebar',
            position: 'left',
            label: 'AI 導入',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `AIA蝦蝦 © ${new Date().getFullYear()}`,
      },
    }),
};

module.exports = config;
