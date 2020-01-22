import axios from 'axios'

export function myAjax(config){
	const ajax = axios.create();
	return ajax(config);
}

export function myLoad(config){
	const ajax = axios.create();
	ajax.interceptors.request.use(config => {
		//显示Loadding
		return config;
	},err => {
		//隐藏Loadding
		return err;
	})
	ajax.interceptors.resonse.use(res => {
		//隐藏Loadding
		return res.data;
	},err => {
		//隐藏Loadding
		return err;
	})
	return ajax(config)
}