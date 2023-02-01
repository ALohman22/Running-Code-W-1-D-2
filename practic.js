// let arr_1 = [3,5,22,5,7,2,45,75,89,21,2]
// let arr_2 = [9,2,42,55,71,22,4,5,90,25,26]

// let arr_3 = 0

// for(i=0; i<arr_1.length && arr_2.length; i++){
// arr_3 = arr_3 + arr_1[i] + arr_2[i]
// } console.log(arr_3)


// let x = 22
// for(i=1; i<=x; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true]
// let arr1 = []

// for(i=arr.length - 1; i>=0; i--){
//     arr1.push(arr[i])
// }
// console.log(arr1)


// let arr_3 = [4, 6, 7]
// let arr_4 = [10, 1, 1]
// let arr_5 = [8, 1, 9]
// let arr_6 = []
// let sum1 = 0
// let sum2 = 0
// let sum3 = 0

// for(i=0; i<3; i++){
// sum1 = sum1 + arr_3[i]
// sum2 = sum2 + arr_4[i]
// sum3 = sum3 + arr_5[i]
// }
// arr_6.push(sum1)
// arr_6.push(sum2)
// arr_6.push(sum3)

// console.log(arr_6)

// let arr_3 = [4, 6, 7]
// let arr_4 = [10, 1, 1]
// let arr_5 = [8, 1, 9]

// let sum1 = arr_3.reduce(function(previousValue, currentValue){
//     return previousValue + currentValue;
// })
// console.log(sum1)


// create function that goes through an array of numbers and adds 5 to themm all
const addFive = (number) => number + 5


arr1 =[1,2,3,4,5,6]
arr2 =[]
const addNumbers = (arr)=> {
    for(let i=0; i<arr.length; i++) {
        // arr2.push(arr1[i] + 5)
    }
    return arr
}
addFive(addNumbers(arr1))
console.log(arr2)
// console.log(addFive(2))