const YEAR = new Date().getFullYear()

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                &copy; {YEAR} by Bear Country Publishing
            </div>
        </footer>
    )
}

export default Footer
