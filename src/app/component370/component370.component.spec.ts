import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component370Component } from './component370.component';

describe('Component370Component', () => {
  let component: Component370Component;
  let fixture: ComponentFixture<Component370Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component370Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component370Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
