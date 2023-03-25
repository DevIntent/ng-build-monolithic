import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component872Component } from './component872.component';

describe('Component872Component', () => {
  let component: Component872Component;
  let fixture: ComponentFixture<Component872Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component872Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
