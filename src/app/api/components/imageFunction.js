import { v2 as cloudinary } from 'cloudinary';

 cloudinary.config({ 
        cloud_name: process.env.CLOUDNIARY_NAME, 
        api_key:process.env.CLOUDNIARY_API , 
        api_secret:process.env.CLOUDNIARY_SECERT
    });
export async function imageUploader(file) {
    try {
        if (!file) {
            const result = {
                error: "File not Found",
                success:false,
            }
            return result
        }
        const bites = await file.arrayBuffer();
        const buffer = Buffer.from(bites)

        const result = await new Promise((resolve ,reject)=>{
            const upload = cloudinary.uploader.upload_stream(
                (error,result)=>{
                    if(error) reject(error);
                    else resolve(result)
                }
            )
            upload.end(buffer)
        })
        console.log(result); // Delete (Only for testing)
        return result.url;
    } catch (error) {
        console.log("Upload Image Fieled :",error);
        const result = error
        return {result}
    }
}