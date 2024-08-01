import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaPrincipiosComponent } from './yoga-principios.component';

describe('YogaPrincipiosComponent', () => {
  let component: YogaPrincipiosComponent;
  let fixture: ComponentFixture<YogaPrincipiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YogaPrincipiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YogaPrincipiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
