import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "InternaDA",
  description: "Documentación interna de los servicios digitales de DA-ETSISI",
  
  head: [
    ['style', {}, `
      .vp-doc p, .vp-doc li { text-align: justify; }
    `]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Servicios', link: '/servicios/intro' },
      { text: 'Frameworks', link: '/frameworks/intro' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: {
      '/servicios/': [
        {
          text: 'Servicios',
          items: [
            { text: 'Introducción', link: '/servicios/intro' }
          ]
        },
        {
          text: 'MejoraDA',
          collapsed: false,
          items: [
            { text: 'Inicio', link: '/servicios/mejorada/index' },
            { text: 'Guía de uso', link: '/servicios/mejorada/guia-uso' }
          ]
        },
        {
          text: 'Wordpress',
          collapsed: false,
          items: [
            { text: 'Inicio', link: '/servicios/wordpress/' },
            { text: 'Instalación', link: '/servicios/wordpress/instalacion' }
          ]
        },
      ],
      '/frameworks/': [
        { 
          text: 'Frameworks', 
          items: [{ text: 'Intro', link: '/frameworks/intro' }] 
        },
        {
          text: 'VueJS',
          collapsed: false,
          items: [
            { text: 'Inicio', link: '/frameworks/vuejs' },
            { text: 'Creación y uso de componentes', link: '/frameworks/vuejs/abstraccion-componentes' }
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/da-etsisi' }
    ]
  }
})
