import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component528Component } from './component528.component';

describe('Component528Component', () => {
  let component: Component528Component;
  let fixture: ComponentFixture<Component528Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component528Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
