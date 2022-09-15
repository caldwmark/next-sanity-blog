import Head from 'next/head'

const about = () => {
    return (
        <>
            <Head>
                <title>About &middot; BCP</title>
                <meta
                    name='description'
                    content='Matters of public interest for news, educational, and entertainment purposes'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='about'>
                <h1>About</h1>
                <p>
                    Matters of public interest for news, educational, and
                    entertainment purposes.
                </p>
                <h2>The Site Build</h2>
                <p>
                    Currently builting with
                    <a href='https://nextjs.org'> Next.js</a>,
                    <a href='https://www.sanity.io'> Sanity.io</a>, and
                    <a href='https://reactjs.org'> React</a>. The site is
                    servered from <a href='https://vercel.com'>Vercel</a>.
                    Though, likely soon, from Docker containers on a VPS.
                    Because, we love Docker. This is complicated stuff, people!
                    Don&apos;t be surprised if I break it a few times 😄
                </p>
                <p>
                    It is off to a good start. I have finally settled on the
                    perfect combination for me. However, there is a whole lot of
                    work left to do before this is complete. So, stay tuned!
                </p>
                <p>
                    I got the Image component working from Sanity. How awesome
                    is that?!?! I had given up on that being posible and had
                    decided it was still worth the performance ding to be able
                    to upload the image to sanity when the post is being
                    written. Like one stop shop. No hard coding anything on the
                    site just to add a post. Then I stubbled on just the right
                    video!
                </p>
                <h2>Things to Do</h2>
                <ol>
                    <li>finish the move to modular style</li>
                    <li>build the meta component</li>
                    <li>build the schema for this page on studio</li>
                    <li>build the contact page</li>
                    <li>something else.. (brain fart)</li>
                </ol>
            </div>
        </>
    )
}

export default about
