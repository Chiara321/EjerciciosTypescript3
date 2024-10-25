import { Student } from './student';
import { Course } from './course';

export interface Grade {
  student: Student;
  course: Course;
  grade: number;
}