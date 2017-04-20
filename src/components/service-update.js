const classNames = require('classnames')

module.exports = function PHLServiceUpdate (el) {
  const level = el.getAttribute('level') || ''
  const icon = el.getAttribute('icon') || ''
  const label = el.getAttribute('label') || ''
  const contents = el.innerHTML

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
  el.innerHTML = template

  const columns = el.querySelectorAll('.columns')
  setEqualHeight(columns)
}

function setEqualHeight (nodeList) {
  const els = Array.prototype.slice.call(nodeList) // convert to array
  const heights = els.map((el) => el.clientHeight)
  const maxHeight = Math.max.apply(Math, heights)
  els.forEach((el) => el.style.height = maxHeight + 'px')
}
