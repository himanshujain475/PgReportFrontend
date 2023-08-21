import { Component, OnInit,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Import necessary classes


@Component({
  selector: 'app-add-view-user',
  templateUrl: './add-view-user.component.html',
  styleUrls: ['./add-view-user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddViewUserComponent implements OnInit {
  loginForm: FormGroup; // Declare a form group

  constructor(private formBuilder: FormBuilder,private cd: ChangeDetectorRef) {
    // Initialize the form group and form controls
    this.loginForm = this.formBuilder.group({
      inputName: ['', Validators.required],
      inputOccupation: ['', Validators.required],
      inputAddress:['',Validators.required],
      inputCity:['',Validators.required],
      inputState:['',Validators.required],
      inputZip:['',Validators.required],
      picture:[''],
      inputGender:[''],
      inputEmail:[''],
      fatherName:[''],
      motherName:['']
    });
  }
  ngOnInit() {
  }

  onSubmit(){
    console.log(this.loginForm.value);
  }

  convertImageIntoBase64(event){
    let file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) =>{
       
      this.loginForm.value.picture =reader.result;
      this.cd.detectChanges();
      // let re = btoa(e);
      //   console.log('base64 do arquivo codificado',re);
    };
    reader.onerror = function (error) {
        console.log('Erro ao ler a imagem : ', error);
    };
  }

  base64(){
    
  }

}
