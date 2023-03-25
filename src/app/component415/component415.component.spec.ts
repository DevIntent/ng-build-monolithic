import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component415Component } from './component415.component';

describe('Component415Component', () => {
  let component: Component415Component;
  let fixture: ComponentFixture<Component415Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component415Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component415Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
