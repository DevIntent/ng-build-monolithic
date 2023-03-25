import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component262Component } from './component262.component';

describe('Component262Component', () => {
  let component: Component262Component;
  let fixture: ComponentFixture<Component262Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component262Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
