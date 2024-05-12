import { exampleCreateMessage } from "../../services/messages";

export async function sendMessage(data: any) {
  try {
    console.log(data);
    // const m = await createMessage(data);
    const m = await exampleCreateMessage();
    return { status: 0, result: m };
  } catch (error) {
    return { status: 1, error };
  }
}
