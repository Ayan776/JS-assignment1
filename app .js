// least and highest number loop array

// var arr = [8,4,87,3,5,7,2,56,10,11]
// var min = arr[0]
// for(i = 0 ; i <= arr.length; i++){
//     if(arr[i] > min){
//         min = arr[i]
//     }
// }
// alert(min)

// city 

// var userInput =prompt("where do u live ")
// var flags =false
// var city = ["multan","gujranwala","punjab","Rawalpindi"]
// for( i = 0; i < city.length; i++){
//     if(
//         userInput === city[i]
//     ){
//       flags = true;
//     }
// }
// if(flags){
//     alert("noice")
// }
// else{alert("not noice")}

// Subject Selection                                                                                                                                                  
           
// var userInput = prompt("what subject u chose")
// userInput = userInput.toLowerCase( );
// var flags = false
// var subjects = ["Computer","Commerce","Bio"]
// for(i = 0; i < subjects.length ; i++){
//     if (userInput === subjects[i]){
//      flags = true
//     }
// }
// if(flags){
//     alert("come to try out our coaching center")
// }
// else{alert("sorry no matches")}

// Task

// var userInput = prompt("write a palindrome name")
// var check = []
// for ( var i =  userInput.length ;i >=0 ; i--){
// console.log(userInput[i])
// }
// if(userInput |= check ){
//     console.log("match")
// }
// else{console.log("not match")}
// WRONG

// var userInput = prompt("Enter a word")
// var check = '';
// for(var i = userInput.length -1; i >= 0 ; i--){
//     check += userInput[i]
// }
// if(userInput === check){
//     console.log("its working")
// }
// else{   console.log("its not working")}
// CORRECT :>

// CLass 6
// var userInput = prompt("enter anything which u like to eat")
// for(i = 0; i <= userInput.length; i++){
//     if(userInput.slice(i,i+2))
//     alert("double gap Aquired")
// }

// var userInput = prompt("where are you from")
// var firstChar = userInput.slice(0,1).toUpperCase
// var remainChar = userInput.slice(1).toLowerCase
// var countryArr = ["Pakistan","India","bangladesh","Iran","Iraq"]
// for(i = 0; i<= countryArr.length; i++){
// if(userInput === countryArr[i]){
//     console.log("match")                                                                   
// }
// }

// DEFAULT METHOD TO REPLACE

// var str = "The New Yorker magzine doesnt allow the phrase World War II They say it should be the Second World War. so Lets search the following sentence for the banned chracters and replace them with the phrase that the New Yorker prefers"
// for( i = 0; i<= str.length ; i++){
//     if ( str.slice( i,i+12) === "World War II"){
//         str=str.slice(0 , i)+"Second World War" + str.slice(i+12)
    
//     }

// }

// console.log(str)

// INDEX OF METHOD TO REPLACE
// var str = "The New Yorker magzine doesnt allow the phrase World War II They say it should be the Second World War. so Lets search the following sentence for the banned chracters and replace them with the phrase that the New Yorker prefers"

// var indexNumber = str.indexOf("banned chracters")

// var firstText = str.slice(0,indexNumber)
// var replace = "unbanned chracters"
// var remainingText = str.slice(indexNumber + 16)
// console.log(firstText + replace + remainingText)

// REPLACE METHOD TO REPLACE
// var str = "The New Yorker magzine doesnt allow the phrase World War II They say it should be the Second World War. so Lets search the following sentence for the banned chracters and replace them with the phrase that the New Yorker prefers"

// console.log(str.replace("banned chracters" , "unbanned chracters"))


// var number = 4.46
// console.log(Math.round(number)) NUMBERS ROUNDED
// console.log(Math.ceil(number))  NUMBERS CEIL
// console.log(Math.floor(number)) NUMBER FLOOR

// RANDOM NUMBERS
// var num = Math.random() * 6
// console.log(num.toFixed(0))

// CONVERTING A STRING INTO NUMBER
// var num = Number(prompt(" ENTER VALUES TO ADD"))
// var num2 = Number(prompt(" ENTER VALUES TO ADD"))
// var res = num + num2
// console.log(res)
