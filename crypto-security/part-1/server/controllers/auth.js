const bcrypt = require("bcryptjs");
const users = [];

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        const {username, email, firstName, lastName, password} = req.body;
        const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        const userObj = {
          username: `${username}`,
          email: `${email}`,
          firstName: `${firstName}`,
          lastName: `${lastName}`,
          password: hashPassword
        }
        console.log('Registering User')
        console.table(userObj);
        users.push(userObj)
        console.table(users);
        res.status(200).send(userObj)
    }
}