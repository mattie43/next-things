export const generateUID = () => {
  "use client";
  const timestamp = Date.now().toString(36); // Convert timestamp to base-36
  const randomValues = new Uint8Array(4);
  window.crypto.getRandomValues(randomValues); // Get 4 random bytes
  const randomString = Array.from(randomValues)
    .map((byte) => byte.toString(36))
    .join("");
  return `${timestamp}-${randomString}`;
};
