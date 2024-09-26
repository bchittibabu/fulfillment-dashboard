import { Component } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { SelectButtonModule } from 'primeng/selectbutton';

import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [TableModule, CommonModule, SelectButtonModule, FormsModule, InputTextModule],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss'
})
export class PatientsComponent {
  searchValue!: string;
  value!: number;
  patients = [
    {
      patientId: "646946444995",
      lastConnectionTime: "2024-03-05T12:30:00",
      lastSignalStrength: "-85 dBm",
      lastDeviceToConnect: "0025 - Cellular Scale",
      status: "Active"
    },
    {
      patientId: "846843350979",
      lastConnectionTime: "2022-01-13T07:53:00",
      lastSignalStrength: "-93 dBm",
      lastDeviceToConnect: "0022 - Bluetooth Scale",
      status: "Inactive"
    },
    {
      patientId: "193509128447",
      lastConnectionTime: "2024-03-05T12:30:00",
      lastSignalStrength: "--",
      lastDeviceToConnect: "0040 - Bluetooth BPM",
      status: "Active"
    },
    {
      patientId: "229595377084",
      lastConnectionTime: "2024-03-05T12:30:00",
      lastSignalStrength: "-72 dBm",
      lastDeviceToConnect: "0003 - Bluetooth Pulse Ox",
      status: "Active"
    },
    {
      patientId: "720544374585",
      lastConnectionTime: "2024-03-05T12:30:00",
      lastSignalStrength: "-81 dBm",
      lastDeviceToConnect: "0025 - Cellular Scale",
      status: "Active"
    },
    {
      patientId: "777873447896",
      lastConnectionTime: "2022-01-13T07:53:00",
      lastSignalStrength: "-99 dBm",
      lastDeviceToConnect: "0022 - Bluetooth Scale",
      status: "Inactive"
    },
    {
      patientId: "193522324796",
      lastConnectionTime: "2022-01-13T07:53:00",
      lastSignalStrength: "-110 dBm",
      lastDeviceToConnect: "0003 - Bluetooth Pulse Ox",
      status: "Inactive"
    },
    {
      patientId: "166465672621",
      lastConnectionTime: "2024-03-05T12:30:00",
      lastSignalStrength: "-77 dBm",
      lastDeviceToConnect: "0043 - Cellular BPM",
      status: "Active"
    },
    {
      patientId: "646946444995",
      lastConnectionTime: "2024-03-05T12:30:00",
      lastSignalStrength: "-85 dBm",
      lastDeviceToConnect: "0025 - Cellular Scale",
      status: "Active"
    },
    {
      patientId: "846843350979",
      lastConnectionTime: "2022-01-13T07:53:00",
      lastSignalStrength: "-93 dBm",
      lastDeviceToConnect: "0022 - Bluetooth Scale",
      status: "Inactive"
    },
    {
      patientId: "193509128447",
      lastConnectionTime: "2024-03-05T12:30:00",
      lastSignalStrength: "--",
      lastDeviceToConnect: "0040 - Bluetooth BPM",
      status: "Active"
    },
    {
      patientId: "229595377084",
      lastConnectionTime: "2024-03-05T12:30:00",
      lastSignalStrength: "-72 dBm",
      lastDeviceToConnect: "0003 - Bluetooth Pulse Ox",
      status: "Active"
    },
    {
      patientId: "720544374585",
      lastConnectionTime: "2024-03-05T12:30:00",
      lastSignalStrength: "-81 dBm",
      lastDeviceToConnect: "0025 - Cellular Scale",
      status: "Active"
    },
    {
      patientId: "777873447896",
      lastConnectionTime: "2022-01-13T07:53:00",
      lastSignalStrength: "-99 dBm",
      lastDeviceToConnect: "0022 - Bluetooth Scale",
      status: "Inactive"
    },
    {
      patientId: "193522324796",
      lastConnectionTime: "2022-01-13T07:53:00",
      lastSignalStrength: "-110 dBm",
      lastDeviceToConnect: "0003 - Bluetooth Pulse Ox",
      status: "Inactive"
    },
    {
      patientId: "166465672621",
      lastConnectionTime: "2024-03-05T12:30:00",
      lastSignalStrength: "-77 dBm",
      lastDeviceToConnect: "0043 - Cellular BPM",
      status: "Active"
    }
  ];
  options: any[] = [
    { name: 'All', value: 1 },
    { name: 'Active', value: 2 },
    { name: 'Inactive', value: 3 }
  ];
  constructor(private productService: ProductService) {}

  ngOnInit() {
      // this.productService.getProductsMini().then((data) => {
      //     this.products = data;
      // });
  }
}
