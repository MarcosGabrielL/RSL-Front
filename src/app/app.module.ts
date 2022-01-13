import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {PlatformModule} from '@angular/cdk/platform';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgotComponent } from './components/security/forgot/forgot.component';
import { LoginComponent } from './components/security/login/login.component';
import { RegisterComponent } from './components/security/register/register.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FirstComponent } from './components/template/nav/first/first.component';
import { SecondComponent } from './components/template/nav/second/second.component';
import { PagenotfoundComponent } from './components/template/pagenotfound/pagenotfound.component';
import { ChatComponent } from './components/views/chat/chat.component';
import { FeaturesmenusideComponent } from './components/views/featuresmenuside/featuresmenuside.component';
import { FeedimagesComponent } from './components/views/feedimages/feedimages.component';
import { FeednoticiasComponent } from './components/views/feednoticias/feednoticias.component';
import { FeedproductComponent } from './components/views/feedproduct/feedproduct.component';
import { FeedvideosComponent } from './components/views/feedvideos/feedvideos.component';
import { ProfilepublicComponent } from './components/views/profilepublic/profilepublic.component';
import { ProfilesettingComponent } from './components/views/profilesetting/profilesetting.component';
import { UsersidemenuComponent } from './components/views/usersidemenu/usersidemenu.component';
import { IndexComponent } from './components/views/index/index.component';
import { HttpInterceptorService } from './components/security/httpinterceptor.service';
import { GridlistComponent } from './components/views/gridlist/gridlist.component';
import { EmailverificationComponent } from './components/security/emailverification/emailverification.component';
import { ResetpassemailComponent } from './components/security/resetpassemail/resetpassemail.component';
import { ResetpassnewComponent } from './components/security/resetpassnew/resetpassnew.component';

@NgModule({
  declarations: [
    AppComponent,
    ForgotComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    FirstComponent,
    SecondComponent,
    PagenotfoundComponent,
    ChatComponent,
    FeaturesmenusideComponent,
    FeedimagesComponent,
    FeednoticiasComponent,
    FeedproductComponent,
    FeedvideosComponent,
    ProfilepublicComponent,
    ProfilesettingComponent,
    UsersidemenuComponent,
    IndexComponent,
    GridlistComponent,
    EmailverificationComponent,
    ResetpassemailComponent,
    ResetpassnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatGridListModule,
    PlatformModule,
    NgbModule,
    NgxDropzoneModule 
  ],
  providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpInterceptorService,
          multi: true
        }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
