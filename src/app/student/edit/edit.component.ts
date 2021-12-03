import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  student:FormGroup;
  constructor(private formBuilder: FormBuilder) { 
    this.student = this.formBuilder.group({
      name:[''],
      mobileNo:[''],
      emailId:['']
    });
  }
  get name() {
    return this.student.get('name');
  }

  get mobileNo() {
    return this.student.get('mobileNo');
  }

  get emailId() {
    return this.student.get('emailId');
  }
  ngOnInit(): void {

  }
  onSubmit(){
      console.log(this.student.value)
  }
}
