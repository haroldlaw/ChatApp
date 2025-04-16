import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ChatService } from './../../services/chat/chat.service';

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
  users: Observable<any[]>
  chatRooms = [
    { id: 1, name: 'Darren', photo: 'https://i.pravatar.cc/300' },
    { id: 2, name: 'Sam', photo: 'https://i.pravatar.cc/305' }
  ]

  constructor(private router: Router,
    private chatService: ChatService
  ) { }

  ngOnInit() {
  }

  async logout() {
    try {
      console.log('logout');
      this.popover.dismiss();
      await this.chatService.auth.logout();
      this.router.navigateByUrl('/login', {replaceUrl: true});
    } catch(e) {
      console.log(e);
    }
  }

  onSegmentChanged(event: any) {
    console.log(event)
  }

  newChat() {
    this.open_new_chat = true
    if(!this.users) this.getUsers()
  }

  getUsers() {
    this.chatService.getUsers()
    this.users = this.chatService.users
  }

  onWillDismiss(event: any) {

  }

  cancel() {
    this.modal.dismiss();
    this.open_new_chat = false;
  }

  startChat(item) {

  }

  getChat(item){
    this.router.navigate(['/', 'home', 'chats', item?.id])
  }
}
