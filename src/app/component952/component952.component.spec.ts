import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component952Component } from './component952.component';

describe('Component952Component', () => {
  let component: Component952Component;
  let fixture: ComponentFixture<Component952Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component952Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
