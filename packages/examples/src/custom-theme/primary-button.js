import m from 'mithril';
import button from 'polythene/button/button';

import 'polythene/common/object.assign';
import defaultConfig from 'polythene/button/theme/config';
import layout from 'polythene/button/theme/layout';
import color from 'polythene/button/theme/color';
import styler from 'polythene/common/styler';

const reconfig = (cfg) => {
    return [
        {'.my-button--primary': Object.assign({}, cfg,
            {
                border_radius: 0,
                text_transform: 'none',
                color_light_flat_normal_background: '#673ab7',
                color_light_flat_normal_text: '#fff'
            }
        )}
    ];
};

const newConfig = reconfig(defaultConfig);
styler.add('my-button-primary', layout(newConfig), color(newConfig));

export default {
    view: (ctrl, opts = {}) => {
        opts.class = (opts.class || '') + ' my-button--primary';
        opts.borders = true;
        return m.component(button, opts);
    }
};
