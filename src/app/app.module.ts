import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    UsersidemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
