# pstest
Postgres docker image with dvdrental data to experiment with it

1. Start [Docker](https://www.docker.com/get-started/)
2. In your CLI run `docker compose up --build -d`
3. Access container `docker exec -it <CONTEINER_ID> sh` or use Docker Desktop and find container `db`


TODO:
 1. check [drizzle](https://orm.drizzle.team/docs/data-querying)