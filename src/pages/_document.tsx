import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="theme-color" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="I write blogs on popular things" />
                <link rel="canonical" href="http://localhost:3000/moti-dungri"/>
            </Head>
            <title>The Blogging Buzz</title>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}