import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component845Component } from './component845.component';

describe('Component845Component', () => {
  let component: Component845Component;
  let fixture: ComponentFixture<Component845Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component845Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
