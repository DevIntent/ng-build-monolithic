import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component314Component } from './component314.component';

describe('Component314Component', () => {
  let component: Component314Component;
  let fixture: ComponentFixture<Component314Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component314Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
