//----------------------------------------------DAY=>1----------
//  1.ways to print in js
// console.log("let's start....")
// alert("hellooo")
// document.write("hii this is document.write")
//  2.javascript console api-application programming interface -->
console.log("this is log")
// console.warn("this is warn)
//  3. what is js variables?
// containers to store data values
var num1=34
var num2=56
// console.log(num1+num2)
//operends---jis bhi jo number ko add krte h to vo do no. operends hota h 
// aur +,-,/,* ye sb operators hota h


//  4.datatypes in js
//numbers
var nub1=123


//string
var name="my name"


//object:-key value pair
var person={
 rahul:13,
 sheetal:15,
 gopi:17
}
var arr=[2,43,5,54,43]
// console.log(arr)


/*  there are two type of datatypes in js they are
1.primitive data typeof----null,undefined,boolean,Symbol,String
2.non-primitive or reference data type----Array,Object,*/


//  5.operators in js
//arithmatic operators
var a=100
var b=10
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)

//assignment operators
c=b
// console.log(c)

//comparision operators
var x = 34
var y = 56
// console.log(x==y)
// console.log(x>y)

//logical operators && operators is used when both the cases 
// is true if either of them gets false then it wont work
// console.log(true && true)
// console.log(false && true)
// console.log(false && false)


//  || or operators is used when it get any one as true then it show the output
// console.log(true || true)
// console.log(false || true)
// console.log(false || false)
// console.log(true || false)

// ! operators is used for making opposite value of original value
// console.log(!false)
// console.log(!true)

//function is a DRY means do not repeat yourself
function avg(a,b){
    return (a+b)/2
}
let res=avg(5,8)
let res2=avg(14,16)
// console.log("the avg of 5,8 is",res,"and avg of 14,16 is",res2)

// conditional is js
//single if statemnet
/*let age=34
if(age<15){
    console.log("not upto the age of voting")
}
// //else--if statement
if(age>=18){
    console.log("can vote")
}else{
    console.log("can't vote")
}
//else-if ladder
if(age>33){
    console.log("you can voting")
}else if(age>18){
    console.log("reached at the age of voting")
}else{
    console.log("not suitable for voting")
}*/
//loops in js
let ar1=[1,3,5,7,9]
// for(let i=0;i<ar1.length;i++){
//     console.log(ar1[i])
// }
// ar1.forEach(function(element){
//     console.log(element)
// })

//---------------------------------DAY=>2---------------

//while means it first check the condition then run BUT do while loop means it runs first then check the condition .
// let j=0
// while(j<ar1.length){
//     console.log(ar1[j])
// }

// do{
//     console.log(ar1[j])
// }while(j<ar1.length)

//Arrays method------
let newarr=["one",39,true,null]
// newarr.pop()
// console.log(newarr)
// newarr.push("itsme")
// console.log(newarr)
// newarr.shift()
// console.log(newarr)
// newarr.unshift("starting")
// console.log(newarr)
// newarr.toString()
// console.log(newarr)

//string method in js
let str="this is a beautifull day ayea ayea"
// console.log(str.length)
// console.log(str.slice(0,3))
// console.log(str)

//Date in js
let date=new Date
// console.log(date.getFullYear())
// console.log(date.getDay())
// console.log(date.getMonth())
// console.log(date.getHours())

//-------------------------DAY=>3---------------
//selecting using document and querry selecter
document.getElementById
document.getElementsByClassName//and many more are there through which we can manipulate the dom directly and see the changes on ui
document.querySelector // it return sigle element 
document.querySelectorAll // it return nodelist
// window.onload=function(){
//     console.log("doc was loaded")
// }
// function Click(){
//     console.log("btn is clicked")
// }

//events in js
// main.addEventListener('click',function(){
//     console.log("h1 is clicked")
// })
// main.addEventListener('mouseover',function(){
//     console.log("h1 is hovered")
// })
// let prevHTML= document.querySelectorAll('main')[1].innerHTML;
// main.addEventListener('mouseup',function(){
//     document.querySelectorAll('main')[1].innerHTML=prevHTML;
//     console.log("h1 is up")
// })
// main.addEventListener('mousedown',function(){
//     document.querySelectorAll('main')[1].innerHTML="<b>it is changed to reactjs</b>"
//     console.log("h1 is down")
// })


//------------------DAY4------------------
//arrow and normal function
//settimeout and setinterval
function newfun(){
    console.log("i am newfunc from setimeout")
}
// setTimeout(newfun,2000)
// stop=setInterval(newfun,2000)
//we use clearinterval or cleartimeout for  stoping setinterval or settimeout
//browser storage in js 
localStorage //store data for a long time as it is not deleted from our end
sessionStorage // store data but vanished as we close bowser or the particular tab

JSON //USED for data exchanging whether  into sting by JSON.STRINGIFY and 
//  to object or object to string by JSON.parse 
//it always support double quotes rather than single quotes

obj ={name:"Sana",length:1,location:{city:"patna"}}
jso = JSON.stringify(obj)
console.log(jso)
jos=JSON.parse(`{name:"Sana",length:1,location:{"city":"patna"}}`)
console.log(jos)
typeof jso
typeof obj