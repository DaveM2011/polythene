import m from "mithril";
import icon from "polythene-icon";
import svg from "polythene-svg";

const trustedSvg = m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>");

import iconStars from "mmsvg/google/msvg/action/stars";
import wrenchSvg from "mmsvg/zondicons/msvg/wrench";

icon.theme(".tests-icon-themed-icon", {
  size_regular: 50,
  color_light: "purple",
  color_dark: "orange"
});

export const tests = [
  {
    name: "Child node (svg children mmsvg)",
    component: icon,
    attrs: null,
    children: m(svg, [iconStars])
  },
  {
    name: "Option: content",
    component: icon,
    attrs: {
      content: iconStars
    }
  },
  {
    name: "Option: content (svg trusted content)",
    component: icon,
    attrs: {
      svg: { content: trustedSvg }
    }
  },
  {
    name: "Option: content (svg content mmsvg)",
    component: icon,
    attrs: {
      svg: { content: iconStars }
    }
  },
  {
    name: "Option: msvg",
    component: icon,
    attrs: {
      msvg: iconStars
    }
  },
  {
    name: "Option: msvg (Zondicons)",
    component: icon,
    attrs: {
      msvg: wrenchSvg
    }
  },
  {
    name: "Option: src (image file)",
    component: icon,
    attrs: {
      src: "img/arrow-back.png"
    }
  },
  {
    name: "Option: src (svg file)",
    component: icon,
    attrs: {
      src: "img/arrow-back.svg"
    }
  },
  {
    name: "Option: style",
    component: icon,
    attrs: {
      msvg: iconStars,
      style: {
        color: "#EF6C00"
      }
    }
  },
  {
    name: "Themed (color and size)",
    component: icon,
    attrs: {
      msvg: iconStars,
      class: "tests-icon-themed-icon"
    }
  },
  {
    name: "Option: type (small)",
    component: icon,
    attrs: {
      msvg: iconStars,
      type: "small"
    }
  },
  {
    name: "Option: type (regular)",
    component: icon,
    attrs: {
      msvg: iconStars,
      type: "regular"
    }
  },
  {
    name: "Option: type (medium)",
    component: icon,
    attrs: {
      msvg: iconStars,
      type: "medium"
    }
  },
  {
    name: "Option: type (large)",
    component: icon,
    attrs: {
      msvg: iconStars,
      type: "large"
    }
  },
  {
    name: "Option: avatar (type large)",
    component: icon,
    attrs: {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
      avatar: true,
      type: "large"
    }
  },

  // Dark tone

  {
    name: "Child node (svg children mmsvg) -- dark theme class (color set with style option)",
    component: icon,
    class: "pe-dark-tone",
    attrs: {
      style: {
        color: "#fff"
      }
    },
    children: m(svg, [iconStars])
  },
  {
    name: "Themed (color and size) -- dark theme class",
    component: icon,
    class: "pe-dark-tone",
    attrs: {
      msvg: iconStars,
      class: "tests-icon-themed-icon"
    }
  },
  {
    name: "Dark tone class + light theme class",
    class: "pe-dark-tone",
    component: {
      view: () => m(".pe-light-tone", {
        style: { background: "#fff" }
      }, [
        m(icon, {
          msvg: iconStars
        }),
        m(icon, {
          msvg: iconStars,
          class: "tests-icon-themed-icon"
        })
      ])
    }
  },
  {
    name: "Dark tone class + light tone",
    class: "test-dark-theme",
    component: {
      view: () => m("div", {
        style: { background: "#fff" }
      }, [
        m(icon, {
          msvg: iconStars,
          tone: "light"
        }),
        m(icon, {
          msvg: iconStars,
          tone: "light",
          class: "tests-icon-themed-icon"
        })
      ])
    }
  }
];

