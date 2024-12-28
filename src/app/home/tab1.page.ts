import { Component, OnInit } from '@angular/core';
import { HaditServiceService } from '../../services/ClientService.service';
import { HeaderComponentComponent } from 'src/component/header-component/header-component.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit{

  categories: any = [];
  constructor(private haditService: HaditServiceService) { }
  ngOnInit(): void {
    this.fetchCates();
    // console.log(this.categories);
  }
  
  fetchCates()
  {
    this.haditService.getCategories().subscribe((data: any)=>{
      this.categories = data.data;
    this.categories.unshift({id:0,name:"كل الأحاديث"});
    console.log(this.categories);
    });
  }
}
