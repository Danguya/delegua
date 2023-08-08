import { Construto, Literal } from '../../../construtos';
import { Leia, Para } from '../../../declaracoes';
import { InterpretadorBirlInterface } from '../../../interfaces/dialeto/interpretador-birl-interface';
import { InterpretadorComDepuracao } from '../../interpretador-com-depuracao';
import * as comum from './comum';

export class InterpretadorBirlComDepuracao extends InterpretadorComDepuracao implements InterpretadorBirlInterface {
    constructor(diretorioBase: string, funcaoDeRetorno: Function = null, funcaoDeRetornoMesmaLinha: Function = null) {
        super(diretorioBase, funcaoDeRetorno, funcaoDeRetornoMesmaLinha);
    }
    async resolveQuantidadeDeInterpolacoes(expressao: Literal): Promise<RegExpMatchArray> {
        return comum.resolveQuantidadeDeInterpolacoes(expressao);
    }
    async verificaTipoDaInterpolação(dados: { tipo: string; valor: any }): Promise<boolean> {
        return comum.verificaTipoDaInterpolação(dados);
    }
    async substituirValor(stringOriginal: string, novoValor: any, simboloTipo: string): Promise<string> {
        return comum.substituirValor(stringOriginal, novoValor, simboloTipo);
    }

    /**
     * Execução da leitura de valores da entrada configurada no
     * início da aplicação.
     * @param expressao Expressão do tipo Leia
     * @returns Promise com o resultado da leitura.
     */
    async visitarExpressaoLeia(expressao: Leia): Promise<any> {
        await comum.visitarExpressaoLeia(expressao);
    }

    async visitarExpressaoLiteral(expressao: Literal): Promise<any> {
        return comum.visitarExpressaoLiteral(expressao);
    }

    async visitarDeclaracaoPara(declaracao: Para): Promise<any> {
        return comum.visitarDeclaracaoPara(declaracao);
    }

    async avaliarArgumentosEscreva(
        argumentos: Construto[]
    ): Promise<string> {
        return comum.avaliarArgumentosEscreva(this, argumentos);
    }
}
