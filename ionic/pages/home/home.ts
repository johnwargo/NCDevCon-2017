import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  deviceInfo: Array<any> = [];

  constructor(
    private device: Device,
    public nav: NavController
  ) { }

  ionViewDidLoad() {
    this.appendDeviceValue('Cordova', this.device.cordova);
    this.appendDeviceValue('Platform', this.device.platform);
    this.appendDeviceValue('version', this.device.version);
    this.appendDeviceValue('Model', this.device.model);
    this.appendDeviceValue('Manufacturer', this.device.manufacturer);
    this.appendDeviceValue('UUID', this.device.uuid);
    this.appendDeviceValue('Serial Number', this.device.serial);
    this.appendDeviceValue('Is Virtual', this.device.isVirtual ? 'True' : 'False');
  }

  appendDeviceValue(key: string, value: string) {
    this.deviceInfo.push({ "key": key, "value": value });
  }

  showAbout() {
    console.log('Opening About page');
    // this.nav.push(AboutPage, {}, { animate: true });
    this.nav.push(AboutPage);
  }

}
