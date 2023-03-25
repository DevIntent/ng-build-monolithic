import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component735Component } from './component735.component';

describe('Component735Component', () => {
  let component: Component735Component;
  let fixture: ComponentFixture<Component735Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component735Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
