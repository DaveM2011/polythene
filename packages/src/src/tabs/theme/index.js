import defaultConfig from './config';
import customConfig from '../../config/custom';
const customConfigFn = customConfig.tabs;
import layout from './layout';
import color from './color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from 'polythene/common/styler';
styler.add('pe-tabs', layout(config), color(config));

// default icons
import arrowBackward from './chevron-left';
import arrowForward from './chevron-right';

export default {
    arrowBackward: {
        msvg: arrowBackward
    },
    arrowForward: {
        msvg: arrowForward
    }
};
