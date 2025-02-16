export async function GET() {
    const appUrl = process.env.NEXT_PUBLIC_URL;
  
    const config = {
        accountAssociation: {
          header: "eyJmaWQiOjY3OTEwMywidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDE1ODcyZDQ5RDkwNjM4YWU4Y2VkZDQxYkExMmU1MmU2RjRGMjZEODQifQ",
          payload: "eyJkb21haW4iOiIzMzgzLTg2LTMxLTIwNC0xNjYubmdyb2stZnJlZS5hcHAifQ",
          signature: "MHhlZDYwZWExYjNiOWZlYjhiMzA4NGI5ZWUxMzcyZmU0OTI5Yjg1NGMxODBiMmQ0YWRkYWQ0ZjNhODhmMjNhZTIwNjgzODA4MWVhMGEwZTg0YjgzMWU0ZTI5ZDUzNWRkMGJmOTFlMDQxMzI4MGFlYzZlMDlkYTUzYzlkMjY5ZTFiYTFj"
        },
        frame: {
          version: "1",
          name: "Example Frame",
          iconUrl: `${appUrl}/icon.png`,
          homeUrl: appUrl,
          imageUrl: `${appUrl}/opengraph-image`,
          buttonTitle: "Check this out",
          splashImageUrl: `${appUrl}/splash.png`,
          splashBackgroundColor: "#eeccff",
        }
      };
  
    return Response.json(config);
  }