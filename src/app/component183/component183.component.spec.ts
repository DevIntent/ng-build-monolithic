import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component183Component } from './component183.component';

describe('Component183Component', () => {
  let component: Component183Component;
  let fixture: ComponentFixture<Component183Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component183Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
