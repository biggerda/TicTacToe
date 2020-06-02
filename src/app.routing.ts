import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app/app.component';

const routes: Routes = [
    { path: '', component: AppComponent }
];

export const teamRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
