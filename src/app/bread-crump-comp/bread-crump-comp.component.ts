import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterLink } from '@angular/router';
import { BreadcrumbService,Breadcrumb } from '../breadcrumb.service';

@Component({
  selector: 'app-bread-crump-comp',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './bread-crump-comp.component.html',
  styleUrl: './bread-crump-comp.component.css'
})
export class BreadCrumpCompComponent implements OnInit{
  breadcrumbs: Breadcrumb[] = [];

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbs.subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
    });
  }
}
