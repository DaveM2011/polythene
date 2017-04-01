import 'polythene/common/object.assign';

console.log("custom js");

export default {
    button: config => {
        const mainColor = '#e4521b';
        const textColor = '#fff';
        const configCustomCfg = Object.assign({}, config, {
            border_radius: 0,
            color_light_raised_normal_background: mainColor,
            color_light_raised_normal_text: textColor,
            color_dark_raised_normal_background: mainColor,
            color_dark_raised_normal_text: textColor
        });
        return [
            {'': config}, // all pages
            {'.example-custom-theme ': configCustomCfg} // only this page
        ];
    }
};
