import Link from 'next/link'
import Image from 'next/image'

import style from '../styles/Header.module.css'
import logo from '../public/images/BCP_logo_alpha-528.webp'

export default function Header() {
    return (
        <header className={style[`main-header`]}>
            <div className={style[`flex-nav`]}>
                <nav className={style[`header-layout`]}>
                    <Link className={style[`main-header-link`]} href='/'>
                        <h1 className={style[`header-logo`]}>
                            <Image
                                className={style[`logo-img`]}
                                src={logo}
                                alt='Bear Country Publishing'
                                width={395}
                                height={51}
                            />
                        </h1>
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
                            <li className={style[`nav-list-item`]}>
                                <Link
                                    className={style[`main-nav-link`]}
                                    href='/resources'
                                >
                                    <a className={style['link-anchor']}>
                                        Resources
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
