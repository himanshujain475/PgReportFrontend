import { Component, OnInit,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Import necessary classes
import { HttpService } from '../service/HttpService';
import { Constants } from '../model/constant';
import { DomSanitizer } from '@angular/platform-browser';
import { UserDetailsBO } from '../model/UserBO';


@Component({
  selector: 'app-add-view-user',
  templateUrl: './add-view-user.component.html',
  styleUrls: ['./add-view-user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddViewUserComponent implements OnInit {
  loginForm: FormGroup; // Declare a form group
  viewOnly: false;
   pictureBase64;
  constructor(private sanitizer: DomSanitizer,private formBuilder: FormBuilder,private cd: ChangeDetectorRef,private httpService:HttpService) {
    // Initialize the form group and form controls
    this.loginForm = this.formBuilder.group({
      inputName: ['', Validators.required],
      fatherMobile:['',Validators.required],
      inputEmail:['',Validators.required,Validators.email],
      inputRoomNo:['',Validators.required],
      inputDate:['',Validators.required],
      inputCompany:['',Validators.required],
      inputOccupation: ['', Validators.required],
      inputAddress:['',Validators.required],
      inputCity:['',Validators.required],
      inputState:['',Validators.required],
      inputZip:['',Validators.required],
      picture:['',Validators.required],
      inputGender:['',Validators.required],
      fatherName:['',Validators.required],
      motherName:['',Validators.required],
      inputOccupancy:['',Validators.required],
      securityAmount:['',Validators.required],
     
    });
  }
  cancelPhoto(){
    this.loginForm.value.picture = "";
    
  }

  
  ngOnInit() {
    let userDetailsUrl =Constants.BASE_URL+Constants.GET_USER_DETAILS_URL+"9358428898";
    // this.httpService.getRequest(userDetailsUrl).subscribe(response=>{
      
    // })
  }

  onSubmit(){
   let userTo = new UserDetailsBO;
    this.makeUserToObject(userTo);
     
    
  }

  makeUserToObject(userTo){
    userTo.state =this.loginForm.value.inputState;
    userTo.zip =this.loginForm.value.inputZip;
    userTo.occupation = this.loginForm.value.inputOccupation;
    userTo.joiningDate = this.loginForm.value.inputDate;
    userTo.fatherName = this.loginForm.value.fatherName;
    userTo.fatherMobile = this.loginForm.value.fatherMobile;
    userTo.securityAmount = this.loginForm.value.securityAmount;
    userTo.name = this.loginForm.value.inputName;
    userTo.occupancy = this.loginForm.value.inputOccupancy;
    userTo.roomNo = this.loginForm.value.inputRoomNo;
    userTo.picture = this.pictureBase64;
    userTo.motherName = this.loginForm.value.motherName;
    userTo.gender = this.loginForm.value.inputGender;
    userTo.city = this.loginForm.value.inputCity;
    userTo.company =this.loginForm.value.inputCompany;
    userTo.occupation = this.loginForm.value.inputOccupation;
  }
  
  convertImageIntoBase64(event){
    let file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) =>{
       
    //  this.loginForm.value.picture = this.sanitizer.bypassSecurityTrustStyle(this.loginForm.value.picture );
      this.pictureBase64 = event.target;
      this.cd.detectChanges();
      // let re = btoa(e);
         console.log('base64 do arquivo codificado',this.loginForm.value.picture);
    };
    reader.onerror = function (error) {
        console.log('Erro ao ler a imagem : ', error);
    };
  }

  getSantizeURL(){
    
    if(this.loginForm.value.picture != ''){
      console.log(this.loginForm.value.picture)
      return this.sanitizer.bypassSecurityTrustUrl(this.loginForm.value.picture);
      
    }
    return null;
   
  }
  
  

}
