const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName,) => {
    return new Promise((res, rej) => {
        res({allUsers, userName});
        rej('Error!');
    });
   };

const logger = updatedUsers => {
    const table = updatedUsers.allUsers.map(user =>
        user.name === updatedUsers.userName ? { ...user, active: !user.active } : user,
    );
    console.table(table);
};


/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);