import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Herocomponent } from './herocomponent';

describe('Herocomponent', () => {
  let component: Herocomponent;
  let fixture: ComponentFixture<Herocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Herocomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Herocomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
