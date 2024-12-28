import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  imports:[IonicModule],
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss'],

})
export class FooterComponentComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
