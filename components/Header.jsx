import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className={style[`main-header`]}>
            <div className={style[`flex-nav`]}>
                <nav className={style[`header-layout`]}>
                    <Link className={style[`main-header-link`]} href='/'>
                        <h2 className={style[`header-logo`]}>
                            <img
                                src='/images/BCP_Logo_alpha.webp'
                                alt='Bear Country Publishing logo'
                                width='395'
                                height='51'
                            />
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
                                    href='/about'
                                >
                                    <a className={style['link-anchor']}>
                                        About
                                    </a>
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
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}
