import { Component,OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports:[ReactiveFormsModule]
})
export class SearchComponent {

  @Input() searchControl: FormControl = new FormControl("");
  @Output() AssumeHardSearch: EventEmitter<string> = new EventEmitter<string>();

  triggerHardSearch(){
    this.AssumeHardSearch.emit(this.searchControl.value);
  }
}
