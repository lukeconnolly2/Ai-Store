export function getProductbyId(id) {
    return fetch('http://localhost:8080/getProduct/' + id)
      .then(data => data.json())
}