"use server";

export async function sendContactMessage(formData: FormData) {
  const values = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("https://formspree.io/f/xrgovnbj", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error("Error al enviar el mensaje");
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}