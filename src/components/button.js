const classNames = require('classnames')

module.exports = function PHLButton (el) {
  const href = el.getAttribute('href')
  const icon = el.getAttribute('icon')
  const contents = el.innerText
  const classes = el.className.split(' ')
  const combinedClasses = classNames('button', 'icon', classes)

  const template = `
    <a href=${href} class="${combinedClasses}">
      <div class="valign">
        ${icon ? `<i class="fa ${icon} valign-cell"></i>` : ''}
        <div class="button-label valign-cell">${contents}</div>
      </div>
    </a>
  `
  el.innerHTML = template
}
