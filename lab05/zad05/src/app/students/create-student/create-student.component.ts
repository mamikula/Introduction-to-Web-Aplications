import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student : Student = new Student();
  submitted = false;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }
  
  saveStudent():void{
    this.studentService.createStudent(this.student).then(() => {
      console.log('Created new student successfully!');
      this.submitted = true;
    });
  }
  newStudent():void{
    this.submitted = false;
    this.student = new Student();
  }
}
