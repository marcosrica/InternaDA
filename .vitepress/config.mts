import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "InternaDA",
  description: "Documentación interna de los servicios digitales de DA-ETSISI",
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
          collapsed: false,   // muestra la sección expandida
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
        { text: 'Frameworks', items: [{ text: 'Intro', link: '/frameworks/intro' }] }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/da-etsisi' }
    ]
  }
})
