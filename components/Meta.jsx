import Head from 'next/head'

const Meta = ({ title, desc }) => {
    const defaultTitle = 'Bear Country Publishing'
    const defaultDesc =
        'Matters of public interest for news, educational, ansd entertainment purposes'

    !title ? (title = defaultTitle) : (title = `${title} \xB7 BCP`)
    !desc ? (desc = defaultDesc) : 0

    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={desc} />
            <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        </Head>
    )
}

export default Meta
