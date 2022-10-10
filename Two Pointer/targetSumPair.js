//not subarray sum

let arr=[1,5,2,4,6]
let target=6

//sort the array for two pinter

arr.sort((a,b)=>a-b)

//take left and right pointer
let left=0
let right=arr.length-1

// take a variable for storing sum
let sum=0

//take an array to store the pairs
let out=[]

// run a loop till left<right
while(left<right){
    sum=arr[left]+arr[right]
    if(sum==target){
        out.push([arr[left],arr[right]])
        left++;
        right++;
    }
    else if(sum>target){
        right--
    }
    else{
        left++
    }
}

//printing the output array conatining the pairs
console.log(out)