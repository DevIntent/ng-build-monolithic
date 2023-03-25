import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component862Component } from './component862.component';

describe('Component862Component', () => {
  let component: Component862Component;
  let fixture: ComponentFixture<Component862Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component862Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
