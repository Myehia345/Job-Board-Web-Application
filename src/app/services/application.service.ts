import { Injectable } from '@angular/core';
import { JobApplication } from '../models/job-application.model';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  private readonly storageKey = 'jobBoardApplications';

  getApplications(): JobApplication[] {
    try {
      const savedApplications = localStorage.getItem(this.storageKey);

      if (!savedApplications) {
        return [];
      }

      const parsedApplications = JSON.parse(savedApplications);

      if (!Array.isArray(parsedApplications)) {
        return [];
      }

      return parsedApplications as JobApplication[];
    } catch {
      return [];
    }
  }

  saveApplication(application: JobApplication): void {
    const applications = this.getApplications();

    const normalizedApplication: JobApplication = {
      ...application,
      fullName: application.fullName.trim(),
      email: application.email.trim().toLowerCase(),
      coverLetter: application.coverLetter.trim(),
    };

    applications.push(normalizedApplication);
    this.writeApplications(applications);
  }

  hasApplied(jobId: number, email: string): boolean {
    const normalizedEmail = email.trim().toLowerCase();

    return this.getApplications().some(
      (application) =>
        application.jobId === jobId &&
        application.email.trim().toLowerCase() === normalizedEmail,
    );
  }

  private writeApplications(applications: JobApplication[]): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(applications));
    } catch {
      // Ignore localStorage write failures in this mock assignment.
    }
  }
}
