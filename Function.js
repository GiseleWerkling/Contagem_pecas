// <![CDATA[
        /* DESAFIO*/
        var ITEM;
        var PESO;
        var QUANTIDADE;
        var CADASTRAR;
        var RESPOSTA

        ITEM = prompt ('Digite o nome do item:' );
        if (ITEM.length>3) {
            document.write (ITEM + ' : Nome correto. <br/>'); 
        } else {
            document.write (ITEM + ' : Nome incorreto. <br/>')
        }   
              
        QUANTIDADE = prompt ('Digite aqui a quantidade de itens');
        if (QUANTIDADE<10) {
            document.write ( ' Espaço suficiente. <br/> '); 
        } else {
            document.write ( ' Não tem espaço. <br/>')
        }
        
        PESO = prompt ('Digite aqui o peso do item em g:');
        if (PESO>=100 && PESO<=1000) {
            document.write (PESO + ' Peso compatível. <br/>');
        } else {
            document.write (' Peso incompatível.<br/>')
        }

        if (QUANTIDADE<10 && ITEM.length>3 && PESO>=100 && PESO<=1000) 
           {document.write ('<br/> Cadastrado com sucesso! ')}
        else{
            document.write ('<br/> Item NÃO cadastrado!')
        }
//]]>