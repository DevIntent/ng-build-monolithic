import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component935Component } from './component935.component';

describe('Component935Component', () => {
  let component: Component935Component;
  let fixture: ComponentFixture<Component935Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component935Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
