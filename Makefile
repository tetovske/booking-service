SHELL=/bin/sh

UID:=$(SHELL id -u)
GID:=$(SHELL id -g)

export UID GID

app-build:
	docker-compose build

app-up:
	docker-compose up


app-booking-ash:
	docker-compose run --rm booking ash
app-core-ash:
	docker-compose run --rm core ash
app-idp-ash:
	docker-compose run --rm idp ash


app-booking-console:
	docker-compose run --rm booking bundle exec rails c

app-core-console:
	docker-compose run --rm core bundle exec rails c

app-idp-console:
	docker-compose run --rm idp bundle exec rails c

app-db-all-prepare: app-db-booking-prepare app-db-core-prepare app-db-idp-prepare

app-db-booking-prepare: app-db-booking-drop app-db-booking-create app-db-booking-migrate app-db-booking-seed

app-db-booking-create:
	docker-compose run --rm booking bundle exec rails db:create

app-db-booking-migrate:
	docker-compose run --rm booking bundle exec rails db:migrate

app-db-booking-seed:
	docker-compose run --rm booking bundle exec rails db:seed

app-db-booking-drop:
	docker-compose run --rm idp bundle exec rails db:drop


app-db-core-prepare: app-db-core-drop app-db-core-create app-db-core-migrate app-db-core-seed

app-db-core-create:
	docker-compose run --rm core bundle exec rails db:create

app-db-core-migrate:
	docker-compose run --rm core bundle exec rails db:migrate

app-db-core-seed:
	docker-compose run --rm core bundle exec rails db:seed

app-db-core-drop:
	docker-compose run --rm idp bundle exec rails db:drop


app-db-idp-prepare: app-db-idp-drop app-db-idp-create app-db-idp-migrate app-db-idp-seed

app-db-idp-create:
	docker-compose run --rm idp bundle exec rails db:create

app-db-idp-migrate:
	docker-compose run --rm idp bundle exec rails db:migrate

app-db-idp-seed:
	docker-compose run --rm idp bundle exec rails db:seed

app-db-idp-drop:
	docker-compose run --rm idp bundle exec rails db:drop
