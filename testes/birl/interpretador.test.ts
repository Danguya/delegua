import { AvaliadorSintaticoBirl } from '../../fontes/avaliador-sintatico/dialetos';
import { LexadorBirl } from '../../fontes/lexador/dialetos';
import { InterpretadorBirl } from '../../fontes/interpretador/dialetos';

describe('Interpretador', () => {
    describe('interpretar()', () => {
        let lexador: LexadorBirl;
        let avaliadorSintatico: AvaliadorSintaticoBirl;
        let interpretador: InterpretadorBirl;

        describe('Cenário de sucesso', () => {
            beforeEach(() => {
                lexador = new LexadorBirl();
                avaliadorSintatico = new AvaliadorSintaticoBirl();
                interpretador = new InterpretadorBirl(process.cwd());
            });

            it('Sucesso - Hello, World! Porra!', async () => {
                const retornoLexador = lexador.mapear(
                    [
                        'HORA DO SHOW',
                        '  CE QUER VER ESSA PORRA? ("Hello, World! Porra!\n");',
                        '  BORA CUMPADE 0;',
                        'BIRL',
                    ],
                    -1
                );

                const retornoAvaliadorSintatico = avaliadorSintatico.analisar(retornoLexador, -1);

                const retornoInterpretador = await interpretador.interpretar(retornoAvaliadorSintatico.declaracoes);

                expect(retornoInterpretador.erros).toHaveLength(0);
            });
        });
    });
});
