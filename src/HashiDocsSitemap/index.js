const React = require('react')
const propsJs = require('./props.js')
const HashiGlobalStyles = require('../HashiGlobalStyles')
const Styles = require('./style.js')

class DocsSitemap extends React.Component {
  render() {
    const data = this.props.data
    const order = this.props.order

    return (
      <div>
        <Styles />
        <HashiGlobalStyles />
        <div className="g-docs-sitemap">
          {order.map((section, n) => {
            return (
              <div className="category" key={n}>
                <div className="category-title">{section.title}</div>
                <ul className="items">
                  {section.docs.map((doc, m) => {
                    const match = data.find(datum => {
                      return datum.path === doc
                    })
                    return (
                      <li className="item" key={m}>
                        <a
                          href={`/${match.path}`}
                          dangerouslySetInnerHTML={{
                            __html:
                              match.data.sidebar_title || match.data.page_title
                          }}
                        />
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

module.exports = DocsSitemap
