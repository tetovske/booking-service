booking
===============

### Basic dev stack deployment

1. Install Docker (Docker Desktop fom Mac/Win if needed)
2. Install make
3. Start docker daemon (desktop)
4. Copy or symlink `docker-compose-example.yml` to `docker-compose.yml` and edit if needed.
5. Run `make app-build` to build
6. Run `make app-db-all-prepare` if needed
7. Search `Makefile` for other useful commands, such as:
  * `make app-up` — runs the whole app stack
  * `make app-booking-ash` — runs main app container with shell
  * `make app-booking-console` — runs main app container with rails console
