import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '笔记',
    items: [{ text: '示例', link: '/notes/demo/README.md' }]
  },
  {
    icon: '/icon/code.svg',
    text: '计算机',
    items: [
        {
            icon: 'fa6-solid:computer',
            text: '计算机基础',
            items: [
                {text: '数据结构', link: '/cs/cs-basic/data-structure/'},
                {text: '数据库系统', link: '/cs/cs-basic/database-system/'},
                {text: '操作系统', link: '/cs/cs-basic/operating-system/'},
            ]
        },
        {
          icon: 'mdi:tools', 
          text: '必学工具', 
          items:[
            {text: 'markdown', link: '/cs/tools-must/markdown/'},
          ]
        },
    ]
},
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Tags', link: '/en/blog/tags/' },
  { text: 'Archives', link: '/en/blog/archives/' },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/en/notes/demo/README.md' }]
  },
])

