import { Component, OnInit, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-empty-screen',
  templateUrl: './empty-screen.component.html',
  styleUrls: ['./empty-screen.component.scss'],
})
export class EmptyScreenComponent  implements OnInit {
  @Input() model: any

  constructor() { }

  ngOnInit() {}

}
