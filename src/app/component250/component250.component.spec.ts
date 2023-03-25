import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component250Component } from './component250.component';

describe('Component250Component', () => {
  let component: Component250Component;
  let fixture: ComponentFixture<Component250Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component250Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
