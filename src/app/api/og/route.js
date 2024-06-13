import { ImageResponse } from "@vercel/og";

export const contentType = "image/jpg";


export async function GET(req) {

    console.log(req.url);
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "white",
          background: "black",
          width: "100%",
          height: "100%",
          //   padding: "50px 200px",
          textAlign: "center",

          justifyContent: "center",
          alignItems: "center",
          placeItems: "center",
          display: "flex",
        }}
      >
        <img src="https://res.cloudinary.com/dlxwkq6bm/image/upload/v1718309333/256x256_opengraph_jmfjpm.jpg" alt=""/>
      </div>
    ),
    {
      width: 256,
      height: 256,
    }
  );
}
