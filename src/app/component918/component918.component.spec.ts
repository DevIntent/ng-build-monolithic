import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component918Component } from './component918.component';

describe('Component918Component', () => {
  let component: Component918Component;
  let fixture: ComponentFixture<Component918Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component918Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
