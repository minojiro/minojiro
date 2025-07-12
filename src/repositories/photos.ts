import PHOTOS from "../constants/photos.json";

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
};

export function getPhotoPosts(): PhotoPost[] {
  return PHOTOS as PhotoPost[]
}
