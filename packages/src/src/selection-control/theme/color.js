
// Returns a style function to be used by checkbox and radio-button

const style = (config, tint, scope = '') => {
    return [{
        [scope + '.pe-control']: {
            color: config['color_' + tint + '_on_text'], // override by specifying 'color'

            ' .pe-control__label': {
                ' span': {
                    color: config['color_' + tint + '_label_text']
                }
            },
            ' .pe-control__box': {
                ' .pe-control__button': {
                    color: 'currentcolor',

                    ' .pe-control__button--on': {
                        color: 'currentcolor'
                    },

                    ' .pe-control__button--off': {
                        color: config['color_' + tint + '_off_icon']
                    }
                }
            },
            '&.pe-control--off': {
                ' .pe-button--focus .pe-button__focus': {
                    opacity: config['color_' + tint + '_focus_off_opacity'],
                    'background-color': config['color_' + tint + '_focus_off']
                },
                // reverse the ripple color so that it corresponds to the resulting state
                ' .pe-ripple': {
                    color: config['color_' + tint + '_focus_on']
                }
            },
            '&.pe-control--on': {
                ' .pe-button--focus .pe-button__focus': {
                    opacity: config['color_' + tint + '_focus_on_opacity'],
                    'background-color': config['color_' + tint + '_focus_on']
                },
                // reverse the ripple color so that it corresponds to the resulting state
                ' .pe-ripple': {
                    color: config['color_' + tint + '_focus_off']
                }
            },

            '&.pe-control--disabled': {
                ' .pe-control__label span': {
                    color: config['color_' + tint + '_disabled_text']
                },
                ' .pe-control__box': {
                    ' .pe-control__button--on, .pe-control__button--off': {
                        color: config['color_' + tint + '_disabled_text']
                    }
                }
            }
        }
    }];
};

export default style;
