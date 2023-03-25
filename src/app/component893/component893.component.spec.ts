import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component893Component } from './component893.component';

describe('Component893Component', () => {
  let component: Component893Component;
  let fixture: ComponentFixture<Component893Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component893Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component893Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
