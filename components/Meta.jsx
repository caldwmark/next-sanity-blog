import Head from 'next/head'

const Meta = ({ title, desc, robots, image, ogPage, slug }) => {
    let ogUrl = 'https://www.bearcountrypublishing.com'
    let ogType = 'website'
    let ogImage

    if (!image)
        ogImage = 'https://www.bearcountrypublishing.com/images/BCP_Logo.webp'
    else ogImage = image

    const defaultTitle = 'Bear Country Publishing'
    !title ? (title = defaultTitle) : (title = `${title} \xB7 BCP`)

    const defaultDesc =
        'Matters of public interest for news, educational, ansd entertainment purposes'
    !desc ? (desc = defaultDesc) : 0

    let ogImageType = 'image/webp'

    if (slug) {
        ogUrl = ogUrl + '/blog/' + slug
        ogType = 'article'
    } else if (ogPage) {
        ogUrl = ogUrl + ogPage
    }

    !robots ? (robots = 'index, follow') : 0

    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={desc} />
            <meta name='robots' content={robots} />
            <meta property='og:title' content={title} />
            <meta property='og:type' content={ogType} />
            <meta property='og:url' content={ogUrl} />
            <meta property='og:image' content={ogImage} />
            <meta property='og:image:type' content={ogImageType} />
            <meta property='og:image:width' content='420' />
            <meta property='og:image:height' content='75' />
            <meta property='og:image:alt' content='video thumbnail' />
            <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        </Head>
    )
}

export default Meta
