let str = "[object String]";
let obj = "[object Object]";

//检测函数
function detectionVal(val) {
  return toString.call(val);
}
export default {
  //设置sessionStorage
  setSession(name, value) {
    if (detectionVal(name) !== str) {
      return new Error("请传入字符串类型数据");
    }

    if (detectionVal(value) === obj) {
      sessionStorage.setItem(name, JSON.stringify(value));
    } else if (detectionVal(value) === str) {
      sessionStorage.setItem(name, value);
    } else {
      return "暂时无法识别";
    }
  },
  //设置localStorage
  setLocal(name, value) {
    if (detectionVal(name) !== str) {
      return new Error("请传入字符串类型数据");
    }

    if (detectionVal(value) === obj) {
      localStorage.setItem(name, JSON.stringify(value));
    } else if (detectionVal(value) === str) {
      localStorage.setItem(name, value);
    } else {
      return "暂时无法识别";
    }
  },
  //获取session
  //
  //取消sessionStorage
  removeSession(name) {
    if (detectionVal(name) !== str) {
      return new Error("请传入字符串类型数据");
    }
    sessionStorage.removeItem(name);
  },
};
