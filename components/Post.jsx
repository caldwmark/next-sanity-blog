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
            <div className='card-main'>
                <img
                    src={post.mainImage}
                    alt='video thumbnail'
                    width='400'
                    height='225'
                />
                <div className='card'>
                    <h3 className='post-title'>{post.title}</h3>
                    <div className='post-date'>{date}</div>
                </div>
            </div>
        </Link>
    )
}

export default Post
