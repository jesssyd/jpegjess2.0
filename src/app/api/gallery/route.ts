import { NextResponse } from "next/server";

const CLOUDINARY_URL = process.env.CLOUDINARY_URL!;
const API_KEY = process.env.API_KEY!;
const API_SECRET = process.env.API_SECRET!;
const CLOUD_NAME = process.env.CLOUD_NAME!;

export async function GET() {
    const folder = "jpegjess/gallery";
  
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image`;
  
    const authHeader = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");
  
    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${authHeader}`,
      },
    });
  
    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch Cloudinary images" }, { status: 500 });
    }
  
    const data = await response.json();
    console.log("Raw Cloudinary data:", data);


    const filteredImages = data.resources.filter((img: any) => img.asset_folder === folder);
    console.log("Filtered images:", filteredImages);
  
    return NextResponse.json(filteredImages);
  }
  