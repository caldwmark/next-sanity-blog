import Resource from '../components/Resource'
import Meta from '../components/Meta'

const Resources = ({ resources }) => {
    return (
        <>
            <Meta title='Resources' ogPage='/resources' />
            <div className='note'></div>
            <h2 className='top-header'>Resources</h2>
            <div className='resources'>
                {resources.length ? (
                    resources.map((p, index) => (
                        <Resource key={index} resource={p} />
                    ))
                ) : (
                    <>No Resources Yet</>
                )}
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const query = encodeURIComponent('*[ _type == "resource" ]')
    const url = `https://8w3msx9z.api.sanity.io/v1/data/query/production?query=${query}`

    const p = await fetch(url).then(res => res.json())

    if (!p.result || !p.result.length) {
        return {
            props: {
                resources: [],
            },
        }
    } else {
        return {
            props: {
                resources: p.result,
            },
        }
    }
}

// export const getStaticProps = async () => {
//     const query = encodeURIComponent('*[ _type == "resource"]')
//     const url = `https://8w3msx9z.api.sanity.io/v1/data/query/production?query=${query}`

//     const data = await fetch(url).then(res => res.json())
//     const resource = data.result[0]

//     if (!resource) {
//         return {
//             notFound: true,
//         }
//     } else {
//         return {
//             props: {
//                 title: resource.title,
//                 desc: resource.desc,
//                 url: resource.url,
//             },
//         }
//     }
// }

export default Resources
