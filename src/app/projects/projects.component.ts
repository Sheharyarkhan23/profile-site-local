import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
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
      description: 'A comprehensive car rental management system developed for a company in Dubai.',
      image: 'https://via.placeholder.com/400x300.png/2d2d2d/ffffff?text=Project+3',
      bannerImage: 'https://via.placeholder.com/1200x400.png/2d2d2d/ffffff?text=Car+Rental'
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
}