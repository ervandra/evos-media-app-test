import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import '../styles/app.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faBell, faUserCircle, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faBell, faUserCircle, faSearch)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
