import supabase from "./supabase";

export async function getFeedback() {
  const { data, error } = await supabase.from("feedback").select("*");

  if (error) {
    console.error(error);
    throw new Error("Could not retrieve feedback");
  }
  //   console.log(data);
  return data;
}

export async function provideFeedbackApi(feedback) {
  const { data, error } = await supabase.from("feedback").insert(feedback);
  if (error) {
    console.error(error);
    throw new Error("Could not provide feedback");
  }

  return data;
}
