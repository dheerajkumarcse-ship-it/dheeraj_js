const teachingSupport={
    name:"dheeraj",
    count:5
}
const Teacher={
    name:"neeraj",
    count:10
}

const Target=Object.setPrototypeOf(Teacher, teachingSupport)

console.log(this.name);