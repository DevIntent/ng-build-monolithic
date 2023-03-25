import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component729Component } from './component729.component';

describe('Component729Component', () => {
  let component: Component729Component;
  let fixture: ComponentFixture<Component729Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component729Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
