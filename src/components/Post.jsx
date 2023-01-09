import styles from './Post.module.css'
export function Post(){
    return(
        <article className={styles.post}>
            <header>
                    <div className={styles.author}>
                    <img className={styles.avatar}  src="https://github.com/brunoedubems.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Bruno Eduardo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="8 de Janeiro às 23:45h" dateTime="2022-01-08 23:45:15">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera 👋</p>
                <p>Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto </a>{' '}
                    <a href=""> #nlw </a>{' '}
                    <a href=""> #rocketseat </a>{' '}
                </p>
            </div>

    <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
        placeholder="deixe um comentário"
        />
        <button type="submit">Comentar</button>
    </form>

        </article>
    )
}

