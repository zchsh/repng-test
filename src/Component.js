const React = require('react')

function Component(props) {
  console.log({ props })
  return (
    <div style={{ width: '600px', height: '300px', border: '1px solid green' }}>
      {props.title} World!
    </div>
  )
}

module.exports = Component
