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
          --input-background-dark: #1d1f25;
          --input-background-dark: var(--gray-2);
          --input-border-light: #b6b8c2;
          --input-border-light: var(--gray-7);
          --input-border-dark: #1d1f25;
          --input-border-dark: var(--gray-2);
          --input-placeholder-color: #4e515d;
          --input-placeholder-color: var(--gray-4);
          --input-placeholder-color-dark: #9396a2;
          --input-placeholder-color-dark: var(--gray-6);

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
        /* Gradient Backgrounds */
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        html {
          height: 100%;
          font-size: 16px;
          font-size: var(--default-font-size);
          -webkit-overflow-scrolling: touch;
        }
        body {
          display: flex;
          flex-direction: column;
          margin: 0;
          padding: 0;
          font-family: 'open-sans', 'Open Sans', sans-serif;
          font-family: var(--open-sans-font);
          font-size: 16px;
          font-size: var(--default-font-size);
          font-weight: 400;
          font-weight: var(--font-weight-reg);
          line-height: 1.625;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          min-height: 100vh
        }
        body > header,
          body > footer {
          flex: none;
        }
        body.g-noscroll {
          overflow: hidden;
        }
        main {
          flex: 1 0 auto;
          flex-direction: column;
          height: 100%;
        }
        @media (max-width: 768px) {
          main {
            flex-direction: row;
          }
        }
        a {
          text-decoration: none;
          color: #1563ff;
          cursor: pointer;
        }
        hr {
          height: 1px;
          border: none;
          color: #d2d4db;
          color: var(--gray-8);
          background-color: #d2d4db;
          background-color: var(--gray-8);
        }
        figure {
          margin: 0;
        }
        strong {
          font-weight: 600;
        }
        #consent-mgr-bar {
          position: fixed;
          width: 100%;
          bottom: 0;
          z-index: 100;
        }
        /* Display 1 */
        @media (min-width: 768px) {}
        @media (min-width: 1120px) {}
        @media (min-width: 768px) {}
        @media (min-width: 1120px) {}
        /* Display 2 */
        @media (min-width: 768px) {}
        @media (min-width: 1120px) {}
        @media (min-width: 768px) {}
        @media (min-width: 1120px) {}
        /* Section 1 */
        @media (min-width: 768px) {}
        @media (min-width: 1120px) {}
        /* Section 2 */
        @media (min-width: 768px) {}
        @media (min-width: 1120px) {}
        @media (min-width: 768px) {}
        @media (min-width: 1120px) {}
        /* Section 3 */
        @media (min-width: 1120px) {}
        @media (min-width: 1120px) {}
        /* Section 4 */
        /* Intro */
        @media (min-width: 768px) {}
        @media (min-width: 1120px) {}
        /* Body */
        /* Caption */
        /* Label */
        /* Code */
        @media (min-width: 768px) {}
        h3,
        h2,
        h1 {
          font-family: 'klavika-web', Helvetica, sans-serif;
          font-family: var(--klavika-font);
          -webkit-font-feature-settings: "kern";
                  font-feature-settings: "kern";
          -webkit-font-kerning: normal;
                  font-kerning: normal;
          font-weight: 500;
        }
        h1,
        .h1 {
          font-size: 3.5em;
          font-weight: 600;
          line-height: 1.2em;
        }
        h2,
        .h2 {
          font-size: 2.5em;
          font-weight: 600;
          margin: 1em 0;
          line-height: 1.3em;
        }
        @media (max-width: 700px) {
          h2,
        .h2 {
            font-size: 2.2em;
          }
        }
        h3,
        .h3 {
          font-family: 'open-sans', 'Open Sans', sans-serif;
          font-family: var(--open-sans-font);
          font-weight: 600;
          font-size: 1.5em;
          line-height: 1.5em;
          margin: 1em 0;
        }
        @media (max-width: 700px) {
          h3,
        .h3 {
            font-size: 1.2em;
          }
        }
        h3.lighter, .h3.lighter {
          font-weight: 100;
        }
        h6,
        .h6 h5,
        .h5 h4,
        .h4 {
          font-family: 'open-sans', 'Open Sans', sans-serif;
          font-family: var(--open-sans-font);
          font-weight: 600;
        }
        h4,
        .h4 {
          font-size: 1.5em;
        }
        h5,
        .h5 {
          font-size: 1.25em;
        }
        h6,
        .h6 {
          font-size: 1.125em;
          margin: 1em 0;
        }
        /* TODO: temporary - remove anchor links, we need to still implement these */
        h1 a.anchor,
        h2 a.anchor,
        h3 a.anchor,
        h4 a.anchor,
        h5 a.anchor,
        h6 a.anchor {
          display: none;
        }
        pre code,
        code,
        pre {
          font-family: 'Fira Mono', monospace;
          font-family: var(--monospace-font);
          font-size: 0.875rem;
          line-height: 1.6;
        }
        pre {
          background-color: #1d1f25;
          background-color: var(--input-background-dark);
          color: #ffffff;
          color: var(--white);
          margin: 0 0 16px;
          padding: 24px 16px;
          overflow: auto;
        }
        @media (min-width: 1120px) {
          pre {
            padding: 32px 24px;
          }
        }
        pre > code {
          font: inherit;
          color: inherit;
          overflow-wrap: normal;
          white-space: pre;
        }
        .highlight {
          color: #f8f8f2
        }
        .highlight .c {
          color: #75715e;
        }
        .highlight {
          /* Comment */
        }
        .highlight .err {
          color: #960050;
          background-color: #1e0010;
        }
        .highlight {
          /* Error */
        }
        .highlight .k {
          color: #66d9ef;
        }
        .highlight {
          /* Keyword */
        }
        .highlight .l {
          color: #ae81ff;
        }
        .highlight {
          /* Literal */
        }
        .highlight .n {
          color: #f8f8f2;
        }
        .highlight {
          /* Name */
        }
        .highlight .o {
          color: #f92672;
        }
        .highlight {
          /* Operator */
        }
        .highlight .p {
          color: #f8f8f2;
        }
        .highlight {
          /* Punctuation */
        }
        .highlight .ch {
          color: #75715e;
        }
        .highlight {
          /* Comment.Hashbang */
        }
        .highlight .cm {
          color: #75715e;
        }
        .highlight {
          /* Comment.Multiline */
        }
        .highlight .cp {
          color: #75715e;
        }
        .highlight {
          /* Comment.Preproc */
        }
        .highlight .cpf {
          color: #75715e;
        }
        .highlight {
          /* Comment.PreprocFile */
        }
        .highlight .c1 {
          color: #75715e;
        }
        .highlight {
          /* Comment.Single */
        }
        .highlight .cs {
          color: #75715e;
        }
        .highlight {
          /* Comment.Special */
        }
        .highlight .gd {
          color: #f92672;
        }
        .highlight {
          /* Generic.Deleted */
        }
        .highlight .ge {
          font-style: italic;
        }
        .highlight {
          /* Generic.Emph */
        }
        .highlight .gi {
          color: #a6e22e;
        }
        .highlight {
          /* Generic.Inserted */
        }
        .highlight .gs {
          font-weight: bold;
        }
        .highlight {
          /* Generic.Strong */
        }
        .highlight .gu {
          color: #75715e;
        }
        .highlight {
          /* Generic.Subheading */
        }
        .highlight .kc {
          color: #66d9ef;
        }
        .highlight {
          /* Keyword.Constant */
        }
        .highlight .kd {
          color: #66d9ef;
        }
        .highlight {
          /* Keyword.Declaration */
        }
        .highlight .kn {
          color: #f92672;
        }
        .highlight {
          /* Keyword.Namespace */
        }
        .highlight .kp {
          color: #66d9ef;
        }
        .highlight {
          /* Keyword.Pseudo */
        }
        .highlight .kr {
          color: #66d9ef;
        }
        .highlight {
          /* Keyword.Reserved */
        }
        .highlight .kt {
          color: #66d9ef;
        }
        .highlight {
          /* Keyword.Type */
        }
        .highlight .ld {
          color: #e6db74;
        }
        .highlight {
          /* Literal.Date */
        }
        .highlight .m {
          color: #ae81ff;
        }
        .highlight {
          /* Literal.Number */
        }
        .highlight .s {
          color: #e6db74;
        }
        .highlight {
          /* Literal.String */
        }
        .highlight .na {
          color: #a6e22e;
        }
        .highlight {
          /* Name.Attribute */
        }
        .highlight .nb {
          color: #f8f8f2;
        }
        .highlight {
          /* Name.Builtin */
        }
        .highlight .nc {
          color: #a6e22e;
        }
        .highlight {
          /* Name.Class */
        }
        .highlight .no {
          color: #66d9ef;
        }
        .highlight {
          /* Name.Constant */
        }
        .highlight .nd {
          color: #a6e22e;
        }
        .highlight {
          /* Name.Decorator */
        }
        .highlight .ni {
          color: #f8f8f2;
        }
        .highlight {
          /* Name.Entity */
        }
        .highlight .ne {
          color: #a6e22e;
        }
        .highlight {
          /* Name.Exception */
        }
        .highlight .nf {
          color: #a6e22e;
        }
        .highlight {
          /* Name.Function */
        }
        .highlight .nl {
          color: #f8f8f2;
        }
        .highlight {
          /* Name.Label */
        }
        .highlight .nn {
          color: #f8f8f2;
        }
        .highlight {
          /* Name.Namespace */
        }
        .highlight .nx {
          color: #a6e22e;
        }
        .highlight {
          /* Name.Other */
        }
        .highlight .py {
          color: #f8f8f2;
        }
        .highlight {
          /* Name.Property */
        }
        .highlight .nt {
          color: #f92672;
        }
        .highlight {
          /* Name.Tag */
        }
        .highlight .nv {
          color: #f8f8f2;
        }
        .highlight {
          /* Name.Variable */
        }
        .highlight .ow {
          color: #f92672;
        }
        .highlight {
          /* Operator.Word */
        }
        .highlight .w {
          color: #f8f8f2;
        }
        .highlight {
          /* Text.Whitespace */
        }
        .highlight .mb {
          color: #ae81ff;
        }
        .highlight {
          /* Literal.Number.Bin */
        }
        .highlight .mf {
          color: #ae81ff;
        }
        .highlight {
          /* Literal.Number.Float */
        }
        .highlight .mh {
          color: #ae81ff;
        }
        .highlight {
          /* Literal.Number.Hex */
        }
        .highlight .mi {
          color: #ae81ff;
        }
        .highlight {
          /* Literal.Number.Integer */
        }
        .highlight .mo {
          color: #ae81ff;
        }
        .highlight {
          /* Literal.Number.Oct */
        }
        .highlight .sa {
          color: #e6db74;
        }
        .highlight {
          /* Literal.String.Affix */
        }
        .highlight .sb {
          color: #e6db74;
        }
        .highlight {
          /* Literal.String.Backtick */
        }
        .highlight .sc {
          color: #e6db74;
        }
        .highlight {
          /* Literal.String.Char */
        }
        .highlight .dl {
          color: #e6db74;
        }
        .highlight {
          /* Literal.String.Delimiter */
        }
        .highlight .sd {
          color: #e6db74;
        }
        .highlight {
          /* Literal.String.Doc */
        }
        .highlight .s2 {
          color: #e6db74;
        }
        .highlight {
          /* Literal.String.Double */
        }
        .highlight .se {
          color: #ae81ff;
        }
        .highlight {
          /* Literal.String.Escape */
        }
        .highlight .sh {
          color: #e6db74;
        }
        .highlight {
          /* Literal.String.Heredoc */
        }
        .highlight .si {
          color: #e6db74;
        }
        .highlight {
          /* Literal.String.Interpol */
        }
        .highlight .sx {
          color: #e6db74;
        }
        .highlight {
          /* Literal.String.Other */
        }
        .highlight .sr {
          color: #e6db74;
        }
        .highlight {
          /* Literal.String.Regex */
        }
        .highlight .s1 {
          color: #e6db74;
        }
        .highlight {
          /* Literal.String.Single */
        }
        .highlight .ss {
          color: #e6db74;
        }
        .highlight {
          /* Literal.String.Symbol */
        }
        .highlight .bp {
          color: #f8f8f2;
        }
        .highlight {
          /* Name.Builtin.Pseudo */
        }
        .highlight .fm {
          color: #a6e22e;
        }
        .highlight {
          /* Name.Function.Magic */
        }
        .highlight .vc {
          color: #f8f8f2;
        }
        .highlight {
          /* Name.Variable.Class */
        }
        .highlight .vg {
          color: #f8f8f2;
        }
        .highlight {
          /* Name.Variable.Global */
        }
        .highlight .vi {
          color: #f8f8f2;
        }
        .highlight {
          /* Name.Variable.Instance */
        }
        .highlight .vm {
          color: #f8f8f2;
        }
        .highlight {
          /* Name.Variable.Magic */
        }
        .highlight .il {
          color: #ae81ff;
        }
        .highlight {
          /* Literal.Number.Integer.Long */
        }
        /**
         * Bootstrap styles ported over for elements used in Docs
         * (.table/.table-striped)
         */
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        td,
        th {
          padding: 0;
        }
        table {
          border: 1px solid #ddd;
          border-right: 0;
          background-color: transparent;
          width: 100%;
          max-width: 100%;
          margin-bottom: 20px
        }
        table td {
          border-right: 1px solid #ddd;
        }
        table > tbody > tr:nth-of-type(odd) {
          background-color: #f9f9f9;
        }
        table > thead > tr > th,
          table > tbody > tr > th,
          table > tfoot > tr > th,
          table > thead > tr > td,
          table > tbody > tr > td,
          table > tfoot > tr > td {
          padding: 8px;
          line-height: 1.42857143;
          vertical-align: top;
          border-top: 1px solid #ddd;
        }
        table > thead > tr > th {
          vertical-align: bottom;
          border-bottom: 2px solid #ddd;
        }
        table > caption + thead > tr:first-child > th,
          table > colgroup + thead > tr:first-child > th,
          table > thead:first-child > tr:first-child > th,
          table > caption + thead > tr:first-child > td,
          table > colgroup + thead > tr:first-child > td,
          table > thead:first-child > tr:first-child > td {
          border-top: 0;
        }
        table > tbody + tbody {
          border-top: 2px solid #ddd;
        }
        table table {
          background-color: #fff;
        }
        table > thead > tr > td.success,
          table > tbody > tr > td.success,
          table > tfoot > tr > td.success,
          table > thead > tr > th.success,
          table > tbody > tr > th.success,
          table > tfoot > tr > th.success,
          table > thead > tr.success > td,
          table > tbody > tr.success > td,
          table > tfoot > tr.success > td,
          table > thead > tr.success > th,
          table > tbody > tr.success > th,
          table > tfoot > tr.success > th {
          background-color: #dff0d8;
        }
        table > thead > tr > td.active,
          table > tbody > tr > td.active,
          table > tfoot > tr > td.active,
          table > thead > tr > th.active,
          table > tbody > tr > th.active,
          table > tfoot > tr > th.active,
          table > thead > tr.active > td,
          table > tbody > tr.active > td,
          table > tfoot > tr.active > td,
          table > thead > tr.active > th,
          table > tbody > tr.active > th,
          table > tfoot > tr.active > th {
          background-color: #f5f5f5;
        }
        table > thead > tr > td.info,
          table > tbody > tr > td.info,
          table > tfoot > tr > td.info,
          table > thead > tr > th.info,
          table > tbody > tr > th.info,
          table > tfoot > tr > th.info,
          table > thead > tr.info > td,
          table > tbody > tr.info > td,
          table > tfoot > tr.info > td,
          table > thead > tr.info > th,
          table > tbody > tr.info > th,
          table > tfoot > tr.info > th {
          background-color: #d9edf7;
        }
        table > thead > tr > td.warning,
          table > tbody > tr > td.warning,
          table > tfoot > tr > td.warning,
          table > thead > tr > th.warning,
          table > tbody > tr > th.warning,
          table > tfoot > tr > th.warning,
          table > thead > tr.warning > td,
          table > tbody > tr.warning > td,
          table > tfoot > tr.warning > td,
          table > thead > tr.warning > th,
          table > tbody > tr.warning > th,
          table > tfoot > tr.warning > th {
          background-color: #fcf8e3;
        }
        table > thead > tr > td.danger,
          table > tbody > tr > td.danger,
          table > tfoot > tr > td.danger,
          table > thead > tr > th.danger,
          table > tbody > tr > th.danger,
          table > tfoot > tr > th.danger,
          table > thead > tr.danger > td,
          table > tbody > tr.danger > td,
          table > tfoot > tr.danger > td,
          table > thead > tr.danger > th,
          table > tbody > tr.danger > th,
          table > tfoot > tr.danger > th {
          background-color: #f2dede;
        }
        table col[class*='col-'] {
          position: static;
          float: none;
          display: table-column;
        }
        table td[class*='col-'],
          table th[class*='col-'] {
          position: static;
          float: none;
          display: table-cell;
        }
        caption {
          padding-top: 8px;
          padding-bottom: 8px;
          color: #777777;
          text-align: left;
        }
        th {
          text-align: left;
        }
        .g-input {
          border: 0;
          border: 1px solid;
          border-radius: 1px;
          color: #4e515d;
          color: var(--input-placeholder-color);
          font-size: 1rem;
          padding: 13px;
          outline: 0
        }
        .g-input[type='email']::-webkit-input-placeholder,
          .g-input[type='text']::-webkit-input-placeholder {
          color: #4e515d;
          color: var(--input-placeholder-color);
        }
        .g-input[type='email']:-ms-input-placeholder,
          .g-input[type='text']:-ms-input-placeholder {
          color: #4e515d;
          color: var(--input-placeholder-color);
        }
        .g-input[type='email']::-ms-input-placeholder,
          .g-input[type='text']::-ms-input-placeholder {
          color: #4e515d;
          color: var(--input-placeholder-color);
        }
        .g-input[type='email']::placeholder,
          .g-input[type='text']::placeholder {
          color: #4e515d;
          color: var(--input-placeholder-color);
        }
        .g-input.light {
          background-color: #ffffff;
          background-color: var(--input-background-light);
          border-color: #b6b8c2;
          border-color: var(--input-border-light);
        }
        .g-input.dark {
          background-color: #1d1f25;
          background-color: var(--input-background-dark);
          border-color: #1d1f25;
          border-color: var(--input-border-dark);
          color: #9396a2;
          color: var(--input-placeholder-color-dark);
        }
        .g-input.dark[type='email']::-webkit-input-placeholder,
            .g-input.dark[type='text']::-webkit-input-placeholder {
          color: #9396a2;
          color: var(--input-placeholder-color-dark);
        }
        .g-input.dark[type='email']:-ms-input-placeholder,
            .g-input.dark[type='text']:-ms-input-placeholder {
          color: #9396a2;
          color: var(--input-placeholder-color-dark);
        }
        .g-input.dark[type='email']::-ms-input-placeholder,
            .g-input.dark[type='text']::-ms-input-placeholder {
          color: #9396a2;
          color: var(--input-placeholder-color-dark);
        }
        .g-input.dark[type='email']::placeholder,
            .g-input.dark[type='text']::placeholder {
          color: #9396a2;
          color: var(--input-placeholder-color-dark);
        }
        .g-form .field {
          display: flex;
          flex-direction: column;
          max-width: 520px;
          margin-bottom: 30px;
        }
        .g-form .field label {
          font-size: 0.8rem;
          text-transform: uppercase;
          font-weight: 600;
          color: #6a6d7a;
          color: var(--gray-5);
          letter-spacing: 0.4px;
          margin-bottom: 5px;
        }
        .g-form .field label .asterisk {
          color: #d34e4e;
        }
        .g-form .field input[type='text'] {
          padding: 12px 16px;
          font-size: 1rem;
          border: 1px solid #b6b8c2;
          border: 1px solid var(--gray-7);
        }
        .g-form .field input[type='text']:focus {
          outline: 0;
          border-color: #1563ff;
          border-color: var(--default-blue);
        }
        .g-form .field input[type='submit'] {
          font-size: 1.1rem;
        }
        .g-tag {
          border: 1px solid #000000;
          border: 1px solid var(--black);
          border-radius: 2px;
          color: #000000;
          color: var(--black);
          cursor: pointer;
          display: inline-block;
          font-size: 0.75em;
          padding: 4px 10px
        }
        .g-tag:hover {
          border-color: #1563ff;
          border-color: var(--default-blue);
        }
        .g-tag.selected {
          color: #ffffff;
          color: var(--white);
          background-color: #1563ff;
          background-color: var(--default-blue);
          border-color: #1563ff;
          border-color: var(--default-blue);
        }
        .g-tag a {
          color: inherit;
        }
        /* TODO: this should be refactored and/or removed */
        .g-label {
          font-family: 'open-sans', 'Open Sans', sans-serif;
          font-family: var(--open-sans-font);
          font-size: 0.75em;
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: 0.2px;
          margin: 0 0 16px;
          text-transform: uppercase
        }
        .g-label span {
          display: inline-block;
        }
        .g-container {
          margin: 0 auto;
          width: 100%;
          max-width: 1288px;
          max-width: var(--site-max-width);
          padding-left: 32px;
          padding-right: 32px;
        }
        @media (max-width: 768px) {
          .g-container {
            padding-left: 24px;
            padding-right: 24px;
          }
        }
        .g-center-contents {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .g-text-container ul li {
          margin: 16px 0;
        }
`
      }}
    />
  )
}

module.exports = renderStyles
