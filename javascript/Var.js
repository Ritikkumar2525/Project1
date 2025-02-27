// the hello world program
console.log('Hello World');


//Type of declaration
//var, let, const
//scope of level -> globle scope
var g = 45
console.log(g)

//local scope
function localScope(){
    var h = 56;  // local scope
}


//2. redeclaration
//3. reassignment
//4. hoisting

//Var decleration
//type of scope
var globalVar = 'I am Global'
console.log(globalVar)
function localVar(){
    var localVar = 'I m Local'
    console.log(localVar)
    console.log(globalVar)
}

localVar()
//console.log(localVar)


//redeclaration
function redec(){
    var x = 55
    var x = 5
    console.log(x)

}
redec()  // redeclaration is allowed in var declaration

//reassignment in var

function reAssign(){
    var y = 90;
    y = 88
    console.log(y)

}
reAssign()

//Hoisting
function hois(){
    console.log('before declaration', t)
    var t = 5
    console.log('after declaration', t)
}
hois() // hoisting is possible in var declaration


