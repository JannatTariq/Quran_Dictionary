# TODO - Publish to GitHub + Make Vercel build work

- [ ] Fix Next.js build error: `Module not found: Can't resolve '@/models/file'`.
  - [ ] Ensure `models/file.js` exists OR update imports to match existing model file (`models/files.js`).
- [ ] Ensure other model imports are correct for `@/models/...` paths.
- [ ] Run `npm run build` locally until it succeeds.
- [ ] Push final commit to GitHub.
- [ ] Create/attach project on Vercel and set `MONGODB_URL` env var.
- [ ] Deploy and verify API routes work.
