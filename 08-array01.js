
let array = [10 ,20 ,30 ,40 ,50]
console.log(array);
console.log(array[2]);
console.log(array[array.length-1]);


console.log(`=============Update=============`);
array[3]=100;
console.log(array);

let arrayList = ["Jenny", "Elon", "Stew", "Bill", "Warn"];
console.log(arrayList[3]);
arrayList[3]="Alt";
console.log(arrayList);

console.log("============Traversing an array==============");

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}




