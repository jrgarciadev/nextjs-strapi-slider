## A statically generated image slides using GSAP, Next.js and Strapi CMS

## Frontend URL
[https://nextjs-gsap-slider.vercel.app/](https://nextjs-gsap-slider.vercel.app/)

## Strapi CMS URL
[https://wild-slider-cms.herokuapp.com/](https://wild-slider-cms.herokuapp.com/)

## GRAPHQL URL
[https://wild-slider-cms.herokuapp.com/graphql](https://wild-slider-cms.herokuapp.com/graphql)


### Step 1.  Set up Strapi enviroment

On wild-slider-cms 

Execute 

```bash
cp .env.example .env
```

You must have a Mongodb.com account and AWS S3 Bucket
Set up your  `.env`

 - `DATABASE_URI=mongodb+srv://<user>:<password>@cluster0.vbxof.mongodb.net/<dbname>?retryWrites=true&w=majority`
 - `DATABASE_URI=YOUR_MONGO_DATABASE_URI`
 - `DATABASE_NAME=YOUR_DATABASE_NAME`
 - `AWS_API_ID=YOUR_AWS_S3_ID`
 - `AWS_API_KEY=YOUR_AWS_S3_KEY`
 - `AWS_API_REGION=YOUR_AWS_API_REGION`
 - `AWS_BUCKET_NAME=YOUR_AWS_BUCKET_NAME`


### Step 2. Set up Strapi locally

Execute

```bash
cd wild-slider-cms
yarn # or: npm run install
yarn develop  # or: npm run develop
```

This will open http://localhost:1337/ and prompt you to create an admin user.


### Step 3. Create a `Entries` data

From **Content-Types**, **Entries**.

- Click on button `Add new entries`.

- Click on cover image and upload assets from `slider` folder 

- Select an Image for entry

- Write a caption and press **Save** and **Publish** button

- Repeat this 3 times for others Images

### Step 4. Set permissions

From **Settings & Roles**, edit the **Public** role.

Then select: `count`, `find`, and `findone` permissions for **Entries**. Click **Save**.


### Step 5. Set up environment variables

While the Strapi server is running, open a new terminal and `cd` into the Next.js app directory you created earlier.

```
cd wild-slider-frontend
```

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `STRAPI_PREVIEW_SECRET` can be any random string (but avoid spaces), like `MY_SECRET` - this is used for [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode).
- `NEXT_PUBLIC_STRAPI_API_URL` should be set as `http://localhost:1337` (no trailing slash).
- `NEXT_PUBLIC_STRAPI_API_URL_GRAPHQL` should be set as `http://localhost:1337/graphql` (no trailing slash).


### Step 6. Run Next.js in development mode

Make sure that the local Strapi server is still running at http://localhost:1337. Inside the Next.js app directory, run:

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your wild-slider application should be up and running on [http://localhost:3000](http://localhost:3000)! You should see the 4 entries you’ve created. If it doesn't work, make sure that:

- You’ve set the Roles & Permissions in Step 4.
- You’ve clicked on "Publish" in Step 3
