import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component969Component } from './component969.component';

describe('Component969Component', () => {
  let component: Component969Component;
  let fixture: ComponentFixture<Component969Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component969Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component969Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
