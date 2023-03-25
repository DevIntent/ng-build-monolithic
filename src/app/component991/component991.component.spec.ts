import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component991Component } from './component991.component';

describe('Component991Component', () => {
  let component: Component991Component;
  let fixture: ComponentFixture<Component991Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component991Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
