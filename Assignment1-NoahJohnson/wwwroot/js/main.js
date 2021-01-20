submit = document.getElementById("grade-submit");

submit.addEventListener("click", e => {
    e.preventDefault();
    console.log("submit");

    let assignment = parseInt(document.getElementById("assignment").value);
    let project = parseInt(document.getElementById("project").value);
    let quiz = parseInt(document.getElementById("quiz").value);
    let exam = parseInt(document.getElementById("exam").value);
    let intex = parseInt(document.getElementById("intex").value);

    let finalGrade = (assignment * .5) + (project * .1) + (quiz * .1) + (exam * .2) + (intex * .1);

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

    let finalGradeContainer = document.getElementById("final-grade");

    finalGradeContainer.innerHTML = `<h3>Final Grade</h3><p id="letter-grade">${letterGrade}</p><p id="numeric-grade">${finalGrade}</p>`
    finalGradeContainer.hidden = false;
   

});
