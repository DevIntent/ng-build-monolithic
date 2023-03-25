import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component997Component } from './component997.component';

describe('Component997Component', () => {
  let component: Component997Component;
  let fixture: ComponentFixture<Component997Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component997Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
