import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component270Component } from './component270.component';

describe('Component270Component', () => {
  let component: Component270Component;
  let fixture: ComponentFixture<Component270Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component270Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
