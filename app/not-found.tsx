import StyledButton from "@/components/UI/styled-button/styled-button";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>Not Found!</h1>
      <p>Unfortunately, we could not find the requested page or resource.</p>
      <StyledButton className="margin margin-bottom" href="../">
        Go Back
      </StyledButton>
    </main>
  );
}
