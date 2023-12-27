import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Google Tag Manager */}
                {/* <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-CWFK9LPJWP"
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-CWFK9LPJWP');
              `
                    }}
                ></script> */}
                <meta name="theme-color" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="I write blogs on popular things" />
                <link rel="canonical" href="http://localhost:3000/moti-dungri" />
            </Head>
            <title>The Blogging Buzz</title>
            <body>
                <Main />
                <NextScript />
                {/* Google Tag Manager */}
                <Script
                    strategy="lazyOnload"
                    src={`https://www.googletagmanager.com/gtag/js?id=G-CWFK9LPJWP`}
                />
                <Script strategy="lazyOnload" id="ga-script">
                    {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CWFK9LPJWP');
            `}
                </Script>
            </body>
        </Html>
    )
}