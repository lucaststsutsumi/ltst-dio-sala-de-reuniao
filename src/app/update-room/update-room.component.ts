import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  id: number;
  room: Room = new Room();
  submitted = false;

  constructor(private roomService: RoomService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.room = new Room();
    this.id = this.route.snapshot.params.id;
    this.roomService.getRoom(this.id).subscribe(data => {
      this.room = data;
      console.log(data);

    }, (error) => console.log);
  }

  newRoom(): void {
    this.submitted = false;
    this.room = new Room();
  }

  updateRoom(): void {
    this.roomService.updateRoom(this.id, this.room)
      .subscribe(data => {
        console.log(data)
        this.room = new Room();
        this.goToList();

      }, (error) => console.log);

    this.room = new Room();
    this.goToList();
  }

  goToList(): void {
    this.router.navigate(['/rooms']);
  }

  onSubmit(): void {
    this.submitted = true;
    this.updateRoom();
  }
}
