function handlecontact(event) {
    event.preventDefault();


    const successcontainer = document.getElementById("successcontainer");

    const messageParagraph = document.createElement("p");
    messageParagraph.innerText = `Your Message : ${MESSAGE}`;

    successcontainer.appendChild(messageParagraph);
}

const imageArray = [
    {
        url: "Images/Foods/1.png"
    },
    {
        url:"Images/Foods/2.png"
    },
    {
        url: "Images/Foods/3.png"
    },
    {
        url: "Images/Foods/4.png"
    },

];


function handleShowMoreproject() {
    const carts = document.getElementById("projects")

    const projectDiv = document.createElement("div");

    for (const item of imageArray) {
        const projectDivImage = document.createElement("div");
        projectDivImage.classList.add("box-content")
        const img = document.createElement("img");
        projectDivImage.innerHTML = `

     <img src="${item.url}" alt="">
     `;

        projectcontainer.appendChild(projectDivImage);
    }
}
