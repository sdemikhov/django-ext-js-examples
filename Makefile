.PHONY: install
install:
	poetry install

.PHONY: runapp
runapp:
	cd Frontend && sencha app build && cd ..
	poetry run python manage.py collectstatic --no-input
	poetry run gunicorn api.wsgi --bind 127.0.0.1:8000
