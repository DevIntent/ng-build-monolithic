import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component329Component } from './component329.component';

describe('Component329Component', () => {
  let component: Component329Component;
  let fixture: ComponentFixture<Component329Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component329Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
