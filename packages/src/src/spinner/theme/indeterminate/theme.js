import defaultConfig from './config';
const customConfigFn = undefined;
import layout from './layout';
import color from './color';

const config = customConfigFn ? customConfigFn(defaultConfig) : defaultConfig;

import styler from '../../../common/styler';
styler.add('pe-spinner-indeterminate', layout(config), color(config));
