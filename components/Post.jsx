import Link from 'next/link'
import Image from 'next/image'

import style from '../styles/Post.module.css'

const Post = ({ post }) => {
    const date = new Date(post.publishedAt).toLocaleDateString('en-us', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })

    // console.log(post)

    return (
        <Link href={`/blog/${post.slug.current}`}>
            <div className={style.card}>
                <Image
                    src={`${post.mainImage}`}
                    alt='video thumbnail'
                    width='500'
                    height='281'
                />
                <div className={style.info}>
                    <h3 className={style.title}>{post.title}</h3>
                    <div className={style.date}>{date}</div>
                </div>
            </div>
        </Link>
    )
}

export default Post
