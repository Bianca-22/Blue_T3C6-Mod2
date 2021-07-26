from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    nomelista = 'Liata de coisas a fazer'
    listapronta = True
    return render_template(
        'index.html', 
        nomelista = nomelista, 
        listapronta = listapronta
        )

@app.route('/pagina2')
def pagina2():
    return '<h1>Essa é a página 2!!</h1>'

if __name__ == "__main__":
    app.run(debug=True)