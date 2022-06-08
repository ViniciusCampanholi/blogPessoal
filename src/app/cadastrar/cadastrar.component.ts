import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  userLogin: UserLogin = new UserLogin
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService:AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event:any) {
    this.confirmarSenha = event.target.value
  }

  tipoDeUsuario(event:any){
    this.tipoUsuario = event.targe.value
  }

  cadastrar(){
    this.user.tipo = this.tipoUsuario

    if(this.user.senha != this.confirmarSenha){
      alert('As senhas precisam ser iguais')
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: User)=>{
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso')
      }
      )
    }
  }

}
