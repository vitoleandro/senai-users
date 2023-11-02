async function getUsers() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await resp.json();

    return users
}

async function showUserTables() {
    const userLine = document.querySelector(".js-user-line");
    const users = await getUsers();
    let lines = ""

    users.map((user) => {
        lines += `
        <tr>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td class="table-actions">
                <button class="table-btn">Exibir</button>
            </td>
        </tr>`
    })
    userLine.innerHTML = lines
}

showUserTables();