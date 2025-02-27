//Operators
let a = 10;
let b = 30;

//Arithmetic operator
console.log('Add', a+b);
console.log('Sub', a-b);
console.log('Division', a/b);
console.log('Mul', a*b);
console.log('Power', a**b);
console.log('Mod', a%b);


//Assignment operator
let x = 90;
x += 20 // x = x+20
console.log('value', x)


//Comperison oprator
console.log('a<b', a<b);
console.log('a>b', a>b);
console.log('a==b', a==b);
console.log('a>=b', a>=b);
console.log('a<=b', a<=b);
console.log('a!=b', a!=b);
console.log('a===b', a===b);  //strictly equal to
console.log('10===10', 10===10);  //strictly equal to
console.log('a===b', 'a'===b);  //strictly equal to


//Logical operartor
let p = true, q = false
console.log('AND', p&&q)
console.log('OR', p||q)
console.log('NOT', !p)


//control statement
let attendance = 65
if(attendance >= 90){
    console.log('Grade O')
}else if(attendance >= 80){
    console.log('Grade A+')
}else if(attendance >= 70){
    console.log('Grade A')
}else{
    console.log('Grade UMC')
}

//Switch statement
let day = 'sunday'
switch(day){
    case 'Monday':
        console.log('Start of the week')
        break;
    case "tuesday":
        console.log('second day of the week')
        break;
    case 'wednesday':
        console.log('thirday of the week')
        break;
        case "thursday":
        console.log('forth day of the week')
        break;
    case 'friday':
        console.log('fifth of the week')
        break;
    case 'staurday':
        console.log('Mera din')
        break;
    default:
        console.log('Mera din')
}


//Loops
//For loop

for(let i=0; i<=8; i++){
    console.log('value of i', i)
}


//while loop
let count = 1;
while(count <= 3){
    console.log('count', count)
    count++
}


//do while loop
let num = 1
do{
    console.log('number', num)
    num++
}while(num <= 4)