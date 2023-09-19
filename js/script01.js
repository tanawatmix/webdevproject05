console.log('SAU.....')
//Block scoope

function funcA( ){
    console.log('A....')
}

function funcB( ){
    console.log('x')
    console.log('y')
}

funcA()
funcB(10, 20)

function funcC( ){
    console.log('C...')
    return 'HI.....'
}

function funcD(x, y ){
return x + y
}

console.log( funcC() )
let wow = funcD(100, 200)

//..........
function funcE( a, b, c = 100 ){
    console.log(a + b + c)
}

function funcF(x='HI', y=100,z='Wow Wow Wow'){
    return x + y + z 
}

funcE(10,20) // ->130
funcE(10,20,30) // ->60
console.log( funcF() )

//......................
console.log(10 + 10 + '10')
console.log(10 + 10 + 10)
let info1 = 100
let info2 = 200

console.log(info1 + '+' + info2 + '=' + (info1 + info2))

console.log(`${info1} + ${info2} = ${info1+info2}`)

//.......................
// Operator -> Ternary Operator
// Control flow group if , if-else , if-else-if
//.......................

console.log(10 > 20 ? 'Hi...' : 'Hey...')
let x = 'BangNa'
let y = 'BangPoo'
z = x > y ? 'Hi...' : 'Hey...'
console.log(z)//
console.log(x > y)
console.log(x == y)
console.log(x < y)


