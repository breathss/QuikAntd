import { getPocDetail,getPocItems,getProcInfo } from '@/services/api';

export default {
  namespace: 'project',

  state: {
    pros: [],
    items:[],
    proInfo:{},
  },

  effects: {
    *getProcInfo({ payload }, { call, put }) {
      const response = yield call(getProcInfo,payload);
      yield put({
        type: 'saveproinfo',
        payload: response,
      });
    },
    
    *getPocDetail(_, { call, put }) {
      const response = yield call(getPocDetail,_);
      yield put({
        type: 'savePros',
        payload: response,
      });
    },
    *getPocItems({ payload }, { call, put }) {
      const response = yield call(getPocItems,payload);
      yield put({
        type: 'saveTags',
        payload: response,
      });
    },
  },

  reducers: {
    saveTags(state, action) {
      return {
        ...state,
        items: action.payload,
      };
    },
    saveproinfo(state, action) {
      return {
        ...state,
        proInfo: action.payload,
      };
    },
    
    savePros(state, action) {
      return {
        ...state,
        pros: action.payload,
      };
    },
  },
};
