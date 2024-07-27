import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreadcrumbService } from '../breadcrumb.service';


@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {
  }
}
