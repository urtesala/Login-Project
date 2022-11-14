export function getData(url) {
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((err) => console.warn("error in getData", err));
}

export function sendPost(url, dataToSend) {
  return fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(dataToSend),
  })
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((err) => console.warn("error in sendPost", err));
}
