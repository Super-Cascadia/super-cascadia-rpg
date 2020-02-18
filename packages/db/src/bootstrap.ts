import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Item, ItemType} from "./entity/Item";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    const cheese = new Item();

    cheese.name = 'Cheese';
    cheese.description = 'a tasty treat';
    cheese.type = ItemType.FOOD;

    await connection.manager.save(cheese);

    console.log("Loading items from the database...");
    const items = await connection.manager.find(Item);
    console.log("Loaded items: ", items);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
