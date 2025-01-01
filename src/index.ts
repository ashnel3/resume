import App from './app'

// styles
import './styles'
import './index.css'

const $load = () => {
  const destroy = App()
  window.removeEventListener('load', $load)
  window.addEventListener('unload', destroy)
}

window.addEventListener('load', $load)
