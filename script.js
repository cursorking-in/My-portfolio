const modal = document.getElementById("modal");
const content = document.getElementById("modal-content");

const projects = [
{
title:"Voice Dataset QA",
text:"Worked on large Hindi voice datasets focusing on natural delivery, pronunciation, and consistency."
},
{
title:"AI Evaluation",
text:"Evaluated conversational AI outputs focusing on clarity and real-world usability."
},
{
title:"Multimodal QA",
text:"Handled datasets across text, audio, and images ensuring consistency."
},
{
title:"Robotics Training",
text:"Generated real-world behavioral data through structured tasks."
}
];

function openModal(i){
    modal.style.display = "block";
    content.innerHTML = `<h2>${projects[i].title}</h2><p>${projects[i].text}</p>`;
}

function closeModal(){
    modal.style.display = "none";
}