function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

const student5 = new Student("Anton", "male", 23);
const student6 = new Student("Natasha", "female", 33);
const student7 = new Student("Andrey", "male", 25);

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (!this.hasOwnProperty("marks")) {
		return 0;
	}
	this.marks.push(...marks);
}

Student.prototype.getAverage = function() {
	if (!this.hasOwnProperty("marks") || (this.marks.length === 0)) {
		return 0;
	}
	return this.marks.reduce((acc, item) => acc += item, 0) / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	this.excluded = reason;
	delete this.subject;
	delete this.marks;
}