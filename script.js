window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let output = document.getElementById('output');

let promise1 = new Promise((resolve,reject)=>{
	setTimeout(() => resolve ("promise1"),Math.floor(Math.random()*5 +1)*1000)
	})

let promise2 = new Promise((resolve,reject)=>{
	setTimeout(() => resolve("promise2"),Math.floor(Math.random()*5 +1)*1000)
})

let promise3 = new Promise((resolve,reject) => {
	setTimeout (() => resolve("promise3"),Math.floor(Math.random()*5+1)*1000)
}) 

let promise4 = new Promise((resolve,reject)=>{
	setTimeout(() => resolve("promise4"),Math.floor(Math.random()*5+1)*1000)
})

let promise5 = new Promise((resolve,reject) => {
	setTimeout(() => resolve("promise5"),Math.floor(Math.random()*5+1)*1000)
})

promises.push(promise1);
promises.push(promise2);
promises.push(promise3);
promises.push(promise4);
promises.push(promise5);

Promise.any(promises).then((res) => output.innerHTML = res)
