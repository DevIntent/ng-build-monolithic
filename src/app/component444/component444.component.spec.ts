import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component444Component } from './component444.component';

describe('Component444Component', () => {
  let component: Component444Component;
  let fixture: ComponentFixture<Component444Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component444Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
