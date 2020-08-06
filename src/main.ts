import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  function valida(form) {
		
    if (form.nome.value=="") {
      alert("Preencha o campo Nome corretamente.");
      form.nome.focus();
      return false;
    }
    
    if (form.email.value=="") {
      alert("Preencha o campo E-mail corretamente.");
      form.email.focus();
      return false;
    }
  
    if (form.mensagem.value=="") {
      alert("Preencha o campo Mensagem corretamente.");
      form.mensagem.focus();
      return false;
    }
  
  }