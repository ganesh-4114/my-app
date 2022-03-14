import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgfComponent } from './dgf.component';

describe('DgfComponent', () => {
  let component: DgfComponent;
  let fixture: ComponentFixture<DgfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DgfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
