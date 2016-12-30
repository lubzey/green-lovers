import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', redirectTo: '/temp', pathMatch: 'full' },
    { path: 'temp', component: AppComponent },    
    // { path: 'plants', component: PlantsComponent },
    // { path: 'details/:name', component: UsersComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
