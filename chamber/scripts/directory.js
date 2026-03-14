const url = "data/members.json";

const container = document.querySelector("#members");

async function getMembers(){

const response = await fetch(url);

const data = await response.json();

displayMembers(data);

}

function displayMembers(members){

members.forEach(member => {

let card = document.createElement("section");

card.innerHTML = `
<h3>${member.name}</h3>
<p>${member.address}</p>
<p>${member.phone}</p>
<a href="${member.website}">Visit Website</a>
`;

container.appendChild(card);

});

}

getMembers();

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;
