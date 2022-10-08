let arr=[1,3,5,8,7]
let target=2
let map=new Map()
let ans=[]
for(let i=0;i<arr.length;i++){
    let temp=Math.abs(target-arr[i])
    if(map.has(temp)){
        ans.push([temp,arr[i]])
    }
    else{
        map.set(arr[i],1)
    }
}
console.log(ans)