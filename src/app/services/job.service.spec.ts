import { TestBed } from '@angular/core/testing';
import { JobService } from './job.service';

describe('JobService', () => {
  let service: JobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobService);
  });

  it('returns all jobs', () => {
    const jobs = service.getJobs();

    expect(jobs.length).toBe(4);
  });

  it('finds a job by id', () => {
    const job = service.getJobById(1);

    expect(job?.title).toBe('Frontend Developer');
  });
});
