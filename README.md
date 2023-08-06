# Registro de usuário simples e login com Express e bcrypt

Este é um servidor Node.js simples usando o Express para lidar com o registro do usuário e login com hashing de senha usando bcrypt.

## Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Execute o servidor:
   ```bash
   node server.js
   ```

## Uso

- Use o endpoint `/users` para visualizar todos os usuários registrados.
- Use o endpoint `/users` com método POST para registrar um novo usuário. Envie um JSON com o nome e a senha do usuário no corpo da requisição.
- Use o endpoint `/users/login` com método POST para fazer login. Envie um JSON com o nome e a senha do usuário no corpo da requisição.

## Funcionalidades

- Registro de novos usuários com senhas criptografadas usando bcrypt.
- Autenticação de usuários com comparação segura de senhas usando bcrypt.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar sugestões, correções de bugs ou novas funcionalidades através de pull requests.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

## Contato

Se tiver alguma dúvida ou precisar entrar em contato, envie um e-mail para henrique.netsto@gmail.com

## Status do Projeto

Versão mais recente: 1.0.0
Estado: Concluído

## FAQ (Perguntas Frequentes)

1. **Como posso alterar a porta em que o servidor está ouvindo?**
   Por padrão, o servidor está configurado para ouvir na porta 8080. Para alterar a porta, edite o arquivo `server.js` e modifique o número da porta na última linha do arquivo:

   ```javascript
   app.listen(8080);
   ```

   Substitua `8080` pelo número da porta desejada.

2. **É seguro armazenar senhas no array `users` em memória?**
   Este exemplo é apenas para fins de demonstração. Em um ambiente de produção, é altamente recomendável armazenar as informações dos usuários em um banco de dados seguro em vez de em memória.

3. **Posso usar esse código em produção?**
   Este código é apenas um exemplo básico e pode não estar pronto para ser usado em produção. Para um ambiente de produção, é necessário considerar questões de segurança, desempenho e escalabilidade, além de implementar recursos adicionais, como gerenciamento de sessões e autenticação mais robusta.

## Histórico de Versões

- 1.0.0 (2023-08-06): Versão inicial do projeto.
