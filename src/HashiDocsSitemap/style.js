const React = require('react')

function renderStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `.g-docs-sitemap {
          font-size: 1.25rem;
        }
        @media (max-width: 768px) {
          .g-docs-sitemap {
            display: block;
          }
        }
        .g-docs-sitemap .category {
          margin-bottom: 72px;
        }
        @media (max-width: 1120px) {
          .g-docs-sitemap .category {
            margin-bottom: 64px;
          }
        }
        .g-docs-sitemap .category .category-title {
          padding-bottom: 16px;
          border-bottom: 1px solid #d0d2d9;
          margin-bottom: 40px;
          color: #5c6070;
        }
        @media (max-width: 1120px) {
          .g-docs-sitemap .category .category-title {
            margin-bottom: 32px;
          }
        }
        .g-docs-sitemap .category .items {
          list-style: none;
          margin: 0;
          padding: 0;
          -webkit-columns: 4 275px;
                  columns: 4 275px;
        }
        .g-docs-sitemap .category .items .item {
          display: block;
          -webkit-column-break-inside: avoid;
          page-break-inside: avoid;
          break-inside: avoid;
        }
        .g-docs-sitemap .category .items .item:after {
          content: '';
          height: 20px;
          display: block;
        }
        .g-docs-sitemap code {
          font-size: 1em;
          line-height: unset;
        }
`
      }}
    />
  )
}

module.exports = renderStyles
