import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component203Component } from './component203.component';

describe('Component203Component', () => {
  let component: Component203Component;
  let fixture: ComponentFixture<Component203Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component203Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
