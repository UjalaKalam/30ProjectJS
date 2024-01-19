const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

    // Add event listener for the dynamically created inputBox
    inputBox.addEventListener("keyup", function() {
        updateStorage();
    });
});

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

// Event delegation for the "Enter" key
notesContainer.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && event.target.tagName === "P") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
        updateStorage();
    }
});

// Initial load
showNotes();
