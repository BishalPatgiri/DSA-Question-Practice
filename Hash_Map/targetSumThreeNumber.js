// Similar to targetSumPair almost
// But instead of a+b+c=sum take a+b=sum-1
// c will be every elements in the given array
// two pinter will be good.

//input
let arr=[1,2,1,5,3,4]
let target=6


//main code
let ans=[]
for(let i=0;i<arr.length;i++){
    let temp=target-arr[i]
    let map=new Map()
    let count=0
    for(let j=i;j<arr.length;j++){
        let temp1=temp-arr[j]
        if(map.has(temp1)){
            count++
            ans.push([arr[i],temp1,arr[j]])
            break
        }
        else{
            map.set(arr[j],1)
        }   
    }
// if(count!=0)
//     break
}
console.log(ans)