import Link from 'next/link'

export default function Header() {
    return (
        <header className='main-header'>
            <div className='container flex-nav'>
                <nav className='header-layout'>
                    <Link href='/'>
                        <h2 className='header-logo'>Bear Country Publishing</h2>
                    </Link>
                    <div className='main-nav'>
                        <ul className='main-nav-list'>
                            <li>
                                <Link href='/'>Home</Link>
                            </li>
                            <li>
                                <Link href='/about'>About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
