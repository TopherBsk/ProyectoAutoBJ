import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {

  username: string;
  constructor(private router: Router,
    private activatedRouter: ActivatedRoute,
    private menu: MenuController,) {}

  ngOnInit() {
  }

}
