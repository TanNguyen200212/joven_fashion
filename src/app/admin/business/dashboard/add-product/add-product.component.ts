import { ProductsService } from './../../products.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { take } from 'rxjs';

// export interface DialogData {
//   name: string;
//   price: string;
//   category: string;
//   imageUrl: string;
//   description: string;
//   id: string;
//   isEditMode: boolean;
// }
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  productsForm!: FormGroup;
  isEditMode = false;
  private dataItem;
  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productsService: ProductsService,
    private fb: FormBuilder
  ) {
    this.dataItem = this.data.data ? this.data.data : null;
    this.isEditMode = this.data?.isEditMode;
    this.productsForm = this.fb.group({
      category: [this.dataItem?.category, Validators.required],
      imageUrl: [this.dataItem?.imageUrl, Validators.required], 
      name: [this.dataItem?.name, Validators.required],
      description: [this.dataItem?.description, Validators.required],
      price: [this.dataItem?.price, Validators.required],
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnit() {
    this.isEditMode = !!this.data?.id;
    if (this.isEditMode) {
      this.productsForm.patchValue(this.data);
    }
    this.productsForm = new FormGroup({
      category: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      decription: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),


    });
  }

  onSubmitPr(): void {
    if (this.productsForm.valid) {
      if (this.isEditMode) {
        this.productsService
          .updateProducts(this.dataItem.id, this.productsForm.value)
          .pipe(take(1))
          .subscribe((responseData) => {
            // this.dialogRef.close();
            this.dialogRef.close('ok');
          });
      } else {
        // Create a new post
        let prd = this.productsForm.value
        this.productsService
          .createAndStoreProducts(
            prd.category,
            prd.imageUrl,
            prd.name,
            prd.description,
            prd.price
          )
          .pipe(take(1))
          .subscribe((responseData) => {
            this.dialogRef.close({ action: 'add', data: responseData });
          });
      }
      console.log('thanh cong');
    } else {
      console.log('Form không hợp lệ');
    }
  }
}
