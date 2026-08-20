function mudarCor() {
            let body = document.body
            body.style.backgroundColor = 'blue'
        }
        function adicionarTitulo() {
            let h1 = document.createElement('h1')
            let body = document.body
            h1.innerHTML = 'Ola JavaScript'

            body.appendChild(h1)
        }

        function removerSubtitulo() {
            let body = document.body
            let h2 = document.getElementsByClassName('subtitulo')[0]
            body.removeChild(h2)
        }

        let botoes = document.getElementsByTagName('button')
        console.log(botoes)
        let botao1 = document.getElementById('btn-mudar-cor')
        let botao2 = botoes[1]
        let botao3 = document.getElementById('btn-remover-subtitulo')
        

        botao1.onclick = mudarCor
        botao2.onclick = adicionarTitulo
        botao3.onclick = removerSubtitulo
        let subtitulo = document.getElementsByClassName('subtitulo')
        console.log(subtitulo)