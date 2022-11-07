const accounts = { carestack: "abc12345" };

export const authenticate = (username, password) => {
  if (!Object.keys(accounts).includes(username))
    throw "Username does not exist";
  else if (accounts[username] !== password)
    throw "Username and password does not match";
  else return true;
};
