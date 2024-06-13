import { ImageResponse } from "@vercel/og";

export const contentType = "image/jpg";


export async function GET(request) {

  const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const skip = searchParams.get("img");

    console.log(skip);
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "white",
          background: "black",
          width: "100%",
          height: "100%",
          textAlign: "center",

          justifyContent: "center",
          alignItems: "center",
          placeItems: "center",
          display: "flex",
        }}
      >
        {
          skip == 1 ? (<img src="https://res.cloudinary.com/dlxwkq6bm/image/upload/v1718309333/256x256_opengraph_jmfjpm.jpg" alt=""/>) : skip == 2 ? (<img src="https://res.cloudinary.com/dlxwkq6bm/image/upload/v1718309334/600x336_opengraph_sexgdh.jpg" alt=""/>) : skip == 3 ? ( <img src="https://res.cloudinary.com/dlxwkq6bm/image/upload/v1718309334/1200x630_opengraph-image_ydp9pe.jpg" alt=""/>) : null
        }
      </div>
    ),
    {
      width: skip == 1 ? 256 : skip == 2 ? 600 : skip == 3 ? 1200 : 0,
      height: skip == 1 ? 256 : skip == 2 ? 336 : skip == 3 ? 630 : 0,
    }
  );
}
