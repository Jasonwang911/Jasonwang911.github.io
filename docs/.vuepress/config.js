module.exports = {
  // base用来配置部署github后的文件夹
  // base:'/docs/',
  // 文章的标题
  title: 'Today',
  description: '王深技术积累',
  head: [ // 注入到当前页面的 <head> 中的标签
    ['link', { rel: 'icon', href: '/images/shen.png' }],
    ['link', { rel: 'manifest', href: '/images/shen.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/shen.png' }],
  ],
  serviceWorker: true, // 是否开启 PWA
  configureWebpack: {
    resolve: {
      alias: {
        '@': '../',
        '@img': '../.vuepress/public'
      }
    }
  },
  // 文章的介绍
  description: 'Today, have you studied yet?',
  // 主题的配置，核心配置
  themeConfig: {
    logo: '/images/shen.png',
    // 导航的配置
    nav: [
      {text: '首页', link: '/'},
      // 可下拉的导航
      {
        text: 'webpack',
        items: [
          {text: 'webpack简介', link: '/webpack/index'},
          {text: '从0搭建vue', link: '/webpack/vue'},
        ],
      },
      {text: 'mapbox', link: '/mapbox/index'},
      {text: 'travis', link: '/travis/'},
    ],
    // 导航栏的配置，自动生成
    sidebar: 'auto',
    // 显示最后更新时间
    lastUpdated: '最后更新时间',
  },
  // Markdown的配置，包括Markdown的拓展
  markdown: {
    // 代码块显示行号
    lineNumbers: true,
  },
  // 配置插件
  plugins: [
    [
      '@vssue/vuepress-plugin-vssue',
      {
        // 设置 `platform` 而不是 `api`
        platform: 'github',
        locale: 'zh', // 语言设置
        // 其他的 Vssue 配置
        owner: 'jasonwang911', // github账户名称，登陆名字
        repo: 'Jasonwang911.github.io', // Github博客仓库，仓库地址，不加要https
        clientId: '6f519513a68d6aa831db', // github上面申请的clientId
        clientSecret: '9e086e75cd13a600a7ffe639f21b38bed39d8b14', // github上面申请的clientSecret
      },
    ],
  ]
}