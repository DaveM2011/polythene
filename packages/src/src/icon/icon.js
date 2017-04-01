import '../common/object.assign';
import m from 'mithril';
import svg from '../svg/svg';
import './theme';

const CSS_CLASSES = {
    icon: 'pe-icon',
    avatar: 'pe-icon--avatar',
    small: 'pe-icon--small',
    regular: 'pe-icon--regular',
    medium: 'pe-icon--medium',
    large: 'pe-icon--large'
};

const typeClasses = {
    small: CSS_CLASSES.small,
    regular: CSS_CLASSES.regular,
    medium: CSS_CLASSES.medium,
    large: CSS_CLASSES.large
};

const classForType = (mode = 'regular') => {
    return typeClasses[mode];
};

const layoutContent = (opts) => {
    if (opts.content) {
        return opts.content;
    } else if (opts.svg) {
        let svgOpts = Object.assign({}, opts.svg);
        svgOpts.tag = svgOpts.tag || 'i';
        return m(svg, svgOpts);
    } else if (opts.msvg) {
        return m('i.pe-svg', m.trust(opts.msvg));
    } else {
        return m('i',
            m('img', {
                src: opts.src
            })
        );
    }
};

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || 'div';
    const props = Object.assign({},
        {
            class: [CSS_CLASSES.icon, classForType(opts.type), opts.class].join(' '),
            id: opts.id || '',
            config: opts.config
        },
        opts.events ? opts.events : null
    );
    const content = layoutContent(opts);
    return m(tag, props, [opts.before, content, opts.after]);
};

const component = {
    controller: () => {
        m.redraw.strategy('none');
    },
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
