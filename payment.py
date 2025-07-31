from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def payment_form():
    return render_template('payment_form.html')

@app.route('/process_payment', methods=['POST'])
def process_payment():
    payment_method = request.form['payment_method']
    upi_id = request.form.get('upi_id')
    card_number = request.form.get('card_number')
    expiry_date = request.form.get('expiry_date')
    cvv = request.form.get('cvv')
    
    if payment_method == 'googlePay' or payment_method == 'creditCard':
        return "Payment successful", 200 
    else:
        return "Payment failed", 400 
if __name__ == '__main__':
    app.run(debug=True)
