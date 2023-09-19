// array is Data structure ที่ประกอบด้วยข้อมูลหลายๆ ข้อมูลที่เป็นข้อมูลประเภทเดียวกัน


//array เอามาใช้ในภาษาโปรแกรม ในเรื่องของ variable(ตัวแปร)


//ตัวแปรมีหน้าที่เก็บข้อมูลการเอาตัวแปรไปใช้งาน คือ กำหนดค่าให้มันใหม่ หรือ เอาค่าที่มันเก็บมาใช้

let x = 10
const Y = 20
let data1 = [10, 20, 30, 40]
let data2 = ['hi', 'hey', 'hoo']

console.log(x)
x = 100
console.log(x)
console.log(Y)
//Y = 200 error เพราะ const คือ ค่าคงที่เป็นค่าที่ห้านเปลี่ยน
console.log(data1[2])
console.log(data2[1])
data2[1] = 'Hello'
console.log(data2[1])
console.log(data2)
data2.push('wow')
console.log(data2)
//..............
let data3 = [10, 20, 'AAA', 50.55]
console.log(`Data 3 มีทั้งหมด ${data3.length}`)
console.log(data3[2])


