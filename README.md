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

### ASP.NET Core Web API
https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-6.0&tabs=visual-studio-code

Install .NET 6.0
https://dotnet.microsoft.com/en-us/download

```bash
ln -s /usr/local/share/dotnet/dotnet /usr/local/bin
```


```bash
dotnet new webapi -o gyo-aspdotnet
cd gyo-aspdotnet
dotnet add package Microsoft.EntityFrameworkCore.InMemory

dotnet dev-certs https --trust

dotnet new gitignore
```

Open gyo-aspdotnet.csproj in VS Code, and Run > Run Without Debugging

https://localhost:{port}/swagger/index.html


```bash
dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design --version 6.0.16
dotnet add package Microsoft.EntityFrameworkCore.Design --version 6.0.21 
dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 6.0.21 
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL --version 6.0.8
dotnet tool install -g dotnet-aspnet-codegenerator
```

```.bashrc
export PATH=~/.dotnet/tools/:$PATH
```

```bash
dotnet aspnet-codegenerator controller -name TodoItemsController -async -api -m TodoItem -dc TodoContext -outDir Controllers
```

