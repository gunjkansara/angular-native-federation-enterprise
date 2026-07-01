# Angular Native Federation Enterprise Demo

Enterprise-grade Angular Micro Frontend application built using Angular 21 and Native Federation.

This project demonstrates how modern enterprise applications can be split into independently deployable Micro Frontends while maintaining a unified user experience.

---

## Project Overview

The application consists of:

```text
Host Shell
├── Remote Products
├── Remote Users
└── Remote Reports
```

The Host Shell dynamically loads remote applications using Angular Native Federation.

---

## Screenshots

### Login Screen

Enterprise authentication page with:

- Angular Material UI
- Role-based authentication
- Session persistence
- Professional responsive design

![Login Screen](docs/screenshots/login-page.png)

---

### Dashboard Overview

Enterprise dashboard demonstrating:

- Native Federation Host Shell
- Role Based Navigation
- Notification Center
- Theme Management
- Angular Signals State Management

![Dashboard Overview](docs/screenshots/dashboard-overview.png)

---

## Technology Stack

| Technology | Version |
|------------|----------|
| Angular | 21 |
| TypeScript | Latest |
| Angular Material | Latest |
| Native Federation | @angular-architects/native-federation |
| RxJS | Latest |
| Signals | Angular Signals |
| SCSS | Yes |

---

## Architecture

```text
Angular Native Federation Enterprise Demo

├── host-shell
│
├── remote-products
│
├── remote-users
│
└── remote-reports
```

Future Shared Libraries:

```text
shared-ui
shared-models
shared-utils
```

---

# Completed Phases

## Phase 1 - Native Federation Setup

### Features

- Host Shell Application
- Products Remote
- Users Remote
- Reports Remote
- Native Federation Configuration
- Lazy Loaded Micro Frontends
- Angular 21 Setup

### Status

✅ Completed

---

## Phase 2 - Enterprise Dashboard UI

### Features

- Enterprise Layout
- Responsive Sidebar
- Navbar
- Footer
- Dashboard Landing Page
- Angular Material Integration
- Professional Styling

### Status

✅ Completed

---

## Phase 3 - Authentication & Authorization

### Features

- Login Page
- Session Management
- Route Guards
- Role Based Access Control
- Access Denied Page
- Logout Functionality
- HTTP Interceptor Foundation
- Local Storage Session Persistence

### Roles

```text
ADMIN
MANAGER
USER
```

### Status

✅ Completed

---

## Phase 4 - Shared State Management

### Features

#### App State Service

Implemented centralized application state using Angular Signals.

Managed State:

- Current User
- Theme
- Notifications
- Loading State

#### Global Loading Indicator

- Shared Loading Component
- Layout Level Integration
- Signal Driven UI Updates

#### Notification Center

- Notification Model
- Notification Counter
- Navbar Integration

#### Theme Management

- Light Theme
- Dark Theme
- Theme Persistence
- Theme Service

### Status

✅ Completed

---

# Upcoming Phases

## Phase 5 - Micro Frontend Communication

Planned Features:

- Event Bus
- Cross MFE Communication
- Shared Contracts
- Remote To Remote Messaging
- Host To Remote Communication

Status:

🚀 In Progress

---

## Phase 6 - Shared Libraries

Planned Features:

```text
shared-ui
shared-models
shared-utils
```

Status:

⏳ Planned

---

## Phase 7 - API Integration

Planned Features:

- API Layer
- Repository Pattern
- Mock Backend
- Error Handling
- Global Notifications

Status:

⏳ Planned

---

## Phase 8 - Testing Strategy

Planned Features:

- Unit Testing
- Integration Testing
- Micro Frontend Testing

Status:

⏳ Planned

---

## Phase 9 - CI/CD Pipeline

Planned Features:

- GitHub Actions
- Automated Build
- Automated Deployment
- Quality Gates

Status:

⏳ Planned

---

## Local Development

### Start Host Shell

```bash
cd host-shell
npm install
npm start
```

### Start Products Remote

```bash
cd remote-products
npm install
npm start
```

### Start Users Remote

```bash
cd remote-users
npm install
npm start
```

### Start Reports Remote

```bash
cd remote-reports
npm install
npm start
```

---

## Learning Objectives

This project demonstrates:

- Angular 21
- Native Federation
- Micro Frontend Architecture
- Angular Signals
- Enterprise State Management
- Authentication & Authorization
- Shared Component Strategy
- Team Scalability
- Independent Deployments

---

## Future Enterprise Enhancements

- Nx Monorepo Migration
- Shared UI Libraries
- Independent Repository Strategy
- Kubernetes Deployment
- Azure DevOps Pipeline
- Distributed Tracing
- OpenTelemetry
- Feature Flags

---

## Author

Gunjan Kansara

Senior Frontend Engineer / Technical Lead
