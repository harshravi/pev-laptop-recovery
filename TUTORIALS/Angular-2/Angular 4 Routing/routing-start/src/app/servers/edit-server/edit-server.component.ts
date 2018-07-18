import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanCompoenentDeactivate } from './can-deactivate-guard.service'
import { Observable } from 'rxjs/Observable'


@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanCompoenentDeactivate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  qeryParemName: any;
  fragmentsName: string;
  allowEdit
  changesSaved = false;
  constructor(private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParam: Params) => {
        this.allowEdit = queryParam['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe(
      (fragments: string) => {
        this.fragmentsName = fragments;
      }
    );
    this.route.fragment.subscribe()
    console.log(this.route.snapshot.fragment);
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    console.log(this.qeryParemName, this.fragmentsName)
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?')
    } else {
      return true;
    }
  }
}
