const YEAR = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className=''>
            <div className='flex-footer container'>
                &copy; {YEAR} &middot; Bear Country Publishing
                <a className='footer-link' href='https://nextjs.org/'>
                    Next
                </a>
                <a className='footer-link' href='https://reactjs.org/'>
                    React
                </a>
                <a className='footer-link' href='https://www.sanity.io/'>
                    Sanity
                </a>
                <a
                    className='footer-link'
                    href='https://web.dev/measure/?gclid=CjwKCAjw6fyXBhBgEiwAhhiZsomBRG6o3zyMvSZGg-MWoDmu2N2J25HYLMBI9DSUvRZUmHrZ13oLdxoC1v4QAvD_BwE&url=https%3A%2F%2Fwww.bearcountrypublishing.com'
                >
                    Lighthouse
                </a>
                <a
                    className='footer-link'
                    href='https://github.com/caldwmark/next-sanity-blog'
                >
                    GitHub
                </a>
            </div>
        </footer>
    )
}

export default Footer
