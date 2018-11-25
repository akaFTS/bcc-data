# mac0499

Este é o TCC feito por Gustavo Silva e pelo prof. Carlinhos que mapeia um pouco da história de mais de 40 anos de BCC.

Ele foi escrito basicamente utilizando React e não possui back-end. Todos os dados utilizados estão localizados na pasta `/src/data`.

Para executá-lo, basta clonar o repositório, rodar `npm install` para instalar os pacotes necessários e `npm start` para rodá-lo localmente. Para hospedá-lo em algum lugar, é necessário fazer o build com `nwb build-react-app`. Este comando irá criar os links internos considerando que será hospedado na raiz do site; se for ficar numa subpasta, é necessário especificá-la com `nwm build-react-app --webpack.publicPath='/~gustavohfts/mac0499'`, por exemplo, caso fosse hospedar na Rede Linux no link `http://linux.ime.usp.br/~gustavohfts/mac0499`.
