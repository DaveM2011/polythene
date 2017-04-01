import m from 'mithril';
import button from 'polythene/button/button';
import dialog from 'polythene/dialog/dialog';
import pageOne from './dialog-multi-route-page-1';
import pageTwo from './dialog-multi-route-page-2';

export default () => ({
    body: m('div',
        (m.route() === '/dialog/multi-route/two') ? pageTwo : pageOne
    ),
    footer: m.component(button, {
        label: 'Close',
        events: {
            onclick: () => (dialog.hide())
        }
    }),
    didHide: () => {
        m.route('/dialog');
    }
});