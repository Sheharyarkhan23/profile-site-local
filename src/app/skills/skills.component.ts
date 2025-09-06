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
      name: 'Frontend Development',
      skills: [
        'Angular: Expert in building dynamic, responsive web applications. Proficient with Angular Material, custom component development, and integrating libraries like CKEditor and Full Calendar.',
        'Core Web Technologies: Strong command of HTML, CSS, and TypeScript.'
      ]
    },
    {
      name: 'Backend Development',
      skills: [
        '.NET Framework/Core: Extensive experience developing robust RESTful APIs. Skilled in both Code-First and Database-First approaches with Entity Framework.',
        'ABP Framework: Specialized in building multi-tenant, permission-based applications using ABP\'s Code-First architecture.'
      ]
    },
    {
      name: 'Databases',
      skills: [
        'Microsoft SQL Server: Proficient in writing and optimizing complex stored procedures, functions, and views to ensure data integrity and performance.'
      ]
    },
    {
      name: 'DevOps & Version Control',
      skills: [
        'Azure DevOps: Experienced in managing CI/CD pipelines for automated builds and deployments, and tracking sprint efforts.',
        'Git & GitHub: Adept at modern version control workflows, including branching, merging, and conflict resolution.'
      ]
    },
    {
      name: 'Software Architecture & Principles',
      skills: [
        'Architectural Patterns: Deep understanding of Clean Architecture.',
        'Core Principles: Committed to writing maintainable code following DRY and SOLID principles.',
        'Problem Solving: Strong skills in Data Structures & Algorithms (DSA), OOP, threading, and exception handling.'
      ]
    }
  ];
}
