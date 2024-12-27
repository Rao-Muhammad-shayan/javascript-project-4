// Array
// let studentName=[];
// studentName.push("shayan","Hamza");
// studentName.push("Ali","Ahmed");
// console.log(studentName);

// Alternative
// Answer 01
// let a=prompt( "enter student name");
// let b=prompt( "enter student name");
// let c=prompt("enter the student name")
// let studentName=[];
// studentName.push(a,b);
// Answer 2
// let str=["shayan","lion","rajput","shan"];
// let number=[1,2,4,6,7,8];
// let boolean=[true,false];
// let mixArray=[];
// mixArray+=str.slice(0,3);
// mixArray+=number.slice(0,5);
// mixArray+=boolean.slice(0,2);
// console.log(mixArray)

// Alternative
// let str = ["shayan", "lion", "rajput", "shan"];
// let number = [1, 2, 4, 6, 7, 8];
// let boolean = [true, false];
// let mixArray = []; // Initialize an empty array

// // Use concat to combine the arrays and assign the result to mixArray
// mixArray = mixArray.concat(str, number, boolean);

// console.log(mixArray);
// Answer 3
// let a="QUALIFICATION";
// let Education=["SSC","HSC","BSC","B.S","MS","M.PHIL","P.H.D"]
// console.log(a);
// console.log(Education[0]);
// console.log(Education[1]);
// console.log(Education[2]);
// console.log(Education[3]);
// console.log(Education[4]);
// console.log(Education[5]);
// console.log(Education[6]);
// console.log(Education.indexOf("BSC"));

// Answer 4
// let studentName=["Shayan","Ghous","Hamza"];
// let score=[230,320,480];
// let TotalMarks=500;
// let percentage=[];

// let a;
// let b;
// let c;
// let d="result"
// a=((score[0]/TotalMarks)*100)
// a=a.toFixed();
//  b=(score[1]/TotalMarks)*100
//  b=b.toFixed();
//  c=(score[2]/TotalMarks)*100
//  c=c.toFixed();
// percentage.push(a,b,c)

// console.log(`result`);
//  console.log(`score of ${studentName[0]} is ${score[0]}  and percentage is  ${percentage[0]}`);
//  console.log(`score of ${studentName[1]} is ${score[1]}  and percentage is  ${percentage[1]}`);
//  console.log(`score of ${studentName[1]} is ${score[1]}  and percentage is  ${percentage[2]}`);

// Answer 5

// let a=prompt("enter color that you want")
// let b=prompt("enter color that you want")
// let colorName=["pink","red","yellow","blue","green",];

// // // Answer a.5
// // console.log(colorName)
// // // // Answer b.5
// // // colorName.unshift(a);
// // // // Answer c.5
// // // colorName.push(a);
// // // // Answer d.5
// // // colorName.unshift(a,b);
// // // // Answer e.5
// // // colorName.shift();
// // // // Answer f.5
// // colorName.pop();

// console.log(colorName)

// Write a code for  ask user at which index value is add
// let a=+prompt("enter the index at which the color name is added in your array");
// let b=prompt("enter color name which added at your particular index");
// let colorName=["pink","red","green","yellow","jamni","ferozi","black","blue"];
// console.log(`Array before adding at particular index enter by user ${colorName}`);

// colorName.splice(a,0,b)
// console.log(`after updation array ${colorName}`);




// Write a code for  ask user at which index value is add
// let a=+prompt("Enter the index at which the colors name is delete in your array");
// let b=+prompt("Enter How many colors do ou want to delete at your particular index");
// let colorName=["pink","red","green","yellow","jamni","ferozi","black","blue"];
// console.log(`Array before adding at particular index enter by user ${colorName}`);
// if(!isNaN(a)&&!isNaN(b)){
//    if(b>0){
//     colorName.splice(a,b)
//     console.log(`after updation array ${colorName}`);
//    }

// }else{
//     console.log("please enter a number rather than that of string")
// }
// Answer of 5
// X.10
// let arr=[320,230,480,120];
// console.log(arr)
// arr=arr.sort();
// console.log(arr);

// let cities=["karachi","Quetta","Peshawar","Islamabad","Askay","ANatolia","Koniya","Multan"]
// console.log(cities)
// let SelectedCities=cities.slice(0,3);
//  console.log(SelectedCities);

// Answer 6
// let arr = ["this","is","my","cat"];
// let sStr=arr.join(' ')
// console.log(sStr)

// Answer of 7
// LIFO
// let cities = ["karachi", "Quetta", "Peshawar", "Islamabad", "Askay", "ANatolia", "Koniya", "Multan"];
// for(i=cities.length-1;i>=0;i--){
//     console.log(cities[i]);
// }
// // // FIFO
// let cities = ["karachi", "Quetta", "Peshawar", "Islamabad", "Askay", "ANatolia", "Koniya", "Multan"];
// for(i=0;i>=cities.length;i++){
//     console.log(cities[i]);
// }
// function dropdown() {
//     const validManufacturers = ["apple", "samsung", "nokia", "vivo", "intel", "dell"];
//     let manufacturers = [];
    
//     for (let i = 0; i < 6; i++) {
//         let input = prompt("Enter the manufacturers like (Apple, Samsung, Nokia, VIVO, InTELL, DELL)");
        
//         if (validManufacturers.includes(input.toLowerCase())) {
//             manufacturers.push(input.toLowerCase()); // Store in lowercase for consistency
//         } else {
//             alert("Please enter a valid manufacturer."); // Use alert for user feedback
//             i--; // Decrement i to allow re-entry
//         }
//     }
    
//     // If all inputs are valid, display them
//     alert(`You entered: ${manufacturers.join(", ")}`); // Use alert to display the result
// }

// dropdown();


// Initialize the string
// let str = "rtyyu";

// // Use slice to extract a portion of the string
// // For example, extracting from index 1 to index 4
// str = str.slice(0, 1); // This will extract "tyy"

// // Log the result to the console
// console.log(str)



// let arr=[];
// let b=prompt();
// arr.push(b);
// console,log(b)