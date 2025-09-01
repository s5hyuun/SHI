export function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('네트워크 응답 오류');
      }
      return response.json();
    });
}

export function fetchPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error('네트워크 응답 오류');
      }
      return response.json();
    });
}

//post (form data, json data)
export function savePost(name, email) {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    methods: 'post',
    headers: {
      "Content-Type" : "application/json"
    }, 
    //              {name: name, email: email}
    body: JSON.stringify({name, email})
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('네트워크 응답 오류');
      }
      return response.json();
    });
}