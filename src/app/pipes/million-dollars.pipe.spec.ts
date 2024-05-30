import { TestBed, async } from '@angular/core/testing';
import { MillionDollarsPipe } from './million-dollars.pipe';

describe('MillionDollarsPipe', () => {
  let pipe: MillionDollarsPipe;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MillionDollarsPipe]
    }).compileComponents();
  });

  beforeEach(() => {
    pipe = new MillionDollarsPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "100" to "$100 million"', () => {
    const transformedValue = pipe.transform('100');
    expect(transformedValue).toEqual('$100 million');
  });


});
