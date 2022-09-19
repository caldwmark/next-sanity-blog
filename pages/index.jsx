import { useState, useEffect } from 'react'
import Head from 'next/head'
import imageUrlBuilder from '@sanity/image-url'
import Post from '../components/Post'

export default function Home({ posts }) {
    const [mappedPosts, setMappedPosts] = useState([])

    useEffect(() => {
        if (posts.length) {
            const imgBuilder = imageUrlBuilder({
                projectId: '8w3msx9z',
                dataset: 'production',
            })

            setMappedPosts(
                posts.map(p => {
                    return {
                        ...p,
                        mainImage: imgBuilder
                            .image(p.mainImage)
                            .width(500)
                            .height(281),
                    }
                })
            )
        } else {
            setMappedPosts([])
        }
    }, [posts])

    return (
        <>
            <Head>
                <title>Bear Country Publishing</title>
                <meta
                    name='description'
                    content='Matters of public interest for news, educational, and entertainment purposes'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='note'>
                Pleaase be aware that this site is still being actively
                developed. You could find a few bugs or glitches as things
                change. With that said, enjoy the site.
            </div>
            <div className='posts'>
                {mappedPosts.length ? (
                    mappedPosts.map((p, index) => <Post key={index} post={p} />)
                ) : (
                    <>No Posts Yet</>
                )}
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const query = encodeURIComponent(
        '*[ _type == "post" ] | order(priority desc, publishedAt desc)'
    )
    const url = `https://8w3msx9z.api.sanity.io/v1/data/query/production?query=${query}`

    const p = await fetch(url).then(res => res.json())

    if (!p.result || !p.result.length) {
        return {
            props: {
                posts: [],
            },
        }
    } else {
        return {
            props: {
                posts: p.result,
            },
        }
    }
}
