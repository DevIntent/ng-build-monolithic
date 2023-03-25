import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component916Component } from './component916.component';

describe('Component916Component', () => {
  let component: Component916Component;
  let fixture: ComponentFixture<Component916Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component916Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
