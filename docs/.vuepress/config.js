module.exports = {
  // base用来配置部署github后的文件夹
  // base:'/docs/',
  // 文章的标题
  title: 'Today',
  description: '王深技术积累',
  head: [ // 注入到当前页面的 <head> 中的标签
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'icon', href: '/images/shen.png' }],
    // ['link', { rel: 'manifest', href: '/images/shen.png' }],
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
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    author: '王深',
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/recoluan' },
        { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
      ],
      nav: [
        { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
      ],
      // 评论配置
      vssueConfig: {
        platform: 'github',
        locale: 'zh', // 语言设置
        owner: 'jasonwang911',
        repo: 'Jasonwang911.github.io',
        clientId: '6f519513a68d6aa831db',
        clientSecret: '9e086e75cd13a600a7ffe639f21b38bed39d8b14',
      }
    },
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
      {
        "text": "小工具",
        "icon": "reco-api",
        "items": [
          {
            "text": "图片压缩",
            "link": "https://tinypng.com/",
            "icon": "reco-accessible-icon"
          },
          {
            "text": "图片裁剪",
            "link": "https://www.gaitubao.com/",
            "icon": "reco-accessible-icon"
          }
        ]
      },
      {
        "text": "联系我",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Jasonwang911",
            "icon": "reco-github"
          }
        ]
      }
    ],
    // 导航栏的配置，自动生成
    sidebar: 'auto',
    // 404 腾讯公益
    noFoundPageByTencent: true,
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
    // 背景飘落动画
    ["sakura", {
      num: 30,  // 默认数量
      show: true,
      zIndex: 2,
      img: {
        replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: '/images/sakura.png'     // 绝对路径
      }
    }],
    // 返回顶部
    ['go-top'],
    // GitHub 评论
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
    // 看板娘插件
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',{
        theme: [
          'miku', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'blackCat', 'z16'
        ],
        clean: false,
        messages: { 
          welcome: '欢迎来到我的博客', home: '心里的花，我想要带你回家。', theme: '好吧，希望你能喜欢我的其他小伙伴。', close: '你不喜欢我了吗？痴痴地望着你。' 
        },
        messageStyle: { 
          right: '68px', bottom: '290px' 
        },
        width: 250,
        height: 320
      }
    ],
    // 公告插件
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      width: '300px', // 默认 260px
      title: '消息提示',
      body: [
        {
          type: 'title',
          content: '小站正在建设中 🎉🎉🎉',
          style: 'text-aligin: center;'
        }
      ],
      footer: [
        {
          type: 'button',
          text: '打赏',
          link: '/foreign/reward'
        }
      ]
    }],
    // 打赏页面插件
    [
      'vuepress-plugin-sponsor',
      {
        theme: 'simple',
        alipay: '/images/rvcode/qrcode-alipay.jpg',
        wechat: '/images/rvcode/qrcode-wechat.jpg',
        qq: '/images/rvcode/qrcode-qq.jpg',
        duration: 2000
      }
    ],
    // 光标插件
    ['cursor-effects']
  ],
  // 备案信息
   // 备案
   record: 'MIT Licensed | Copyright © 2022-present',
  //  recordLink: 'ICP 备案指向链接',
  //  cyberSecurityRecord: '公安部备案文案',
  //  cyberSecurityLink: '公安部备案指向链接',
   // 项目开始时间，只填写年份
   startYear: '2017'
}