import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchManagementComponentComponent } from './search-management-component.component';

describe('SearchManagementComponentComponent', () => {
  let component: SearchManagementComponentComponent;
  let fixture: ComponentFixture<SearchManagementComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchManagementComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchManagementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
