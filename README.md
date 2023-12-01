# Gyo
One liner log

## 環境構築メモ

### Next

```bash
npx create-next-app@latest --typescript
```

### MUI

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

### FastAPI

```bash
pip install fastapi uvicorn
```

```bash
uvicorn main:app --reload
```

#### OpenAPI
http://127.0.0.1:8000/docs

#### CORS
CORSの設定は、とりあえずガバガバで。

### Docker
```bash
docker run --name gyo-postgres -e POSTGRES_DB=mydatabase -e POSTGRES_USER=myuser -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -d postgres:15
```

### Postgres
https://eggerapps.at/postico2/

```bash
pip install sqlalchemy alembic psycopg2-binary
alembic init alembic
```
```alembic.ini
sqlalchemy.url = postgresql://myuser:mypassword@localhost:5432/mydatabase
```

```bash
alembic revision -m "create todos table"
```

```bash
alembic upgrade head
```

```bash
pip install fastapi uvicorn sqlalchemy async-exit-stack async-generator pydantic psycopg2-binary databases asyncpg
```

```bash
pip install python-dotenv
```

### Poetry

```bash
curl -sSL https://install.python-poetry.org | python3 -
mkdir ~/.zfunc/
poetry completions zsh > ~/.zfunc/_poetry
brew cleanup

poetry init
poetry add fastapi uvicorn
poetry add sqlalchemy==1.4.42 alembic psycopg2-binary
poetry add fastapi uvicorn sqlalchemy async-exit-stack async-generator pydantic psycopg2-binary databases asyncpg
poetry add python-dotenv

poetry run uvicorn main:app --reload
alembic revision -m "create todos table"
alembic upgrade head
```

### Environment variables
#### gyo-api/.env
GYO_DB=postgresql://.....


### Deploy
* gyo-app => Vercel
* gyo-api => Render
* postgres => Render

### Terraform
```bash
$ brew install terraform
```

https://zenn.dev/keita_hino/articles/3044d2af6dec61

```bash
$ terraform init
$ terraform plan
$ terraform apply
```


