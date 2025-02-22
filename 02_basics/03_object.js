/* A singleton in JavaScript refers to a design pattern that ensures a class has only one instance and provides a global point of access to that instance. Essentially, it's a way to create a single, shared object that can be used throughout an application. */

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Musaddique",
    [mySym]: "myKey1",
    age:21,
    location: "ratnagiri",
    gmail: "khan@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}
console.log(JsUser);
console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser[mySym]);

JsUser.gmail = "khanmusaddique48@gmail.com";
console.log(JsUser);
// Object.freeze(JsUser);

JsUser.greeting = function(){
    console.log(`Hello ${this.name}`);
}

console.log(JsUser.greeting());

