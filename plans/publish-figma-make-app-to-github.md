# Publish the Figma Make App to a Private GitHub Repository

## Goal

Publish the existing React + Vite + Tailwind application to a new private GitHub repository named `armed-forces-service-law-website` under the GitHub account authenticated in the GitHub CLI, while preserving Figma Make’s managed Git remote and workflow.

## Confirmed Current State

- The workspace is already a Git repository on branch `main`.
- The working tree is clean.
- The existing `origin` remote points to Figma’s managed Git endpoint.
- The repository currently has one commit (`8b16e6f`, `prompt: 0`).
- The application source and project configuration are already tracked as code.
- `.gitignore` excludes dependencies, builds, environment files, logs, Figma design-context state, and platform-managed plugin state.
- The project’s production build command is `pnpm build`.

## Decisions

- Do not use a code-generation plugin: the Figma Make project is already React/TypeScript source code.
- Do not replace or rename the Figma-managed `origin`.
- Create a second remote named `github`.
- Create a new private GitHub repository.
- Repository name: `armed-forces-service-law-website`.
- Repository owner: the personal GitHub account authenticated in the GitHub CLI.
- Push the existing `main` branch and its history.
- Do not configure deployment as part of this task.
- Do not change application source, package metadata, or existing commit history solely for publication.

## Implementation Steps

1. **Preflight checks**
   - Run `git status --short --branch` and confirm there are no uncommitted or untracked files that should not be published.
   - Run `git remote -v` and confirm `origin` still points to Figma.
   - Confirm GitHub CLI availability with `gh --version`.
   - Confirm authentication with `gh auth status`.
   - If GitHub authentication is missing, pause for the user to complete `gh auth login`; never request or print a personal access token.

2. **Review publishable content**
   - Inspect tracked filenames with `git ls-files`.
   - Confirm no `.env` files, credentials, access tokens, private client data, generated build output, or local plugin state are tracked.
   - Do not alter placeholder legal content merely to publish the repository.
   - If sensitive tracked content is found, stop and report it before creating or pushing the GitHub repository.

3. **Verify the code before publication**
   - Run the repository-prescribed production check: `pnpm build`.
   - If it fails, diagnose the failure and only fix issues directly blocking publication; report unrelated or environmental failures rather than broadening scope silently.

4. **Create the GitHub repository and remote**
   - Use GitHub CLI to create a private repository under the authenticated personal account without initializing it with a README, license, or `.gitignore`, because the local repository already has history.
   - Use a command equivalent to:
     ```sh
     gh repo create armed-forces-service-law-website --private
     ```
   - Obtain the exact repository URL from GitHub CLI output or `gh repo view`; do not construct an owner name by assumption.
   - Add that URL as a second remote:
     ```sh
     git remote add github <exact-github-repository-url>
     ```
   - If a remote named `github` unexpectedly already exists, inspect it and ask before changing it.

5. **Push without disturbing the Figma remote**
   - Push the existing branch and history:
     ```sh
     git push -u github main
     ```
   - This sets `main` to track `github/main`. It does not delete or modify the Figma `origin`.
   - Future explicit synchronization remains available in both directions:
     - GitHub: `git push github main`
     - Figma remote: `git push origin main`
   - Avoid force-pushes and history rewrites.

6. **Verify publication**
   - Run `git remote -v` and confirm both `origin` and `github` are present with the expected URLs.
   - Run `git status --short --branch` and confirm the working tree remains clean.
   - Run `git ls-remote --heads github main` and confirm `main` exists remotely.
   - Use `gh repo view --json nameWithOwner,isPrivate,url,defaultBranchRef` to confirm:
     - repository name is `armed-forces-service-law-website`;
     - visibility is private;
     - default branch is `main`;
     - the repository is under the authenticated personal account.
   - Return the GitHub repository URL to the user.

## Failure Handling

- **GitHub CLI unavailable:** report the blocker and provide the equivalent GitHub web UI plus `git remote add`/`git push` path; do not install tools without approval.
- **Authentication missing or expired:** ask the user to run `gh auth login`, then resume preflight.
- **Repository name already exists:** inspect the existing repository and ask whether to use it or choose a new name; do not overwrite it.
- **Insufficient account permissions:** report the exact GitHub error and stop.
- **Push rejected because the remote is non-empty:** fetch and inspect the remote history before proposing merge or replacement; never force-push by default.
- **Build failure:** diagnose from command output, make only in-scope corrections, rerun `pnpm build`, and report unresolved environmental failures.
- **Sensitive data discovered:** stop before repository creation or push and identify only the affected paths, without reproducing secret values.

## Success Criteria

- A new private GitHub repository named `armed-forces-service-law-website` exists under the authenticated personal account.
- The existing `main` branch and commit history are present on GitHub.
- The GitHub remote is named `github`.
- Figma’s managed remote remains unchanged as `origin`.
- No secrets, environment files, generated output, dependencies, or platform-managed plugin state are published.
- `pnpm build` passes immediately before publication.
- The local working tree remains clean.
- The user receives the exact private GitHub repository URL.

## Optional Follow-up (Out of Scope)

- Add a polished `README.md`, screenshots, license, contribution notes, or repository topics.
- Configure GitHub Actions for automated builds.
- Deploy through Vercel, Netlify, Cloudflare Pages, or GitHub Pages.
- Add a custom domain and production environment variables.
