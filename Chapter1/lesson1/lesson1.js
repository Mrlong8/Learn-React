
const hello = "Xuan long"
console.log(hello)

// map and Filter

// map phƯơng thức của mảng đẻ tạo mảng  mới
const myArray = [1, 2, 3, 5]
const myList = myArray.map((item) => `<p>${item}</p>`)
const myList2 = myArray.map((item) => item * 2)
const myList3 = myArray.map((item, index) => {
    console.log(item, index)
    return item * 2
})
// console.log(myList3)

//Filter xóa phần tử mảng
const ages = [32, 16, 40, 45]
const result = ages.filter((age) => {
    return age >= 18
})
console.log(result)

// js three dot : cho phép copy tất cả các phần tử từ đối tượng này sang đối tựơng khác
const firstArr = [1, 2, 3]
const lastArr = [4, 5, 6]

const thirArr = [...firstArr, ...lastArr]
console.log(thirArr)
// đối với đối tựơng thì nó sẽ ghi đè 



//With destructuring:
const person = { name: "Eric", age: 26, eyeColor: "black", like: "girl" };
const { age: tuoi, name } = person;
console.log(name); //Eric
console.log(tuoi); //26

const city = ['ha noi', 'da nang', 'sai gon', 'ca mau'];
const [x, y, , z] = city;
console.log(x, y, z)

//toán  tử điều kiện
let a = 6;
let b = '';
b = a > 5 ? "greeater than5" : "less than 5"
console.log(b)

//Optional chaining (?.)
let user = {}
console.log(user?.address?.street ?? "not found user")