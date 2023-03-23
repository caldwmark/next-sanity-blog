import styles from '../styles/Footer.module.css'

const YEAR = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.column}>
                <p className={styles.copy}>
                    &copy;{YEAR} &middot; Bear Country Publishing
                </p>
            </section>
            <section className={styles.column}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a
                            className={styles[`footer-link`]}
                            href='https://pagespeed.web.dev/analysis/https-www-bearcountrypublishing-com/g9asohunn2?form_factor=desktop'
                        >
                            Lighthouse Scores
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a
                            className={styles[`footer-link`]}
                            href='https://github.com/caldwmark/next-sanity-blog'
                        >
                            This Site on GitHub
                        </a>
                    </li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer
