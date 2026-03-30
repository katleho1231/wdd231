const params = new URLSearchParams(window.location.search);

document.getElementById("output").innerHTML = `
Name: ${params.get("fname")} ${params.get("lname")} <br>
Email: ${params.get("email")} <br>
Phone: ${params.get("phone")} <br>
Business: ${params.get("business")} <br>
Date: ${params.get("timestamp")}
`;
