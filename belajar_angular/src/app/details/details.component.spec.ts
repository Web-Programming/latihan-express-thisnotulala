import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  <form (ngSubmit)="applyToLiveHere()">
  <label for="firstName">First Name</label>
  <input
    type="text"
    id="firstName"
    [(ngModel)]="firstName"
    name="firstName"
    required
  />

  <label for="lastName">Last Name</label>
  <input
    type="text"
    id="lastName"
    [(ngModel)]="lastName"
    name="lastName"
    required
  />

  <label for="email">Email</label>
  <input
    type="email"
    id="email"
    [(ngModel)]="email"
    name="email"
    required
  />

  <button type="submit">Apply to Live Here</button>
</form>
});