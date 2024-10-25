import { Student } from './student';
import { Course } from './course';
import { GradeManagement } from './gradeManagement';

const gradeManagement = new GradeManagement();

const student1: Student = { id: 1, name: 'Alice' };
const student2: Student = { id: 2, name: 'Bob' };

const course1: Course = { id: 1, name: 'Math' };
const course2: Course = { id: 2, name: 'Science' };

gradeManagement.addGrade(student1, course1, 85);
gradeManagement.addGrade(student2, course2, 90);

console.log('All grades:', gradeManagement.listGrades());

gradeManagement.updateGrade(1, 1, 95);
console.log('After update:', gradeManagement.listGrades());

gradeManagement.removeGrade(2, 2);
console.log('After deletion:', gradeManagement.listGrades());

gradeManagement.printGradesForStudent(1);

gradeManagement.sendDataToServer();
