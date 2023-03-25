import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component721Component } from './component721.component';

describe('Component721Component', () => {
  let component: Component721Component;
  let fixture: ComponentFixture<Component721Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component721Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
