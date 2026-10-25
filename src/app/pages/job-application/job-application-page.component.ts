import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Job } from '../../models/job.model';
import { ApplicationService } from '../../services/application.service';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-application-page',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './job-application-page.component.html',
  styleUrl: './job-application-page.component.css',
})
export class JobApplicationPageComponent {
  job: Job | undefined;
  submitted = false;
  duplicateMessage = '';
  successMessage = '';

  applicationForm = new FormGroup({
    fullName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    coverLetter: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private applicationService: ApplicationService,
  ) {
    this.loadJob();
  }

  onSubmit(): void {
    this.submitted = true;
    this.duplicateMessage = '';
    this.successMessage = '';

    if (!this.job) {
      return;
    }

    if (this.applicationForm.invalid) {
      this.applicationForm.markAllAsTouched();
      return;
    }

    const fullName = this.applicationForm.controls.fullName.value.trim();
    const email = this.applicationForm.controls.email.value.trim();
    const coverLetter = this.applicationForm.controls.coverLetter.value.trim();

    if (this.applicationService.hasApplied(this.job.id, email)) {
      this.duplicateMessage = 'You have already applied for this job.';
      return;
    }

    this.applicationService.saveApplication({
      jobId: this.job.id,
      fullName,
      email,
      coverLetter,
    });

    this.successMessage = 'Your application has been submitted successfully.';
    this.applicationForm.reset();
    this.submitted = false;
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
