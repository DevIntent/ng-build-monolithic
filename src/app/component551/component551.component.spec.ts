import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component551Component } from './component551.component';

describe('Component551Component', () => {
  let component: Component551Component;
  let fixture: ComponentFixture<Component551Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component551Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
