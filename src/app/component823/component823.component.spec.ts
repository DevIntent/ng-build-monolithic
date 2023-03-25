import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component823Component } from './component823.component';

describe('Component823Component', () => {
  let component: Component823Component;
  let fixture: ComponentFixture<Component823Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component823Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
