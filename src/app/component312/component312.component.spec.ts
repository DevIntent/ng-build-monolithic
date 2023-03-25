import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component312Component } from './component312.component';

describe('Component312Component', () => {
  let component: Component312Component;
  let fixture: ComponentFixture<Component312Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component312Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
