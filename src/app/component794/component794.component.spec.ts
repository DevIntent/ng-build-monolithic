import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component794Component } from './component794.component';

describe('Component794Component', () => {
  let component: Component794Component;
  let fixture: ComponentFixture<Component794Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component794Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
