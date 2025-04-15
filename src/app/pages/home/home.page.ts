import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('new_chat') modal: ModalController
  @ViewChild('popover') popover: PopoverController
  segment = 'chats'
  open_new_chat = false
  users = [
    { id: 1, name: 'Darren', photo: 'https://i.pravatar.cc/300' },
    { id: 2, name: 'Sam', photo: 'https://i.pravatar.cc/305' }
  ]

  constructor() { }

  ngOnInit() {
  }

  logout() {
    this.popover.dismiss()
  }
  onSegmentChanged(event: any) {
    console.log(event)
  }


  newChat() {
    this.open_new_chat = true
  }

  onWillDismiss(event: any) {

  }

  cancel() {
    this.modal.dismiss();
    this.open_new_chat = false;
  }

  startChat(item) {

  }
}
