import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component471Component } from './component471.component';

describe('Component471Component', () => {
  let component: Component471Component;
  let fixture: ComponentFixture<Component471Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component471Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
