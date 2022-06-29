// // fetch mane hocce kichu tule niya asa


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

// load data

function loadData() {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))


}



function loadUsers() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => displayUsers(json))
}



function postUsers() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
}


// automatic call --------------  postUsers()


function displayUsers(data) {

    console.log(data);

}