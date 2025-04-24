export async function POST(request) {
  try {
    const { email, password } = await request.json();
    
    // Get admin credentials from environment variables
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // Check if credentials match
    if (email === adminEmail && password === adminPassword) {
      return new Response(
        JSON.stringify({ success: true, message: "Login successful" }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid credentials" }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    console.error("Admin login error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Server error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
