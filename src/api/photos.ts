import { microcmsClient } from "./client";
import type { PhotoPost } from "../types";

type ResponseData = {
  contents: {
    id: string;
    image: {
      url: string;
    };
    model_name: string;
    staff: string;
  }[];
};

export async function getPhotoPosts(): Promise<PhotoPost[]> {
  // return Array.from({ length: 100 }, (_, i) => ({
  //   id: String(i),
  //   src: "//placehold.jp/100x100.png",
  //   modelName: "Kawashima Yuri (Adesso co., ltd)",
  //   staff: "hair&makeup by Kamijo Shinya / assist by Sato Manato",
  // }));

  const { data } = await microcmsClient.get<ResponseData>("photos", {
    params: { limit: 99 },
  });

  return data.contents.map((o) => ({
    id: o.id,
    src: o.image.url,
    modelName: o.model_name,
    staff: o.staff,
  }));
}
