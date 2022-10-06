export default function getFromLocalStorage(key) {
  JSON.parse(localStorage.getItem(key));
}
