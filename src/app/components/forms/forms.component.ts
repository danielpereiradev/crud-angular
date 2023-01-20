import { HttpClient } from '@angular/common/http';
import { Routes, ActivatedRoute } from '@angular/router';
import { ListService } from './../../service/list.service';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, RadioControlValueAccessor, Validator, Validators } from '@angular/forms';
import { config, from } from 'rxjs';
import { DeclareVarStmt } from '@angular/compiler';
import { Devs } from '../Devs';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form!: FormGroup;
  // devs:Devs[]=[]

  constructor(
    private formBuilder: FormBuilder,
    private service: ListService,
    private toast: ToastrService,
    private route: ActivatedRoute,
    private location: Location,
    ) {

    // this.form = this.formBuilder.group({
    //   name: [null],
    //   // age: [null],
    //   email: [null],
    //   id: [null]
    // })

  }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: any) => {
        const id = params['id']
        const dev$ = this.service.getItem(id)
        dev$.subscribe(dev => {
          this.updateForms(dev)
        })
      })

      this.form = this.formBuilder.group({
        name: [null],
        // age: [null],
        email: [null],
        id: [null]
      })


    this.form.value
  }
  onSubmit() {
    console.log(this.form.status)
    if (this.form.status != "VALID" ) {
      this.showErro()

      
    
      if(this.form.value.id){
       this.service.update(this.form.value).subscribe(
         susseco => {
           this.toast.success("Modificado com Sucesso")
            this.location.back()
          },
          error => {
            this.toast.error("Ocorreu um erro ao Editar");
            this.location.back()
            
          }
       ) 

      console.log("update")
      }

    }else{
      this.service.save(this.form.value)

    }


    this.location.back()
  }
  showSuccess() {
    this.toast.success("Salvo !!!!")
  }

  showErro() {
    this.toast.error("Ocorreu um erro")
  }

  onCancel() {
    this.form.reset();
  }

  updateForms(dev: Devs) {
    this.form.patchValue({
      name: dev.name,
      email: dev.email
    })

  }

}
