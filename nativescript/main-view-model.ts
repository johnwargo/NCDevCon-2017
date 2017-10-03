import { Observable } from 'data/observable';
import * as platformModule from "tns-core-modules/platform";

export class HelloWorldModel extends Observable {

    constructor() {
        super();
        //Create my deviceInfo array
        var deviceInfo: any = [];
        //Populate it with device data
        deviceInfo.push({ key: "Model", val: platformModule.device.model });
        deviceInfo.push({ key: "Type", val: platformModule.device.deviceType });
        deviceInfo.push({ key: "Operating System", val: platformModule.device.os });
        deviceInfo.push({ key: "OS Version", val: platformModule.device.osVersion });
        deviceInfo.push({ key: "SDK version", val: platformModule.device.sdkVersion });
        deviceInfo.push({ key: "Screen: Width", val: platformModule.screen.mainScreen.widthPixels });
        deviceInfo.push({ key: "Screen: Height", val: platformModule.screen.mainScreen.heightPixels });
        deviceInfo.push({ key: "Screen: Scale", val: platformModule.screen.mainScreen.scale });
        //Assign the deviceInfo data to the observable
        this.set('deviceInfo', deviceInfo);
    }

}