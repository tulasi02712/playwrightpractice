# Playwright Automation

## Run tests

- Run all tests:
  - `npm test`

- Run a subset of test *files* by **regular expression** (matched against test file paths):
  - PowerShell (recommended quoting):
    - `npm test -- 'tests/WEBAPIPart[12]\\.spec\\.js$'`
    - `npm test -- '^tests/.*\\.spec\\.js$'`

Notes:
- If your regex contains symbols like `$` or `*`, quote the argument (PowerShell: prefer single quotes) so it isn’t interpreted by the shell.
- For filenames with spaces, include the spaces in the regex (and escape `.` as `\\.`), e.g.:
  - `npm test -- 'Event creation assign\\.spec\\.js$'`
