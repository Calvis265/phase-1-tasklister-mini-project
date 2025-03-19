document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const input = document.querySelector("input").value;
    const list = document.querySelector("#tasks"); 
  
    if (input.trim() !== "") { 
      const newTask = document.createElement("li");
      newTask.textContent = input; 
      list.appendChild(newTask); 
    }
  });
  
});
