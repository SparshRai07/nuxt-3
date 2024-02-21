import axios from "axios";

const axiosApi = axios.create ({
     baseURL:"http://ecommerce.codeitapps.com/api/",
     headers:{
      "Accept" : "application/json",
      "Content-type": "application/json",
     },
});

export default axiosApi;
