import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import store from '../redux/store'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
