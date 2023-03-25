import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component532Component } from './component532.component';

describe('Component532Component', () => {
  let component: Component532Component;
  let fixture: ComponentFixture<Component532Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component532Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
