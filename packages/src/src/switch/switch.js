import m from 'mithril';
import selectionControl from '../selection-control/selection-control';
import shadow from '../shadow/shadow';
import iconButton from '../icon-button/icon-button';
import './theme';

const CSS_CLASSES = {
    block: 'pe-control--switch',
    track: 'pe-control--switch__track',
    thumb: 'pe-control--switch__thumb',
    knob: 'pe-control--switch__knob'
};

const selectionView = (checked, opts) => {
    const zOff = (opts.zOff !== undefined) ? opts.zOff : 1;
    const zOn = (opts.zOn !== undefined) ? opts.zOn : 2;
    const z = checked ? zOn : zOff;
    const raised = (opts.disabled)
        ? false
        : (opts.raised !== undefined) ? opts.raised : true;
    return [
        m('div', {class: CSS_CLASSES.track}),
        m(iconButton,
            {
                class: CSS_CLASSES.thumb,
                tabindex: opts.tabindex || 0,
                ink: (opts.ink !== undefined) ? opts.ink : false,
                wash: opts.wash,
                disabled: opts.disabled,
                content: [
                    m('div',
                        {
                            class: CSS_CLASSES.knob
                        },
                        [
                            opts.icon ? opts.icon : null,
                            raised
                                ? m(shadow, {
                                    z: z,
                                    animated: true
                                })
                                : null
                        ]
                    )
                ]
            }
        )
    ];
};

const selectable = () => (true);

const createView = (ctrl, opts = {}) => {
    opts.defaultClass = CSS_CLASSES.block;
    opts.type = 'checkbox';
    opts.selectionView = selectionView;
    opts.selectable = selectable;
    return m(selectionControl, opts);
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
