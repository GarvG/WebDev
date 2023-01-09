// console.log("hi");
// document.getElementById('first').innerHTML="HEY";
// loop
// console.log(name);
// var name;
// console.log(name);
// name="Agrv";
// console.log(name);
// fn();
// function fn(){
//     console.log("hello");
// }
// fn();
// function fn(){
//     console.log("hello");
// }
// //fnContainer();
// var fnContainer=function()
// {
//     console.log("I am Expression");
// }
// fnContainer();
// var a=10; 
// let a=10;
// const a=10;

// let object={
//     name:"Garv",
//     lname:"Garg",
//     sayHi:function()
// {
//     console.log("says hi");
// }
// }
// console.log(object);

// for(let key in object){
//     console.log(key," : ",object[key]);
// }

// arrays

// let arr=[1,2,3,4];
// arr.myprop="hello";
// arr.Print=function(){
//     console.log("HEY")
// }
// for(let key in arr){
//     console.log(key," : ",arr[key]);
// }
let myPromise = new Promise((myResolve, MyRejcet) => {
    let myname = "Garv";
    let Questionlength = 7;
    if (myname.length == Questionlength) {
        myResolve("YES WE MATCH");
    } else {
        MyRejcet("SORRY NAME DIDNOT MATCH THE REQUIRED LENGTH");
    }
});
myPromise.then((val) => {
    console.log(val);
}, (err) => {
    console.log(err);
})

// async function my(){
//     let name="garv";
//    // return name;
//    setTimeout(()=>{
//     return name;
//    },5000)
//    document.getElementById("first").innerHTML=name;

// }
// my();

const obj={
    name:"harb",
    age:12
};
let ans=JSON.stringify(obj)
console.log(typeof(ans));