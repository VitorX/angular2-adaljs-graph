import { Component } from '@angular/core';
import { GraphService,User } from './graph.service';

@Component({
    selector: 'message',
    template: `<button (click)="getMe()">Get me</button>
       <div>{{me.displayName}}</div>`
})
export class GraphComponent {

    aa: string;
    me:User;
    constructor(private graphService: GraphService) {
         var user=new User();
         this.me=user;
 
    }

    getMe(){
          this.graphService.getMe().then(user=>{
              this.me=user;
          })
    }
}