import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component910Component } from './component910.component';

describe('Component910Component', () => {
  let component: Component910Component;
  let fixture: ComponentFixture<Component910Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component910Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
