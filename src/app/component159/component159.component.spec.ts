import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component159Component } from './component159.component';

describe('Component159Component', () => {
  let component: Component159Component;
  let fixture: ComponentFixture<Component159Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component159Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
