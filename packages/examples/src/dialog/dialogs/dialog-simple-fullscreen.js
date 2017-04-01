import m from 'mithril';
import 'polythene/common/object.assign';
import dialog from 'polythene/dialog/dialog';
import headerPanel from 'polythene/header-panel/header-panel';
import button from 'polythene/button/button';
import iconBtn from 'polythene/icon-button/icon-button';
import common from './common';
import iconClose from 'mmsvg/google/msvg/navigation/close';

const fullscreenToolbarRow = function(title) {
    return [
        m.component(iconBtn, {
            icon: {
                msvg: iconClose
            },
            events: {
                onclick: () => {
                    dialog.hide();
                }
            }
        }),
        m('span.flex', title),
        m.component(button, {
            label: 'Save',
            events: {
                onclick: () => {
                    dialog.hide();
                }
            }
        })
    ];
};

export default Object.assign(
    {},
    common.dialogProps, {
        class: 'demo-dialog',
        body: m.component(headerPanel, {
            class: 'pe-dark-theme',
            fixed: true,
            header: {
                toolbar: {
                    content: fullscreenToolbarRow('New event')
                }
            },
            content: m.trust(common.template)
        }),
        fullscreen: true
    }
);
