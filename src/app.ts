export const App = () => {
  const $hide = () => {
    document.documentElement.dataset.readerView = 'true'
  }

  const $restore = () => {
    document.documentElement.dataset.readerView = 'false'
  }

  window.addEventListener('afterprint', $restore)
  window.addEventListener('beforeprint', $hide)
  return () => {
    window.removeEventListener('afterprint', $restore)
    window.removeEventListener('beforeprint', $hide)
  }
}

export default App
