# Configuração do site

O site tem **uma única página** igual ao modelo [emerson-brandao.painelftm.com.br](https://emerson-brandao.painelftm.com.br).

## Onde alterar razões sociais e todos os textos

Edite **apenas** o arquivo **`config/site.ts`**. Todas as seções da página usam esses valores.

| O que alterar | Campo no `site.ts` |
|---------------|--------------------|
| Nome da marca / título do site | `titulo` |
| Razão social | `razaoSocial` |
| CNPJ | `cnpj` |
| Data de abertura, porte, capital social, etc. | `dataAbertura`, `porte`, `capitalSocial`, … |
| E-mail e telefone | `email`, `telefone`, `whatsapp` |
| Link do Instagram | `instagram` |
| Texto da missão | `missao`, `missaoAdequacao` |
| Quem somos / história e pilares | `quemSomosTitulo`, `quemSomosTexto`, `pilares` |
| Política de privacidade | `politicaPrivacidade.conteudo` |
| Link do botão LOGIN | `loginUrl` |

O botão **CONVERSAR AGORA** abre o WhatsApp com o número em `whatsapp` (apenas dígitos, com DDI: ex. `5588997906598`).

Depois de salvar o `site.ts`, o Next.js atualiza a página automaticamente.
