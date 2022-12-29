import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  @Input() rooms: RoomList[] = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnInit(): void {

  }

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }
}
