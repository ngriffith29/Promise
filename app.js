//NEW HOTNESS \/
async function doingTheMathWithNewShit() {
    //required syntax: 'async' in front of the function declaration to allow
    //use of 'await', which makes your js wait for a promise to resolve, and you
    //store that resolve into a variable, which you can then do whatever with
    //note: you CANNOT use the same variable name result like in the old way
    //you'll have to have a unique variable for each step

    try { //the try block is exactly what it looks like, it 'tries' this set of promise/s
        let resultAdd = await slowMath.add(1, 1);
        console.log(resultAdd);
        let resultMultiply = await slowMath.multiply(resultAdd, 2);
        console.log(resultMultiply);
        let resultDivideBy4 = await slowMath.divide(resultMultiply,4)
        console.log(resultDivideBy4)
        let subtract3 = await slowMath.subtract(resultDivideBy4,3)
        console.log(subtract3)
        let add98 = await slowMath.add(subtract3,98)
        console.log(add98)
        let remainer2 = await slowMath.remainder(add98,2)
        console.log(remainer2)
        let multiply50 = await slowMath.multiply(remainer2,50)
        console.log(multiply50)
        let remainder40 = await slowMath.remainder(multiply50,40)
        console.log(remainder40)
        let add32 = await slowMath.add(remainder40,32)
        console.log(`The final result is ${add32}`)
    } catch (error) { //and this is the same as the .catch, but way easier to do and read
        console.log(`This is error handling in async/await! ${error}`);
    }

};

doingTheMathWithNewShit()




// slowMath.add(1,1)
// .then((resultAdd) => {
//     //where the logic will result
//     console.log(resultAdd)
//     return slowMath.multiply(resultAdd,2)
// }).then((resultMultiply) => {
//     console.log(resultMultiply)
//     return  slowMath.divide(resultMultiply,4)
// }).then((resultDivide) => {
//     console.log(resultDivide)
//     return slowMath.subtract(resultDivide,3)
// }).then((resultsubtract) => {
//     console.log(resultsubtract)
//     return slowMath.add(resultsubtract,98)
// }).then((resultAdd) => {
//     console.log(resultAdd)
//     return slowMath.remainder(resultAdd,2)
// }).then((resultRemainder) => {
//     console.log(resultRemainder)
//     return slowMath.multiply(resultRemainder,50)
// }).then((resultMultiply) => {
//     console.log(resultMultiply)
//     return slowMath.remainder(resultMultiply,40)
// }).then((resultRemainder) => {
//     console.log(resultRemainder)
//     return slowMath.add(resultRemainder,32)
// }).then((resultAdd) => {
//     console.log(`The final result is ${resultAdd}`)
// }).catch((error) => {
//     console.log('messed up')
// })


