import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component165Component } from './component165.component';

describe('Component165Component', () => {
  let component: Component165Component;
  let fixture: ComponentFixture<Component165Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component165Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
