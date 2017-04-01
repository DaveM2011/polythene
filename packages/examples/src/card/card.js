import m from 'mithril';
import card from 'polythene/card/card';
import list from 'polythene/list/list';
import listTile from 'polythene/list-tile/list-tile';
import button from 'polythene/button/button';
import iconBtn from 'polythene/icon-button/icon-button';
import styler from 'polythene/common/styler';
import style from './card-style';
styler.add('polythene-examples-card', style);

const IMG_URL = 'http://arthurclemens.github.io/assets/polythene/examples/';

import iconHeart from 'mmsvg/templarian/msvg/heart';
import iconBookmark from 'mmsvg/templarian/msvg/bookmark';
import iconShare from 'mmsvg/templarian/msvg/share';
import iconLess from 'mmsvg/google/msvg/navigation/expand-less';

const listTitle = 'Title line Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco';
const listSubtitle = 'Secondary text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const titleLineText = 'Title';
const infoLineText = 'Subhead';
const ipsum = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.';
const shortIpsum = 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';

const avatarImageUrl = (fileName) => 'http://arthurclemens.github.io/assets/polythene/examples/avatar-' + fileName;

const iconButtonRow = [
    m('.flex'),
    m.component(iconBtn, {
        icon: {
            msvg: iconHeart
        }
    }),
    m.component(iconBtn, {
        icon: {
            msvg: iconBookmark
        }
    }),
    m.component(iconBtn, {
        icon: {
            msvg: iconShare
        }
    })
];

const justifiedButtonRow = {
    layout: 'justified',
    class: 'pe-card__actions--tight',
    content: [
        m.component(iconBtn, {
            icon: {
                msvg: iconHeart
            }
        }),
        m.component(iconBtn, {
            icon: {
                msvg: iconBookmark
            }
        }),
        m.component(iconBtn, {
            icon: {
                msvg: iconShare
            }
        })
    ]
};

const titleImage = function(type, title) {
    return {
        class: 'demo-card',
        content: [{
            primary: {
                title: title,
                subtitle: 'Subtitle',
                media: {
                    ratio: 'square',
                    type,
                    content: m('img', {
                        src: IMG_URL + '1.jpg'
                    })
                }
            }
        }, {
            actions: {
                content: [
                    m.component(button, {
                        label: 'Action 1'
                    }),
                    m.component(button, {
                        label: 'Action 2'
                    })
                ]
            }
        }]
    };
};

const titleImageExtraLarge = function(ratio) {
    return {
        class: 'demo-card extra-large',
        content: [{
            primary: {
                content: [
                    {
                        media: {
                            ratio: ratio,
                            type: 'large',
                            content: m('img', {
                                src: IMG_URL + '1.jpg'
                            })
                        }
                    },
                    m('.flex'), {
                        actions: {
                            layout: 'vertical',
                            content: [
                                m.component(iconBtn, {
                                    icon: {
                                        msvg: iconHeart
                                    }
                                }),
                                m.component(iconBtn, {
                                    icon: {
                                        msvg: iconBookmark
                                    }
                                }),
                                m.component(iconBtn, {
                                    icon: {
                                        msvg: iconShare
                                    }
                                })
                            ]
                        }
                    }
                ]
            }
        }]
    };
};

const block = {
    view: function(ctrl, args) {
        return m('.p-block', {
            class: args.class || ''
        }, [
            m('.p-block-header', args.label),
            args.info ? args.info : null,
            m('.demo-cards.horizontal.layout.wrap', [
                args.card ? m.component(card, args.card) : null,
                args.cards ? args.cards.map(function(cardArgs) {
                    return m.component(card, cardArgs);
                }) : null
            ])
        ]);
    }
};

const module = {};
module.view = () => {
    return m('.module-card', [

        m.component(block, {
            label: 'Any content: list',
            card: {
                class: 'demo-card',
                content: m.component(list, {
                    hoverable: true,
                    tiles: [
                        m.component(listTile, {
                            title: listTitle,
                            subtitle: listSubtitle
                        }),
                        m.component(listTile, {
                            title: listTitle,
                            subtitle: listSubtitle
                        }),
                        m.component(listTile, {
                            title: listTitle,
                            subtitle: listSubtitle
                        })
                    ]
                })
            }
        }),

        m.component(block, {
            label: 'Text only',
            card: {
                class: 'demo-card',
                content: [{
                    primary: {
                        title: 'Primary title',
                        subtitle: 'Subtitle'
                    }
                }]
            }
        }),

        m.component(block, {
            label: 'Header with icon',
            cards: [{
                class: 'demo-card',
                content: [{
                    header: {
                        title: titleLineText,
                        subtitle: infoLineText,
                        icon: {
                            type: 'large',
                            class: 'pe-icon--avatar',
                            src: avatarImageUrl('1.png')
                        }
                    }
                }, {
                    media: {
                        content: m('img', {
                            src: IMG_URL + 'grey.jpg'
                        })
                    }
                }]
            }]
        }),

        m.component(block, {
            label: 'Primary text',
            card: {
                class: 'demo-card',
                content: [{
                    media: {
                        content: m('img', {
                            src: IMG_URL + 'grey.jpg'
                        })
                    }
                }, {
                    primary: {
                        title: 'Primary title',
                        subtitle: 'Subtitle'
                    }
                }]
            }
        }),

        m.component(block, {
            label: 'Primary text with supporting text',
            card: {
                class: 'demo-card',
                content: [{
                    media: {
                        content: m('img', {
                            src: IMG_URL + 'grey.jpg'
                        })
                    }
                }, {
                    primary: {
                        title: 'Primary title ' + shortIpsum,
                        subtitle: 'Subtitle ' + shortIpsum
                    }
                }, {
                    text: {
                        content: ipsum
                    }
                }]
            }
        }),

        m.component(block, {
            label: 'Primary text with action row and text',
            card: {
                class: 'demo-card',
                content: [{
                    media: {
                        content: m('img', {
                            src: IMG_URL + 'grey.jpg'
                        })
                    }
                }, {
                    primary: {
                        title: 'Primary title',
                        subtitle: 'Subtitle'
                    }
                }, {
                    actions: {
                        content: [
                            m.component(button, {
                                label: 'Action 1'
                            }),
                            m.component(button, {
                                label: 'Action 2'
                            }),
                            m('.flex'),
                            m.component(iconBtn, {
                                icon: {
                                    type: 'medium',
                                    msvg: iconLess
                                }
                            })
                        ]
                    }
                }, {
                    text: {
                        content: ipsum
                    }
                }]
            }
        }),

        m.component(block, {
            label: 'Bottom action row, bordered',
            cards: [{
                class: 'demo-card',
                content: [{
                    header: {
                        title: titleLineText,
                        subtitle: infoLineText,
                        icon: {
                            type: 'large',
                            class: 'pe-icon--avatar',
                            src: avatarImageUrl('1.png')
                        }
                    }
                }, {
                    media: {
                        content: m('img', {
                            src: IMG_URL + 'grey.jpg'
                        })
                    }
                }, {
                    text: {
                        content: ipsum
                    }
                }, {
                    actions: {
                        class: 'pe-card__actions--borders',
                        content: [
                            m.component(button, {
                                label: 'Action 1'
                            }),
                            m.component(button, {
                                label: 'Action 2'
                            }),
                            m('.flex'),
                            m.component(iconBtn, {
                                icon: {
                                    type: 'medium',
                                    msvg: iconLess
                                }
                            })
                        ]
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    header: {
                        title: titleLineText,
                        subtitle: infoLineText,
                        icon: {
                            type: 'large',
                            class: 'pe-icon--avatar',
                            src: avatarImageUrl('1.png')
                        }
                    }
                }, {
                    media: {
                        content: m('img', {
                            src: IMG_URL + 'grey.jpg'
                        })
                    }
                }, {
                    actions: {
                        layout: 'vertical',
                        content: [
                            m('.pe-card__actions.pe-card__actions--borders',
                                m.component(button, {
                                    label: 'Action 1'
                                })
                            ),
                            m('.pe-card__actions.pe-card__actions--borders',
                                m.component(button, {
                                    label: 'Action 2'
                                })
                            ),
                            m('.pe-card__actions.pe-card__actions--borders',
                                m.component(button, {
                                    label: 'Action 3'
                                })
                            )
                        ]
                    }
                }]
            }]
        }),

        m.component(block, {
            label: '16:9 media with square image',
            info: m('p', 'Anchor origin: default, start, end'),
            cards: [{
                class: 'demo-card',
                content: [{
                    media: {
                        content: m('img', {
                            src: IMG_URL + 'circle.png'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    media: {
                        origin: 'start',
                        content: m('img', {
                            src: IMG_URL + 'circle.png'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    media: {
                        origin: 'end',
                        content: m('img', {
                            src: IMG_URL + 'circle.png'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }]
        }),

        m.component(block, {
            label: '16:9 media with landscape image',
            info: m('p', 'Anchor origin: default, start, end'),
            cards: [{
                class: 'demo-card',
                content: [{
                    media: {
                        content: m('img', {
                            src: IMG_URL + '1.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    media: {
                        origin: 'start',
                        content: m('img', {
                            src: IMG_URL + '1.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    media: {
                        origin: 'end',
                        content: m('img', {
                            src: IMG_URL + '1.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }]
        }),

        m.component(block, {
            label: '16:9 media with portrait image',
            info: m('p', 'Anchor origin: default, start, end'),
            cards: [{
                class: 'demo-card',
                content: [{
                    media: {
                        content: m('img', {
                            src: IMG_URL + '2.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    media: {
                        origin: 'start',
                        content: m('img', {
                            src: IMG_URL + '2.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    media: {
                        origin: 'end',
                        content: m('img', {
                            src: IMG_URL + '2.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }]
        }),

        m.component(block, {
            label: '1:1 media with square image',
            info: m('p', 'Anchor origin: default, start, end'),
            cards: [{
                class: 'demo-card',
                content: [{
                    media: {
                        ratio: 'square',
                        content: m('img', {
                            src: IMG_URL + '1.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    media: {
                        ratio: 'square',
                        origin: 'start',
                        content: m('img', {
                            src: IMG_URL + '1.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    media: {
                        ratio: 'square',
                        origin: 'end',
                        content: m('img', {
                            src: IMG_URL + '1.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }]
        }),

        m.component(block, {
            label: 'Overlay with sheet',
            card: {
                class: 'demo-card',
                content: [{
                    media: {
                        ratio: 'square',
                        content: m('img', {
                            src: IMG_URL + '1.jpg'
                        }),
                        overlay: {
                            class: 'pe-dark-theme',
                            sheet: true,
                            content: [{
                                primary: {
                                    title: 'Primary title',
                                    subtitle: 'Subtitle'
                                }
                            }, {
                                actions: {
                                    content: [
                                        m.component(button, {
                                            label: 'Action 1'
                                        }),
                                        m.component(button, {
                                            label: 'Action 2'
                                        })
                                    ]
                                }
                            }]
                        }
                    }
                }]
            }
        }),

        m.component(block, {
            label: 'Overlay without sheet',
            cards: [{
                class: 'demo-card small',
                content: [{
                    media: {
                        ratio: 'square',
                        content: m('img', {
                            src: IMG_URL + '1.jpg'
                        }),
                        overlay: {
                            class: 'pe-dark-theme',
                            content: [{
                                primary: {
                                    title: 'Title'
                                }
                            }]
                        }
                    }
                }, {
                    actions: justifiedButtonRow
                }]
            }, {
                class: 'demo-card small',
                content: [{
                    media: {
                        ratio: 'square',
                        content: m('img', {
                            src: IMG_URL + '1.jpg'
                        }),
                        overlay: {
                            class: 'pe-dark-theme',
                            content: [{
                                primary: {
                                    title: 'Title'
                                }
                            }]
                        }
                    }
                }, {
                    actions: justifiedButtonRow
                }]
            }]
        }),

        m.component(block, {
            label: 'Title images',
            cards: [
                titleImage('small', 'Title image small'),
                titleImage('regular', 'Title image regular'),
                titleImage('medium', 'Title image medium'),
            ]
        }),

        m.component(block, {
            label: 'Title image large',
            cards: [
                titleImageExtraLarge('square'),
                titleImageExtraLarge('landscape')
            ]
        }),

        m.component(block, {
            label: 'Card URL',
            cards: [{
                class: 'demo-card',
                url: {
                    href: 'http://en.wikipedia.org/wiki/Road_to_Nowhere',
                    config: null
                },
                content: [{
                    header: {
                        title: titleLineText,
                        subtitle: infoLineText,
                        icon: {
                            type: 'large',
                            class: 'pe-icon--avatar',
                            src: avatarImageUrl('1.png')
                        },
                        url: {
                            href: 'http://www.imdb.com/name/nm0260632/',
                            config: null
                        }
                    }
                }, {
                    media: {
                        content: m('img', {
                            src: IMG_URL + '1.jpg'
                        })
                    }
                }, {
                    primary: {
                        title: 'Primary title',
                        subtitle: 'Subtitle'
                    }
                }, {
                    actions: {
                        content: [
                            m.component(button, {
                                label: 'Action 1',
                                events: {
                                    onclick: function(e) {
                                        // prevent URL
                                        e.preventDefault();
                                    }
                                }
                            }),
                            m.component(button, {
                                label: 'Action 2',
                                events: {
                                    onclick: function(e) {
                                        // prevent URL
                                        e.preventDefault();
                                    }
                                }
                            })
                        ]
                    }
                }]
            }]
        }),

        m.component(block, {
            label: 'Card events',
            cards: [{
                class: 'demo-card',
                events: {
                    onmouseover: function() {
                        this.classList.add('on');
                    },
                    onmouseout: function() {
                        this.classList.remove('on');
                    },
                    onclick: function() {
                        window.alert('Card clicked');
                    }
                },
                content: [{
                    header: {
                        title: titleLineText,
                        subtitle: infoLineText,
                        icon: {
                            type: 'large',
                            class: 'pe-icon--avatar',
                            src: avatarImageUrl('1.png')
                        }
                    }
                }, {
                    media: {
                        content: m('img', {
                            src: IMG_URL + '1.jpg'
                        })
                    }
                }, {
                    primary: {
                        title: 'Primary title',
                        subtitle: 'Subtitle'
                    }
                }, {
                    actions: {
                        content: [
                            m.component(button, {
                                label: 'Action 1',
                                events: {
                                    onclick: function(e) {
                                        // prevent card event
                                        e.stopPropagation();
                                        window.alert('Action 1 clicked');
                                    }
                                }
                            }),
                            m.component(button, {
                                label: 'Action 2',
                                events: {
                                    onclick: function(e) {
                                        // prevent card event
                                        e.stopPropagation();
                                        window.alert('Action 2 clicked');
                                    }
                                }
                            })
                        ]
                    }
                }]
            }]
        }),

        m.component(block, {
            label: 'Dark theme',
            card: {
                class: 'demo-card pe-dark-theme',
                content: [{
                    header: {
                        title: titleLineText,
                        subtitle: infoLineText,
                        icon: {
                            type: 'large',
                            class: 'pe-icon--avatar',
                            src: avatarImageUrl('1.png')
                        }
                    }
                }, {
                    media: {
                        content: m('img', {
                            src: IMG_URL + 'grey.jpg'
                        })
                    }
                }, {
                    primary: {
                        title: 'Primary title ' + shortIpsum,
                        subtitle: 'Subtitle ' + shortIpsum
                    }
                }, {
                    text: {
                        content: ipsum
                    }
                }, {
                    actions: {
                        class: 'pe-card__actions--borders',
                        content: [
                            m.component(button, {
                                label: 'Action 1'
                            }),
                            m.component(button, {
                                label: 'Action 2'
                            }),
                            m('.flex'),
                            m.component(iconBtn, {
                                icon: {
                                    type: 'medium',
                                    msvg: iconLess
                                }
                            })
                        ]
                    }
                }]
            }
        }),

        m.component(block, {
            label: 'Custom cards',
            cards: [{
                class: 'demo-card custom custom-travel',
                content: [{
                    primary: {
                        content: [{
                            title: m('.pe-card__title', [
                                m('.pe-card__subtitle', 'Travel'),
                                m('span', 'Road Trip')
                            ])
                        }, {
                            media: {
                                ratio: 'square',
                                type: 'small',
                                content: m('img', {
                                    src: IMG_URL + '1.jpg'
                                })
                            }
                        }]
                    }
                }, {
                    text: {
                        content: 'A road trip is a long distance journey on the road. Typically, road trips are long distances traveled by automobile.'
                    }
                }, {
                    actions: {
                        content: [
                            m.component(button, {
                                label: 'Action 1'
                            }),
                            m.component(button, {
                                label: 'Action 2'
                            })
                        ]
                    }
                }]
            }, {
                class: 'demo-card custom custom-sand pe-dark-theme',
                content: [{
                    primary: {
                        title: 'Get Ready',
                        subtitle: '2 Unlimited',
                        media: {
                            ratio: 'square',
                            type: 'medium',
                            content: m('img', {
                                src: 'http://www.the2unlimited.com/pochettes/GET%20READY%2001.JPG'
                            })
                        }
                    }
                }, {
                    actions: {
                        content: [
                            m.component(button, {
                                label: 'Listen now'
                            })
                        ]
                    }
                }]
            }, {
                class: 'demo-card custom custom-sky pe-dark-theme',
                content: [{
                    primary: {
                        title: 'Supermodel',
                        subtitle: 'Foster the People',
                        media: {
                            ratio: 'square',
                            type: 'medium',
                            content: m('img', {
                                src: 'http://upload.wikimedia.org/wikipedia/en/f/f9/Foster_the_People_-_Supermodel.jpg'
                            })
                        }
                    }
                }, {
                    actions: {
                        content: [
                            m.component(button, {
                                label: 'Listen now'
                            })
                        ]
                    }
                }]
            }, {
                class: 'demo-card custom custom-bucket pe-dark-theme',
                content: [{
                    primary: {
                        title: 'Bucket List'
                    }
                }, {
                    text: {
                        content: m.trust('<ul><li>Skydiving</li><li>Alaska</li><li>Kite surfing</li></ul>')
                    }
                }, {
                    actions: {
                        content: [
                            m.component(button, {
                                label: 'Edit'
                            })
                        ]
                    }
                }]
            }]
        }),

        m.component(block, {
            label: 'Depth',
            cards: [{
                class: 'demo-card small',
                content: [{
                    text: {
                        class: 'pe-card__text--tight',
                        content: 'Normal'
                    }
                }]
            }, {
                class: 'demo-card small',
                content: [{
                    text: {
                        class: 'pe-card__text--tight',
                        content: 'Flat'
                    }
                }],
                z: 0
            }, {
                class: 'demo-card small',
                content: [{
                    text: {
                        class: 'pe-card__text--tight',
                        content: 'Raised'
                    }
                }],
                z: 2
            }]
        }),

        m.component(block, {
            label: 'Separate elements combined',
            cards: [{
                class: 'demo-card',
                content: [{
                    media: {
                        content: m('img', {
                            src: IMG_URL + '3.jpg'
                        })
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    text: {
                        content: m.trust('<strong>Normal - 24px bottom padding</strong> ' + ipsum)
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    text: {
                        content: m.trust('<strong>Class: card__text--tight: 16px bottom padding</strong> ' + ipsum),
                        class: 'pe-card__text--tight'
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    header: {
                        title: titleLineText,
                        subtitle: infoLineText,
                        icon: {
                            type: 'large',
                            class: 'pe-icon--avatar',
                            src: avatarImageUrl('1.png')
                        }
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    primary: {
                        title: 'Primary title',
                        subtitle: 'Normal - 24px bottom padding'
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    primary: {
                        title: 'Primary title',
                        subtitle: 'Class: card__primary--tight: 16px bottom padding',
                        class: 'pe-card__primary--tight'
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    actions: {
                        content: [
                            m.component(button, {
                                label: 'Action 1'
                            }),
                            m.component(button, {
                                label: 'Action 2'
                            })
                        ]
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    actions: {
                        tag: '.layout.vertical.start',
                        content: [
                            m.component(button, {
                                label: 'Action 1'
                            }),
                            m.component(button, {
                                label: 'Action 2'
                            }),
                            m.component(button, {
                                label: 'Action 3'
                            })
                        ]
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }]
        })

    ]);
};

export default module;
