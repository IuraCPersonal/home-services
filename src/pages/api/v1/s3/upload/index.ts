import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

import { S3Client } from "@aws-sdk/client-s3";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { filename, contentType } = req.body;
  let uuid = uuidv4();

  try {
    const client = new S3Client({ region: process.env.AWS_REGION });
    const { url, fields } = await createPresignedPost(client, {
      Bucket: process.env.AWS_BUCKET_NAME as string,
      Key: uuid,
      Conditions: [
        ["content-length-range", 0, 10485760], // up to 10 MB
        ["starts-with", "$Content-Type", contentType],
      ],
      Fields: {
        acl: "public-read",
        "Content-Type": contentType,
      },
      Expires: 600, // Seconds before the presigned post expires. 3600 by default.
    });

    return res.status(200).json({ url, fields, uuid });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
