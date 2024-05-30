import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../Services/movie.service';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterComponent, FormsModule],
      providers : [MovieService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial titleInput and yearInput as null', () => {
    expect(component.titleInput).toBe('');
    expect(component.yearInput).toBeNull();
  });

  it('should emit filterChange event with updated values when onChanges is called', () => {
    spyOn(component.filterChange, 'emit');

    component.titleInput = 'Fantastic Beasts: The Crimes of Grindelwald';
    component.yearInput = 2008;

    component.onChanges();

    expect(component.filterChange.emit).toHaveBeenCalledWith({
      titleInput: 'Fantastic Beasts: The Crimes of Grindelwald',
      yearInput: 2008
    });
  });

});
