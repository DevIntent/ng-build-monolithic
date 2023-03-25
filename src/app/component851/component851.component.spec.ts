import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component851Component } from './component851.component';

describe('Component851Component', () => {
  let component: Component851Component;
  let fixture: ComponentFixture<Component851Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component851Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
