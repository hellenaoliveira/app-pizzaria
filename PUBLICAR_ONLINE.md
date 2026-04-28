# Publicar o app para acesso externo

O link local `http://192.168.1.159:8000/index.html` só funciona na mesma rede Wi-Fi.
Para enviar para alguém em outra rede, publique a pasta do app em um serviço de hospedagem estática.

## Opção rápida: Netlify Drop

1. Abra https://app.netlify.com/drop
2. Arraste o arquivo `a-tal-pizza-brasileira.zip` para a página.
3. Aguarde o upload terminar.
4. Copie o link gerado e envie para o professor.

## Opção pelo VS Code: Port Forwarding

Essa opção só funciona enquanto o seu computador estiver ligado e com o servidor rodando.

1. No VS Code, abra esta pasta.
2. Rode a tarefa `Iniciar app na rede`.
3. Abra a aba `Ports` no VS Code.
4. Encaminhe a porta `8000`.
5. Altere a visibilidade para `Public`, se o VS Code pedir.
6. Copie o link público gerado.

## Observação

Para uma entrega ao professor, a melhor opção é publicar no Netlify, Vercel ou GitHub Pages.
Assim o link continua funcionando mesmo sem depender da sua rede Wi-Fi.
