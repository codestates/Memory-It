import "reflect-metadata"
import { createConnection } from "typeorm"
import { Users } from "./entity/User"

createConnection()
  .then(async connection => {
    console.log("Inserting a new user into the database...")
    const user = new Users()
    user.username = "Timber Saw"
    user.password = "1234"
    user.email = "timber@code.com"
    await connection.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await connection.manager.find(Users)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express/koa/any other framework.")
  })
  .catch(error => console.log(error))
