const LOGGED_IN_USER_KEY = "logged_in_user";
const ALL_USERS_KEY = "all_users"

type User = {
  id: number,
  username: string,
  email: string,
  password: string,
};

function getAllUsers() : User[] {
  const usersStr = localStorage.getItem(ALL_USERS_KEY);
  let users: User[] = [];
  if (usersStr !== null) {
    users = JSON.parse(usersStr);
  }
  return users;
}

function isLoggedIn() : boolean {
  return localStorage.getItem(LOGGED_IN_USER_KEY) !== null;
}

function logout() {
  localStorage.removeItem(LOGGED_IN_USER_KEY);
}

function login(email: string, password: string) : boolean {
  const users = getAllUsers();

  for (let i = 0; i < users.length; i++) {
    if (email === users[i].email && password === users[i].password) {
      const userStr = JSON.stringify(users[i]);
      localStorage.setItem(LOGGED_IN_USER_KEY, userStr);
      return true;
    }
  }

  return false;
}

function register(username: string, email: string, password: string) : boolean {
  let users = getAllUsers();

  for (let i = 0; i < users.length; i++) {
    if (email === users[i].email || username === users[i].username) {
      return false;
    }
  }

  const user: User = {
    id: users.length,
    username: username,
    email: email,
    password: password,
  };
  const userStr = JSON.stringify(user);
  localStorage.setItem(LOGGED_IN_USER_KEY, userStr);

  users.push(user);
  const usersStr = JSON.stringify(users);
  localStorage.setItem(ALL_USERS_KEY, usersStr);

  return true;
}

export { login, logout, register, type User };
