// Function to open Power BI links
function powerbi() {
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

// Function to open AWS links
function aws() {
    // Prompt the user for a password
    var userPassword = prompt("Please enter the password:");

    // Check if the password is correct
    if (userPassword === "monem") {
        // If the password is correct, open the GitHub link in a new tab
        window.open("https://github.com/MONEMALI9/AwsCodeBuildRole", "_blank");

        // Open the PDF link in a new tab
        window.open("./education/AWS ResStart.pdf", "_blank");
    } else {
        alert("Incorrect password. Access denied.");
    }
}

// Function to open links related to a bachelor's degree
function bachelorDegree() {
    // Prompt the user for a password
    var userPassword = prompt("Please enter the password:");

    // Check if the password is correct
    if (userPassword === "monem") {
        // If the password is correct, open various links in new tabs
        window.open("https://github.com/MONEMALI9/AwsCodeBuildRole", "_blank");
        window.open("./education/شهاده مؤقته.pdf", "_blank");
        window.open("./education/ترجمة الشهادة المؤقته.pdf", "_blank");
        window.open("./ABDELMONEM ALI .pdf", "_blank");
        window.open("./ABDELMONEM ALI .pdf", "_blank");
    } else {
        alert("Incorrect password. Access denied.");
    }
}
