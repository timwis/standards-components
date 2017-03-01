const classNames = require('classnames')

class PHLServiceUpdate extends window.HTMLElement {
  connectedCallback () {
    const level = this.getAttribute('level') || ''
    const icon = this.getAttribute('icon') || ''
    const label = this.getAttribute('label') || ''
    const contents = this.innerHTML

    const classes = classNames([
      'row',
      'collapse',
      'equal-height',
      'service-update',
      level ? `service-update--${level}` : null
    ])

    const template = `
      <div class="${classes}">
        <div class="small-6 columns equal">
          <div class="icon valign">
            <div class="valign-cell phl-mu">
              <i class="fa ${icon} fa-2x fa-fw" aria-hidden="true"></i>
              <span class="icon-label">${label}</span>
            </div>
          </div>
        </div>
        <div class="small-18 columns equal">
          <div class="details valign">
            <div class="valign-cell pam">
              ${contents}
            </div>
          </div>
        </div>
      </div>
    `
    this.innerHTML = template

    const columns = this.querySelectorAll('.columns')
    setEqualHeight(columns)
  }
}

module.exports = PHLServiceUpdate

function setEqualHeight (nodeList) {
  const els = Array.prototype.slice.call(nodeList) // convert to array
  const heights = els.map((el) => el.clientHeight)
  const maxHeight = Math.max.apply(Math, heights)
  els.forEach((el) => el.style.height = maxHeight + 'px')
}
