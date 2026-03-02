# 🚩 Git The Flag — Case 02: The Vanishing Feature

> **Rookie level. Know the basics? This one requires investigation.**
> If you are new to git, start with Case 01 first.

---

## Story

A team of developers vanished overnight.
They left behind a repo with four branches.
Each branch hides a secret.
Find them all — then put the pieces back together.

---

## Before you start

You need git installed. Check with:

```bash
git --version
```

You should already know `git clone`, `git branch -a`, and `git checkout`.
If not, start with [Case 01](https://github.com/GitTheFlag/case-01).

---

## Getting started

```bash
git clone https://github.com/GitTheFlag/case-02
cd case-02
git branch -a
```

---

## Objectives

| # | Hint | Command to use |
|---|------|----------------|
| 1 | Something is hidden in the commit history | `git log --oneline` |
| 2 | A file was deleted — but git never forgets | `git log --diff-filter=D`, `git show` |
| 3 | Tags carry more than version numbers | `git tag -l`, `git show` |
| 4 | Git knows about things that were never committed | `git fsck --lost-found` |
| 5 | **Final:** Merge all branches and open a Pull Request | `git merge`, `git push` |

---

## How to submit a flag

Open a new [Issue](../../issues/new) and use the flag as the title:

```
GTF{the_flag_you_found}
```

A bot replies instantly. ✅

> Stuck? Comment `hint` on any issue and the bot will guide you.

---

## Glossary

| Command | What it does |
|---------|-------------|
| `git log --oneline` | Show commit history — one line per commit |
| `git show <hash>` | Show full details of a commit |
| `git log --diff-filter=D` | Show only commits that deleted files |
| `git tag -l` | List all tags |
| `git fsck --lost-found` | Find objects not attached to any commit |
