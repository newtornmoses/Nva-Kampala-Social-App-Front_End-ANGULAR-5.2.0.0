import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { ProfileService } from './profile.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {pageRoutes} from './routes';
import { NavigationComponent } from './navigation/navigation.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { ImagecoverComponent } from './imagecover/imagecover.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebartrendingComponent } from './sidebartrending/sidebartrending.component';
import { OnlinestatusComponent } from './onlinestatus/onlinestatus.component';
import { FriendsComponent } from './friends/friends.component';
import { AboutComponent } from './about/about.component';
import { ProfileviewComponent } from './profileview/profileview.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ProfileDirective } from './profileImage.directive';
import { ProfileCoverDirective } from './profile-cover.directive';
import { ProfilepictureComponent } from './profilepicture/profilepicture.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavigationComponent,
    SignupComponent,
    ProfileComponent,
    LogoutComponent,
    CreatepostComponent,
    ImagecoverComponent,
    SidebarComponent,
    SidebartrendingComponent,
    OnlinestatusComponent,
    FriendsComponent,
    AboutComponent,
    ProfileviewComponent,
    ProfileDirective,
    ProfileCoverDirective,
    ProfilepictureComponent,


  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    pageRoutes,
    ImageCropperModule
  ],
  providers: [ApiService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
