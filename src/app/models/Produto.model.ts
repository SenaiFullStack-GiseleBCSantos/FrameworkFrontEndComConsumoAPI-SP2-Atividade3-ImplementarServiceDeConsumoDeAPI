export class Produto{
    id: number = 0;
    produto: String = '';
    descricao: String = '';
    foto: String = '';
    preco: number = 0;

        constructor(id:number, produto:String, descricao:String, foto:String, preco:number){
            this.id = id;
            this.produto = produto;
            this.descricao = descricao;
            this.foto = foto;
            this.preco = preco;
        }
}