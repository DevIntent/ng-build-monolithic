import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component477Component } from './component477.component';

describe('Component477Component', () => {
  let component: Component477Component;
  let fixture: ComponentFixture<Component477Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component477Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
