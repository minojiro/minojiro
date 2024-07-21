import { microcmsClient } from "./client";

export type PhotoPost = {
  id: string;
  src: string;
  modelName: string;
  staff: string;
};

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
  const { contents }: ResponseData = await microcmsClient.get({
    endpoint: "photos",
  });
  return contents.map((o) => ({
    id: o.id,
    src: o.image.url,
    modelName: o.model_name,
    staff: o.staff,
  }));
}
