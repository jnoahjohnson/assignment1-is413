// Add an event listener to the submit button

$("#grade-form").submit(e => {
    // Prevent the default submit action

    // Track if the form is valid 
    let isValid = false;
    
    // Get all of the grades for each category

    let assignment = $("#assignment").val();
    let project = $("#project").val();
    let quiz = $("#quiz").val();
    let exam = $("#exam").val();
    let intex = $("#intex").val();

    // Client side form validation 
    if (assignment <= 100 && assignment >= 0
        && project <= 100 && project >= 0
        && quiz <= 100 && quiz >= 0
        && exam <= 100 && exam >= 0
        && intex <= 100 && intex >= 0) {
        isValid = true;
    } 

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

    //Alert the final grade if the form is valid
    alert(isValid ? `Final Grade: ${finalGrade}% (${letterGrade})` : 'Form is not valid');
});
