import m from 'mithril';
import 'polythene/common/object.assign';
import dialog from 'polythene/dialog/dialog';
import button from 'polythene/button/button';
import common from './common';

let isEmptyValue = true;

// use a function to have the state of isEmptyValue reflected in the dialog
const componentFn = () => {
    return Object.assign({}, common.dialogProps, {
        title: 'Select a file...',
        body: m('input', {
            type: 'file',
            id: 'file',
            name: 'file',
            onchange: (e) => {
                const fileInput = e.target;
                isEmptyValue = (fileInput.value === undefined);
            }
        }),
        formOptions: {
            name: 'demo',
            type: 'post',
            enctype: 'multipart/form-data',
            onsubmit: (e) => {
                e.preventDefault();
                const form = e.target;
                alert('Posted: ' + form.file.value);
                dialog.hide();
                isEmptyValue = true;
            }
        },
        footer: [
            m.component(button, {
                label: 'Cancel',
                events: {
                    onclick: () => (dialog.hide())
                }
            }),
            m.component(button, {
                disabled: isEmptyValue ? true : false,
                label: 'Post',
                tag: 'button',
                type: 'submit'
            })
        ],
        didHide: () => {
            isEmptyValue = true;
        }
    });
};

export default componentFn;
