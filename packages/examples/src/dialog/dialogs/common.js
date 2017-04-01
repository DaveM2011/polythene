import m from 'mithril';
import button from 'polythene/button/button';
import dialog from 'polythene/dialog/dialog';

const repeatText = function(text, count) {
    let out = '';
    while (count > 0) {
        out += text;
        count--;
    }
    return out;
};

const template = [
    '<div class="demo-content">',
    repeatText('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 16),
    '</div>'
].join('');

const shortBodyText = 'Discard draft?';

const cancelOkButtons = [
    m.component(button, {
        label: 'Cancel',
        events: {
            onclick: () => (dialog.hide())
        }
    }),
    m.component(button, {
        label: 'Discard',
        events: {
            onclick: () => (dialog.hide())
        }
    })
];

const dialogProps = {
    class: 'demo-dialog',
    footer: cancelOkButtons,
    didHide: () => (m.route('/dialog'))
};

export default {
    dialogProps: dialogProps,
    template: template,
    shortBodyText: shortBodyText,
    cancelOkButtons: cancelOkButtons
};
