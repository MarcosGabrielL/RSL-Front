import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//Login Components
   email: string = "";
  password : string = "";
  errorMessage = 'Invalid Credentials';
  successMessage: string = "";
  invalidLogin = false;
  loginSuccess = false;

    authRequest:any ={
    "email":"email",
    "password":"pass"
  };

//Register Components
    emailreg: string = "";
  passwordreg : string = "";
  firstName : string = "";
  lastName : string = "";

     authRequestreg:any ={
    "email":"email",
    "password":"pass",
    "firstName":"first",
    "lastName":"last"
  };
     authRequestRegister:any ={
    "email":"email",
    "password":"pass"
  };


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: LoginService,
    private registerService: RegisterService) {   }


  ngOnInit(): void {
  }
    
    handleLogin() {
    this.authRequest={
    "email":this.email,
    "password":this.password
  };
    //console.log(this.authRequest);
    this.authenticationService.authenticationService(this.authRequest).subscribe((result)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.authenticationService.createBasicAuthToken(this.email, this.password);
      this.authenticationService.registerSuccessfulLogin(this.email, this.password);
      this.successMessage = 'Login Successful.';
      this.authenticationService.mensagem(this.successMessage);
      this.router.navigate(['/index']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
      this.authenticationService.mensagem(this.errorMessage);
    });      
  }

 handleRegistration() {
    
    this.authRequestRegister={
    "email":this.emailreg,
    "password":this.passwordreg,
    "firstName":this.firstName,
    "lastName":this.lastName
     };
    
    this.authRequestreg={
    "email":this.email,
    "password":this.password
    };
       // console.log(this.authRequestRegister);
    this.registerService.registration(this.authRequestRegister).subscribe((result)=> {
        this.successMessage = 'Register Successful.';
        this.authenticationService.mensagem(this.successMessage); 
            this.authenticationService.authenticationService(this.authRequestreg).subscribe((result)=> {
                this.invalidLogin = false;
                this.loginSuccess = true;
                this.authenticationService.createBasicAuthToken(this.emailreg, this.passwordreg);
                this.authenticationService.registerSuccessfulLogin(this.emailreg, this.passwordreg);
                this.successMessage = 'Login Successful.';
                this.authenticationService.mensagem(this.successMessage);
                this.router.navigate(['/index']);
              }, () => {
                this.invalidLogin = true;
                this.loginSuccess = false;
                this.authenticationService.mensagem(this.errorMessage);
              });
    }, () => {
	this.errorMessage = 'Error Registration';
        this.authenticationService.mensagem(this.errorMessage);
        
     }); 

          
  }
}