import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Job } from '../../models/job.model';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-jobs-list-page',
  imports: [FormsModule, RouterLink],
  templateUrl: './jobs-list-page.component.html',
  styleUrl: './jobs-list-page.component.css',
})
export class JobsListPageComponent {
  readonly categories = ['All', 'Frontend', 'Backend', 'Design'];

  jobs: Job[] = [];
  searchTerm = '';
  selectedCategory = 'All';

  constructor(private jobService: JobService) {
    this.jobs = this.jobService.getJobs();
  }

  get filteredJobs(): Job[] {
    const normalizedSearchTerm = this.searchTerm.trim().toLowerCase();

    return this.jobs.filter((job) => {
      const matchesCategory = this.selectedCategory === 'All' || job.category === this.selectedCategory;

      if (!normalizedSearchTerm) {
        return matchesCategory;
      }

      const matchesTitle = job.title.toLowerCase().includes(normalizedSearchTerm);
      const matchesCompany = job.company.toLowerCase().includes(normalizedSearchTerm);

      return matchesCategory && (matchesTitle || matchesCompany);
    });
  }
}
