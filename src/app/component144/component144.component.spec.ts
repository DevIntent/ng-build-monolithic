import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component144Component } from './component144.component';

describe('Component144Component', () => {
  let component: Component144Component;
  let fixture: ComponentFixture<Component144Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component144Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
