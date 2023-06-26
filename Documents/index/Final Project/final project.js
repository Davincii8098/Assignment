//An object containing user's details
const usersDatabase={
    "Gilbert Adah":{
        Name:" Gilbert Adah",
        accountVerification:true,
        passWord:123456
                   },
"Peter Adah":{
    Name:"peteradah",
    accountVerification:false,
    passWord:123456,
}
}

function displayUserDetails(){
    let userName=prompt("Enter your username")

    while(validateUserName(userName)==false) {
    userName=prompt("Enter your name")}

if(userName==null){return}
//enter password
 let password=prompt("Enter your password")
 
 while(validatePassWord(password)==false){
 password=prompt("wrong password try again")}

if(password==null){return}
 
//confirm password
let passWordConfirm=prompt("Confirm your password")
{while(passWordConfirm!==password){
    passWordConfirm=prompt("Try again!")}
    if (passWordConfirm==null){return}

    //Check if the database contains the user's details
    const user=usersDatabase[userName]
    if(user==null){alert("User not found! try again") }

    alert(`
    User's Details:
    Name:${user.Name}
    account Verification status:${user.accountVerification}
    `)
    console.log(user)
//console.log(userName,password)
 }}

displayUserDetails()
alert("You have come to the end of my program!")


function validateUserName(userName){
    if(userName==null){
        return true
    }
    if (userName>10){return false}
}
function validatePassWord(password){
    if(password==null){
        return true
    }
    if(password.length>6)
{return false}
else {return true}
}

