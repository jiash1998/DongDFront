import interceptor from "../jsUtil/interceptors.js";

const methodAll = "get";
var getString = (urlSelf, methodSelf) => {
  return {
    url: urlSelf,
    method: methodSelf,
  };
};

//get携带参数方法
var getString_P = (urlSelf, data, methodSelf) => {
  return {
    url: urlSelf,
    params: { customId: data },
    method: methodSelf,
  };
};

export default {
  //测试接口
  getData() {
    return interceptor(getString("/apis/getAll", methodAll));
  },
  //管理员模块

  //用户模块
  //获取所有组织
  getAllOrgan() {
    return interceptor(getString("/apis/getAllOrgan", methodAll));
  },
};
