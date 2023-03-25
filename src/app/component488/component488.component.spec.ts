import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component488Component } from './component488.component';

describe('Component488Component', () => {
  let component: Component488Component;
  let fixture: ComponentFixture<Component488Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component488Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
