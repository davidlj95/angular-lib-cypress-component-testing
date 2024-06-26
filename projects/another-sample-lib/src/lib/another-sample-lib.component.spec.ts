import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherSampleLibComponent } from './another-sample-lib.component';

describe('AnotherSampleLibComponent', () => {
  let component: AnotherSampleLibComponent;
  let fixture: ComponentFixture<AnotherSampleLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotherSampleLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnotherSampleLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
