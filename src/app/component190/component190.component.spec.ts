import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component190Component } from './component190.component';

describe('Component190Component', () => {
  let component: Component190Component;
  let fixture: ComponentFixture<Component190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component190Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
