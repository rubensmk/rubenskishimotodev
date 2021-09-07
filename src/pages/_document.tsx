import Document, { Html, Main, Head, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="/static/favicon.ico" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet" />

                    <meta property="og:url" content="https://www.rubenskishimoto.dev/" />
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:title"
                        content="{rubenskishimoto.dev}"
                    />
                    <meta
                        property="og:description"
                        content="Site Portfólio"
                    />
                    <meta property="og:image" content={"https://i.ibb.co/7nGWq71/portfolio-1.png"} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}