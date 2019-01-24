const React = require('react')

function renderStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `:root {
    /* Typography */
    --klavika-font: 'klavika-web', Helvetica, sans-serif;
    --open-sans-font: 'open-sans', 'Open Sans', sans-serif;
    --monospace-font: 'Fira Mono', monospace;
    --default-font-size: 16px;
    --font-weight-reg: 400;
    --font-weight-bold: 600;

    /* Shades of Gray - Dark to Light */
    --black: #000000;
    --gray-1: #0f1013;
    --gray-2: #1d1f25;
    --gray-3: #373942;
    --gray-4: #4e515d;
    --gray-5: #6a6d7a;
    --gray-6: #9396a2;
    --gray-7: #b6b8c2;
    --gray-8: #d2d4db;
    --gray-9: #e5e6eb;
    --gray-10: #f7f8fa;
    --white: #ffffff;

    /* Input Field Colors */
    --input-background-light: #ffffff;
    --input-background-dark: #1b212d;
    --input-border-light: #b6b8c2;
    --input-border-light: var(--gray-7);
    --input-border-dark: #262e42;
    --input-placeholder-color: #4e515d;
    --input-placeholder-color: var(--gray-4);

    /* Grid/Layout Settings */
    --site-max-width: 1288px;
    --column: 5.46875%;
    --gutter: 3.125%;
    --full-column: 8.59375%;

    /* Product Colors */
    --default-blue: #1563ff;
    --default-blue-dark: #08368b;
    --nomad-green: #00bc7f;
    --nomad-green-dark: #005738;
    --terraform-purple: #5f43e9;
    --teraform-purple-dark: #2a1c73;
    --consul-pink: #ca2171;
    --consul-pink-dark: #650d34;
    --vault-gray: #797e8d;
    --vault-gray-dark: #22242e;
    --packer-blue: #00acff;
    --packer-blue-dark: #005283;
  }
  .g-btn {
    font-family: 'open-sans', 'Open Sans', sans-serif;
    font-family: var(--open-sans-font);
    font-size: 1rem;
    line-height: 1.375rem;
    border: 0;
    border-style: solid;
    border-radius: 2px;
    background-color: #1563ff;
    background-color: var(--default-blue);
    color: #ffffff;
    color: var(--white);
    cursor: pointer;
    display: inline-block;
    outline: 0;
    padding: 13px 24px;
    font-weight: 600;
    text-align: center;
    position: relative;
    transition: all 0.25s ease;
    align-self: center;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .g-btn::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.15);
    opacity: 0;
    transition: all 0.25s ease;
  }
  .g-btn:hover,
  .g-btn.hovered {
    -webkit-transform: translateY(-1px);
    transform: translateY(-1px);
    text-decoration: none;
  }
  .g-btn:hover::after,
  .g-btn.hovered::after {
    opacity: 1;
  }
  .g-btn[disabled] {
    cursor: default;
  }
  .g-btn[disabled]:hover {
    -webkit-transform: unset;
    transform: unset;
  }
  .g-btn.light-fill {
    background-color: #ffffff;
    background-color: var(--white);
    color: #000000;
    color: var(--black);
  }
  .g-btn.light-fill:hover {
    background-color: #000000;
    background-color: var(--black);
    color: #ffffff;
    color: var(--white);
  }
  .g-btn.dark-fill {
    background-color: #000000;
    background-color: var(--black);
    color: #ffffff;
    color: var(--white);
  }
  .g-btn.dark-fill:hover,
  .g-btn.dark-fill.hovered {
    background-color: #ffffff;
    background-color: var(--white);
    color: #000000;
    color: var(--black);
  }
  .g-btn.light-outline {
    background: none;
    border: 1px solid #ffffff;
    border: 1px solid var(--white);
    padding: 12px 23px;
    /* subtracting the border, so sizes are even */
    color: #ffffff;
    color: var(--white);
  }
  .g-btn.light-outline:hover,
  .g-btn.light-outline.hovered {
    background-color: #ffffff;
    background-color: var(--white);
    color: #000000;
    color: var(--black);
  }
  .g-btn.dark-outline {
    background: none;
    border: 1px solid #000000;
    border: 1px solid var(--black);
    padding: 12px 23px;
    /* subtracting the border, so sizes are even */
    color: #000000;
    color: var(--black);
  }
  .g-btn.dark-outline:hover,
  .g-btn.dark-outline.hovered {
    background-color: #000000;
    background-color: var(--black);
    color: #ffffff;
    color: var(--white);
  }
  .g-btn.light-arrow-link {
    background: none;
    border: none;
    color: white;
    position: relative;
    padding: 0 0 2px 0;
    transition: none;
  }
  .g-btn.light-arrow-link::before {
    content: '\\203A';
    position: absolute;
    right: -20px;
  }
  .g-btn.light-arrow-link:hover,
  .g-btn.light-arrow-link.hovered {
    background: none;
    -webkit-transform: unset;
    transform: unset;
    padding: 0 0 1px 0;
    border-bottom: 1px solid gray;
  }
  .g-btn.light-arrow-link:hover::after,
  .g-btn.light-arrow-link.hovered::after {
    opacity: 0;
  }
`
      }}
    />
  )
}

module.exports = renderStyles
