import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly storageKey = 'jobBoardLoggedIn';
  private loggedIn = this.readLoginState();

  login(email: string, password: string): boolean {
    const validEmail = 'trainee@example.com';
    const validPassword = 'Angular123';

    const isValid = email.trim().toLowerCase() === validEmail && password === validPassword;

    if (isValid) {
      this.loggedIn = true;
      this.saveLoginState(true);
      return true;
    }

    return false;
  }

  logout(): void {
    this.loggedIn = false;
    this.clearLoginState();
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  private readLoginState(): boolean {
    try {
      return localStorage.getItem(this.storageKey) === 'true';
    } catch {
      return false;
    }
  }

  private saveLoginState(value: boolean): void {
    try {
      localStorage.setItem(this.storageKey, String(value));
    } catch {
      // Ignore localStorage write failures in this mock assignment.
    }
  }

  private clearLoginState(): void {
    try {
      localStorage.removeItem(this.storageKey);
    } catch {
      // Ignore localStorage delete failures in this mock assignment.
    }
  }
}
