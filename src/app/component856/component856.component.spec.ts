import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component856Component } from './component856.component';

describe('Component856Component', () => {
  let component: Component856Component;
  let fixture: ComponentFixture<Component856Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component856Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
