export default function useToken() {
  // const runtimeConfig = useRuntimeConfig();
  const generateToken = async (props) => {
    try {
      const appKey = btoa(props.appKey);
      const appSecret = btoa(props.appSecret);
      const final = btoa(`${appKey}:${appSecret}`);

      const formData = new URLSearchParams({
        grant_type: "client_credentials",
      });

      const response = await fetch(`${props.endpoint}/v2/auth/token`, {
        method: "POST",
        headers: {
          Authorization: `Basic ${final}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      const responseData = await response.json();
      if (response.ok) return { success: true, data: responseData };

      return { success: false, message: "Failed to obtain token", error: responseData };
    } catch (error) {
      console.error("Failed to obtain token:", error);
      return { success: false, message: "Failed to obtain token", error: error.message };
    }
  };

  return {
    generateToken,
  };
}

/**
 * const { generateToken } = useToken()
 * const response = generateToken({appKey, appSecret, appSecret})
 */
