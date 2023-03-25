import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component55Component } from './component55.component';

describe('Component55Component', () => {
  let component: Component55Component;
  let fixture: ComponentFixture<Component55Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component55Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
