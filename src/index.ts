import data from "../samples/data.json";
// const data = require("../samples/data.json"); // this is the other way of importing a file.

interface Person {
    firstName: string;
    lastName: string;
}

const typedData = data as Person;


console.log(`You have read ${typedData.firstName} ${typedData.lastName}`);
