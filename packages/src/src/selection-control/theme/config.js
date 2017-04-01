import common from 'polythene/config/config';

const activeColor = common.color_primary; // or override in CSS by setting 'color' property on '.pe-checkbox' / '.pe-radio-button'
const rgba = common.rgba;
const label_padding = (common.grid_unit_icon_button - common.unit_icon_size) / 2; // 12

export default {
    label_font_size: 2 * common.grid_unit_component, // 16
    label_height: 3 * common.grid_unit_component, // 24
    padding: Math.floor(1.7 * common.grid_unit_component),
    label_padding,
    button_size: 6 * common.grid_unit_component,
    icon_size: 3 * common.grid_unit_component,
    animation_duration: common.animation_duration,

    color_light_on_text: common.rgba(activeColor),
    color_light_off_text: rgba(common.color_light_foreground, common.blend_light_text_secondary),
    color_light_off_icon: rgba(common.color_light_foreground, common.blend_light_text_secondary),
    color_light_label_text: rgba(common.color_light_foreground, common.blend_light_text_secondary),
    color_light_disabled_text: rgba(common.color_light_foreground, common.blend_light_text_disabled),
    color_light_thumb_off_focus_opacity: .08,
    color_light_thumb_on_focus_opacity: .11,

    color_light_focus_on: rgba(common.color_primary),
    color_light_focus_on_opacity: .11,
    color_light_focus_off: rgba(common.color_light_foreground),
    color_light_focus_off_opacity: .07,

    color_dark_on_text: common.rgba(activeColor),
    color_dark_off_text: rgba(common.color_dark_foreground, common.blend_dark_text_secondary),
    color_dark_off_icon: '#fff',
    color_dark_label_text: rgba(common.color_dark_foreground, common.blend_dark_text_secondary),
    color_dark_disabled_text: rgba(common.color_dark_foreground, common.blend_dark_text_disabled),
    color_dark_thumb_off_focus_opacity: .08,
    color_dark_thumb_on_focus_opacity: .11,

    color_dark_focus_on: rgba(common.color_primary), // or '#80cbc4'
    color_dark_focus_on_opacity: .14,
    color_dark_focus_off: rgba(common.color_dark_foreground),
    color_dark_focus_off_opacity: .09
};
