import m from 'mithril';
import 'polythene/common/object.assign';
import dialog from 'polythene/dialog/dialog';
import icon from 'polythene/icon/icon';
import list from 'polythene/list/list';
import listTile from 'polythene/list-tile/list-tile';
import common from './common';

import iconAccount from 'mmsvg/google/msvg/action/account-circle';

export default Object.assign({},
    common.dialogProps, {
        class: 'demo-dialog dialog-simple',
        title: 'Set backup account',
        menu: m.component(list, {
            hoverable: true,
            tiles: [1, 2, 3].map(() => {
                return m.component(listTile, {
                    class: 'demo-item',
                    front: m.component(icon, {
                        type: 'large',
                        msvg: iconAccount
                    }),
                    title: 'Account',
                    events: {
                        onclick: () => {
                            dialog.hide();
                        }
                    }
                });
            })
        }),
        footer: null
    }
);
