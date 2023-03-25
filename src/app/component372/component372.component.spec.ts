import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component372Component } from './component372.component';

describe('Component372Component', () => {
  let component: Component372Component;
  let fixture: ComponentFixture<Component372Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component372Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
