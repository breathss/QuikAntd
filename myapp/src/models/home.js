import { getHomeProByTp,getHomeTypes } from '@/services/api';

export default {
  namespace: 'home',

  state: {
    pros: [],
    tags:[]
  },

  effects: {
    *fetchPros(_, { call, put }) {
      const response = yield call(getHomeProByTp);
      yield put({
        type: 'savePros',
        payload: response,
      });
    },
    *fetchTags(_, { call, put }) {
      const response = yield call(getHomeTypes);
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
        tags: action.payload,
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
