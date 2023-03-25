import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component177Component } from './component177.component';

describe('Component177Component', () => {
  let component: Component177Component;
  let fixture: ComponentFixture<Component177Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component177Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
