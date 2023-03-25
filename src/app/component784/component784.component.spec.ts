import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component784Component } from './component784.component';

describe('Component784Component', () => {
  let component: Component784Component;
  let fixture: ComponentFixture<Component784Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component784Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
