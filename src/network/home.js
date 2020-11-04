import {request} from "./request.js"
import axios from './axios'
export function getHomeMultidata(){
	return request({
		url:"/home/multidata"
	})
}
export function getHomeData(type, page) {
  return axios({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}