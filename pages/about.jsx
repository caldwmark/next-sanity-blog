import BlockContent from '@sanity/block-content-to-react'
import Meta from '../components/Meta'

const about = ({ title, body }) => {
    return (
        <>
            <Meta title={title} ogPage='/about' />
            <div className='about'>
                <h2>{title}</h2>
                <BlockContent blocks={body} />
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const query = encodeURIComponent('*[ _type == "page" && title == "About" ]')
    const url = `https://8w3msx9z.api.sanity.io/v1/data/query/production?query=${query}`

    const data = await fetch(url).then(res => res.json())
    const page = data.result[0]

    if (!page) {
        return {
            notFound: true,
        }
    } else {
        return {
            props: {
                body: page.body,
                title: page.title,
            },
        }
    }
}

export default about
