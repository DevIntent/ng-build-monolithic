import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component324Component } from './component324.component';

describe('Component324Component', () => {
  let component: Component324Component;
  let fixture: ComponentFixture<Component324Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component324Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
