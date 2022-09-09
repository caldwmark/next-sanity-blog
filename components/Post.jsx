import Link from 'next/link'

const Post = ({ post }) => {
    const date = new Date(post.publishedAt).toLocaleDateString('en-us', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })

    return (
        <Link href={`/blog/${post.slug.current}`}>
            <div className='card card-main'>
                <img src={post.mainImage} alt='' />
                <h3>{post.title}</h3>
                <div className='post-date'>{date}</div>
            </div>
        </Link>
    )
}

export default Post
