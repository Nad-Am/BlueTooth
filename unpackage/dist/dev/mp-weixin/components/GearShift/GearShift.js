"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "GearShift",
  setup(__props) {
    let num = common_vendor.ref(1);
    const handleClick = () => {
      num.value++;
    };
    let positionArr = [
      "top:3%;left:11%",
      "top:88%;left:11%",
      "top:3%;left:45%",
      "top:88%;left:45%",
      "top:3%;left:79%",
      "top:88%;left:79%"
    ];
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_assets._imports_1,
        c: common_vendor.s(common_vendor.unref(positionArr)[common_vendor.unref(num) - 1]),
        d: common_vendor.t(common_vendor.unref(num)),
        e: common_vendor.o(handleClick)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-00dc5c05"]]);
wx.createComponent(Component);
