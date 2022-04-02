import { PilhaEscopos } from "../resolvedor/pilha-escopos";
import { SimboloInterface } from "./simbolo-interface";

export interface ResolvedorInterface {
    interpretador: any;
    Delegua: any;
    escopos: PilhaEscopos;
    FuncaoAtual: any;
    ClasseAtual: any;
    cicloAtual: any;

    definir(simbolo: SimboloInterface): void;
    declarar(simbolo: SimboloInterface): void;
    inicioDoEscopo(): void;
    finalDoEscopo(): void;
    resolver(declaracoes: any): void;
    resolverLocal(expr: any, nome: any): void;
    visitarExpressaoBloco(stmt: any): any;
    visitarExpressaoDeVariavel(expr: any): any;
    visitarExpressaoVar(stmt: any): any;
    visitarExpressaoDeAtribuicao(expr: any): any;
    resolverFuncao(funcao: any, funcType: any): void;
    visitarExpressaoFuncao(stmt: any): any;
    visitarExpressaoDeleguaFuncao(stmt: any): any;
    visitarExpressaoTente(stmt: any): any;
    visitarExpressaoClasse(stmt: any): any;
    visitarExpressaoSuper(expr: any): any;
    visitarExpressaoObter(expr: any): any;
    visitarDeclaracaoDeExpressao(stmt: any): any;
    visitarExpressaoSe(stmt: any): any;
    visitarExpressaoImportar(stmt: any): void;
    visitarExpressaoEscreva(stmt: any): void;
    visitarExpressaoRetornar(stmt: any): any;
    visitarExpressaoEscolha(stmt: any): void;
    visitarExpressaoEnquanto(stmt: any): any;
    visitarExpressaoPara(stmt: any): any;
    visitarExpressaoFazer(stmt: any): any;
    visitarExpressaoBinaria(expr: any): any;
    visitarExpressaoDeChamada(expr: any): any;
    visitarExpressaoAgrupamento(expr: any): any;
    visitarExpressaoDicionario(expr: any): any;
    visitarExpressaoVetor(expr: any): any;
    visitarExpressaoVetorIndice(expr: any): any;
    visitarExpressaoContinua(stmt?: any): any;
    visitarExpressaoPausa(stmt?: any): any;
    visitarExpressaoAtribuicaoSobrescrita(expr?: any): any;
    visitarExpressaoLiteral(expr?: any): any;
    visitarExpressaoLogica(expr?: any): any;
    visitarExpressaoUnaria(expr?: any): any;
    visitarExpressaoDefinir(expr?: any): any;
    visitarExpressaoIsto(expr?: any): any;
}