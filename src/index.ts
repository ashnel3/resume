import '$styles'

window.addEventListener('beforeprint', () => {
  console.log('before print')
  document.body.dataset.print = 'true'
})

window.addEventListener('afterprint', () => {
  document.body.dataset.print = 'false'
})
