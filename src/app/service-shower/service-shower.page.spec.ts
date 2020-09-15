import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceShowerPage } from './service-shower.page';

describe('ServiceShowerPage', () => {
  let component: ServiceShowerPage;
  let fixture: ComponentFixture<ServiceShowerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceShowerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceShowerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
