import data from "../samples/data.json";

interface Person {
    firstName: string;
    lastName: string;
}

const typedData = data as Person;


console.log(`You have read ${typedData.firstName} ${typedData.lastName}`);
