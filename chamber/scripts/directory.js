const url = "data/members.json";

const container = document.querySelector("#members");
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

async function getMembers() {

const response = await fetch(url);

const data = await response.json();

displayMembers(data.members);

}

function displayMembers(members){

container.innerHTML="";

members.forEach(member =>{

let card = document.createElement("section");

card.classList.add("member-card");

card.innerHTML = `

<h3>${member.name}</h3>
<p>${member.address}</p>
<p>${member.phone}</p>
<a href="${member.website}" target="_blank">Visit Website</a>

`;

container.appendChild(card);

});

}

gridBtn.addEventListener("click", () => {

container.classList.add("grid");
container.classList.remove("list");

});

listBtn.addEventListener("click", () => {

container.classList.add("list");
container.classList.remove("grid");

});

getMembers();
