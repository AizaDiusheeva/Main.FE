function custom_fetch(apiUrl, callback) {
    fetch(apiUrl)
        .then(response => {
            if (response.ok) {  
                return response.json();
            } else {
                throw new Error('Ошибка при запросе: ' + response.status);
            }
        })
        .then(data => {
            callback(data);  
        })
        .catch(error => {
            console.log('Ошибка:', error);  
        });
};
custom_fetch()

function getUserList(userIds) {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    custom_fetch(apiUrl, (users) => {
       
        const filteredUsers = users.filter(user => userIds.includes(user.id));

       
        const userList = document.createElement('ol'); 
        filteredUsers.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `Имя: ${user.name}, Email: ${user.email}`;
            userList.appendChild(listItem);
        });

       
        document.body.appendChild(userList);
    });
}


getUserList([1, 3, 5]);