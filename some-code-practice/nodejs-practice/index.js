// import { bien1 } from "./handle";
// import bien2 from "./handle";

// let bien3 = {...bien1};
// bien3.name = 'reactjs';

// console.log(bien1);
// console.log(bien2);
// console.log(bien3);

// let bien4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 2000);
// });

// let bien5 = new Promise((resolve, reject) => {
//     reject("have been error");
// });

// Promise.all([bien4, bien5]).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// });

// require('dotenv').config();
// console.log(process.env)
console.log(process.cwd());

console.log('Phien ban hien tai: ' + JSON.stringify(process.env.CATALINA_HOME));
