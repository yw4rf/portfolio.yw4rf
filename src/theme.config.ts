export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "大胆に始めよ",
  /** your name */
  author: "Yw4rf",
  /** website description */
  desc: "Hi, I'm Yw4rf a Pentester, Ethical Hacker and Web Developer based in Argentina",
  /** your deployed domain */
  website: "https://yw4rf.vercel.app",
  /** your locale */
  locale: "en-us",
  /** theme style */
  themeStyle: "dark",
  /** your socials */
  socials: [
    {
      name: "github",
      href: "https://github.com/Yw4rf",
    },
    {
      name: "linkedin",
      href: "https://linkedin.com/tobigfioroni",
    },
    {
      name: "telegram",
      href: "https://t.me/yw4rf",
    }, 
    {
      name: "twitter",
      href: "https://x.com/yw4rf",
    },
  ],
  /** your header info */
  header: {
    twitter: "@Yw4rf",
  },
  /** your navigation links */
  navs: [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Works",
      href: "/works",
    },
    {
      name: "Posts",
      href: "/posts/page/1",
    },
    {
      name: "Archive",
      href: "/archive",
    },
    {
      name: "Tags",
      href: "/categories"
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    { name: "胡适", path: "hu-shi" },
  ],
  /** your comment provider */
  comments: {
    //disqus: {
      //shortname: "yw4rf",
    //},
    giscus: {
       repo: 'yw4rf/yw4rf-blog',
       repoId: 'R_kgDOMjl5Cw',
       category: 'General',
       categoryId: 'DIC_kwDOMjl5C84ChpKi',
       mapping: 'title',
       strict: '0',
       reactionsEnabled: '1',
       emitMetadata: '1',
       inputPosition: 'top',
       theme: 'dark',
       lang: 'en',
       loading: 'lazy',
     }
  }
}