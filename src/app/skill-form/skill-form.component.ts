import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css']
})
export class SkillFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      skill_name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  isErrorVisible(field: string, error:string) {
  return this.form.controls[field].dirty //has been touched
      && this.form.controls[field].errors //if form is associated with the field
      && this.form.controls[field].errors[error]; //if the error includes the given error.
  }

  get value() {
    return this.form.value;
  }

  get valid() {
    return this.form.valid;
  }

  reset() {
    this.form.reset();
  }

}
