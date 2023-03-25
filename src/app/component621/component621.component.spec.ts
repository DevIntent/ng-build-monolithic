import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component621Component } from './component621.component';

describe('Component621Component', () => {
  let component: Component621Component;
  let fixture: ComponentFixture<Component621Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component621Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component621Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
