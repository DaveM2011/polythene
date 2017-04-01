
import m from 'mithril';
import 'polythene/common/object.assign';
import list from 'polythene/list/list';
import dialog from 'polythene/dialog/dialog';
import listTile from 'polythene/list-tile/list-tile';
import common from './common';

const createListTile = (title) => {
    return m.component(listTile, {
        title,
        events: {
            onclick: () => (dialog.hide())
        },
        ink: true
    });
};

export default Object.assign(
    {},
    common.dialogProps, {
        class: 'demo-dialog',
        menu: m.component(list, {
            hoverable: true,
            tiles: [
                createListTile('Show all notification content including sensitive notification content'),
                createListTile('Hide sensitive notification content'),
                createListTile('Hide all notification content')
            ]
        }),
        hideDelay: .15,
        header: null,
        footer: null
    }
);
