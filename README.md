# Landing Page - Informação, Transparência e Jogo Responsável 🇧🇷

Esta landing page foi desenvolvida sob medida com design contemporâneo e de alta conversão, inspirado nas cores do **Brasil** (Preto Ônix, Verde Esmeralda Vibrante e Amarelo Ouro Solar).

Conta com arquitetura 100% responsiva (Mobile-First), suporte nativo para o **WordPress Elementor** (Widget de Código HTML ou Modelo Canvas) e conformidade com as melhores práticas da **Web Moderna** (acessibilidade WCAG, acordeão nativo animado com `<details>` e `::details-content`, e diálogos modais para conformidade com a LGPD).

---

## 📁 Estrutura dos Arquivos

| Arquivo | Descrição |
| :--- | :--- |
| `index.html` | Página completa e autônoma (HTML + CSS + JS inline). Pronta para abrir diretamente no navegador ou hospedar em servidores estáticos (Vercel, Netlify, GitHub Pages, cPanel). |
| `elementor-widget-code.html` | Código isolado e prefixado (`#br-lp-wrapper`) otimizado especificamente para copiar e colar no **Widget HTML** do Elementor no WordPress sem causar conflito de estilos. |
| `styles.css` | Folha de estilo externa modular caso prefira carregar o CSS separadamente no tema filho (`style.css` ou Personalizador do WordPress). |
| `script.js` | Arquivo JavaScript desacoplado para menus móveis, modais e transições suaves de âncora. |

---

## 🚀 Como Usar no WordPress com Elementor

### Método 1: Copiar e Colar Direto no Elementor (Recomendado)
1. No painel do WordPress, crie ou edite uma página com o **Elementor**.
2. Nas configurações da página (ícone de engrenagem no canto inferior esquerdo), defina a **Estrutura da Página** (Page Layout) como **Elementor Canvas** (isso oculta o cabeçalho e rodapé padrão do tema para um visual 100% imersivo) ou mantenha **Padrão** se quiser usar apenas dentro do conteúdo.
3. Adicione uma nova seção/container de largura total (Full Width) com preenchimento zerado (`padding: 0`).
4. Arraste o widget **HTML** do Elementor para dentro da coluna.
5. Abra o arquivo `elementor-widget-code.html`, copie todo o seu conteúdo e cole no campo de código do widget.
6. Clique em **Atualizar** ou **Publicar**.

### Método 2: Como Página Estática Independente
Se você não utiliza WordPress ou deseja hospedar a página em um subdomínio (ex: `info.seusite.com.br`):
1. Basta fazer o upload do arquivo `index.html` para a raiz do seu servidor web (Apache, Nginx, Hostinger, cPanel, etc.).
2. A página carrega instantaneamente, sem dependência de bibliotecas pesadas (jQuery, React ou Bootstrap).

---

## 🎨 Paleta de Cores & Design System

- **Fundo Principal (Black/Ônix):** `#070a0c` e `#0e1417`
- **Superfície de Cards:** `#131b1f` (com efeito de hover `#182328`)
- **Verde Brasil Primário:** `#00c853` (vibrante) e `#009c3b` (bandeira oficial)
- **Brilho Verde Suave:** `rgba(0, 200, 83, 0.28)`
- **Amarelo Canário / Ouro:** `#ffd000` e `#ffdf00`
- **Brilho Amarelo Suave:** `rgba(255, 208, 0, 0.28)`
- **Tipografia:** `Plus Jakarta Sans` (Google Fonts, com fallbacks do sistema)

---

## 🛡️ Conformidade e Jogo Responsável no Brasil
- Contém alerta explícito para maiores de **+18 anos**.
- Destaque para canais de acolhimento e suporte gratuitos: **CVV (Ligue 188)** e **Jogadores Anônimos do Brasil**.
- Modais interativos com declarações de conformidade com a **LGPD (Lei Geral de Proteção de Dados)** e **Termos de Uso Informativos**.
- Aviso legal obrigatório em conformidade com as diretrizes regulatórias:
  > *"Aviso: Conteúdo informativo. Não constitui recomendação para participar em jogos de azar."*
