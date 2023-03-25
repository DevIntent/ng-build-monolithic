import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component388Component } from './component388.component';

describe('Component388Component', () => {
  let component: Component388Component;
  let fixture: ComponentFixture<Component388Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component388Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
