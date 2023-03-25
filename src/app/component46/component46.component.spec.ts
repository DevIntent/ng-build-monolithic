import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component46Component } from './component46.component';

describe('Component46Component', () => {
  let component: Component46Component;
  let fixture: ComponentFixture<Component46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component46Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
