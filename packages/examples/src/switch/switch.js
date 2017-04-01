import m from 'mithril';
import switchCmp from 'polythene/switch/switch';
import styler from 'polythene/common/styler';
import style from './switch-style';
styler.add('polythene-examples-switch', style);

import icon from 'polythene/icon/icon';
import bullseyeIcon from '../assets/bullseye';

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {class: args.class || ''}, [
            m('.p-block-header', args.title),
            args.info ? args.info : null,
            args.content
        ]);
    }
};

const module = {};
module.controller = () => {
    return {
        switchState: m.prop(false),
        switchListenerState: m.prop(false)
    };
};
module.view = (ctrl) => {
    return m('.module-switch', [

        m('.p-block.p-block-info', [
            m('p', [
                m('span', 'See also '),
                m('a', {
                    href: '/checkbox',
                    config: m.route
                }, 'Checkbox'),
                m('span', ' and '),
                m('a', {
                    href: '/radio-button',
                    config: m.route
                }, 'Radio button'),
                m('span', '.')
            ]),
            m('p', [
                'On desktop, TAB can be used to give focus, ENTER to select.',
            ])
        ]),

        m.component(titleBlock, {
            title: 'Default switch',
            content: m('.row', [
                m.component(switchCmp)
            ])
        }),

        m.component(titleBlock, {
            title: 'With label',
            content: [
                m.component(switchCmp, {
                    label: 'Switch'
                })
            ]
        }),

        m.component(titleBlock, {
            title: 'Custom color',
            class: 'custom-color',
            content: [
                m.component(switchCmp)
            ]
        }),

        m.component(titleBlock, {
            title: 'Custom icon',
            class: 'custom-icon',
            content: [
                m.component(switchCmp, {
                    icon: m.component(icon, {
                        msvg: bullseyeIcon
                    })
                })
            ]
        }),

        m.component(titleBlock, {
            title: 'No shadow, custom color',
            class: 'custom-color',
            content: m('.row', [
                m.component(switchCmp, {
                    raised: false,
                    wash: false
                })
            ])
        }),

        m.component(titleBlock, {
            title: 'Custom shadow depth',
            info: m('p', 'Starting at depth 0.'),
            class: 'custom-color',
            content: m('.row', [
                m.component(switchCmp, {
                    zOff: 0,
                    zOn: 1
                })
            ])
        }),

        m.component(titleBlock, {
            title: 'Custom size',
            content: ['large', 'medium', 'regular', 'small'].map((size) => {
                const sizeStr = size.toString();
                return m('.row', [
                    m.component(switchCmp, {
                        label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                        size: size
                    })
                ]);
            })
        }),

        m.component(titleBlock, {
            title: ('Checked state: ' + ctrl.switchState()),
            content: [
                m.component(switchCmp, {
                    checked: ctrl.switchState,
                    getState: (state) => (ctrl.switchState(state.checked))
                })
            ]
        }),

        m.component(titleBlock, {
            title: 'Setting the value from outside',
            content: [
                m.component(switchCmp, {
                    label: 'Initiator',
                    getState: (state) => (ctrl.switchListenerState(state.checked))
                }),
                m.component(switchCmp, {
                    label: 'Result',
                    disabled: true,
                    checked: ctrl.switchListenerState
                })
            ]
        }),

        m.component(titleBlock, {
            title: 'Disabled',
            content: [
                m.component(switchCmp, {
                    label: 'Off',
                    disabled: true
                }),
                m.component(switchCmp, {
                    label: 'On',
                    disabled: true,
                    checked: true
                })
            ]
        }),

        m.component(titleBlock, {
            title: 'Dark theme',
            class: 'pe-dark-theme',
            content: [
                m.component(switchCmp, {
                    label: 'Switch'
                }),
                m.component(switchCmp, {
                    label: 'Switch',
                    checked: true
                })
            ]
        }),

        m.component(titleBlock, {
            title: 'Dark theme: disabled',
            class: 'pe-dark-theme',
            content: [
                m.component(switchCmp, {
                    label: 'Off',
                    disabled: true
                }),
                m.component(switchCmp, {
                    label: 'On',
                    disabled: true,
                    checked: true
                })
            ]
        })
    ]);
};

export default module;
