export function getProducts() {
    return fetch('http://localhost:8080/getProducts')
      .then(data => data.json())
}