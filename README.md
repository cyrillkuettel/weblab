# weblab

# Run Frontend
```bash
cd src/notes-frontend
npm install
ng serve
```

# Run Backend
Requirements: Python, Pip
```bash
python3 -m venv venv
source /venv/bin/activate
pip install -r requirements.txt 
```


Set the database URL to the environment variable `DEV_DATABASE_URL` , which is the URL 
for the MySQL database. Run the following command on your terminal to define that env var:
```bash
export DEV_DATABASE_URL=mysql+pymysql://<username>:<password>@localhost:3306/flaskapp
```

If you're on Windows, you can use the SET command instead of export:$
```shell
SET DEV_DATABASE_URL=mysql+pymysql://<username>:<password>@localhost:3306/flaskapp
```

Now, run the app.
```shell
cd src/notes-backend/
source venv/bin/activate
cd notes/app/
export FLASK_CONFIG=development && python -m flask --app main run
```
