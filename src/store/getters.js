const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  visitedViews: state => state.tagsView.visitedViews,
  companies: state => state.organization.companies,
  departments: state => state.organization.departments,
  provinces: state => state.organization.provinces,
  cities: state => state.organization.cities,
  counties: state => state.organization.counties,
  globalaccident_injure: state => state.globalaccident.globalaccident_injure,
  globalaccident_num: state => state.globalaccident.globalaccident_num,
  globalaccident_trapped: state => state.globalaccident.globalaccident_trapped,
  globalaccident_cat: state => state.globalaccident.globalaccident_cat,
  globalac_seriousness: state => state.globalaccident.globalac_seriousness,
  globalac_seriousness_num: state => state.globalaccident.globalac_seriousness_num,
  globalaccidentonyearonnum: state => {
    return ((state.basechartdata.accident_data['accidentallnum'] -
      state.basechartdata.lastyear_res['accidentallnum']) / state.basechartdata.lastyear_res['accidentallnum'])
  },
  globalaccidentonyearonpeople: state => {
    return ((state.basechartdata.accident_data['accidentallpeople'] -
      state.basechartdata.lastyear_res['accidentallpeople']) / state.basechartdata.lastyear_res['accidentallpeople'])
  },
  // 全国事故发生总次数
  globalaccienttotal: state => {
    const globalaccienttotal = state.globalaccident['globalaccident_num'].reduce((totalPrice, item) => totalPrice + item.value, 0)
    return globalaccienttotal
  },
  // 全国事故发生事故死亡总人数
  globalaccidentinjure: state => {
    const globalaccidentinjure = state.globalaccident['globalaccident_injure'].reduce((totalPrice, item) => totalPrice + item.value, 0)
    return globalaccidentinjure
  },
  // 全国事故发生事故失联总人数
  globalaccidenttrapped: state => {
    const globalaccidenttrapped = state.globalaccident['globalaccident_trapped'].reduce((totalPrice, item) => totalPrice + item.value, 0)
    return globalaccidenttrapped
  }
}
export default getters
