//For loop: total length

function loop (){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    console.log(testArray.length);
}
loop();

//print first 10 data

function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    console.log(testArray[0]);
    console.log(testArray[1]);
    console.log(testArray[2]);
    console.log(testArray[3]);
    console.log(testArray[4]);
    console.log(testArray[5]);
    console.log(testArray[6]);
    console.log(testArray[7]);
    console.log(testArray[9]);
}
loop();

// to avoid write in details using for loop: 13<13
//i = 0 (initialization): The loop starts at index 0 (first element "A").
//i < testArray.length (condition): The loop runs until i is less than 13.
//i++ (increment): After each loop iteration, i increases by 1.

function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    //let = i;
    for(let i = 0; i<testArray.length; i++){
        console.log("current data: "+testArray[i]);
    }
}
loop();

//13<=13: print till M then current data:  undefine because index 12 is M but testArray length 13
//so data doesn't not find anything when i = 13
//testArray.length = 13, so i <= 13 means it will run up to i = 13.
//But the highest valid index in the array is 12 (since arrays are zero-based).
//When i = 13, testArray[13] does not exist, so it prints undefined.
function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    for(let i = 0; i<=testArray.length; i++){
        console.log("current data: "+testArray[i]);
    }
}
loop();

//13<=13: testArray.length - 1 = 13 - 1 = 12, so the loop runs as long as i ≤ 12.
//After the 13th iteration, i = 13, which fails the condition (i <= 12), so the loop stops.
function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    for(let i = 0; i<=testArray.length-1; i++){
        console.log("current data: "+testArray[i]);
    }
}
loop();

//result: value of i: test beacuse scope specific
//Since i inside the loop is block-scoped, a new i is declared outside the loop.
//The new i is assigned "test", and it prints

function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    for(let i = 0; i<=testArray.length-1; i++){
        console.log("current data: "+testArray[i]);
    }
    let i = "test"; // Re-declaring i inside the same function scope
    console.log("value of i: "+i);
}
loop();

// result: value of i:13 beacuse the loop ran until i = 13

function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    let i;  // Declaring i at function scope
    for( i = 0; i<=testArray.length-1; i++){ //Since i was declared in the function scope, 
                                            // it is updated globally.
        console.log("current data: "+testArray[i]);
    }
    console.log("value of i: "+i);
}
loop();

// const: scope specific
function loop(){
    const testArray =["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    for(i = 0; i<1; i++){ 
        console.log("current data: "+testArray[i]);
        const testData = "hello";
        console.log("value of testData: "+testData);
    }
    testData = "Test";// it also prints, without this line the last console doesn't work and shows undefine beacuse it only works with decalaration and scope
    console.log("value of testData: "+testData);
}
loop();

//var:
function loop(){
    const testArray =["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    for(i = 0; i<1; i++){ 
        //console.log("current data: "+testArray[i]);
        var testData = "hello";
        console.log("value of testData: "+testData);
    }
    testData = "Test"; // without this line the result shows: hello in twice beacuse var works without loop
    console.log("value of testData: "+testData);
}
loop();

//while loop:
function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    let i = 0; // Initialize counter variable
    while(i<testArray.length) { // Loop while i is less than array length
        console.log("current data: "+testArray[i]);// Print the current element
        i++;  // Increment i
    }
}
loop();

//reverse print M->A
function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    let i = testArray.length-1;// Start from the last index (12)
    while(i>=0) { // Loop while i is greater than or equal to 0, 
                // The loop continues running as long as i is 12 down to 0. Stops when i = -1
        console.log("current data: "+testArray[i]);// Print the current element
        i--;// Decrement i
    }
}
loop();

//one by one print:
function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    let i = 0;
    while(i < testArray.length){ // Loop while i is less than array length
        console.log(" data: "+ testArray[i]);
        i= i+2; // Increment i by 2 (skip every second element)
    }
}
loop();

//without condition for in loop
//read data in array
//Since data represents the index (not the actual element), we use testArray[data] to get the value.
function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"]
    for (let data in testArray){ // Using for...in loop to iterate over testArray indices
        console.log("current data: "+ testArray[data]);
    }
}
loop();

//print index
function loop(){
    const testArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M"];

    for (let index in testArray){ // Using for...in loop to iterate over testArray indices
        console.log(`current data for index ${index} : ${testArray[index]}`);
    }
}
loop();

