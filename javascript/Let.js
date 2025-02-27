//Let declaration
//type of Scope

let a = 11
console.log(a)
function d(){
    let r = 34
    console.log(r)
}
d()

//redeclaration
function redec(){
    let x = 55
    let y = 5
    console.log(x)

}
redec()// redeclaration is not allowed in let declaration

//reassignment in let
function reAssign(){
    let y = 90;
    y = 88
    console.log(y)

}
reAssign()// reassignment is allowed in let declaration

//Hoisting
function hois(){
    // console.log('before declaration', t) // hoisting is not possible
    let s = 5
    console.log('after declaration', s)
}
hois()

