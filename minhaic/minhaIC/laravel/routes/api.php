<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//Rota para logar usuário
Route::post('login', 'API\PassportController@login');
//Rota para registrar usuário
Route::post('register', 'API\PassportController@register');



//Rotas que precisam do token
Route::group(['middleware' => 'auth:api'], function() {

	//Rotas do usuário

	//Rota para pegar os detalhes do usuário
	Route::post('get-details', 'API\PassportController@getDetails');


	//Rotas dos cursos

	//Rota para pegar todos os cursos
	Route::post('cursos/all', 'CursoController@index');


	//Rotas dos professor

	//Rota para criar professor (desnecessário neste contexto)
	//Route::post('professor/create', 'ProfessorController@store');
	//Rota para editar professor
	Route::post('professor/edit/{id}', 'ProfessorController@update');
	//Rota para apagar professor (desnecessário neste contexto)
	//Route::post('professor/delete/{id}', 'ProfessorController@destroy');
	//Rota para pegar todos os professores
	Route::post('professor/all', 'ProfessorController@index');
	//Rota para pesquisar professor
	Route::post('professor/search', 'ProfessorController@search');


	//Rotas dos alunos

	//Rota para criar aluno (desnecessário neste contexto)
	//Route::post('aluno/create', 'AlunoController@store');
	//Rota para editar aluno
	Route::post('aluno/edit/{id}', 'AlunoController@update');
	//Rota para apagar aluno (desnecessário neste contexto)
	//Route::post('aluno/delete/{id}', 'AlunoController@destroy');
	//Rota para pegar todos os alunos
	Route::post('aluno/all', 'AlunoController@index');
	//Rota para pesquisar aluno
	Route::post('aluno/search', 'AlunoController@search');


	//Rotas dos pedidos

	//Rota para criar pedido
	Route::post('pedido/create', 'PedidoController@store');
	//Rota para editar pedido (desnecessário neste contexto)
	//Route::post('pedido/edit/{id}', 'PedidoController@update');
	//Rota para apagar pedido
	Route::post('pedido/delete/{id}', 'PedidoController@destroy');
	//Rota para aceitar pedido
	Route::post('pedido/accept/{id}', 'PedidoController@accept');
	//Rota para pesquisar pedido
	Route::post('pedido/all', 'PedidoController@index');
	//Rota para pesquisar pedido
	Route::post('pedido/search', 'PedidoController@search');


	//Rotas das ICs

	//Rota para mostrar todas as ICs
	Route::post('ic/all', 'IcController@index');
	//Rota para mostrar as ICs criadas pelo professor as ICs que o aluno participa
	Route::post('ic/my-ics', 'IcController@myIcs');
	//Rota para criar IC
	Route::post('ic/create', 'IcController@store');
	//Rota para editar IC
	Route::post('ic/edit/{id}', 'IcController@update');
	//Rota para apagar IC
	Route::post('ic/delete/{id}', 'IcController@destroy');
	//Rota para pesquisar IC
	Route::post('ic/search', 'IcController@search');

});