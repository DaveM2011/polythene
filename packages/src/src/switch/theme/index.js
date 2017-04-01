import defaultConfig from './config';
import customConfig from '../../config/custom';
const customConfigFn = customConfig.switch;
import layout from './layout';
import color from './color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from '../../common/styler';
styler.add('pe-switch', layout(config), color(config));
