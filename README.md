# Pixels

App where you will able to search a variety of images (...videos coming soon)

## Programming languages and technologies

Recently rewritten with these technologies:

- TypeScript
- React
- Material UI
- Vite
- SWR (for caching requests)

## To run the app

## Get a Pixabay's API key

Pixels consumes the [Pixabay's api](https://pixabay.com/api/docs) to fetch the images displayed in the app
You must create a Pixabay's account in order to get an API key to make valid requests. It's free!
Please read the [Pixabay's api documentation](https://pixabay.com/api/docs) to get more information about it.

### Env file setup

Follow the steps

- Create a `env.local` file ar the root of the project
- Set your pixabay api key `VITE_PIXABAY_KEY = __your_pixabay_api_key__`
- Set the base api url `VITE_PIXABAY_BASE_URL = __base_pixabay_api_url__`. You will see in the [api docs](https://pixabay.com/api/docs)

### Final steps `npm run build`

- Run `npm i` to install the packages
- And finally `npm run dev` to run the app in development mode
