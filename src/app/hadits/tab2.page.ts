import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HaditServiceService } from 'src/services/ClientService.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
   hadites: any[] = [];   
   favorites: number[]=[]; 
   isLoading = false;
   searchControl = new FormControl("");
  id!:string;
  categoryName:any = "";
  constructor(private router:ActivatedRoute,private haditService: HaditServiceService) {}

  loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    this.favorites = favorites;

    this.hadites.forEach((item: any) => {
      // console.log(favorites.some((fav: any) => fav.id === item.id))
      item.isFavorite = favorites.some((fav: any) => fav.id === item.id);
    });

  }

  onHeartClick(item:any) {
    item.isFavorite = !item.isFavorite;
    this.updateFavorites(item);
  }
  
  updateFavorites(item: any) {
    let favoritesList = JSON.parse(localStorage.getItem('favorites')|| '[]');    
    if (item.isFavorite) {
      if (!favoritesList.some((fav: any) => fav.id === item.id)) {
        favoritesList.push(item);
      }
    } else {
      favoritesList = favoritesList.filter((fav: any) => fav.id !== item.id);
    }
    localStorage.setItem('favorites', JSON.stringify(favoritesList));
  }
  ngOnInit(){
    const id = this.router.snapshot.paramMap.get('id');
    if(id!==null){
      this.id = id;
    }
    this.fetchHadites();
    this.getCategory(this.id);

    this.searchControl.valueChanges.subscribe((value) => {
      this.searchHadit(value);
    });
    this.loadFavorites();
  }
  searchHadit(value: any){
    console.log("Search Applied");
    this.isLoading = true;
    this.haditService.searchHadites(value)
    .subscribe((data: any)=>{
      this.hadites = data.data;
      this.isLoading = false;
    });
  }
  getCategory(id: any){
    if(id === "0"){
      this.categoryName = "كل الأحاديث";
    }else{
      this.haditService.getCategoryById(id).subscribe((data:any)=>{
        this.categoryName = data?.data?.name;
      })
    }
    return
  }
  fetchHadites()
  {
    if(this.id ==="0"){
      this.haditService.getAllHadites()
        .subscribe((data:any)=>{
          this.hadites = data.data;
          
          this.loadFavorites();
        });

    }else{
      this.haditService.getHaditesByCategory(this.id)
        .subscribe((data:any)=>{
          this.hadites = data.data;
          this.loadFavorites();
        });
    }
  }
}
