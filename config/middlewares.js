module.exports = [
  "strapi::errors",
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'mrh-strapi-blog.nyc3.digitaloceanspaces.com',
            'mrh-strapi-blog.nyc3.cdn.digitaloceanspaces.com',
            '*.digitaloceanspaces.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'mrh-strapi-blog.nyc3.digitaloceanspaces.com',
            'mrh-strapi-blog.nyc3.cdn.digitaloceanspaces.com',
            '*.digitaloceanspaces.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:1337",
        "http://localhost:3001",
        "http://127.0.0.1:1337",
        "http://127.0.0.1:3001",
        "https://personal-blog-frontend-two.vercel.app",
        "https://personal-blog-frontend-hendemics-projects.vercel.app",
        "https://dopelife.life",
        "https://www.dopelife.life",
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      credentials: true,
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
