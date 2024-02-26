module.exports = {
  devEnv: 'true' === process.env.WEBPACK_DEV_SERVER,
  id: process.env.MEDIACMS_ID || 'mediacms-frontend',
  title: process.env.MEDIACMS_TITLE || 'MediaCMS Demo',
  url: process.env.MEDIACMS_URL || 'UNDEFINED_URL',
  api: process.env.MEDIACMS_API || 'UNDEFINED_API',
  theme: {
    mode: 'light', // Valid values: 'light', 'dark'.
    switch: {
      position: 'header', // Valid values: 'header', 'sidebar'.
    },
  },
  logo: {
    lightMode: {
      svg: './static/images/Interdisciplinary Centre for Digital Futures - CMYK.svg',
      img: './static/images/Interdisciplinary Centre for Digital Futures - CMYK.jpg',
    },
    darkMode: {
      svg: './static/images/Interdisciplinary Centre for Digital Futures - CMYK.svg',
      img: './static/images/Interdisciplinary Centre for Digital Futures - CMYK.jpg',
    },
  },
  pages: {
    latest: {
      title: 'Recent uploads',
    },
    featured: {
      title: 'Featured',
    },
    recommended: {
      title: 'Recommended',
    },
    members: {
      title: 'Members',
    },
  },
  userPages: {
    liked: {
      title: 'Liked media',
    },
    history: {
      title: 'History',
    },
  },
  taxonomies: {
    tags: {
      title: 'Tags',
    },
    categories: {
      title: 'Categories',
    },
  },
};
