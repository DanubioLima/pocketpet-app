import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceStepThreePage } from './service-step-three.page';

describe('ServiceStepThreePage', () => {
  let component: ServiceStepThreePage;
  let fixture: ComponentFixture<ServiceStepThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceStepThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceStepThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
