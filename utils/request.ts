import axios from "axios";
import type { AxiosResponse } from "axios";
import { getBaseURL } from "./getBaseURL";
import { myShowToast } from "./myShowToast";

// 扩展 axios 的 TS 类型
declare module "axios" {
  export interface AxiosRequestConfig {
    /** 是否跳过统一错误处理 */
    skipErrorHandler?: boolean;
  }
}

const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  405: "请求方法不被允许。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};

const request = axios.create({
  baseURL: getBaseURL(),
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    const { skipErrorHandler } = response.config;
    const { code, msg = "未知的业务处理错误" } = res;

    // 统一错误提示
    if (code !== 200 && !skipErrorHandler) {
      myShowToast(msg);
    }

    return res;
  },
  (error) => {
    console.log("🚀 ~ error:", error);
    const { skipErrorHandler } = error.config;

    // 忽略统一异常处理
    if (skipErrorHandler) {
      return Promise.reject(error);
    }

    // 异常统一处理
    const status = error.response?.status ?? "";
    const message =
      codeMessage[status as keyof typeof codeMessage] ||
      error.message ||
      "未知异常";
    myShowToast(message);
    return Promise.reject(error);
  },
);

export default request;
