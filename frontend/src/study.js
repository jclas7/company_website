function repeat(indx, callback, ex) {
  for (let i = 0; indx > i; i++) {
    if (ex != i) callback(i);
  }
}

repeat(5, (i) => console.log(i * 1), 1);
////////////////////////////////////////////////

//
let person = {
  name: "홍길동",
};

console.log(person);

person.job = "engineer";

console.log(person);

person["grade"] = "A";
console.log(person);

delete person.name;
console.log(person);

console.log("name" in person);
console.log("grade" in person);

let person2 = {
  name: "이정환",
  age: 11,
  hobby: "테니스",
};

let { age, hobby } = person2;

console.log(name, age, hobby);

const fun = ({ age, hobby }) => {
  console.log(age);
};

fun(person2);

let arr1 = [1, 2, 3];

function funcA(p1, p2) {
  console.log(p1, p2);
}

funcA(...arr1);
