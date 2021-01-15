const emails = `
Os e-mails dos convidados são:
    - funalo@cod3r.com.br
    - xicho@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com
    - fulano+de+tal@escola.ninja.br
`

console.log(emails.match(/\S+@\w+\.\w{2,20}(\.\w{2})?/gm))