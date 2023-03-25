import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component622Component } from './component622.component';

describe('Component622Component', () => {
  let component: Component622Component;
  let fixture: ComponentFixture<Component622Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component622Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
