import m from 'mithril';
import button from 'polythene/button/button';
import primaryButton from './primary-button';

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', [
            m('.p-block-header', args.title),
            args.info ? args.info : null,
            args.content ? args.content : null
        ]);
    }
};

const module = {};
module.view = () => {
    return m('.example-custom-theme', [

        m('.p-block.p-block-info',
            m('p', m.trust('Theming is described in the <a href="https://github.com/ArthurClemens/Polythene/blob/master/theme/theme.md">Polythene theme documentation</a>.'))
        ),

        m.component(titleBlock, {
            title: 'Sub-classing a component',
            info: m('p', m.trust('Creating a wrapper around a Polythene component.')),
            content: m('div', {
                style: {
                    margin: '0 -4px'
                }
            }, [
                m.component(primaryButton, {label: 'One'}),
                m.component(primaryButton, {label: 'Two'}),
                m.component(primaryButton, {label: 'Three'})
            ])
        }),

        m.component(titleBlock, {
            title: 'Custom style as configuration',
            info: m('p', m.trust('Enhancing/replacing styles with configuration per component. This new configuration is scoped to this page.')),
            content: m('div', {
                style: {
                    margin: '0 -4px'
                }
            }, [
                m.component(button, {raised: true, label: 'One'}),
                m.component(button, {raised: true, label: 'Two'}),
                m.component(button, {raised: true, label: 'Three'})
            ])
        })
    ]);
};

export default module;
