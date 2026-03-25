const modal = document.getElementById("modal");
const content = document.getElementById("modal-content");

const projects = [
{
title:"Voice Dataset QA",
text:"Reviewed large Hindi voice datasets focusing on natural delivery and pronunciation."
},
{
title:"AI Evaluation",
text:"Improved clarity and tone of conversational AI outputs."
},
{
title:"Multimodal QA",
text:"Handled text, audio, and image datasets ensuring consistency."
},
{
title:"Robotics Training",
text:"Generated real-world task data for AI systems."
}
];

function openModal(i){
    modal.style.display = "block";
    content.innerHTML = `<h2>${projects[i].title}</h2><p>${projects[i].text}</p>`;
}

function closeModal(){
    modal.style.display = "none";
}

window.onclick = function(e){
    if(e.target === modal){
        closeModal();
    }
}
