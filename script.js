function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  // validation
  if (taskText == "") {
    alert("Please enter task!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskText;

  // mark complete
  li.onclick = function () {
    li.style.textDecoration = "line-through";
  };

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

// update: delete button improved