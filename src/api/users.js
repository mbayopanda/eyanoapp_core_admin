import axios from "axios";
import config from "config";

const server = config.sso_server;
const url = `${server}/api/v1/users`;

export function list() {
  return axios.get(url).then(data => data);
}

export function details(uuid) {
  return axios.get(`${url}/${uuid}`).then(data => data);
}