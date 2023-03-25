import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component591Component } from './component591.component';

describe('Component591Component', () => {
  let component: Component591Component;
  let fixture: ComponentFixture<Component591Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component591Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
