import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component337Component } from './component337.component';

describe('Component337Component', () => {
  let component: Component337Component;
  let fixture: ComponentFixture<Component337Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component337Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
