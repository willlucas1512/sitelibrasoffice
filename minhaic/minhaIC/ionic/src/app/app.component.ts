import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomeAlunoPage } from '../pages/home-aluno/home-aluno';
import { MinhasIcPage } from '../pages/minhas-ic/minhas-ic';
import { GerenciarIcPage } from '../pages/gerenciar-ic/gerenciar-ic';
import { DetalhesIcPage } from '../pages/detalhes-ic/detalhes-ic';
import { HomePage } from '../pages/home/home';
import { PesquisarIcPage } from '../pages/pesquisar-ic/pesquisar-ic';
import { OpcaocadastroPage } from '../pages/opcaocadastro/opcaocadastro';
import { CadastroalunoPage } from '../pages/cadastroaluno/cadastroaluno';
import { CadastroprofessorPage } from '../pages/cadastroprofessor/cadastroprofessor';
import { PedidosPage } from '../pages/pedidos/pedidos';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { MenuPage } from '../pages/menu/menu';
import { AprovarpedidosPage } from '../pages/aprovarpedidos/aprovarpedidos';
import { VisualizaralunosPage } from '../pages/visualizaralunos/visualizaralunos';

import { AlunoProvider } from '../providers/aluno/aluno';
import { ProfessorProvider } from '../providers/professor/professor';
import { LoginProvider } from '../providers/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild(Nav) nav: Nav;

  type: string = null;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public alunoProvider: AlunoProvider, public professorProvider: ProfessorProvider, public loginProvider: LoginProvider) {
    this.initializeApp();
  }

  ngOnInit() {
    console.log('aaaaaaaaaaaaaaaaaaa');
    this.alunoProvider.alunoEmitter.subscribe((res) =>{
    console.log(res);
    if(res){
      this.pages = [
        { title: 'Home', component: HomeAlunoPage, icon: 'assets/imgs/home.png'},
        { title: 'Minhas ICs', component: MinhasIcPage, icon: 'assets/imgs/orientacoes.png'},
        { title: 'Pedidos', component: PedidosPage, icon: 'assets/imgs/export.png' },
        { title: 'Configurações', component: ConfiguracoesPage, icon: 'assets/imgs/gear.png'},
        { title: 'Logout', component: HomePage, icon: 'assets/imgs/logout.png' } 
      ]
    } 
  });
    this.professorProvider.professorEmitter.subscribe((res) =>{
      console.log(res);
      if(res){
        this.pages = [
          { title: 'Orientações', component: GerenciarIcPage, icon: 'assets/imgs/orientacoes.png' },
          { title: 'Pedidos', component: AprovarpedidosPage, icon: 'assets/imgs/export.png'},
          { title: 'Meus Alunos', component: VisualizaralunosPage, icon: 'assets/imgs/people.png'},
          { title: 'Configurações', component: ConfiguracoesPage, icon: 'assets/imgs/gear.png'},
          { title: 'Logout', component: HomePage, icon: 'assets/imgs/logout.png' }
               
        ]
      }
    });
    this.loginProvider.loginEmitter.subscribe((res) =>{
      console.log(res);
      if (res) {
        console.log('existe res');
        if( res.success.type == "aluno" ){
          console.log('res eh de aluno');
          this.pages = [
            { title: 'Home', component: HomeAlunoPage, icon: 'assets/imgs/home.png'},
            { title: 'Minhas ICs', component: MinhasIcPage, icon: 'assets/imgs/orientacoes.png'},
            { title: 'Pedidos', component: PedidosPage, icon: 'assets/imgs/export.png' },
            { title: 'Configurações', component: ConfiguracoesPage, icon: 'assets/imgs/gear.png'},
            { title: 'Logout', component: HomePage, icon: 'assets/imgs/logout.png' } 
          ]
        } 
        else {
          console.log('res eh de professor');
          this.pages = [
            { title: 'Orientações', component: GerenciarIcPage, icon: 'assets/imgs/orientacoes.png' },
            { title: 'Pedidos', component: AprovarpedidosPage, icon: 'assets/imgs/export.png'},
            { title: 'Meus Alunos', component: VisualizaralunosPage, icon: 'assets/imgs/pessoas.png'},
            { title: 'Configurações', component: ConfiguracoesPage, icon: 'assets/imgs/gear.png'}, 
            { title: 'Logout', component: HomePage, icon: 'assets/imgs/logout.png' }       
          ]
        }
      }
    });
	}	

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
