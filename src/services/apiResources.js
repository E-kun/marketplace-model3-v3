import supabase, { supabaseUrl } from "./supabase";
import { subjects } from "../data/subjects";

export async function getResources() {
  const { data, error } = await supabase.from("resources").select("*");

  if (error) {
    console.error(error);
    throw new Error("Could not retrieve resources");
  }
  return data;
}

export async function getSubjects() {
  const data = subjects;

  return data;
}

export async function createResourceApi(newResource) {
  const hasImagePath = newResource.image?.startsWith?.(supabaseUrl);
  const hasFilePath = newResource.file?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newResource.image.name}`.replaceAll(
    "/",
    ""
  );
  const fileName = `${Math.random()}-${newResource.file.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newResource.image
    : `${supabaseUrl}/storage/v1/object/public/images/${imageName}`;

  const filePath = hasFilePath
    ? newResource.file
    : `${supabaseUrl}/storage/v1/object/public/files/${fileName}`;

  const { data, error } = await supabase
    .from("resources")
    .insert([{ ...newResource, image: imagePath, file: filePath }])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Resource could not be created");
  }

  if (hasImagePath && hasFilePath) return data;

  const { error: imageStorageError } = await supabase.storage
    .from("images")
    .upload(imageName, newResource.image);

  const { error: fileStorageError } = await supabase.storage
    .from("files")
    .upload(fileName, newResource.file);

  if (imageStorageError || fileStorageError) {
    await supabase.from("resources").delete().eq("id", data.id);
    console.error(imageStorageError);
    console.error(fileStorageError);
    throw new Error(
      "The file or image was not uploaded and the resource was not created"
    );
  }

  return data;
}

export async function updateResourceApi(updatedResource, id) {
  const hasImagePath = updatedResource.image?.startsWith?.(supabaseUrl);
  const hasFilePath = updatedResource.file?.startsWith?.(supabaseUrl);

  console.log(hasImagePath, hasFilePath);

  const imageName = `${Math.random()}-${updatedResource.image.name}`.replaceAll(
    "/",
    ""
  );
  const fileName = `${Math.random()}-${updatedResource.file.name}`.replaceAll(
    "/",
    ""
  );

  console.log(imageName, fileName);

  const imagePath = hasImagePath
    ? updatedResource.image
    : `${supabaseUrl}/storage/v1/object/public/images/${imageName}`;

  const filePath = hasFilePath
    ? updatedResource.file
    : `${supabaseUrl}/storage/v1/object/public/files/${fileName}`;

  // console.log(imagePath, filePath);

  const { data, error } = await supabase
    .from("resources")
    .update({ ...updatedResource, image: imagePath, file: filePath })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Resource could not be updated");
  }

  if (hasImagePath && hasFilePath) return data;

  const { error: imageStorageError } = await supabase.storage
    .from("images")
    .upload(imageName, updatedResource.image);

  const { error: fileStorageError } = await supabase.storage
    .from("files")
    .upload(fileName, updatedResource.file);

  // if (imageStorageError || fileStorageError) {
  //   await supabase.from("resources").delete().eq("id", data.id);
  //   console.error(imageStorageError);
  //   console.error(fileStorageError);
  //   throw new Error(
  //     "The file or image was not uploaded and the resource was not updated"
  //   );
  // }

  return data;
}

export async function deleteResource(id) {
  const { data, error } = await supabase
    .from("resources")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Resource could not be deleted");
  }

  return data;
}

export async function uploadFileApi(file) {
  const imageName = `${Math.random()}-${file.image}`.replaceAll("/", "");

  const { data, error } = await supabase.storage
    .from("test-bucket")
    .upload("/public/abc123.jpg", file.image, {
      cacheControl: "3600",
      upsert: false,
      contentType: "image/*",
    });

  if (error) {
    console.error(error);
    throw new Error("File could not be uploaded");
  }

  return data;
}
