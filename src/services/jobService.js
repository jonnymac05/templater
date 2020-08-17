import axios from "axios";
import debug from "sabio-debug";
import {
    onGlobalSuccess,
    onGlobalError
} from "./serviceHelper"
const _logger = debug.extend("JobService");

//const jobsUrl = "https://api.remotebootcamp.dev/api/jobs"
const jobsUrl = "http://localhost:50000/api/jobs";

export function postJob(payload) {
    _logger("post job firing", payload)
    const config = {
        method: "POST",
        url: jobsUrl,
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

export function updateJob(payload, id) {
    _logger("update job firing", payload)
    const config = {
        method: "PUT",
        url: `${jobsUrl}/${id}`,
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

export function getJobs(curentPageIndex, pageSize) {
    _logger(`Get Jobs firing. Current page index: ${curentPageIndex} and pagesize: ${pageSize}`)
    const config = {
        method: "GET",
        url: `${jobsUrl}?pageIndex=${curentPageIndex}&pageSize=${pageSize}`,
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

export function searchJobs(query, curentPageIndex, pageSize) {
    _logger("search jobs firing", query)
    const config = {
        method: "GET",
        url: `${jobsUrl}/search?pageIndex=${curentPageIndex}&pageSize=${pageSize}&q=${query}`,
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

//this is for Sabio's delete Job
// export function deleteJob(payload) {
//     _logger("delete job firing", payload.id)
//     const config = {
//         method: "PUT",
//         url: `${jobsUrl}/${payload.id}`,
//         data: payload,
//         withCredentials: true,
//         crossdomain: true,
//         headers: {
//             "Content-Type": "application/json"
//         },
//     };

//     return axios(config)
//         .then(onGlobalSuccess)
//         .then(() => payload.id)
//         .catch(onGlobalError);
// }

export function deleteJob(id) {
    _logger("delete job firing", id)
    const config = {
        method: "PUT",
        url: `${jobsUrl}/delete/${id}`,
        data: id,
        withCredentials: true,
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        },
    };

    return axios(config)
        .then(onGlobalSuccess)
        .then(() => id)
        .catch(onGlobalError);
}

export function getJobById(id) {
    _logger(`Get Jobs By Id firing. Id: ${id}`)
    const config = {
        method: "GET",
        url: `${jobsUrl}/${id}`,
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