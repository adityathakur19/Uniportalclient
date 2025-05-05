// lib/aws-s3.js

import API_URL from "../components/config/api-url";

/**
 * @param {File} file 
 * @returns {Promise<string>} 
 */
export const uploadFile = async (file: File): Promise<string> => {
  try {
    // Method 1: Direct upload to backend which handles S3 upload
    const formData = new FormData();
    formData.append("files", file);

    const response = await fetch(`${API_URL}/upload-document`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error uploading file");
    }

    const data = await response.json();
    return data.fileUrls[0]; // Return the first file URL

 
  } catch (error) {
    console.error("Error in uploadFile:", error);
    throw error;
  }
};

/**
 * Uploads multiple files to AWS S3
 * @param {File[]} files 
 * @param {function} progressCallback 
 * @returns {Promise<string[]>} - 
 */

export const uploadMultipleFiles = async (
  files: File[],
  progressCallback: ((progress: number) => void) | null = null
): Promise<string[]> => {
  const urls = [];

  for (let i = 0; i < files.length; i++) {
    const url = await uploadFile(files[i]);
    urls.push(url);

    if (progressCallback) {
      progressCallback(Math.round(((i + 1) / files.length) * 100));
    }
  }

  return urls;
};