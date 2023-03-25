import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component643Component } from './component643.component';

describe('Component643Component', () => {
  let component: Component643Component;
  let fixture: ComponentFixture<Component643Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component643Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
