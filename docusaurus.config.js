// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const owner = process.env.GITHUB_REPOSITORY_OWNER || 'YOUR_GITHUB_USERNAME';
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'oracle-db-developer-handbook';
const isUserSite = repository === `${owner}.github.io`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Oracle Data Developer Handbook',
  tagline: 'Oracle SQL, PL/SQL, DWH, ETL/ODI, Performance and Data Operations',
  favicon: 'img/favicon.ico',
  url: `https://${owner}.github.io`,
  baseUrl: isUserSite ? '/' : `/${repository}/`,
  organizationName: owner,
  projectName: repository,
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {mermaid: true},
  themes: ['@docusaurus/theme-mermaid'],
  presets: [[
    'classic',
    {
      docs: {sidebarPath: './sidebars.js', routeBasePath: '/', editUrl: undefined},
      blog: false,
      theme: {customCss: './src/css/custom.css'},
      sitemap: {changefreq: 'weekly', priority: 0.5},
    },
  ]],
  themeConfig: {
    navbar: {
      title: 'Oracle Data Developer',
      items: [
        {type:'docSidebar', sidebarId:'courseSidebar', position:'left', label:'Course'},
        {to:'/glossary', label:'Glossary', position:'left'},
        {href:`https://github.com/${owner}/${repository}`, label:'GitHub', position:'right'},
      ],
    },
    footer: {style:'dark', links:[{title:'Course',items:[{label:'Start',to:'/intro'},{label:'Glossary',to:'/glossary'}]}], copyright:`Copyright © ${new Date().getFullYear()} - Raoul's Oracle Data Developer Handbook`},
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula, additionalLanguages:['sql','bash','java']},
  },
};
export default config;
