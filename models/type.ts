/** @format */

export type Photo = {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;

  width: number;
  height: number;
  color: string;
  blur_hash: string;

  alt_description: string;

  urls: {
    regular: string;
  };
};
