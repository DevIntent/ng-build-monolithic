import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component321Component } from './component321.component';

describe('Component321Component', () => {
  let component: Component321Component;
  let fixture: ComponentFixture<Component321Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component321Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
