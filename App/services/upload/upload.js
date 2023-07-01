export default async function upload(presignedUrl, selectedImage) {
  try {
    const fileName = selectedImage.split("/").pop();
    const fileType = "image/jpeg"; // Adjust the type if necessary

    let file = {
      uri: selectedImage,
      type: fileType,
      name: fileName,
      method: "PUT",
      headers: {
        "Content-Type": fileType,
      },
    };

    const response = await fetch(presignedUrl, {
      method: "PUT",
      body: file,
    });

    return response;
  } catch (error) {
    console.log("erro ao tentar subir imagem no s3: ", error);
    return error;
  }
}
