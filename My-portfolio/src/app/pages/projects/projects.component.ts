import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Resume Analyzer',
      description: 'AI-powered tool built with Angular & Node.js using Gemini API.',
      link: '#'
    },
    {
      title: 'E-commerce App',
      description: 'Mobile-first online store built with Angulr + TypeScript.',
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'This responsive portfolio is built with Angular 13+.',
      link: '#'
    }
  ];
  
  
}
