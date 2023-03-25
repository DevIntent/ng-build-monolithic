import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component206Component } from './component206.component';

describe('Component206Component', () => {
  let component: Component206Component;
  let fixture: ComponentFixture<Component206Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component206Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
