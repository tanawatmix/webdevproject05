// console.log('Hi....')
// expression Function
let a = function func1(){
    console.log(111)
}

let b = function(){
    console.log(222)
}

let c = function(x , y){ 
    console.log(x + y)
}

a()
b()
c(10, 20)
//Arrow Function
let d = ()=>{ console.log(222)}
let e = (x, y)=>{
    console.log(x + y)
}

d()
e(100 , 200)

let f = ()=> console.log(222)
let g = ()=> console.log(x + y)
let h = ()=> 'Hello...'

let i = ()=>{
    return 'Hello...'
}


