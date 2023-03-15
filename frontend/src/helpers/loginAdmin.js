export async function loginAdmin(credentials) {
    return fetch('http://localhost:8080/adminlogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }