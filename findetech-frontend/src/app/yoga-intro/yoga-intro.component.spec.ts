import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaIntroComponent } from './yoga-intro.component';

describe('YogaIntroComponent', () => {
  let component: YogaIntroComponent;
  let fixture: ComponentFixture<YogaIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YogaIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YogaIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
