import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { OpcaocadastroPage } from '../opcaocadastro/opcaocadastro';
import { GerenciarIcPage } from '../gerenciar-ic/gerenciar-ic';
import { HomeAlunoPage } from '../home-aluno/home-aluno';

import { LoginProvider } from '../../providers/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  user = {
    name: 'admin',
    pw: 'admin'
  }

  constructor(public navCtrl: NavController, private authProvider: AuthProvider, private alertCtrl: AlertController,
    public loginProvider: LoginProvider){
  }

  loginUser(){
    this.authProvider.login(this.user.name, this.user.pw).then(success => {
      if(success){
        this.navCtrl.setRoot('MenuPage');
      } else {
        let alert = this.alertCtrl.create({
          title: 'Login failed',
          message: 'Please check your credentials',
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }
  
  paraOpcaocadastro() {
      this.navCtrl.setRoot(OpcaocadastroPage);
    }


/*
  numero = 0;
  todo = {}
  
  logForm() {
  
    console.log(this.todo)
    }*/

    /*
    paraOpcaocadastro() {
  	  this.navCtrl.setRoot(OpcaocadastroPage);
    } */

    onSubmit(login) {
      console.log(login);
      this.loginProvider.loginUser( login.value.numero, login.value.senha ).subscribe(
        (res) => {
          
          console.log(res);
          
          var token = res.success.token;
          var userType = res.success.type;

          if (token) {
            localStorage.setItem('token', token);
            console.log('Token armazenado!');
          }else{
            console.log('Token nulo!')
          }

          if (userType) {
            if (userType == 'professor') {
              this.navCtrl.setRoot(GerenciarIcPage);
            }else{
              this.navCtrl.setRoot(HomeAlunoPage);
            }
          }

        }
      );
    }
  //}
  /*
    checkAlunoprof() {
      if (this.numero.value.length == 7)
        this.navCtrl.setRoot(GerenciarIcPage);
      else
        this.navCtrl.setRoot(HomeAlunoPage);
    }*/
  }