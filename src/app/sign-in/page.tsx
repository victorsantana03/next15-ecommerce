import { SignIn } from "@clerk/nextjs";

export default function SignInPage({
  searchParams: { redirectUrl },
}: {
  searchParams: { redirectUrl: string };
}) {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <SignIn signUpUrl="/sign-up" redirectUrl={redirectUrl} />
        </div>
      </div>
    </section>
  );
}
