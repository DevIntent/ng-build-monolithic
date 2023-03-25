import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component390Component } from './component390.component';

describe('Component390Component', () => {
  let component: Component390Component;
  let fixture: ComponentFixture<Component390Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component390Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
