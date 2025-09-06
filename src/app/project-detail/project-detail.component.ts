import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;

  projects: Project[] = [
    {
      id: 1,
      category: 'DATA ANALYSIS & MACHINE LEARNING',
      title: 'WhatsApp Chat Analysis',
      description: 'A tool to analyze WhatsApp chat history to detect communication patterns and identify positive or negative sentiment among participants.',
      image: 'https://via.placeholder.com/400x300.png/2d2d2d/ffffff?text=Project+1',
      bannerImage: 'https://via.placeholder.com/1200x400.png/2d2d2d/ffffff?text=WhatsApp+Analysis'
    },
    {
      id: 2,
      category: 'COMPUTER VISION',
      title: 'Smart Parking System',
      description: 'A computer vision-based project that detects available parking spaces and records vehicle entry and exit times.',
      image: 'https://via.placeholder.com/400x300.png/2d2d2d/ffffff?text=Project+2',
      bannerImage: 'https://via.placeholder.com/1200x400.png/2d2d2d/ffffff?text=Parking+System'
    },
    {
      id: 3,
      category: 'WEB DEVELOPMENT',
      title: 'Car Rental System',
      description: `
        <div class="feature-summary">
    <h2>Dubai Car Rental Management System - Complete Admin Dashboard</h2>
    
    <div class="feature-section">
        <h3>1. Live Fleet Management & Tracking</h3>
        <ul>
            <li><strong>Real-Time Status Overview:</strong> Instantly see every vehicle in your fleet, with clear indicators for Available, On Lease, Under Maintenance, or Cleaning.</li>
            <li><strong>Detailed Vehicle Profiles:</strong> Access all details for each car (make, model, VIN, registration, insurance) in one central location.</li>
        </ul>
    </div>
    
    <div class="feature-section">
        <h3>2. Financial Performance & Yield Analytics</h3>
        <ul>
            <li><strong>Per-Car Profitability Reports:</strong> Track exactly how much revenue each vehicle generates against its operational costs.</li>
            <li><strong>Data-Driven Decisions:</strong> Identify your highest and lowest-yielding cars to optimize your fleet composition and pricing strategy for maximum ROI.</li>
        </ul>
    </div>
    
    <div class="feature-section">
        <h3>3. Integrated Task Management System</h3>
        <ul>
         </ul>
         </div>`,
      image: 'https://i.ibb.co/bR8M6mnV/fleetmanagmentsystem.png',
      bannerImage: 'https://i.ibb.co/bR8M6mnV/fleetmanagmentsystem.png'
    },
    {
      id: 4,
      category: 'COMPUTER VISION & HR',
      title: 'Attendance Management System',
      description: 'A system that uses person detection to automate employee attendance tracking.',
      image: 'https://via.placeholder.com/400x300.png/2d2d2d/ffffff?text=Project+4',
      bannerImage: 'https://via.placeholder.com/1200x400.png/2d2d2d/ffffff?text=Attendance+System'
    },
    {
      id: 5,
      category: 'HEALTHCARE IT',
      title: 'EHR Systems',
      description: 'Worked on two major Electronic Health Record (EHR) systems: Alfamd and 11x by CureMD.',
      image: 'https://via.placeholder.com/400x300.png/2d2d2d/ffffff?text=Project+5',
      bannerImage: 'https://via.placeholder.com/1200x400.png/2d2d2d/ffffff?text=EHR+Systems'
    },
    {
      id: 6,
      category: 'DESKTOP & SECURITY',
      title: 'Folder Lock System',
      description: 'A desktop application to secure and encrypt personal folders and files.',
      image: 'https://via.placeholder.com/400x300.png/2d2d2d/ffffff?text=Project+6',
      bannerImage: 'https://via.placeholder.com/1200x400.png/2d2d2d/ffffff?text=Folder+Lock'
    }
  ];

  constructor(private route: ActivatedRoute, private location: Location) { }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.project = this.projects.find(p => p.id === +projectId);
    }
  }
}

