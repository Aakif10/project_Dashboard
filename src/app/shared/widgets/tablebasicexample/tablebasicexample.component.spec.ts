import { ComponentFixture, TestBed } from '@angular/core/testing';


import { TablebasicexampleComponent } from './tablebasicexample.component';

describe('TablebasicexampleComponent', () => {
  let component: TablebasicexampleComponent;
  let fixture: ComponentFixture<TablebasicexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablebasicexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablebasicexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
