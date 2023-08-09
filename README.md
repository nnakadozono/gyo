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


### Angular
```bash
ng new gyo-angular

ng generate component todo-list
ng generate component todo-item
ng generate component todo-input
ng generate service todo

ng add @angular/material
```

```bash
ng serve
```



