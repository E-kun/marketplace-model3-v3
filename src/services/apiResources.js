import supabase from "./supabase";
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
  console.log(newResource);
  // let query = supabase.from("resources");
  // query = query.insert(newResource);
  //   if (!id) query = query.insert([{ ...newResource }]);
  const { data, error } = await supabase.from("resources").insert(newResource);
  if (error) {
    console.error(error);
    throw new Error("Resource could not be created");
  }

  return data;
}

export async function updateResourceApi(updatedResource, id) {
  console.log(updatedResource, id);
  const { data, error } = await supabase
    .from("resources")
    .update(updatedResource)
    .eq("id", id);
  // .select().single();
  if (error) {
    console.error(error);
    throw new Error("Resource could not be updated");
  }

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
