import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component57Component } from './component57.component';

describe('Component57Component', () => {
  let component: Component57Component;
  let fixture: ComponentFixture<Component57Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component57Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
