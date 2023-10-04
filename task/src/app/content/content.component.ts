import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  formData!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      quoteNumber: ['', Validators.required],
      location: ['', Validators.required],
      eConsumption: ['', Validators.required],
      billInfo: ['', Validators.required],
      avaiRoofSpace: ['', Validators.required],
      bStorage: ['', Validators.required],
      productBillInfo: this.fb.array([this.billingFilds()]),
    });
  }
  ngOnInit(): void {}
  billingFilds() {
    return this.fb.group({
      item: ['', Validators.required],
      unitPrice: ['', Validators.required],
      quantity: ['', Validators.required],
      discount: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }
  get productBillInfoArray() {
    return this.formData.get('productBillInfo') as FormArray;
  }
  addProduct() {
    this.productBillInfoArray.push(this.billingFilds());
  }
}
