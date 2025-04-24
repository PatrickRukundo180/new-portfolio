let a = [1,1,4,5,5,6,9];
let b = [...new Set(a)];
// let all = Object.assign({},a,b);
console.log(b);

function cube(arr){
    return arr.map(x=>Math.pow(x,3))
}
console.log(cube(a));