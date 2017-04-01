import defaultConfig from './config';
import customConfig from '../../config/custom';
const customConfigFn = customConfig.fab;
import layout from './layout';
import color from './color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from '../../common/styler';
styler.add('pe-fab', layout(config), color(config));
