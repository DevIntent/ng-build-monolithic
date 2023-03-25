import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component148Component } from './component148.component';

describe('Component148Component', () => {
  let component: Component148Component;
  let fixture: ComponentFixture<Component148Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component148Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
