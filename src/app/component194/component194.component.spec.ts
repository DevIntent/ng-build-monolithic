import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component194Component } from './component194.component';

describe('Component194Component', () => {
  let component: Component194Component;
  let fixture: ComponentFixture<Component194Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component194Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
