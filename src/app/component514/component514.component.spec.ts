import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component514Component } from './component514.component';

describe('Component514Component', () => {
  let component: Component514Component;
  let fixture: ComponentFixture<Component514Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component514Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
