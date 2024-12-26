import slugify from 'slugify';
import { v4 as uuidv4 } from 'uuid';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ImageData, ImageFileData } from '~/app/register/page';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateUniqueSlug(name: string) {
  const baseSlug = slugify(name.toLowerCase());
  const uniqueSlug = `${baseSlug}-${uuidv4().slice(0, 8)}`; // Use the first 8 characters of UUID
  return uniqueSlug;
}

export async function uploadImageFilesToIPFS(fileImgs: ImageFileData[]) {
  const images: ImageData[] = [];

  if (fileImgs.length > 0) {
    for (const file of fileImgs) {
      const formData = new FormData();
      formData.append('file', file.file);

      try {
        const resFile = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
          method: 'POST',
          headers: {
            pinata_api_key: `${process.env.NEXT_PUBLIC_PINATA_API_KEY}`,
            pinata_secret_api_key: `${process.env.NEXT_PUBLIC_PINATA_API_SECRET}`,
          },
          body: formData,
        });

        const data = await resFile.json();

        images.push({
          id: file.id,
          description: file.description,
          path: `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`,
        });
      } catch (error) {
        console.error('Error uploading file to IPFS:', error);
      }
    }
  }

  return images;
}

export const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9-_]+/g, '-') // Replace non-alphanumeric chars with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};
