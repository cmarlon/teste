import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  toastCtrl: any;
  loadingCtrl: any;
  @ViewChild(IonSlides, { static: false }) slides: IonSlides;
  public wavesPosition: number = 0
  public wavesDifference: number = 80;
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

  constructor(public keyboard: Keyboard,
    private loadingCtral: LoadingController,
    private teostCtrl: ToastController,
    private authService: AuthService




  ) { }


  ngOnInit() { }

  segmentChanged(event: any) {
    if (event.detail.value === "login") {
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDifference;
    } else {
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDifference;
    }


  }

   async login() {
    await this.presentLoading();

    try {
      console.log(this.userRegister);
      await this.authService.login(this.userLogin)
    } catch (error) {
      console.error(error);
    } finally {
      this.loading.dismiss();
    }




  }
  async register() {
    await this.presentLoading();

    try {
      console.log(this.userRegister);
      await this.authService.register(this.userRegister)
    } catch (error) {
      console.error(error);
    } finally {
      this.loading.dismiss();
    }
  }



  async presentLoading() {
    this.loading = await this.loadingCtral.create({ message: 'Por favor,aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.creat({ message, duration: 2000 });
  }

}
