import React from 'react';
import ContentBox from '../layout/contentBox';
import styles from './propposal.module.css';

export default function Propposal() {
  return (
    <ContentBox title="Proposta Inicial" color="orange-700">
      <div className={styles.container}>
        <p>
          O Bacharelado em Ciência da Computação do IME-USP foi fundado em 1972.
          Em seus mais de 40 anos de história e centenas de bacharéis formados,
          várias mudanças estruturais foram ocorrendo de modo a acomodar o
          crescimento do curso e a evolução da área. Este Trabalho de Conclusão
          de Curso busca, dentre outras coisas, mapear tais mudanças e entender
          por quais etapas o BCC passou antes de ter a configuração que tem
          hoje. Para isso, realizaremos pesquisas em documentos oficiais da
          universidade de modo a identificar registros de mudanças que ocorreram
          na estrutura do curso, tais como número de vagas oferecidas e corpo
          docente, e organizaremos tais registros de modo a estabelecer uma
          continuidade histórica entre eles.
        </p>
        <p>
          Além disso, também buscaremos mapear as disciplinas oferecidas ao
          longo de toda a vida do curso, e agrupá-las em suas devidas áreas de
          estudo. Desse modo, poderemos analisar como o curso foi evoluindo
          frente a novas tecnologias e novos conceitos, e observar como a
          distribuição de disciplinas por área tem se comportado ao longo dos
          anos.
        </p>
        <p>
          Para apresentar todos esses dados obtidos em meio a pesquisas, este
          website terá papel importante. Nele, serão construídos diversos
          gráficos para exibir ao leitor interessado todo o aprendizado
          adquirido ao longo do trabalho. Teremos, por exemplo, uma timeline do
          BCC com momentos importantes desde sua criação até o presente.
        </p>
        <p>
          Para além do BCC, este trabalho também se propõe a analisar cursos de
          Ciência da Computação oferecidos em diversas instituições do Brasil e
          do mundo. Levantaremos dados estruturais destes cursos, como tamanho
          das turmas e do corpo docente, e também realizaremos o mesmo
          mapeamento em suas grades de disciplinas. Com isso, conseguiremos
          traçar comparações entre eles, observar padrões e extrair conclusões
          que podem vir a colaborar com a melhoria do nosso curso. Naturalmente,
          todos esses dados serão também disponibilizados no site em forma de
          gráficos para fácil visualização.
        </p>
        <p className={styles.note}>
          <span className={styles.bold}>Nota:</span> em 12/09, em reunião com o
          prof. Carlinhos, foi definida uma mudança com relação à proposta
          inicial. A comparação com outros cursos pelo mundo foi adiada para uma
          pesquisa futura, fora do escopo deste trabalho, e incluiu-se uma
          pesquisa no corpo de ex-alunos do curso, para traçar um perfil de onde
          se encontram hoje. Assim, o título do trabalho foi alterado para{' '}
          <span className={styles.bold}>
            &quot;BCC IME-USP: evolução e perfil do ex-aluno&quot;
          </span>
          . Também foi decidido que não será escrita uma monografia pois o
          próprio trabalho já terá valor documental.
        </p>
      </div>
    </ContentBox>
  );
}
