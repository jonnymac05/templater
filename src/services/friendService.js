import axios from "axios";
import debug from "sabio-debug";
//import Swal from "sweetalert2";
import {
  onGlobalSuccess,
  onGlobalError
} from "./serviceHelper"
const _logger = debug.extend("friendsService");
//const friendsUrl = "https://api.remotebootcamp.dev/api/friends";
const friendsUrl = "http://localhost:50000/api/friends";

export function getFriends(currentPage, PageSize) {
  _logger("get friends request firing")
  const config = {
    method: "GET",
    url: `${friendsUrl}?pageIndex=${currentPage}&pageSize=${PageSize}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json"
    },
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};


export function getFriendbyId(id) {
  _logger("get friend by Id request firing")
  const config = {
    method: "GET",
    url: `${friendsUrl}/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json"
    },
  };
  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
};

export function friendChange(payload) {
  const config = {
    method: "PUT",
    url: `${friendsUrl}/${payload.id}`,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json"
    },
  };

  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
}

export function deleteFriend(deleteId) {
  const config = {
    method: "DELETE",
    url: `${friendsUrl}/${deleteId}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json"
    },
  };
  return axios(config)
    .then(onGlobalSuccess) // true 
    .then(() => deleteId)
    .catch(onGlobalError);

}

// export function onSuccessChange (response) {
//   console.log("Friend Changed Successful");
//   console.log(response);
//   $(".editForm").addClass("d-none");
//   $("#search-form").removeClass("d-none");
//   $(".card").removeClass("d-none");
// }

// export function onErrorChange (response) {
//   console.warn(response);
//   errorChangeBanner();
// }



// export function onSuccessDelete (response) {
//   console.log(response);
//   console.log("Success, friend deleted");
// }

// export function onErrorDelete (response) {
//   console.log("There was an error deleting friend");
//   console.warn(response);
// }

export function searchFriends(name) {
  const config = {
    method: "GET",
    url: `${friendsUrl}/search?pageIndex=0&pageSize=100&q=${name}`,
    crossdomain: true,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json"
    },
  };

  return axios(config)
    .then(onGlobalSuccess)
    .catch(onGlobalError);
}

// export function onSuccessSearchFriends (response) {
//   console.log(response.data.item.pagedItems);
//   console.log("Friend search successful");
//   $("#search-form").removeClass("d-none");
//   $(".clone-container-2").empty();
//   mapArrayOfPeople(response.data.item.pagedItems);
// }

// export function  onErrorSearchFriends(response) {
//   console.log("Error with friend search");
//   console.warn(response);
// }