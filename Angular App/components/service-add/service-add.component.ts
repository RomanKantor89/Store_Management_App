import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../dataServices/services.service';
import { Service } from '../../classes/service';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {

  newService: Service;

  constructor(private m: ServicesService) {
    this.newService = new Service();
    this.newService.name = '';
    this.newService.serviceDescription = '';

  }

  ngOnInit() {
  }

  onSubmit(): void {

    this.m.addService(this.newService).subscribe(
      msg => {
        console.log(msg);
      },
      err => {
        console.log('add service failed');
      }
    );
  }

}

