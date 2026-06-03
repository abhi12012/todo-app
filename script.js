function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  // validation
  if (taskText == "") {
    alert("Please enter task!");
    return;
  }

  let li = document.createElement("li");
  // Task Text
  let span = document.createElement("span");
  span.textContent = taskText;
 
  span.onclick = function () {
    span.style.textDecoration = "line-through"; // Mark done
  };


  // Delete Button
  let delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.style.marginLeft = "10px";
  delBtn.style.background = "red";
  delBtn.style.color = "white";
  delBtn.style.border = "none";
  delBtn.style.borderRadius = "5px";
  delBtn.style.cursor = "pointer";


  delBtn.onclick = function () {
    li.remove(); // Remove the whole task
  };


  li.appendChild(span);
  li.appendChild(delBtn);


  document.getElementById("taskList").appendChild(li);

  input.value = "";
}