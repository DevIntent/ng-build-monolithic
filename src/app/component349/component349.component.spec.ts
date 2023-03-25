import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component349Component } from './component349.component';

describe('Component349Component', () => {
  let component: Component349Component;
  let fixture: ComponentFixture<Component349Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component349Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
