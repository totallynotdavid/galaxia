import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Galaxia',
    description: 'Colección de enlaces valiosos de Internet con sugerencias de uso práctico',
    base: '/galaxia/',
    lastUpdated: true,
    cleanUrls: true,
    ignoreDeadLinks: true,

    locales: {
        es: {
            label: 'Español',
            lang: 'es-ES',
            themeConfig: {
                nav: [{ text: 'Inicio', link: '/' }]
            }
        }
    },

    themeConfig: {
        logo: { src: '/favicon.png', alt: 'Galaxia' },
        siteTitle: 'Galaxia',

        outline: { level: [2, 3], label: 'En esta página' },

        socialLinks: [
            { icon: 'github', link: 'https://www.github.com/totallynotdavid' },
            { icon: 'twitter', link: 'https://twitter.com/totallynotdavid' }
        ],

        search: {
            provider: 'local',
            options: {
                detailedView: true
            }
        },

        footer: {
            message: 'Dumb Ways to Write',
            copyright: '© David Duran'
        },

        editLink: {
            pattern: 'https://github.com/totallynotdavid/galaxia/edit/master/docs/:path',
            text: 'Editar en GitHub'
        }
    }
})
