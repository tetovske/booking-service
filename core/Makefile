SHELL=/bin/sh

UID:=$(SHELL id -u)
GID:=$(SHELL id -g)

export UID GID

app-setup: app-build app-db-prepare

app-build:
	docker-compose build

app-up:
	docker-compose up

app-core-ash:
	docker-compose run --rm core ash

app-core-console:
	docker-compose run --rm core bundle exec rails c

app-core-yarn:
	docker-compose run --rm core yarn install

app-core-bundle:
	docker-compose run --rm core bundle install


app-db-psql:
	docker-compose run --rm core psql -d booking_core_development -U postgres -W -h db

app-db-prepare: app-db-drop app-db-create app-db-migrate app-db-seed

app-db-create:
	docker-compose run --rm core rails db:create RAILS_ENV=development

app-db-migrate:
	docker-compose run --rm core rails db:migrate

app-db-rollback:
	docker-compose run --rm core rails db:rollback

app-db-seed:
	docker-compose run --rm core rails db:seed

app-db-reset:
	docker-compose run --rm core rails db:reset

app-db-drop:
	docker-compose run --rm core rails db:drop


TEST_PATH := $(or $(TEST_PATH),spec/)
test:
	docker-compose run -e DATABASE_URL=postgresql://postgres@db/booking_core_test -e RAILS_ENV=test -e SPEC_DISABLE_FACTORY_LINT=$(SPEC_DISABLE_FACTORY_LINT) -e SPEC_DISABLE_WEBPACK_COMPILE=$(SPEC_DISABLE_WEBPACK_COMPILE) --rm core rspec -f d $(TEST_PATH)

test-db-prepare:
	docker-compose run -e DATABASE_URL=postgresql://postgres@db/booking_core_test -e RAILS_ENV=test --rm core rails db:test:prepare

test-db-drop:
	docker-compose run -e DATABASE_URL=postgresql://postgres@db/booking_core_test -e RAILS_ENV=test --rm core rails db:drop

.PHONY: app-up test