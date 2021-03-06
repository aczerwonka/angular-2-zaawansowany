import { Component, OnInit, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {
  form: FormGroup;
  formConfig: any;

  @Input() set config(value) {
    if (value) {
      this.createForm(value);
      this.formConfig = value;
    }
  };


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnInit() {

  }

  createForm(value: any[]): any {
    value.filter((field) => { return field.type !== 'button' }).forEach(field => {
      this.form.addControl(field.name, this.fb.control(field.value, this.getValidators(field.validation)));
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  getValidators(validation) {
    if (!validation) return;
    return validation.map((validator) => {
      if (/object/.test(typeof validator)) {
        const [fn, param] = validator;
        if (fn in Validators) {
          return Validators[fn](param);
        }
      } else {
        if (validator in Validators) {
          return Validators[validator];
        }
      }
    })
  }
}
