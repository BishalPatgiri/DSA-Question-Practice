// sorted array in ascending order
let arr1=[1,1,2,3,5,5]

// sorted array in descending order
let arr2=[6,5,4,3,2,1]

let left=0
let right=arr2.length-1
let count=0

// using two pointer to detect the common charecter
while(left<arr2.length&&right>=0){
    if(arr1[left]==arr2[right]){
        count++
        left++
        right--;
    }
    else if(arr1[left]>arr2[right]){
        right--        
    }
    else{
        left++
    }
}

console.log(count)