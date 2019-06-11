import axios from 'axios'
import { Message, Spin } from 'iview';

// axios 配置;
axios.defaults.timeout = 60000

// console.log(process.env.NODE_ENV)


axios.defaults.baseURL = '/proxy/';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// Add a request interceptor  请求拦截器
axios.interceptors.request.use(config => {
	// console.log(store)
	// let token= store.state.user.token
	let token= localStorage.getItem("ACCESSTOKEN")
	if(token) {
		config.headers.token= token
	}
    return config
  },
  error => {
    return Promise.reject(error);
});

// Add a response interceptor 响应拦截器
axios.interceptors.response.use(
  response => {
    switch (response.data.code){
        case '0': break
		case '401':
		case '2000':
		case '100':

	      localStorage.removeItem("ACCESSTOKEN")
	      localStorage.removeItem("USERINFO")

        break

	    default:{
		    let content= ''
		    if(response.data.status) content+= response.data.status
		    if(response.data.message) content+= ' '+response.data.message
		    if(response.data.msg) content+= ' '+response.data.msg
		    if(response.data.code &&content){
					Message.error({
              content: content,
              duration: 5})
		    }
	    }
    }
    return response;
  },
  error => {

    return Promise.reject(error)
  });


export default axios;
