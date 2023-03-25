import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component592Component } from './component592.component';

describe('Component592Component', () => {
  let component: Component592Component;
  let fixture: ComponentFixture<Component592Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component592Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
