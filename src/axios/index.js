import JsonP from "jsonp";
import axios from "axios";
import { Modal } from "antd";
export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JsonP(
        options.url,
        {
          param: "callback"
        },
        function(err, response) {
          if (response.status === "1") {
            resolve(response);
          } else {
            reject(response.info);
          }
        }
      );
    });
  }

  static ajax(options) {
    let loading;
    if (options.data && options.data.isShowloading !== false) {
      loading = document.getElementById("ajaxLoading");
      loading.style.display = "block";
    }
    let baseAPI = "https://easy-mock.com/mock/5e0f46bfd7a45b4e551ce49d/mockapi";
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: "get",
        baseURL: baseAPI,
        timeout: 5000,
        params: (options.data && options.data.params) || ""
      }).then(response => {
        if (options.data && options.data.isShowloading !== false) {
          loading = document.getElementById("ajaxLoading");
          loading.style.display = "none";
        }
        if (response.status === 200) {
          let res = response.data;
          if (res.code === 0) {
            resolve(res);
          } else {
            Modal.info({
              title: "提示",
              content: res.message
            });
          }
        } else {
          console.log(response);
          Modal.info({
            title: "request有问题"
          });
          reject(response.data);
        }
      }).finally(()=>{
        if (options.data && options.data.isShowloading !== false) {
          loading = document.getElementById("ajaxLoading");
          loading.style.display = "none";
        }
      });
    });
  }
}
