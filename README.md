# Walletly

Walletly é um aplicativo web de **finanças pessoais** construído com Angular que ajuda usuários a gerir suas finanças pessoais e familiares de forma prática. O sistema centraliza metas financeiras, orçamento familiar e controle de dívidas, exibindo tudo em painéis (dashboards) visuais e interativos:contentReference[oaicite:0]{index=0}.

## Visão geral

O objetivo do Walletly é criar uma solução moderna, escalável e responsiva para finanças pessoais. A aplicação permite que os usuários controlem gastos individuais e familiares em um único app, oferecendo **visualização gráfica da situação financeira** e funcionalidades de alerta/relatórios para decisões mais rápidas:contentReference[oaicite:1]{index=1}.

## Recursos

### Autenticação

- Cadastro e login de usuário (por JWT ou back‑end de simulação).
- Rotas protegidas por guards e armazenamento seguro do token no `localStorage`:contentReference[oaicite:2]{index=2}.

### Dashboard

- Painel com saldo atual, progresso das metas e dívidas pendentes.
- Gráficos interativos de entradas, saídas e evolução das finanças:contentReference[oaicite:3]{index=3}.

### Metas financeiras

- CRUD completo de metas (criar, visualizar, atualizar e excluir):contentReference[oaicite:4]{index=4}.
- Barra de progresso com simulação de tempo e valor acumulado, com notificação quando a meta for atingida:contentReference[oaicite:5]{index=5}.

### Orçamento familiar

- Registro de entradas (salário, renda extra) e de saídas (gastos do dia a dia):contentReference[oaicite:6]{index=6}.
- Consolidação do saldo familiar e ranking de quem mais gastou:contentReference[oaicite:7]{index=7}.

### Controle de dívidas

- Cadastro de dívidas com valor, juros compostos e número de parcelas:contentReference[oaicite:8]{index=8}.
- Geração de cronograma de pagamento e alertas para vencimento das parcelas:contentReference[oaicite:9]{index=9}.

### Gráficos e relatórios

- Integração com bibliotecas de gráficos (ng‑apexcharts ou Chart.js) para gráficos de pizza, barras e linhas:contentReference[oaicite:10]{index=10}.
- Exportação de dados em CSV ou PDF:contentReference[oaicite:11]{index=11}.

## Stack tecnológica

- **Frontend:** Angular 20, com renderização server‑side (SSR) habilitada:contentReference[oaicite:12]{index=12}.
- **Estilização:** Tailwind CSS:contentReference[oaicite:13]{index=13}.
- **Gráficos:** ng‑apexcharts ou Chart.js:contentReference[oaicite:14]{index=14}.
- **Back‑end (mock):** JSON Server ou Angular In‑Memory Web API:contentReference[oaicite:15]{index=15}.
- **Autenticação:** JWT (ou simulação mock):contentReference[oaicite:16]{index=16}.

## Pré‑requisitos

- [Node.js](https://nodejs.org/) (versão recomendada ≥ 18);
- [Angular CLI](https://angular.io/cli), instalável via `npm install -g @angular/cli`.

## Instalação

1. Clone este repositório e entre na pasta do projeto:

   ```bash
   git clone https://github.com/Lmsantoz/Walletly.git
   cd Walletly
