import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component181Component } from './component181.component';

describe('Component181Component', () => {
  let component: Component181Component;
  let fixture: ComponentFixture<Component181Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component181Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
