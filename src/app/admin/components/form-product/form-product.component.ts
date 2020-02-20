import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductsService } from './../../../core/services/products/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.buildForm();
   }
  saveProduct(event: Event) {
    // Esto es para evitar que la pagina se recargue con la generación del formulario
    event.preventDefault();
    console.log(this.form.valid);
    if (this.form.valid) {
      console.log('entra');
      const product = this.form.value;
      this.productsService.createProduct(product).subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['admin/products']);

      });
    }
    console.log(this.form.value);
  }

  ngOnInit(): void {
  }
  // Lo invocamos en el constructor
  private buildForm() {
    // Crea como un json el formControl
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

}
