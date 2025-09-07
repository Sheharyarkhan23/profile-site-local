import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/projectService';
@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private router: Router) { }
  ngOnInit(): void {
    const projectId = Number(this.route.snapshot.paramMap.get('id'));
    this.project = this.projectService.projects.find(p => p.id === projectId);
  }
  goBack(): void {
    this.router.navigate(['/projects']);
  }

}

