import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMoviesBarComponent } from './new-movies-bar.component';

describe('NewMoviesBarComponent', () => {
  let component: NewMoviesBarComponent;
  let fixture: ComponentFixture<NewMoviesBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMoviesBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMoviesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
