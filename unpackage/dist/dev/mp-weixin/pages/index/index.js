"use strict";
const common_vendor = require("../../common/vendor.js");
const LayoutVue = () => "../../components/Layout/Layout.js";
const LigthViewVue = () => "../../components/LigthView/LigthView.js";
const GearShiftVue = () => "../../components/GearShift/GearShift.js";
const _sfc_main = {
  components: {
    LayoutVue,
    LigthViewVue,
    GearShiftVue
  },
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _component_GearShiftVue = common_vendor.resolveComponent("GearShiftVue");
  const _component_LayoutVue = common_vendor.resolveComponent("LayoutVue");
  (_component_GearShiftVue + _component_LayoutVue)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
