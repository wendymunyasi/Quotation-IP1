import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDetailsubmitterComponent } from './quote-detailsubmitter.component';

describe('QuoteDetailsubmitterComponent', () => {
  let component: QuoteDetailsubmitterComponent;
  let fixture: ComponentFixture<QuoteDetailsubmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteDetailsubmitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDetailsubmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
