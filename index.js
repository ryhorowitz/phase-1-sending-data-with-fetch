// Add your code here
const formData = {
  name: 'ryWitz',
  email: '123@aol.com'
}

const configObj = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify(formData)
}

function submitData() {
  return fetch('http://localhost:3000/users', configObj)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
      alert('error')
      console.error(err.message)
    })
}

// submitData()