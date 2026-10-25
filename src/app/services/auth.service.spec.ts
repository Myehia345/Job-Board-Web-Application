import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('logs in with valid credentials', () => {
    const result = service.login('trainee@example.com', 'Angular123');

    expect(result).toBe(true);
    expect(service.isLoggedIn()).toBe(true);
    expect(localStorage.getItem('jobBoardLoggedIn')).toBe('true');
  });

  it('rejects invalid credentials', () => {
    const result = service.login('wrong@example.com', 'wrong');

    expect(result).toBe(false);
    expect(service.isLoggedIn()).toBe(false);
    expect(localStorage.getItem('jobBoardLoggedIn')).toBeNull();
  });
});
