var display;

function getExamGrades() {
    var grades = [];
    var i;
    
    for (i = 1; i <= 4; i++) {
        var gradeInput = document.getElementById("exam" + i);
        var dropCheckbox = document.getElementById("dropExam" + i);
        
        var grade = parseFloat(gradeInput.value);
        var shouldDrop = dropCheckbox.checked;
        
        if (!isNaN(grade) && !shouldDrop) {
            grades.push(grade);
        }
    }
    
    return grades;
}

function getAssignmentGrades() {
    var grades = [];
    var assignments = ["A", "B", "C"];
    var j;
    
    for (j = 0; j < assignments.length; j++) {
        var gradeInput = document.getElementById("assignment" + assignments[j]);
        var grade = parseFloat(gradeInput.value);
        
        if (!isNaN(grade)) {
            grades.push(grade);
        }
    }
    
    return grades;
}

function calculateAverage(grades) {
    if (grades.length === 0) return 0;
    var sum = 0;
    var k;
    for (k = 0; k < grades.length; k++) {
        sum = sum + grades[k];
    }
    return sum / grades.length;
}

function calculate() {
    display = document.getElementById("display");
    
    var examGrades = getExamGrades();
    var examPercentInput = document.getElementById("examPercent");
    var examPercent = parseFloat(examPercentInput.value);
    
    var assignmentGrades = getAssignmentGrades();
    var assignmentPercentInput = document.getElementById("assignmentPercent");
    var assignmentPercent = parseFloat(assignmentPercentInput.value);
    
    if (isNaN(examPercent) || isNaN(assignmentPercent)) {
        display.value = "Error: Please enter valid percentages";
        return;
    }
    
    if (examPercent + assignmentPercent !== 100) {
        display.value = "Error: Percentages must add up to 100";
        return;
    }
    
    if (examGrades.length === 0 && assignmentGrades.length === 0) {
        display.value = "Error: Please enter at least one grade";
        return;
    }
    
    var examAverage = calculateAverage(examGrades);
    var assignmentAverage = calculateAverage(assignmentGrades);
    
    var finalGrade = 0;
    
    if (examGrades.length > 0) {
        finalGrade = finalGrade + (examAverage * examPercent) / 100;
    }
    
    if (assignmentGrades.length > 0) {
        finalGrade = finalGrade + (assignmentAverage * assignmentPercent) / 100;
    }
    
    display.value = finalGrade.toFixed(2);
}
