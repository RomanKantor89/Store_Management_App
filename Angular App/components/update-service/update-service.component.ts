import { Component, OnInit } from '@angular/core';
import { Service } from '../../classes/service';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {
  service: Service;
  constructor() {
    this.service = new Service();
  }

  ngOnInit() {
  }

  serviceUpdate(): void {
    // Implement later
  }
}
