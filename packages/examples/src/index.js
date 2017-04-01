import 'polythene/common/no-tap-delay';

import m from 'mithril';
import icon from 'polythene/icon/icon';
import toolbar from 'polythene/toolbar/toolbar';
import list from 'polythene/list/list';
import listTile from 'polythene/list-tile/list-tile';
import headerPanel from 'polythene/header-panel/header-panel';
import dialog from 'polythene/dialog/dialog';
import nav from './app/nav';
import github from './app/github';
import page from './page';

// Material Design style
import 'polythene/theme/theme';
import 'polythene/layout/theme/theme';
// Local styles
import styler from 'polythene/common/styler';
import appStyle from './app/app-style';
styler.add('polythene-examples-app', appStyle);

import listItemIcon from 'mmsvg/templarian/msvg/arrow-right';
import recycleIcon from './assets/recycle';

import mButton from './button/button';
import mCard from './card/card';
import mCheckbox from './checkbox/checkbox';
import mCustomTheme from './custom-theme/custom-theme';
import mDialog from './dialog/dialog';
// import mFab from './fab/fab';
// import mHeaderPanel from './header-panel/header-panel';
// import mIcon from './icon/icon';
// import mIconButton from './icon-button/icon-button';
// import mLayout from './layout/layout';
// import mList from './list/list';
// import mListControls from './list-controls/list-controls';
// import mListTile from './list-tile/list-tile';
// import mMenu from './menu/menu';
// import mNotification from './notification/notification';
// import mRadioButton from './radio-button/radio-button';
// import mRipple from './ripple/ripple';
// import mSearch from './search/search';
// import mShadow from './shadow/shadow';
// import mSlider from './slider/slider';
// import mSpeedTest from './speed-test/speed-test';
// import mSpinner from './spinner/spinner';
// import mSVG from './svg/svg';
import mSwitch from './switch/switch';
// import mTabs from './tabs/tabs';
// import mTabsMenu from './tabs/tabs-menu';
// import mTabsRouting from './tabs/tabs-routing';
// import mTextfield from './textfield/textfield';
// import mToolbar from './toolbar/toolbar';
// import mValidation from './validation/validation';

const links = [
  {
    label: 'Components',
    links: [
      // {
      //   url: '/header-panel',
      //   module: mHeaderPanel,
      //   name: 'Header Panel',
      //   doc: 'http://polythene.js.org/#header-panel'
      // },
      // {
      //   url: '/toolbar',
      //   module: mToolbar,
      //   name: 'Toolbar',
      //   doc: 'http://polythene.js.org/#toolbar'
      // },
      // {
      //   url: '/list',
      //   module: mList,
      //   name: 'List'
      // },
      // {
      //   url: '/list-controls',
      //   module: mListControls,
      //   name: 'List Controls'
      // },
      {
        url: '/dialog',
        module: mDialog,
        name: 'Dialog'
      },
      // {
      //   url: '/menu',
      //   module: mMenu,
      //   name: 'Menu'
      // },
      // {
      //   url: '/tabs',
      //   module: mTabs,
      //   name: 'Tabs'
      // },
      {
        url: '/card',
        module: mCard,
        name: 'Card'
      },
      // {
      //   url: '/notification',
      //   module: mNotification,
      //   name: 'Notification and Snackbar'
      // },
      {
        url: '/button',
        module: mButton,
        name: 'Button'
      },
      // {
      //   url: '/icon-button',
      //   module: mIconButton,
      //   name: 'Icon Button'
      // },
      // {
      //   url: '/fab',
      //   module: mFab,
      //   name: 'Floating Action Button'
      // },
      // {
      //   url: '/slider',
      //   module: mSlider,
      //   name: 'Slider'
      // },
      // {
      //   url: '/list-tile',
      //   module: mListTile,
      //   name: 'List Tile'
      // },
      // {
      //   url: '/textfield',
      //   module: mTextfield,
      //   name: 'Text field'
      // },
      {
        url: '/checkbox',
        module: mCheckbox,
        name: 'Checkbox'
      },
      // {
      //   url: '/radio-button',
      //   module: mRadioButton,
      //   name: 'Radio button'
      // },
      // {
      //   url: '/search',
      //   module: mSearch,
      //   name: 'Search'
      // },
      // {
      //   url: '/spinner',
      //   module: mSpinner,
      //   name: 'Spinner'
      // },
      {
        url: '/switch',
        module: mSwitch,
        name: 'Switch'
      },
      // {
      //   url: '/svg',
      //   module: mSVG,
      //   name: 'SVG'
      // },
      // {
      //   url: '/icon',
      //   module: mIcon,
      //   name: 'Icon'
      // },
      // {
      //   url: '/ripple',
      //   module: mRipple,
      //   name: 'Ripple'
      // },
      // {
      //   url: '/shadow',
      //   module: mShadow,
      //   name: 'Shadow'
      // },
      // {
      //   url: '/validation',
      //   name: 'Validation',
      //   module: mValidation
      // }
    ]
  }, {
    label: 'Layout and theming',
    links: [
      // {
      //   url: '/layout',
      //   module: mLayout,
      //   name: 'Layout'
      // },
      {
        url: '/custom-theme',
        module: mCustomTheme,
        name: 'Custom theme'
      }
    ]
  }, {
    label: 'Tests',
    links: [
      // {
      //   url: '/speed-test',
      //   module: mSpeedTest,
      //   name: 'Mobile tap speed tests'
      // }
    ]
  }
];

const additionalRoutes = [
  {
    url: '/dialog/:any...',
    module: mDialog
  },
  // {
  //   url: '/tabs-routing',
  //   module: mTabsRouting
  // },
  // {
  //   url: '/tabs-menu',
  //   module: mTabsMenu
  // }
];

const linkMap = {};
links.forEach((group) => {
  group.links.forEach((linkData) => {
    linkMap[linkData.url] = linkData;
  });
});
additionalRoutes.forEach((linkData) => {
  linkMap[linkData.url] = linkData;
});

const sortLinkData = ((a, b) => {
  const a1 = a.name.toLowerCase();
  const b1 = b.name.toLowerCase();
  return (a1 > b1) ? 1 : (a1 < b1 ? -1 : 0);
});

const getRouteBase = (route) => {
  return '/' + route.split(/\//)[1];
};

const item = link =>
  m(listTile, {
    title: link.name,
    url: {
      href: link.url,
      config: (link.config !== undefined) ? link.config : m.route
    }
  });

const index = {
  ctrl: () => {
    document.title = "Polythene Examples";
  },
  view: () => m("div",
    [
      m(toolbar, {
        class: "app-toolbar",
        topBar: m("span", "Polythene Examples")
      }),
      m('.index',
        m('.index-list', [
          links.map((linkGroup) => {
            return m(list, {
              header: {
                title: linkGroup.label
              },
              tiles: linkGroup.links.sort(sortLinkData).map((link) => {
                return link.hidden ? null : item(link);
              }),
              hoverable: true
            });
          })
        ])
      ),
      github
      // m(list, {
      //   hoverable: true,
      //   tiles: pages.map(link => (
      //     m(listTile, {
      //       title: link.name,
      //       url: {
      //         href: link.path,
      //         config: m.route
      //       }
      //     })
      //   ))
      // })
    ])
};

m.route.mode = 'hash';
const mountNode = document.querySelector("#app");
const routes = {
  "/": index
};
links.forEach(group =>
  group.links.forEach(data =>
    routes[data.url] = page(data.name, data.module, "/")
  )
);
m.route(mountNode, "/", routes);

