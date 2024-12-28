import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss'],
  imports:[IonicModule]
})
export class HeaderComponentComponent  implements OnInit {
@Input() Title ="";
  constructor() { }

  ngOnInit() {}

}
