const canonicalUrl = 'https://zainchohan.dev';
const metaImage = '/images/zain-new.png';
const metaDescription =
  'Front End Developer specializing in React, Next.js, and TypeScript. I build fast, accessible, and responsive user interfaces.';

const defaultSEOConfig = {
  defaultTitle: 'Zain Chohan - Front End Developer',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Zain Chohan - Front End Developer',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'Zain Chohan portfolio og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'Zain Chohan portfolio og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'Zain Chohan portfolio og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'zainchohan6198',
  },
  twitter: {
    handle: '@zainchohan6198',
    site: '@zainchohan6198',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
