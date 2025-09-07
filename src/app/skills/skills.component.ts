import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillCategories = [
    {
      name :'Team Lead',
      skills : [
        'Team Management: Proficient in leading and managing a team of developers, ensuring they are working efficiently and meeting deadlines.',
        'Communication: Proficient in communicating with team members, stakeholders, and clients to ensure clear understanding of requirements and progress.',
        'Time Management: Proficient in managing time effectively to ensure projects are completed on time.',
        'Team Building: Proficient in building and maintaining a positive team environment, including fostering collaboration and teamwork.',
      ],
    },
    {
      name: 'Frontend Development (Angular,React)',
      skills: [
        'Angular: Expert in building dynamic, responsive web applications. Proficient with Angular Material, custom component development, and integrating libraries like CKEditor and Full Calendar.',
        'Core Web Technologies: Strong command of HTML, CSS, and TypeScript.',
        'Forms: Proficient in working on both Reactive as well as Template Driven forms.',
        'Routing: Proficient in using Angular Router for navigation and dynamic routing.',
        'StatMangement: Proficient in using Angular services for data fetching, rxjs, ngRx, signals, behaviour subject and subjects.',
        'Project Structure : Proficient in creating a well-structured Angular project with both Monoleth and Microfrontend architecture.',
      ]
    },
    {
      name: 'Backend Development (.NET,Python,Flask)',
      skills: [
        '.NET Framework/Core: Extensive experience developing robust RESTful APIs. Skilled in both Code-First and Database-First approaches with Entity Framework.',
        'ABP Framework: Specialized in building multi-tenant, permission-based applications using ABP\'s Code-First architecture.',
        'Middleware: Proficient in creating middleware for logging, authentication, and authorization.',
        'Security: Proficient in implementing security features such as JWT authentication, OAuth.'
      ]
    },
    {
      name: 'Databases (SQL Server,MySQL)',
      skills: [
        'Microsoft SQL Server: Proficient in writing and optimizing complex stored procedures, functions, and views to ensure data integrity and performance.'
      ]
    },
    {
      name: 'DevOps & Version Control(Azure DevOps, Git & GitHub)',
      skills: [
        'Azure DevOps: Experienced in managing CI/CD pipelines for automated builds and deployments, and tracking sprint efforts.',
        'Git & GitHub: Adept at modern version control workflows, including branching, merging, and conflict resolution.'
      ]
    },
    {
      name: 'Software Architecture & Principles(Clean Architecture, SOLID Principles, DRY, OOP, threading, exception handling)',
      skills: [
        'Architectural Patterns: Deep understanding of Clean Architecture.',
        'Core Principles: Committed to writing maintainable code following DRY and SOLID principles.',
        'Problem Solving: Strong skills in Data Structures & Algorithms (DSA), OOP, threading, and exception handling.'
      ]
    }
  ];
}
