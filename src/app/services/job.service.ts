import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private readonly jobs: Job[] = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Solutions',
      location: 'Berlin',
      type: 'Full-time',
      category: 'Frontend',
      description: 'We are looking for a Frontend Developer to join our team.',
      salary: '€50,000 - €65,000',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Digital Labs',
      location: 'Munich',
      type: 'Full-time',
      category: 'Backend',
      description: 'Join our backend engineering team.',
      salary: '€55,000 - €70,000',
    },
    {
      id: 3,
      title: 'UX Designer',
      company: 'Creative Studio',
      location: 'Hamburg',
      type: 'Part-time',
      category: 'Design',
      description: 'Help us create simple and intuitive user experiences.',
      salary: '€35,000 - €45,000',
    },
    {
      id: 4,
      title: 'Angular Developer',
      company: 'Web Factory',
      location: 'Berlin',
      type: 'Full-time',
      category: 'Frontend',
      description: 'Work with our team to build modern Angular applications.',
      salary: '€50,000 - €68,000',
    },
  ];

  getJobs(): Job[] {
    return [...this.jobs];
  }

  getJobById(id: number): Job | undefined {
    return this.jobs.find((job) => job.id === id);
  }
}
