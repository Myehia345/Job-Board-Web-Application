import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { JobsListPageComponent } from './jobs-list-page.component';

describe('JobsListPageComponent', () => {
  let component: JobsListPageComponent;
  let fixture: ComponentFixture<JobsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsListPageComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(JobsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('shows frontend jobs when Frontend category is selected', () => {
    component.selectedCategory = 'Frontend';

    expect(component.filteredJobs.length).toBe(2);
  });

  it('applies search and category filters together', () => {
    component.selectedCategory = 'Frontend';
    component.searchTerm = 'Angular';

    expect(component.filteredJobs.length).toBe(1);
    expect(component.filteredJobs[0].title).toBe('Angular Developer');
  });
});
