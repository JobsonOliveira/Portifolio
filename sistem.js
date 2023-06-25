//-----------INICIA A PÁGINA COM A PRIMEIRA IMAGEM DO PROJETO 1 E O TAMANHO DELA----------
//PROJETO 1
document.querySelector('#imagensP1').innerHTML =  "<img id='imgP1' src='imagens/Customer_Payment_Record/capa_customer_payment_record.png' alt=''>"
document.querySelector('#imgP1').style.width = '100%';
document.querySelector('#imgP1').style.height = '100%';

//--------------BOTÔES PARA AS IMAGENS DO PROJETO 1------------
//BOTÕES DO PROJETO 1
let btnAntP1 = document.querySelector('#ImgAntP1');
let btnProxP1 = document.querySelector('#ProxImgP1');
//CONTADOR DAS IMAGENS DO PROJETO 1
let contImgProj1 = 1;
//PARA MUDAR PARA A IMAGEM ANTERIOR DO PROJETO 1
btnAntP1.addEventListener('click', ()=>{
	switch (contImgProj1) {
        //CASO ESTEJA NA TELA PRINCIPAL2, VAI PARA A TELA PRINCIPAL1
        case 5:
            contImgProj1 = 4;
            document.querySelector('#imagensP1').innerHTML =  "<img id='imgP1' src='imagens/Customer_Payment_Record/tela_Principal1.png' alt=''>"
            document.querySelector('#imgP1').style.width = '100%';
			document.querySelector('#imgP1').style.height = '100%';
            break;
        //CASO ESTEJA NA TELA PRINCIPAL1, VAI PARA A TELA DE REGISTRO
        case 4:
            contImgProj1 = 3;
            document.querySelector('#imagensP1').innerHTML =  "<img id='imgP1' src='imagens/Customer_Payment_Record/Tela_Registro.png' alt=''>"
            document.querySelector('#imgP1').style.width = '100%';
			document.querySelector('#imgP1').style.height = '100%';
            break;
        //CASO ESTEJA NA TELA DE REGISTRO, VAI PARA A TELA DE LOGIN
        case 3:
            contImgProj1 = 2;
            document.querySelector('#imagensP1').innerHTML =  "<img id='imgP1' src='imagens/Customer_Payment_Record/Tela_Login.png' alt=''>"
            document.querySelector('#imgP1').style.width = '100%';
			document.querySelector('#imgP1').style.height = '100%';
            break;
        //CASO ESTEJA NA TELA DE LOGIN, VAI PARA A CAPA
        case 2:
            contImgProj1 = 1;
            document.querySelector('#imagensP1').innerHTML =  "<img id='imgP1' src='imagens/Customer_Payment_Record/capa_customer_payment_record.png' alt=''>"
            document.querySelector('#imgP1').style.width = '100%';
            document.querySelector('#imgP1').style.height = '100%';
            break;
        //CASO ESTEJA NA CAPA, VAI PARA A TELA PRINCIPAL2
        case 1:
            contImgProj1 = 5;
            document.querySelector('#imagensP1').innerHTML =  "<img id='imgP1' src='imagens/Customer_Payment_Record/tela_Principal2.png' alt=''>"
            document.querySelector('#imgP1').style.width = '100%';
            document.querySelector('#imgP1').style.height = '100%';
            break;
        default:
            break;
    }
});

//PARA MUDAR PARA A PRÓXIMA IMAGEM DO PROJETO 1
btnProxP1.addEventListener('click', ()=>{
	switch (contImgProj1) {
        //CASO ESTEJA NA CAPA, VAI PARA A TELA DE LOGIN
        case 1:
            contImgProj1 = 2;
            document.querySelector('#imagensP1').innerHTML =  "<img id='imgP1' src='imagens/Customer_Payment_Record/Tela_Login.png' alt=''>"
            document.querySelector('#imgP1').style.width = '100%';
			document.querySelector('#imgP1').style.height = '100%';
            break;
        //CASO ESTEJA NA TELA DE LOGIN, VAI PARA A TELA DE REGISTRO
        case 2:
            contImgProj1 = 3;
            document.querySelector('#imagensP1').innerHTML =  "<img id='imgP1' src='imagens/Customer_Payment_Record/Tela_Registro.png' alt=''>";
            document.querySelector('#imgP1').style.width = '100%';
			document.querySelector('#imgP1').style.height = '100%';
            break;
        //CASO ESTEJA NA TELA DE REGISTRO, VAI PARA A TELA PRINCIPAL1
        case 3:
            contImgProj1 = 4;
            document.querySelector('#imagensP1').innerHTML =  "<img id='imgP1' src='imagens/Customer_Payment_Record/tela_Principal1.png' alt=''>";
            document.querySelector('#imgP1').style.width = '100%';
			document.querySelector('#imgP1').style.height = '100%';
            break;
        //CASO ESTEJA NA TELA PRINCIPAL1, VAI PARA A TELA PRINCIPAL2
        case 4:
            contImgProj1 = 5;
            document.querySelector('#imagensP1').innerHTML =  "<img id='imgP1' src='imagens/Customer_Payment_Record/tela_Principal2.png' alt=''>";
            document.querySelector('#imgP1').style.width = '100%';
			document.querySelector('#imgP1').style.height = '100%';
            break;
        //CASO ESTEJA NA TELA PRINCIPAL2, VAI PAR A CAPA
        case 5:
            contImgProj1 = 1;
            document.querySelector('#imagensP1').innerHTML =  "<img id='imgP1' src='imagens/Customer_Payment_Record/capa_customer_payment_record.png' alt=''>"
            document.querySelector('#imgP1').style.width = '100%';
            document.querySelector('#imgP1').style.height = '100%';
            break;
        default:
            break;
    }
});

//-----------INICIA A PÁGINA COM A PRIMEIRA IMAGEM DO PROJETO 2 E O TAMANHO DELA----------
//PROJETO 2
document.querySelector('#imagensP2').innerHTML =  "<img id='imgP2' src='imagens/My_Calculator/capa_my_calculator.png' alt=''>"
document.querySelector('#imgP2').style.width = '100%';
document.querySelector('#imgP2').style.height = '100%';
//--------------BOTÔES PARA AS IMAGENS DO PROJETO 2------------
//BOTÕES DO PROJETO 2
let btnAntP2 = document.querySelector('#ImgAntP2');
let btnProxP2 = document.querySelector('#ProxImgP2');
//CONTADOR DAS IMAGENS DO PROJETO 2
let contImgProj2 = 1;
//PARA MUDAR PARA A IMAGEM ANTERIOR DO PROJETO 2
btnAntP2.addEventListener('click', ()=>{
	switch (contImgProj2) {
        //CASO ESTEJA NA calculadoraImg5, VAI PARA A calculadoraImg4
        case 6:
            contImgProj2 = 5;
            document.querySelector('#imagensP2').innerHTML =  "<img id='imgP2' src='imagens/My_Calculator/calculadoraImg4.png' alt=''>"
            document.querySelector('#imgP2').style.width = '100%';
			document.querySelector('#imgP2').style.height = '100%';
            break;
        //CASO ESTEJA NA calculadoraImg4, VAI PARA A calculadoraImg3
        case 5:
            contImgProj2 = 4;
            document.querySelector('#imagensP2').innerHTML =  "<img id='imgP2' src='imagens/My_Calculator/calculadoraImg3.png' alt=''>"
            document.querySelector('#imgP2').style.width = '100%';
			document.querySelector('#imgP2').style.height = '100%';
            break;
        //CASO ESTEJA NA calculadoraImg3, VAI PARA A calculadoraImg2
        case 4:
            contImgProj2 = 3;
            document.querySelector('#imagensP2').innerHTML =  "<img id='imgP2' src='imagens/My_Calculator/calculadoraImg2.png' alt=''>"
            document.querySelector('#imgP2').style.width = '100%';
			document.querySelector('#imgP2').style.height = '100%';
            break;
        //CASO ESTEJA NA calculadoraImg2, VAI PARA A calculadoraImg1
        case 3:
            contImgProj2 = 2;
            document.querySelector('#imagensP2').innerHTML =  "<img id='imgP2' src='imagens/My_Calculator/calculadoraImg1.png' alt=''>"
            document.querySelector('#imgP2').style.width = '100%';
            document.querySelector('#imgP2').style.height = '100%';
            break;
        //CASO ESTEJA NA calculadoraImg1, VAI PARA A capa_my_calculator
        case 2:
            contImgProj2 = 1;
            document.querySelector('#imagensP2').innerHTML =  "<img id='imgP2' src='imagens/My_Calculator/capa_my_calculator.png' alt=''>"
            document.querySelector('#imgP2').style.width = '100%';
            document.querySelector('#imgP2').style.height = '100%';
            break;
        //CASO ESTEJA NA capa_my_calculator, VAI PARA A calculadoraImg5
        case 1:
            contImgProj2 = 6;
            document.querySelector('#imagensP2').innerHTML =  "<img id='imgP2' src='imagens/My_Calculator/calculadoraImg5.png' alt=''>"
            document.querySelector('#imgP2').style.width = '100%';
            document.querySelector('#imgP2').style.height = '100%';
            break;
        default:
            break;
    }
});

//PARA MUDAR PARA A PRÓXIMA IMAGEM DO PROJETO 2
btnProxP2.addEventListener('click', ()=>{
	switch (contImgProj2) {
        //CASO ESTEJA NA capa_my_calculator, VAI PARA A calculadoraImg1
        case 1:
            contImgProj2 = 2;
            document.querySelector('#imagensP2').innerHTML =  "<img id='imgP2' src='imagens/My_Calculator/calculadoraImg1.png' alt=''>"
            document.querySelector('#imgP2').style.width = '100%';
			document.querySelector('#imgP2').style.height = '100%';
            break;
        //CASO ESTEJA NA calculadoraImg1, VAI PARA A calculadoraImg2
        case 2:
            contImgProj2 = 3;
            document.querySelector('#imagensP2').innerHTML =  "<img id='imgP2' src='imagens/My_Calculator/calculadoraImg2.png' alt=''>"
            document.querySelector('#imgP2').style.width = '100%';
			document.querySelector('#imgP2').style.height = '100%';
            break;
        //CASO ESTEJA NA calculadoraImg2, VAI PARA A calculadoraImg3
        case 3:
            contImgProj2 = 4;
            document.querySelector('#imagensP2').innerHTML =  "<img id='imgP2' src='imagens/My_Calculator/calculadoraImg3.png' alt=''>"
            document.querySelector('#imgP2').style.width = '100%';
			document.querySelector('#imgP2').style.height = '100%';
            break;
        //CASO ESTEJA NA calculadoraImg3, VAI PARA A calculadoraImg4
        case 4:
            contImgProj2 = 5;
            document.querySelector('#imagensP2').innerHTML =  "<img id='imgP2' src='imagens/My_Calculator/calculadoraImg4.png' alt=''>"
            document.querySelector('#imgP2').style.width = '100%';
            document.querySelector('#imgP2').style.height = '100%';
            break;
        //CASO ESTEJA NA calculadoraImg4, VAI PARA A calculadoraImg5
        case 5:
            contImgProj2 = 6;
            document.querySelector('#imagensP2').innerHTML =  "<img id='imgP2' src='imagens/My_Calculator/calculadoraImg5.png' alt=''>"
            document.querySelector('#imgP2').style.width = '100%';
            document.querySelector('#imgP2').style.height = '100%';
            break;
        //CASO ESTEJA NA calculadoraImg5, VAI PARA A capa_my_calculator
        case 6:
            contImgProj2 = 1;
            document.querySelector('#imagensP2').innerHTML =  "<img id='imgP2' src='imagens/My_Calculator/capa_my_calculator.png' alt=''>"
            document.querySelector('#imgP2').style.width = '100%';
            document.querySelector('#imgP2').style.height = '100%';
            break;
        default:
            break;
    }
});

//----------------FUNÇÕES PARA ENCAMINHAS PARA OS MEIOS DE COMUNICAÇÃO-----------------
//ENCAMINHA PARA O GITHUB
let btnGitHub = document.querySelector('#GitHub').addEventListener('click', ()=>{
    const win = window.open("https://github.com/JobsonOliveira");
});
//ENCAMINHA PARA O LINKEDIN
let btnLinkedin = document.querySelector('#Linkedin').addEventListener('click', ()=>{
    const win = window.open("https://www.linkedin.com/in/jobson-de-oliveira-coutinho-5882b9251");
});
//ENCAMINHA PARA O GMAIL
let btnGmail = document.querySelector('#Gmail').addEventListener('click', ()=>{
    const win = window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCHrgCwCKrbBfChcfVWgfNzFwJvZRBDJxvQcRbgHsSXXbKfQQZmTknBdjjZvnPvLWCdKznRL");
});
//ENCAMINHA PARA O INSTAGRAM
let btnInstagram = document.querySelector('#Instagram').addEventListener('click', ()=>{
    const win = window.open("https://instagram.com/jobson_oliveira44?igshid=OTk0YzhjMDVlZA==");
});