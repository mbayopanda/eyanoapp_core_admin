export function list(serverUrl) {
  const url = new URL(serverUrl);
  const server = `${url.protocol}//${url.hostname}:${url.port}/api/v1/menus`;
  return fetch(server).then(data => data.json())
}