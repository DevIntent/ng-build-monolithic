import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component402Component } from './component402.component';

describe('Component402Component', () => {
  let component: Component402Component;
  let fixture: ComponentFixture<Component402Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component402Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
