import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsibleGroupsComponent } from './collapsible-groups.component';

describe('CollapsibleGroupsComponent', () => {
  let component: CollapsibleGroupsComponent;
  let fixture: ComponentFixture<CollapsibleGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsibleGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsibleGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
