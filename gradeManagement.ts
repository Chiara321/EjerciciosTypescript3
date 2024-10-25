import { Grade } from './grade';
import { Student } from './student';
import { Course } from './course';

export class GradeManagement {
  private grades: Grade[] = [];

  addGrade(student: Student, course: Course, grade: number): void {
    const newGrade: Grade = { student, course, grade };
    this.grades.push(newGrade);
    console.log(`Added grade: ${student.name} - ${course.name} - ${grade}`);
  }

  listGrades(): Grade[] {
    return this.grades;
  }

  updateGrade(studentId: number, courseId: number, newGrade: number): void {
    const gradeToUpdate = this.grades.find(g => g.student.id === studentId && g.course.id === courseId);
    if (gradeToUpdate) {
      gradeToUpdate.grade = newGrade;
      console.log(`Updated grade: ${gradeToUpdate.student.name} - ${gradeToUpdate.course.name} - ${newGrade}`);
    } else {
      console.log('Grade not found.');
    }
  }

  removeGrade(studentId: number, courseId: number): void {
    const index = this.grades.findIndex(g => g.student.id === studentId && g.course.id === courseId);
    if (index !== -1) {
      const removedGrade = this.grades.splice(index, 1)[0];
      console.log(`Removed grade: ${removedGrade.student.name} - ${removedGrade.course.name}`);
    } else {
      console.log('Grade not found.');
    }
  }

  printGradesForStudent(studentId: number): void {
    const studentGrades = this.grades.filter(g => g.student.id === studentId);
    if (studentGrades.length > 0) {
      console.log(`Grades for student ID ${studentId}:`);
      studentGrades.forEach(g => {
        console.log(`Course: ${g.course.name}, Grade: ${g.grade}`);
      });
    } else {
      console.log('No grades found for this student.');
    }
  }

  sendDataToServer(): void {
    console.log('Sending data to server:', this.grades);
  }
}