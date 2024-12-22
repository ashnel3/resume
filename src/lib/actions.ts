export default () => {
  const { dataset } = document.documentElement
  const actions = document.getElementById('actions')!
  const btnVisibility = document.getElementById('action-visibility')!
  const btnPrint = document.getElementById('action-print')!
  let isReaderView: string | undefined

  const $print = () => print()

  const $hide = () => {
    dataset.readerView = 'true'
    actions.style.setProperty('visibility', 'hidden')
  }

  const $restore = () => {
    dataset.readerView = isReaderView ?? 'false'
    actions.style.removeProperty('visibility')
  }

  const $toggle = () => {
    dataset.readerView = isReaderView = (dataset.readerView !== 'true').toString()
  }

  // printing events
  window.addEventListener('afterprint', $restore)
  window.addEventListener('beforeprint', $hide)
  // action buttons
  btnPrint.addEventListener('click', $print)
  btnVisibility.addEventListener('click', $toggle)

  // show actions
  $restore()

  // destructor
  return () => {
    actions.remove()
    window.removeEventListener('afterprint', $restore)
    window.removeEventListener('beforeprint', $hide)
  }
}
