import { Routes,RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
    {path:'',component:LayoutComponent},
    {path:'**',component:LayoutComponent}
];

export const AppRoutingModule = RouterModule.forRoot(routes);