import { TestBed } from '@angular/core/testing';
import { MinutesToHoursPipe } from './minutes-to-hours.pipe';

describe('MinutesToHoursPipe', () => {
  let pipe: MinutesToHoursPipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinutesToHoursPipe]
    }).compileComponents();
  });

  beforeEach(() => {
    pipe = new MinutesToHoursPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "142" to "2h 22min"', () => {
    const transformedValue = pipe.transform('142');
    expect(transformedValue).toEqual('2h 22min');
  });
});
