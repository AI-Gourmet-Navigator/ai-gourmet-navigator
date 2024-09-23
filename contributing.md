## For development

### Getting Started

#### Clone the repository

```bash
git clone https://github.com/AI-Gourmet-Navigator/ai-gourmet-navigator.git
npm install
```

#### Docker

Run

```bash
docker-compose up
```

Down

```bash
docker-compose down
```

Rebuild

```bash
docker-compose up --build
```

#### Storybook

Start

```bash
npm run storybook
```

### Regulation for development

#### Branch

Follow the naming convention below.

```bash
feat/hoge-hoge
fix/hoge-hoge
docs/hogehoge
style/hoge-hoge
refactor/hoge-hoge
test/hoge-hoge
chore/hoge-hoge
```

#### Commit

Follow the convention below. Learn more about it [HERE](https://dev.to/chrissiemhrk/git-commit-message-5e21)

```bash
feat: a new feature
fix: a bug fix
docs: changes in documentation
style: everything related to styling
refactor: code changes that neither fixes a bug or adds a feature
test: everything related to testing
chore: updating build tasks, package manager configs, etc
```

#### Storybook

Follow the naming convention below.

- For Pages

```typescript
title: 'Pages/<Page Name>'
```

- For Components

```typescript
title: 'Components/<Page Name>'
```
