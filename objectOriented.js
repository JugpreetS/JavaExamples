/*(var PersonTwo = function(job){
	this.job=job;
	this.getMyJob = function(){
		return this.job;
	}
}

var Person = function(firstName, job){
	PersonTwo.call(this, job);
	this.firstName = firstName;
}



Person.prototype.walk = function(){
	console.log("I am walking");
	
}

Person.prototype.sayHello = function(){
	console.log("Hello, "+this.firstName);
}

function Student(subject, firstName, job){
	Person.call(this, firstName);
	//PersonTwo.call(this, job);
	//instance specific.
	this.subject = subject;
}

Person.prototype = Object.create(PersonTwo.prototype);
Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

//replace sayHello method.

Student.prototype.sayHello = function(){
	console.log("Hello, " + this.firstName+",. I study "+this.subject);
}

Student.prototype.goodBye = function(){
	console.log(this.firstName+" is out");
}

var studentObj = new Student("Physics", "Ricky", "Researcher");

studentObj.sayHello();
//studentObj.walk();
console.log("My job is "+studentObj.getMyJob());
studentObj.goodBye();



array = ["this", "that", "now", "then"];

var print = function(value){

	if(typeof value === 'string')
		console.log(value);
	else if(value instanceof Array){
		value.forEach(function(name, index){
			console.log(name);
		});
	
	}else if(typeof value === 'object'){
		for(var item in value)
			console.log(item + " : " + value[item]);
	}
}


var getInput = function(value, callback){

	callback(value);
}

getInput({name:'rick', speciality:'researcher'}, print);

getInput(array, print);









var data = {

	name:"",
	setUserName: function(name){
		this.name = name;
	}
}
function getInput(name, callback, ref){

	if(typeof callback === 'function')
		callback.call(ref, name);
	else
		console.log('Incorrect callback specified');
}



getInput("Rick", data.setUserName, data);

console.log(data.name);
console.log(window.name);

getInput("Rick", 'function', data);


*/




var newFunc = function(initialValue){
	var count = initialValue;
	var changeByCount = function(value){
		count+=value;
	}
	return{
		increment : function(){
			changeByCount(1);
		},
		decrement : function(){
			changeByCount(-1);
		},
		showValue : function(){
			return count;
		}

	}
}



var method = newFunc(2);
var methodTwo = newFunc(0);

method.increment();
method.increment();
console.log(method.showValue());
method.decrement();
console.log(method.showValue());


console.log(method.count);
//console.log(method.changeByCount(2));



var setHelp = function(text){
	document.getElementById('help').innerHTML = text;
}


var data = function(){
	tips = [
		{id: 'email', tip:'enter email'},
		{id: 'name', tip:'enter name'},
		{id: 'age', tip:'enter age'}
	];
	
	tips.forEach(function(val){
		document.getElementById(val.id).onfocus = function(){
			setHelp(val.tip);
		}
	});
}

data();