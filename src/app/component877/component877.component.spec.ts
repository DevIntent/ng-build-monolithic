import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component877Component } from './component877.component';

describe('Component877Component', () => {
  let component: Component877Component;
  let fixture: ComponentFixture<Component877Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component877Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component877Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
