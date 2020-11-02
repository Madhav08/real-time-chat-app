const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //   console.log(`name: ${name} and room: ${room}`);
  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );

  if (existingUser) {
    return { error: "User Already Exists" };
  }

  const user = { id, name, room };
  //   console.log(`user: ${JSON.stringify(user)}`);

  users.push(user);

  // console.log(`all the users info:- ${users}`);

  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index != -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  const foundUser = users.find((user) => user.id === id);
  //   console.log(`foundUser ${JSON.stringify(foundUser)}`);
  return foundUser;
};

const getUserInRoom = (room) => {
  users.filter((user) => user.room === room);
};

module.exports = { addUser, removeUser, getUser, getUserInRoom };
