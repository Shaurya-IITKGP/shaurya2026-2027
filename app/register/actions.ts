"use server";

interface RegistrationData {
  name: string;
  college: string;
  mobile: string;
  email: string;
}

interface RegistrationResult {
  success: boolean;
  message: string;
}

export async function registerParticipant(
  data: RegistrationData
): Promise<RegistrationResult> {
  const apiUrl = process.env.SHAURYA_QR_API_URL;

  if (!apiUrl) {
    return {
      success: false,
      message: "Registration service is not configured. Please contact the administrator.",
    };
  }

  // Client-side-style validation (defence in depth)
  const name = data.name?.trim() ?? "";
  const college = data.college?.trim() ?? "";
  const mobile = data.mobile?.replace(/\D/g, "") ?? "";
  const email = data.email?.trim().toLowerCase() ?? "";

  if (name.length < 3) return { success: false, message: "Please enter your full name." };
  if (college.length < 2) return { success: false, message: "Please enter a valid college name." };
  if (!/^[6-9]\d{9}$/.test(mobile))
    return { success: false, message: "Please enter a valid 10-digit Indian mobile number." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { success: false, message: "Please enter a valid email address." };

  try {
    const response = await fetch(`${apiUrl}/api/public/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, college, mobile, email }),
    });

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      return {
        success: false,
        message: payload.error || "Registration failed. Please try again.",
      };
    }

    return {
      success: true,
      message: payload.message || "Registration successful!",
    };
  } catch {
    return {
      success: false,
      message: "Could not reach the registration server. Please try again later.",
    };
  }
}
