import { Component,OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './dynamic/dynamic.component';
import { BreadCrumpCompComponent } from './bread-crump-comp/bread-crump-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, BreadcrumbModule, RouterModule, CommonModule, DynamicComponent, BreadCrumpCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', route: '/installation' }, 
      { label: 'Components' }, { label: 'Form' }, 
      { label: 'InputText', route: '/inputtext' },
      { label: 'InputText', route: '/inputtext' },
      { label: 'InputText', route: '/inputtext' }
    ];
  }
}