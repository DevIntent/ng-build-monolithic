import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component112Component } from './component112.component';

describe('Component112Component', () => {
  let component: Component112Component;
  let fixture: ComponentFixture<Component112Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component112Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
