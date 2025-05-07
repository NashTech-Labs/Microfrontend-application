import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

export interface TenantRow {
  tenant_name: string;
  tenant_code: string;
  tenant_email: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
}