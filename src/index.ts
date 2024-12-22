import Actions from './lib/actions'

// styles
import './styles'
import './index.css'

// main
const load = () => {
  window.removeEventListener('load', load)
  window.addEventListener('unload', Actions())
}
window.addEventListener('load', load)
