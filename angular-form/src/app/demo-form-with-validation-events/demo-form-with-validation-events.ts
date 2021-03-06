import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-validation-events',
  templateUrl: './demo-form-with-validation-events.html',
})
export class DemoFormWithValidationEventsComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe((value: string) => {console.log('sku changed:',value);});
    this.myForm.valueChanges.subscribe((formValue: any) => {console.log('form changed:',formValue);});
  }

  ngOnInit(): void {
  }

  onSubmit(value: string): void {
    console.log('Submitted:', value);
  }

}