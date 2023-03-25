import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component243Component } from './component243.component';

describe('Component243Component', () => {
  let component: Component243Component;
  let fixture: ComponentFixture<Component243Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component243Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Component243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
