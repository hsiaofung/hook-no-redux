export function addFav(payload) {
  return {
    type: "ADD_FAV",
    payload
  };
}
export function removeFav(payload) {
  return {
    type: "REMOVE_FAV",
    payload
  };
}
export function fetchData(payload) {
  return {
    type: "FETCH_DATA",
    payload
  };
}
