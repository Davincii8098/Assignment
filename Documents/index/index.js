// let name="gilbert"
// let number1 = { One }
// let number2={2:'b'}
//console.log(12.2)
// console.log(12+24)

// //boolean operators
// let isBigSize=true
// let sizeIsSmall=false

// //null
// let answer=null
// let error=null

// //undefined
// let weight;
// let age=undefined
// alert(weight)

// //bigint
// let veryBigNumber =223344475884;

// //strings
// let word="string"//double quote
// let word2='bling'//single quote
// let word3=`ding`//back tick
// //more on backticks
// let firstName=`Gilbert`
// let lastName=`Adah`
// let fullName=`${firstName} ${lastName}`
// //data types that contain only one value are primitive types 

// //objects
// let user1={GilbertAdah}//recommended way
// let user2=new Object()//same thing but longer not recommended as it is stressful

// user1["name"]="davincii"
// user1["surname"]="bibo"
// user1["bro's_name"]="parker"
// user1["age"]=22
// user1["profile settings"]={theme:"dark",font_size:"20px" }
// console.log(user1)
// //You can also group them together
// let user4={
//     name:"gilbert",
//     age:"17",
//     "verified user":true,
//     "profile settings":{theme:"dark",font_size:"20px"}}
// console.log(user1["name"])  //square bracket notation
// console.log(user4.name)     //dot notation
// //update a value
// user4["name"]="davincii"

// //delete a value
// delete user4.name

// //get all the values in an object
// console.log(Object.values(user4))
// //get all the keys in an object
// console.log(Object.keys(user4))

// //Basic Operators
// //Math operators
// //addition
// let sumResult=2+3.5;
// //subtraction
// let difference=5-3;
// //multiplication
// let product=2*6;
// //division
// let divisionResult=9/3;
// //modulus or remainder
// let remainderResult=20 % 2;
// //exponent
// let exponentResult=2**3;
//live class
//write a code concatinating your first name and print on your console

//Comparison operators
//greater than
//console.log(2>1)
//less than
//console.log(10>3)
//greater than or equal to
//console.log(2>=2)
//less than or equal to
//console.log(2<=1)
//equality
//console.log(2==2)
//inequality
//console.log(2!=5)

//Assigment operators
//let size=20;
//increment operators
//size++//increases the value by 1
//Decrement operators
//size--//decreases the value by 1

//Boolean  operators
//logical OR(||)
//console.log(true||true)//true
//console.log(false||false)//false
//console.log(true||false)//true
//logical AND ($$)
//console.log(true&&true)//true
//console.log(false&&false)//false
//console.log(true&&false)//false
//logical NOT !
//console.log(!true)//false
//console.log(!false)//true

//Precedence: A Situation whereby some code is performed before the other
let principal=1000
let rate=0.05
let years=10

let SimpleInterest=(1000*0.05*10)/100
//buy putting these values in the bracket i have given 
//them precedence over the othes
//REMEMBER TO SEARCH Developer.Mozilla.Org and redesign index.html

//Conditionals
//if statement
//let day="friday"
//if(day=="friday")alert("today is friday")//or
//if you want to input more function you can:
//let month="june"
//if(month='june'){alert("It's june!"), alert("it's the 6th month"),console.log("6")}
//if-else statements
//if(day=="thursday") {alert("It's thursday!")}
//else{alert("It's not thursday")}
//multiple if-else
//if(day=="monday"){alert(monday)}
//else if (day==tuesday){alert(tuesday)}
 //else if(day==wednesday){alert(wednesday)}
 //else {alert("today is neither tuesday nor wednesday it's friday!")}

 //Conditional operators(?)
 //let age=18
 //let canVote=(age>=18)? true:false
 //console.log(canVote)

 //Switch statement
 //let day="weekend"
 //switch(day){
   // case'monday':
    //console.log("monday")
    //const sum=20+1
    //console.log(sum)
    //break;
    //case'tuesday':
    //console.log("tuesday")
    //break;
    //case'wednesday':
    //console.log("wednesday")
    //break;
    //case'thursday':
    //console.log("thursday")
    //break;
    //case'friday':
    //console.log("friday")
    //break;
    //case'saturday':
    //console.log("saturday")
    //break;
    //case'sunday':
    //console.log("sunday")
    //break;
    //default:
        //console.log("Not a day of the week")
        //break;}

        //Loops
        //while loops
        // let i=0;
        // while(i<3)
        // {//will be executed 3times
        //     console.log(i);}

        //do-while
        // // let j=5;
        // do{console.log(j);
        // j++;} while(j<3)  

//For loop
// for(let i=0;
//   i<10;
//   i++){console.log("i is now",i)}

//For Of loop
// const iterable=[10,20,30,40];
//  for(const value of iterable){
//   console.log("Value is:",value)
//  }
  //you can also iterate strings
// const firstName="Peter"
// for(const char of firstName){
//   console.log("character is:",char);}

//For in loop
// const user={
//   name:"Gilbert",
//   size:20,
//   city:"Jos"
//};
// for(const key in user)
// {console.log(key)
// console.log(`The key is:${user[key]}`)}//you can also do this,Also remember that ``
//is what allows you embed values

//FUNCTION
// function sum(){
//   let total=20+3
//   console.log(`the sum is:${total}`)
// } 
//sum()
// count=0 //This is a global variable because it is called outside the function
//Functions without parameters
// function addToCount(){
//   let localCount=1//this is a local variable
//   count=count+1
//   localCount=localCount+1
//   console.log("count is",localCount)
// } addToCount() 
//Functions with parameters
// function displayName(FirstName,LastName,age=12){//"FirstName&LastName are fuctional parameters"
  // alert(FirstName+" "+ LastName+" "+age)//12 is the default value for this operation
//}
// displayName("Gilbert", "Adah")
//Functions with returns
// function getFullName(FirstName="",LastName=""){
//   const fullName=FirstName+" "+LastName
//   return fullName    //remember to always pass in the return value
//}
// // let fullName=getFullName("John","Doe")
// // alert(fullName)
// function addsTwoNos(number1,number2){
//   const sum=number1+number2
//   return sum       //no function can be called after you've called the return
// }
// const result1 =addsTwoNos(20,30,"add")
// console.log(result1)
// //using if-else 
// function MathsOperation(number1,number2,operationtype){
//   if(operationtype=="add"){
//     const sum =number1+number2
//     return sum
//   }
//   else if(operationtype=="sub"){
//     const sub=number1-number2
//     return sub
//   }
//   else{alert("operation not found")}
// }
// const result=MathsOperation(30,20,"add")
// console.log(result)// Or hey! i can call both
// const result2=MathsOperation(30,20,"sub")
// console.log(result2)

//Function expression
//It does the same thing as normal variable declaration it's just an alternative
// const sayHello=function(){
//   alert("Hello world")}
  //sayHello()//you can also input parameters
  // const SayMyName=function(myName)
  // {alert(myName)}
  // SayMyName("Gilbert")

  //Callback functions
  // function displayUser(displayType,showFullName,showUserName)
  // {if(displayType="full") {showFullName()}
  // else {showUserName()}}

  // function showFullName(){
  //   alert("JOHN DOE")}
  
  // function showUserName(){
  //   alert("jjdoe")
  // }
  // displayUser("no",showFullName,showUserName)
  
//Arrow function
let sum=(a,b)=>a+b
console.log(sum)
alert("Hello world")
//I just changed this callback function code into arrow function
displayUser=(displayType,showFullName,showUserName)=>
   {if(displayType="full") {showFullName()}
  else {showUserName()}}

  function showFullName(){
    alert("JOHN DOE")}
  
  function showUserName(){
    alert("jjdoe")}
    displayUser("no",showFullName,showUserName)
    
        //they're all the same
  //String comparison
  console.log('a'>'b') 
  //string method(this the method involved in the conversion a string into a numerical value)     
  //:charCodeAT
  console.log('B'.charAt(0))

/*let text="hello world"
console.log(text)
let number1 ={1:17}
console.log(number1)*/