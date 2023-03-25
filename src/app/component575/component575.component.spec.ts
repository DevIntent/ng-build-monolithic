import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component575Component } from './component575.component';

describe('Component575Component', () => {
  let component: Component575Component;
  let fixture: ComponentFixture<Component575Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component575Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
