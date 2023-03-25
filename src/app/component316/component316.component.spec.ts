import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component316Component } from './component316.component';

describe('Component316Component', () => {
  let component: Component316Component;
  let fixture: ComponentFixture<Component316Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component316Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
