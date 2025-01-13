import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "description", content: "Welcome to the about page of React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {

  const { message } = loaderData

  return <>
    <h1>Worksers + CLoudflare = LOVE</h1>
    <h2>{message}</h2>
    <Link to={'/about'}>Go to about</Link>
  </>
}
