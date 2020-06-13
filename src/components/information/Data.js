import React, { Component } from 'react';
import ContentBox from '../shared/ContentBox';

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ContentBox title="Dados" color="orange">
        <div className="fw3 lh-copy gray f6">
          <p className="mb2">Os dados coletados se dividem em várias seções:</p>
          <ul className="gray fw3">
            <li className="mb3 lh-title">
              <span>
                <span className="b">Linha do tempo:</span> Dados gerais da
                evolução do IME e do BCC desde a fundação até os dias atuais.
                Esses dados vieram de várias fontes, como atas da congregação
                dos anos 70 e 80, placas de inauguração e informações fornecidas
                pelos grupos de extensão.
              </span>
            </li>
            <li className="mb3 lh-title">
              <span>
                <span className="b">Professores:</span> Informações do corpo
                docente do DCC (e dos professores que pesquisavam computação no
                MAP antes de terem seu próprio departamento) retratando os
                professores e seus cargos a cada ano. Foram usados catálogos de
                graduação de todos os anos desde 1972 para realizar esse
                levantamento. Vários ex-professores estão sem fotos -
                contribuições são bem-vindas.
              </span>
            </li>
            <li className="mb3 lh-title">
              <span>
                <span className="b">Matérias:</span> Informações de todas as
                matérias de graduação ministradas pelo MAC para o BCC
                (excluindo-se assim matérias exclusivas da Poli, por exemplo),
                incluindo as matérias do tempo do MAP que tinham foco em
                computação. Elas foram catalogadas entre as 4 atuais trilhas do
                BCC de modo arbitrário (e talvez não totalmente preciso). Mais
                uma vez foram usados os catálogos de graduação, eles possuem uma
                seção listando todas as matérias sob responsabilidade de cada
                departamento no respectivo ano.
              </span>
            </li>
            <li className="mb3 lh-title">
              <span>
                <span className="b">Grade:</span> Informações da grade
                curricular do BCC, discretizada para os anos em que houveram as
                maiores mudanças. Em alguns momentos essas mudanças se deram ao
                longo de dois ou três anos, mas foram &quot;compiladas&quot;
                para um ano só para facilitar a visualização. Os catálogos de
                graduação foram usados de novo.
              </span>
            </li>
            <li className="mb3 lh-title">
              <span>
                <span className="b">Formandos por gênero:</span> Dados do número
                de formandos a cada ano, separados entre homens e mulheres. No
                gráfico esses dados são exibidos de forma acumulada, mas estão
                armazenados individualmente por ano. Os dados foram retirados da
                página de ex-alunos do BCC e podem não estar 100% corretos pela
                dificuldade em identificar o gênero de algumas pessoas com nomes
                menos usuais.
              </span>
            </li>
            <li className="mb3 lh-title">
              <span>
                <span className="b">Ex-alunos:</span> Uma pesquisa da situação
                atual de pessoas que se formaram no BCC ao longo dos anos. Os
                formandos foram divididos em três grupos (1974-1988, 1989-2003,
                2004-2018) e de cada grupo foram sorteados 30 nomes, que foram
                pesquisados no LinkedIn de forma manual, de onde extraímos
                informações de emprego, escolaridade e localização atual. O
                tamanho pequeno da pesquisa implica em uma imprecisão
                considerável nos resultados, mas pelo seu caráter manual era o
                máximo que foi possível fazer.
              </span>
            </li>
          </ul>
        </div>
      </ContentBox>
    );
  }
}

export default Data;
