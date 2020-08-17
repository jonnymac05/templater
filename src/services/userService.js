import axios from "axios";
import * as serviceHelper from "./serviceHelper"
const usersApiBase = "https://api.remotebootcamp.dev/api/users/"

export function registerUser(payload) {
  const config = {
    method: "POST",
    url: `${usersApiBase}register`,
    data: payload,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
    },
  };

  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
}

export function loginUser(payload) {
  const config = {
    method: "POST",
    url: `${usersApiBase}login`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json"
    },
  };

  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
}

export function getUser() {
  const config = {
    method: "GET",
    url: `${usersApiBase}current`,
    crossdomain: true,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json"
    }
  };

  return axios(config)
};

export function getUserById(id) {
  const config = {
    method: "GET",
    url: `${usersApiBase}${id}`,
    crossdomain: true,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json"
    }
  };

  return axios(config)
};


// export function logOutUser () {
//   const config = {
//     method: "GET",
//     url: `https://api.remotebootcamp.dev/api/users/logout`,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" },
//   };

//   return axios(config).then(this.onSuccessLogOut).catch(this.onErrorLogOut);
// }

// onSuccessLogOut: function (response) {
//   console.log("successfully logged out");
//   window.location.href = "Login.html";
// }

// onErrorLogOut: function (response) {
//   console.log("log out failed");
//   console.warn(response);
// }