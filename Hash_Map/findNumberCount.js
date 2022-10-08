var arr = [1, 5, 1, 2, 3, 2, 7,2];
var map = new Map();
var temp;
for (var i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
        temp = map.get(arr[i])+1;
        map.set(arr[i], temp++);
    }
    else{
        map.set(arr[i], 1);
    }
}
console.log(map);
