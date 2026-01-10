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
