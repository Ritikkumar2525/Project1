//const declaration
const n = 32
console.log(n)
function LocalConst(){
    const b = 'I m const in Local'
    console.log(b)
}
LocalConst()

//redeclaration
function v(){
    const p = 67
    // const p = 65 // redeclaration is not allowed in const declaration
    console.log(p)
}
v()

//ressignment
function reassignmentconst(){
    const z = 23
    // z = 3 // reassignment is not possible
    console.log(z)
}
reassignmentconst()

//Hoisting
function hois(){
    // console.log('before declaration', y)
    const y = 55
    console.log('after declaration', y)
}
hois()