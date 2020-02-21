import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProductsService } from './../../../core/services/products/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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
      this.productsService.updateProduct(this.id, product).subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['admin/products']);

      });
    }
    console.log(this.form.value);
  }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id)
      .subscribe(product => {
        this.form.patchValue(product);
      });
    });
  }

  // Lo invocamos en el constructor
  private buildForm() {
    // Crea como un json el formControl
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      image: [''],
      description: ['', Validators.required]
    });
  }

}
