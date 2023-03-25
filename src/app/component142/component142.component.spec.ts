import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component142Component } from './component142.component';

describe('Component142Component', () => {
  let component: Component142Component;
  let fixture: ComponentFixture<Component142Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component142Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
