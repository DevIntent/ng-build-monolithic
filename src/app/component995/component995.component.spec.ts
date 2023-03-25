import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component995Component } from './component995.component';

describe('Component995Component', () => {
  let component: Component995Component;
  let fixture: ComponentFixture<Component995Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component995Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
