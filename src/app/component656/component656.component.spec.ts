import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component656Component } from './component656.component';

describe('Component656Component', () => {
  let component: Component656Component;
  let fixture: ComponentFixture<Component656Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component656Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component656Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
