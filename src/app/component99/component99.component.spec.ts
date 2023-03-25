import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component99Component } from './component99.component';

describe('Component99Component', () => {
  let component: Component99Component;
  let fixture: ComponentFixture<Component99Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component99Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
