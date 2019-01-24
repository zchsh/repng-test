const React = require('react')
const slugify = require('slugify')
const Styles = require('./style.js')

function Button({ title, theme, classes }) {
  if (theme && typeof theme === 'object') theme = theme.slug

  return (
    <div>
      <Styles />
      <div style={{ border: '1px solid transparent' }} />
      <a
        className={`g-btn${theme ? ' ' + theme : ''}${
          classes ? ' ' + classes : ''
        }`}
      >
        {title}
      </a>
    </div>
  )
}

module.exports = Button
