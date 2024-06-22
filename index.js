// Write your solution here!
const cats = [ "Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {  
 cats.push("Ralph");
}

function destructivelyPrependCat() {
cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
 cats.pop();
}

function destructivelyRemoveFirstCat() {
cats.shift();
}

function appendCat() {
const newappendCat = [...cats, "Broom"];
return newappendCat
}

function prependCat() {
const newCats =  ["Arnold", ...cats];
return newCats
}

function removeLastCat() {
const copyremoveLastCat = cats.slice(0,2);
return copyremoveLastCat
}

function removeFirstCat(){
const copyremoveFirstCat = cats.slice(1);
return copyremoveFirstCat
}
