import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageBannerComponent } from './components/image-banner/image-banner.component';
import { FeaturedEventsComponent } from './components/featured-events/featured-events.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { SearchComponent } from './components/search/search.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { AppRoutingModule } from './app-routing.module';
import { FeaturedEventsViewComponent } from './views/featured-events-view/featured-events-view.component';
import { CrudEventViewComponent } from './views/crud-event-view/crud-event-view.component';
import { AuthService } from './services/auth.service';
import {EventViewComponent} from './components/event-view/event-view.component';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ContextService } from './services/context.service';
import { DataService } from './services/data.service';
import { ImageService } from './services/image.service';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageBannerComponent,
    FeaturedEventsComponent,
    FooterComponent,
    EventListComponent,
    SearchComponent,
    LoginComponent,
    HomeComponent,
    FeaturedEventsViewComponent,
    CrudEventViewComponent,
    CreateAccountComponent,
    UserProfileComponent,
    EventViewComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    ContextService,
    DataService,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
