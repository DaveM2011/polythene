import m from 'mithril';
import button from 'polythene/button/button';
import dialog from 'polythene/dialog/dialog';

export default {
    body: m.component(button, {
        raised: true,
        label: 'Go to home',
        events: {
            onclick: () => {
                m.route('/');
            }
        }
    }),
    footer: m.component(button, {
        label: 'Close',
        events: {
            onclick: () => (dialog.hide())
        }
    })
};