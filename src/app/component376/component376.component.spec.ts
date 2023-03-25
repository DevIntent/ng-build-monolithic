import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component376Component } from './component376.component';

describe('Component376Component', () => {
  let component: Component376Component;
  let fixture: ComponentFixture<Component376Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component376Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
