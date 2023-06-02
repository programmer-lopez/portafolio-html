import { 
  LiveReload, 
  Outlet,
  Links,
} from "@remix-run/react";


export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <title>Portafolio</title>
        <Links/>
      </head>
      <body>
        <Outlet/>
        <LiveReload />
      </body>
    </html>
  );
}