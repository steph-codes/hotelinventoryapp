import { Component, Input, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms : Room  = {

    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }

  roomList : RoomList[] = []

  ngOnInit(): void {

    this.roomList = [
      {
        roomNumber: 23,
        roomType : 'Deluxe Room',
        amenities: 'Air Conditioner, Free WIFI, TV, Bathroom, Kitchen',
        price: 1000,
        photos: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        checkinTime: new Date ('29-Dec-2022'),
        checkoutTime: new Date ('30-Dec-2022'),
        rating: 4.5
      },
      {
        roomNumber: 1,
        roomType : 'Private Suite',
        amenities: 'Air Conditioner, Free WIFI, TV, Bathroom, Kitchen',
        price: 1500,
        photos: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        checkinTime: new Date ('29-Dec-2022'),
        checkoutTime: new Date ('30-Dec-2022'),
        rating: 4.9
      },
      {
        roomNumber: 2,
        roomType : 'Executive Suite',
        amenities: 'Air Conditioner, Free WIFI, TV, Bathroom, Kitchen',
        price: 1500,
        photos: 'https://images.unsplash.com/photo-1621293954908-907159247fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        checkinTime: new Date ('29-Dec-2022'),
        checkoutTime: new Date ('30-Dec-2022'),
        rating: 3.7
      }
    ];
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList){
    this.selectedRoom = room;
  }
}
