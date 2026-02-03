import { Head, Html, Main, NextScript } from 'next/document';

// Bump this when you change the favicon to force browsers to load the new icon
const FAVICON_VERSION = '2';

export default function Document() {
  const q = `?v=${FAVICON_VERSION}`;
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href={`/favicon.ico${q}`} sizes='any' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={`/favicon/apple-touch-icon.png${q}`}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href={`/favicon/favicon-32x32.png${q}`}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href={`/favicon/favicon-16x16.png${q}`}
        />
        <link rel='manifest' href={`/favicon/site.webmanifest${q}`} />
        <link
          rel='mask-icon'
          href={`/favicon/safari-pinned-tab.svg${q}`}
          color='#121212'
        />
        <meta name='theme-color' content='#121212' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
