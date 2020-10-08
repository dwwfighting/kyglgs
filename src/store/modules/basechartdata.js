import {get_basechartsdata} from '@/api/storeapi/basechartsdata'

const getDefaultState = () => {
  return {

    alldata: [
      {
        source: ''
      },

      {
        source: ''
      }
    ],
    accidentdata: {source: ''},
    accidentcatdata: {source: ''},
    rankaccidentalldata: {source: ''},
    accidentpermonth: [
      {
        source: ''
      },

      {
        source: ''
      }
    ],
    accidentnum: '',
    accidentallpeople:'',
    accidentcode1: '',
    accidentweekfre: {source: ''},



    penyltycode1: '',
    pentotal: '',
    departpentotal: '',
    superpentotal: '',
    penaltycomcat: {source: ''},
    compenaltydepart: {source: ''},
    comsupernum: {source: ''},


    departchecktime: '',
    departchecktimeanalyze: {source: ''},
    departlinecom: '',
    departissuestotal:'',

    compulsivedepart:'',
    compulsivetotal:'',



    superchecktime: '',
    superchecktimeanalyze: {source: ''},
    supercheckcatanalyze: {source: ''},
    supercheckissuescatnum: '',
    supercheckissueslr: '',
    safetime: '',


    accode: '',
    ckcode: '',
    pycode: '',
    compulcode:'',
    ckdepatcode:'',
    cksupercode:'',
    departpenaltycode:'',
    superpenaltycode:''
  }
}


const state = getDefaultState()


const mutations = {
  get_supercheckfre: (state, supercheckfre) => {

    state.accode = supercheckfre.accidentcode;
    state.ckcode = supercheckfre.checkcode;
    state.pycode = supercheckfre.penaltycode;
    state.departpenaltycode=supercheckfre.departpenaltycode
    state.superpenaltycode=supercheckfre.superpenaltycode


    state.ckdepatcode = supercheckfre.departcheckcode;
    state.cksupercode = supercheckfre.supercheckcode;
    state.compulcode=supercheckfre.compulsivecode;
    state.alldata[0].source = supercheckfre.checkall;
    state.alldata[1].source = supercheckfre.checkstack;
    state.accidentdata.source = supercheckfre.accidentcomnum;
    state.accidentcatdata.source = supercheckfre.accidentcatnum;
    state.accidentweekfre.source=supercheckfre.accidentdfweekfre

    state.accidentpermonth[0].source = supercheckfre.accidentmonthnum;
    state.accidentpermonth[1].source = supercheckfre.accidentmouthstack;
    state.accidentnum = supercheckfre.accidentallnum;
    state.accidentallpeople=supercheckfre.accidentallpeople
    state.rankaccidentalldata.source = supercheckfre.rankaccident;

    state.pentotal = supercheckfre.penaltytotal;
    state.penaltycomcat.source = supercheckfre.penaltycomnum;
    state.compenaltydepart.source = supercheckfre.compenaltynum;
    state.departpentotal = supercheckfre.departpenaltytotal;
    state.superpentotal = supercheckfre.superpenaltytotal;
    state.accidentcode1 = supercheckfre.accidentcode;
    state.penyltycode1 = supercheckfre.penaltycode;
    state.comsupernum.source=supercheckfre.comsupernum



    state.safetime = supercheckfre.maxnoaccident;



    state.departchecktime = supercheckfre.departchecknum;
    state.departchecktimeanalyze.source = supercheckfre.departcheckcom;
    state.departlinecom = supercheckfre.departlinecom;
    state.departissuestotal=supercheckfre.departcheckcatnum;

    state.superchecktime = supercheckfre.superchecknum;
    state.superchecktimeanalyze.source = supercheckfre.supercheckcom;
    state.supercheckcatanalyze.source = supercheckfre.supercheckcatclassper;
    state.supercheckissuescatnum = supercheckfre.supercheckcatnum;
    state.supercheckissueslr = supercheckfre.superissuescom;



    state.compulsivedepart = supercheckfre.compulsivedepart;
    state.compulsivetotal = supercheckfre.compulsivetotal;
  },
}

const actions = {
  get_allbasecharts: ({commit}, param) => {
    get_basechartsdata(param).then(
      response => {
        commit('get_supercheckfre', response.data)

      }
    )
  },


}
export default {
  namespaced: true,
  sticky: true,
  state,
  actions,
  mutations
}
