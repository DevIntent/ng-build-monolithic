import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component466Component } from './component466.component';

describe('Component466Component', () => {
  let component: Component466Component;
  let fixture: ComponentFixture<Component466Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component466Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
