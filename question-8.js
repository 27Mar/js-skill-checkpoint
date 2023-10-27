// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const Endpoint = 'https://jsonplaceholder.typicode.com/users';

fetch(Endpoint)
    .then(response => response.json())
    .then(data => {
        const newUsers = data.map(user => user.name);
        console.log(newUsers);
    })
    .catch(error => {
        console.log('Error fetching user data:', error);
    });