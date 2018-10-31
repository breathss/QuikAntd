import { stringify } from 'qs';
import request from '@/utils/request';

/**
 * 获取项目类型
 */
export async function getHomeTypes() {
  return request('/api/XM/GetHomeType');
}

/**
 * 根据类型获取项目
 * @param {*} param 
 */
export async function getHomeProByTp(param) {
  return request('/api/XM/GET');
}


/**
 * 获取项目明细
 * @param {*} param 
 */
export async function getPocDetail(param) {
  return request('/api/getPocDetail');
}
/**
 * 获取项目下活动项目
 * @param {*} param 
 */
export async function getPocItems(params) {
  return request(`/api/XM/GetItemsByID?${stringify(params)}`);
}

/**
 * 获取项目信息
 * @param {*} param 
 */
export async function getProcInfo(params) {
  return request(`/api/XM/GetByID?${stringify(params)}`);
}
