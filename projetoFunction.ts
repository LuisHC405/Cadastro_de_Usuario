/*Mini Projeto do Dia
Sistema de Cadastro

Crie funções para:

cadastrar usuário
mostrar produto ???
verificar idade
verificar login

Todas usando parâmetros. */
function userRegister(userName: string, userPassword: string, userAge: number){
    console.log(`=== Register ===
Register Name: ${userName}
Register Password: ${userPassword}
Register Age: ${userAge}`)
    return{ userName, 
    userPassword,
    userAge,
    }
}
const usuario = userRegister("Luis", "JoaoFodinha", 21);
//Ja verifica tudo do desafio
if (usuario.userName == "Luis" && usuario.userPassword == "JoaoFodinha" && usuario.userAge == 21){
    console.log("Login Verificado");
} else {
    console.log ("Erro no Login: Credenciais Invalidas")
}
