import { exec } from "child_process";
import path from "path";
import fs from "fs";
import { createHash } from "crypto";

import { createClient } from "microcms-js-sdk"; //ES6

// Initialize Client SDK.
export const microcmsClient = createClient({
  serviceDomain: "minojiro",
  apiKey: String(process.env.X_API_KEY),
});

export type PhotoPost = {
  id: string;
  image: {
    url: string;
    urlS: string;
    urlM: string;
    width: number;
    height: number;
  };
  modelName: string;
  modelNameJa?: string;
  staff: string;
  updatedAt: string;
};

type ResponseData = {
  contents: {
    id: string;
    image: {
      url: string;
      width: number;
      height: number;
    };
    updatedAt: string;
    model_name: string;
    model_name_ja?: string;
    staff: string;
  }[];
};

const execPromise = (command: string) => {
  return new Promise((resolve, reject) => {
    exec(command, (error: any, stdout: any, stderr: any) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
};

const getImageDir = () => {
  return path.join(__dirname, "../../public/images");
};

const downloadFile = async (url: string, fname: string) => {
  const IMAGE_DIR = getImageDir();
  const dist = path.join(IMAGE_DIR, `./${fname}`);
  await execPromise(`curl --output ${dist} "${url}"`);
  return `/images/${fname}`;
};

const resetDir = async (path: string) => {
  await execPromise(`rm -rf ${path}`);
  await execPromise(`mkdir ${path}`);
};

(async () => {
  await resetDir(getImageDir());
  const { contents }: ResponseData = await microcmsClient.get({
    endpoint: "photos",
    queries: { limit: 100 },
  });
  const photos: PhotoPost[] = [];

  for (const o of contents) {
    console.log(`Downloading ${o.id}...`);
    const imageHash = createHash("md5").update(o.image.url).digest("hex");
    photos.push({
      id: o.id,
      modelName: o.model_name,
      modelNameJa: o.model_name_ja,
      staff: o.staff,
      updatedAt: o.updatedAt,
      image: {
        url: await downloadFile(
          o.image.url + "?fm=webp&w=600&q=40",
          `${imageHash}.s.webp`
        ),
        urlS: await downloadFile(
          o.image.url + "?fm=webp&w=800&q=40",
          `${imageHash}.m.webp`
        ),
        urlM: await downloadFile(o.image.url + "?fm=jpg", `${imageHash}.l.jpg`),
        width: o.image.width,
        height: o.image.height,
      },
    });
  }
  const JSON_PATH = path.join(__dirname, "../../src/constants/photos.json");
  fs.writeFileSync(
    JSON_PATH,
    JSON.stringify(photos, null, 2),
    "utf-8"
  )
  return photos;
})();
