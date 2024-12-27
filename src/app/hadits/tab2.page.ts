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
   hadites: any = [];    
   isLoading = false;
   searchControl = new FormControl("");
  id!:string;
  categoryName:any = "";
  constructor(private router:ActivatedRoute,private haditService: HaditServiceService) {}
  ngOnInit(){
    const id = this.router.snapshot.paramMap.get('id');
    if(id!==null){
      this.id = id;
    }
    this.fetchHadites();
    this.getCategory(this.id);

    this.searchControl.valueChanges.subscribe((value) => {
      console.log(value);
      // this.isLoading = true;
      // this.haditeseService.searchHadites(value)
      // .subscribe((data: any)=>{
      //   this.Hadites = data.data;
      //   this.isLoading = false;
      // });
      this.searchHadit(value);
    });

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
    }
    this.haditService.getCategoryById(id).subscribe((data:any)=>{
      this.categoryName = data.data.name;
    })
    return
  }
  fetchHadites()
  {
    if(this.id ==="0"){
      this.haditService.getAllHadites()
        .subscribe((data:any)=>{
          this.hadites = data.data;
        },
        (error:any)=>{
          console.log("error",error)
        });

    }else{
      this.haditService.getHaditesByCategory(this.id)
        .subscribe((data:any)=>{
          this.hadites = data.data;
          console.log("this data is full",data.data)
        },
        (error:any)=>{
          console.log("error",error)
        });
        console.log("but this is empty ",this.hadites)
    }
  }
}
