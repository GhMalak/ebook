/**
 * Configure aqui todos os dados do site.
 * Alterando este arquivo você atualiza a página inteira.
 */

export const site = {
  /** Nome / marca (título do site) */
  titulo: "FTM - MARCELO MALAQUIAS DA SILVA",

  /** Razão social (nome legal da empresa) */
  razaoSocial: "MARCELO MALAQUIAS DA SILVA",

  /** CNPJ (apenas números ou formatado) */
  cnpj: "72.637.457/0001-12",

  /** Data de abertura */
  dataAbertura: "09/01/1995",

  /** Porte (ex: MEI, ME, EPP) */
  porte: "Microempresa (ME)",

  /** Natureza jurídica */
  naturezaJuridica: "Empresário (Individual)",

  /** Opção pelo Simples Nacional */
  simplesNacional: "Sim (Desde 17/02/2023)",

  /** Capital social */
  capitalSocial: "R$ 10.000,00",

  /** Tipo (Matriz/Filial) */
  tipo: "Matriz",

  /** Situação cadastral */
  situacaoCadastral: "Ativa (Desde 01/02/2021)",

  /** E-mail de contato (usado na página e na política de privacidade) */
  email: "gustavo.calasan@gmail.com",

  /** Telefone (WhatsApp para "Conversar agora") */
  telefone: "(61) 99875-4575",

  /** Número só dígitos para link WhatsApp (ex: 5588997906598) */
  whatsapp: "5561998754575",

  /** Link do Instagram */
  instagram: "https://instagram.com",

  /** Texto da missão (parágrafo principal) */
  missao:
    "Oferecer serviços de excelência, com agilidade e comprometimento, proporcionando a melhor experiência e soluções personalizadas para nossos clientes. Atuamos com a transparência e a responsabilidade de uma Microempresa (ME), valorizando o crescimento sustentável e o relacionamento próximo, para transformar necessidades em resultados concretos.",

  /** Por que essa missão se adequa ao seu negócio (pode ser um array de frases ou um texto) */
  missaoAdequacao: `Foco no Cliente: A razão social leva o seu nome, "Marcelo Malaquias da Silva" o que indica um negócio pessoal e com foco no relacionamento próximo. A missão reflete isso.
Simplicidade e Agilidade: Como optante pelo Simples Nacional desde a abertura, a empresa beneficia-se de um regime tributário simplificado. A missão incorpora os valores de agilidade e simplicidade nos serviços.
Credibilidade e Formalidade: Ter um CNPJ e um capital social declarado demonstra seriedade e compromisso. A missão enfatiza transparência e responsabilidade.
Espírito Empreendedor: A natureza jurídica de Empresário Individual e o porte ME são a essência do empreendedorismo brasileiro. A missão captura esse espírito de crescimento e dedicação.`,

  /** Título da seção Quem Somos */
  quemSomosTitulo: "Conheça a Nossa História",

  /** Texto "Sobre Nós" / Quem somos */
  quemSomosTexto: `A 72.637.457 empresa nasceu da vontade de oferecer um trabalho de qualidade, transparente e próximo do cliente. Formalizada como Microempresa (ME), nossa empresa foi construída sobre a base do empreendedorismo honesto e dedicado, com um capital social investido para garantir seriedade e compromisso desde o primeiro dia.

Optamos pelo regime do Simples Nacional para simplificar nossa relação fiscal e repassar essa agilidade e eficiência para os nossos serviços. Essa escolha reflete nossa essência: descomplicar processos e entregar exatamente o que nosso cliente precisa, com profissionalismo e clareza.

Aqui, você não é mais um número. Você é um parceiro. Trabalhamos lado a lado para transformar seus objetivos em realidade, com a responsabilidade e o cuidado de quem valoriza cada projeto como único.`,

  /** Pilares (nome + descrição) */
  pilares: [
    { nome: "Compromisso", descricao: "Cumprimos prazos e promessas com rigor." },
    { nome: "Transparência", descricao: "Trabalhamos com clareza desde a cotação até a entrega." },
    { nome: "Dedicação", descricao: "Colocamos nosso nome e nossa expertise em cada detalhe." },
  ],

  /** Texto da política de privacidade (resumido no config; completo pode ficar aqui) */
  politicaPrivacidade: {
    titulo: "Política de Privacidade",
    conteudo: `1. Informações Gerais
A empresa valoriza a transparência e a privacidade dos dados de seus clientes e visitantes. Esta política explica como coletamos, usamos e protegemos suas informações pessoais ao você interagir com nosso site e nossos serviços.

2. Quais Dados Coletamos?
Coletamos dados fornecidos voluntariamente por você através de formulários de contato, como: Nome completo, Endereço de e-mail, Número de telefone, Conteúdo de mensagens. Além disso, nosso site pode coletar automaticamente dados anônimos de navegação (endereço de IP, tipo de navegador e páginas visitadas) para melhorar a experiência do usuário.

3. Como Usamos Seus Dados?
Seus dados são utilizados para: Responder às suas solicitações de contato e orçamento; Prestar os serviços contratados; Enviar comunicados importantes sobre nossos serviços (somente se você autorizar); Melhorar a performance e a segurança do nosso site.

4. Compartilhamento de Dados
Não vendemos e não compartilhamos suas informações pessoais com terceiros não autorizados. Seus dados são tratados com confidencialidade.

5. Seus Direitos
Você tem o direito de acessar, corrigir e solicitar a exclusão de seus dados pessoais, respeitando os prazos legais de retenção.

6. Contato
Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato através do e-mail informado na página.`,
  },

  /** URL do login (se tiver painel em outro lugar) */
  loginUrl: "#login",
} as const;
