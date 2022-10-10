let arr=[15,-2,2,-8,1,7,10,23]
//initial sum
let sum=0
//use map to store
let map=new Map()
//for storing every length which has sum Zero
let ans=[]
//run loop to traverse the array
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
    if(map.has(sum))
    {
        ans.push(i-map.get(sum))
    }
    else
    map.set(sum,i)
}
console.log(ans)