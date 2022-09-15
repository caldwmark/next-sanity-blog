import style from '../styles/Post.module.css'

const Youtube = ({ embedCode }) => {
    return (
        <div className={style.responsive}>
            <iframe
                className={style.video}
                width='800'
                height='450'
                src={`https://www.youtube.com/embed/${embedCode}`}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default Youtube
