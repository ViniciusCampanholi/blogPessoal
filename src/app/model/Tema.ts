import { Postagem } from "./Postagem"

export class Tema{
    public id: number
    public descricao: string
    // como tema pode ter várias postagens, então o atributo postagem do tipo Postagem precisa ser um array
    public postagem: Postagem []
}