import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){
    //se o token estiver vazio, retornar para a página de logar
    // if(environment.token == ''){
    //   //redireciona a rota para a pagina de login
    //   this.router.navigate(['/entrar'])
    // }
  }

}
