import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>hello world from inline template</h1>
  //         <p>Angular is Awesome</p>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'hotelinventoryapp';

  role = 'Admin';
  @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    //access a variale from component
    componentRef.instance.numberOfRooms = 50;
  }
}



