# Mongoose OverwriteModelError Fix Plan

## Information gathered

- `models/category.js` uses `mongoose.model('Categories', categorySchema)` and exports the model directly.
- `models/subcategory.js` uses `mongoose.model('Subcategories', subcategorySchema)` and exports the model directly.
- In Next.js dev/route compilation, the module can be evaluated multiple times, causing Mongoose to attempt to register the same model name again, triggering:
  - `OverwriteModelError: Cannot overwrite 'Subcategories' model once compiled.`

## Plan

### File changes

1. Update `models/category.js` to reuse existing models when already compiled:
   - Use `mongoose.models.Categories || mongoose.model('Categories', categorySchema)`.
2. Update `models/subcategory.js` similarly:
   - `mongoose.models.Subcategories || mongoose.model('Subcategories', subcategorySchema)`.

## Dependent files

- `lib/category.js` and `lib/subcategory.js` (they import the model; no changes expected).
- API route files (they call `getCategories`/`getSubcategoriesByCategory`; no changes expected).

## Follow-up steps

- Restart Next dev server so cached bundles clear.
- Hit `/api/category` and `/api/subcategory` to ensure no OverwriteModelError.
