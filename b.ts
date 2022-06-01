type StringOrNumber = string | number;
type objWithName = { name: string, uid: StringOrNumber };

const logDetails = (uid: StringOrNumber, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

const greetagin = (user: objWithName) => {
    console.log(`${user.name} says hello again`);
}


// function signature Example 

//example 1
let gree : (a: string, b:string) =>  void ; 

gree = (name: string, greeting: string) => {
    console.log(`${name} sayas ${greeting}`);
};

//example 2
let calc: (a: number, b:number, c: string) => number ;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action === 'add'){
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

//example 3
let details: (obj: {name: string, age: number}) => void ;

details = (ninja: {name: string, age: number}) => {
    console.log(`${ninja.name} is ${ninja.age} years old.`);
}
