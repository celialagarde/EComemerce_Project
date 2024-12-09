from flask import Flask, jsonify, render_template
from products import PRODUCTS  # Importation de la liste des produits


app = Flask(__name__)


@app.route('/')
def home():
    """Affiche la page principale."""
    return render_template('index.html')


@app.route('/products', methods=['GET'])
def get_products():
    """Retourne la liste des produits disponibles."""
    return jsonify(PRODUCTS)  # Utilisation des produits importés


if __name__ == '__main__':
    app.run(debug=True, port=10000)