import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Job } from '../../models/job.model';
import { AuthService } from '../../services/auth.service';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-details-page',
  imports: [RouterLink],
  templateUrl: './job-details-page.component.html',
  styleUrl: './job-details-page.component.css',
})
export class JobDetailsPageComponent {
  job: Job | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService,
    private authService: AuthService,
  ) {
    this.loadJob();
  }

  applyForJob(): void {
    if (!this.job) {
      return;
    }

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/jobs', this.job.id, 'apply']);
      return;
    }

    this.router.navigate(['/login']);
  }

  private loadJob(): void {
    const jobIdText = this.route.snapshot.paramMap.get('id');

    if (!jobIdText) {
      this.job = undefined;
      return;
    }

    const jobId = Number(jobIdText);

    if (!Number.isInteger(jobId)) {
      this.job = undefined;
      return;
    }

    this.job = this.jobService.getJobById(jobId);
  }
}
