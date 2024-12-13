"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "LigthView",
  setup(__props) {
    const sourceArr = [
      {
        image: "/static/image/icon_skd.png",
        name: "示廓灯"
      },
      {
        image: "/static/image/icon_jgd.png",
        name: "近光灯"
      },
      {
        image: "/static/image/icon_yjd.png",
        name: "危险警示灯"
      },
      {
        image: "/static/image/icon_skd.png",
        name: "远近光交替"
      }
    ];
    return (_ctx, _cache) => {
      return {
        a: sourceArr[1].image,
        b: common_vendor.t(sourceArr[1].name)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-13071995"]]);
wx.createComponent(Component);
