const messages = [
 "Success is built step by step.",
 "Never stop learning.",
 "Every day is a new opportunity.",
 "Consistency beats talent.",
 "Small progress is still progress."
];

function generateMessage(){

 const messageElement = document.getElementById("message");

 messageElement.classList.add("fade-out");

 setTimeout(() => {

   const randomIndex = Math.floor(Math.random() * messages.length);
   messageElement.textContent = messages[randomIndex];

   messageElement.classList.remove("fade-out");

 }, 500);
}