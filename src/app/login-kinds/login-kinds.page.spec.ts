import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginKindsPage } from './login-kinds.page';

describe('LoginKindsPage', () => {
  let component: LoginKindsPage;
  let fixture: ComponentFixture<LoginKindsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginKindsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginKindsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
