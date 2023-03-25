import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component393Component } from './component393.component';

describe('Component393Component', () => {
  let component: Component393Component;
  let fixture: ComponentFixture<Component393Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component393Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
