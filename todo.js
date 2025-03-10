 function add_item() {
    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");

    if (item.value != "") {
        let make_li = document.createElement("li");

        // Create span to hold the task text
        let span = document.createElement("span");
        span.textContent = item.value;
        
        // Create edit button
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");
        editBtn.style.marginLeft = "10px";
        editBtn.onclick = function () {
            edit_item(make_li, span);
        };

        // Create delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.onclick = function () {
            list_item.removeChild(make_li);
        };

        make_li.appendChild(span);
        make_li.appendChild(editBtn);
        make_li.appendChild(deleteBtn);
        list_item.appendChild(make_li);

        item.value = "";
    } else {
        alert("Please add a value to Item");
    }
}

function edit_item(listItem, span) {
    let editInput = document.getElementById("editinput");
    let editForm = document.getElementById("edit-form");

    // Show edit form and set input value
    editForm.classList.remove("hide");
    editInput.value = span.textContent;

    // On clicking edit button, update the task
    document.querySelector("#edit-form input[type='button']").onclick = function () {
        if (editInput.value.trim() !== "") {
            span.textContent = editInput.value;
            editForm.classList.add("hide");
        } else {
            alert("Edited task cannot be empty!");
        }
    };
}

    