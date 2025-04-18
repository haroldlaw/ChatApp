import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input() item: any
  @Output() onClick: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() { }

  redirect(){
    this.onClick.emit(this.item)
  }

}
