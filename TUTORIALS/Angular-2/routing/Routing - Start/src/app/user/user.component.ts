import { Component, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription} from 'rxjs/Rx';
@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <button (click)="onNavigate()">Go Home</button>
      <hr>
      {{id}}
      <router-outlet></router-outlet>
    `
    // Directives:[ROUTER_DIRECTIVES]
})
export class UserComponent implements OnDestroy {
	private subscription : Subscription;
	id: string;
	//this is how we can extract query parameters
	constructor(private router:Router, private activatedRoute:ActivatedRoute){
		this.subscription = activatedRoute.params.subscribe(
			(param:any) => this.id = param['id']
		)	
	}

	onNavigate(){
		this.router.navigate(['/'], {queryParams:{'analytics':100}});
	}
	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
}
