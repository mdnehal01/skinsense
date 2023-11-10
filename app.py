import joblib
import numpy as np

modelwa = joblib.load('model_sensitive.pkl')
modelwa2 = joblib.load('model_problem.pkl')

user_input = input()  # This line reads the input sent from Node.js

integer_array = [float(x) for x in user_input.split(",")]


prediction = modelwa.predict([integer_array])
predictionProblem = modelwa2.predict([integer_array])

if prediction[0]==1:
    result = 'sensitive'

elif prediction[0]==0:
    result = 'Normal'

if predictionProblem[0]=='Hyperpigmentation and Tanning':
    problem = 'HyperpigmentationandTanning'

elif predictionProblem[0]=='Post-Inflammatory Hyperpigmentation - PIH and Acne':
    problem = 'Post-InflammatoryHyperpigmentation-PIHandAcne'

elif predictionProblem[0]=='No Issues':
    problem = 'NoIssues'

print(result, problem)
