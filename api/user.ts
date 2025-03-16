import request from "../utils/request";

export const getUserInfo = () => {
  return request({
    url: "/staff/v1/user/getInfo",
    method: "get",
  });
};
