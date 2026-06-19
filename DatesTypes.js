let myDate = new Date()
console.log(myDate.toDateString)
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)


let myCreatedDate = new Date(2026, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString()) 


let myCreateDate2 =  new Date("01-14-2026")
console.log(myCreateDate2.toLocaleString())

console.log(Date.now())


console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate())
console.log(newDate.getMonth())
console.log(newDate)



console.log(newDate.toLocaleString('default',{
    weekday: "long"})) 



