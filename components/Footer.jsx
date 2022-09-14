const YEAR = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className=''>
            <div className='flex-footer container'>
                &copy; {YEAR} &middot; Bear Country Publishing
                <a href='https://nextjs.org/'>Next</a>
                <a href='https://reactjs.org/'>React</a>
                <a href='https://www.sanity.io/'>Sanity</a>
                <a href='https://github.com/caldwmark/next-sanity-blog'>
                    GitHub
                </a>
            </div>
        </footer>
    )
}

export default Footer
