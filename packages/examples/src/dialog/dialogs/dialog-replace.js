import 'polythene/common/object.assign';
import m from 'mithril';
import dialog from 'polythene/dialog/dialog';
import button from 'polythene/button/button';
import common from './common';
import dialogTwoOptions from './dialog-replace-two';

export default Object.assign(
    {},
    common.dialogProps, {
        body: 'Dialog One',
        footer: m.component(button, {
            label: 'Show Two',
            events: {
                onclick: () => (dialog.show(dialogTwoOptions))
            }
        })
    }
);
