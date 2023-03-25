import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component959Component } from './component959.component';

describe('Component959Component', () => {
  let component: Component959Component;
  let fixture: ComponentFixture<Component959Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component959Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
