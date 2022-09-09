import Head from 'next/head'

const about = () => {
    return (
        <>
            <Head>
                <title>About | BCP</title>
                <meta
                    name='description'
                    content='Matters of public interest for news, educational, and entertainment purposes'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='post'>
                <h2>About</h2>
                <p>
                    Matters of public interest for news, educational, and
                    entertainment purposes.
                </p>
                <h3>About the Website</h3>
                <p>
                    Currently builting with Next.js, Sanity.io and React. The
                    site is servered from Docker containers on a VPS at
                    vpsservers.
                </p>
                <p>
                    This is complicated stuff, people! Don&apos;t be surprised
                    if I break it a few times 😄
                </p>
            </div>
        </>
    )
}

export default about
