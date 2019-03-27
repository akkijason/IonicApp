import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPicturePage } from './user-picture.page';

describe('UserPicturePage', () => {
  let component: UserPicturePage;
  let fixture: ComponentFixture<UserPicturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPicturePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPicturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
