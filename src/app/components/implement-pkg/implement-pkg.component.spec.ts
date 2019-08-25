import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementPkgComponent } from './implement-pkg.component';

describe('ImplementPkgComponent', () => {
  let component: ImplementPkgComponent;
  let fixture: ComponentFixture<ImplementPkgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementPkgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementPkgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
