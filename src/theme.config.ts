export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "Yw4rf",
  /** your name */
  author: "Tobigfioroni",
  /** website description */
  desc: "Rediscory the beauty of typography",
  /** your deployed domain */
  website: "https://astro-theme-typography.vercel.app/",
  /** your locale */
  locale: "en-us",
  /** theme style */
  themeStyle: 'auto',
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
      name: "twitter",
      href: "https://x.com/Yw4rf",
    },
    {
      name: "instagram",
      href: "https://instagram.com/yw4rf",
    }, 
    {
      name: "whatsapp",
      href: "https://instagram.com/yw4rf",
    }, 
    {
      name:"theme-light-dark",
      href:"",
    }
  ],
  /** your header info */
  header: {
    twitter: "@moeyua13",
  },
  /** your navigation links */
  navs: [
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
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Works",
      href: "/works",
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
       theme: 'light',
       lang: 'en',
       loading: 'lazy',
     }
  }
}

