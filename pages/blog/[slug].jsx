import BlockContent from '@sanity/block-content-to-react'

import Youtube from '../../components/Youtube'
import Meta from '../../components/Meta'
import style from '../../styles/slug.module.css'

const Post = ({ title, body, youtube, image, slug }) => {
    let desc = body[0].children[0].text

    desc.length < 90 ? (desc = desc + ' ' + body[1].children[0].text) : 0
    desc.length < 90 ? (desc = desc + ' ' + body[2].children[0].text) : 0

    desc.length > 100 ? (desc = desc.substring(0, 99) + '...') : 0

    return (
        <>
            <Meta
                title={title}
                desc={desc}
                robots='index, nofollow'
                image={image}
                slug={slug}
            />
            <div className={style.container}>
                <h2 className={style.title}>{title}</h2>
                <div className={style.card}>
                    <Youtube embedCode={youtube} />
                    <div className={style.body}>
                        <BlockContent blocks={body} />
                    </div>
                </div>
            </div>
        </>
    )
}

export const getStaticPaths = async () => {
    const query = encodeURIComponent(`*[ _type == "post" ]`)
    const url = `https://8w3msx9z.api.sanity.io/v1/data/query/production?query=${query}`
    const data = await fetch(url).then(res => res.json())

    const paths = data.result.map(post => {
        return {
            params: {
                slug: post.slug.current,
            },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async context => {
    const pageSlug = context.params.slug

    if (!pageSlug) {
        return {
            notFound: true,
        }
    }

    const query = encodeURIComponent(
        `*[ _type == "post" && slug.current == "${pageSlug}" ]`
    )
    const url = `https://8w3msx9z.api.sanity.io/v1/data/query/production?query=${query}`

    const result = await fetch(url).then(res => res.json())
    const post = result.result[0]

    if (!post) {
        return {
            notFound: true,
        }
    } else {
        return {
            props: {
                body: post.body,
                title: post.title,
                youtube: post.youtube.code,
                image: post.mainImage,
                slug: post.slug.current,
            },
        }
    }
}

export default Post
