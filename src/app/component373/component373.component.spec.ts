import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component373Component } from './component373.component';

describe('Component373Component', () => {
  let component: Component373Component;
  let fixture: ComponentFixture<Component373Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component373Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
