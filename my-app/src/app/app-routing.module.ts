import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'gallery',component: GalleryComponent},
    { path: 'videos',component: VideosComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingComponents = [HomeComponent,AboutComponent,GalleryComponent,VideosComponent,ContactComponent]
  