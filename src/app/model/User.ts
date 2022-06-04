import { Postagem } from "./Postagem"

export class User{
    public id: number
    public nome: string
    public usuario: string
    public senha: string
    public foto: string
    public tipo: string
    // como tema pode ter várias postagens, então o atributo postagem do tipo Postagem precisa ser um array
    public postagem: Postagem []
}