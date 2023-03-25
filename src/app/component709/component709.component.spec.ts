import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component709Component } from './component709.component';

describe('Component709Component', () => {
  let component: Component709Component;
  let fixture: ComponentFixture<Component709Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component709Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
