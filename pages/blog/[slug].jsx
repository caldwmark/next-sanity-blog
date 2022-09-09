// import { useState, useEffect } from 'react'
// import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import Youtube from '../../components/Youtube'

const Post = ({ title, body, youtube, image }) => {
    //console.log(image, youtube)

    //if ()

    // const [imageUrl, setImageUrl] = useState('')

    // useEffect(() => {
    //     const imgBuilder = imageUrlBuilder({
    //         projectId: '8w3msx9z',
    //         dataset: 'production',
    //     })

    //     setImageUrl(imgBuilder.image(image))
    // }, [image])

    return (
        <div className='container'>
            <h1 className='post-title'>{title}</h1>
            <div className='card card-page'>
                <Youtube embedCode={youtube} />
                {/* {<img src={imageUrl ? imageUrl : null} />} */}

                <div className='post-body'>
                    <BlockContent blocks={body} />
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext => {
    const pageSlug = pageContext.query.slug

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
                // image: post.mainImage,
                youtube: post.youtube.code,
            },
        }
    }
}

export default Post
