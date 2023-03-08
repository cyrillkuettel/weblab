# weblab

# Run Frontend
```bash
cd src/notes-frontend
npm install
ng serve
```

# Run Backend
Requirements: Python3, Pip
```bash
python3 -m venv venv
source /venv/bin/activate
pip install -r requirements.txt 
```



Now, run the app.
```shell
cd src/notes-backend/
source venv/bin/activate
cd notes/app/
export FLASK_CONFIG=development && python -m flask --app main --debug run
```
