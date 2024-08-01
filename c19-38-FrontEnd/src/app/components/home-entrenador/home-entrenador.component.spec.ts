import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEntrenadorComponent } from './home-entrenador.component';

describe('HomeEntrenadorComponent', () => {
  let component: HomeEntrenadorComponent;
  let fixture: ComponentFixture<HomeEntrenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeEntrenadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
