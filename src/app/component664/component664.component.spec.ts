import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component664Component } from './component664.component';

describe('Component664Component', () => {
  let component: Component664Component;
  let fixture: ComponentFixture<Component664Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component664Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
