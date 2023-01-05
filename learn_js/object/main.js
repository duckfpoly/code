// object
var emailKey = 'email'
const myInfo = {
  // thuộc tính
  name: "Nguyễn Đức",
  age: 19,
  address: "Ha Noi",
  [emailKey]: "nguyenduc@gmail.com",
  // phương thức
  getName: function () {
    // this là myInfo
    return this.name;
  },
};
// object constructor
const User = function(firstName, lastName,avatar){
  this.firstName  = firstName;
  this.lastName   = lastName;
  this.avatar     = avatar;
  this.getFullName = function () { 
    return ` ${this.lastName} ${this.firstName}`;
  }
}
var teacher   = new User('Đức','Nguyễn','image_1.jpg');
var student   = new User("Đức 2", "Nguyễn", "image_2.jpg");
teacher.title = 'Title'
student.comment = "Comment";
// object prototype
User.prototype.className = 'User';
User.prototype.getFullName2 = function () { 
  return this.className;
}
// Date
var date    = new Date()
var year    = date.getFullYear()
var month   = date.getMonth() + 1
var day     = date.getDate()
var hour    = date.getHours()
var minute  = date.getMinutes()
var second  = date.getSeconds()

var random = Math.floor(Math.random() * 3);
var bonus = ["10 coins", "20 coins", "30 coins"];
