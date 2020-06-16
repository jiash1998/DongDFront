import qs from "querystring";
import interceptors from "./interceptors.js";

const headersAll = "application/x-www-form-urlencoded";
const headersJson = "application/json";
const methodsAll = "post";

/**
 * 用于提交post请求
 * @params {String} urlSelf 接口名称
 * @params {String} methodSelf 请求方法
 * @params {String} dataSelf 携带数据
 * @params {String} headerSelf 请求头格式
 */
//请求头为 application/x-www-form-urlencoded
var postString = (urlSelf, methodSelf, dataSelf, headerSelf) => {
  return {
    url: urlSelf,
    method: methodSelf,
    data: qs.stringify(dataSelf),
    headers: {
      "Content-Type": headerSelf,
    },
  };
};

//请求头 为 application/json
var postStringJson = (urlSelf, methodSelf, dataSelf, headerSelf) => {
  return {
    url: urlSelf,
    method: methodSelf,
    data: dataSelf,
    headers: {
      "Content-Type": headerSelf,
    },
  };
};

export default {
  //用户注册
  insertUser(data) {
    return interceptor(postString("/insertUser", methodsAll, data, headersAll));
  },
};