'use client'
import Link from "next/link"
const error = ({
  error,reset
}) => {
  return (
    <div className="flex mt-52 flex-col items-center justify-center min-h-[500px] ">
    <h1 className="text-4xl font-semibold text-gray-300">Oops! Page not found</h1>
    <p className="mt-2 text-gray-300">
      The page you are looking for might have been removed or is temporarily unavailable.
    </p>
    <Link href="/" className="mt-4 text-orange-500 hover:underline">Go back to home
    </Link>
  </div>
  )
}

export default error