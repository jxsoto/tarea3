import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServCliComponent } from './serv-cli.component';

describe('ServCliComponent', () => {
  let component: ServCliComponent;
  let fixture: ComponentFixture<ServCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
