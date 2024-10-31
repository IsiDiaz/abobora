:root{
    --fundo: #8eacac;
    --cor-frente: #00BFFF	;
    --cor-verso: #87CEFA	;
    --destaque: #7FFFD4	;
    --preto: #00000000;
    --branco: #ffffff;
}
body {
    background-color: var(--fundo);
}


header {
    background-color: var(--preto);
    padding: 40px;
    display: flex;
    justify-content: space-around;
}
header a {
    color: var(--branco);
}
footer {
    position: fixed;
    bottom: 0;
    background-color: var(--preto);
    color: var(--branco);
    width: 100%;
    text-align: center;
}