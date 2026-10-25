import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { JobApplicationPageComponent } from './pages/job-application/job-application-page.component';
import { JobDetailsPageComponent } from './pages/job-details/job-details-page.component';
import { JobsListPageComponent } from './pages/jobs-list/jobs-list-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'jobs', pathMatch: 'full' },
	{ path: 'login', component: LoginPageComponent },
	{ path: 'jobs', component: JobsListPageComponent },
	{ path: 'jobs/:id/apply', component: JobApplicationPageComponent, canActivate: [authGuard] },
	{ path: 'jobs/:id', component: JobDetailsPageComponent },
	{ path: '**', redirectTo: 'jobs' },
];
