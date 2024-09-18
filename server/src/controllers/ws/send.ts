export async function sendMessage(data: any) {
  try {
    console.log(data);

    return {status: 0,};
  } catch (error) {
    return {status: 1, error};
  }
}
