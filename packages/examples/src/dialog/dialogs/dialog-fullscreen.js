import m from 'mithril';
import 'polythene/common/object.assign';
import dialog from 'polythene/dialog/dialog';
import headerPanel from 'polythene/header-panel/header-panel';
import button from 'polythene/button/button';
import iconBtn from 'polythene/icon-button/icon-button';
import common from './common';
import iconClose from 'mmsvg/google/msvg/navigation/close';

const DIALOG_CONFIRM = 'confirm-fullscreen';

const fullscreenToolbarRow = (title) => {
    return [
        m.component(iconBtn, {
            icon: {
                msvg: iconClose
            },
            events: {
                onclick: () => {
                    dialog.show(confirmDialogOptsFn, DIALOG_CONFIRM);
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

const fullscreenPanelBlock = {
    view: function(ctrl, opts) {
        return m.component(headerPanel, {
            class: 'pe-dark-theme',
            fixed: true,
            header: {
                toolbar: {
                    content: fullscreenToolbarRow('New event', opts)
                }
            },
            content: m.trust(common.template)
        });
    }
};

const confirmDialogOptsFn = () => {
    return Object.assign({}, common.dialogProps, {
        class: 'demo-dialog',
        footer: [
            m.component(button, {
                label: 'Cancel',
                events: {
                    onclick: () => {
                        dialog.hide(DIALOG_CONFIRM);
                    }
                }
            }),
            m.component(button, {
                label: 'Discard',
                events: {
                    onclick: () => {
                        dialog.hide(DIALOG_CONFIRM);
                        dialog.hide();
                    }
                }
            })
        ],
        body: common.shortBodyText,
        modal: true,
        backdrop: true
    });
};

const confirmDialogShown = m.prop(false);

export default Object.assign(
    {},
    common.dialogProps, {
        class: 'demo-dialog',
        body: [
            m.component(fullscreenPanelBlock, {
                confirmDialogShown
            })
        ],
        fullscreen: true
    }
);
