import m from 'mithril';
import checkbox from 'polythene/checkbox/checkbox';
import styler from 'polythene/common/styler';
import style from '../checkbox/checkbox-style';
styler.add('polythene-examples-checkbox', style);

import iconStar from 'mmsvg/google/msvg/toggle/star';
import iconStarOutline from 'mmsvg/google/msvg/toggle/star-border';

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {class: args.class || ''}, [
            m('.p-block-header', args.title),
            args.content
        ]);
    }
};

const module = {};
module.controller = () => {
    m.redraw.strategy('all');
    return {
        checkboxState: m.prop(false),
        checkboxValue: m.prop(undefined),
        checkboxListenerState: m.prop(false),
    };
};
module.view = (ctrl) => {
    return m('.module-checkbox', [

        m('.p-block.p-block-info', [
            m('p', [
                m('span', 'See also '),
                m('a', {
                    href: '/switch',
                    config: m.route
                }, 'Switch'),
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
            title: 'Default checkbox',
            content: m('.row', [
                m.component(checkbox),
                m.component(checkbox, {
                    checked: true
                })
            ])
        }),

        m.component(titleBlock, {
            title: 'Custom hover behavior',
            content: m('.row', [
                m.component(checkbox, {
                    name: 'custom1',
                    checked: false,
                    iconButton: {
                        wash: true,
                        ink: false
                    }
                }),
                m.component(checkbox, {
                    checked: true,
                    name: 'custom2',
                    iconButton: {
                        wash: true,
                        ink: false
                    }
                })
            ])
        }),

        m.component(titleBlock, {
            title: 'With label',
            content: [
                m.component(checkbox, {
                    label: 'Checkbox',
                    checked: false
                }),
                m.component(checkbox, {
                    label: 'Checkbox',
                    checked: true
                })
            ]
        }),

        m.component(titleBlock, {
            title: 'Custom color',
            class: 'custom-color',
            content: [
                m.component(checkbox, {
                    label: 'Checkbox',
                    checked: false
                }),
                m.component(checkbox, {
                    label: 'Checkbox',
                    checked: true
                })
            ]
        }),

        m.component(titleBlock, {
            title: 'Custom size',
            content: ['large', 'medium', 'regular', 'small'].map((size) => {
                const sizeStr = size.toString();
                return m('.row', [
                    m.component(checkbox, {
                        label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                        checked: false,
                        size: size
                    })
                ]);
            })
        }),

        m.component(titleBlock, {
            title: 'Custom icon',
            content: ['large', 'medium', 'regular', 'small'].map((size) => {
                const sizeStr = size.toString();
                return m('.row', [
                    m.component(checkbox, {
                        label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                        checked: false,
                        iconOn: {
                            msvg: iconStar
                        },
                        iconOff: {
                            msvg: iconStarOutline
                        },
                        size: size
                    })
                ]);
            })
        }),

        m.component(titleBlock, {
            title: ('Checked state: ' + ctrl.checkboxState()),
            content: [
                m.component(checkbox, {
                    label: 'Checkbox',
                    checked: ctrl.checkboxState,
                    getState: (state) => (ctrl.checkboxState(state.checked))
                })
            ]
        }),

        m.component(titleBlock, {
            title: 'Setting the value from outside',
            content: [
                m.component(checkbox, {
                    label: 'Initiator',
                    getState: (state) => (ctrl.checkboxListenerState(state.checked))
                }),
                m.component(checkbox, {
                    label: 'Result',
                    disabled: true,
                    checked: ctrl.checkboxListenerState
                })
            ]
        }),

        m.component(titleBlock, {
            title: 'Disabled',
            content: [
                m.component(checkbox, {
                    label: 'Checkbox',
                    checked: false,
                    disabled: true
                }),
                m.component(checkbox, {
                    label: 'Checkbox',
                    checked: true,
                    disabled: true
                })
            ]
        }),

        m.component(titleBlock, {
            title: 'Dark theme',
            class: 'pe-dark-theme',
            content: [
                m.component(checkbox, {
                    label: 'Checkbox',
                    checked: false
                }),
                m.component(checkbox, {
                    label: 'Checkbox',
                    checked: true
                })
            ]
        }),

        m.component(titleBlock, {
            title: 'Dark theme: disabled',
            class: 'pe-dark-theme',
            content: [
                m.component(checkbox, {
                    label: 'Checkbox',
                    checked: false,
                    disabled: true
                }),
                m.component(checkbox, {
                    label: 'Checkbox',
                    checked: true,
                    disabled: true
                })
            ]
        })
    ]);
};

export default module;
