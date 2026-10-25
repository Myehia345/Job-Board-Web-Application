# Job Board App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.3.

## Build Command
```bash
npm run build
```
## Development Server
```bash
npm start
```
Then open `http://localhost:4200`.

## Test Command
```bash
npm test
```

## Mock Login Credentials
- Email: `trainee@example.com`
- Password: `Angular123`

This password is intentionally hard-coded for training only. Real applications must use secure backend authentication and must never hard-code credentials.

## Application Routes
- `/jobs` - Job list page
- `/jobs/:id` - Job details page
- `/jobs/:id/apply` - Job application page (guarded)
- `/login` - Login page
- `/` redirects to `/jobs`
- Unknown routes redirect to `/jobs`

## Project Structure
```text
src/app/
├── components/
│   └── navbar/
├── guards/
│   └── auth.guard.ts
├── models/
│   ├── job.model.ts
│   └── job-application.model.ts
├── pages/
│   ├── job-application/
│   ├── job-details/
│   ├── jobs-list/
│   └── login/
├── services/
│   ├── application.service.ts
│   ├── auth.service.ts
│   └── job.service.ts
├── app.config.ts
├── app.css
├── app.html
├── app.routes.ts
└── app.ts
```

## localStorage Keys
- `jobBoardLoggedIn`
	- Stores `"true"` when user logs in successfully.
	- Removed on logout.
- `jobBoardApplications`
	- Stores an array of submitted application objects.
	- Duplicate detection compares `jobId` and email (case-insensitive).

localStorage is used only as a mock persistence layer for this assignment and is not secure storage.

## Manual Testing Instructions
1. Open `/jobs` and confirm all 4 jobs are visible.
2. Search `Angular` and verify only Angular Developer remains.
3. Filter by `Frontend` and verify 2 jobs remain.
4. Open a job details page (for example `/jobs/1`).
5. Click `Apply` while logged out and confirm redirect to `/login`.
6. Test login form validation with empty fields.
7. Login with invalid credentials and confirm error message.
8. Login with `trainee@example.com / Angular123` and verify redirect to `/jobs`.
9. Refresh the page and confirm logged-in navigation state persists.
10. Open `/jobs/1/apply` and test form validation.
11. Submit a valid application and confirm success message.
12. Submit again with same job and same email (any letter case) and confirm duplicate message.
13. Submit for another job with same email and confirm it is allowed.
14. Logout and confirm login state is cleared but applications remain.