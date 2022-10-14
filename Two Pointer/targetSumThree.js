// not sub array sum

let arr=[5,1,2,3,6,4,1,1]
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

//for tracking the third element
for(let i=0;i<arr.length;i++){
    let c=arr[i]
    let current_target=target-c
    left=i+1
// run a loop till left<right
while(left<right){
    sum=arr[left]+arr[right]
    if(sum==current_target){
        out.push([arr[i],arr[left],arr[right]])
        left++;
        right++;
    }
    else if(sum>current_target){
        right--
    }
    else{
        left++
    }
}
}

//printing the output array conatining the pairs
console.log(out)