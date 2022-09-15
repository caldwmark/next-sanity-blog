import Head from 'next/head'

const documents = () => {
    return (
        <>
            <Head>
                <title>Documents &middot; BCP</title>
                <meta
                    name='description'
                    content='Matters of public interest for news, educational, and entertainment purposes'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='docs'>
                <h1>Documents</h1>
                <p>This is a placeholder for links to future documents</p>
            </div>
        </>
    )
}

export default documents
