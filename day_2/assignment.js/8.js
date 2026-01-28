function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Matina", age: 20 },
        { name: "Saluja", age: 22 },
        { name: "Rita", age: 25 }
      ]);
    }, 1000);
  });
}

async function getUsers() {
  const users = await fetchUsers();
  console.log("Users:", users);
}

getUsers();