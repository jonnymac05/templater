import axios from "axios";
import debug from "sabio-debug";
const _logger = debug.extend("dogService");

const auth = {
  "SABIO-AUTH": "sabio-internal-00"
};

const baseUrl = `https://sabioapi2.azurewebsites.net/api/entities/dogs`;

export function create(data) {
  _logger("create called");
  const config = {
    method: "POST",
    data: data,
    url: baseUrl,
    withCredentials: true,
    crossdomain: true,
    headers: {
      ...auth,
      "Content-Type": "application/json"
    }
  };

  return axios(config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
}

export function getAll() {
  _logger("getAll called");

  const config = {
    method: "GET",
    url: baseUrl,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "SABIO-AUTH": "sabio-internal-00"
    }
  };

  return axios(config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
}

export function update(data) {
  _logger("update called");
  const config = {
    method: "PUT",
    data: data,
    url: `${baseUrl}/${data.id}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "SABIO-AUTH": "sabio-internal-00"
    }
  };

  return axios(config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
}

export function deleteById(id) {
  _logger("deleteById called");
  const config = {
    method: "DELETE",
    url: `${baseUrl}/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "SABIO-AUTH": "sabio-internal-00"
    }
  };

  return axios(config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
}

export function deleteAndPassBack(id) {
  _logger("delAndPassBack called");
  const config = {
    method: "DELETE",
    url: `${baseUrl}/${id}`,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "Content-Type": "application/json",
      "SABIO-AUTH": "sabio-internal-00"
    }
  };

  return axios(config)
    .then(() => {
      return id;
    })
    .catch(responseErrorHandler);
}

const responseSuccessHandler = response => {
  _logger("responseSuccessHandler", response);
  //return { data: response.data, status: response.status };
  return response.data;
};

const responseErrorHandler = error => {
  _logger("responseErrorHandler", error);
  return Promise.reject(error);
};
