import { useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/hooks/useUser";

import loginStyles from "@/styles/Login.module.css";
import ErrorMessage from "@/components/errorMessage.js";

export default function TwoFactor({ token }) {
  const router = useRouter();

  const [error, setError] = useState("");
  const { setUserSession } = useUser();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const code = document.getElementById("verification_code").value;
    fetchValidation(code);
  };

  const fetchValidation = async (code) => {
    await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Token": "1234567890",
      },
      body: JSON.stringify({
        token: token,
        code: code,
      }),
    })
      .then(async (response) => {
        if (response.status != 200) {
          const data = await response.json();
          setError(data.message);
        } else {
          const data = await response.json();
          setUserSession(true);
          router.push("/dashboard");
        }
      })
      .catch((error) => {
        console.log("Error");
        setError(error);
      });
  };

  return (
    <div className={loginStyles.form}>
      <form className={loginStyles.form}>
        <input
          className={loginStyles.input}
          id="verification_code"
          name="code"
          type="text"
          placeholder="Verification Code"
        />
        <button
          className={loginStyles.button}
          type="submit"
          onClick={handleOnSubmit}
        >
          Verify
        </button>
      </form>
      <a style={{cursor:"pointer"}}>Resend the code</a>
      {error && <ErrorMessage message={error} />}
    </div>
  );
}
