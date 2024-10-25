"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeManagement = void 0;
class GradeManagement {
    constructor() {
        this.grades = [];
    }
    addGrade(student, course, grade) {
        const newGrade = { student, course, grade };
        this.grades.push(newGrade);
        console.log(`Added grade: ${student.name} - ${course.name} - ${grade}`);
    }
    listGrades() {
        return this.grades;
    }
    updateGrade(studentId, courseId, newGrade) {
        const gradeToUpdate = this.grades.find(g => g.student.id === studentId && g.course.id === courseId);
        if (gradeToUpdate) {
            gradeToUpdate.grade = newGrade;
            console.log(`Updated grade: ${gradeToUpdate.student.name} - ${gradeToUpdate.course.name} - ${newGrade}`);
        }
        else {
            console.log('Grade not found.');
        }
    }
    removeGrade(studentId, courseId) {
        const index = this.grades.findIndex(g => g.student.id === studentId && g.course.id === courseId);
        if (index !== -1) {
            const removedGrade = this.grades.splice(index, 1)[0];
            console.log(`Removed grade: ${removedGrade.student.name} - ${removedGrade.course.name}`);
        }
        else {
            console.log('Grade not found.');
        }
    }
    printGradesForStudent(studentId) {
        const studentGrades = this.grades.filter(g => g.student.id === studentId);
        if (studentGrades.length > 0) {
            console.log(`Grades for student ID ${studentId}:`);
            studentGrades.forEach(g => {
                console.log(`Course: ${g.course.name}, Grade: ${g.grade}`);
            });
        }
        else {
            console.log('No grades found for this student.');
        }
    }
    sendDataToServer() {
        console.log('Sending data to server:', this.grades);
    }
}
exports.GradeManagement = GradeManagement;
