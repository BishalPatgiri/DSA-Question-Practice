let arr=[7,2,3,4,2,3]

/// for the first element 
let leftSum=0
let rightSum=arr.reduce((ele,acc)=>{
    return ele+acc
},0)

// rightSum includes the first element also
rightSum=rightSum-arr[0]

//check the remaining elements now
for(let i=1;i<arr.length;i++){
    leftSum=leftSum+arr[i-1]
    rightSum=rightSum-arr[i]
    if(leftSum==rightSum){
        console.log(i)
    }
}