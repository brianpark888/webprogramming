let age= 10;
const myConstant = "Hello, World";


console.log(myConstant);


let x= 10;
let y= 5;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);
console.log(x===y);
console.log(x !== y);
let a= true;
let b= false;
console.log(a&&b);
console.log(a || b);
console.log(!a);

if (age > 10){
    console.log("You are an adult");
} else if (age == 10){
    console.log("You are 10");
} else {
    console.log("You are a kid.")
}

let fruit = 'banana';

switch(fruit){
    case "apple":
        console.log("This is apple");
        break;
    case "banana":
        console.log("This is a banana");
    case "orange":
        console.log("This is an orange");
        break;
    default:
        console.log("Unknown fruit.");
}

for(let i=0; i<5;i++){
    console.log(i);
}

let i= 0;

while(i<5){
    console.log(i);
    i++;
}

const arr= [1,2,3,4,5];
for(let i=0; i< arr.length; i++){
    console.log(arr[i]);

}

console.log("FOR EACH")
arr.forEach(function(element){
    console.log(element);
})



console.log("Add one");
function addOne(x){
    console.log(x+1);
    return x;
}

arr.forEach(addOne);


console.log("OOP")
let myObject = {
    name: "Brian",
    age: 22,
    isMarried: false,
};

console.log(myObject.name);
console.log(myObject.age);