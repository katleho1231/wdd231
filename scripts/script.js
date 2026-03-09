
const courses = [
{ name: "CSE210", credits: 3 },
{ name: "WDD130", credits: 3 },
{ name: "WDD231", credits: 3 }
];

let total = 0;

courses.forEach(course => {
total += course.credits;
});

document.getElementById("credits").textContent = total;
