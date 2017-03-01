const classNames = require('classnames')

class PHLButton extends window.HTMLElement {
  connectedCallback () {
    const href = this.getAttribute('href')
    const icon = this.getAttribute('icon')
    const contents = this.innerText
    const classes = this.className.split(' ')
    const combinedClasses = classNames('button', 'icon', classes)

    const template = `
      <a href=${href} class="${combinedClasses}">
        <div class="valign">
          ${icon ? `<i class="fa ${icon} valign-cell"></i>` : ''}
          <div class="button-label valign-cell">${contents}</div>
        </div>
      </a>
    `
    this.innerHTML = template
  }
}

module.exports = PHLButton
