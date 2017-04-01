import m from 'mithril';
import 'polythene/common/object.assign';
import dialog from 'polythene/dialog/dialog';
import button from 'polythene/button/button';
import common from './common';

const buttonEvents = {
    onclick: () => {
        dialog.hide();
    }
};

const buttons = [
    m.component(button, {
        label: 'Turn on location services',
        events: buttonEvents
    }),
    m.component(button, {
        label: 'No thanks',
        events: buttonEvents
    })
];

export default Object.assign(
    {},
    common.dialogProps, {
        class: 'demo-dialog fullwidth-dialog',
        body: [
            m('.pe-dialog__title', 'Let your apps know your location'),
            m('div', 'This means that your location data will be sent to our servers, anonymously of course.')
        ],
        footer: buttons
    }
);
