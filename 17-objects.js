// Создание объектов - 1
var person = {
	name: "Bishop",
	age: 23,
	sayHi: function() {
		return "Hello";
	}
};
// Создание объектов - 2
var obj = new Object();
obj.x = 1;
// Создание объектов - 3
var o = Object.create({x: 10, y: 20}); // как параметр передается прототип объекта или null если он не нужен
o.x = 25;
console.log(o); // {x: 10, y: 20, x: 25} ???
// удаление свойства - удаляет только родное неунаследованное свойство, 
// чтобы удалить унаследованное, то нужно удалять у прототипа
delete o.x;
console.log(o); // {x: 10, y: 20}
// проверка наличия свойства у объекта
console.log("y" in o);
// проверка наличия родного свойства
o.prop = 0;
console.log(o.hasOwnProperty("prop"));
// проверять наличие свойства нужно только с помощью in, потому что проверка
// o.prop == undefined может ввести в заблуждение т.к., это свойство может
// существовать, но иметь undefined значение