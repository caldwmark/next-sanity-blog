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
            <div className='about'>
                <h2>About</h2>
                <p>
                    Matters of public interest for news, educational, and
                    entertainment purposes.
                </p>
                <h3>About the Website</h3>
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
                    My to do list includes: addressing the meta. It will
                    probably be the next react component to build. Then work on
                    something more noticeable or interactive.
                </p>
                <p>
                    The hardest ding we took at lighthouse was on performance.
                    Seeing yellow means we should work on that issue soon, too.
                    We want 100s across the board, if not we at least want all
                    green.
                </p>
                <p>
                    To accomplish that.. Maybe learn sanity image urlBuilder or
                    probably better, next.js sanity image. The later letting us
                    actually use the Image tag from the cdn. Does that mean blur
                    loading and lazy images too?!?!
                </p>
            </div>
        </>
    )
}

export default about
