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
                            href='https://web.dev/measure/?gclid=CjwKCAjw6fyXBhBgEiwAhhiZsomBRG6o3zyMvSZGg-MWoDmu2N2J25HYLMBI9DSUvRZUmHrZ13oLdxoC1v4QAvD_BwE&url=https%3A%2F%2Fwww.bearcountrypublishing.com'
                        >
                            Check Lighthouse Scores
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
