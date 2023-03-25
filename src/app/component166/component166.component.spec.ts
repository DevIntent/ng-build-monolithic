import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component166Component } from './component166.component';

describe('Component166Component', () => {
  let component: Component166Component;
  let fixture: ComponentFixture<Component166Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component166Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
