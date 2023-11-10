import joblib
import numpy as np

# # modelwa = joblib.load('model_sensitive.pkl')
# # modelwa2 = joblib.load('model_problem.pkl')
model = joblib.load('model_hair.pkl')

user_input = input()  # This line reads the input sent from Node.js

integer_array = [float(x) for x in user_input.split(",")]

prediction = model.predict([integer_array])

print(prediction[0])