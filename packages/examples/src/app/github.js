import m from 'mithril';
import vars from './common-vars';

const content = m('.github', m.trust('Polythene, a modular implementation of Material Design for Mithril.<br /><a href="http://polythene.js.org">Documentation</a> and <a href="https://github.com/ArthurClemens/Polythene">Github project page</a>.'));

const style = [{
  '.github': {
    margin: '24px 0 0 0',
    'text-align': 'center',
    padding: '24px 16px',
    'border-top': '1px solid rgba(0,0,0,.08)',
    'font-size': '14px',
    color: 'rgba(0,0,0,.35)',

    ' a:link, a:visited': {
      color: vars.colorLink
    }
  }
}];

import styler from 'polythene/common/styler';
styler.add('polythene-examples-github', style);

export default content;