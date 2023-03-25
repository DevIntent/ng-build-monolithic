import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component687Component } from './component687.component';

describe('Component687Component', () => {
  let component: Component687Component;
  let fixture: ComponentFixture<Component687Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component687Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
