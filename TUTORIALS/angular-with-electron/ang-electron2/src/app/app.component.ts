import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _electronservice: ElectronService){
  }
    launchWindow(){
      this._electronservice.shell.openExternal('https://orbdev.cfapps.io');
    }  
}
