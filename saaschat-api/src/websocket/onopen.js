/**
 * @param {MessageEvent} event
 */
export async function onopen(event) {
  try {
    console.log("Open");
  } catch (error) {
    console.log(error);
  }
}
