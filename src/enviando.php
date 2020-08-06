<?php

// Abaixo os Campos do Formulario
$msg = "> Nome do usuario:\t$_POST[nome]\n";
$msg .= "> E-mail:\t$_POST[email]\n";
$msg .= "> Mensagem:\t$_POST[mensagem]\n";

$cabecalho = "From: Contatos Portfólio; 
$redirect = "http://www.impactodesigner.com.br/portfolio/obrigado.php";  
 
mail("gilberto.moral@gmail.com", "Formulário Portfólio", $msg, "From: ".$_POST[email]); 
	 Header( "Location: ".$redirect );
	 exit;
?>