import Link from 'next/link'
import style from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className={style[`main-header`]}>
            <div className={style[`flex-nav`]}>
                <nav className={style[`header-layout`]}>
                    <Link className={style[`main-header-link`]} href='/'>
                        <h2 className={style[`header-logo`]}>
                            Bear Country Publishing
                        </h2>
                    </Link>
                    <div className={style[`main-nav`]}>
                        <ul className={style[`main-nav-list`]}>
                            <li className={style[`nav-list-item`]}>
                                <Link
                                    className={style[`main-nav-link`]}
                                    href='/'
                                >
                                    <a className={style['link-anchor']}>Home</a>
                                </Link>
                            </li>
                            <li className={style[`nav-list-item`]}>
                                <Link
                                    className={style[`main-nav-link`]}
                                    href='/documents'
                                >
                                    <a className={style['link-anchor']}>
                                        Documents
                                    </a>
                                </Link>
                            </li>
                            <li className={style[`nav-list-item`]}>
                                <Link
                                    className={style[`main-nav-link`]}
                                    href='/about'
                                >
                                    <a className={style['link-anchor']}>
                                        About
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
