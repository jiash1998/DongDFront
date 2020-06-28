import qs from "querystring";
import interceptor from "./interceptors.js";

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
  //测试接口
  insertUser(data) {
    return interceptor(
      postString("/apis/getData", methodsAll, data, headersAll)
    );
  },
  //公共模块
  //登录接口
  signin(data) {
    return interceptor(
      postString("/apis/signin", methodsAll, data, headersAll)
    );
  },
  //注册接口
  register(data) {
    return interceptor(
      postString("/apis/register", methodsAll, data, headersAll)
    );
  },
  //修改
  modify(data) {
    return interceptor(
      postString("/apis/modify", methodsAll, data, headersAll)
    );
  },
  //获取个人信息
  getInfo(data) {
    return interceptor(
      postString("/apis/getInfoSelf", methodsAll, data, headersAll)
    );
  },
  //管理员模块
  //创建组织
  createOrgan(data) {
    return interceptor(
      postString("/apis/createOrgan", methodsAll, data, headersAll)
    );
  },
  //获取组织
  getOrgan(data) {
    return interceptor(
      postString("/apis/getOrganByName", methodsAll, data, headersAll)
    );
  },
  //根据公司名称获取员工
  getAllUser(data) {
    return interceptor(
      postString("/apis/allOrganUser", methodsAll, data, headersAll)
    );
  },
  //获取组织下员工假条
  getLeaveInfo(data) {
    return interceptor(
      postString("/apis/getLeaveInfo", methodsAll, data, headersAll)
    );
  },
  //获取员工打卡情况
  getClockInfo(data) {
    return interceptor(
      postString("/apis/getClockInfo", methodsAll, data, headersAll)
    );
  },
  //移除团队成员
  removeUser(data) {
    return interceptor(
      postString("/apis/removeOrganUser", methodsAll, data, headersAll)
    );
  },
  //用户模块
  //加入组织
  addOrgan(data) {
    return interceptor(
      postString("/apis/addOrgan", methodsAll, data, headersAll)
    );
  },
  //获取个人信息
  getInfo(data) {
    return interceptor(
      postString("/apis/getInfoSelf", methodsAll, data, headersAll)
    );
  },
  //每日打卡
  clockin(data) {
    return interceptor(
      postString("/apis/clockin", methodsAll, data, headersAll)
    );
  },
  //请假
  leave(data) {
    return interceptor(postString("/apis/leave", methodsAll, data, headersAll));
  },
  //获取自己的请假
  getLeaves(data) {
    return interceptor(
      postString("/apis/getLeaves", methodsAll, data, headersAll)
    );
  },
};
