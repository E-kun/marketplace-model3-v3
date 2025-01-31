import supabase, { supabaseUrl } from "./supabase";
import { subjects } from "../data/subjects";

export async function getResources() {
  const { data, error } = await supabase.from("resources").select("*");

  // console.log(typeof data[6].images);
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
  const filePaths = [];
  const imagePaths = [];
  const fileNames = [];
  const imageNames = [];
  for (let i = 0; i < newResource.files.length; i++) {
    const hasFilePath = newResource.files[i]?.startsWith?.(supabaseUrl);

    const fileName = `${Math.random()}-${newResource.files[i].name}`.replaceAll(
      "/",
      ""
    );
    fileNames.push(fileName);
    const filePath = hasFilePath
      ? newResource.files[i]
      : `${supabaseUrl}/storage/v1/object/files/${newResource.author}/${newResource.name}/${fileName}`;

    console.log(filePath);
    filePaths.push(filePath);
  }

  for (let i = 0; i < newResource.images.length; i++) {
    const hasImagePath = newResource.images[i]?.startsWith?.(supabaseUrl);

    const imageName = `${Math.random()}-${
      newResource.images[i].name
    }`.replaceAll("/", "");
    imageNames.push(imageName);
    const imagePath = hasImagePath
      ? newResource.images[i]
      : `${supabaseUrl}/storage/v1/object/public/images/${newResource.author}/${newResource.name}/${imageName}`;

    console.log(imagePaths);
    imagePaths.push(imagePath);
  }

  const { data, error } = await supabase
    .from("resources")
    .insert([
      {
        ...newResource,
        images: imagePaths,
        files: filePaths,
      },
    ])
    .select()
    .single();
  if (error) {
    console.error(error);
    throw new Error("Resource could not be created");
  }

  fileNames.forEach(async (file, index) => {
    // console.log(file, index, newResource.files[index]);
    const { error: fileStorageError } = await supabase.storage
      .from("files")
      .upload(
        `${newResource.author}/${newResource.name}/${file}`,
        newResource.files[index]
      );
    if (fileStorageError) {
      await supabase.from("resources").delete().eq("id", data.id);
      console.error(fileStorageError);
      throw new Error(
        "The file was not uploaded and the resource was not created"
      );
    }
  });

  imageNames.forEach(async (image, index) => {
    // console.log(image, index, newResource.images[index]);
    const { error: imageStorageError } = await supabase.storage
      .from("images")
      .upload(
        `${newResource.author}/${newResource.name}/${image}`,
        newResource.images[index]
      );
    if (imageStorageError) {
      await supabase.from("resources").delete().eq("id", data.id);
      console.error(imageStorageError);
      throw new Error(
        "The image was not uploaded and the resource was not created"
      );
    }
  });

  return data;
}

export async function updateResourceApi(
  updatedResource,
  id,
  oldImages,
  oldFiles
) {
  const filePaths = [];
  const imagePaths = [];
  const fileNames = [];
  const imageNames = [];
  for (let i = 0; i < updatedResource.files.length; i++) {
    const hasFilePath = updatedResource.files[i]?.startsWith?.(supabaseUrl);

    const fileName = `${Math.random()}-${
      updatedResource.files[i].name
    }`.replaceAll("/", "");
    fileNames.push(fileName);
    const filePath = hasFilePath
      ? updatedResource.files[i]
      : `${supabaseUrl}/storage/v1/object/files/${updatedResource.author}/${updatedResource.name}/${fileName}`;

    filePaths.push(filePath);
  }

  for (let i = 0; i < updatedResource.images.length; i++) {
    const hasImagePath = updatedResource.images[i]?.startsWith?.(supabaseUrl);

    const imageName = `${Math.random()}-${
      updatedResource.images[i].name
    }`.replaceAll("/", "");
    imageNames.push(imageName);
    const imagePath = hasImagePath
      ? updatedResource.images[i]
      : `${supabaseUrl}/storage/v1/object/public/images/${updatedResource.author}/${updatedResource.name}/${imageName}`;

    imagePaths.push(imagePath);
  }

  const { data, error } = await supabase
    .from("resources")
    .update({ ...updatedResource, images: imagePaths, files: filePaths })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Resource could not be updated");
  }

  oldFiles.forEach(async (file) => {
    // console.log(file.split("files/")[1]);
    const { error: filesDeletionError } = await supabase.storage
      .from("files")
      .remove(file.split("files/")[1]);
    if (filesDeletionError) {
      throw new Error("Unable to delete old files");
    }
  });

  oldImages.forEach(async (image) => {
    // console.log(image.split("images/")[1]);
    const { error: imagesDeletionError } = await supabase.storage
      .from("images")
      .remove(image.split("images/")[1]);
    if (imagesDeletionError) {
      throw new Error("Unable to delete old images");
    }
  });

  fileNames.forEach(async (file, index) => {
    const { error: fileStorageError } = await supabase.storage
      .from("files")
      .upload(
        `${updatedResource.author}/${updatedResource.name}/${file}`,
        updatedResource.files[index]
      );
    if (fileStorageError) {
      await supabase.from("resources").delete().eq("id", data.id);
      console.error(fileStorageError);
      throw new Error(
        "The file was not uploaded and the resource was not created"
      );
    }
  });

  imageNames.forEach(async (image, index) => {
    const { error: imageStorageError } = await supabase.storage
      .from("images")
      .upload(
        `${updatedResource.author}/${updatedResource.name}/${image}`,
        updatedResource.images[index]
      );
    if (imageStorageError) {
      await supabase.from("resources").delete().eq("id", data.id);
      console.error(imageStorageError);
      throw new Error(
        "The image was not uploaded and the resource was not created"
      );
    }
  });

  return data;
}

export async function deleteResource(id) {
  const { data, error } = await supabase
    .from("resources")
    .delete()
    .eq("id", id);

  // const { error: filesDeletionError } = await supabase.storage
  //   .from("files")
  //   .remove([`${updatedResource.author}/${updatedResource.name}`]);

  // const { error: imagesDeletionError } = await supabase.storage
  //   .from("images")
  //   .remove([`${updatedResource.author}/${updatedResource.name}`]);

  if (error) {
    // if (error || filesDeletionError || imagesDeletionError) {
    console.error(error);
    throw new Error("Resource could not be deleted");
  }

  return data;
}
