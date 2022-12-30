import { ChangeDetectionStrategy,Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import {  RoomList } from '../rooms';


@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {

 @Input() title: string = '';

  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){
      //updates rendered value when new data is passed
      this.title = changes['title'].currentValue.toUppercase;
    }
  }

  ngOnInit(): void {

  }

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }
}
