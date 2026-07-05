# MarieClaire Doceria: construindo um sistema completo para uma doceria real

Desenvolver a MarieClaire Doceria foi um exercício de transformar uma necessidade de negócio em um produto web completo. A ideia não era apenas criar uma vitrine de produtos, mas desenhar uma solução capaz de apoiar o atendimento, organizar pedidos, dar visibilidade ao estoque e facilitar a rotina administrativa de uma doceria em crescimento.

O projeto nasceu com uma premissa clara: unir uma experiência agradável para o cliente com uma operação interna eficiente para a equipe. A partir disso, a arquitetura foi pensada para separar responsabilidades, manter o código evolutivo e permitir novas entregas sem quebrar o que já estava funcionando.

---

## O problema que o projeto resolve

Negócios como uma doceria costumam depender de atendimento manual, mensagens espalhadas em aplicativos e controle informal de produtos e pedidos. Isso funciona no início, mas rapidamente cria gargalos: pedidos se perdem, o catálogo fica desatualizado e o acompanhamento de estoque vira um processo reativo.

A MarieClaire Doceria foi criada para atacar exatamente esses pontos:

- apresentar os produtos de forma organizada;
- permitir busca, filtro e navegação por categorias;
- registrar checkout autenticado;
- iniciar pedidos pelo WhatsApp com a mensagem pronta;
- oferecer painel administrativo para produtos, pedidos e estoque;
- manter a operação interna mais previsível.

---

## Arquitetura adotada

A solução foi dividida em duas frentes principais: front-end e back-end.

O front-end foi construído com Next.js e React, priorizando a experiência do usuário final, páginas públicas, fluxo de carrinho e acesso às áreas autenticadas. Já o back-end ficou responsável pela regra de negócio, autenticação, persistência e exposição de rotas para consumo da interface.

O banco de dados escolhido foi o PostgreSQL, com Prisma como ORM para facilitar migrações, seed de dados e manutenção do modelo relacional.

Em termos práticos, a estrutura ficou assim:

```text
Cliente / navegador
	|
	v
Front-end em Next.js
	|
	v
Back-end em Node.js + Express
	|
	v
PostgreSQL via Prisma
```

Essa separação ajudou bastante a manter a base organizada. A interface evolui sem depender diretamente de detalhes do banco, enquanto o back-end concentra as decisões mais críticas do domínio.

---

## Principais decisões técnicas

Uma das escolhas mais importantes foi tratar o projeto como uma aplicação real desde o início. Isso significa não pensar apenas em telas bonitas, mas em autenticação, persistência, validação, rastreabilidade e testes.

No back-end, a stack com Express, TypeScript, JWT, bcryptjs e Zod permitiu estruturar autenticação segura, validar entradas e reduzir inconsistências antes de chegar ao banco. O Prisma ajudou a manter o modelo de dados legível e alinhado com as regras do domínio.

No front-end, o uso de Next.js trouxe uma boa base para rotas, organização por módulos e uma experiência mais fluida para o usuário. A interface pública foi pensada para destacar catálogo, produto, carrinho e páginas institucionais, enquanto a área administrativa concentra os dados operacionais.

---

## O que foi implementado

O projeto avançou em frentes que representam bem a rotina de uma doceria digital:

### Catálogo público

O cliente consegue navegar pelos produtos, pesquisar por nome ou categoria e ver detalhes como preço, descrição, imagem e disponibilidade. Isso reduz atrito na descoberta do cardápio e torna a navegação mais objetiva.

### Carrinho e checkout

O carrinho foi pensado para funcionar de forma simples no navegador, com ajuste de quantidade, remoção de itens e cálculo do valor total. Na finalização, o fluxo leva o usuário para uma etapa autenticada e depois abre o WhatsApp com a mensagem de pedido pronta.

### Autenticação e perfil

Cadastro, login e recuperação do usuário autenticado foram tratados como parte central da experiência, porque o checkout depende disso e o perfil permite manter a sessão e os dados do cliente organizados.

### Painel administrativo

A área administrativa concentra o que a operação precisa para continuar funcionando: dashboard com métricas, controle de pedidos, gerenciamento de produtos e acompanhamento de estoque de ingredientes.

### Persistência e estrutura de dados

O banco de dados foi modelado para suportar produtos, categorias, pedidos, usuários e estoque. O uso de migrações e seed facilita a evolução do sistema sem perder controle sobre a estrutura.

---

## Desafios do desenvolvimento

O maior desafio não foi apenas codar telas ou criar rotas. Foi alinhar o sistema ao contexto real do negócio.

Entre os pontos mais relevantes estiveram:

- decidir o que deveria ser público e o que deveria ficar restrito;
- desenhar um fluxo de pedido que fosse simples para o cliente e útil para a operação;
- organizar o estoque de forma que ele não fosse apenas um cadastro solto, mas uma informação de apoio à decisão;
- manter o projeto consistente entre front-end e back-end sem misturar responsabilidades.

Outro aprendizado importante foi perceber que um sistema de comércio não é só catálogo. Ele precisa lidar com estado, disponibilidade, confirmação de pedido e clareza na comunicação com o cliente.

---

## Testes e confiança na entrega

Para evitar regressões nas áreas mais sensíveis, a base de testes foi pensada para cobrir autenticação, vendas, produtos e regras auxiliares do domínio. Isso é importante porque pequenas mudanças em regra de negócio podem afetar diretamente pedidos e cálculos.

Mais do que “ter testes”, a intenção foi garantir segurança para continuar evoluindo o sistema sem medo de quebrar os fluxos principais.

---

## Aprendizados do projeto

Esse desenvolvimento reforçou alguns pontos que considero essenciais em projetos reais:

1. entender o processo do negócio antes de pensar em tela;
2. separar bem o que é interface, regra de negócio e persistência;
3. priorizar fluxos críticos, como autenticação, checkout e estoque;
4. documentar decisões para facilitar manutenção futura;
5. construir pensando em evolução, não só em entrega inicial.

A MarieClaire Doceria me fez sair do modo “fazer funcionar” e entrar no modo “fazer sustentar”. Essa diferença muda completamente a qualidade do produto final.

---

## Próximos passos

Mesmo com uma base sólida, ainda existem evoluções naturais para o projeto:

- melhorar análises do dashboard com indicadores mais precisos;
- detalhar histórico de pedidos e status;
- ampliar a gestão de estoque com movimentações mais ricas;
- refinar a experiência mobile;
- evoluir a documentação e os testes automatizados.

Esses próximos passos ajudam a transformar a aplicação em uma solução cada vez mais madura para operação e atendimento.

---

## Conclusão

A MarieClaire Doceria mostra como um projeto bem resolvido vai além da interface. Ele exige atenção à operação, ao banco de dados, à segurança, à clareza do fluxo de compra e à experiência de quem administra o sistema.

No fim, o valor do projeto é justamente: uma vitrine digital funcional para o cliente e uma base operacional confiável para o negócio.
