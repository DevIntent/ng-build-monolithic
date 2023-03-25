import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component982Component } from './component982.component';

describe('Component982Component', () => {
  let component: Component982Component;
  let fixture: ComponentFixture<Component982Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component982Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
