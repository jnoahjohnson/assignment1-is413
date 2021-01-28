// Add an event listener to the submit button

$("#grade-form").submit(e => {
    // Prevent the default submit action

    e.preventDefault();

    let isValid = true;
    
    // Get all of the grades for each category
    let assignment = $("#assignment").val();
    let project = $("#project").val();
    let quiz = $("#quiz").val();
    let exam = $("#exam").val();
    let intex = $("#intex").val();

    console.log(project);
    console.log($("#project"));
    // Calculate the final grade 
    let finalGrade = (assignment * .5) + (project * .1) + (quiz * .1) + (exam * .2) + (intex * .1);


    // Calculate the letter grade based on the final grade 
    let letterGrade = "";

    if (finalGrade >= 94) {
        letterGrade = "A";
    } else if (finalGrade >= 90) {
        letterGrade = "A-";
    } else if (finalGrade >= 87) {
        letterGrade = "B+";
    } else if (finalGrade >= 84) {
        letterGrade = "B";
    } else if (finalGrade >= 80) {
        letterGrade = "B-";
    } else if (finalGrade >= 77) {
        letterGrade = "C+";
    } else if (finalGrade >= 74) {
        letterGrade = "C";
    } else if (finalGrade >= 70) {
        letterGrade = "C-";
    } else if (finalGrade >= 67) {
        letterGrade = "D+";
    } else if (finalGrade >= 64) {
        letterGrade = "D";
    } else if (finalGrade >= 60) {
        letterGrade = "D-";
    } else {
        letterGrade = "E";
    }

    // Get the div where the final grade will be shown
    let finalGradeContainer = $("#final-grade");

    // Set the html of the final grade div and then show the element
    finalGradeContainer.html(`<h3>Final Grade</h3><p id="letter-grade">${letterGrade}</p><p id="numeric-grade">${finalGrade}</p>`);
    finalGradeContainer.show();
});
