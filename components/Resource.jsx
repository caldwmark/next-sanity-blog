import style from '../styles/Resource.module.css'

const Resource = ({ resource }) => {
    if (resource.desc.length > 135)
        resource.desc = resource.desc.slice(0, 135) + '...'

    return (
        <div className={style.card}>
            <div className={style.info}>
                <h3 className={style.title}>{resource.title}</h3>
                <p className={style.desc}>{resource.desc}</p>
                <p className={style.link}>
                    <a href={resource.url}>{resource.url}</a>
                </p>
            </div>
        </div>
    )
}

export default Resource
