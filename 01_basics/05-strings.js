const name = "Tanu"
const repoCount = 50
// console.log(name+repoCount+" Value"); IT IS OUTDATED NOT RECOMMENDED NOW

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Tanuu')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherSting = gameName.slice(-8,4)
console.log(anotherSting);

const url = "https://tanu.com/tanishka%30borade"
console.log(url.replace('%30','-'))