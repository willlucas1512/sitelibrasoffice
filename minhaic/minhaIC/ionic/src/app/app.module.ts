import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { SelectSearchableModule } from 'ionic-select-searchable';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
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


import { ProfessorProvider } from '../providers/professor/professor';
import { AlunoProvider } from '../providers/aluno/aluno';
import { LoginProvider } from '../providers/login/login';
import { ProfessorHomeProvider } from '../providers/professor-home/professor-home';
import { CursosProvider } from '../providers/cursos/cursos';
import { CreateCursoProvider } from '../providers/create-curso/create-curso';
import { AuthProvider } from '../providers/auth/auth';
import { PedidosProvider } from '../providers/pedidos/pedidos';
import { AlunoHomeProvider } from '../providers/aluno-home/aluno-home';

@NgModule({
  declarations: [
    MyApp,
    GerenciarIcPage,
    DetalhesIcPage,
    HomePage,
    HomeAlunoPage,
    MinhasIcPage,
    PesquisarIcPage,
    OpcaocadastroPage,
    CadastroalunoPage,
    CadastroprofessorPage,
    PedidosPage,
    ConfiguracoesPage,
    MenuPage,
    AprovarpedidosPage,
    VisualizaralunosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    SelectSearchableModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GerenciarIcPage,
    DetalhesIcPage,
    HomePage,
    HomeAlunoPage,
    MinhasIcPage,
    PesquisarIcPage,
    OpcaocadastroPage,
    CadastroalunoPage,
    CadastroprofessorPage,
    PedidosPage,
    ConfiguracoesPage,
    MenuPage,
    AprovarpedidosPage,
    VisualizaralunosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProfessorProvider,
    AlunoProvider,
    LoginProvider,
    ProfessorHomeProvider,
    CursosProvider,
    CreateCursoProvider,
    AuthProvider,
    PedidosProvider,
    AlunoHomeProvider
  ]
})
export class AppModule {}