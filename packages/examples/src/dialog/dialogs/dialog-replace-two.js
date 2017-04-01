import 'polythene/common/object.assign';
import m from 'mithril';
import dialog from 'polythene/dialog/dialog';
import button from 'polythene/button/button';
import common from './common';
import dialogOneOptions from './dialog-replace';

export default Object.assign(
    {},
    common.dialogProps, {
        body: 'Dialog Two',
        footer: m.component(button, {
            label: 'Show One',
            events: {
                onclick: () => (dialog.show(dialogOneOptions))
            }
        })
    }
);