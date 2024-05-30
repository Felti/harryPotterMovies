import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  titleInput: string | null = '';
  yearInput: number | null = null;

  @Output() filterChange: EventEmitter<{ titleInput: string | null, yearInput: number | null }> = new EventEmitter<{ titleInput: string | null, yearInput: number | null }>();
  constructor() { }

  onChanges() {
    this.filterChange.emit({ titleInput: this.titleInput, yearInput: this.yearInput })
  }

}
