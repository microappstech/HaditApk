import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HaditServiceService } from 'src/services/ClientService.service';
import { IonicModule } from '@ionic/angular';
import { SearchComponent } from "../../component/search/search.component";
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  imports: [IonicModule, SearchComponent]
})
export class FavoritesComponent  implements OnInit {   
   favoritesList: any[]=[]; 
   isLoading = false;
   searchControl = new FormControl("");
  constructor(private router:ActivatedRoute,private haditService: HaditServiceService) {}

  loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    this.favoritesList = favorites;
    console.log('Favorites:', favorites);
  }

  onHeartClick(item:any) {
    item.isFavorite = !item.isFavorite;
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites = favorites.filter((fav: any) => fav.id !== item.id);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    this.loadFavorites();  
  }
  ngOnInit(){
    this.loadFavorites();
  }
}
