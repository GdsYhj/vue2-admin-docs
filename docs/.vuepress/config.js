module.exports = {
  base:'/docs/',
  themeConfig: {
    logo: '/assets/img/hero.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: 'auto'
  }
}