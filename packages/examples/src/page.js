import m from "mithril";
import toolbar from "polythene/toolbar/toolbar";
import iconButton from "polythene/icon-button/icon-button";
import dialog from "polythene/dialog/dialog";
import iconBack from "mmsvg/google/msvg/navigation/arrow-back";

export default (name, pageContent, previous) => ({
  ctrl: () => ( 
    document.title = name
  ),
  view: () => [
    m("div", m(toolbar, {
      class: "app-toolbar",
      topBar: [
        previous && m(iconButton, {
          icon: { msvg: iconBack },
          url: {
            href: "/",
            config: m.route.link
          },
          style: {
            color: "#0091EA"
          }
        }),
        m("span", name)
      ]
    })),
    m(pageContent),
    m(dialog)
  ]
});