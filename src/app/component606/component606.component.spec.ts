import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component606Component } from './component606.component';

describe('Component606Component', () => {
  let component: Component606Component;
  let fixture: ComponentFixture<Component606Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component606Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
