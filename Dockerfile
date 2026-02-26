FROM ruby:3.3-slim

RUN apt-get update && apt-get install -y build-essential && rm -rf /var/lib/apt/lists/*

WORKDIR /srv/jekyll

COPY Gemfile ./
RUN bundle install && rm -f Gemfile.lock

EXPOSE 4001 35730

CMD ["sh", "-c", "rm -f Gemfile.lock && bundle install --quiet && bundle exec jekyll serve --host 0.0.0.0 --port 4001 --livereload --livereload-port 35730 --force_polling"]
