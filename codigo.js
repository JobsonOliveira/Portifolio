let modal = document.querySelector("#imagemEinfoDoCurso");
    function info(acao){
        switch(acao){
            //MINHA FOTO
            case 1:
                modal.innerHTML = "<div id='modalInfo'><p>  <img src='https://cdn-icons-png.flaticon.com/128/51/51517.png' onclick='fechar()'>  </p><img src='imagens/minhafoto.png' alt='Minha foto'>"
                modal.show();
                break;
            //INTRODUÇÃO AO PYTHON
            case 2:
                modal.innerHTML = "<div id='modalInfo'><p>  <img src='https://cdn-icons-png.flaticon.com/128/51/51517.png' onclick='fechar()'>  </p> <img src='imagens/certificados/IntroducaoAoPython.png' alt='foto do certificado introdução ao python'> <h6>Durante este curso, eu adquiri alguns conceitos básicos sobre a liguágem Python, como instalar o Pycharm e como iniciar um projeto, foram passadas algumas informações e desafios de lógica de programação para exercitar o uso da linguágem, também foram fornecidas informações relacionadas as possibilidades que um desenvolvedor Python possui no mercado de trabalho.</h6></div>"
                modal.show();
                break;
            //LÓGICA DE PROGRAMAÇÃO COM JAVA
            case 3:
                modal.innerHTML = "<div id='modalInfo'><p>  <img src='https://cdn-icons-png.flaticon.com/128/51/51517.png' onclick='fechar()'>  </p> <img src='imagens/certificados/LogicProgJava.png' alt='foto do certificado lógica de programação com java'> <h6>Durante este curso, eu adquiri novos conhecimentos sobre a lógica de programação com a liguágem Java, utilizando o Eclipse, foi repassado pelo professor alguns conhecimentos sobre a programação, alguns exercícios e desafios de lógica de programação com Java, onde tentamos resolver alguma dificuldade diária que pessoas comuns enfrentão, como por exemplo calcular o valor exato da porcentagem de algo que a pessoa pretenda usar.</h6></div>"
                modal.show();
                break;
            //PROJETO COM PROGRAMAÇÃO ORIENTADA A OBJETOS COM JAVA
            case 4:
                modal.innerHTML = "<div id='modalInfo'><p>  <img src='https://cdn-icons-png.flaticon.com/128/51/51517.png' onclick='fechar()'>  </p> <img src='imagens/certificados/projProgOrientObj.png' alt='foto do certificado programação orientada a objetos com java'> <h6>Neste curso eu aprendi sobre a programação orientada a objetos com a linguágem Java, foi apresentado o kit de ferramentas de interface gráfica Java Swing, que foi utilizado para realizar algumas atividades que o professor propôs para que os estudantes praticassem a utilização da programação orientada a objetos.</h6> </div>"
                modal.show();
                break;
            //INTRODUÇÃO AO JAVASCRIPT
            case 5:
                modal.innerHTML = "<div id='modalInfo'><p>  <img src='https://cdn-icons-png.flaticon.com/128/51/51517.png' onclick='fechar()'>  </p> <img src='imagens/certificados/IntroJavaScript.png' alt='foto do certificado introdução JavaScript'> <h6>Neste curso foi repassado alguns conhecimentos sobre a linguágem JavaScript, como criar o link para um arquivo HTML, como selecionar e adicionar um evento a um elemento do HTML, como mudar algumas propriedades dele, etc. <br> Este curso me ajudou muito dorante o meu aprendizado da liguágem, fornecendo informações que eu sabia pela metade e informações que eu não sabia sobre a utilização do JavaScript.</h6></div>"
                modal.show();
                break;
            //IMPLEMENTAÇÃO DE BACO DE DADOS
            case 6:
                modal.innerHTML = "<div id='modalInfo'><p>  <img src='https://cdn-icons-png.flaticon.com/128/51/51517.png' onclick='fechar()'>  </p> <img src='imagens/certificados/ImplementBancoDeDados.png' alt='foto do certificado Implementação de banco de dados'> <h6>Durante este curso, foram fornecidas algumas informações sobre o planejamento e implementação de um banco de dados, desde a função que ele tem em uma aplicação, site ou sistema, até criação do banco na prática.</h6></div>"
                modal.show();
                break;
            //ADMINISTRAÇÃO DE BANCO DE DADOS
            case 7:
                modal.innerHTML = "<div id='modalInfo'><p>  <img src='https://cdn-icons-png.flaticon.com/128/51/51517.png' onclick='fechar()'>  </p> <img src='imagens/certificados/AdmBD.png' alt='foto do certificado Administração de banco de dados'> <h6>Este curso abordou a administração de um banco de dados, fornecendo conhecimentos sobre os comandos básicos como DML e DDL, frizando sempre que a utilização de qualquer comando só deve ser realizada caso a pessoa saiba exatamente oque o comando faz e qual o resultado que o administrador deseja alcançar ao realizar a utilização dele.</h6></div>"
                modal.show();
                break;
            //HTML AVANÇADO
            case 8:
                modal.innerHTML = "<div id='modalInfo'><p>  <img src='https://cdn-icons-png.flaticon.com/128/51/51517.png' onclick='fechar()'>  </p> <img src='imagens/certificados/HTML_Avancado.png' alt='foto do certificado HTML avançado'> <h6>Neste curso foi ensinado como criar alguns dos elementos HTML que são mais utilizados atualmente, como as listas, as tabelas, os tipos de butões, a criação de uma div, a criação e utilização de poppups e outros elementos.</h6></div>"
                modal.show();
                break;
            //INTRODUÇÃO A REDE DE COMPUTADORES
            case 9:
                modal.innerHTML = "<div id='modalInfo'><p>  <img src='https://cdn-icons-png.flaticon.com/128/51/51517.png' onclick='fechar()'>  </p> <img src='imagens/certificados/IntroRedes.png' alt='foto do certificado Introdução a redes de computadores'> <h6>Neste curso foram fornecidas algumas informações básicas sobre a rede de computadores, a história da criação dela, os tipos de rede Wan, lan, man e as topologias de rede do tipo estrela, barramento e anel. <br> Foi informado sobre a existência dos protocolos de rede tcp, udp, http, https, e outros, também foi informado sobre a existência dos protocolos ipv4 e ipv6 além de outros assuntos inerentes a rede de coputadores.</h6></div>"
                modal.show();
                break;
            //INFORMAÇÕES DO CUSTOMER PAYMENT RECORD
            case 10:
                modal.innerHTML = "<div id='modalInfo'><p>  <img src='https://cdn-icons-png.flaticon.com/128/51/51517.png' onclick='fechar()'>  </p> <div id='imagem'> <img id='imgProj1' src='imagens/Customer_Payment_Record/Capa.png' alt='foto do certificado Introdução a redes de computadores'> </div> <div id='btnPoxPg1' onclick='projeto(1)'>PRÓXIMA</div> <h6>Quando eu iniciei este projeto o meu objetivo era testar e adquirir novos conhecimentos, tanto de HTML5 e CSS3, quanto de JavaScript, ele se trata de um site para registrar os pagamentos realizados pelos clientes de uma empresa, através dele o usuário poderá realizar consultas de pagamentos que já foram registrados, podendo filtrar a busca pelo nome do cliente, pelo valor do pagamento, por uma data específica, etc. <br> Acesse este <a href='https://customer-payment-record.netlify.app/' target='_blank'>link</a> para visualizar o site.</h6> </div>"
                modal.show();
                num = 1;
                break;
            //INFORMAÇÕES DO MY CALCULATOR
            case 11:
                modal.innerHTML = "<div id='modalInfo'><p>  <img src='https://cdn-icons-png.flaticon.com/128/51/51517.png' onclick='fechar()'>  </p> <div id='imagem'> <img id='imgProj2' src='imagens/My_Calculator/Capa.png' alt='foto do certificado Introdução a redes de computadores'> </div> <div id='btnPoxPg2' onclick='projeto(2)'>PRÓXIMA</div> <h6>Este é um projeto referente a uma calculadora, através dele eu adquiri muito conhecimento em relação a JavaScript, HTML5, CSS3 e a lógica de programaão. <br> Através desta calculadora o usuário poderá realizar contas simples, como a soma, a subtração, a divisão e a multiplicação. <br> Ela também siponibiliza a utilização de números decimais, um botão para apagar o número ou operador atual e um botão para apagar toda a conta que está sendo feita. <br> Acesse este <a href='https://calculadora-proj.netlify.app/' target='_blank'>link</a> para visualizar a calculadora.</h6> </div>"
                modal.show();
                num = 1;
                break;
            //INFORMAÇÕES DO USER REGISTRATION
            case 12:
                modal.innerHTML = "<div id='modalInfo'><p>  <img src='https://cdn-icons-png.flaticon.com/128/51/51517.png' onclick='fechar()'>  </p> <div id='imagem'> <img id='imgProj3' src='imagens/Register_Client/Capa.png' alt='foto do certificado Introdução a redes de computadores'> </div> <div id='btnPoxPg3' onclick='projeto(3)'>PRÓXIMA</div> <h6>O objetivo desse projeto era e ainda é aprender mais sobre banco de dados e php, nele é possível fornecer informações como: Nome do usuário, Cpf e Senha, essas informações são registradas no banco de dados local, após registrar, o usuário é redirecionado para a tela de histórico de registros, onde ele pode clicar no butão para atualizar a página e assim ele irá visualizar os dados do novo usuário que foi registrado. <br> Este projeto foi feito utilizando HTML5, CSS3, JavaScript, PHP e o banco de dados phpMyAdmin. Foi minha primeira experiência de vinculação de banco de dados com um site, tive algumas dificuldades, mas nada me impediu de procurar mais conehecimento e aplica-los neste projeto. <br> Acesse este <a href='https://github.com/JobsonOliveira/User_Registration' target='_blank'>link</a> para vê-lo no GitHub.</h6></div> </h6></div>"
                modal.show();
                num = 1;
                break;
            //INFORMAÇÕES DO CALCULADORA JAVA
            case 13:
                modal.innerHTML = "<div id='modalInfo'><p>  <img src='https://cdn-icons-png.flaticon.com/128/51/51517.png' onclick='fechar()'>  </p> <div id='imagem'> <img id='imgProj4' src='imagens/Calculadora_Java/Capa.png' alt='foto do certificado Introdução a redes de computadores'> </div> <div id='btnPoxPg4' onclick='projeto(4)'>PRÓXIMA</div> <h6>Este é mais um dos projetos que realizei para adquirir mais conhecimento e prática com a utilização da linguágem Java.<br> A IDE que eu utilizei foi o Eclipse e foi utilizado o kit de interface gráfica Java Swing para gerar uma interação mais agradável com o usuário. A função de registrar o primeiro e o segundo número que é digitado foi delegada a dois ArrayList do tipo String, através deles foi possível aplicar a função de deletar com mais facilidade o ultimo caractere digitado. Um último assunto que foi importante estudar foi a estrutura condicional Switch Case, ela foi utilizada para delegar qual será o calculo realizado de acordo com a operação escolhida pelo usuário (+, -, * ou /). <br> Acesse este <a href='https://github.com/JobsonOliveira/Calculadora_Java' target='_blank'>link</a> para vê-lo no GitHub.</h6></div>"
                modal.show();
                num = 1;
                break;
        }
    }
   //CONTADOR PARA IDENTIFICAR QUAL TELA SERÁ MOSTRADA
    let num = 1;
    function projeto(proj){
        //LÓGICA PARA PASSAR A IMAGEM DO PROJETO 1 (Customer Payment Record)
        if(proj == 1){
            switch (num){
                //MUDAR PARA A TELA DE LOGIN
                case 1:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj1' src='imagens/Customer_Payment_Record/Tela_Login.png' alt='Foto da tela de login do Customer Payment Record'>";
                    num++
                break;
                //MUDAR PARA A TELA DE REGISTRO
                case 2:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj1' src='imagens/Customer_Payment_Record/Tela_Registro.png' alt='Foto da tela de registro do Customer Payment Record'>";
                    num++
                break;
                //MUDAR PARA A PRINCIPAL-1
                case 3:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj1' src='imagens/Customer_Payment_Record/tela_Principal1.png' alt='Foto da tela principal-1 do Customer Payment Record'>";
                    num++
                break;
                //MUDAR PARA A PRINCIPAL-2
                case 4:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj1' src='imagens/Customer_Payment_Record/tela_Principal2.png' alt='Foto da tela principal-2 do Customer Payment Record'>";
                    num++
                break;
                //VOLTAR PARA A CAPADO PROJETO
                case 5:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj1' src='imagens/Customer_Payment_Record/Capa.png' alt='Foto da capa do projeto Customer Payment Record'>";
                    num = 1;
                break;
            }
        }
        //LÓGICA PARA PASSAR A IMAGEM DO PROJETO 2 (My Calculator)
        if(proj == 2){
            switch(num){
                //MUDAR PARA A PRIMEIRA IMAGEM DO PROJETO
                case 1:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj2' src='imagens/My_Calculator/calculadoraImg1.png' alt='Imagem do projeto My Calculator'>";
                    num++
                break;
                //MUDAR PARA A SEGUNDA IMAGEM DO PROJETO
                case 2:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj2' src='imagens/My_Calculator/calculadoraImg2.png' alt='Imagem do projeto My Calculator'>";
                    num++
                break;
                //MUDAR PARA A TERCEIRA IMAGEM DO PROJETO
                case 3:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj2' src='imagens/My_Calculator/calculadoraImg3.png' alt='Imagem do projeto My Calculator'>";
                    num++
                break;
                //MUDAR PARA A QUARTA IMAGEM DO PROJETO
                case 4:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj2' src='imagens/My_Calculator/calculadoraImg4.png' alt='Imagem do projeto My Calculator'>";
                    num++
                break;
                //MUDAR PARA A QUINTA IMAGEM DO PROJETO
                case 5:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj2' src='imagens/My_Calculator/calculadoraImg5.png' alt='Imagem do projeto My Calculator'>";
                    num++
                break;
                //MUDAR PARA A CAPA DO PROJETO
                case 6:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj2' src='imagens/My_Calculator/Capa.png' alt='Capa do projeto My Calculator'>";
                    num = 1;
                break;
            }
        }
        //LÓGICA PARA PASSAR A IMAGEM DO PROJETO 3 (Register Client)
        if (proj == 3) {
            switch(num){
                //MUDAR PARA A TELA DE REGISTRO DO PROJETO REGISTER CLIENT
                case 1:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj3' src='imagens/Register_Client/Tela_Registro.png' alt='Tela de login do projeto Register Client'>";
                    num++
                break;
                //MUDAR PARA A TELA DE USUÁRIOS REGISTRADOS DO PROJETO REGISTER CLIENT
                case 2:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj3' src='imagens/Register_Client/Tela_Usuarios_Registrados.png' alt='Tela de login do projeto Register Client'>";
                    num++
                break;
                //MUDAR PARA A TELA DE BANCO DE DADOS DO PROJETO REGISTER CLIENT
                case 3:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj3' src='imagens/Register_Client/Banco_de_dados.png' alt='Tela de login do projeto Register Client'>";
                    num++
                break;
                //MUDAR PARA A CAPA DO PROJETO REGISTER CLIENT
                case 4:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj3' src='imagens/Register_Client/Capa.png' alt='Tela de login do projeto Register Client'>";
                    num = 1; 
                break;
            }
        }
        //LÓGICA PARA PASSAR A IMAGEM DO PROJETO 4 (Calculadora Java)
        if (proj == 4) {
            switch(num){
                //MUDAR PARA A IMAGEM-1 DO PROJETO CALCULADORA JAVA
                case 1:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj4' src='imagens/Calculadora_Java/img1.png' alt='Imagem-1 do projeto calculadora java'>";
                    num++
                break;
                //MUDAR PARA A IMAGEM-2 DO PROJETO CALCULADORA JAVA
                case 2:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj4' src='imagens/Calculadora_Java/img2.png' alt='Imagem-2 do projeto calculadora java'>";
                    num++
                break;
                //MUDAR PARA A IMAGEM-3 DO PROJETO CALCULADORA JAVA
                case 3:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj4' src='imagens/Calculadora_Java/img3.png' alt='Imagem-3 do projeto calculadora java'>";
                    num++
                break;
                //MUDAR PARA A IMAGEM-4 DO PROJETO CALCULADORA JAVA
                case 4:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj4' src='imagens/Calculadora_Java/img4.png' alt='Imagem-4 do projeto calculadora java'>";
                    num++
                break;
                //MUDAR PARA A IMAGEM-5 DO PROJETO CALCULADORA JAVA
                case 5:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj4' src='imagens/Calculadora_Java/img5.png' alt='Imagem-5 do projeto calculadora java'>";
                    num++
                break;
                //MUDAR PARA A IMAGEM-6 DO PROJETO CALCULADORA JAVA
                case 6:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj4' src='imagens/Calculadora_Java/img6.png' alt='Imagem-6 do projeto calculadora java'>";
                    num++
                break;
                //MUDAR PARA A IMAGEM-7 DO PROJETO CALCULADORA JAVA
                case 7:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj4' src='imagens/Calculadora_Java/img7.png' alt='Imagem-7 do projeto calculadora java'>";
                    num++
                break;
                //MUDAR PARA A CAPA DO PROJETO CALCULADORA JAVA
                case 8:
                    document.querySelector("#imagem").innerHTML = "<img id='imgProj4' src='imagens/Calculadora_Java/Capa.png' alt='Capa do projeto calculadora java'>";
                    num = 1;
                break;
            }
        }
    }
    function fechar(){
        modal.close();
    }

    //---------------------------AÇÃO PARA REDIRECIONAR PARA A PÁGINA DO ÍCONE DE REDE SOCIAL---------------------------
    document.querySelector("#linkedin").addEventListener("click", () => {
        const win = window.open("https://www.linkedin.com/in/jobson-de-oliveira-coutinho-5882b9251");
    });

    document.querySelector("#github").addEventListener("click", () =>{
        const win = window.open("https://github.com/JobsonOliveira");
    });

    document.querySelector("#email").addEventListener("click", () =>{
        const win = window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCKCHTwXWPKLfBhHVpjBwVPhTkXlWpgfrtfPrrrNPldPDMlNfKZvbfmWFdJGRrKlMXBRpwwL");
    });

    document.querySelector("#instagram").addEventListener("click", () => {
        const win = window.open("https://www.instagram.com/jobson_oliveira44/?igshid=OTk0YzhjMDVlZA%3D%3D");
    });
   
    //ADICIONAR A CAPA DOS PROJETOS AO ABRIR O PORTIFÓLIO
    document.querySelector('#imagensP1').innerHTML =  "<img id='imgP1' src='imagens/Customer_Payment_Record/Capa.png' alt='Capa do projeto Customer Payment Record' onclick='info(10)'>";

    document.querySelector('#imagensP2').innerHTML =  "<img id='imgP2' src='imagens/My_Calculator/Capa.png' alt='Capa do projeto My Calculator' onclick='info(11)'>";

    document.querySelector('#imagensP3').innerHTML =  "<img id='imgP3' src='imagens/Register_Client/Capa.png' alt='Capa do projeto Register Cliente' onclick='info(12)'>";

    document.querySelector('#imagensP4').innerHTML =  "<img id='imgP4' src='imagens/Calculadora_Java/Capa.png' alt='Capa do projeto Calculadora Java' onclick='info(13)'>";