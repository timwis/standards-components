const test = require('tape')

test('button', (t) => {
  const input = trim(`
    <phl-button href="foo" icon="fa-bullhorn">Hello, world!</phl-button>
  `)
  const expect = trim(`
    <a href="foo" class="button icon full-width">
      <div class="valign">
        <i class="fa fa-bullhorn valign-cell"></i>
        <div class="button-label valign-cell">Hello, world!</div>
      </div>
    </a>
  `)
})

function trim (text) {
  return text.replace(/^ +/gm, '') // global, multiline
}
