# derricksummer.github.io

Official GitHub Pages website for iOS apps published by `derricksummer`.

Final site:

https://derricksummer.github.io

This repository is intentionally static. It uses plain HTML, CSS, and JavaScript only, so it can be served directly by GitHub Pages without `npm install`, a build step, server runtime, or external JavaScript libraries.

## File Structure

```text
/
|-- index.html
|-- app-ads.txt
|-- assets/
|   |-- css/
|   |   `-- style.css
|   `-- js/
|       `-- main.js
|-- privacy/
|   |-- index.html
|   `-- your-app.html
|-- support/
|   |-- index.html
|   `-- your-app.html
`-- README.md
```

## 1. Enable GitHub Pages

1. Open the GitHub repository: `derricksummer/derricksummer.github.io`.
2. Go to `Settings`.
3. Open `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select:
   - Branch: `main`
   - Folder: `/ (root)`
6. Click `Save`.

For a user/organization Pages repository named `derricksummer.github.io`, GitHub will publish the root of the `main` branch to:

https://derricksummer.github.io

## 2. Deploy to https://derricksummer.github.io

After editing files locally, commit and push to GitHub:

```bash
git add .
git commit -m "Create developer apps website"
git push origin main
```

GitHub Pages will build and publish the static files automatically. It may take a few minutes for changes to appear.

## 3. Add the AdMob Publisher ID

The root `app-ads.txt` file currently contains a required placeholder:

```text
google.com, pub-REPLACE_WITH_MY_PUBLISHER_ID, DIRECT, f08c47fec0942fa0
```

Before relying on AdMob verification, replace `pub-REPLACE_WITH_MY_PUBLISHER_ID` with the real Google AdMob Publisher ID.

The final line should look like this:

```text
google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0
```

Do not rename this file, move it, convert it to HTML, or redirect it. AdMob expects a plain text file at:

https://derricksummer.github.io/app-ads.txt

## 4. Verify app-ads.txt

After pushing to GitHub, open this URL in a browser:

https://derricksummer.github.io/app-ads.txt

Confirm that:

- The page shows plain text only.
- The URL is exactly `/app-ads.txt`.
- There is no HTML layout.
- There is no redirect to another path.
- The real AdMob Publisher ID has replaced the placeholder.

You can also verify with:

```bash
curl -L https://derricksummer.github.io/app-ads.txt
```

## 5. Add a New App

Update `assets/js/main.js` and add an item to the `apps` array:

```javascript
{
  name: "New App Name",
  slug: "new-app",
  status: "Available on the App Store",
  summary: "Short description of the app.",
  appStoreUrl: "https://apps.apple.com/app/idREPLACE_WITH_APP_ID",
  privacyUrl: "/privacy/new-app.html",
  supportUrl: "/support/new-app.html"
}
```

Then add matching entries to:

- `privacy/index.html`
- `support/index.html`

## 6. Add a New Privacy Policy

1. Copy `privacy/your-app.html`.
2. Rename it using a stable lowercase slug, for example:

```text
privacy/new-app.html
```

3. Replace:
   - `Your App Name`
   - `REPLACE_WITH_EFFECTIVE_DATE`
   - `REPLACE_WITH_SUPPORT_EMAIL`
   - SDK and data collection descriptions
   - Any text that does not match the actual app behavior

The template includes sections for:

- Information We Collect
- Advertising
- Google AdMob
- Device / Advertising Identifiers
- Analytics
- Children's Privacy
- Third-Party Services
- Data Retention
- User Rights
- Changes to This Privacy Policy
- Contact

Important: Do not claim that Firebase, Analytics, Crashlytics, accounts, location, payments, or any other SDK/service is used unless that specific app actually uses it.

## 7. Add a New Support Page

1. Copy `support/your-app.html`.
2. Rename it using the same slug as the privacy page:

```text
support/new-app.html
```

3. Replace:
   - `Your App Name`
   - app description
   - FAQ answers
   - troubleshooting details
   - `REPLACE_WITH_SUPPORT_EMAIL`
   - privacy policy link

Each support page is designed to be suitable as an Apple App Store Support URL.

## 8. App Store Connect URL Examples

For each app in App Store Connect, use URLs like these:

Privacy Policy URL:

```text
https://derricksummer.github.io/privacy/new-app.html
```

Support URL:

```text
https://derricksummer.github.io/support/new-app.html
```

Marketing URL, if needed:

```text
https://derricksummer.github.io/
```

## 9. Connect a Custom Domain Later

To use a custom domain such as `apps.example.com`:

1. Add the custom domain in GitHub repository `Settings` > `Pages`.
2. Create a `CNAME` file in the repository root containing only the domain:

```text
apps.example.com
```

3. Configure DNS with your domain provider.
4. For an apex domain, use GitHub Pages `A` records.
5. For a subdomain, use a `CNAME` DNS record pointing to `derricksummer.github.io`.
6. Enable `Enforce HTTPS` in GitHub Pages after DNS is ready.

If you add a custom domain, check whether AdMob should use the GitHub Pages URL or the custom domain for app-ads.txt discovery based on the website URL configured for each app.

## Public Repository Safety

This repository should contain only public static files. Never commit:

- API secrets
- Firebase service accounts
- Private keys
- Certificates
- Passwords
- Secret tokens
- Sensitive environment variables

## URLs to Check

After deployment, confirm these URLs work:

- https://derricksummer.github.io/
- https://derricksummer.github.io/app-ads.txt
- https://derricksummer.github.io/privacy/
- https://derricksummer.github.io/support/

## Values That Must Be Replaced

Before production use, replace:

- `pub-REPLACE_WITH_MY_PUBLISHER_ID` in `app-ads.txt`
- `REPLACE_WITH_SUPPORT_EMAIL` in HTML files
- `REPLACE_WITH_EFFECTIVE_DATE` in privacy policy pages
- `Your App Name`
- placeholder app descriptions, FAQ answers, and App Store URLs
- placeholder SDK and data collection descriptions in each privacy policy
