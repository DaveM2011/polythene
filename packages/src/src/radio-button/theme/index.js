import defaultConfig from './config';
import customConfig from '../../config/custom';
const customConfigFn = customConfig['radio-button'];
import layout from './layout';
import color from './color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from '../../common/styler';
styler.add('pe-radio-button', layout(config), color(config));

// default icons
import iconOff from './icon-off';
import iconOn from './icon-on';

export default {
    iconOff,
    iconOn
};
