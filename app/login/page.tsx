// import Image from "next/image";
// import Form from "@/components/form";
// import Link from "next/link";

// export default function Login() {
//   return (
//     <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
//       <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
//         <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
//           <Link href="/">
//             <Image
//               src="/logo.png"
//               priority
//               alt="Logo"
//               className="h-10 w-10 rounded-full"
//               width={20}
//               height={20}
//             />
//           </Link>
//           <h3 className="text-xl font-semibold">Sign In</h3>
//           <p className="text-sm text-gray-500">
//             Use your email and password to sign in
//           </p>
//         </div>
//         <Form type="login" />
//       </div>
//     </div>
//   );
// }

import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Form from "@/components/form";
import Link from "next/link";

export default function Login() {
  return (
    <div className="background">
      <div
        className="container-fluid bg-black text-orange"
        style={{ height: "100vh" }}
      >
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <div className="col-md-6 text-center">
            <Link href="/">
              <Image
                src="/logo.png"
                priority
                alt="Logo"
                className="h-10 w-10 rounded-full mb-4"
                width={150} // Adjusted to be a bit larger
                height={150}
              />
            </Link>
            <p className="lead">Sign in to B1tMus1c</p>
            {/* <p className="lead">Use your email and password to sign in.</p> */}
            <Form type="login" />
            <p className="text-orange">
              {/* Don't have an account? */}
              <Link href="/register">
                <p className="text-orange ml-2"></p>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
