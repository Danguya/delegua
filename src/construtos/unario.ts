import { Construto } from "./construto";


export class Unario implements Construto {
    linha: number;
    operador: any;
    direita: any;

    constructor(linha: number, operador: any, direita: any) {
        this.linha = linha;
        this.operador = operador;
        this.direita = direita;
    }

    aceitar(visitante: any) {
        return visitante.visitarExpressaoUnaria(this);
    }
}
