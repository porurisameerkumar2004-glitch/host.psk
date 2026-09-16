function showMessage() {
    document.getElementById("message").innerHTML =
        "Student Management System is working!";
}

function searchStudent() {
    let name = document.getElementById("search").value;

    alert("Searching for: " + name);
}