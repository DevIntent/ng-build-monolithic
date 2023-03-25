import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component885Component } from './component885.component';

describe('Component885Component', () => {
  let component: Component885Component;
  let fixture: ComponentFixture<Component885Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component885Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
