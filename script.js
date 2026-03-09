const courses = [
{code:"CSE110", credits:2, completed:true},
{code:"WDD130", credits:2, completed:true},
{code:"CSE210", credits:2, completed:false},
{code:"WDD231", credits:2, completed:false}
];

function displayCourses(list){

const container = document.getElementById("courses");
container.innerHTML = "";

list.forEach(course => {

let div = document.createElement("div");
div.classList.add("course");

if(course.completed){
div.classList.add("completed");
}

div.textContent = course.code;

container.appendChild(div);

});

calculateCredits(list);

}

function filterCourses(type){

if(type === "all"){
displayCourses(courses);
}
else{
let filtered = courses.filter(course => course.code.includes(type));
displayCourses(filtered);
}

}

function calculateCredits(list){

let total = list.reduce((sum, course)=> sum + course.credits,0);

document.getElementById("credits").textContent = total;

}

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;

displayCourses(courses);
