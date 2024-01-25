FROM node:20.10.0-slim AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Set working directory
COPY . /app
WORKDIR /app

# Build
RUN pnpm install --frozen-lockfile
RUN pnpm run build

# Serve Storybook
FROM nginx:1.25.2-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/apps/storybook/storybook-static /usr/share/nginx/html