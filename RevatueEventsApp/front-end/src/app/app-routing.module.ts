import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FeaturedEventsViewComponent } from './views/featured-events-view/featured-events-view.component';
import { CrudEventViewComponent } from './views/crud-event-view/crud-event-view.component';
import { HomeComponent } from './components/home/home.component';
import { ImageBannerComponent } from './components/image-banner/image-banner.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { EventListComponent } from './components/event-list/event-list.component';
import {EventViewComponent} from './components/event-view/event-view.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {SearchComponent} from './components/search/search.component';
import {SearchResultsComponent} from './components/search-results/search-results.component';


export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'featured', component: FeaturedEventsViewComponent},
    {path: 'create-event', component: CrudEventViewComponent},
    {path: 'banner', component: ImageBannerComponent},
    {path: 'create-account', component: CreateAccountComponent},
    {path: 'event-list', component: EventListComponent},
    {path: 'event-view', component: EventViewComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'search', component: SearchComponent},
    {path: 'search-results', component: SearchResultsComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
