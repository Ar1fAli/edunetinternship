// const sum = (a,b)=>{return a+b}
//         console.log(sum(1,2));

//         const fruits = ["banana", "mango", "appple", "orange"];
//         const [fruit1,fruit2,...fruit3] = fruits
//         console.log(fruit3);


//         const array1 = [1,2,3,4];
//         const array2 = [5,6,7,8,9]
//         const combinedArray = [...array1,...array2,10,20,30];
//         console.log(combinedArray) 
//         function myFunction (callback,a,b){
//                 let sum = a+b
//                 callback(sum)
//         }
//         function demoFunc(){
//                 console.log("callback function")
//         }
//         myFunction(demoFunc,2,4);



// fetch('https://fakestoreapi.com/products?limit=5')
// .then((res)=>res.json()).then((val)=>{console.log(val)})
// .catch((e)=>{console.log(e.message)})
// .finally(()=>{console.log("promise Done")})
// console.log ("task is completed")
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((res)=>res.json()).then((val)=>{console.log(val)})
// .catch((e)=>{console.log(e.message)})




// function compareString(str1,str2){
//         return new Promise ((resolve,reject)=>{
//                 if (str1 === str2){
//                         resolve("both string are equal")

//                 }
//                 else{
//                         reject ("Not equal")
//                 }
//         })
// }
// compareString("abc","abcd")
// .then(()=> {
//         console.log("strings are matching");
// })
// .catch((e)=>{
//         console.log(e.message);


// });







async function infoData(){
        const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        console.log(data)
}
infoData();
