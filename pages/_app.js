import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <div className='wrapper'>
            <Header />
            <main className='container'>
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    )
}

export default MyApp
