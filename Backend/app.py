from flask import Flask, request
from flask_cors import CORS
import pandas as pd
from prophet import Prophet
from prophet.serialize import model_from_json

app = Flask(__name__)
CORS(app)

with open('trained_model.json', 'r') as fin:
    model = model_from_json(fin.read())


@app.route("/data-input", methods=['POST'])
def get_data():
    data = pd.read_csv(request.files['file'])
    data.dropna()
    number = int(request.form.get('number'))
    period = request.form.get('period')
    data = data[['date', 'sales']]
    data = data.rename(columns={'date': 'ds', 'sales': 'y'})

    if (period == "week(s)"):
        number *= 7
    elif (period == "month(s)"):
        number *= 30
    elif (period == "year(s)"):
        number *= 365

    last_date = data['ds'].max()
    future_dates = pd.date_range(last_date, periods=number+1, freq='D')[1:]
    future = pd.DataFrame({'ds': future_dates})
    forecast = model.predict(future)
    forecast = forecast[['ds', 'yhat']]
    forecast = forecast.rename(columns={'ds': 'dates', 'yhat': 'sales'})
    forecast['dates'] = forecast['dates'].astype(str)
    
    with open(r"C:\Users\Tharun K\Documents\ProcessedData.csv", 'w') as fout:
        fout.write(forecast.head(number).to_csv())

    return(forecast.head(number).to_csv())
