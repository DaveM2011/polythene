import m from 'mithril';
import styler from 'polythene/common/styler';
import buttonRow from './button-row';
import style from './button-style';
styler.add('polythene-examples-button', style);

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {
            class: args.class
        }, [
            m('.p-block-header', args.title),
            args.content ? args.content : null
        ]);
    }
};

const module = {};
module.view = () => {
    return m('.module-button', [
        m.component(titleBlock, {
            title: 'Raised Light / Light theme',
            content: m('.button-row', buttonRow({
                raised: true
            }))
        }),
        m.component(titleBlock, {
            title: 'Flat Light / Light theme',
            content: m('.button-row', buttonRow({
                raised: false
            }))
        }),
        m.component(titleBlock, {
            title: 'Raised Dark / Dark theme',
            class: 'pe-dark-theme',
            content: m('.button-row', buttonRow({
                raised: true
            }))
        }),
        m.component(titleBlock, {
            title: 'Flat Dark / Dark theme',
            class: 'pe-dark-theme',
            content: m('.button-row', buttonRow({
                raised: false
            }))
        })
    ]);
};

export default module;
