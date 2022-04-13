import config from "config";

const server = config.sso_server;

export function list() {
  const url = `${server}/api/v1/menus`;
  return fetch(url).then(data => data.json())
}