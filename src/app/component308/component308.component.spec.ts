import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component308Component } from './component308.component';

describe('Component308Component', () => {
  let component: Component308Component;
  let fixture: ComponentFixture<Component308Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component308Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
