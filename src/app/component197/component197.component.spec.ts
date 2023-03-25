import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component197Component } from './component197.component';

describe('Component197Component', () => {
  let component: Component197Component;
  let fixture: ComponentFixture<Component197Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component197Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
