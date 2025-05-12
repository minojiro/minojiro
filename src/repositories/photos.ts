import { microcmsClient } from "./client";

export type PhotoPost = {
  id: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  modelName: string;
  modelNameJa?: string;
  staff: string;
};

type ResponseData = {
  contents: {
    id: string;
    image: {
      url: string;
      width: number;
      height: number;
    };
    model_name: string;
    model_name_ja?: string;
    staff: string;
  }[];
};
export async function getPhotoPosts(): Promise<PhotoPost[]> {
  const { contents }: ResponseData = await microcmsClient.get({
    endpoint: "photos",
    queries: { limit: 100 },
  });
  return contents.map((o) => ({
    id: o.id,
    image: o.image,
    modelName: o.model_name,
    modelNameJa: o.model_name_ja,
    staff: o.staff,
  }));
}
