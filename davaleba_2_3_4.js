let student = [
    {
        "name": "nana",
        "age": 23,
        "address": "a.tsereteli #95"
    },
    {
        "name": "liako",
        "age": 25,
        "address": "a.tsereteli #95"
    },
    {
        "name": "ana",
        "age": 25,
        "address": "t.sakhokia #16"
    }
];
console.log(`My name is ${student[0].name}.\nMy age is ${student[0].age}.\nMy address is ${student[0].address}.`);

if(student[1].age < 19){
    console.log("I am a teenager.");
}
else{
    console.log("I am an adult.");
}