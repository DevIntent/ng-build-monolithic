import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component61Component } from './component61.component';

describe('Component61Component', () => {
  let component: Component61Component;
  let fixture: ComponentFixture<Component61Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component61Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
