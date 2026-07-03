# Change 001 - Create Project Structure

## Objective

Create the physical project structure defined in `.specs/shared/architecture.md` without building the deck yet.

## Requirements

- Create the approved folder structure:
  - `inputs/source/`
  - `inputs/references/`
  - `work/extracted/`
  - `work/analysis/`
  - `work/reviews/`
  - `src/deck/content/`
  - `src/deck/assets/`
  - `src/deck/styles/`
  - `src/deck/scripts/`
  - `src/tools/`
  - `outputs/html/`
  - `outputs/pdf/`
  - `outputs/pptx/`
  - `tests/fixtures/`
  - `tests/reports/`
- Add minimal README files explaining what belongs in each major folder.
- Register existing local materials without moving or deleting them.
- Initialize the folder as a local Git repository.
- Add a `.gitignore` suitable for this memorial presentation project.
- Record remote Git/GitHub linking as pending until the user provides or approves a remote URL.
- Do not extract, rewrite, summarize, or render deck content in this change.

## Acceptance Criteria

- All required folders exist.
- The original PDFs and HTML export remain untouched.
- A source inventory file exists and lists visible input materials.
- The project can be understood from the folder README files.
- The folder is initialized as a local Git repository.
- `.gitignore` exists and excludes generated, temporary, and system files.
- Remote Git linking is either configured or explicitly recorded as pending.
- No MVP deck implementation has started.

## Files To Modify

- `README.md`
- `.gitignore`
- `inputs/README.md`
- `inputs/source/README.md`
- `work/README.md`
- `src/README.md`
- `src/deck/README.md`
- `outputs/README.md`
- `tests/README.md`
- `work/analysis/source-inventory.md`

## Tests To Run

- `find . -maxdepth 3 -type d`
- `git status --short`
- `git remote -v`
- Manual check that original source files still exist.
- Manual check that no deck implementation files were created beyond READMEs.

## Completion Checklist

- [x] User approval received.
- [x] Required directories created.
- [x] Folder READMEs added.
- [x] Local Git repository initialized.
- [x] `.gitignore` added.
- [x] Remote Git status documented.
- [x] Source inventory added.
- [x] Original materials preserved.
- [x] Change summary provided to user.
