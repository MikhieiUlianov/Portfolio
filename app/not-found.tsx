import StyledButton from "@/components/UI/styled-button/styled-button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Not Found!</h1>
      <p>Unfortunately, we could not find the requested page or resource.</p>
      <StyledButton className="margin" href="../">
        Go Back
      </StyledButton>
    </main>
  );
}
