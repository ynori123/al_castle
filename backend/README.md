# API Document
## ER Diagram
```mermaid
erDiagram
castles ||--|{ restaurants : ""
users ||--o{ fell_castles : ""
fell_castles ||--|| castles : ""

users{
    bigint id PK
    varchar name 
    barchar password 
}
fell_castles{
    bigint id PK
    bigint user_id FK
    bigint castle_id FK
    timestamp created_at
}
castles {
    bigint id PK
    varchar name
    varchar summary "概要・定休日・営業時間"
    varchar url 
    float lat "緯度(北緯)"
    float lng "経度(東経)"
}
restaurants { 
    bigint id PK
    varchar name
    varchar summary
    varchar url 
}
```
## Endpoints
|Request Method|Route|Summary|
|---|---|---|
|GET|/castles|城の情報|
|GET|/castles/{castle_id}|城の詳細情報|
|POST|/travel|最短経路検索|
|POST|/user/signin|ログイン|
|POST|/user/signup|アカウント登録|
|GET|/log/{user_id}|今まで落とした城|
