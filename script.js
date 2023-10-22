
function openLinks() {
    // Prompt the user for a password
    var userPassword = prompt("Please enter the password:");

    // Check if the password is correct
    if (userPassword === "monem") {
        // If the password is correct, open the GitHub link in a new tab
        window.open("https://github.com/MONEMALI9/Examination_System", "_blank");

        // Open the PDF link in a new tab
        window.open("./ABDELMONEM ALI .pdf", "_blank");
    } else {
        alert("Incorrect password. Access denied.");
    }
}
