import { TestBed } from '@angular/core/testing';
import { ApplicationService } from './application.service';

describe('ApplicationService', () => {
  let service: ApplicationService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationService);
  });

  it('saves an application', () => {
    service.saveApplication({
      jobId: 1,
      fullName: 'Alex Doe',
      email: 'alex@example.com',
      coverLetter: 'I would love to apply.',
    });

    expect(service.getApplications().length).toBe(1);
  });

  it('detects duplicates case-insensitively for the same job', () => {
    service.saveApplication({
      jobId: 1,
      fullName: 'Alex Doe',
      email: 'alex@example.com',
      coverLetter: 'I would love to apply.',
    });

    expect(service.hasApplied(1, ' ALEX@example.com ')).toBe(true);
    expect(service.hasApplied(2, 'alex@example.com')).toBe(false);
  });
});
