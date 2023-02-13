import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@aspnet/signalr';
import { GetComponent } from './get/get.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: 'post', component: PostComponent },
  { path: 'get', component: GetComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
