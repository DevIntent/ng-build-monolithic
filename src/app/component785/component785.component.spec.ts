import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component785Component } from './component785.component';

describe('Component785Component', () => {
  let component: Component785Component;
  let fixture: ComponentFixture<Component785Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component785Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
