import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component167Component } from './component167.component';

describe('Component167Component', () => {
  let component: Component167Component;
  let fixture: ComponentFixture<Component167Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component167Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
