let age : any = 25;

age = true;
console.log(age);
age = 'hello';
console.log(age);

let greet: Function;

greet = () => {
    console.log('hello, again');
}

const add = (a:number , b:number, c: number | string = 8) => {
    console.log( a + b );
    console.log(c)
}

// add( 5 , 10 );
add( 5 , 10 , '23');

const minus = (a:number, b:number) => {
    return a - b;
}

let result = minus(10,8);

console.log(result);